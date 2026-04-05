'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, Code2, Palette, Server } from 'lucide-react'
import { personalInfo, skills } from '../lib/data'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import gua from '../assets/hbb.png'
import Image from 'next/image'

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-white/70">{name}</span>
        <span className="font-mono text-xs text-accent">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

const highlights = [
  { icon: Code2, label: 'Frontend', value: '0 Years', desc: 'React, Next.js, Vue' },
  { icon: Server, label: 'Backend', value: '0 Years', desc: 'Node.js, Python, APIs' },
  { icon: Palette, label: 'Design', value: '0 Years', desc: 'Figma, UI/UX Principles' },
]

export default function About() {
  const mainSkills = skills.filter(s =>
    ['Laravel', 'TailwindCss', 'JavaScript', 'Git', 'React', 'Node.js'].includes(s.name)
  )

  return (
    <section id="about" className="py-28 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="01 — About"
        title="Who I am"
        subtitle="Building things that matter, one line at a time."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Avatar + Highlights */}
        <div className="space-y-8">
          {/* Avatar placeholder */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="w-64 h-64 bg-surface border border-border relative overflow-hidden group">
                {/* Placeholder avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Image src={gua} alt="alt"/>
                  </div>
                </div>
                {/* Accent corner */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent" />
              </div>

              {/* Status pill */}
              <div className="absolute -bottom-4 -right-4 bg-surface border border-border px-4 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent">Available</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights */}
          <div className="grid grid-cols-3 gap-3 pt-8">
            {highlights.map(({ icon: Icon, label, value, desc }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div className="border border-border p-4 bg-surface/50 group hover:border-accent/30 transition-colors">
                  <Icon size={16} className="text-accent mb-2" />
                  <div className="font-mono text-xs text-muted uppercase tracking-wider">{label}</div>
                  <div className="font-display text-xl mt-1 text-white">{value}</div>
                  <div className="font-mono text-xs text-muted/60 mt-1">{desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right: Bio + Skills */}
        <div className="space-y-10">
          <ScrollReveal>
            <p className="text-white/70 leading-relaxed text-lg font-light">
              {personalInfo.bio}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted leading-relaxed">
              {personalInfo.bio2}
            </p>
          </ScrollReveal>

          {/* Core Skills */}
          <ScrollReveal delay={0.15}>
            <div>
              <h3 className="font-mono text-xs text-accent tracking-widest uppercase mb-6">
                Core Skills
              </h3>
              <div className="space-y-5">
                {mainSkills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.1 + i * 0.08}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Download CV */}
          <ScrollReveal delay={0.3}>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-3 font-mono text-xs text-muted hover:text-accent transition-colors group"
            >
              <Download size={14} />
              <span className="tracking-widest uppercase">Download Resume</span>
              <span className="text-border group-hover:text-accent transition-colors">→</span>
            </motion.a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
