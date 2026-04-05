'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Mail, MapPin, CheckCircle, Loader2, InstagramIcon } from 'lucide-react'
import { personalInfo } from '../lib/data'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'

const socials = [
  { icon: Github, label: 'GitHub', href: `https://github.com/${personalInfo.github}`, handle: `@${personalInfo.github}` },
  { icon: Linkedin, label: 'LinkedIn', href: `https://linkedin.com/in/${personalInfo.linkedin}`, handle: `in/${personalInfo.linkedin}` },
  { icon: InstagramIcon, label: 'Instagram', href: `https://www.instagram.com/${personalInfo.instagram}`, handle: `@${personalInfo.instagram}` },
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, handle: personalInfo.email },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate API call — replace with your actual form handler
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-28 px-6 max-w-7xl mx-auto">
      <SectionHeader
        label="07 — Contact"
        title="Let's talk"
        subtitle="Whether you have a project in mind, a question, or just want to say hello — my inbox is always open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
        {/* Left: Info + Socials */}
        <div className="lg:col-span-2 space-y-10">
          <ScrollReveal>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-xs text-muted uppercase tracking-wider">Location</div>
                  <div className="text-white mt-1">{personalInfo.location}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-xs text-muted uppercase tracking-wider">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-accent transition-colors mt-1 block">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                  <span className="block w-2 h-2 rounded-full bg-accent animate-pulse mt-1" />
                </div>
                <div>
                  <div className="font-mono text-xs text-muted uppercase tracking-wider">Status</div>
                  <div className="text-accent mt-1">{personalInfo.availability}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Socials */}
          <ScrollReveal delay={0.15}>
            <div>
              <div className="font-mono text-xs text-muted uppercase tracking-widest mb-4">
                Find me online
              </div>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href, handle }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-muted hover:text-accent transition-colors group"
                  >
                    <Icon size={15} className="flex-shrink-0" />
                    <span className="font-mono text-sm">{handle}</span>
                    <span className="text-border group-hover:text-accent/40 ml-auto transition-colors text-xs">↗</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Form */}
        <ScrollReveal delay={0.2} className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="form-input"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project or just say hi..."
                className="form-input resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              whileHover={status === 'idle' ? { scale: 1.01 } : {}}
              whileTap={status === 'idle' ? { scale: 0.99 } : {}}
              className="w-full flex items-center justify-center gap-3 py-4 font-mono text-xs tracking-widest uppercase transition-all duration-300 disabled:cursor-not-allowed"
              style={{
                backgroundColor: status === 'success' ? '#22c55e' : '#c8f65a',
                color: '#080808',
              }}
            >
              {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
              {status === 'success' && <CheckCircle size={16} />}
              {status === 'idle' && <Send size={16} />}
              <span>
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </span>
            </motion.button>

            <p className="font-mono text-xs text-muted text-center">
              Typically reply within 24 hours
            </p>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
