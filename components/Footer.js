'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowUp, InstagramIcon } from 'lucide-react'
import { personalInfo } from '../lib/data'
import { smoothScrollTo } from '../lib/scroll'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-2xl font-light">
              AR<span className="text-accent">.</span>
            </span>
            <p className="font-mono text-xs text-muted mt-1">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: `https://github.com/${personalInfo.github}`, icon: Github, label: 'GitHub' },
              { href: `https://linkedin.com/in/${personalInfo.linkedin}`, icon: Linkedin, label: 'LinkedIn' },
              { href: `https://instagram.com/${personalInfo.instagram}`, icon: InstagramIcon, label: 'instagram' },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: '#c8f65a' }}
                className="text-muted hover:text-accent transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={() => smoothScrollTo(0)}
            whileHover={{ y: -2, color: '#c8f65a' }}
            className="flex items-center gap-2 font-mono text-xs text-muted hover:text-accent transition-colors"
          >
            <ArrowUp size={14} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
