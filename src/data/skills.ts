export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"] },
  {
    title: "Frontend",
    items: ["React.js", "Next.js 14 (App Router, Server Components, SSR/ISR)", "Redux", "Zustand", "React Query", "Tailwind CSS", "MUI", "shadcn/ui", "Ant Design"],
  },
  {
    title: "Performance",
    items: ["Core Web Vitals", "Lighthouse profiling", "Render optimization", "Lazy loading", "Bundle optimization", "Caching strategies", "PWA (service workers, offline support)"],
  },
  {
    title: "Quality & Tooling",
    items: ["Storybook", "Chromatic (visual regression)", "GitHub Actions (CI)", "ESLint / Husky", "Git", "Docker", "Vite", "Webpack", "Vercel", "Netlify"],
  },
  {
    title: "APIs & Security",
    items: ["REST API integration", "Spring Boot", "NestJS", "Node.js", "JWT auth", "RBAC", "MFA flows", "Zod validation"],
  },
  {
    title: "UI / UX & Motion",
    items: ["Framer Motion", "DnD Kit", "Swiper.js", "Responsive design", "RTL & i18n", "Accessibility"],
  },
];
