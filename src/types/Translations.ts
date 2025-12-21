import type { Language } from './Language'

export type NavLabels = {
  about: string
  skills: string
  projects: string
  experience: string
  education: string
  contact: string
}

export type Hero = {
  role: string
  location: string
  summary: string
  ctaPrimary: string
  ctaSecondary: string
  availability: string
}

export type About = {
  title: string
  body: string
}

export type Sections = {
  skillsTitle: string
  projectsTitle: string
  experienceTitle: string
  educationTitle: string
  languagesTitle: string
  contactTitle: string
  projectLinkLabel: string
}

export type Project = {
  name: string
  type: string
  description: string
  status: string
  link?: string
}

export type Experience = {
  role: string
  period: string
  company: string
  bullets: string[]
}

export type Education = {
  degree: string
  school: string
  period: string
}

export type Contact = {
  title: string
  body: string
  phoneLabel: string
  emailLabel: string
  linksLabel: string
  languageLabel: string
  formName: string
  formEmail: string
  formMessage: string
  formSubmit: string
}

export type Translation = {
  nav: NavLabels
  hero: Hero
  about: About
  sections: Sections
  projects: Project[]
  experience: Experience[]
  education: Education
  languages: string[]
  contact: Contact
}

export type Translations = Record<Language, Translation>
