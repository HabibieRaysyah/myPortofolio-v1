import { clsx } from 'clsx'

export function cn(...inputs) {
  return clsx(inputs)
}

export function formatNumber(num) {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`
  return num.toString()
}

export async function fetchGitHubRepos(username) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=stars&per_page=6&type=public`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
  } catch {
    return []
  }
}

export async function fetchGitHubProfile(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}
