# Memoria del portfolio de Juan Paladea

Este archivo es la fuente de verdad de la presentación profesional de Juan. Se carga solo en
cada sesión de Claude Code. **El repo es público**: acá van datos de carrera y decisiones, nunca
credenciales, datos de clientes ni detalles internos de proyectos privados.

## Las tres superficies

Un dato de carrera vive en tres lugares y se actualiza en los tres:

| Superficie | Dónde |
| --- | --- |
| Sitio | `src/data/` (juanpaladea.com.ar) |
| CV | `public/cv/es.html` y `en.html`, más sus PDFs regenerados |
| LinkedIn | `docs/linkedin.md` tiene el texto listo para pegar |

Cuando cambie un rol, un proyecto o una cifra: actualizar el sitio y los CVs, y dejar
`docs/linkedin.md` al día con la fecha de la última revisión. LinkedIn lo publica Juan, o Claude
solo después de que Juan apruebe ese cambio puntual.

## Perfil

- **Rol:** Desarrollador Full-stack: APIs, automatizaciones y agentes de IA. Foco en backend.
- **Base:** Buenos Aires, UTC−3. Inglés C2 (EF SET).
- **Hilo de la historia:** de las radiografías a las APIs. Llegó al software desde un hospital,
  y por eso modela flujos clínicos y operativos desde adentro.

### Experiencia actual

- **Customer Success en Chatty** (oct 2025 — presente): CRM y automatizaciones sobre WhatsApp.
  Implementación, agentes de IA, automatizaciones y métricas a medida.
- **Desarrollador de software independiente** (dic 2022 — presente).
- **Administración y sistemas en el IMIPP** (feb 2021 — presente): instituto de investigación en
  patologías pediátricas, unidad ejecutora del CONICET y el Ministerio de Salud de la Ciudad de
  Buenos Aires, con sede en el Hospital de Niños Ricardo Gutiérrez. Facturación de servicios
  diagnósticos y genómicos, compras, documentación regulatoria y de bioética, inventario de
  equipamiento e infraestructura informática.

### Formación

- Técnico en Radiología, UBA, Facultad de Medicina (2018 — 2021).
- Ciencias de la Computación, UBA, Exactas: dos años de cursada (2022 — 2023).
- CS50x (Harvard), Programación Backend (Coderhouse), EF SET C2.

## Proyectos

Orden en el sitio: Vialo, Libelulis, En una nota, Hospital Backend.

- **Vialo** (vialolab.com): plataforma de gestión para laboratorios de investigación. Muestras,
  equipos, insumos, temperaturas y protocolos, con permisos por rol e historial de cada cambio.
  **Siempre aclarar que nace de la función de Juan como personal del IMIPP.** Código privado.
- **Libelulis** (libelulis.com.ar): tienda de accesorios marmolados hechos a mano. Next.js,
  Supabase y Netlify, con pedidos por WhatsApp, reserva de piezas y panel de gestión. Reemplaza a
  IMIPP en Proyectos por pedido de Juan. Código privado.
- **En una nota · Ensalada mixta** (enunanota.com.ar): juego para cantar con amigos. JavaScript
  sin framework, 16 playlists, más de 1000 canciones, cuentas con Google y ranking verificado en
  Postgres. Código público.
- **Hospital Backend**: API REST de datos clínicos en Node.js, TypeScript y PostgreSQL, con un
  cliente React aparte. Código público.

**El sitio del IMIPP ya no se muestra en Proyectos.** El IMIPP sigue en Experiencia. Si se lo
menciona, ya no usa Firestore: el contenido pasó al repositorio.

## Reglas de contenido

- Verificar cada dato contra el repo o el sitio en vivo antes de publicarlo. Los proyectos
  cambian rápido: "En una nota" e IMIPP quedaron mal descriptos por no releerlos.
- Las cifras que dependen del calendario se calculan (`yearsSince` en `src/data/site.ts`).
- Todo texto existe en inglés y español. El español es rioplatense, con voseo.
- Prosa clara y concreta, sin adornos. Las métricas inventadas no van.
- **No decir en ningún lado que Juan está disponible o busca trabajo.** Ni en el sitio, ni en los
  CVs, ni en LinkedIn. Lo pidió Juan expresamente.
- Los proyectos con código privado no llevan botón de código, y el sitio no promete código
  abierto en general.

## Diseño

- **Un solo borde izquierdo.** Nada de columnas centradas en la página ni subtítulos alineados a
  la derecha: todo arranca alineado con los títulos de sección. Lo pidió Juan expresamente.
- Colores solo con los tokens semánticos de `src/index.css`, en tema claro y oscuro.
- Tipografías autoalojadas: nada de orígenes de terceros.

## Motion graphics

- Concepto: "la señal". Las animaciones cuentan la historia de Juan: barrido de rayos X en el
  retrato, un mensaje de WhatsApp que termina en métrica, y portadas con la decisión real de cada
  proyecto.
- Sin librerías de animación: CSS, SVG, canvas y `IntersectionObserver`.
- Todo respeta `prefers-reduced-motion`, y el contenido nunca depende de una animación para verse.

## Cómo trabajar acá

- La carpeta local está en OneDrive: **no instalar `node_modules` ahí**. Compilar y probar en una
  copia fuera de OneDrive.
- Nunca commitear directo en `main`: Vercel despliega producción desde esa rama. Publicar
  requiere el OK de Juan.
- Los PDFs del CV se regeneran con Chrome headless (ver `README.md`) y deben seguir en dos páginas.
