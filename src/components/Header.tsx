import type { Translation } from '../types/Translations'
import type { Language } from '../types/Language'

type LanguageOption = {
  code: Language
  label: string
}

type HeaderProps = {
  t: Translation
  language: Language
  languageOptions: LanguageOption[]
  onLanguageChange: (language: Language) => void
  onContactClick: () => void
}

function Header({ t, language, languageOptions, onLanguageChange, onContactClick }: HeaderProps) {
  return (
    <header className="flex flex-col gap-6 border-b border-zinc-800/60 pb-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{t.hero.role}</p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">Anton Perch</h1>
          <p className="text-sm text-zinc-400">{t.hero.location}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-zinc-800/70 bg-zinc-900/70 p-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => onLanguageChange(option.code)}
                className={`cursor-pointer rounded-full px-3 py-1 transition ${
                  language === option.code
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
                aria-label={`${t.contact.languageLabel}: ${option.label}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start md:flex-row md:justify-between">
        <p className="max-w-2xl text-base text-zinc-200">{t.hero.summary}</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="cursor-pointer rounded-full border border-zinc-100 bg-zinc-100 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-900 transition hover:-translate-y-0.5 hover:bg-zinc-200"
            href="#contact-form"
            onClick={onContactClick}
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            className="cursor-pointer rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500"
            href="/Anton%20Perch%20CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View CV
          </a>
          <a
            className="cursor-pointer rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-100 transition hover:-translate-y-0.5 hover:border-zinc-500"
            href="/Anton%20Perch%20CV.pdf"
            download
          >
            Download CV
          </a>
        </div>
      </div>
      <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{t.hero.availability}</p>
    </header>
  )
}

export default Header
