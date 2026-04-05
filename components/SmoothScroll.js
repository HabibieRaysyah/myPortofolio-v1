'use client'

import { useEffect, useRef } from 'react'

// Centralized smooth scroll utility — call this from anywhere
export function scrollToSection(href) {
  const id = href.startsWith('#') ? href.slice(1) : href
  const el = document.getElementById(id)
  if (!el) return

  const navHeight = 72
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight

  window.scrollTo({ top, behavior: 'smooth' })
}

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    let lenis

    async function initLenis() {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default

        lenis = new Lenis({
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 0.8,
          touchMultiplier: 1.5,
          infinite: false,
        })

        lenisRef.current = lenis

        // Make globally accessible
        window.__lenis__ = lenis

        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
      } catch (e) {
        // Lenis not available — native scroll-behavior: smooth handles it
        console.log('Lenis unavailable, using native smooth scroll')
      }
    }

    initLenis()

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
        window.__lenis__ = null
      }
    }
  }, [])

  return <>{children}</>
}
