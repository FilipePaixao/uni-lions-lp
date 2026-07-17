import { useCallback, useEffect, useId, useMemo, useState, type CSSProperties } from 'react'

type FacultySlide = {
  id: string
  src: string
  name: string
  role: string
  alt: string
}

/** Ordem idêntica à aparição na landing page. */
const FACULTY: FacultySlide[] = [
  {
    id: 'prof-oseias-gomes',
    src: '/assets/prof-oseias-gomes.jpg',
    name: 'Oséias Gomes',
    role: 'Proprietário e CEO da Odonto Excellence Franchising',
    alt: 'Oséias Gomes, proprietário e CEO da Odonto Excellence Franchising',
  },
  {
    id: 'prof-marcio-pauliki',
    src: '/assets/prof-marcio-pauliki.jpg',
    name: 'Marcio Pauliki',
    role: 'CEO do Grupo MM',
    alt: 'Marcio Pauliki ao lado da vaca que ilustra sua tese: vaca não dá leite',
  },
  {
    id: 'prof-eduardo-thompson',
    src: '/assets/prof-eduardo-thompson.jpg',
    name: 'Eduardo Rangel Thompson',
    role: 'Diretor de Engenharia e CTO do UOL Host',
    alt: 'Eduardo Rangel Thompson, diretor de engenharia e CTO do UOL Host',
  },
  {
    id: 'prof-andre-paixao',
    src: '/assets/prof-andre-paixao.jpg',
    name: 'André Paixão',
    role: 'CEO da Lions Startups',
    alt: 'André Paixão, CEO da Lions Startups',
  },
  {
    id: 'prof-carlos-osti',
    src: '/assets/prof-carlos-osti.jpg',
    name: 'Carlos Osti',
    role: 'Executivo Latam na FlashResponse',
    alt: 'Carlos Osti, executivo de negócios de tecnologia da informação',
  },
  {
    id: 'prof-ronei-ferrigolo',
    src: '/assets/prof-ronei-ferrigolo.jpg',
    name: 'Ronei Ferrigolo',
    role: 'Ex-AWS e Account Director na Salesforce',
    alt: 'Ronei Ferrigolo, ex-AWS e Account Director na Salesforce',
  },
  {
    id: 'prof-samantha-albuquerque',
    src: '/assets/prof-samantha-albuquerque.jpg',
    name: 'Samantha Albuquerque',
    role: 'Ex-líder de marketing da Johnson & Johnson',
    alt: 'Samantha Albuquerque, ex-líder de marketing da Johnson & Johnson',
  },
]

const PAGE_SIZE = 2
const AUTO_MS = 4200

function chunkPairs(items: FacultySlide[]): FacultySlide[][] {
  const pages: FacultySlide[][] = []
  for (let i = 0; i < items.length; i += PAGE_SIZE) {
    pages.push(items.slice(i, i + PAGE_SIZE))
  }
  return pages
}

export default function FacultyCarousel() {
  const pages = useMemo(() => chunkPairs(FACULTY), [])
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const labelId = useId()
  const statusId = useId()

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const goTo = useCallback(
    (nextPage: number, dir: 'next' | 'prev') => {
      const normalized = (nextPage + pages.length) % pages.length
      setDirection(dir)
      setPage(normalized)
      setAnimKey((k) => k + 1)
    },
    [pages.length],
  )

  const go = useCallback(
    (delta: number) => {
      goTo(page + delta, delta >= 0 ? 'next' : 'prev')
    },
    [goTo, page],
  )

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setDirection('next')
      setPage((current) => (current + 1) % pages.length)
      setAnimKey((k) => k + 1)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, pages.length])

  const current = pages[page]
  const statusNames = current.map((p) => p.name).join(' e ')

  return (
    <section
      className="faculty-carousel rv"
      role="region"
      aria-roledescription="carrossel"
      aria-labelledby={labelId}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div className="faculty-carousel__head">
        <p id={labelId} className="faculty-carousel__label">
          Quem aparece na jornada
        </p>
        <div className="faculty-carousel__controls">
          <button
            type="button"
            className="faculty-carousel__nav"
            aria-label="Par anterior"
            onClick={() => go(-1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            className="faculty-carousel__nav"
            aria-label="Próximo par"
            onClick={() => go(1)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <p id={statusId} className="sr-only" aria-live="polite">
        {statusNames}. Página {page + 1} de {pages.length}
      </p>

      <div className="faculty-carousel__viewport">
        {!reduceMotion && !paused && (
          <div className="faculty-carousel__progress" key={`progress-${animKey}`} aria-hidden="true" />
        )}
        <ul
          key={animKey}
          className={`faculty-carousel__page faculty-carousel__page--${direction}${current.length === 1 ? ' is-single' : ''}${reduceMotion ? ' is-static' : ''}`}
        >
          {current.map((person, i) => (
            <li
              key={person.id}
              className="faculty-carousel__slide"
              style={{ '--i': String(i) } as CSSProperties}
            >
              <a
                href={`#${person.id}`}
                className="faculty-carousel__link"
                aria-label={`Ir para ${person.name} na página`}
              >
                <figure>
                  <div className="faculty-carousel__photo">
                    <img src={person.src} alt="" loading={page === 0 ? 'eager' : 'lazy'} width={320} height={420} />
                  </div>
                  <figcaption>
                    <b>{person.name}</b>
                    <span>{person.role}</span>
                  </figcaption>
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="faculty-carousel__dots" role="tablist" aria-label="Selecionar página">
        {pages.map((pair, i) => (
          <button
            key={pair.map((p) => p.src).join('-')}
            type="button"
            role="tab"
            aria-selected={i === page}
            aria-label={`Página ${i + 1}: ${pair.map((p) => p.name).join(' e ')}`}
            className={`faculty-carousel__dot${i === page ? ' is-active' : ''}`}
            onClick={() => goTo(i, i > page ? 'next' : 'prev')}
          />
        ))}
      </div>
    </section>
  )
}
