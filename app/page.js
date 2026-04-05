import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import TechStack from '../sections/TechStack'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Certificates from '../sections/Certificates'
import GitHubSection from '../sections/GitHubSection'
import Contact from '../sections/Contact'
import { personalInfo } from '../lib/data'
import { fetchGitHubRepos, fetchGitHubProfile } from '../lib/utils'

export default async function Home() {
  const repos = await fetchGitHubRepos(personalInfo.github)
  const profile = await fetchGitHubProfile(personalInfo.github)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <GitHubSection repos={repos} profile={profile} />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
