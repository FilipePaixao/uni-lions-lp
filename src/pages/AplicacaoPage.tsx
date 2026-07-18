import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react'
import {
  type AnswerOption,
  type Answers,
  type Outcome,
  buildOrder,
  getQuestion,
  route,
} from '../data/questions'
import { track } from '../lib/analytics'

type Screen = 'intro' | 'question' | 'contact' | Outcome

const SLOTS = [
  { d: 'Seg 30', t: '09:00' },
  { d: 'Seg 30', t: '14:00' },
  { d: 'Ter 01', t: '10:00' },
  { d: 'Ter 01', t: '16:00' },
  { d: 'Qua 02', t: '11:00' },
  { d: 'Qua 02', t: '15:00' },
  { d: 'Qui 03', t: '09:30' },
  { d: 'Qui 03', t: '17:00' },
]

export default function AplicacaoPage() {
  const [screen, setScreen] = useState<Screen>('intro')
  const [answers, setAnswers] = useState<Answers>({})
  const [qi, setQi] = useState(-1)
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)
  const [resourceTaken, setResourceTaken] = useState(false)

  const order = useMemo(() => buildOrder(answers), [answers])

  useEffect(() => {
    document.title = 'Aplicação — Ambidestria Executiva'
    track('application_start', { page_variant: 'aplicacao_v4' })
    let robots = document.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'noindex, nofollow')
    return () => {
      document.title = 'Ambidestria Executiva | Uni Lions'
      robots?.setAttribute('content', 'index, follow')
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [screen, qi])

  const progress = useMemo(() => {
    if (screen === 'A' || screen === 'B' || screen === 'C') return 1
    if (screen === 'contact') return 0.92
    if (qi < 0) return 0
    const total = order.length || 8
    return Math.min(qi / total, 0.9)
  }, [screen, qi, order.length])

  const qcount = useMemo(() => {
    if (screen === 'contact') return 'Quase lá'
    if (screen === 'question' && qi >= 0 && qi < order.length) {
      const q = getQuestion(order[qi])
      return q ? `Pergunta ${q.n} de 8` : ''
    }
    return ''
  }, [screen, qi, order])

  const currentQ = screen === 'question' && qi >= 0 ? getQuestion(order[qi]) : undefined

  const start = () => {
    setQi(0)
    setScreen('question')
  }

  const choose = useCallback(
    (opt: AnswerOption) => {
      if (!currentQ) return
      const nextAnswers: Answers = {
        ...answers,
        [currentQ.id]: {
          label: opt.t,
          tier: opt.tier,
          special: opt.special ?? null,
          weight: opt.weight ?? 1,
        },
      }
      setAnswers(nextAnswers)
      const nextOrder = buildOrder(nextAnswers)
      window.setTimeout(() => {
        const nextQi = qi + 1
        if (nextQi >= nextOrder.length) {
          setScreen('contact')
        } else {
          setQi(nextQi)
        }
      }, 260)
    },
    [answers, currentQ, qi],
  )

  const goBack = () => {
    if (screen === 'contact') {
      setQi(order.length - 1)
      setScreen('question')
      return
    }
    if (screen === 'question') {
      if (qi > 0) setQi(qi - 1)
      else {
        setQi(-1)
        setScreen('intro')
      }
    }
  }

  const submitApp = (e: FormEvent) => {
    e.preventDefault()
    const r = route(answers)
    // (no build: dispara evento "Aplicação enviada" no Growai Ecossistema)
    setScreen(r)
  }

  return (
    <div className="app-quiz">
      <div className="pbar-wrap">
        <div className="pbar" style={{ width: `${progress * 100}%` }} />
      </div>
      <div className="topnav">
        <div className="brand">
          <img src="/assets/unilions-logo-white.png" alt="Uni Lions" width={968} height={201} />
        </div>
        <div className="qcount">{qcount}</div>
      </div>

      <div className="stage">
        <section className={`screen${screen === 'intro' ? ' active' : ''}`}>
          <div className="eyebrow">Aplicação para a turma</div>
          <h1 className="intro-h">Aplicação para a turma — Ambidestria Executiva.</h1>
          <p className="qsub" style={{ fontSize: '1.08rem', color: 'var(--mist)' }}>
            São 8 perguntas rápidas (menos de 2 minutos) pra entender o seu momento e ver se faz
            sentido a gente conversar. Sem compromisso.
          </p>
          <div className="intro-line">
            Avaliamos cada aplicação individualmente. <b>Nem todo mundo entra</b> — e tudo bem. É
            assim que a gente garante uma turma de gente no mesmo nível.
          </div>
          <button type="button" className="btn btn-primary" onClick={start}>
            Começar a aplicação{' '}
            <svg className="ic" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <div className="intro-meta">
            <span>
              <svg className="ic" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>{' '}
              Menos de 2 minutos
            </span>
            <span>
              <svg className="ic" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>{' '}
              Suas respostas ficam entre a gente
            </span>
          </div>
        </section>

        <section className={`screen${screen === 'question' ? ' active' : ''}`}>
          {currentQ && (
            <>
              <div className="eyebrow">Pergunta {currentQ.n}</div>
              <h1 className="q">{currentQ.title}</h1>
              {currentQ.sub ? <p className="qsub">{currentQ.sub}</p> : null}
              <div className="opts">
                {currentQ.opts.map((o) => {
                  const sel = answers[currentQ.id]?.label === o.t
                  return (
                    <button
                      key={o.t}
                      type="button"
                      className={`opt${sel ? ' sel' : ''}`}
                      onClick={() => choose(o)}
                    >
                      <span className="marker">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span>{o.t}</span>
                    </button>
                  )
                })}
              </div>
              <button
                type="button"
                className={`back${qi === 0 ? ' hidden' : ''}`}
                onClick={goBack}
              >
                <svg className="ic" viewBox="0 0 24 24">
                  <path d="M15 18l-6-6 6-6" />
                </svg>{' '}
                Voltar
              </button>
            </>
          )}
        </section>

        <section className={`screen${screen === 'contact' ? ' active' : ''}`}>
          <div className="eyebrow">Quase lá</div>
          <h1 className="q">Quase lá. Pra onde mandamos sua avaliação?</h1>
          <p className="qsub">
            Vamos analisar suas respostas e, se houver fit, liberar o agendamento da sua conversa de
            avaliação.
          </p>
          <form onSubmit={submitApp}>
            <div className="field">
              <label htmlFor="f-nome">Nome completo</label>
              <input id="f-nome" type="text" required placeholder="Seu nome" />
            </div>
            <div className="field">
              <label htmlFor="f-email">E-mail corporativo</label>
              <input id="f-email" type="email" required placeholder="voce@suaempresa.com.br" />
            </div>
            <div className="field">
              <label htmlFor="f-whats">WhatsApp</label>
              <input
                id="f-whats"
                type="tel"
                required
                inputMode="tel"
                placeholder="(11) 90000-0000"
              />
            </div>
            <div className="field">
              <label htmlFor="f-empresa">Empresa</label>
              <input id="f-empresa" type="text" required placeholder="Nome da empresa" />
            </div>
            <div className="field">
              <label htmlFor="f-cargo">Seu cargo</label>
              <input id="f-cargo" type="text" required placeholder="CEO, Sócio, Diretor..." />
            </div>
            <div className="privacy">
              <svg className="ic" viewBox="0 0 24 24">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              <span>
                Seus dados são usados só para avaliar sua aplicação e entrar em contato sobre o
                programa. Não compartilhamos com terceiros.{' '}
                <a href="#">Política de Privacidade</a>.
              </span>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Enviar aplicação
            </button>
          </form>
          <button type="button" className="back" onClick={goBack}>
            <svg className="ic" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>{' '}
            Voltar
          </button>
        </section>

        <section className={`screen${screen === 'A' ? ' active' : ''}`}>
          <div className="outcome-badge badge-ok">
            <svg className="ic" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>{' '}
            Aplicação aprovada
          </div>
          <h1 className="out-h">Sua aplicação foi aprovada. Vamos conversar.</h1>
          <p className="out-sub">
            Pelas suas respostas, faz sentido a gente se falar. O próximo passo é reservar sua
            conversa de avaliação — uma conversa de verdade sobre a sua operação, não um pitch.
          </p>
          <div className="expect">
            <div className="expect-item">
              <svg className="ic" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              É uma conversa de ~30 min, 1:1, sem compromisso de compra.
            </div>
            <div className="expect-item">
              <svg className="ic" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              A gente mapeia junto onde a IA da sua empresa está rodando órfã — sem dono, sem regra
              — e o que um plano estruturado mudaria.
            </div>
            <div className="expect-item">
              <svg className="ic" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
              Você sai da conversa com clareza, mesmo que não entre no programa.
            </div>
          </div>
          <div className="cal-embed">
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.15rem',
                color: 'var(--paper)',
                marginBottom: 4,
              }}
            >
              Escolha o melhor horário
            </div>
            <div style={{ fontSize: '.85rem', color: 'var(--mist-2)' }}>
              Conversa de avaliação · 30 min · online
            </div>
            <div className="cal-grid">
              {SLOTS.map((s, i) => (
                <button
                  key={`${s.d}-${s.t}`}
                  type="button"
                  className={`cal-slot${selectedSlot === i ? ' sel' : ''}`}
                  onClick={() => setSelectedSlot(i)}
                >
                  <span className="d">{s.d}</span>
                  {s.t}
                </button>
              ))}
            </div>
            <p className="cal-note">
              Agenda real do time — o calendário do Growai Ecossistema entra aqui no build.
            </p>
          </div>
          <p className="scarcity">
            A turma é limitada e cada conversa é individual. Reserve o seu horário enquanto há
            agenda.
          </p>
          <div className={`confirm-msg${selectedSlot != null ? ' show' : ''}`}>
            <svg className="ic" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span>
              Horário reservado. Você vai receber a confirmação no WhatsApp e no e-mail, com
              lembrete 24h e 1h antes.
            </span>
          </div>
        </section>

        <section className={`screen${screen === 'B' ? ' active' : ''}`}>
          <div className="outcome-badge badge-soft">
            <svg className="ic" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>{' '}
            Aplicação recebida
          </div>
          <h1 className="out-h">Recebemos sua aplicação.</h1>
          <p className="out-sub">
            Pelo que você respondeu, faz sentido a gente te mandar primeiro alguns materiais pra
            você avaliar com calma — e quando for a hora, a conversa fica de pé.
          </p>
          <div className="resource">
            <h3>Seu material começa pelo essencial</h3>
            <p>
              Separamos um material que ataca direto o ponto que mais te incomoda hoje. Ele já te
              adianta uma parte do trabalho, antes mesmo de qualquer conversa.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              disabled={resourceTaken}
              style={resourceTaken ? { opacity: 0.7 } : undefined}
              onClick={() => setResourceTaken(true)}
            >
              {resourceTaken ? (
                <>
                  <svg className="ic" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Material a caminho do seu e-mail
                </>
              ) : (
                <>
                  Baixar o material{' '}
                  <svg className="ic" viewBox="0 0 24 24">
                    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                  </svg>
                </>
              )}
            </button>
          </div>
          <p style={{ fontSize: '.95rem', color: 'var(--mist-2)' }}>
            Quando fizer sentido pro seu momento, a gente conversa. Sem pressa.
          </p>
        </section>

        <section className={`screen${screen === 'C' ? ' active' : ''}`}>
          <div className="outcome-badge badge-soft">
            <svg className="ic" viewBox="0 0 24 24">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>{' '}
            Obrigado
          </div>
          <h1 className="out-h">Obrigado pela sua honestidade.</h1>
          <p className="out-sub">
            Pelo seu momento agora, o programa provavelmente não é o encaixe certo — e a gente
            prefere te dizer isso a te vender algo que não serve.
          </p>
          <div className="resource">
            <h3>Mas você não sai de mãos vazias</h3>
            <p>
              Separamos um material gratuito que pode te ajudar a destravar o assunto da IA na sua
              empresa, no seu tempo.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              disabled={resourceTaken}
              style={resourceTaken ? { opacity: 0.7 } : undefined}
              onClick={() => setResourceTaken(true)}
            >
              {resourceTaken ? (
                <>
                  <svg className="ic" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>{' '}
                  Material a caminho do seu e-mail
                </>
              ) : (
                <>
                  Receber o material gratuito{' '}
                  <svg className="ic" viewBox="0 0 24 24">
                    <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </section>

        <footer>
          Ambidestria Executiva · um programa <span className="lion">Uni Lions</span>
        </footer>
      </div>
    </div>
  )
}
