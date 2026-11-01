import type { Localized } from "../preferences/types";

export interface PipelineStep {
  id: "message" | "agent" | "automation" | "data" | "metric";
  /** Tag shown on the node in the diagram. */
  tag: Localized<string>;
  title: Localized<string>;
  body: Localized<string>;
}

export const pipelineSteps: PipelineStep[] = [
  {
    id: "message",
    tag: { en: "WhatsApp", es: "WhatsApp" },
    title: { en: "Someone writes on WhatsApp", es: "Alguien escribe por WhatsApp" },
    body: {
      en: "It starts with a person who wants something and will not wait.",
      es: "Todo arranca con una persona que quiere algo y no va a esperar.",
    },
  },
  {
    id: "agent",
    tag: { en: "AI agent", es: "Agente de IA" },
    title: { en: "An AI agent answers", es: "Un agente de IA responde" },
    body: {
      en: "With the business's context, its rules and a clear line for when to hand over to a person.",
      es: "Con el contexto del negocio, sus reglas y un límite claro de cuándo pasarle la charla a una persona.",
    },
  },
  {
    id: "automation",
    tag: { en: "Automation", es: "Automatización" },
    title: { en: "An automation moves the sale", es: "Una automatización mueve la venta" },
    body: {
      en: "It tags the contact, advances the funnel and schedules the follow-up, so nobody has to remember.",
      es: "Etiqueta el contacto, avanza el embudo y programa el seguimiento, sin que nadie lo tenga que recordar.",
    },
  },
  {
    id: "data",
    tag: { en: "API + PostgreSQL", es: "API + PostgreSQL" },
    title: { en: "The API records it", es: "La API lo registra" },
    body: {
      en: "Node.js, TypeScript and PostgreSQL, with integrity enforced in the database rather than in code someone can forget to call.",
      es: "Node.js, TypeScript y PostgreSQL, con la integridad cuidada en la base y no en código que alguien puede olvidarse de llamar.",
    },
  },
  {
    id: "metric",
    tag: { en: "Metric", es: "Métrica" },
    title: { en: "Someone decides with a number", es: "Alguien decide con un número" },
    body: {
      en: "Custom metrics that show which campaign works and what is worth changing.",
      es: "Métricas a medida para saber qué campaña rinde y qué conviene cambiar.",
    },
  },
];

/** Copy drawn inside the diagram. Decorative: the steps above carry the meaning. */
export const pipelineLabels = {
  customerMessage: { en: "Hi! How much is it?", es: "¡Hola! ¿Cuánto sale?" },
  agentReply: { en: "Here are your options", es: "Te paso las opciones" },
  stages: {
    en: ["New", "Qualified", "Follow-up"],
    es: ["Nuevo", "Calificado", "Seguimiento"],
  },
} satisfies Record<string, Localized<string | string[]>>;
