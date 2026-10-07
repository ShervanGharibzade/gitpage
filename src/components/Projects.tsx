import { featuredProjects, smallBuilds, type Project } from "../data/projects";
import { ExternalLink } from "./ExternalLink";
import { ArrowUpRight } from "./Icons";
import { Section } from "./Section";

function ProjectCard({ project }: { project: Project }) {
  const { image } = project;
  return (
    <article
      className={`card reveal flex flex-col overflow-hidden transition-colors hover:border-muted/50 ${
        image ? "md:col-span-2" : ""
      }`}
    >
      <div className={image ? "grid md:grid-cols-[1fr_1.1fr]" : "flex flex-1 flex-col"}>
        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{project.kind}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            {project.contributions.map((c) => (
              <li key={c} className="relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:size-1 before:rounded-full before:bg-accent/70">
                {c}
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
            {project.stack.map((s) => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-4 pt-6">
            {project.links.map((l) => (
              <ExternalLink
                key={l.href}
                href={l.href}
                className="inline-flex min-h-6 items-center gap-1 text-sm font-medium text-fg underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {l.label}
              </ExternalLink>
            ))}
          </div>
        </div>
        {image && (
          <div className="order-first border-b border-line bg-bg md:order-none md:border-b-0 md:border-l">
            <img
              src={image.src}
              alt={image.alt}
              width={1200}
              height={595}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-left-top"
            />
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="03 / Projects" title="Selected work">
      <div className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>

      <div className="reveal mt-14">
        <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Earlier builds</h3>
        <ul className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {smallBuilds.map((b) => (
            <li key={b.name}>
              <a
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg border border-line bg-surface transition-colors hover:border-muted/50"
              >
                <img src={b.image} alt={b.alt} width={640} height={300} loading="lazy" decoding="async" className="aspect-[16/8] w-full object-cover object-top" />
                <span className="flex items-center justify-between gap-2 px-3 py-3 text-sm font-medium">
                  {b.name}
                  <ArrowUpRight />
                  <span className="sr-only">(opens in a new tab)</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
