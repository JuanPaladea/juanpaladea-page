import type { Localized } from "../preferences/types";

export interface PipelineStep {
  id: "change" | "role" | "isolation" | "trigger" | "history";
  /** Tag shown on the node in the diagram. */
  tag: Localized<string>;
  title: Localized<string>;
  body: Localized<string>;
}

export const pipelineSteps: PipelineStep[] = [
  {
    id: "change",
    tag: { en: "Interface", es: "Interfaz" },
    title: { en: "Someone makes a change", es: "Alguien carga un cambio" },
    body: {
      en: "It could be a sample, a piece of equipment or a supply. Here, a sample goes into use.",
      es: "Puede ser una muestra, un equipo o un insumo. Acá, una muestra que pasa a estar en uso.",
    },
  },
  {
    id: "role",
    tag: { en: "Role", es: "Rol" },
    title: { en: "Permissions check it", es: "Los permisos lo validan" },
    body: {
      en: "Each person has a role in each laboratory, and the application checks that it is enough before saving.",
      es: "Cada persona tiene un rol en cada laboratorio, y la aplicación revisa que le alcance antes de guardar.",
    },
  },
  {
    id: "isolation",
    tag: { en: "Row-level security", es: "Seguridad por filas" },
    title: { en: "The database isolates the laboratory", es: "La base aísla el laboratorio" },
    body: {
      en: "A row-level security policy checks it again against the lab_id, so a bug in the application cannot cross data between laboratories.",
      es: "Una política de seguridad por filas lo vuelve a comprobar con el lab_id, así un error en la aplicación no puede cruzar datos entre laboratorios.",
    },
  },
  {
    id: "trigger",
    tag: { en: "Trigger", es: "Trigger" },
    title: { en: "A trigger records it", es: "Un trigger lo registra" },
    body: {
      en: "It stores who did it, when and what the previous value was. It lives in the database, so no screen can skip it.",
      es: "Guarda quién lo hizo, cuándo y qué valor tenía antes. Vive en la base, así ninguna pantalla se lo puede saltear.",
    },
  },
  {
    id: "history",
    tag: { en: "History", es: "Historial" },
    title: { en: "It stays in the history", es: "Queda en el historial" },
    body: {
      en: "A record nobody can edit, one that holds up in an audit.",
      es: "Un registro que nadie puede editar y que resiste una auditoría.",
    },
  },
];

/** Copy drawn inside the diagram. Decorative: the steps above carry the meaning. */
export const pipelineLabels = {
  change: { en: "Sample: in use", es: "Muestra: en uso" },
  role: { en: "Contributor ✓", es: "Colaborador/a ✓" },
  checks: {
    en: ["Their session", "Their laboratory", "Their module"],
    es: ["Su sesión", "Su laboratorio", "Su módulo"],
  },
  valueChange: { en: "Available → In use", es: "Disponible → En uso" },
  record: {
    en: ["who: contributor", "when: today, 14:32", "before: Available"],
    es: ["quién: colaborador/a", "cuándo: hoy, 14:32", "antes: Disponible"],
  },
} satisfies Record<string, Localized<string | string[]>>;
