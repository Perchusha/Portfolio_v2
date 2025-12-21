import type { SectionId } from '../types/SectionId'
import type { NavLabels } from '../types/Translations'

type NavigationProps = {
  nav: NavLabels
  activeSection: SectionId
  onNavClick: (id: SectionId) => void
}

function Navigation({ nav, activeSection, onNavClick }: NavigationProps) {
  return (
    <nav className="fixed bottom-4 left-4 right-4 z-20 flex flex-row items-center justify-between rounded-full border border-zinc-800/70 bg-zinc-900/90 px-4 py-3 text-[0.6rem] font-semibold uppercase tracking-[0.25em] md:sticky md:top-10 md:w-40 md:flex-col md:gap-4 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:text-xs md:tracking-[0.3em]">
      <a
        className={`cursor-pointer transition ${
          activeSection === 'about'
            ? 'text-zinc-100'
            : 'text-zinc-400 hover:text-zinc-100'
        }`}
        href="#about"
        onClick={() => onNavClick('about')}
      >
        {nav.about}
      </a>
      <a
        className={`cursor-pointer transition ${
          activeSection === 'skills'
            ? 'text-zinc-100'
            : 'text-zinc-400 hover:text-zinc-100'
        }`}
        href="#skills"
        onClick={() => onNavClick('skills')}
      >
        {nav.skills}
      </a>
      <a
        className={`cursor-pointer transition ${
          activeSection === 'experience'
            ? 'text-zinc-100'
            : 'text-zinc-400 hover:text-zinc-100'
        }`}
        href="#experience"
        onClick={() => onNavClick('experience')}
      >
        {nav.experience}
      </a>
      <a
        className={`cursor-pointer transition ${
          activeSection === 'projects'
            ? 'text-zinc-100'
            : 'text-zinc-400 hover:text-zinc-100'
        }`}
        href="#projects"
        onClick={() => onNavClick('projects')}
      >
        {nav.projects}
      </a>
      <a
        className={`cursor-pointer transition ${
          activeSection === 'education'
            ? 'text-zinc-100'
            : 'text-zinc-400 hover:text-zinc-100'
        }`}
        href="#education"
        onClick={() => onNavClick('education')}
      >
        {nav.education}
      </a>
      <a
        className={`cursor-pointer transition ${
          activeSection === 'contact'
            ? 'text-zinc-100'
            : 'text-zinc-400 hover:text-zinc-100'
        }`}
        href="#contact"
        onClick={() => onNavClick('contact')}
      >
        {nav.contact}
      </a>
    </nav>
  )
}

export default Navigation
