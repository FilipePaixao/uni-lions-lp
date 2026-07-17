export type Tier = 'red' | 'yellow' | 'green'

export type AnswerOption = {
  t: string
  tier: Tier
  special?: 'consultant' | 'junto'
  weight?: number
}

export type Question = {
  id: string
  n: number
  title: string
  sub?: string
  opts: AnswerOption[]
  cond?: (answers: Answers) => boolean
}

export type Answer = {
  label: string
  tier: Tier
  special: string | null
  weight: number
}

export type Answers = Record<string, Answer>

export type Outcome = 'A' | 'B' | 'C'

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    n: 1,
    title: 'Pra começar: qual o faturamento anual aproximado da sua empresa hoje?',
    sub: 'Isso ajuda a entender se o programa faz sentido pro seu momento. Fica entre a gente.',
    opts: [
      { t: 'Até R$ 1 milhão/ano', tier: 'red' },
      { t: 'R$ 1 a 10 milhões/ano', tier: 'yellow' },
      { t: 'R$ 10 a 50 milhões/ano', tier: 'green' },
      { t: 'R$ 50 a 500 milhões/ano', tier: 'green' },
      { t: 'Acima de R$ 500 milhões/ano', tier: 'green' },
      { t: 'Sou consultor / autônomo (não tenho empresa própria)', tier: 'yellow', special: 'consultant' },
    ],
  },
  {
    id: 'q2',
    n: 2,
    title: 'Na sua empresa, quem decide sobre um investimento como este?',
    opts: [
      { t: 'Sou eu — dono, sócio ou CEO', tier: 'green' },
      { t: 'Sou C-level / diretor com autonomia de orçamento', tier: 'green' },
      { t: 'Decido junto com sócios ou conselho', tier: 'yellow', special: 'junto' },
      { t: 'Eu recomendo, mas quem aprova é outra pessoa', tier: 'red' },
      { t: 'Estou pesquisando por enquanto, sem autonomia', tier: 'red' },
    ],
  },
  {
    id: 'q3',
    n: 3,
    title: 'Quantas pessoas trabalham na sua empresa hoje?',
    opts: [
      { t: 'Só eu / até 5 pessoas', tier: 'yellow' },
      { t: '6 a 30 pessoas', tier: 'green' },
      { t: '31 a 100 pessoas', tier: 'green' },
      { t: '101 a 500 pessoas', tier: 'green' },
      { t: 'Mais de 500', tier: 'green' },
    ],
  },
  {
    id: 'q4',
    n: 4,
    title: 'Qual desses te incomoda mais hoje?',
    opts: [
      { t: 'Minha empresa já usa IA solta, sem regra nem responsável — e isso vai estourar no meu colo.', tier: 'green' },
      { t: 'Sei que tem desperdício e gargalo, mas não sei onde a IA cortaria custo de verdade.', tier: 'green' },
      { t: 'Tenho medo de que um concorrente mais leve esvazie meu mercado enquanto a gente discute em reunião.', tier: 'green' },
      { t: 'O conselho (ou o banco, ou um sócio) vai me cobrar a estratégia de IA e eu não tenho uma resposta organizada.', tier: 'green' },
      { t: 'Tenho anos de estrada e sinto que as regras mudaram debaixo dos meus pés — não quero ficar pra trás.', tier: 'green' },
    ],
  },
  {
    id: 'q5',
    n: 5,
    title: 'Como a IA entra na sua empresa hoje?',
    opts: [
      { t: 'Ainda não usamos de forma séria.', tier: 'yellow' },
      { t: 'Eu e algumas pessoas usamos ChatGPT/ferramentas no dia a dia, mas sem método nem regra.', tier: 'green' },
      { t: 'Já rodamos pilotos, mas quase nada virou resultado de verdade.', tier: 'green' },
      { t: 'Temos algumas coisas em produção, mas falta estrutura e governança.', tier: 'green' },
      { t: 'Já temos IA organizada com política e responsável.', tier: 'yellow' },
    ],
  },
  {
    id: 'q6',
    n: 6,
    title:
      'O programa é prático: você sai com o plano de IA da sua empresa montado, na sua operação real. Isso pede algumas horas suas por semana, além dos encontros. Topa esse formato?',
    opts: [
      { t: 'Sim — quero exatamente isso, mão na massa na minha empresa.', tier: 'green' },
      { t: 'Topo, desde que seja organizado e valha meu tempo.', tier: 'green' },
      { t: 'Prefiro algo mais leve, só assistir aulas quando der.', tier: 'red' },
      { t: 'Ainda não sei se tenho tempo pra isso agora.', tier: 'yellow' },
    ],
  },
  {
    id: 'q7',
    n: 7,
    title: 'Se desse tudo certo, o que você quer ter na mão ao final?',
    opts: [
      { t: 'Um plano de IA escrito que eu defendo na frente do conselho / banco / sócios.', tier: 'green' },
      { t: 'Minha operação cortando desperdício de verdade com IA, com ganho que dá pra medir.', tier: 'green' },
      { t: 'A tranquilidade de estar usando IA sem expor a empresa a risco jurídico/LGPD.', tier: 'green' },
      { t: 'Clareza de onde apostar: o que proteger hoje e onde investir no futuro.', tier: 'green' },
      { t: 'Só quero entender melhor o assunto, sem um objetivo específico ainda.', tier: 'red' },
    ],
  },
  {
    id: 'q8',
    n: 8,
    title: 'Quando você quer resolver isso?',
    opts: [
      { t: 'Pra ontem — já tenho pressão concreta (conselho, concorrente, prazo).', tier: 'green', weight: 2 },
      { t: 'Nos próximos meses — quero começar logo.', tier: 'green' },
      { t: 'Este ano, mas sem data definida.', tier: 'yellow' },
      { t: 'Só pesquisando, sem prazo.', tier: 'red' },
    ],
  },
  {
    id: 'q8b',
    n: 8,
    cond: (answers) => Boolean(answers.q2 && answers.q2.special === 'junto'),
    title:
      'Você consegue levar essa decisão adiante sozinho, ou precisa do aval de outras pessoas antes de fechar?',
    opts: [
      { t: 'Consigo decidir e depois alinho com eles.', tier: 'green' },
      { t: 'Preciso que eles aprovem antes.', tier: 'yellow' },
    ],
  },
]

export function buildOrder(answers: Answers): string[] {
  const order = QUESTIONS.filter((q) => !q.cond).map((q) => q.id)
  const q8b = QUESTIONS.find((q) => q.id === 'q8b')
  if (q8b?.cond?.(answers)) {
    const i = order.indexOf('q8')
    order.splice(i + 1, 0, 'q8b')
  }
  return order
}

export function getQuestion(id: string): Question | undefined {
  return QUESTIONS.find((q) => q.id === id)
}

export function route(answers: Answers): Outcome {
  const a = answers
  const consultant = a.q1?.special === 'consultant'

  if (
    (a.q1?.tier === 'red' && a.q2?.tier === 'red') ||
    (a.q7?.tier === 'red' && a.q8?.tier === 'red')
  ) {
    return 'C'
  }

  const decisor =
    a.q2?.tier === 'green' ||
    (a.q2?.special === 'junto' && a.q8b?.tier === 'green')
  const fatViable = Boolean(a.q1 && a.q1.tier !== 'red' && !consultant)
  const handsOn = a.q6?.tier === 'green'
  const urgent = a.q8?.tier === 'green'

  if (decisor && fatViable && handsOn && urgent) return 'A'
  return 'B'
}
