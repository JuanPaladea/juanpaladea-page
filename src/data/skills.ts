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
    description: { en: "What I work in", es: "Con lo que trabajo" },
    items: [
      { name: "JavaScript", icon: icon("javascript") },
      { name: "TypeScript", icon: icon("typescript") },
      { name: "Python", icon: icon("python") },
      { name: "SQL", icon: icon("sql") },
      { name: "C", icon: icon("c") },
      { name: "HTML", icon: icon("html5") },
      { name: "CSS", icon: icon("css3") },
    ],
  },
  {
    title: { en: "Databases", es: "Bases de datos" },
    description: {
      en: "Where the rules that matter live",
      es: "Donde viven las reglas que importan",
    },
    items: [
      { name: "PostgreSQL", icon: icon("postgresql") },
      { name: "Row-level security" },
      { name: "Triggers" },
      { name: "SQL functions" },
      { name: "Supabase", icon: icon("supabase") },
      { name: "Neon", icon: icon("neon") },
      { name: "IndexedDB" },
      { name: "MongoDB", icon: icon("mongodb") },
      { name: "MySQL", icon: icon("mysql") },
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
      { name: "Netlify Functions", icon: icon("netlify") },
      { name: "JWT", icon: icon("jwt") },
      { name: "Google OAuth", icon: icon("google") },
      { name: "Zod", icon: icon("zod") },
      { name: "Vitest", icon: icon("vitest") },
      { name: "Jest", icon: icon("jest") },
      { name: "Mocha", icon: icon("mocha") },
      { name: "Swagger / OpenAPI", icon: icon("swagger") },
    ],
  },
  {
    title: { en: "Frontend", es: "Frontend" },
    description: {
      en: "To ship the complete product",
      es: "Para entregar el producto completo",
    },
    items: [
      { name: "React", icon: icon("react") },
      { name: "Next.js", icon: icon("nextjs") },
      { name: "Vite", icon: icon("vite") },
      { name: "Tailwind CSS", icon: icon("tailwind") },
      { name: "shadcn/ui", icon: icon("shadcn") },
      { name: "Web Push" },
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
      { name: "GitHub Actions", icon: icon("github-actions") },
      // Official mark, so the logo is the real one rather than an approximation.
      { name: "Claude Code", icon: "/icons/claude.ico" },
      { name: "AWS", icon: icon("aws") },
      { name: "Firebase", icon: icon("firebase") },
      { name: "Vercel", icon: icon("vercel") },
      { name: "Netlify", icon: icon("netlify") },
      { name: "Resend", icon: icon("resend") },
      { name: "Brevo", icon: icon("brevo") },
    ],
  },
  {
    title: { en: "Automation & AI", es: "Automatizaciones e IA" },
    description: {
      en: "What I build at Chatty and in my own products",
      es: "Lo que construyo en Chatty y en mis productos",
    },
    items: [
      { name: "AI agents" },
      { name: "Conversational flows" },
      { name: "Workflow automation" },
      { name: "WhatsApp Business API", icon: icon("whatsapp") },
      { name: "Custom metrics & funnels" },
      { name: "MCP servers", icon: icon("mcp") },
    ],
  },
];
