'use client'

import { motion } from 'framer-motion'
import { Star, GitFork, Github, ExternalLink } from 'lucide-react'
import { personalInfo } from '../lib/data'
import { formatNumber } from '../lib/utils'
import SectionHeader from '../components/SectionHeader'
import ScrollReveal from '../components/ScrollReveal'

function RepoCard({ repo, index }) {
  const langColors = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    Go: '#00ADD8',
    Rust: '#dea584',
    Vue: '#41B883',
    CSS: '#264de4',
    HTML: '#E34F26',
    Shell: '#89e051',
  }

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -4, borderColor: '#c8f65a33' }}
      className="border border-border bg-surface p-5 flex flex-col gap-3 group transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <Github size={14} className="text-muted flex-shrink-0" />
          <span className="font-mono text-sm text-accent truncate">{repo.name}</span>
        </div>
        <ExternalLink size={12} className="text-muted group-hover:text-accent transition-colors flex-shrink-0" />
      </div>

      <p className="text-muted text-xs leading-relaxed flex-1 line-clamp-2">
        {repo.description || 'No description provided.'}
      </p>

      <div className="flex items-center gap-4 mt-auto pt-2 border-t border-border/40">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: langColors[repo.language] || '#888' }}
            />
            <span className="font-mono text-xs text-muted">{repo.language}</span>
          </div>
        )}
        <div className="flex items-center gap-1 ml-auto">
          <Star size={11} className="text-muted" />
          <span className="font-mono text-xs text-muted">{formatNumber(repo.stargazers_count)}</span>
        </div>
        <div className="flex items-center gap-1">
          <GitFork size={11} className="text-muted" />
          <span className="font-mono text-xs text-muted">{formatNumber(repo.forks_count)}</span>
        </div>
      </div>
    </motion.a>
  )
}

function FallbackRepos() {
  const mockRepos = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    name: `project-${i + 1}`,
    description: 'Check out my GitHub profile to see all repositories.',
    html_url: `https://github.com/${personalInfo.github}`,
    language: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust', 'Vue'][i],
    stargazers_count: Math.floor(Math.random() * 50),
    forks_count: Math.floor(Math.random() * 15),
  }))

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockRepos.map((repo, i) => (
        <RepoCard key={repo.id} repo={repo} index={i} />
      ))}
    </div>
  )
}

export default function GitHubSection({ repos, profile }) {
  const hasRepos = repos && repos.length > 0

  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <ScrollReveal>
            <span className="font-mono text-xs text-accent tracking-widest uppercase">05 — GitHub</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-6xl font-light mt-3 text-white">
              Open source
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-6 h-px w-16 bg-accent opacity-60" />
          </ScrollReveal>
        </div>

        {/* Profile Stats */}
        {profile && (
          <ScrollReveal delay={0.2} direction="left">
            <motion.a
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ borderColor: '#c8f65a33' }}
              className="flex items-center gap-4 border border-border bg-surface p-4 transition-colors"
            >
              {profile.avatar_url && (
                <img
                  src={profile.avatar_url}
                  alt={profile.login}
                  className="w-12 h-12 rounded-none grayscale"
                />
              )}
              <div>
                <div className="font-mono text-sm text-white">@{profile.login}</div>
                <div className="flex gap-4 mt-1">
                  <span className="font-mono text-xs text-muted">
                    <span className="text-accent">{formatNumber(profile.public_repos || 0)}</span> repos
                  </span>
                  <span className="font-mono text-xs text-muted">
                    <span className="text-accent">{formatNumber(profile.followers || 0)}</span> followers
                  </span>
                </div>
              </div>
              <Github size={16} className="text-muted ml-4" />
            </motion.a>
          </ScrollReveal>
        )}
      </div>

      {hasRepos ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <RepoCard key={repo.id} repo={repo} index={i} />
          ))}
        </div>
      ) : (
        <FallbackRepos />
      )}

      <ScrollReveal delay={0.3}>
        <div className="mt-10 text-center">
          <motion.a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs text-muted hover:text-accent hover:border-accent/30 transition-all"
          >
            <Github size={14} />
            <span className="tracking-widest uppercase">View GitHub Profile</span>
          </motion.a>
        </div>
      </ScrollReveal>
    </section>
  )
}
