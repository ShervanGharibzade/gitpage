import { About } from "./components/About";
import { BackToTop } from "./components/BackToTop";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header, navItems } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { profile } from "./data/profile";
import { useActiveSection } from "./hooks/useActiveSection";
import { useReveal } from "./hooks/useReveal";

const sectionIds = navItems.map((n) => n.id);

export default function App() {
  const active = useActiveSection(sectionIds);
  useReveal();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header active={active} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-line py-8">
        <p className="container-page text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
        </p>
      </footer>
      <BackToTop />
    </>
  );
}
