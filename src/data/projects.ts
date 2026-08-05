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
const frontEnd: Localized<string> = { en: "Front End", es: "Frontend" };

export const projects: Project[] = [
  {
    id: "hospital-backend",
    category: backEnd,
    title: "Hospital Backend",
    description: {
      en: "RESTful API that manages healthcare data — patients, studies and billing — with authentication, file uploads and a documented endpoint surface.",
      es: "API RESTful que gestiona datos clínicos —pacientes, estudios y facturación— con autenticación, carga de archivos y endpoints documentados.",
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
    id: "en-una-nota",
    category: frontEnd,
    title: "En una nota · Ensalada mixta",
    description: {
      en: "A party game for singing with friends: a random song plays, cuts off after a beat, and the first team to shout has to keep going. Built in vanilla JavaScript with zero runtime dependencies.",
      es: "Un juego para cantar con amigos: suena una canción al azar, se corta a los pocos segundos y el primer equipo en gritar tiene que seguirla. Hecho en JavaScript puro, sin dependencias de runtime.",
    },
    highlights: {
      en: [
        "11 playlists with 350+ songs across genres",
        "Works offline — custom audio persisted in IndexedDB",
        "Scoreboard and play history kept in the browser",
      ],
      es: [
        "11 playlists con más de 350 canciones de distintos géneros",
        "Funciona sin internet: audio propio guardado en IndexedDB",
        "Tabla de puntajes e historial guardados en el navegador",
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
  {
    id: "imipp",
    category: frontEnd,
    title: "IMIPP — Landing Page",
    description: {
      en: "Responsive landing page for a research institute, with content served from Firestore so the team can publish without touching code.",
      es: "Landing responsive para un instituto de investigación, con contenido servido desde Firestore para que el equipo publique sin tocar código.",
    },
    highlights: {
      en: [
        "Modular React architecture with React Router",
        "Content fetched from Firebase/Firestore",
        "Contact form wired to EmailJS, deployed on Vercel",
      ],
      es: [
        "Arquitectura React modular con React Router",
        "Contenido traído desde Firebase/Firestore",
        "Formulario de contacto con EmailJS, desplegado en Vercel",
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
    demoLabel: { en: "Live demo", es: "Ver sitio" },
    repo: "https://github.com/JuanPaladea/imipp",
    stack: [tech.react, tech.vite, tech.tailwind, tech.firebase],
  },
];
