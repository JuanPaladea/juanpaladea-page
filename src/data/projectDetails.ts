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
  vialo: {
    tagline: {
      en: "A laboratory without Excel spreadsheets, born from my own job at IMIPP",
      es: "Un laboratorio sin planillas de Excel, nacido de mi propio trabajo en el IMIPP",
    },
    context: {
      en: [
        "Vialo comes from my role as staff at IMIPP, a pediatric pathology research institute. There I look after procurement, the equipment inventory and the regulatory documentation, so the problems it solves are ones I know first hand.",
        "Spreadsheets work until the team grows: duplicate versions, changes with no trail, expiry dates nobody catches. Vialo replaces them with one platform for samples, equipment, supplies, temperatures, services, budget, protocols and safety.",
      ],
      es: [
        "Vialo nace de mi función como personal del IMIPP, un instituto de investigación en patologías pediátricas. Ahí me ocupo de las compras, el inventario de equipamiento y la documentación regulatoria, así que los problemas que resuelve los conozco de primera mano.",
        "Las planillas sirven hasta que el equipo crece: versiones duplicadas, cambios sin rastro y vencimientos que nadie ve. Vialo las reemplaza por una sola plataforma para muestras, equipos, insumos, temperaturas, servicios, presupuesto, protocolos y seguridad.",
      ],
    },
    decisions: {
      en: [
        {
          title: "Each laboratory isolated in the database",
          body: "Every table with a laboratory's data carries its lab_id and a row-level security policy, so a bug in the application cannot show one lab's data to another. An automated test walks through all of those tables, and another fails if one is missing its policy.",
        },
        {
          title: "One base, many modules",
          body: "Permissions, history, notifications and search are shared services. A laboratory turns on only the modules it needs, and a new module inherits all of that instead of building it again.",
        },
        {
          title: "A history that holds up in an audit",
          body: "Every change records who made it, when and what the previous value was. That lives in database triggers rather than in application code, so no screen can skip it.",
        },
        {
          title: "Open to other systems and to AI assistants",
          body: "An API lets a laboratory read and load data from Python, R or its own systems with the same permissions. An MCP server does the same for assistants such as Claude, Cursor or VS Code, and what they do shows up in the history like any other change.",
        },
      ],
      es: [
        {
          title: "Cada laboratorio aislado en la base",
          body: "Toda tabla con datos de un laboratorio lleva su lab_id y una política de seguridad por filas, así un error en la aplicación no puede mostrarle a un laboratorio los datos de otro. Un test automático recorre todas esas tablas, y otro falla si a alguna le falta su política.",
        },
        {
          title: "Una base, muchos módulos",
          body: "Permisos, historial, avisos y búsqueda son servicios compartidos. Cada laboratorio habilita solo los módulos que necesita, y un módulo nuevo hereda todo eso en vez de volver a construirlo.",
        },
        {
          title: "Un historial que resiste una auditoría",
          body: "Cada cambio registra quién lo hizo, cuándo y qué valor tenía antes. Eso vive en triggers de la base y no en código de aplicación, así ninguna pantalla se lo puede saltear.",
        },
        {
          title: "Abierta a otros sistemas y a asistentes de IA",
          body: "Una API permite consultar y cargar datos desde Python, R o los sistemas de cada laboratorio, con los mismos permisos. Un servidor MCP hace lo mismo para asistentes como Claude, Cursor o VS Code, y lo que hacen aparece en el historial como cualquier otro cambio.",
        },
      ],
    },
    facts: {
      en: [
        { title: "Role", body: "Creator and developer" },
        { title: "Status", body: "Live at vialolab.com, with a 15-day trial" },
        { title: "Origin", body: "My role as staff at IMIPP" },
      ],
      es: [
        { title: "Rol", body: "Creador y desarrollador" },
        { title: "Estado", body: "En vivo en vialolab.com, con prueba de 15 días" },
        { title: "Origen", body: "Mi función como personal del IMIPP" },
      ],
    },
    next: {
      en: "Vialo is young, and what it lacks is what only time brings: laboratories running it for months, finding the cases I did not foresee. That use is what will decide which modules go deeper.",
      es: "Vialo es joven, y lo que le falta es lo que solo da el tiempo: laboratorios usándolo durante meses y encontrando los casos que no preví. Ese uso es lo que va a definir qué módulos profundizar.",
    },
  },

  libelulis: {
    tagline: {
      en: "A store for one-of-a-kind pieces, where nothing can be sold twice",
      es: "Una tienda de piezas únicas, donde nada se puede vender dos veces",
    },
    context: {
      en: [
        "Libelulis makes handmade marbled accessories in a workshop in Almagro. Each print floats on water once and never comes out the same, so every piece exists exactly once. That breaks the usual assumption of a store, where stock is a number.",
        "It began as a catalogue and grew to run the business: orders, sales from every channel, payments, customers, expenses and supplies, plus WhatsApp templates and a product feed for Google Shopping and Meta.",
      ],
      es: [
        "Libelulis hace accesorios marmolados a mano en un taller de Almagro. Cada dibujo flota sobre el agua una sola vez y nunca sale igual, así que cada pieza existe una única vez. Eso rompe el supuesto habitual de una tienda, donde el stock es un número.",
        "Empezó como un catálogo y creció hasta manejar el negocio: pedidos, ventas de todos los canales, cobros, clientes, gastos e insumos, además de plantillas de WhatsApp y un feed de productos para Google Shopping y Meta.",
      ],
    },
    decisions: {
      en: [
        {
          title: "The reservation is one transaction",
          body: "Sending the cart calls a single database function that creates the order and reserves its pieces, so two people cannot end up with the same one. If nobody confirms, a scheduled job in Postgres frees the pieces after 48 hours.",
        },
        {
          title: "Orders through WhatsApp, no account needed",
          body: "The customer sends the order from a private link, and the conversation continues with the person who made the piece. Buying requires no account; an optional one keeps the cart across devices and lists past orders.",
        },
        {
          title: "A static store that updates at once",
          body: "The catalogue is a single cached query. When the panel changes something it invalidates that tag, so the store stays static and fast and still shows the change immediately.",
        },
        {
          title: "A panel that explains itself",
          body: "Whoever runs the store day to day is not a developer, so the panel carries its own guide: one per section, folded at the top of each page, covering the emails and the automatic tasks too.",
        },
      ],
      es: [
        {
          title: "La reserva es una sola transacción",
          body: "Al enviar el carrito, una única función de la base crea el pedido y reserva sus piezas, así dos personas no pueden quedarse con la misma. Si nadie confirma, una tarea programada en Postgres libera las piezas a las 48 horas.",
        },
        {
          title: "Pedidos por WhatsApp, sin cuenta",
          body: "La persona manda el pedido desde un link privado, y la charla sigue con quien hizo la pieza. Para comprar no hace falta cuenta; una opcional guarda el carrito entre dispositivos y lista los pedidos.",
        },
        {
          title: "Una tienda estática que se actualiza al instante",
          body: "El catálogo es una sola consulta cacheada. Cuando el panel cambia algo, invalida esa etiqueta, y así la tienda sigue siendo estática y rápida y muestra el cambio enseguida.",
        },
        {
          title: "Un panel que se explica solo",
          body: "Quien maneja la tienda todos los días no es desarrollador, así que el panel trae su propia guía: una por sección, plegada arriba de cada página, que también cubre los emails y las tareas automáticas.",
        },
      ],
    },
    facts: {
      en: [
        { title: "Role", body: "Design and development" },
        { title: "Status", body: "Live at libelulis.com.ar" },
        { title: "Scope", body: "Store, orders and business management" },
      ],
      es: [
        { title: "Rol", body: "Diseño y desarrollo" },
        { title: "Estado", body: "En vivo en libelulis.com.ar" },
        { title: "Alcance", body: "Tienda, pedidos y gestión del negocio" },
      ],
    },
    next: {
      en: "The next pieces are measurements on every listing, online payment with Mercado Pago and invoicing through ARCA. Payment is the big one: it changes a flow that today ends in a conversation.",
      es: "Lo que sigue son las medidas en cada ficha, el pago online con Mercado Pago y la facturación con ARCA. El pago es lo más grande: cambia un flujo que hoy termina en una charla.",
    },
  },

  "en-una-nota": {
    tagline: {
      en: "A party game in plain JavaScript that earned a backend only when it needed one",
      es: "Un juego para juntadas en JavaScript puro, que sumó backend recién cuando lo necesitó",
    },
    context: {
      en: [
        "This started as a game we played at home without any software: someone plays a song, cuts it after a couple of seconds, and the first team to shout has to keep singing. Doing it by hand meant one person stuck on a phone all night, picking tracks and arguing about who shouted first.",
        "So I built the referee. It is the project I am most attached to, because nobody asked for it and real people use it in a living room. It kept growing from there: a solo mode where you guess the title from fragments that get longer, then optional Google accounts and a ranking.",
      ],
      es: [
        "Empezó como un juego que hacíamos en casa sin ningún software: alguien pone una canción, la corta a los pocos segundos y el primer equipo en gritar tiene que seguirla cantando. Hacerlo a mano significaba que una persona quedaba pegada al teléfono toda la noche, eligiendo temas y discutiendo quién gritó primero.",
        "Así que construí al árbitro. Es el proyecto al que más cariño le tengo, porque nadie lo pidió y lo usa gente real en un living. De ahí siguió creciendo: un modo un jugador donde adivinás el título con fragmentos cada vez más largos, y después cuentas opcionales con Google y un ranking.",
      ],
    },
    decisions: {
      en: [
        {
          title: "No framework, on purpose",
          body: "The game is plain JavaScript built with Vite. It has to load instantly on someone's phone over shared mobile data, and every framework is weight plus a future upgrade I would have to do to keep it alive. The constraint also made me learn the platform APIs.",
        },
        {
          title: "A ranking the browser cannot fake",
          body: "A leaderboard is only worth something if it cannot be cheated from the console. A solo game is recorded in Postgres while it is played, and SQL functions check each step: that the video is in the catalogue, that the title is right, and that enough time has passed. The database computes the points, never the browser.",
        },
        {
          title: "Accounts are optional, and a function holds the keys",
          body: "A Netlify Function verifies the Google token, opens an HttpOnly session and calls the SQL functions, so the browser never sees the database credentials. Without an account the game works exactly the same. The ranking shows a short name; email and photo are not stored.",
        },
        {
          title: "IndexedDB for audio",
          body: "Players can upload their own MP3 and M4A files, so the game works with music that is not online. Those files are too large for localStorage, and keeping them in IndexedDB is what lets the game run with no connection at all.",
        },
        {
          title: "Hiding the title is the actual product",
          body: "The hard part is not playing audio, it is not spoiling the answer: the track name has to stay hidden through selection, playback and the cut, then appear on cue. Getting that flow right is most of what the game does.",
        },
      ],
      es: [
        {
          title: "Sin framework, a propósito",
          body: "El juego es JavaScript puro con Vite. Tiene que cargar al instante en el teléfono de alguien con datos móviles compartidos, y cada framework es peso más una actualización futura que tendría que hacer para mantenerlo vivo. La restricción también me obligó a aprender las APIs de la plataforma.",
        },
        {
          title: "Un ranking que el navegador no puede falsear",
          body: "Un ranking solo vale si no se puede trampear desde la consola. La partida de un jugador se va anotando en Postgres mientras se juega, y funciones SQL comprueban cada paso: que el video sea del catálogo, que el título sea el correcto y que haya pasado el tiempo necesario. Los puntos los calcula la base, nunca el navegador.",
        },
        {
          title: "Cuentas opcionales, y una función que guarda las claves",
          body: "Una Netlify Function verifica el token de Google, abre una sesión HttpOnly y llama a las funciones SQL, así el navegador nunca ve las credenciales de la base. Sin cuenta, el juego funciona exactamente igual. En el ranking sale un nombre corto; el mail y la foto no se guardan.",
        },
        {
          title: "IndexedDB para el audio",
          body: "Los jugadores pueden subir sus propios archivos MP3 y M4A, así el juego funciona con música que no está en internet. Esos archivos son demasiado grandes para localStorage, y guardarlos en IndexedDB es lo que permite jugar sin conexión.",
        },
        {
          title: "Ocultar el título es el producto real",
          body: "Lo difícil no es reproducir audio, es no spoilear la respuesta: el nombre del tema tiene que seguir oculto durante la selección, la reproducción y el corte, y aparecer en el momento justo. Lograr bien ese flujo es la mayor parte de lo que hace el juego.",
        },
      ],
    },
    facts: {
      en: [
        { title: "Role", body: "Sole developer and designer" },
        { title: "Status", body: "Live on its own domain, in real use" },
        { title: "Content", body: "16 playlists, more than 1,000 songs" },
      ],
      es: [
        { title: "Rol", body: "Único desarrollador y diseñador" },
        { title: "Estado", body: "En vivo con dominio propio, en uso real" },
        { title: "Contenido", body: "16 playlists, más de 1000 canciones" },
      ],
    },
    next: {
      en: "The obvious next step now that a backend exists is shared rooms, so teams on different phones see the same cut at the same moment. That means real-time state and reconciling clocks across devices, a harder problem than anything here, and the reason it is not built yet.",
      es: "Ahora que hay backend, el siguiente paso obvio son las salas compartidas, para que equipos en distintos teléfonos vean el mismo corte en el mismo instante. Eso implica estado en tiempo real y conciliar relojes entre dispositivos, un problema más difícil que todo lo que hay acá, y la razón por la que todavía no está.",
    },
  },
};
