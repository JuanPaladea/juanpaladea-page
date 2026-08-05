import type { Localized } from "../preferences/types";

export interface DetailBlock {
  title: string;
  body: string;
}

export interface ProjectDetail {
  /** One line under the title on the project page. */
  tagline: Localized<string>;
  /** What the project is for and where it came from. */
  context: Localized<string[]>;
  /** The decisions worth defending in an interview, and why they were made. */
  decisions: Localized<DetailBlock[]>;
  /** Honest reflection — what is missing, what would change. */
  next: Localized<string>;
  /** Facts a reader can verify at a glance. */
  facts: Localized<DetailBlock[]>;
}

export const projectDetails: Record<string, ProjectDetail> = {
  "hospital-backend": {
    tagline: {
      en: "A clinical data API modelled on workflows I handle every day",
      es: "Una API de datos clínicos modelada sobre flujos que manejo a diario",
    },
    context: {
      en: [
        "I work inside a pediatric pathology research institute, where part of my job is invoicing diagnostic and genomic services and keeping the records that regulators expect. That means I spend my days with the exact entities this API models: a patient, an order, a study, a result, a bill and the proof that it was paid.",
        "Most tutorial backends model a shopping cart. I wanted to model something I actually understand, where getting the relationships wrong has consequences beyond a failing test — a study belongs to an order, an order belongs to a patient, and a bill can cover several studies without ever losing the trail back to who was seen and when.",
      ],
      es: [
        "Trabajo dentro de un instituto de investigación en patologías pediátricas, donde parte de mi tarea es facturar servicios diagnósticos y genómicos y mantener los registros que exige la regulación. Es decir, paso los días con las mismas entidades que modela esta API: un paciente, una orden, un estudio, un resultado, una factura y el comprobante de que se pagó.",
        "La mayoría de los backends de tutorial modelan un carrito de compras. Yo quería modelar algo que entiendo de verdad, donde equivocarse en las relaciones tiene consecuencias más allá de un test en rojo: un estudio pertenece a una orden, una orden pertenece a un paciente, y una factura puede cubrir varios estudios sin perder nunca el rastro de a quién se atendió y cuándo.",
      ],
    },
    decisions: {
      en: [
        {
          title: "PostgreSQL over MongoDB",
          body: "Clinical data is deeply relational and the integrity rules are not negotiable: a study cannot exist without a patient, and a bill must always resolve to real services. Foreign keys and transactions enforce that in the database instead of in application code that someone can forget to call. My earlier backends used MongoDB; this domain is the reason I moved.",
        },
        {
          title: "JWT sessions with bcrypt-hashed passwords",
          body: "Stateless tokens keep the API deployable anywhere without shared session storage, which matters on a free Render instance that restarts often. Passwords are hashed with bcrypt rather than stored or encrypted, so a database dump alone cannot expose them.",
        },
        {
          title: "File uploads kept separate from records",
          body: "Study results and payment proofs are files, but the record is the source of truth. Uploads are handled as attachments to an existing entity rather than as standalone objects, so an orphaned file cannot pass for a legitimate result.",
        },
        {
          title: "Swagger as the contract, not as decoration",
          body: "The API is documented with Swagger so the endpoint surface is browsable without reading the source. It doubles as the demo: the docs page is what I link to, because an API with no interface is otherwise invisible to a reviewer.",
        },
      ],
      es: [
        {
          title: "PostgreSQL en vez de MongoDB",
          body: "Los datos clínicos son profundamente relacionales y las reglas de integridad no se negocian: un estudio no puede existir sin un paciente, y una factura siempre tiene que resolver contra servicios reales. Las claves foráneas y las transacciones lo garantizan en la base de datos y no en código de aplicación que alguien puede olvidarse de llamar. Mis backends anteriores usaban MongoDB; este dominio es la razón por la que cambié.",
        },
        {
          title: "Sesiones JWT con contraseñas hasheadas con bcrypt",
          body: "Los tokens sin estado permiten desplegar la API en cualquier lado sin almacenamiento de sesiones compartido, lo que importa en una instancia gratuita de Render que se reinicia seguido. Las contraseñas se hashean con bcrypt en vez de guardarse o cifrarse, así un volcado de la base por sí solo no las expone.",
        },
        {
          title: "Archivos separados de los registros",
          body: "Los resultados de estudios y los comprobantes de pago son archivos, pero el registro es la fuente de verdad. Las cargas se manejan como adjuntos de una entidad existente y no como objetos sueltos, de modo que un archivo huérfano no pueda pasar por un resultado legítimo.",
        },
        {
          title: "Swagger como contrato, no como decoración",
          body: "La API está documentada con Swagger para que se pueda recorrer sin leer el código. Además funciona como demo: es lo que enlazo, porque una API sin interfaz es invisible para quien la revisa.",
        },
      ],
    },
    facts: {
      en: [
        { title: "Role", body: "Sole developer — schema, API and deployment" },
        { title: "Status", body: "Deployed on Render, documentation public" },
        { title: "Scope", body: "Patients, studies, billing, auth and uploads" },
      ],
      es: [
        { title: "Rol", body: "Único desarrollador — esquema, API y despliegue" },
        { title: "Estado", body: "Desplegada en Render, documentación pública" },
        { title: "Alcance", body: "Pacientes, estudios, facturación, auth y archivos" },
      ],
    },
    next: {
      en: "It runs on a free Render instance, so the first request after idling is slow — worth knowing before you click. The clearest gap is test coverage: the endpoints are documented but not yet covered end to end, which is what I would add before calling it production-ready for anyone but me.",
      es: "Corre en una instancia gratuita de Render, así que la primera petición después de un rato de inactividad es lenta — conviene saberlo antes de hacer clic. La carencia más clara es la cobertura de tests: los endpoints están documentados pero todavía no cubiertos de punta a punta, y es lo que agregaría antes de considerarla lista para producción de alguien que no sea yo.",
    },
  },

  "en-una-nota": {
    tagline: {
      en: "A party game with zero runtime dependencies, built to work when the wifi does not",
      es: "Un juego para juntadas con cero dependencias de runtime, hecho para funcionar cuando el wifi no",
    },
    context: {
      en: [
        "This started as a game we played at home without any software: someone plays a song, cuts it after a couple of seconds, and the first team to shout has to keep singing. Doing it by hand meant one person stuck on a phone all night, picking tracks and arguing about who shouted first.",
        "So I built the referee. It is the project I am most attached to, because nobody asked for it and it is used by real people in a living room rather than by a reviewer reading a repository.",
      ],
      es: [
        "Empezó como un juego que hacíamos en casa sin ningún software: alguien pone una canción, la corta a los pocos segundos y el primer equipo en gritar tiene que seguirla cantando. Hacerlo a mano significaba que una persona quedaba pegada al teléfono toda la noche, eligiendo temas y discutiendo quién gritó primero.",
        "Así que construí al árbitro. Es el proyecto al que más cariño le tengo, porque nadie lo pidió y lo usa gente real en un living, no alguien revisando un repositorio.",
      ],
    },
    decisions: {
      en: [
        {
          title: "Zero runtime dependencies, on purpose",
          body: "The whole game is vanilla JavaScript with Vite as the only build tool. A party game has to load instantly on someone's phone over shared mobile data, and every dependency is weight plus a future upgrade I would have to do to keep it alive. The constraint also forced me to actually learn the platform APIs instead of reaching for a library.",
        },
        {
          title: "IndexedDB for audio, not localStorage",
          body: "Players upload their own MP3 and M4A files so the game works with music that is not on any streaming service. Those files are megabytes, well past what localStorage can hold, and IndexedDB is the only browser store that takes binary data at that size. It is also what makes the game work with no connection at all.",
        },
        {
          title: "Everything stays in the browser",
          body: "There is no backend and no account. Playlists, uploaded audio, scores and the history that prevents repeats all live on the device. That means no server to pay for, nothing to breach, and no reason for anyone to trust me with their data — the right trade for a game played among friends.",
        },
        {
          title: "Hiding the title is the actual product",
          body: "The hard part is not playing audio, it is not spoiling the answer: the track name has to stay hidden through selection, playback and the cut, then be revealed on cue. Getting that flow right — including a random start point for difficulty — is most of what the code does.",
        },
      ],
      es: [
        {
          title: "Cero dependencias de runtime, a propósito",
          body: "Todo el juego es JavaScript puro con Vite como única herramienta de build. Un juego de juntada tiene que cargar al instante en el teléfono de alguien con datos móviles compartidos, y cada dependencia es peso más una actualización futura que tendría que hacer para mantenerlo vivo. La restricción también me obligó a aprender las APIs de la plataforma en vez de buscar una librería.",
        },
        {
          title: "IndexedDB para el audio, no localStorage",
          body: "Los jugadores suben sus propios archivos MP3 y M4A para que el juego funcione con música que no está en ningún servicio de streaming. Esos archivos pesan megabytes, muy por encima de lo que aguanta localStorage, e IndexedDB es el único almacenamiento del navegador que acepta datos binarios de ese tamaño. Es también lo que hace que el juego funcione sin conexión.",
        },
        {
          title: "Todo se queda en el navegador",
          body: "No hay backend ni cuentas. Playlists, audio subido, puntajes y el historial que evita repeticiones viven en el dispositivo. Eso significa que no hay servidor que pagar, nada que filtrar y ninguna razón para que alguien tenga que confiarme sus datos — el intercambio correcto para un juego entre amigos.",
        },
        {
          title: "Ocultar el título es el producto real",
          body: "Lo difícil no es reproducir audio, es no spoilear la respuesta: el nombre del tema tiene que permanecer oculto durante la selección, la reproducción y el corte, y recién revelarse en el momento justo. Lograr bien ese flujo —incluido un punto de inicio aleatorio para subir la dificultad— es la mayor parte de lo que hace el código.",
        },
      ],
    },
    facts: {
      en: [
        { title: "Role", body: "Sole developer and designer" },
        { title: "Status", body: "Live on its own domain, in real use" },
        { title: "Content", body: "11 curated playlists, 350+ songs" },
      ],
      es: [
        { title: "Rol", body: "Único desarrollador y diseñador" },
        { title: "Estado", body: "En vivo con dominio propio, en uso real" },
        { title: "Contenido", body: "11 playlists curadas, más de 350 canciones" },
      ],
    },
    next: {
      en: "The obvious next step is the one that needs a backend: shared rooms, so teams on different phones see the same cut at the same moment. That means real-time state and reconciling clocks across devices — a genuinely harder problem than anything here, and the reason it is not built yet rather than an oversight.",
      es: "El siguiente paso obvio es el que sí necesita backend: salas compartidas, para que equipos en distintos teléfonos vean el mismo corte en el mismo instante. Eso implica estado en tiempo real y conciliar relojes entre dispositivos — un problema bastante más difícil que todo lo que hay acá, y la razón por la que todavía no está, más que un descuido.",
    },
  },

  imipp: {
    tagline: {
      en: "A public site for the institute where I work, built so nobody has to call me to publish",
      es: "El sitio público del instituto donde trabajo, hecho para que nadie tenga que llamarme para publicar",
    },
    context: {
      en: [
        "I handle administration and IT at IMIPP, a multidisciplinary institute researching pediatric pathologies. The institute needed a public presence for its research lines, its team, the services it offers and the papers it publishes.",
        "The people who own that content are researchers and administrative staff, not developers. A site that required a code change and a deploy for every new paper would have been abandoned within months — I know, because I would have been the bottleneck.",
      ],
      es: [
        "Me ocupo de la administración y los sistemas del IMIPP, un instituto multidisciplinario que investiga patologías pediátricas. El instituto necesitaba presencia pública para sus líneas de investigación, su equipo, los servicios que ofrece y los papers que publica.",
        "Quienes son dueños de ese contenido son investigadores y personal administrativo, no desarrolladores. Un sitio que exigiera un cambio de código y un deploy por cada paper nuevo habría quedado abandonado en meses — lo sé porque el cuello de botella habría sido yo.",
      ],
    },
    decisions: {
      en: [
        {
          title: "Firestore as the content source",
          body: "Content lives in Firestore rather than in the repository, so publishing a paper or updating the team is a data change, not a deploy. This is the decision the whole project rests on: it is what keeps the site current without me.",
        },
        {
          title: "Firebase instead of a backend I would have to maintain",
          body: "The institute has no budget line for infrastructure and no one to look after a server. Firebase gives hosting-grade reliability for the read-heavy traffic a research site gets, with no machine for me to patch. Choosing the boring managed option was the responsible call, not the interesting one.",
        },
        {
          title: "Modular components with React Router",
          body: "Research lines, team members and services are the same shape repeated with different data, so they are one component driven by a collection. Adding a section is adding data and a route, which is what let the site grow past its first version.",
        },
        {
          title: "EmailJS for the contact form",
          body: "The institute needed to receive enquiries without me standing up and securing a mail service. EmailJS sends straight from the client, which is the right amount of infrastructure for a form that gets a handful of messages a week.",
        },
      ],
      es: [
        {
          title: "Firestore como fuente de contenido",
          body: "El contenido vive en Firestore y no en el repositorio, así publicar un paper o actualizar el equipo es un cambio de datos y no un deploy. Es la decisión sobre la que se apoya todo el proyecto: es lo que mantiene el sitio actualizado sin mí.",
        },
        {
          title: "Firebase en vez de un backend que tendría que mantener",
          body: "El instituto no tiene una partida para infraestructura ni alguien que cuide un servidor. Firebase da confiabilidad para el tráfico mayormente de lectura que recibe un sitio de investigación, sin una máquina que yo tenga que parchear. Elegir la opción aburrida y gestionada fue lo responsable, no lo interesante.",
        },
        {
          title: "Componentes modulares con React Router",
          body: "Líneas de investigación, integrantes del equipo y servicios son la misma forma repetida con datos distintos, así que son un componente alimentado por una colección. Agregar una sección es agregar datos y una ruta, y eso es lo que permitió que el sitio creciera más allá de su primera versión.",
        },
        {
          title: "EmailJS para el formulario de contacto",
          body: "El instituto necesitaba recibir consultas sin que yo levantara y asegurara un servicio de correo. EmailJS envía directo desde el cliente, que es la cantidad justa de infraestructura para un formulario que recibe unos pocos mensajes por semana.",
        },
      ],
    },
    facts: {
      en: [
        { title: "Role", body: "Sole developer, inside the institute" },
        { title: "Status", body: "In production, maintained by me" },
        { title: "Audience", body: "Researchers, patients and collaborators" },
      ],
      es: [
        { title: "Rol", body: "Único desarrollador, desde adentro del instituto" },
        { title: "Estado", body: "En producción, mantenido por mí" },
        { title: "Público", body: "Investigadores, pacientes y colaboradores" },
      ],
    },
    next: {
      en: "The gap is that editing still means going into the Firebase console, which is a developer's tool wearing a friendly interface. A small admin panel written for the people who actually publish would remove the last reason anyone needs to ask me for help.",
      es: "Lo que falta es que editar todavía implica entrar a la consola de Firebase, que es una herramienta de desarrollador con una interfaz amable. Un panel de administración chico, escrito para las personas que realmente publican, eliminaría la última razón por la que alguien necesita pedirme ayuda.",
    },
  },
};
