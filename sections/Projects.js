'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { projects } from '../lib/data'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import { cn } from '../lib/utils'

const filters = ['All', 'Live', 'WIP', 'Open Source']

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="border border-border bg-surface p-6 group card-hover flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={cn(
                'font-mono text-xs px-2 py-0.5',
                project.status === 'Live' && 'bg-green-500/10 text-green-400 border border-green-500/20',
                project.status === 'WIP' && 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
                project.status === 'Open Source' && 'bg-accent/10 text-accent border border-accent/20',
              )}
            >
              {project.status}
            </span>
            <span className="font-mono text-xs text-muted">{project.year}</span>
          </div>
          <h3 className="text-white font-medium text-lg group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#c8f65a' }}
              className="text-muted hover:text-accent transition-colors p-1"
            >
              <Github size={16} />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#c8f65a' }}
              className="text-muted hover:text-accent transition-colors p-1"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-border/50">
        {project.techStack.map((tech) => (
          <span key={tech} className="font-mono text-xs text-muted/60 bg-subtle px-2 py-1">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="py-28 px-6 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="04 — Projects"
          title="What I've built"
          subtitle="A curated selection of projects that reflect my craft and problem-solving approach."
        />

        {/* Filters */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActiveFilter(f)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'font-mono text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200',
                  activeFilter === f
                    ? 'bg-accent text-bg border-accent'
                    : 'border-border text-muted hover:border-accent/30 hover:text-white'
                )}
              >
                {f}
              </motion.button>
            ))}
            <span className="font-mono text-xs text-muted self-center ml-auto">
              {filtered.length} projects
            </span>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <motion.a
              href={`https://github.com/HabibieRaysyah`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              <Github size={14} />
              <span className="tracking-widest uppercase">View all on GitHub</span>
              <ArrowRight size={14} />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
