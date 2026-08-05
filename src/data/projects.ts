import type { Localized } from "../preferences/types";
import type { Skill } from "./skills";

const icon = (file: string) => `/icons/${file}.svg`;

const tech = {
  node: { name: "Node.js", icon: icon("node") },
  express: { name: "Express", icon: icon("express") },
  typescript: { name: "TypeScript", icon: icon("typescript") },
  javascript: { name: "JavaScript", icon: icon("javascript") },
  postgres: { name: "PostgreSQL", icon: icon("postgresql") },
  react: { name: "React", icon: icon("react") },
  vite: { name: "Vite", icon: icon("vite") },
  tailwind: { name: "Tailwind CSS", icon: icon("tailwind") },
  firebase: { name: "Firebase", icon: icon("firebase") },
  swagger: { name: "Swagger" },
  jwt: { name: "JWT" },
  indexedDb: { name: "IndexedDB" },
} satisfies Record<string, Skill>;

export interface Project {
  id: string;
  category: Localized<string>;
  title: string;
  /** Two or three sentences — the card stays readable at a glance. */
  description: Localized<string>;
  /** Short outcome bullets shown under the description. */
  highlights: Localized<string[]>;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: Localized<string>;
  demo: string;
  demoLabel: Localized<string>;
  repo: string;
  stack: Skill[];
}

const backEnd: Localized<string> = { en: "Back End", es: "Backend" };
const product: Localized<string> = { en: "Product", es: "Producto" };
const clientWork: Localized<string> = { en: "In production", es: "En producción" };

export const projects: Project[] = [
  {
    id: "hospital-backend",
    category: backEnd,
    title: "Hospital Backend",
    description:
      {
        en: "RESTful API for clinical data — patients, studies and billing — modelled on the workflows I handle day to day at a research institute. Authentication, file uploads for study results and payment proofs, and a fully documented endpoint surface.",
        es: "API RESTful para datos clínicos —pacientes, estudios y facturación— modelada sobre los flujos que manejo a diario en un instituto de investigación. Autenticación, carga de archivos para resultados de estudios y comprobantes de pago, y endpoints completamente documentados.",
      },
    highlights: {
      en: [
        "JWT sessions with bcrypt-hashed passwords",
        "PostgreSQL schema for patients, studies and bills",
        "Swagger docs, deployed on Render",
      ],
      es: [
        "Sesiones con JWT y contraseñas hasheadas con bcrypt",
        "Esquema PostgreSQL para pacientes, estudios y facturas",
        "Documentación con Swagger, desplegada en Render",
      ],
    },
    image: "/img/hospital-backend.png",
    imageWidth: 640,
    imageHeight: 293,
    imageAlt: {
      en: "Swagger documentation page of the Hospital Backend API",
      es: "Página de documentación Swagger de la API Hospital Backend",
    },
    demo: "https://hospital-backend-kapu.onrender.com/docs/",
    demoLabel: { en: "API docs", es: "Documentación" },
    repo: "https://github.com/JuanPaladea/hospital-backend",
    stack: [tech.node, tech.express, tech.typescript, tech.postgres, tech.jwt, tech.swagger],
  },
  {
    id: "imipp",
    category: clientWork,
    title: "IMIPP — Research Institute",
    description: {
      en: "The public site for the pediatric pathology research institute where I work. I built it so the team can publish papers, news and services straight from Firestore, without a developer in the loop for every change.",
      es: "El sitio público del instituto de investigación en patologías pediátricas donde trabajo. Lo construí para que el equipo publique papers, novedades y servicios directamente desde Firestore, sin depender de un desarrollador para cada cambio.",
    },
    highlights: {
      en: [
        "In production for a real research institute",
        "Content managed from Firebase/Firestore",
        "Modular React architecture, deployed on Vercel",
      ],
      es: [
        "En producción para un instituto de investigación real",
        "Contenido gestionado desde Firebase/Firestore",
        "Arquitectura React modular, desplegada en Vercel",
      ],
    },
    image: "/img/imipp.png",
    imageWidth: 640,
    imageHeight: 371,
    imageAlt: {
      en: "IMIPP research institute landing page",
      es: "Landing del instituto de investigación IMIPP",
    },
    demo: "https://imipp.vercel.app/",
    demoLabel: { en: "Live site", es: "Ver sitio" },
    repo: "https://github.com/JuanPaladea/imipp",
    stack: [tech.react, tech.vite, tech.tailwind, tech.firebase],
  },
  {
    id: "en-una-nota",
    category: product,
    title: "En una nota · Ensalada mixta",
    description: {
      en: "A party game for singing with friends: a random song plays, cuts off after a beat, and the first team to shout has to keep going. A finished product on its own domain — not a demo — built in vanilla JavaScript with zero runtime dependencies.",
      es: "Un juego para cantar con amigos: suena una canción al azar, se corta a los pocos segundos y el primer equipo en gritar tiene que seguirla. Un producto terminado con dominio propio —no una demo— hecho en JavaScript puro, sin dependencias de runtime.",
    },
    highlights: {
      en: [
        "11 curated playlists with 350+ songs",
        "Works offline — custom audio persisted in IndexedDB",
        "Zero runtime dependencies, deployed on Netlify",
      ],
      es: [
        "11 playlists curadas con más de 350 canciones",
        "Funciona sin internet: audio propio guardado en IndexedDB",
        "Cero dependencias de runtime, desplegado en Netlify",
      ],
    },
    image: "/img/en-una-nota.svg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: {
      en: "En una nota · Ensalada mixta cover artwork",
      es: "Portada de En una nota · Ensalada mixta",
    },
    demo: "https://enunanota.com.ar/",
    demoLabel: { en: "Play it", es: "Jugar" },
    repo: "https://github.com/JuanPaladea/en-una-nota-ensalada-mixta",
    stack: [tech.javascript, tech.vite, tech.indexedDb],
  },
];
