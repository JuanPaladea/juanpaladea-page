import type { Localized } from "../preferences/types";

export interface Skill {
  /** Product names are proper nouns — they read the same in both languages. */
  name: string;
  /** Local SVG under /public/icons. Omitted when no icon is available. */
  icon?: string;
}

export interface SkillGroup {
  title: Localized<string>;
  description: Localized<string>;
  items: Skill[];
}

const icon = (file: string) => `/icons/${file}.svg`;

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "Languages", es: "Lenguajes" },
    description: { en: "What I write day to day", es: "Lo que escribo día a día" },
    items: [
      { name: "JavaScript", icon: icon("javascript") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "Python", icon: icon("python") },
      { name: "SQL", icon: icon("sql") },
      { name: "C" },
      { name: "HTML", icon: icon("html5") },
      { name: "CSS", icon: icon("css3") },
    ],
  },
  {
    title: { en: "Backend", es: "Backend" },
    description: {
      en: "APIs, auth, testing and docs",
      es: "APIs, autenticación, tests y documentación",
    },
    items: [
      { name: "Node.js", icon: icon("node") },
      { name: "Express", icon: icon("express") },
      { name: "Flask", icon: icon("flask") },
      { name: "REST APIs" },
      { name: "JWT" },
      { name: "Jest" },
      { name: "Swagger / OpenAPI" },
    ],
  },
  {
    title: { en: "Databases", es: "Bases de datos" },
    description: {
      en: "Relational and document stores",
      es: "Relacionales y orientadas a documentos",
    },
    items: [
      { name: "PostgreSQL", icon: icon("postgresql") },
      { name: "MongoDB", icon: icon("mongodb") },
      { name: "MySQL", icon: icon("mysql") },
    ],
  },
  {
    title: { en: "Frontend", es: "Frontend" },
    description: {
      en: "Enough to ship a full product",
      es: "Lo suficiente para entregar un producto completo",
    },
    items: [
      { name: "React", icon: icon("react") },
      { name: "Vite", icon: icon("vite") },
      { name: "Tailwind CSS", icon: icon("tailwind") },
    ],
  },
  {
    title: { en: "Tools & Workflow", es: "Herramientas y flujo de trabajo" },
    description: {
      en: "How things get built, reviewed and deployed",
      es: "Cómo se construye, revisa y despliega",
    },
    items: [
      { name: "Git", icon: icon("git") },
      { name: "GitHub", icon: icon("github") },
      // Official mark, so the logo is the real one rather than an approximation.
      { name: "Claude Code", icon: "/icons/claude.ico" },
      { name: "AWS", icon: icon("aws") },
      { name: "Firebase", icon: icon("firebase") },
      { name: "Vercel", icon: icon("vercel") },
      { name: "Netlify" },
    ],
  },
];
