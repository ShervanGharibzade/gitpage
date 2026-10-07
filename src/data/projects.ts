export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  kind: string;
  summary: string;
  contributions: string[];
  stack: string[];
  links: ProjectLink[];
  image?: { src: string; alt: string };
}

export const featuredProjects: Project[] = [
  {
    name: "Afraav",
    kind: "Secure cloud platform",
    summary: "A secure cloud platform where access control and authentication are first-class parts of the interface.",
    contributions: [
      "Built with Next.js 14 and TypeScript, implementing MFA, encryption and role-based access control (RBAC).",
      "Responsive UI with MUI and Framer Motion.",
      "Complex drag-and-drop workflows using DnD Kit.",
    ],
    stack: ["Next.js 14", "TypeScript", "MUI", "Framer Motion", "DnD Kit"],
    links: [{ label: "Visit site", href: "https://www.ravinsec.ir/" }],
  },
  {
    name: "KashCoo",
    kind: "Admin & commerce dashboard",
    summary: "A mobile-first, full-RTL admin dashboard integrated with a NestJS backend.",
    contributions: [
      "Integrated with NestJS using JWT authentication and RBAC.",
      "Secure API handling with request interception.",
      "Mobile-first, full right-to-left layout.",
    ],
    stack: ["NestJS", "JWT", "RBAC", "RTL"],
    links: [{ label: "Backend repository", href: "https://github.com/ShervanGharibzade/kashcoo-backend/" }],
  },
  {
    name: "Issue Tracker",
    kind: "Kanban board",
    summary: "A Trello-style task management app with scalable state management and production-ready UI interactions.",
    contributions: [
      "Built with Next.js 14, DnD Kit and Framer Motion.",
      "Drag-and-drop board interactions backed by scalable state management.",
    ],
    stack: ["Next.js 14", "DnD Kit", "Framer Motion"],
    links: [{ label: "Live demo", href: "https://issus-tracker-next.netlify.app/" }],
    image: { src: "images/issue-tracker.webp", alt: "Issue Tracker kanban board with columns of task cards" },
  },
];

export interface SmallBuild {
  name: string;
  href: string;
  image: string;
  alt: string;
}

export const smallBuilds: SmallBuild[] = [
  { name: "Movie App", href: "https://next14-movie-app.netlify.app/", image: "images/movie-app.webp", alt: "Movie app home screen" },
  { name: "YouTube Clone", href: "https://shervangharibzade.github.io/youtube-react/", image: "images/youtube-clone.webp", alt: "YouTube clone home screen" },
  { name: "Stock App", href: "https://shervangharibzade.github.io/stock-app/", image: "images/stock-app.webp", alt: "Stock app dashboard" },
  { name: "Blog", href: "https://shervangharibzade.github.io/blog/", image: "images/blog.webp", alt: "Blog home page" },
];
