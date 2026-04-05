// Centralized smooth scroll helper — use this everywhere
// Automatically uses Lenis (butter smooth) if loaded, falls back to native

export function smoothScrollTo(href) {
  const id = typeof href === 'string' && href.startsWith('#') ? href.slice(1) : href
  const el = typeof id === 'string' ? document.getElementById(id) : null

  if (id === 0 || href === 0) {
    // Scroll to top
    if (window.__lenis__) {
      window.__lenis__.scrollTo(0, { duration: 1.4 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }

  if (!el) return

  if (window.__lenis__) {
    window.__lenis__.scrollTo(el, { offset: -72, duration: 1.4 })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
