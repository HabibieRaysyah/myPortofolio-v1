'use client'

import ScrollReveal from './ScrollReveal'

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="mb-16">
      <ScrollReveal>
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          {label}
        </span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-display text-5xl md:text-6xl font-light mt-3 text-white leading-tight">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="text-muted mt-4 max-w-xl leading-relaxed font-light">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.25}>
        <div className="mt-6 h-px w-16 bg-accent opacity-60" />
      </ScrollReveal>
    </div>
  )
}
