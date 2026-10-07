import { highlights, profile } from "../data/profile";
import { ExternalLink } from "./ExternalLink";
import { Download, Github, Linkedin } from "./Icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative pb-16 pt-32 sm:pb-24 sm:pt-44">
      <div className="container-page">
        <p className="eyebrow">{profile.role} · {profile.location}</p>
        <h1 id="hero-title" className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          I build production web applications with{" "}
          <span className="text-fg">React, Next.js and TypeScript</span> — with a focus on performance under heavy
          data, reliable server-state, and UI quality that holds up release after release.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">View projects</a>
          <a href={profile.resume} download className="btn-ghost">
            <Download /> Resume (PDF)
          </a>
          <ExternalLink href={profile.github} className="btn-ghost">
            <Github /> GitHub
          </ExternalLink>
          <ExternalLink href={profile.linkedin} className="btn-ghost">
            <Linkedin /> LinkedIn
          </ExternalLink>
        </div>

        <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20 sm:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.label} className="bg-bg p-5 sm:p-6">
              <dt className="sr-only">{h.label}</dt>
              <dd>
                <span className="block font-mono text-3xl font-semibold text-accent">{h.value}</span>
                <span className="mt-1 block text-sm text-muted">{h.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
