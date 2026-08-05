import type { Lang, Localized } from "../preferences/types";

export const site = {
  name: "Juan Paladea",
  url: "https://juanpaladea.com.ar",
  email: "juanpaladea5@gmail.com",
  photo: "/img/portrait-1024.jpeg",
  github: "https://github.com/JuanPaladea",
  linkedin: "https://www.linkedin.com/in/juan-francisco-paladea-5703b0191/",
  timezone: "UTC−3",
} as const;

/** Served from this domain so the link never breaks or changes permissions. */
export const cvUrl: Record<Lang, string> = {
  en: "/cv/juan-paladea-cv-en.pdf",
  es: "/cv/juan-paladea-cv-es.pdf",
};

export const role: Localized<string> = {
  en: "Backend Developer — APIs, automation & AI agents",
  es: "Desarrollador Backend — APIs, automatizaciones y agentes de IA",
};

export const location: Localized<string> = {
  en: "Buenos Aires, Argentina",
  es: "Buenos Aires, Argentina",
};

export const availability: Localized<string> = {
  en: "Available for remote work",
  es: "Disponible para trabajo remoto",
};

export const englishLevel: Localized<string> = {
  en: "C2 English",
  es: "Inglés C2",
};

export const summary: Localized<string> = {
  en: "I build APIs, automations and AI agents. At Chatty, a WhatsApp CRM platform, I take clients through implementation and build the automations, AI agents and custom metrics they run their sales on. In parallel I have spent five years inside a pediatric research institute, invoicing diagnostic and genomic services and keeping its systems running — so I model clinical and operational workflows from the inside. Node.js, TypeScript and PostgreSQL.",
  es: "Construyo APIs, automatizaciones y agentes de IA. En Chatty, una plataforma de CRM sobre WhatsApp, acompaño a los clientes en su implementación y armo las automatizaciones, agentes de IA y métricas personalizadas con las que venden. En paralelo, hace cinco años trabajo dentro de un instituto de investigación pediátrica facturando servicios diagnósticos y genómicos y manteniendo sus sistemas, así que modelo flujos clínicos y operativos desde adentro. Node.js, TypeScript y PostgreSQL.",
};

export const navLinks: { href: string; label: Localized<string> }[] = [
  { href: "#aboutme", label: { en: "About Me", es: "Sobre mí" } },
  { href: "#experience", label: { en: "Experience", es: "Experiencia" } },
  { href: "#skills", label: { en: "Skills", es: "Habilidades" } },
  { href: "#projects", label: { en: "Projects", es: "Proyectos" } },
];

export const contactNavLabel: Localized<string> = { en: "Contact", es: "Contacto" };

export const sectionCopy = {
  about: {
    title: { en: "About me", es: "Sobre mí" },
    subtitle: {
      en: "An unusual route into software, and why it turned out to be an advantage",
      es: "Un camino poco común hacia el software, y por qué terminó siendo una ventaja",
    },
  },
  experience: {
    title: { en: "Experience & education", es: "Experiencia y formación" },
    subtitle: {
      en: "Where I have worked and what I studied",
      es: "Dónde trabajé y qué estudié",
    },
  },
  skills: {
    title: { en: "Skills", es: "Habilidades" },
    subtitle: {
      en: "The technologies I reach for, grouped by where they fit in a project",
      es: "Las tecnologías que uso, agrupadas según su lugar en un proyecto",
    },
  },
  projects: {
    title: { en: "Projects", es: "Proyectos" },
    subtitle: {
      en: "Built, deployed and in use — every one has a live link",
      es: "Construidos, desplegados y en uso — todos tienen link en vivo",
    },
  },
  certifications: {
    title: { en: "Certifications", es: "Certificaciones" },
    subtitle: {
      en: "Where the fundamentals come from",
      es: "De dónde vienen los fundamentos",
    },
  },
  contact: {
    title: { en: "Contact", es: "Contacto" },
    subtitle: {
      en: "Let's talk about your next project",
      es: "Hablemos de tu próximo proyecto",
    },
  },
} satisfies Record<string, { title: Localized<string>; subtitle: Localized<string> }>;

export const aboutMe: Localized<string>[] = [
  {
    en: "I work on the Customer Success team at Chatty, a WhatsApp CRM and automation platform. I take clients through implementation and support, design the AI agents and automations that answer their customers, and set up the custom metrics they steer their sales by. It is the part of software I like most: sitting between what a product can do and what someone actually needs it to do.",
    es: "Trabajo en el equipo de Customer Success de Chatty, una plataforma de CRM y automatizaciones sobre WhatsApp. Acompaño a los clientes en su implementación y soporte, diseño los agentes de IA y las automatizaciones que responden a sus consumidores, y armo las métricas personalizadas con las que dirigen sus ventas. Es la parte del software que más me gusta: estar entre lo que un producto puede hacer y lo que alguien realmente necesita que haga.",
  },
  {
    en: "In parallel I have spent five years inside a pediatric pathology research institute: invoicing for diagnostic and genomic services, procurement, bioethics and regulatory documentation, lab equipment inventory, and the IT that keeps it all running. Before that I trained as a radiology technician at the University of Buenos Aires, with clinical practice in hospitals. I know what a study, an order and a compliance record actually are before I model them in a database.",
    es: "En paralelo, hace cinco años trabajo dentro de un instituto de investigación en patologías pediátricas: facturación de servicios diagnósticos y genómicos, compras, documentación regulatoria y de bioética, inventario de equipamiento de laboratorio y la infraestructura informática que sostiene todo eso. Antes me formé como Técnico en Radiología en la UBA, con práctica clínica en hospitales. Sé qué es realmente un estudio, una orden o un registro de cumplimiento antes de modelarlo en una base de datos.",
  },
  {
    en: "I started programming in 2021 and have been building software professionally since 2022. I studied computer science at UBA for two years and moved to self-directed learning to fit it around work, completing Harvard's CS50x and a backend programming course, and reinforcing both with projects that ship rather than sit in a repository. The combination is an unusual one: someone who can design and build the system, and also explain it to the person who has to use it.",
    es: "Empecé a programar en 2021 y desarrollo software profesionalmente desde 2022. Cursé dos años de Ciencias de la Computación en la UBA y pasé al aprendizaje autodirigido para compaginarlo con el trabajo: completé CS50x de Harvard y un curso de programación backend, y reforcé ambos con proyectos que salen a producción en vez de quedarse en un repositorio. La combinación es poco común: alguien que puede diseñar y construir el sistema, y también explicárselo a quien lo va a usar.",
  },
];
