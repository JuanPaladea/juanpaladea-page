import type { Localized } from "../preferences/types";

export const site = {
  name: "Juan Paladea",
  url: "https://juanpaladea.com.ar",
  email: "juanpaladea5@gmail.com",
  photo: "/img/portrait-1024.jpeg",
  cv: "https://drive.google.com/file/d/1b_S2-fbZt_qIW90RjseIYeyqvYDLBZ5_/view?usp=sharing",
  github: "https://github.com/JuanPaladea",
  linkedin: "https://www.linkedin.com/in/juan-francisco-paladea-5703b0191/",
} as const;

export const role: Localized<string> = {
  en: "Backend Software Developer",
  es: "Desarrollador Backend",
};

export const location: Localized<string> = {
  en: "Buenos Aires, Argentina",
  es: "Buenos Aires, Argentina",
};

export const summary: Localized<string> = {
  en: "I am a software developer focused on backend development. I have experience in building RESTful APIs and services using Node.js and Express.js. I am also familiar with databases like MongoDB and MySQL. I am looking for opportunities to work on exciting projects and learn new technologies.",
  es: "Soy desarrollador de software enfocado en backend. Tengo experiencia construyendo APIs RESTful y servicios con Node.js y Express.js, y trabajo con bases de datos como MongoDB, PostgreSQL y MySQL. Busco oportunidades para sumarme a proyectos desafiantes y seguir aprendiendo.",
};

export const navLinks: { href: string; label: Localized<string> }[] = [
  { href: "#aboutme", label: { en: "About Me", es: "Sobre mí" } },
  { href: "#skills", label: { en: "Skills", es: "Habilidades" } },
  { href: "#projects", label: { en: "Projects", es: "Proyectos" } },
  { href: "#certifications", label: { en: "Certifications", es: "Certificaciones" } },
];

export const contactNavLabel: Localized<string> = { en: "Contact", es: "Contacto" };

export const sectionCopy = {
  about: {
    title: { en: "About me", es: "Sobre mí" },
    subtitle: {
      en: "From radiology to backend engineering",
      es: "De la radiología a la ingeniería backend",
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
      en: "Things I designed, built and shipped",
      es: "Cosas que diseñé, construí y publiqué",
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
    en: "Backend software developer, committed to continuous learning and professional growth. My career journey began in medical sciences, where I honed analytical and problem-solving skills as a Radiology Technician at the University of Buenos Aires. During this time, I developed exceptional communication and interpersonal abilities by working in a multidisciplinary research institute and interacting with patients in hospital environments. Collaborating with diverse teams of scientists, healthcare professionals, and administrative staff allowed me to cultivate adaptability and organizational proficiency, managing multiple priorities and coordinating cross-functional tasks.",
    es: "Desarrollador backend comprometido con el aprendizaje continuo y el crecimiento profesional. Mi carrera empezó en las ciencias médicas, donde afilé la capacidad analítica y de resolución de problemas como Técnico en Radiología en la Universidad de Buenos Aires. En ese período desarrollé habilidades de comunicación e interpersonales trabajando en un instituto de investigación multidisciplinario y atendiendo pacientes en entornos hospitalarios. Colaborar con equipos diversos de científicos, profesionales de la salud y personal administrativo me permitió cultivar adaptabilidad y capacidad organizativa, gestionando múltiples prioridades y coordinando tareas entre áreas.",
  },
  {
    en: "My transition into software development began with two years of Computer Science education, building a solid foundation in computing principles. To balance work commitments, I shifted to self-directed learning, leveraging different platforms like FreeCodeCamp and Codecademy to master web development. I further expanded my expertise through local platform courses, focusing on libraries, frameworks, and Node.js development, culminating in a deeper understanding of backend development.",
    es: "Mi transición al desarrollo de software empezó con dos años de estudios en Ciencias de la Computación, que me dieron una base sólida en los principios de la computación. Para compaginarlo con el trabajo, pasé al aprendizaje autodidacta, aprovechando plataformas como FreeCodeCamp y Codecademy para dominar el desarrollo web. Amplié esa formación con cursos de plataformas locales, enfocados en librerías, frameworks y desarrollo con Node.js, profundizando en el backend.",
  },
  {
    en: "Additionally, I completed Harvard University's CS50x – Introduction to Computer Science, where I gained experience in programming with C, Python, Flask, and SQL. These studies were complemented by hands-on projects and engaging in technical challenges, ensuring alignment with industry trends and best practices. My unique background combines technical expertise with a structured and detail-oriented mindset, supported by exceptional teamwork and communication skills.",
    es: "Además completé CS50x de la Universidad de Harvard, Introducción a las Ciencias de la Computación, donde programé en C, Python, Flask y SQL. Complementé esos estudios con proyectos prácticos y desafíos técnicos, manteniéndome alineado con las tendencias y buenas prácticas de la industria. Mi recorrido combina conocimiento técnico con una mentalidad estructurada y atenta al detalle, apoyada en el trabajo en equipo y la comunicación.",
  },
  {
    en: "This combination of formal education, self-driven learning, and practical application enables me to contribute meaningfully to complex projects and foster effective collaboration. I am now seeking opportunities to apply these skills and make a meaningful impact as I transition into the tech industry.",
    es: "Esta combinación de formación académica, aprendizaje autodidacta y aplicación práctica me permite aportar valor real en proyectos complejos y colaborar de forma efectiva. Hoy busco oportunidades para aplicar estas habilidades y generar impacto en la industria tecnológica.",
  },
];
