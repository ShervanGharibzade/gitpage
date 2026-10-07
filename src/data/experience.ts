export interface Role {
  company: string;
  title: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export const experience: Role[] = [
  {
    company: "Economican",
    title: "Frontend Developer",
    location: "Istanbul, Türkiye (Remote)",
    period: "Sep 2025 – Jan 2026",
    bullets: [
      "Led the refactor of core CMS components, improving maintainability and cutting unnecessary re-renders through targeted performance optimizations.",
      "Replaced separate per-category implementations with a single parent component that routes each category to its own rendering logic, significantly reducing code volume and simplifying category management.",
      "Architected a scalable menu system on top of the category-driven model, increasing content flexibility across the platform.",
      "Implemented PWA capabilities (offline support, caching strategies) that improved reliability on low-connectivity networks.",
      "Contributed to an AI-powered chat analysis tool for financial/trading insights, building the frontend experience and supporting backend service logic that integrates external data providers.",
      "Worked with backend engineers on Java Spring Boot REST APIs (validation, response mapping, role-based access control) for CMS and user-interaction features.",
    ],
    tags: ["CMS architecture", "Render optimization", "PWA", "Spring Boot APIs", "RBAC"],
  },
  {
    company: "Malltina",
    title: "Frontend Developer",
    location: "Alborz, Iran",
    period: "Aug 2024 – Aug 2025",
    bullets: [
      "Migrated 250+ components from Emotion to Tailwind CSS, reducing bundle size (verified with Lighthouse), improving long-term maintainability and enabling platform-wide dark mode.",
      "Introduced visual regression testing with Storybook and Chromatic to catch unintended UI changes before release.",
      "Adopted React Query across the application to cache server state and eliminate redundant requests, improving data-fetching performance and synchronization.",
      "Designed and built a dynamic, multi-section survey system that increased user engagement and data-collection capability.",
      "Delivered internationalization (i18n) with next-intl, extending the product to global users.",
      "Partnered with the backend team on Java Spring Boot APIs (debugging, contract alignment, performance profiling), helping resolve N+1 query and payload-bloat issues.",
      "Raised the code-quality bar with Git hooks (Husky) and custom ESLint rules; contributed to GitHub Actions workflows; advised teammates on UI implementation and survey architecture.",
    ],
    tags: ["Tailwind CSS", "React Query", "Storybook", "Chromatic", "next-intl", "Husky", "ESLint", "GitHub Actions"],
  },
  {
    company: "PiRun",
    title: "Frontend Developer",
    location: "Istanbul (Remote)",
    period: "Jan 2023 – Jan 2024",
    bullets: [
      "Improved web performance by 50% (validated with Lighthouse) by managing heavy computations and large data volumes more efficiently, alongside PWA optimization, lazy loading and WebP image conversion.",
      "Built installable PWA experiences with service workers and offline caching support.",
      "Developed real-time chat and chatbot interfaces using React, Redux and Firebase.",
      "Elevated UI polish and reusability with Framer Motion and a modular component architecture.",
    ],
    tags: ["React", "Redux", "Firebase", "PWA", "Framer Motion", "Lighthouse"],
  },
  {
    company: "Freelance",
    title: "Frontend Developer",
    location: "Tehran, Iran",
    period: "Sep 2021 – Aug 2022",
    bullets: [
      "Built a web application for small shops as part of a 4-person team, from architecture through delivery.",
      "Implemented Next.js SSR and bundle-size reductions that improved load times and user experience.",
      "Delivered responsive, production-ready UIs using React.js, Tailwind CSS, MUI and Sass, with basic PWA support for mobile usability.",
    ],
    tags: ["Next.js SSR", "React", "Tailwind CSS", "MUI", "Sass"],
  },
];
