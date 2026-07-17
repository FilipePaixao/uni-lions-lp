import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FacultyCarousel from '../components/FacultyCarousel'
import { useReveal } from '../hooks/useReveal'
import { useFab } from '../hooks/useFab'
import { track, trackCtaClick } from '../lib/analytics'

const NAV_SECTIONS = [
  { href: '#tese', label: 'Método' },
  { href: '#entregaveis', label: 'Entregáveis' },
  { href: '#jornada', label: 'Jornada' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
] as const

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export default function LandingPage() {
  useReveal()
  useFab()

  const [menuOpen, setMenuOpen] = useState(false)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => {
    track('landing_view', { page_variant: 'landing_v4' })
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 900px)').matches) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    if (!menuOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        menuBtnRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    }, 0)

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKey)
      document.body.classList.remove('nav-open')
    }
  }, [menuOpen])

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Ir para o conteúdo
      </a>

      <header className={`topbar${menuOpen ? ' is-open' : ''}`}>
        <div className="wrap topbar-inner">
          <Link to="/" className="topbar-logo">
            <img
              src="/assets/unilions-logo-capa.jpg"
              alt="Uni Lions"
              width={3168}
              height={792}
            />
          </Link>

          <nav className="topbar-nav" aria-label="Seções da página">
            <ul className="topbar-nav-list">
              {NAV_SECTIONS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="topbar-actions">
            <button
              ref={menuBtnRef}
              type="button"
              className="topbar-menu-btn"
              aria-expanded={menuOpen}
              aria-controls={panelId}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {menuOpen ? 'Fechar menu de seções' : 'Abrir menu de seções'}
              </span>
              <span className="topbar-menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
            <Link
              to="/aplicacao"
              className="btn btn-primary"
              onClick={() => trackCtaClick('header', 'Aplicar para a turma')}
            >
              <span className="lbl">Aplicar para a turma</span>
            </Link>
          </div>
        </div>

        {menuOpen ? (
          <>
            <div id={panelId} ref={panelRef} className="topbar-panel">
              <nav aria-label="Seções da página">
                <ul className="topbar-panel-list">
                  {NAV_SECTIONS.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <button
              type="button"
              className="topbar-backdrop"
              aria-label="Fechar menu de seções"
              onClick={() => {
                setMenuOpen(false)
                menuBtnRef.current?.focus()
              }}
            />
          </>
        ) : null}
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section className="hero" data-aura-section="hero" aria-labelledby="hero-title">
          <div className="hero-bg" aria-hidden="true">
            <img src="/assets/hero-construcao.jpg" alt="" />
          </div>
          <div className="wrap">
            <div className="hero-inner">
              <p className="hero-brand rv">Ambidestria Executiva</p>
              <p className="hero-micro rv" style={{ marginBottom: '10px' }}>
                Programa executivo presencial · São Paulo · 50h · turma única
              </p>
              <h1 id="hero-title" className="rv">
                Enxergue o negócio inteiro e <span className="accent">decida com clareza</span> no cenário que ninguém mais consegue prever.
              </h1>
              <p className="sub rv">
                Essa é a virada: parar de gerir no controle e passar a decidir por contexto, com visão sistêmica e a IA como instrumento de leitura. Em 50h presenciais em São Paulo você sai com um plano de transformação pronto para se defender no presente e avançar para um futuro promissor.
              </p>
              <div className="hero-cta rv">
                <Link
                  to="/aplicacao"
                  className="btn btn-primary btn-lg"
                  onClick={() => trackCtaClick('hero', 'Aplicar para a turma')}
                >
                  Aplicar para a turma <Arrow />
                </Link>
                <a href="#tese" className="btn btn-ghost btn-lg">
                  Ver como funciona
                </a>
              </div>
              <p className="hero-micro rv">Submissão para se candidatar à vaga, leva 2 minutos. Sem compromisso de compra.</p>
            </div>
          </div>
        </section>

        {/* PROVA FACTUAL */}
        <div className="proof-bar" data-aura-section="prova-factual" role="region" aria-label="Dados do programa">
          <div className="wrap">
            <ul className="items rv">
              <li>
                <span className="fact-label">Carga</span>
                <strong>50 horas</strong>
              </li>
              <li>
                <span className="fact-label">Formato</span>
                <strong>Presencial em SP</strong>
              </li>
              <li className="fact-accent">
                <span className="fact-label">Período</span>
                <strong>22/08 a 10/10/2026</strong>
              </li>
              <li>
                <span className="fact-label">Turma</span>
                <strong>Única</strong>
              </li>
              <li>
                <span className="fact-label">Entrada</span>
                <strong>Por aplicação</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* 1 · O CENÁRIO */}
        <section className="sec" data-aura-section="cenario">
          <div className="wrap body">
            <FacultyCarousel />
            <div className="stat rv">
              <div className="big">43%</div>
              <div className="txt">
                <b>dos CEOs brasileiros não se sentem confortáveis para decidir apoiados em IA.</b>
                <span className="src">Fundação Dom Cabral</span>
              </div>
            </div>
            <div className="sec-num rv">
              <b>01</b> <i>O cenário</i>
            </div>
            <h2 className="h2 display-italic rv">Você não ficou mais lento. O mundo ficou mais rápido.</h2>
            <p className="rv">
              Por décadas era possível gerir olhando pelo retrovisor. O mercado era previsível, e o manual funcionava: as metas eram determinadas de cima, a ordem é cumprida, no fim do mês se cobra o resultado. Comando e controle. Funcionava porque o amanhã era parecido com ontem.
            </p>
            <p className="rv big-serif">Esse mercado acabou.</p>
            <p className="rv">
              Hoje a mudança vem rápido demais pro manual antigo. A tecnologia de ontem já é padrão. O concorrente que você nem via no radar nasceu semana passada e já disputa o seu cliente. É como se a neblina baixasse no meio do voo, e o horizonte que te guiava sumisse. Ela baixou pra todo mundo ao mesmo tempo.
            </p>
            <div className="grid g2 rv" style={{ margin: '30px 0' }}>
              <div className="card">
                <div className="icon-b">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                    <path d="M9 9v.01M9 13v.01M9 17v.01" />
                  </svg>
                </div>
                <h3>Se você é empresário empreendedor</h3>
                <p>sente o chão mudar debaixo dos pés. O que deu certo por vinte anos começa a render menos, e ninguém explica direito por quê.</p>
              </div>
              <div className="card">
                <div className="icon-b">
                  <svg viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Se você é executivo</h3>
                <p>sente medo de ficar pra trás enquanto os pares aprenderam a decidir com IA e método. Quem puxa a transformação ganha as mesas onde as decisões acontecem.</p>
              </div>
            </div>
            <p className="rv wide">Ninguém aqui vai te vender bola de cristal. Prever o mercado sempre foi ilusão, com ou sem IA.</p>
            <div className="callout accent rv big">
              <span className="lbl">A proposta central da imersão em Ambidestria Executiva</span>
              <p>
                Ensinar o empresário empreendedor ou ao líder executivo um <span className="mech">novo método de gestão</span>, onde as ferramentas tecnológicas te auxiliam a enxergar a organização de forma sistêmica, te auxiliando a garantir os resultados operacionais que te sustentam hoje, porém te ensinando estratégias para você conquistar um futuro muito mais próspero e sustentável.
              </p>
            </div>
          </div>
        </section>

        {/* 2 · O DILEMA */}
        <section className="sec sec-line" data-aura-section="dilema" id="tese">
          <div className="wrap">
            <div className="body">
              <div className="sec-num rv">
                <b>02</b> <i>O dilema</i>
              </div>
              <h2 className="h2 wide rv">O grande dilema é como proteger o caixa hoje e fazer a organização crescer nos próximos anos?</h2>
              <p className="rv">
                De um lado, a operação que paga as contas. Do outro, o barulho da IA e a sensação de que ficar parado é ficar pra trás. Aí volta a pergunta: cuido do que já funciona, ou aposto no que vem?
              </p>
              <div className="quote rv">
                <p>"Tenho vinte anos de estrada e, pela primeira vez, sinto que as regras mudaram debaixo dos meus pés."</p>
              </div>
            </div>
            <div className="body" style={{ marginTop: '8px' }}>
              <p className="rv big-serif">
                Uma mão defende o que paga as contas.
                <br />
                A outra constrói o amanhã.
              </p>
              <div className="callout accent rv big">
                <p>
                  Na imersão em Ambidestria Executiva você vai entender que <span className="mech">a tecnologia sem estratégia não serve para nada</span>. A tecnologia deve servir como instrumento para te auxiliar a decidir com clareza e avançar para o crescimento.
                </p>
              </div>

              {/* Oséias */}
              <figure className="prof rv" id="prof-oseias-gomes">
                <div className="ph">
                  <img src="/assets/prof-oseias-gomes.jpg" alt="Oséias Gomes, proprietário e CEO da Odonto Excellence Franchising" loading="lazy" />
                </div>
                <div className="qc">
                  <blockquote>
                    <p>
                      "<span className="mech">É uma grande ilusão a tese de que eu devo largar o operacional e focar apenas no estratégico.</span> Minha organização com mais de 1.000 clínicas fatura R$ 200 milhões por mês e até hoje eu não largo o operacional, pois daí é que pago as contas. Nem por isso preciso estar grudado na operação por 24h; o que precisamos é ter uma visão estratégica para crescer, guiada por dados convertidos em informações."
                    </p>
                  </blockquote>
                  <figcaption className="who">
                    <b>Oséias Gomes</b>
                    <span>Proprietário e CEO da Odonto Excellence Franchising</span>
                  </figcaption>
                </div>
              </figure>

              {/* Pauliki Start → End (logo abaixo de Oséias, conforme brief) */}
              <figure className="prof lg rv" id="prof-marcio-pauliki">
                <div className="ph">
                  <img src="/assets/prof-marcio-pauliki.jpg" alt="Marcio Pauliki ao lado da vaca que ilustra sua tese: vaca não dá leite" loading="lazy" />
                </div>
                <div className="qc">
                  <blockquote>
                    <p>"<span className="mech">Quem acredita que a vaca dá leite vai morrer de fome.</span>"</p>
                  </blockquote>
                  <figcaption className="who">
                    <b>Marcio Pauliki</b>
                    <span>
                      CEO do Grupo MM · faturamento de{' '}
                      <strong className="accent">R$ 1,8 bilhão</strong> em 2025
                    </span>
                  </figcaption>
                </div>
              </figure>
              <h2 className="h2 wide rv">Método que não vira rotina do time morre na primeira semana.</h2>
              <p className="rv wide">Aqui nós vamos te estimular a desmistificar conceitos sobre:</p>
              <div className="q-grid rv">
                <div className="q-card">
                  <div className="qn">
                    <b>1</b> Cultura
                  </div>
                  <h3>"Como a cultura impacta diretamente no faturamento empresarial?"</h3>
                </div>
                <div className="q-card">
                  <div className="qn">
                    <b>2</b> Gift Work
                  </div>
                  <h3>"Quais os reflexos do Gift Work no crescimento organizacional?"</h3>
                </div>
                <div className="q-card">
                  <div className="qn">
                    <b>3</b> Retenção
                  </div>
                  <h3>"O que mais mantém um colaborador na organização independentemente de remuneração?"</h3>
                </div>
                <div className="q-card">
                  <div className="qn">
                    <b>4</b> NR-1 e 5x2
                  </div>
                  <h3>"Como fazer da NR-1 e da jornada 5x2 um fator de aumento no faturamento da organização?"</h3>
                </div>
              </div>
              <div className="callout accent rv big">
                <p>
                  Você vai aprender por que <span className="mech">pessoas = EBITDA</span>.
                </p>
              </div>
              {/* Pauliki End */}

              <p className="rv">
                Ambidestria é isso: defender com uma mão o que já paga as contas e construir o futuro com a outra, sem soltar nenhuma. As duas trabalham juntas: a eficiência escala o que funciona e sustenta a operação. Mas empresa que só aprendeu a ser eficiente envelhece: um dia aparece alguém que se reinventou e te passa.
              </p>
              <figure className="prof rv" id="prof-eduardo-thompson">
                <div className="ph">
                  <img src="/assets/prof-eduardo-thompson.jpg" alt="Eduardo Rangel Thompson, diretor de engenharia e CTO do UOL Host" loading="lazy" />
                </div>
                <div className="qc">
                  <blockquote>
                    <p>
                      "<span className="mech">Aprenda rápido a reinventar seu negócio ou sua função, antes que você seja disruptado e saia do mercado.</span>"
                    </p>
                  </blockquote>
                  <figcaption className="who">
                    <b>Eduardo Rangel Thompson</b>
                    <span>Diretor de Engenharia e CTO do UOL Host</span>
                  </figcaption>
                </div>
              </figure>
            </div>
          </div>
        </section>

        {/* 3 · A DISRUPÇÃO · André Start → End */}
        <section className="sec sec-line" data-aura-section="disrupcao">
          <div className="wrap body">
            <div className="sec-num rv">
              <b>03</b> <i>A disrupção</i>
            </div>
            <div className="princ rv">
              <div>
                <b>Fixo no propósito, flexível no processo.</b>
                <p>O destino não muda. O caminho muda quantas vezes for preciso. Quem confunde os dois trava com medo de sair da rota, ou se perde por não ter rota.</p>
              </div>
            </div>
            <h2 className="h2 rv">Disrupção não é novidade. A velocidade dela é.</h2>
            <p className="rv">Historicamente, passamos por vários processos disruptivos na humanidade:</p>
            <div className="epochs rv">
              <div>
                <svg viewBox="0 0 24 24">
                  <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                </svg>
                Revolução Industrial
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <path d="M4 15V9a8 8 0 0 1 16 0v6M4 15h3v6H5a1 1 0 0 1-1-1zM20 15h-3v6h2a1 1 0 0 0 1-1z" />
                </svg>
                Sistema de telefonia
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="12" rx="2" />
                  <path d="M8 20h8M12 16v4" />
                </svg>
                Invenção do computador
              </div>
              <div>
                <svg viewBox="0 0 24 24">
                  <path d="M4 11h16M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4M5 19h14M7 15h.01M12 15h.01M17 15h.01" />
                </svg>
                Máquinas a vapor e sistema de ferrovias
              </div>
            </div>
            <p className="rv">
              São tantas mudanças que hoje já passam despercebidas, porém, na época em que aconteceram, causaram verdadeiras revoluções. Por isso podemos afirmar que o conceito de disrupção não é algo tão inédito assim.
            </p>
            <p className="rv wide">
              O que realmente nos assombra é que na atualidade as inovações são absorvidas quase que imediatamente e isso deixa as empresas e seus gestores super assustados. Nossos negócios, até então sólidos, parecem estar em constante ameaça de ruína.
            </p>
            <p className="rv">
              <strong>A melhor estratégia é nós mesmos buscarmos disruptar nosso próprio negócio constantemente.</strong>
            </p>
            <figure className="prof rv" id="prof-andre-paixao">
              <div className="ph">
                <img src="/assets/prof-andre-paixao.jpg" alt="André Paixão, CEO da Lions Startups" loading="lazy" />
              </div>
              <div className="qc">
                <blockquote>
                  <p>
                    "<span className="mech">A disrupção vai acontecer de qualquer jeito. A pergunta é: você mesmo vai se disruptar ou vai deixar que o mercado te disrupte?</span>"
                  </p>
                </blockquote>
                <figcaption className="who">
                  <b>André Paixão</b>
                  <span>CEO da Lions Startups — um dos maiores venture builders do Brasil</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        {/* 4 · VOO POR INSTRUMENTO */}
        <section className="sec sec-line" data-aura-section="decisao">
          <div className="wrap body">
            <div className="sec-num rv">
              <b>04</b> <i>Visão sistêmica</i>
            </div>
            <h2 className="h2 wide rv">Como tomar decisões que mudam a empresa sem o cenário inteiro na mão?</h2>
            <p className="rv wide">
              No tempo bom qualquer um pilota no olho. O jogo se decide em quem sabe voar na neblina: dado incompleto, risco real e iminente. O que separa quem acerta de quem quebra não é ter certeza. É ter um jeito de decidir sem ela.
            </p>
            <p className="rv wide">
              E esse jeito começa pela <strong>visão do negócio inteiro</strong>. Hoje você enxerga a empresa em pedaços, corre de um incêndio pro outro, e o mercado quase sempre te pega de surpresa.
            </p>
            <figure className="prof rv" id="prof-carlos-osti">
              <div className="ph">
                <img src="/assets/prof-carlos-osti.jpg" alt="Carlos Osti, executivo de negócios de tecnologia da informação" loading="lazy" />
              </div>
              <div className="qc">
                <blockquote>
                  <p>
                    "<span className="mech">Seja na vida pessoal, corporativa ou empresarial, sempre foi fundamental ter uma visão holística e se afastar do problema para entendê-lo e resolvê-lo.</span>"
                  </p>
                </blockquote>
                <figcaption className="who">
                  <b>Carlos Osti</b>
                  <span>Ex-Samsung SDS, especialista em negócios de tecnologia da informação e executivo Latam na FlashResponse</span>
                </figcaption>
              </div>
            </figure>
            <div className="sub-lbl rv">O OKR como bússola do futuro</div>
            <p className="rv wide">
              Durante a imersão você vai aprender a usar a ferramenta de OKR como a <span className="mech">Bússola do Futuro</span> da sua operação. A leitura é de cabine:
            </p>
            <div className="hands rv">
              <div className="h-bld">
                <div className="tag">
                  <svg viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" />
                  </svg>
                  O para-brisa · OKR
                </div>
                <h3>Aponta pra onde a empresa vai</h3>
                <p>Mostra a direção que a empresa quer seguir sob condições de mudança rápida. É o instrumento do futuro.</p>
              </div>
              <div className="h-def">
                <div className="tag">
                  <svg viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                    <path d="M3 3v5h5" />
                    <path d="M12 7v5l4 2" />
                  </svg>
                  O retrovisor · KPI
                </div>
                <h3>Explica o que já aconteceu</h3>
                <p>Traduz os resultados do passado e do presente. Indispensável, mas ninguém dirige olhando só pra ele.</p>
              </div>
            </div>
            <p className="rv wide">
              O OKR não serve pra criar a estratégia. Serve pra <strong>executá-la de forma adaptativa</strong>. Você vai aprender a dar liberdade e autonomia pros times definirem as próprias iniciativas, desde que entreguem resultados-chave quantificáveis, focados em valor, qualidade e eficiência.
            </p>
            <div className="callout accent rv">
              <span className="lbl">Alinhamento bidirecional</span>
              <p>
                A proposta central do módulo é te preparar pra viver uma cultura de <span className="mech">Alinhamento Bidirecional</span>: sair das metas puramente cascateadas pra um modelo em que a liderança define a clareza da direção (o estratégico) e os times propõem, de forma colaborativa, os seus caminhos (o tático).
              </p>
            </div>
          </div>
        </section>

        {/* 5 · ONDE A IA ENTRA */}
        <section className="sec sec-line" data-aura-section="metodo-estrategico">
          <div className="wrap body">
            <div className="sec-num rv">
              <b>05</b> <i>Camada estratégica</i>
            </div>
            <h2 className="h2 rv">Onde a IA entra e por quê?</h2>
            <figure className="prof rv" id="prof-ronei-ferrigolo">
              <div className="ph">
                <img src="/assets/prof-ronei-ferrigolo.jpg" alt="Ronei Ferrigolo, ex-AWS e Account Director na Salesforce" loading="lazy" />
              </div>
              <div className="qc">
                <blockquote>
                  <p>
                    "<span className="mech">Seguramente eu afirmo que a Inteligência Artificial não vai substituir os executivos e empresários; mas os líderes que dominam a IA certamente substituirão aqueles que escolherem continuar agindo como máquinas.</span>"
                  </p>
                </blockquote>
                <figcaption className="who">
                  <b>Ronei Ferrigolo</b>
                  <span>Ex-AWS, empreendedor em série e Account Director na Salesforce SP</span>
                </figcaption>
              </div>
            </figure>
            <p className="rv wide">
              Entendemos que a tecnologia e a utilização da IA devem ser diretamente aplicadas ao <strong>EBITDA</strong>, ou seja, na última linha de faturamento da organização. Durante a imersão os executivos aprendem a avaliar onde a tecnologia gera valor real, saindo do <span className="mech">teatro da inovação</span> e aplicando a IA para aumentar receitas ou evitar perdas.
            </p>
            <p className="rv wide">
              As estratégias devem ser voltadas para inserir e integrar inteligência artificial nas ofertas atuais da empresa, transformando modelos de negócios e entregando novas propostas de valor aos clientes.
            </p>
            <div className="grid g2 rv" style={{ margin: '30px 0' }}>
              <div className="card">
                <div className="icon-b">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M7 13l3-3 4 4 5-5" />
                  </svg>
                </div>
                <h3>Mapeamento de Eficiência Operacional</h3>
                <p>Prioriza oportunidades de automação de processos internos, eliminando rapidamente gargalos de produtividade.</p>
              </div>
              <div className="card">
                <div className="icon-b">
                  <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                <h3>Casos práticos e benchmarks</h3>
                <p>Metodologia de análise para identificar a curva de adoção de IA no seu nicho e descobrir o que setores similares, iguais ou complementares estão construindo (estudos de caso e benchmarks de startups).</p>
              </div>
            </div>
            <div className="callout accent rv big">
              <p>
                Esqueça as teorias acadêmicas obsoletas. Traga os problemas e os gargalos reais do seu negócio e saia com o <span className="mech">roadmap do seu AI/Office</span> desenhado para execução.
              </p>
            </div>
            <figure className="prof rv" id="prof-samantha-albuquerque">
              <div className="ph">
                <img src="/assets/prof-samantha-albuquerque.jpg" alt="Samantha Albuquerque, ex-líder de marketing da Johnson & Johnson" loading="lazy" />
              </div>
              <div className="qc">
                <blockquote>
                  <p>"Marketing é criar histórias que conectem clientes à nossa marca e conectar públicos ao nosso propósito."</p>
                </blockquote>
                <figcaption className="who">
                  <b>Samantha Albuquerque</b>
                  <span>Ex-líder de marketing da Johnson & Johnson · engenheira com mais de 15 anos de experiência em marketing · MBA pela University of Michigan · empreendedora em série</span>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        {/* ENTREGÁVEIS */}
        <section className="sec sec-line" data-aura-section="entregaveis" id="entregaveis">
          <div className="wrap body">
            <div className="sec-num rv">
              <b>07</b> <i>O que você leva</i>
            </div>
            <h2 className="h2 wide rv">Oito artefatos que convergem no Plano Diretor da sua empresa.</h2>
            <p className="deck rv">Não é slide genérico. É sequência aplicada à sua operação — do diagnóstico ao documento defendido em banca.</p>
            <div className="dl-list rv">
              <div className="dl-row">
                <span className="n">01</span>
                <div>
                  <h3>Mapa de Maturidade Organizacional</h3>
                  <p>Retrato do ponto de partida real da sua operação.</p>
                </div>
              </div>
              <div className="dl-row">
                <span className="n">02</span>
                <div>
                  <h3>Mapa de Exposição e Diagnóstico de Gargalos</h3>
                  <p>Onde o risco e a ineficiência concentram caixa e atenção.</p>
                </div>
              </div>
              <div className="dl-row">
                <span className="n">03</span>
                <div>
                  <h3>Blueprint do Escritório de IA</h3>
                  <p>Governança e dono para a camada tecnológica — depois da estratégia.</p>
                </div>
              </div>
              <div className="dl-row">
                <span className="n">04</span>
                <div>
                  <h3>Plano de Eficiência Operacional</h3>
                  <p>Prioridades que protegem o resultado de curto prazo.</p>
                </div>
              </div>
              <div className="dl-row">
                <span className="n">05</span>
                <div>
                  <h3>Stack de IA Curada</h3>
                  <p>Ferramentas escolhidas por contexto, não por moda.</p>
                </div>
              </div>
              <div className="dl-row">
                <span className="n">06</span>
                <div>
                  <h3>Portfólio dos 3 Horizontes</h3>
                  <p>Do caixa de hoje às apostas disciplinadas de futuro.</p>
                </div>
              </div>
              <div className="dl-row">
                <span className="n">07</span>
                <div>
                  <h3>Roadmap de Transformação</h3>
                  <p>Sequência executável, com régua e cadência.</p>
                </div>
              </div>
              <div className="dl-row">
                <span className="n">08</span>
                <div>
                  <h3>Plano Diretor defendido em banca</h3>
                  <p>Documento que permanece com você — analisado sob sigilo por pares.</p>
                </div>
              </div>
            </div>
            <div className="cta-inline rv">
              <Link
                to="/aplicacao"
                className="btn btn-primary btn-lg"
                onClick={() => trackCtaClick('deliverables', 'Ver se faz sentido para minha empresa')}
              >
                Ver se faz sentido para minha empresa <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* JORNADA */}
        <section className="sec sec-line" data-aura-section="jornada" id="jornada">
          <div className="wrap body">
            <div className="sec-num rv">
              <b>08</b> <i>A jornada</i>
            </div>
            <h2 className="h2 rv">Como a imersão acontece.</h2>
            <p className="deck rv">Ciclo de aproximadamente 8 semanas, 50 horas presenciais em São Paulo, com banca ao vivo.</p>
            <div className="journey rv">
              <div className="j-step">
                <span className="k">Antes</span>
                <h3>Aplicação e assessment</h3>
                <p>Você aplica, conversamos e calibramos o ponto de partida da operação.</p>
              </div>
              <div className="j-step">
                <span className="k">Durante</span>
                <h3>Método + mentoria</h3>
                <p>Conteúdo aplicado, encontros presenciais em São Paulo e construção dos artefatos.</p>
              </div>
              <div className="j-step">
                <span className="k">Banca</span>
                <h3>Defesa do Plano Diretor</h3>
                <p>Sala fechada, sob sigilo: feedback de quem já decidiu com dinheiro de verdade.</p>
              </div>
              <div className="j-step">
                <span className="k">Formato</span>
                <h3>22/08 a 10/10/2026</h3>
                <p>Turma única de abertura · presencial em São Paulo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="sec sec-line" data-aura-section="diferenciais">
          <div className="wrap">
            <div className="two-col" style={{ marginBottom: '16px' }}>
              <div className="body">
                <div className="sec-num rv">
                  <b>09</b> <i>O que nenhum curso tem</i>
                </div>
                <h2 className="h2 rv">Três coisas que um vídeo gravado nunca vai fazer por você.</h2>
              </div>
              <div className="sec-img full rv">
                <img
                  src="/assets/lions-startups-turma.png"
                  alt="Grupo de participantes da Lions Startups reunidos em ambiente corporativo"
                  loading="lazy"
                  width={768}
                  height={1024}
                />
              </div>
            </div>
            <div className="body">
              <div className="diff rv">
                <div className="step">
                  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6M9 13h6M9 17h6" />
                  </svg>
                  O briefing · antes da primeira aula
                </div>
                <h3>Você chega sabendo onde está.</h3>
                <p>
                  Antes da primeira aula você já tem o Mapa de Maturidade da sua operação nos 5 níveis. Não é questionário de boas-vindas: é o retrato de onde a tecnologia de IA já entrou na empresa e, principalmente, onde entrou órfã. Você não perde semanas adivinhando por onde começar. O programa se molda ao seu ponto de partida real.
                </p>
              </div>
              <div className="diff rv">
                <div className="step">
                  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="m16 11 2 2 4-4" />
                  </svg>
                  O copiloto · durante o programa
                </div>
                <h3>Quem te orienta não são teóricos: são empreendedores e diretores de alto escalão.</h3>
                <p>
                  A mentoria é conduzida por quem colocou IA pra rodar na própria operação, com o próprio caixa em jogo, e apanhou pra fazer funcionar. Nada de teoria de slide. Eixo por eixo do seu negócio: começa no planejamento, realinha cultura, cuida do time, e a ferramenta é a última camada que se abre.
                </p>
              </div>
              <div className="diff rv">
                <div className="step">
                  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
                    <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35" />
                    <path d="M10 2v2.4M14 2v2.4M2 8.35 12 14l10-5.65-9.03-5.11a2 2 0 0 0-1.94 0z" />
                  </svg>
                  A torre · a banca
                </div>
                <h3>Uma banca aponta os furos antes que eles custem caro.</h3>
                <p>
                  Você senta na frente de uma banca de empresários e conselheiros, sob sigilo, gente que já decidiu coisas parecidas com dinheiro de verdade. Não é vitrine pra te expor. É sala fechada pra te fortalecer. Lá fora, uma leitura dessas você só paga num programa de conselho.
                </p>
              </div>
              <div className="sub-lbl rv">Quem conduz</div>
              <div className="ilist pos rv">
                <div className="it">
                  <svg viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div>
                    <b>Empresários, gestores e líderes executivos</b>
                    <span>que vivem desafios reais nas próprias organizações todos os dias, não em slide de palestra.</span>
                  </div>
                </div>
                <div className="it">
                  <svg viewBox="0 0 24 24" stroke="currentColor">
                    <rect width="7" height="7" x="3" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="14" y="14" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                  </svg>
                  <div>
                    <b>Direção acadêmica</b>
                    <span>que estrutura programa executivo de verdade, longe da pilha de aula gravada.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FIT */}
        <section className="sec sec-line" data-aura-section="fit" id="fit">
          <div className="wrap body">
            <div className="sec-num rv">
              <b>10</b> <i>Fit</i>
            </div>
            <h2 className="h2 rv">É para mim?</h2>
            <p className="deck rv">A entrada é por aplicação porque os dois lados precisam ter clareza.</p>
            <div className="fit rv">
              <div className="fit-col yes">
                <h3>Faz sentido se você</h3>
                <ul>
                  <li>É dono, empresário ou executivo responsável por resultado</li>
                  <li>Precisa proteger o caixa de hoje e construir o próximo ciclo</li>
                  <li>Quer método, não aula de ferramenta ou prompt</li>
                  <li>Aceita trabalhar a própria operação com pares e banca</li>
                </ul>
              </div>
              <div className="fit-col no">
                <h3>Provavelmente não faz se você</h3>
                <ul>
                  <li>Busca curso técnico de IA ou engenharia de prompts</li>
                  <li>Quer terceirizar a transformação sem assumir decisão</li>
                  <li>Espera ROI garantido ou aprovação automática</li>
                  <li>Prefere compra por impulso sem conversa de diagnóstico</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INVESTIMENTO */}
        <section className="sec sec-line" data-aura-section="oferta" id="investimento">
          <div className="wrap body">
            <div className="sec-num rv">
              <b>11</b> <i>A conta</i>
            </div>
            <h2 className="h2 rv">A pergunta não é quanto custa. É comparado com o quê?</h2>
            <p className="tbl-hint">Deslize horizontalmente para ver a tabela completa</p>
            <div className="tbl-wrap rv">
              <table>
                <thead>
                  <tr>
                    <th>Referência de mercado</th>
                    <th>O que você leva</th>
                    <th>Investimento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>MBA executivo</strong>
                    </td>
                    <td>Repertório e diploma, ao longo de 1 a 2 anos</td>
                    <td>Dezenas de milhares</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Consultoria de transformação</strong>
                    </td>
                    <td>Projeto tocado por terceiros, e você fica na mão deles pra manter</td>
                    <td>Alto e recorrente</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Programa de conselho</strong>
                    </td>
                    <td>Acesso a conselheiros, sem a execução ficar com você</td>
                    <td>Anuidade alta</td>
                  </tr>
                  <tr className="mute">
                    <td>
                      <strong>Palestra executiva de 1 dia</strong>
                    </td>
                    <td>8 horas de sala, um tema, um certificado</td>
                    <td>
                      <span className="price">R$ 5.990</span>
                    </td>
                  </tr>
                  <tr className="win">
                    <td>
                      <strong>Ambidestria Executiva</strong>
                    </td>
                    <td>
                      <strong>Escritório de IA montado + Plano Diretor com análise sistêmica da operação, em 50h com banca</strong>
                    </td>
                    <td>
                      <span className="price">6x de R$ 916,67</span>
                      <br />
                      <span className="price-sub">ou R$ 5.500 à vista</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="rv wide">
              Repara na penúltima linha. Uma palestra de um dia, no nível de um Insper, custa R$ 5.990: 8 horas e você volta pra casa no fim da tarde. A Ambidestria Executiva são 50 horas, de 22 de agosto a 10 de outubro, com assessment que calibra seu ponto de partida e banca avaliando seu plano no fim.
            </p>
            <div className="price-card rv">
              <div className="pe">O investimento é</div>
              <div className="pv">
                <span className="pv-x">6x de</span>R$ 916<span className="pv-c">,67</span>
              </div>
              <div className="pv-sub">ou R$ 5.500 à vista</div>
              <p className="pn">50 horas contra 8, praticamente pelo mesmo valor de um único dia de palestra. E com um plano que fica na sua mão depois.</p>
            </div>
            <div className="ilist pos rv">
              <div className="it">
                <svg viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M9 15l2 2 4-4" />
                </svg>
                <div>
                  <b>Assessment antes da primeira aula</b>
                  <span>Você não entra no escuro nem paga por algo que não é pro seu momento.</span>
                </div>
              </div>
              <div className="it">
                <svg viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="m16 11 2 2 4-4" />
                </svg>
                <div>
                  <b>Mentoria em cada eixo</b>
                  <span>Do começo ao fim. Ninguém some no meio do caminho.</span>
                </div>
              </div>
              <div className="it">
                <svg viewBox="0 0 24 24" stroke="currentColor">
                  <path d="m16 16 3-8 3 8c-2 1.5-4 1.5-6 0M2 16l3-8 3 8c-2 1.5-4 1.5-6 0M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
                <div>
                  <b>Banca avaliando seu Plano Diretor</b>
                  <span>Você sai com um documento que se sustenta numa análise sistêmica da sua organização — a bússola que vai te orientar nas decisões mais impactantes.</span>
                </div>
              </div>
            </div>
            <p className="rv" style={{ color: 'var(--t-low)', fontSize: '14.5px' }}>
              Os termos completos são formalizados por escrito na sua aplicação, antes de você pagar qualquer valor.
            </p>
            <div className="cta-inline rv">
              <Link
                to="/aplicacao"
                className="btn btn-primary btn-lg"
                onClick={() => trackCtaClick('investment', 'Iniciar aplicação')}
              >
                Iniciar aplicação <Arrow />
              </Link>
              <p className="cta-note">
                Turma única, sala física em São Paulo, banca presencial. A aplicação confirma juntos se faz sentido, antes de qualquer pagamento.
              </p>
            </div>
          </div>
        </section>

        {/* SALA / POR QUE AGORA */}
        <section className="sec sec-line" data-aura-section="fomo" id="sala">
          <div className="wrap body">
            <div className="prestige rv">
              <img
                src="/assets/sala-decisao.jpg"
                alt="Executivos em discussão ao redor de uma mesa, em sala de decisão com vista para a cidade"
                loading="lazy"
                width={819}
                height={1024}
              />
              <div className="cap">
                <span className="k">Sala de decisão · São Paulo</span>
                <span className="t">Uma sala de decisores no seu nível, não uma plateia.</span>
              </div>
            </div>
            <div className="sec-num rv">
              <b>12</b> <i>Por que agora</i>
            </div>
            <h2 className="h2 rv sala-limit">
              Sala exclusiva para
              <span className="sala-limit-n">30 pessoas</span>
            </h2>
            <p className="deck rv">
              Esta é a turma de abertura: presencial, em São Paulo, com banca ao vivo. Quando as cadeiras acabam, acabam.
            </p>
            <p className="rv wide">
              Eu poderia botar um relógio piscando e inventar um número de vagas. Não vou. A escassez aqui é real, e vem de três coisas que eu não consigo esticar:
            </p>
            <div className="fomo-cards rv">
              <div className="fc">
                <svg viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                  <path d="M22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                </svg>
                <b>Turma única</b>
                <p>Uma só, com data pra abrir e pra fechar. O grupo é fechado e atravessa os 3 Horizontes na mesma cadência.</p>
              </div>
              <div className="fc">
                <svg viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <b>Sala física em SP</b>
                <p>Cadeira presencial tem conta fechada: cabe quem cabe.</p>
              </div>
              <div className="fc">
                <svg viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <b>Banca presencial</b>
                <p>Na defesa do seu plano, tem empresários e altos executivos na sala pra te questionar cara a cara.</p>
              </div>
            </div>
            <div className="cta-inline rv">
              <Link
                to="/aplicacao"
                className="btn btn-primary btn-lg"
                onClick={() => trackCtaClick('room', 'Quero conhecer a turma')}
              >
                Quero conhecer a turma <Arrow />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec sec-line" data-aura-section="faq" id="faq">
          <div className="wrap body">
            <div className="sec-num rv">
              <b>13</b> <i>Perguntas frequentes</i>
            </div>
            <h2 className="h2 rv">Antes de aplicar</h2>
            <div className="rv">
              <details className="faq">
                <summary>É um curso de IA ou de prompts?</summary>
                <p className="a">Não. É método de gestão para decidir com as duas mãos. A IA entra como instrumento — depois da estratégia.</p>
              </details>
              <details className="faq">
                <summary>Já fiz MBA. O que muda?</summary>
                <p className="a">Você trabalha a própria operação: artefatos, mentoria e banca sob sigilo. Não é diploma genérico — é Plano Diretor da sua empresa.</p>
              </details>
              <details className="faq">
                <summary>Não tenho tempo. Como cabe em 50h?</summary>
                <p className="a">Ciclo de cerca de 8 semanas, 50 horas presenciais em São Paulo, com banca ao vivo. A grade completa entra na conversa de diagnóstico.</p>
              </details>
              <details className="faq">
                <summary>Ainda não uso IA na operação. Serve?</summary>
                <p className="a">Sim. O assessment parte do estado real — inclusive adoção órfã ou inexistente — e organiza prioridade sem teatro.</p>
              </details>
              <details className="faq">
                <summary>Vou expor dados sensíveis da empresa?</summary>
                <p className="a">A aplicação e o diagnóstico têm finalidade clara (LGPD). A banca e a sala trabalham sob sigilo. Detalhes estão no rodapé e são confirmados antes de qualquer pagamento.</p>
              </details>
              <details className="faq">
                <summary>O que acontece depois que eu clico em Aplicar?</summary>
                <p className="a">Você preenche a aplicação, conversamos com diagnóstico, e os dois lados decidem. Nada se fecha no calor da chamada.</p>
              </details>
            </div>
          </div>
        </section>

        {/* APLICAÇÃO */}
        <section className="sec sec-line" data-aura-section="aplicacao" id="aplicacao">
          <div className="wrap body">
            <div className="sec-num rv">
              <b>14</b> <i>Como você entra</i>
            </div>
            <h2 className="h2 rv">A entrada é por aplicação, não por carrinho.</h2>
            <p className="deck rv">Vamos passar semanas trabalhando dentro da sua operação. Os dois lados precisam ter clareza antes de começar.</p>
            <div className="steps rv">
              <div className="step-row">
                <div className="sn">01</div>
                <div>
                  <h3>Você aplica</h3>
                  <p>Preenche a aplicação em poucos minutos. Conta qual é a empresa, o momento dela e o que te trouxe até aqui.</p>
                </div>
              </div>
              <div className="step-row">
                <div className="sn">02</div>
                <div>
                  <h3>A gente conversa e faz um diagnóstico</h3>
                  <p>
                    Olhamos juntos pra sua operação: onde está o caixa que a IA precisa proteger, e onde ela poderia entrar com dono e plano. Você sai enxergando onde a IA se encaixa, mesmo que decida não seguir. É diagnóstico de verdade, não call de vendas disfarçada.
                  </p>
                </div>
              </div>
              <div className="step-row">
                <div className="sn">03</div>
                <div>
                  <h3>Vocês dois decidem</h3>
                  <p>Você sabe se faz sentido embarcar. A gente sabe se faz sentido te receber. Nada se fecha no calor da chamada.</p>
                </div>
              </div>
            </div>
            <div className="close-cta rv">
              <p className="big-serif" style={{ maxWidth: '24ch', margin: '0 auto 6px', color: 'var(--t-hi)' }}>
                Você agenda uma conversa, não uma compra.
              </p>
              <p style={{ maxWidth: '48ch', margin: '0 auto', color: 'var(--t-mid)' }}>
                Se a certeza não vier dos dois lados, apertamos a mão e seguimos. Sem drama.
              </p>
              <div style={{ margin: '26px 0 0' }}>
                <Link
                  to="/aplicacao"
                  className="btn btn-primary btn-lg"
                  onClick={() => trackCtaClick('final_cta', 'Aplicar para a turma de abertura')}
                >
                  Aplicar para a turma de abertura <Arrow />
                </Link>
              </div>
              <p className="cta-note" style={{ margin: '16px auto 0', textAlign: 'center' }}>
                A aplicação não te compromete com nada. As vagas são limitadas pelo tamanho da sala.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer data-aura-section="rodape">
        <div className="wrap">
          <img src="/assets/unilions-logo.jpg" alt="Uni Lions" />
          <div className="f-mission">Ambidestria Executiva</div>
          <p className="f-lead">
            Formar líderes que conduzem com as duas mãos: uma defende o caixa que paga as contas hoje, a outra constrói o negócio que vem depois. Estratégia primeiro. A ferramenta, por último.
          </p>
          <p className="f-tag">Turma única de abertura · Sala física em São Paulo · Banca presencial</p>
          <div className="f-legal">
            <div>
              <h4>Sobre os resultados</h4>
              <p>
                A Ambidestria Executiva é um programa de formação e método. O resultado depende de como cada empresa implementa e do contexto dela. Nenhuma página, anúncio ou material deste programa promete ganho financeiro garantido ou retorno em percentual específico.
              </p>
              <p>
                A IA aqui documenta, extrai e organiza o que hoje mora na cabeça das pessoas. Ela tira o time do trabalho repetitivo e devolve tempo para a decisão. O que você constrói a partir daí depende de você e da sua operação.
              </p>
            </div>
            <div>
              <h4>Sobre seus dados</h4>
              <p>
                Este aviso vale para o Assessment e a aplicação, e aparece antes de qualquer envio. Ao preencher, você compartilha dados sobre você e sua empresa, usados com duas finalidades:
              </p>
              <ol>
                <li>Montar o diagnóstico do momento da sua operação.</li>
                <li>Qualificar a conversa comercial antes de definir uma vaga.</li>
              </ol>
              <p>
                A base legal é o consentimento e o legítimo interesse para contato comercial, nos termos da LGPD (Lei nº 13.709/2018). Não vendemos nem compartilhamos seus dados fora dessa finalidade. Você pode pedir acesso, correção ou exclusão pelo e-mail{' '}
                <a href="mailto:privacidade@unilions.com.br">privacidade@unilions.com.br</a>.
              </p>
            </div>
          </div>
          <div className="f-bottom">
            <div className="links">
              <a href="mailto:privacidade@unilions.com.br?subject=Política%20de%20Privacidade">Política de Privacidade</a>
              <a href="mailto:privacidade@unilions.com.br?subject=Termos%20de%20Uso">Termos de Uso</a>
              <Link to="/aplicacao">Contato</Link>
            </div>
            <div>© 2026 Uni Lions. Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>

      <div className="fab" id="fab" aria-hidden="true">
        <div className="fm" aria-hidden="true">
          Turma única · SP · por aplicação
        </div>
        <Link
          to="/aplicacao"
          className="btn btn-primary"
          aria-label="Aplicar agora para a turma"
          onClick={() => trackCtaClick('mobile_sticky', 'Aplicar agora')}
        >
          Aplicar agora
        </Link>
      </div>
    </>
  )
}
