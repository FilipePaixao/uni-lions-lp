import { useEffect } from 'react'

const MAX_PX = 6
const MOBILE_MQ = '(max-width: 700px)'

export function useHandsParallax() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.hands')
    if (!root) return

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const hDef = root.querySelector<HTMLElement>('.h-def')
    const hBld = root.querySelector<HTMLElement>('.h-bld')
    if (!hDef || !hBld) return

    const mobileMq = matchMedia(MOBILE_MQ)
    let raf = 0

    const clear = () => {
      root.style.removeProperty('--hands-def-y')
      root.style.removeProperty('--hands-bld-y')
    }

    const update = () => {
      raf = 0
      if (mobileMq.matches) {
        clear()
        return
      }

      const rect = root.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const mid = rect.top + rect.height / 2
      const progress = (vh * 0.5 - mid) / vh
      const clamped = Math.max(-1, Math.min(1, progress * 2))
      const px = clamped * MAX_PX

      root.style.setProperty('--hands-def-y', `${px.toFixed(2)}px`)
      root.style.setProperty('--hands-bld-y', `${(-px).toFixed(2)}px`)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      clear()
    }
  }, [])
}
