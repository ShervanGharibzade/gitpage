export const profile = {
  name: "Hossein Gharibzadeh",
  role: "Frontend Engineer",
  location: "Karaj, Iran",
  email: "shervan.dec@gmail.com",
  github: "https://github.com/ShervanGharibzade",
  linkedin: "https://www.linkedin.com/in/h-gharibzadeh",
  resume: "Hossein_Gharibzadeh_Resume.pdf",
} as const;

export const highlights = [
  { value: "3+", label: "years shipping production web apps" },
  { value: "250+", label: "components migrated from Emotion to Tailwind CSS" },
  { value: "50%", label: "web performance gain, validated with Lighthouse" },
] as const;

export const aboutParagraphs = [
  "I build and own production web applications in React, Next.js and TypeScript. My work centres on performance under heavy computation and large datasets, reliable data fetching and caching, and component architecture that stays maintainable as products grow.",
  "I care about UI quality as an engineering problem: visual regression testing with Storybook and Chromatic, lint rules and Git hooks that raise the bar for the whole team, and role-based interfaces (JWT, RBAC, MFA flows) that are secure by design.",
  "I work closely with backend teams on Spring Boot and NestJS APIs in Agile environments, and I'm looking to bring this approach to data-intensive financial products.",
];

export const focusAreas = [
  "Component architecture",
  "Performance & Core Web Vitals",
  "Server-state & caching",
  "PWA & offline support",
  "Secure role-based UIs",
  "Visual regression testing",
] as const;
