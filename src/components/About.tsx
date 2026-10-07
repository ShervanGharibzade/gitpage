import { aboutParagraphs, focusAreas } from "../data/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01 / About" title="Engineering approach">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="reveal space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="reveal">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Focus areas</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {focusAreas.map((area) => (
              <li key={area} className="py-3 text-sm">{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
