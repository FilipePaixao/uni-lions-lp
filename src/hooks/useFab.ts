import { useEffect } from 'react'

export function useFab() {
  useEffect(() => {
    const fab = document.getElementById('fab')
    const hero = document.querySelector<HTMLElement>('.hero')
    const apl = document.getElementById('aplicacao')
    if (!fab) return

    const onScroll = () => {
      const past = window.scrollY > (hero ? hero.offsetHeight * 0.85 : 600)
      const atApl = apl != null && apl.getBoundingClientRect().top < window.innerHeight * 0.9
      if (past && !atApl) {
        fab.classList.add('show')
        fab.setAttribute('aria-hidden', 'false')
      } else {
        fab.classList.remove('show')
        fab.setAttribute('aria-hidden', 'true')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
