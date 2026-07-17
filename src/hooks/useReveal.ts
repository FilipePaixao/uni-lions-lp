import { useEffect } from 'react'

function revealNow(el: HTMLElement) {
  el.classList.add('in')
}

export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add('js')
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches

    const revealAll = () => {
      document.querySelectorAll<HTMLElement>('.rv').forEach(revealNow)
    }

    if (reduce) {
      revealAll()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealNow(entry.target as HTMLElement)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -4% 0px' },
    )

    const observePending = () => {
      document.querySelectorAll<HTMLElement>('.rv:not(.in)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight || document.documentElement.clientHeight
        const visible = rect.top < vh * 0.96 && rect.bottom > 0
        if (visible) {
          revealNow(el)
          return
        }
        io.observe(el)
      })
    }

    observePending()

    // HMR / DOM moves can inject new .rv nodes after the first pass
    const mo = new MutationObserver(() => observePending())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
