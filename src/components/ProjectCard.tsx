import type { Project } from '../types/Translations'

type ProjectCardProps = {
  project: Project
  linkLabel: string
}

function ProjectCard({ project, linkLabel }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 justify-between rounded-2xl border border-zinc-800/70 bg-zinc-900/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-zinc-700">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          {project.type}
        </p>
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="text-sm text-zinc-300">{project.description}</p>
      </div>
      {project.link ? (
        <a
          className="cursor-pointer text-xs uppercase tracking-[0.2em] text-zinc-400"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          {linkLabel}
        </a>
      ) : (
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          {project.status}
        </p>
      )}
    </article>
  )
}

export default ProjectCard
