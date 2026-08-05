import type { Localized } from "../preferences/types";

export interface Certification {
  id: string;
  title: Localized<string>;
  issuer: Localized<string>;
  description: Localized<string>;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: Localized<string>;
  url: string;
}

export const certifications: Certification[] = [
  {
    id: "efset",
    title: { en: "EF Standard English Test", es: "EF Standard English Test" },
    issuer: { en: "EFSET — C2 Proficiency", es: "EFSET — C2 Proficiente" },
    description: {
      en: "C2 Proficient level in the EF SET 50-minute format: the top band of the Common European Framework, covering listening and reading comprehension.",
      es: "Nivel C2 Proficiente en el formato de 50 minutos del EF SET: la banda más alta del Marco Común Europeo, evaluando comprensión auditiva y lectora.",
    },
    image: "/img/cert-efset.png",
    imageWidth: 640,
    imageHeight: 599,
    imageAlt: {
      en: "EF SET C2 Proficiency certificate",
      es: "Certificado EF SET nivel C2",
    },
    url: "https://cert.efset.org/tcPa8L",
  },
  {
    id: "cs50x",
    title: { en: "Computer Science — CS50x", es: "Ciencias de la Computación — CS50x" },
    issuer: { en: "Harvard University", es: "Universidad de Harvard" },
    description: {
      en: "Harvard's introduction to computer science: algorithms, data structures, memory management and web development, with problem sets in C, Python and SQL.",
      es: "La introducción a las ciencias de la computación de Harvard: algoritmos, estructuras de datos, gestión de memoria y desarrollo web, con ejercicios en C, Python y SQL.",
    },
    image: "/img/cert-cs50x.png",
    imageWidth: 640,
    imageHeight: 510,
    imageAlt: {
      en: "Harvard CS50x certificate",
      es: "Certificado CS50x de Harvard",
    },
    url: "https://certificates.cs50.io/31f7f89e-7a94-4c88-9509-44d216119600.pdf",
  },
  {
    id: "coderhouse-backend",
    title: { en: "Backend Programming Course", es: "Curso de Programación Backend" },
    issuer: { en: "Coderhouse", es: "Coderhouse" },
    description: {
      en: "Server-side development with JavaScript, Express.js and MongoDB, built around designing, testing and documenting a complete RESTful API.",
      es: "Desarrollo del lado del servidor con JavaScript, Express.js y MongoDB, centrado en diseñar, testear y documentar una API RESTful completa.",
    },
    image: "/img/cert-coderhouse.png",
    imageWidth: 641,
    imageHeight: 468,
    imageAlt: {
      en: "Coderhouse backend programming certificate",
      es: "Certificado de programación backend de Coderhouse",
    },
    url: "https://pub.coderhouse.com/legacy-certificates/66ae613c13652079130ca8fd?lang=en",
  },
];
