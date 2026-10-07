import { skillGroups } from "../data/skills";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" index="04 / Skills" title="Toolbox">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title} className="reveal">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{g.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="chip">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
