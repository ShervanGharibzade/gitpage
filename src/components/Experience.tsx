import { experience } from "../data/experience";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" index="02 / Experience" title="Where I've worked">
      <ol className="space-y-12 sm:space-y-16">
        {experience.map((role) => (
          <li key={role.company + role.period} className="reveal grid gap-4 md:grid-cols-[13rem_1fr] md:gap-10">
            <div className="md:pt-1">
              <p className="font-mono text-xs text-accent">{role.period}</p>
              <p className="mt-1 text-sm text-muted">{role.location}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                {role.title} <span className="text-muted">·</span> {role.company}
              </h3>
              <ul className="mt-4 space-y-3 text-[0.95rem] leading-relaxed text-muted">
                {role.bullets.map((b) => (
                  <li key={b} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-3 before:bg-accent/70">
                    {b}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Technologies at ${role.company}`}>
                {role.tags.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
