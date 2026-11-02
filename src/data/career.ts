import type { Localized } from "../preferences/types";

export interface CareerEntry {
  id: string;
  kind: "work" | "education";
  period: Localized<string>;
  /** Marks a role that is still current, so the UI can highlight it. */
  current?: boolean;
  title: Localized<string>;
  organization: Localized<string>;
  description: Localized<string>;
}

export const career: CareerEntry[] = [
  {
    id: "self-employed",
    kind: "work",
    period: { en: "Dec 2022 — Present", es: "Dic 2022 — Presente" },
    current: true,
    title: { en: "Software Developer", es: "Desarrollador de Software" },
    organization: { en: "Self-employed", es: "Independiente" },
    description: {
      en: "I design and ship web products end to end: database schema, APIs in Node.js and TypeScript, React and Next.js interfaces, and deployment. The rules that matter live in PostgreSQL: row-level security, triggers and transactional functions. Every project on this page is live.",
      es: "Diseño y publico productos web de punta a punta: esquema de base de datos, APIs en Node.js y TypeScript, interfaces en React y Next.js, y despliegue. Las reglas que importan viven en PostgreSQL: seguridad por filas, triggers y funciones transaccionales. Todos los proyectos de esta página están en vivo.",
    },
  },
  {
    id: "chatty",
    kind: "work",
    period: { en: "Oct 2025 — Present", es: "Oct 2025 — Presente" },
    current: true,
    title: { en: "Customer Success", es: "Customer Success" },
    organization: {
      en: "Chatty, WhatsApp CRM and automation platform",
      es: "Chatty, plataforma de CRM y automatizaciones sobre WhatsApp",
    },
    description: {
      en: "I take clients from implementation to day-to-day operation. I design the AI agents and automations that handle their conversations, and set up the metrics they use to measure campaigns and sales and decide what to change.",
      es: "Acompaño a los clientes desde la implementación hasta la operación diaria. Diseño los agentes de IA y las automatizaciones que atienden sus conversaciones, y armo las métricas con las que miden campañas y ventas y deciden qué cambiar.",
    },
  },
  {
    id: "imipp",
    kind: "work",
    period: { en: "Feb 2021 — Present", es: "Feb 2021 — Presente" },
    current: true,
    title: { en: "Administration & IT", es: "Administración y sistemas" },
    organization: {
      en: "Multidisciplinary Institute for Research in Pediatric Pathologies (IMIPP)",
      es: "Instituto Multidisciplinario de Investigaciones en Patologías Pediátricas (IMIPP)",
    },
    description: {
      en: "I manage procurement, payments and financial tracking, and invoice diagnostic, genomic and educational services. I maintain the regulatory and bioethics documentation, the equipment inventory and the IT infrastructure, and I built the institute's website. This role is where Vialo was born.",
      es: "Gestiono compras, pagos y seguimiento financiero, y facturo servicios diagnósticos, genómicos y educativos. Mantengo la documentación regulatoria y de bioética, el inventario de equipamiento y la infraestructura informática, y construí el sitio del instituto. De esta función nació Vialo.",
    },
  },
  {
    id: "cs-uba",
    kind: "education",
    period: { en: "2022 — 2023", es: "2022 — 2023" },
    title: { en: "Computer Science, two years of coursework", es: "Ciencias de la Computación, dos años de cursada" },
    organization: {
      en: "University of Buenos Aires, School of Natural and Exact Sciences",
      es: "Universidad de Buenos Aires, Facultad de Ciencias Exactas y Naturales",
    },
    description: {
      en: "Formal grounding in algorithms, data structures and computing fundamentals. I moved to self-directed study to make it fit with full-time work.",
      es: "Base formal en algoritmos, estructuras de datos y fundamentos de computación. Pasé al estudio autodirigido para hacerlo compatible con el trabajo full-time.",
    },
  },
  {
    id: "radiology",
    kind: "education",
    period: { en: "2018 — 2021", es: "2018 — 2021" },
    title: { en: "Radiology Technician", es: "Técnico en Radiología" },
    organization: {
      en: "University of Buenos Aires, School of Medicine",
      es: "Universidad de Buenos Aires, Facultad de Medicina",
    },
    description: {
      en: "Completed degree with clinical practice in hospitals, working alongside physicians, technicians and patients. The domain knowledge behind my backend work comes from here.",
      es: "Título completo con práctica clínica en hospitales, junto a médicos, técnicos y pacientes. De acá viene el conocimiento de dominio detrás de mi trabajo backend.",
    },
  },
];
