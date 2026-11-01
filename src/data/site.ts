import type { Lang, Localized } from "../preferences/types";
import { projects } from "./projects";

export const site = {
  name: "Juan Paladea",
  url: "https://juanpaladea.com.ar",
  email: "juanpaladea5@gmail.com",
  github: "https://github.com/JuanPaladea",
  linkedin: "https://www.linkedin.com/in/juan-francisco-paladea-5703b0191/",
  calendar: "https://calendar.app.google/x3QsQgLZfA2AHXnN7",
  timezone: "UTC−3",
} as const;

/** Served from this domain so the link never breaks or changes permissions. */
export const cvUrl: Record<Lang, string> = {
  en: "/cv/juan-paladea-cv-en.pdf",
  es: "/cv/juan-paladea-cv-es.pdf",
};

export const role: Localized<string> = {
  en: "Full-stack Developer",
  es: "Desarrollador Full-stack",
};

/** The hero cycles through these after the role. */
export const roleFocus: Localized<string[]> = {
  en: ["APIs", "automation", "AI agents"],
  es: ["APIs", "automatizaciones", "agentes de IA"],
};

export const location: Localized<string> = {
  en: "Buenos Aires, Argentina",
  es: "Buenos Aires, Argentina",
};

export const englishLevel: Localized<string> = {
  en: "C2 English",
  es: "Inglés C2",
};

export const summary: Localized<string> = {
  en: "I build complete products, from the database to the interface, with my focus on the backend. I also know the other side: the clients who use the software and the clinical work it has to model.",
  es: "Construyo productos completos, de la base de datos a la interfaz, con el foco puesto en el backend. También conozco el otro lado: los clientes que usan el software y el trabajo clínico que tiene que modelar.",
};

export const navLinks: { href: string; label: Localized<string> }[] = [
  { href: "#aboutme", label: { en: "About me", es: "Sobre mí" } },
  { href: "#experience", label: { en: "Experience", es: "Experiencia" } },
  { href: "#projects", label: { en: "Projects", es: "Proyectos" } },
  { href: "#skills", label: { en: "Skills", es: "Habilidades" } },
];

export const contactNavLabel: Localized<string> = { en: "Contact", es: "Contacto" };

export const sectionCopy = {
  about: {
    title: { en: "About me", es: "Sobre mí" },
    subtitle: {
      en: "From the hospital to the code",
      es: "Del hospital al código",
    },
  },
  how: {
    title: { en: "From message to metric", es: "Del mensaje a la métrica" },
    subtitle: {
      en: "What I do, drawn as the path of one conversation",
      es: "Lo que hago, dibujado como el recorrido de una conversación",
    },
  },
  experience: {
    title: { en: "Experience & education", es: "Experiencia y formación" },
    subtitle: {
      en: "Where I work today and where I come from",
      es: "Dónde trabajo hoy y de dónde vengo",
    },
  },
  projects: {
    title: { en: "Projects", es: "Proyectos" },
    subtitle: {
      en: "Published, in use, and built end to end",
      es: "Publicados, en uso y construidos de punta a punta",
    },
  },
  skills: {
    title: { en: "Skills", es: "Habilidades" },
    subtitle: {
      en: "The tools I use, by where they fit in a project",
      es: "Las herramientas que uso, según dónde entran en un proyecto",
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
      en: "Let's talk",
      es: "Hablemos",
    },
  },
} satisfies Record<string, { title: Localized<string>; subtitle: Localized<string> }>;

export const aboutLead: Localized<string> = {
  en: "I came to software from a hospital, and that changes how I build it.",
  es: "Llegué al software desde un hospital, y eso cambia cómo lo construyo.",
};

export const aboutMe: Localized<string>[] = [
  {
    en: "I trained as a radiology technician at the University of Buenos Aires, with clinical practice in hospitals. Since 2021 I have worked at IMIPP, a pediatric pathology research institute, where I handle invoicing for diagnostic and genomic services, procurement, regulatory documentation and IT. So before I model a study, an order or a compliance record in a database, I already know what it is and who depends on it.",
    es: "Me formé como Técnico en Radiología en la UBA, con práctica clínica en hospitales. Desde 2021 trabajo en el IMIPP, un instituto de investigación en patologías pediátricas, donde me ocupo de la facturación de servicios diagnósticos y genómicos, las compras, la documentación regulatoria y los sistemas. Por eso, antes de modelar un estudio, una orden o un registro de cumplimiento en una base de datos, ya sé qué son y quién depende de ellos.",
  },
  {
    en: "That role is where Vialo was born: the management platform for research laboratories that I build today, for the same day-to-day work I do at the institute.",
    es: "De esa función nació Vialo, la plataforma de gestión para laboratorios de investigación que construyo hoy, pensada para el mismo trabajo de todos los días que hago en el instituto.",
  },
  {
    en: "I started programming in 2021 and have built software professionally since 2022. I studied computer science at UBA for two years, then completed Harvard's CS50x and a backend programming course. Everything I learned ended up in published projects, not in forgotten repositories.",
    es: "Empecé a programar en 2021 y desarrollo profesionalmente desde 2022. Cursé dos años de Ciencias de la Computación en la UBA, completé CS50x de Harvard y un curso de programación backend. Todo lo que aprendí terminó en proyectos publicados, no en repositorios olvidados.",
  },
  {
    en: "I also work in Customer Success at Chatty, a WhatsApp CRM and automation platform. I take clients through implementation, design the AI agents and automations that answer their customers, and set up the metrics they steer their sales by. It is the part I like most: sitting between what a product can do and what someone needs it to do.",
    es: "También trabajo en Customer Success en Chatty, una plataforma de CRM y automatizaciones sobre WhatsApp. Acompaño a los clientes en la implementación, diseño los agentes de IA y las automatizaciones que responden a sus consumidores, y armo las métricas con las que dirigen sus ventas. Es la parte que más me gusta: estar entre lo que un producto puede hacer y lo que alguien necesita que haga.",
  },
];

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

/** Whole years since a date, so these figures do not go stale with the calendar. */
const yearsSince = (date: string) => Math.floor((Date.now() - new Date(date).getTime()) / MS_PER_YEAR);

export interface AboutStat {
  /** Numbers count up on reveal; anything else is shown as written. */
  value: number | string;
  suffix?: string;
  label: Localized<string>;
}

export const aboutStats: AboutStat[] = [
  {
    value: yearsSince("2021-02-01"),
    suffix: "+",
    label: {
      en: "years inside a research institute",
      es: "años dentro de un instituto de investigación",
    },
  },
  {
    value: yearsSince("2022-12-01"),
    suffix: "+",
    label: {
      en: "years building software professionally",
      es: "años desarrollando software profesionalmente",
    },
  },
  {
    value: projects.length,
    label: { en: "products live", es: "productos en vivo" },
  },
  {
    value: "C2",
    label: { en: "certified English", es: "inglés certificado" },
  },
];
