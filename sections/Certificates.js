'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ExternalLink, X, Calendar } from 'lucide-react'
import { certificates } from '../lib/data'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'
import Image from 'next/image'

function CertCard({ cert, index, onPreview }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="border border-border bg-surface p-6 group cursor-pointer card-hover"
      onClick={() => onPreview(cert)}
    >
      {/* Header with color badge */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="w-12 h-12 flex items-center justify-center font-mono font-bold text-sm flex-shrink-0"
          style={{ backgroundColor: `${cert.color}22`, color: cert.color, border: `1px solid ${cert.color}33` }}
        >
          {cert.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-sm font-medium leading-snug group-hover:text-accent transition-colors">
            {cert.title}
          </h3>
          <div className="text-muted font-mono text-xs mt-1">{cert.issuer}</div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
        <div className="flex items-center gap-1.5 text-muted">
          <Calendar size={11} />
          <span className="font-mono text-xs">{cert.date}</span>
        </div>
        <div className="flex items-center gap-1 font-mono text-xs text-muted group-hover:text-accent transition-colors">
          <span>Preview</span>
          <ExternalLink size={11} />
        </div>
      </div>
    </motion.div>
  )
}

function CertModal({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-bg/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="border border-border bg-surface max-w-lg w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-16 h-16 flex items-center justify-center font-mono font-bold text-lg"
            style={{ backgroundColor: `${cert.color}22`, color: cert.color, border: `1px solid ${cert.color}44` }}
          >
            {cert.initials}
          </div>
          <button
            onClick={onClose}
            className="text-muted hover:text-white transition-colors p-1"
          >
            <X size={18} />
          </button>
        </div>

        <h2 className="font-display text-3xl font-light text-white leading-snug">{cert.title}</h2>
        <div className="mt-2 font-mono text-sm text-accent">{cert.issuer}</div>

        {/* Certificate preview placeholder */}
        <div
          className="mt-6 aspect-video flex items-center justify-center border"
          style={{ borderColor: `${cert.color}22`, backgroundColor: `${cert.color}08` }}
        >
         
              <Image src={cert.img} alt="alt" width={"500"} height={"5"}  />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <div>
            <div className="font-mono text-xs text-muted">Issued</div>
            <div className="font-mono text-sm text-white mt-1">{cert.date}</div>
          </div>
          <div>
            <div className="font-mono text-xs text-muted">Credential ID</div>
            <div className="font-mono text-xs text-accent/60 mt-1 truncate">{cert.credentialId}</div>
          </div>
        </div>

        <motion.button
          whileHover={{ x: 3 }}
          onClick={onClose}
          className="mt-6 w-full border border-border py-3 font-mono text-xs text-muted hover:text-white hover:border-white/20 transition-all tracking-widest uppercase"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section id="certificates" className="py-28 px-6 bg-surface/20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="06 — Certificates"
            title="Credentials"
            subtitle="Professional certifications validating expertise across cloud, frontend, and data engineering."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} onPreview={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <CertModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
