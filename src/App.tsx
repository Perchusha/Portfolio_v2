import { useEffect, useRef, useState } from 'react'
import ContactForm from './components/ContactForm'
import ExperienceCard from './components/ExperienceCard'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ProjectCard from './components/ProjectCard'
import { languageOptions } from './constants/languageOptions'
import { sectionIds } from './constants/sectionIds'
import { skills } from './constants/skills'
import { translations } from './constants/translations'
import type { Language } from './types/Language'
import type { SectionId } from './types/SectionId'

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? ''

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const stored = window.localStorage.getItem('portfolio-language') as Language
  return stored && translations[stored] ? stored : 'en'
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0])
  const t = translations[language]
  const manualLockRef = useRef(0)

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
  }, [language])

  useEffect(() => {
    const sections = sectionIds.map((id) =>
      document.getElementById(id),
    ) as Array<HTMLElement | null>

    const resolveActive = () => {
      if (Date.now() < manualLockRef.current) {
        return
      }

      const scrollTop = window.scrollY
      const viewport = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const bottomReached = scrollTop + viewport >= docHeight - 2

      if (bottomReached) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      const marker = scrollTop + 60
      let current: SectionId = sectionIds[0]
      let bestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        if (!section) return
        const top = section.getBoundingClientRect().top + scrollTop
        const distance = Math.abs(top - marker)
        if (distance < bestDistance) {
          bestDistance = distance
          current = section.id as SectionId
        }
      })

      setActiveSection(current)
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        resolveActive()
        ticking = false
      })
    }

    resolveActive()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const handleNavClick = (id: SectionId) => {
    setActiveSection(id)
    manualLockRef.current = Date.now() + 700
  }

  return (
    <div className="min-h-screen text-zinc-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12 pb-32 md:pb-12">
        <Header
          t={t}
          language={language}
          languageOptions={languageOptions}
          onLanguageChange={setLanguage}
          onContactClick={() => handleNavClick('contact')}
        />

        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <Navigation nav={t.nav} activeSection={activeSection} onNavClick={handleNavClick} />

          <div className="flex-1 space-y-16">
            <section id="about" className="grid gap-6 md:grid-cols-[1fr_2fr] scroll-mt-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{t.about.title}</p>
              </div>
              <p className="text-lg text-zinc-200">{t.about.body}</p>
            </section>

            <section id="skills" className="space-y-6 scroll-mt-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  {t.sections.skillsTitle}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-800/70 bg-zinc-900/70 px-3 py-1 text-xs font-medium text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section id="experience" className="space-y-6 scroll-mt-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  {t.sections.experienceTitle}
                </p>
              </div>
              <div className="space-y-6">
                {t.experience.map((job) => (
                  <ExperienceCard key={job.role + job.period} job={job} />
                ))}
              </div>
            </section>

            <section id="projects" className="space-y-6 scroll-mt-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  {t.sections.projectsTitle}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {t.projects.map((project) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    linkLabel={t.sections.projectLinkLabel}
                  />
                ))}
              </div>
            </section>

            <section id="education" className="grid gap-6 md:grid-cols-2 scroll-mt-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  {t.sections.educationTitle}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{t.education.degree}</h3>
                <p className="text-sm text-zinc-400">{t.education.school}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  {t.education.period}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  {t.sections.languagesTitle}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {t.languages.map((languageItem) => (
                    <li key={languageItem}>{languageItem}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              id="contact"
              className="grid gap-8 rounded-3xl border border-zinc-800/70 bg-zinc-900/80 p-8 shadow-sm scroll-mt-3"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  {t.sections.contactTitle}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{t.contact.title}</h2>
                <p className="mt-2 text-sm text-zinc-300">{t.contact.body}</p>
              </div>
              <ContactForm contact={t.contact} endpoint={formspreeEndpoint} />
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    className="mt-2 block cursor-pointer text-sm font-semibold text-zinc-100"
                    href="tel:+48571404348"
                  >
                    +48 571 404 348
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    className="mt-2 block cursor-pointer text-sm font-semibold text-zinc-100"
                    href="mailto:perch.anton@gmail.com"
                  >
                    perch.anton@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {t.contact.linksLabel}
                  </p>
                  <div className="mt-2 flex flex-col gap-2 text-sm">
                <a
                  className="cursor-pointer font-semibold text-zinc-100"
                  href="https://www.linkedin.com/in/anton-perch-768578113/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="cursor-pointer font-semibold text-zinc-100"
                  href="https://t.me/perchusha"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
                <a
                  className="cursor-pointer font-semibold text-zinc-100"
                  href="https://github.com/Perchusha"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
              </div>
            </section>

            <footer className="border-t border-zinc-800/60 pt-6 text-xs uppercase tracking-[0.2em] text-zinc-400">
              © 2025 Anton Perch
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
