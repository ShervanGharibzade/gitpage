import { useEffect, useRef, useState } from "react";
import { profile } from "../data/profile";
import { ExternalLink } from "./ExternalLink";
import { Check, Copy, Download, Github, Linkedin, Mail } from "./Icons";
import { Section } from "./Section";

function CopyEmail() {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setState("copied");
    } catch {
      setState("error");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2000);
  };

  return (
    <>
      <button type="button" onClick={copy} className="btn-ghost">
        {state === "copied" ? <Check /> : <Copy />}
        {state === "copied" ? "Copied" : state === "error" ? "Copy failed" : "Copy email"}
      </button>
      <span role="status" className="sr-only">
        {state === "copied" ? "Email address copied to clipboard" : state === "error" ? "Could not copy email address" : ""}
      </span>
    </>
  );
}

export function Contact() {
  return (
    <Section id="contact" index="05 / Contact" title="Let's talk">
      <div className="reveal max-w-2xl">
        <p className="text-lg leading-relaxed text-muted">
          I'm looking for frontend roles on data-intensive products, financial products in particular. The quickest way
          to reach me is by email.
        </p>
        <p className="mt-6 font-mono text-lg sm:text-2xl">
          <a href={`mailto:${profile.email}`} className="break-all underline decoration-line underline-offset-8 hover:decoration-accent">
            {profile.email}
          </a>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail /> Send an email
          </a>
          <CopyEmail />
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
      </div>
    </Section>
  );
}
