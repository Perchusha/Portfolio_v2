import type { Experience } from '../types/Translations'

type ExperienceCardProps = {
  job: Experience
}

function ExperienceCard({ job }: ExperienceCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-800/70 bg-zinc-900/60 p-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{job.role}</h3>
          <p className="text-sm text-zinc-400">{job.company}</p>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          {job.period}
        </p>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
        {job.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  )
}

export default ExperienceCard
