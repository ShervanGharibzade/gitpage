import type { ReactNode } from "react";

interface Props {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, index, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-16 sm:py-24">
      <div className="container-page">
        <header className="reveal mb-10 sm:mb-14">
          <p className="eyebrow">{index}</p>
          <h2 id={`${id}-title`} className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
