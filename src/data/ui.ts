import type { Localized } from "../preferences/types";

/** Interface copy. Content copy lives in the other files under src/data. */
export const ui = {
  skipToContent: { en: "Skip to content", es: "Ir al contenido" },
  openMenu: { en: "Open menu", es: "Abrir menú" },
  closeMenu: { en: "Close menu", es: "Cerrar menú" },
  mainNav: { en: "Main", es: "Principal" },
  mobileNav: { en: "Mobile", es: "Móvil" },

  toLight: { en: "Switch to light theme", es: "Cambiar a tema claro" },
  toDark: { en: "Switch to dark theme", es: "Cambiar a tema oscuro" },
  languageLabel: { en: "Language", es: "Idioma" },
  switchToSpanish: { en: "Ver en español", es: "Ver en español" },
  switchToEnglish: { en: "View in English", es: "View in English" },

  viewProjects: { en: "View projects", es: "Ver proyectos" },
  getInTouch: { en: "Get in touch", es: "Contactame" },
  downloadCv: { en: "Download CV", es: "Descargar CV" },
  cvPdfHint: { en: "PDF", es: "PDF" },

  work: { en: "Work", es: "Trabajo" },
  education: { en: "Education", es: "Formación" },

  caseStudy: { en: "Read the case study", es: "Ver el caso completo" },
  backToProjects: { en: "Back to all projects", es: "Volver a todos los proyectos" },
  contextHeading: { en: "Context", es: "Contexto" },
  decisionsHeading: { en: "Key decisions", es: "Decisiones clave" },
  nextHeading: { en: "What is missing", es: "Qué falta" },
  stackHeading: { en: "Stack", es: "Stack" },
  bookCall: { en: "Book a call", es: "Agendar una llamada" },
  bookCallHint: {
    en: "Pick a slot that works for you — 30 minutes, no preparation needed.",
    es: "Elegí un horario que te sirva — 30 minutos, sin preparación.",
  },
  orWriteInstead: { en: "Prefer to write? Use the form.", es: "¿Preferís escribir? Usá el formulario." },

  opensInNewTab: { en: "opens in a new tab", es: "se abre en una pestaña nueva" },
  sourceOnGitHub: { en: "source code on GitHub", es: "código fuente en GitHub" },
  code: { en: "Code", es: "Código" },
  certificateOf: { en: "certificate", es: "certificado" },

  contactTitle: { en: "Contact me", es: "Escribime" },
  contactBlurb: {
    en: "I usually reply within a couple of days.",
    es: "Normalmente respondo en un par de días.",
  },
  basedIn: { en: "Based in", es: "Ubicación" },
  timezoneLabel: { en: "Time zone", es: "Zona horaria" },
  languagesLabel: { en: "Languages", es: "Idiomas" },
  languagesValue: {
    en: "Spanish (native) · English (C2 certified)",
    es: "Español (nativo) · Inglés (C2 certificado)",
  },
  openToLabel: { en: "Open to", es: "Abierto a" },
  openToValue: {
    en: "Remote roles, full-time or contract",
    es: "Trabajo remoto, full-time o por contrato",
  },
  emailLabel: { en: "Email", es: "Email" },
  emailField: { en: "Email", es: "Email" },
  messageField: { en: "Message", es: "Mensaje" },
  send: { en: "Send", es: "Enviar" },
  sending: { en: "Sending…", es: "Enviando…" },

  errorEmailRequired: { en: "Please enter your email.", es: "Ingresá tu email." },
  errorEmailInvalid: {
    en: "Please enter a valid email address.",
    es: "Ingresá una dirección de email válida.",
  },
  errorMessageRequired: { en: "Please write a message.", es: "Escribí un mensaje." },
  errorMessageShort: {
    en: "Your message should be at least 10 characters long.",
    es: "El mensaje debe tener al menos 10 caracteres.",
  },
  toastSuccess: { en: "Message sent successfully.", es: "Mensaje enviado correctamente." },
  toastError: {
    en: "Something went wrong. Please try again later.",
    es: "Algo salió mal. Probá de nuevo más tarde.",
  },
  toastUnavailable: {
    en: "Contact form is unavailable. Please email me at",
    es: "El formulario no está disponible. Escribime a",
  },

  portraitOf: { en: "Portrait of", es: "Retrato de" },
} satisfies Record<string, Localized<string>>;
