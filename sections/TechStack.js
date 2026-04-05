'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { techStack } from '../lib/data'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'

function TechCard({ tech, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.05 }}
      className="relative border border-border bg-surface p-6 flex flex-col items-center gap-3 cursor-default transition-colors group"
      style={{ borderColor: hovered ? `${tech.color}33` : undefined }}
    >
      {/* Glow */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${tech.color}0a 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Icon */}
      <div
        className="text-2xl w-12 h-12 flex items-center justify-center font-mono font-bold transition-colors duration-300"
        style={{ color: hovered ? tech.color : '#555555', fontSize: tech.icon.length > 2 ? '1rem' : '1.5rem' }}
      >
        {tech.icon}
      </div>

      <div className="text-center">
        <div className="font-mono text-sm text-white group-hover:text-white transition-colors">
          {tech.name}
        </div>
        <div className="font-mono text-xs text-muted mt-0.5">{tech.desc}</div>
      </div>

      {/* Bottom indicator */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{ backgroundColor: tech.color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: tech.color, width: '100%', transformOrigin: 'left' }}
      />
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="py-28 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="02 — Tech Stack"
          title="Tools I use"
          subtitle="Technologies and tools I work with daily to build exceptional digital experiences."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {techStack.map((tech, i) => (
            <TechCard key={tech.name} tech={tech} index={i} />
          ))}
        </div>

        {/* Marquee strip */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 border-t border-b border-border py-4 overflow-hidden">
            <div className="marquee">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="font-mono text-xs text-muted/40 tracking-widest uppercase mx-6">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
