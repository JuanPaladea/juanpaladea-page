import type { Localized } from "../preferences/types";
import type { Skill } from "./skills";

const icon = (file: string) => `/icons/${file}.svg`;

const tech = {
  typescript: { name: "TypeScript", icon: icon("typescript") },
  javascript: { name: "JavaScript", icon: icon("javascript") },
  postgres: { name: "PostgreSQL", icon: icon("postgresql") },
  vite: { name: "Vite", icon: icon("vite") },
  next: { name: "Next.js" },
  supabase: { name: "Supabase" },
  netlify: { name: "Netlify" },
  indexedDb: { name: "IndexedDB" },
  mcp: { name: "MCP" },
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
  /** Omitted when the source is private, so no card links to a 404. */
  repo?: string;
  /** Gets the full width of the grid. */
  featured?: boolean;
  stack: Skill[];
}

const product: Localized<string> = { en: "Product", es: "Producto" };
const inProduction: Localized<string> = { en: "In production", es: "En producción" };

export const projects: Project[] = [
  {
    id: "vialo",
    featured: true,
    category: product,
    title: "Vialo",
    description: {
      en: "A management platform for research laboratories, born from my role as staff at IMIPP. It brings samples, equipment, supplies, temperatures and protocols together, with permissions by role and a record of every change.",
      es: "Una plataforma de gestión para laboratorios de investigación, nacida de mi función como personal del IMIPP. Reúne muestras, equipos, insumos, temperaturas y protocolos, con permisos por rol y el registro de cada cambio.",
    },
    highlights: {
      en: [
        "Eight modules sharing users, permissions and history",
        "Each laboratory isolated with row-level security",
        "Connects to AI assistants through MCP",
      ],
      es: [
        "Ocho módulos con usuarios, permisos e historial en común",
        "Cada laboratorio aislado con seguridad por filas",
        "Se conecta a asistentes de IA por MCP",
      ],
    },
    image: "/img/project-vialo-monitoreo.jpg",
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt: {
      en: "Temperature monitoring in Vialo's public demo: a refrigerator out of range and its alarm history",
      es: "Monitoreo de temperaturas en la demo pública de Vialo: una heladera fuera de rango y su historial de alarmas",
    },
    demo: "https://vialolab.com/demo",
    demoLabel: { en: "Try the demo", es: "Probar la demo" },
    stack: [tech.next, tech.typescript, tech.supabase, tech.postgres, tech.mcp],
  },
  {
    id: "libelulis",
    category: inProduction,
    title: "Libelulis",
    description: {
      en: "The online store for Libelulis, handmade marbled accessories where every piece is one of a kind. Customers order through WhatsApp, and a full panel runs the business behind it.",
      es: "La tienda online de Libelulis, accesorios marmolados hechos a mano donde cada pieza es única. Se compra por WhatsApp, y detrás hay un panel completo para manejar el negocio.",
    },
    highlights: {
      en: [
        "Pieces reserved for 48 hours in a single transaction",
        "No account needed to buy",
        "Panel for orders, sales, costs, customers and stock",
      ],
      es: [
        "Piezas reservadas por 48 horas en una sola transacción",
        "Para comprar no hace falta cuenta",
        "Panel de pedidos, ventas, costos, clientes e insumos",
      ],
    },
    image: "/img/project-libelulis.jpg",
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt: {
      en: "Libelulis online store home page",
      es: "Inicio de la tienda online de Libelulis",
    },
    demo: "https://libelulis.com.ar/",
    demoLabel: { en: "Visit the store", es: "Ver la tienda" },
    stack: [tech.next, tech.typescript, tech.supabase, tech.postgres, tech.netlify],
  },
  {
    id: "en-una-nota",
    category: product,
    title: "En una nota · Ensalada mixta",
    description: {
      en: "A party game for singing with friends: a hidden song plays, cuts off, and the first team to shout has to keep going. It runs on plain JavaScript and grew a solo mode, Google accounts and a ranking the database verifies by itself.",
      es: "Un juego para cantar con amigos: suena una canción tapada, se corta, y el primer equipo en gritar tiene que seguirla. Está hecho en JavaScript puro y sumó modo un jugador, cuentas con Google y un ranking que verifica la propia base de datos.",
    },
    highlights: {
      en: [
        "16 curated playlists with more than 1,000 songs",
        "Ranking checked step by step in Postgres",
        "Your own audio in IndexedDB, playable offline",
      ],
      es: [
        "16 playlists curadas con más de 1000 canciones",
        "Ranking comprobado paso a paso en Postgres",
        "Tu propio audio en IndexedDB, también sin internet",
      ],
    },
    image: "/img/project-en-una-nota.jpg",
    imageWidth: 1280,
    imageHeight: 720,
    imageAlt: {
      en: "En una nota home screen, choosing between playing with friends or alone",
      es: "Inicio de En una nota, con la elección entre jugar con amigos o solo",
    },
    demo: "https://enunanota.com.ar/",
    demoLabel: { en: "Play it", es: "Jugar" },
    repo: "https://github.com/JuanPaladea/en-una-nota-ensalada-mixta",
    stack: [tech.javascript, tech.vite, tech.postgres, tech.netlify, tech.indexedDb],
  },
];
