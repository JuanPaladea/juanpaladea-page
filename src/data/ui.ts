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

  available: { en: "Open to backend opportunities", es: "Disponible para oportunidades backend" },
  viewProjects: { en: "View projects", es: "Ver proyectos" },
  getInTouch: { en: "Get in touch", es: "Contactame" },
  cv: { en: "CV", es: "CV" },

  opensInNewTab: { en: "opens in a new tab", es: "se abre en una pestaña nueva" },
  sourceOnGitHub: { en: "source code on GitHub", es: "código fuente en GitHub" },
  code: { en: "Code", es: "Código" },
  certificateOf: { en: "certificate", es: "certificado" },

  contactTitle: { en: "Contact me", es: "Escribime" },
  contactBlurb: {
    en: "I usually reply within a couple of days.",
    es: "Normalmente respondo en un par de días.",
  },
  addressLabel: { en: "ADDRESS", es: "UBICACIÓN" },
  emailLabel: { en: "EMAIL", es: "EMAIL" },
  emailField: { en: "Email", es: "Email" },
  messageField: { en: "Message", es: "Mensaje" },
  send: { en: "Send", es: "Enviar" },
  sending: { en: "Sending…", es: "Enviando…" },
  mapOf: { en: "Map of", es: "Mapa de" },

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
