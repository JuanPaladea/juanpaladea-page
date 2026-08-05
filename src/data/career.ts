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
    id: "chatty",
    kind: "work",
    period: { en: "Oct 2025 — Present", es: "Oct 2025 — Presente" },
    current: true,
    title: { en: "Customer Success", es: "Customer Success" },
    organization: {
      en: "Chatty — WhatsApp CRM & automation platform",
      es: "Chatty — plataforma de CRM y automatizaciones sobre WhatsApp",
    },
    description: {
      en: "Guide clients through platform implementation and ongoing support. Design and build the AI agents and automations that handle their customer conversations, and set up the custom metrics they use to measure and act on campaign and sales performance.",
      es: "Acompaño a los clientes en la implementación de la plataforma y su soporte continuo. Diseño y construyo los agentes de IA y las automatizaciones que atienden sus conversaciones, y armo las métricas personalizadas con las que miden y accionan sobre el rendimiento de campañas y ventas.",
    },
  },
  {
    id: "self-employed",
    kind: "work",
    period: { en: "Dec 2022 — Present", es: "Dic 2022 — Presente" },
    current: true,
    title: { en: "Software Developer", es: "Desarrollador de Software" },
    organization: { en: "Self-employed", es: "Independiente" },
    description: {
      en: "Design and ship web products end to end, from database schema to deployment: RESTful APIs in Node.js and TypeScript, React frontends, and the infrastructure around them. Every project is publicly deployed and open source.",
      es: "Diseño y publico productos web de punta a punta, del esquema de base de datos al despliegue: APIs RESTful en Node.js y TypeScript, frontends en React y la infraestructura alrededor. Todos los proyectos están desplegados públicamente y con código abierto.",
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
      en: "Manage procurement, payments and financial tracking across operational and scientific accounts, and handle invoicing and collection for diagnostic, genomic and educational services. Maintain regulatory and bioethics documentation for scientific projects, lab equipment inventory, and the institute's IT infrastructure. Built and maintain its public website.",
      es: "Gestiono compras, pagos y seguimiento financiero de cuentas operativas y científicas, y me ocupo de la facturación y cobranza de servicios diagnósticos, genómicos y educativos. Mantengo la documentación regulatoria y de bioética de los proyectos científicos, el inventario de equipamiento de laboratorio y la infraestructura informática del instituto. Construí y mantengo su sitio público.",
    },
  },
  {
    id: "cs-uba",
    kind: "education",
    period: { en: "2022 — 2023", es: "2022 — 2023" },
    title: { en: "Computer Science — two years of coursework", es: "Ciencias de la Computación — dos años de cursada" },
    organization: {
      en: "University of Buenos Aires, School of Natural and Exact Sciences",
      es: "Universidad de Buenos Aires, Facultad de Ciencias Exactas y Naturales",
    },
    description: {
      en: "Formal grounding in algorithms, data structures and computing fundamentals. Moved to self-directed study to keep it compatible with full-time work.",
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
      en: "Completed degree with clinical practice in hospital environments, working alongside physicians, technicians and patients — where the domain knowledge behind my backend work comes from.",
      es: "Título completo con práctica clínica en entornos hospitalarios, trabajando junto a médicos, técnicos y pacientes — de ahí viene el conocimiento de dominio detrás de mi trabajo backend.",
    },
  },
];
