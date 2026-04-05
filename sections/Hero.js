'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, MapPin, Sparkles } from 'lucide-react'
import { personalInfo } from '../lib/data'
import { smoothScrollTo } from '../lib/scroll'

const roles = [
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIndex]
    if (!isDeleting && charIndex <= current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c + 1)
      }, 70)
    } else if (!isDeleting && charIndex > current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex >= 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c - 1)
      }, 35)
    } else {
      setIsDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
      setCharIndex(0)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [charIndex, isDeleting, roleIndex])

  const goToAbout = useCallback(() => smoothScrollTo('#about'), [])
  const goToProjects = useCallback(() => smoothScrollTo('#projects'), [])
  const goToContact = useCallback(() => smoothScrollTo('#contact'), [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #c8f65a, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #c8f65a, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-4 py-2 mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            {personalInfo.availability}
          </span>
          <Sparkles size={12} className="text-accent" />
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display font-light leading-none text-white"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}>
            {personalInfo.name.split(' ')[0]}
          </h1>
          <h1 className="font-display font-light leading-none"
            style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', color: '#c8f65a', textShadow: '0 0 60px #c8f65a33' }}>
            {personalInfo.name.split(' ')[1]}
          </h1>
        </motion.div>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 h-8 flex items-center justify-center"
        >
          <span className="font-mono text-lg text-muted">
            {displayed}
            <span className="cursor" />
          </span>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 flex items-center justify-center gap-4 text-muted"
        >
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent" />
            <span className="font-mono text-xs">{personalInfo.location}</span>
          </div>
          <span className="w-px h-3 bg-border" />
          <span className="font-mono text-xs">{personalInfo.email}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={goToContact}
            className="btn-primary group relative overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="flex items-center gap-2">
              <Sparkles size={14} />
              Hire Me
            </span>
          </motion.button>
          <motion.button
            onClick={goToProjects}
            whileHover={{ borderColor: '#c8f65a44', color: '#fff' }}
            className="border border-border text-muted px-8 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-200"
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={goToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>

      <div className="absolute top-20 right-6 md:right-12 font-mono text-xs text-border leading-relaxed text-right hidden md:block">
        <div>Portfolio v2026</div>
        <div>Bogor, ID</div>
        <div className="text-accent/40 mt-1">↓ Scroll to explore</div>
      </div>
    </section>
  )
}
