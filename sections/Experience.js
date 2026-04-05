'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from 'lucide-react'
import { experiences } from '../lib/data'
import SectionHeader from '../components/SectionHeader'

function TimelineItem({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex items-start gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="w-10 h-10 bg-surface border border-accent/40 flex items-center justify-center z-10"
        >
          <Briefcase size={14} className="text-accent" />
        </motion.div>
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-px flex-1 timeline-line mt-2"
            style={{ minHeight: '80px', transformOrigin: 'top' }}
          />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 bg-surface border border-border p-6 mb-8 group hover:border-accent/20 transition-colors card-hover"
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-white font-medium">{exp.role}</h3>
            <div className="text-accent font-mono text-sm mt-0.5">{exp.company}</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-xs text-muted">{exp.period}</div>
            <div className="font-mono text-xs mt-1 text-border bg-subtle px-2 py-0.5 inline-block">
              {exp.type}
            </div>
          </div>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4">{exp.description}</p>

        <div className="flex flex-wrap gap-2">
          {exp.highlights.map((h) => (
            <span key={h} className="font-mono text-xs text-accent/60 border border-accent/10 px-2 py-1 bg-accent/5">
              {h}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-5xl mx-auto">
      <SectionHeader
        label="03 — Experience"
        title="My journey"
        subtitle="The places, people, and problems that shaped how I think about engineering."
      />

      <div className="space-y-2">
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.id} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
