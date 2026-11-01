# Juan Paladea — Portfolio

Personal portfolio site built with React, TypeScript, Vite and Tailwind CSS.
Live at [juanpaladea.com.ar](https://juanpaladea.com.ar).

Bilingual (English / Spanish) with a light and dark theme, and a case-study
page per project. Both preferences are negotiated against the browser's
language list on a first visit, persisted to `localStorage`, and applied before
first paint by a small inline script in `index.html` so the page never flashes
the wrong theme.

`CLAUDE.md` records the career facts and the editorial and design rules, and
`docs/linkedin.md` keeps the LinkedIn copy in step with the site and the CVs.

## Getting started

```bash
npm install
npm run dev
```

| Script            | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Dev server with HMR on port 5173      |
| `npm run build`   | Type-check and build to `dist/`       |
| `npm run preview` | Serve the production build locally    |
| `npm run lint`    | Run ESLint over the project           |

## Environment variables

The contact form uses [EmailJS](https://www.emailjs.com/). Copy `.env.example`
to `.env` and fill in the values from the EmailJS dashboard:

```
VITE_APP_SERVICE_ID=
VITE_APP_TEMPLATE_ID=
VITE_APP_PUBLIC_KEY=
```

These keys ship in the client bundle by design — restrict them with the
allowed-origins setting in EmailJS. Without them the form falls back to
showing the contact email address.

## CV

The CV lives in this repo in both languages, as a print-styled page and a
generated PDF. The hero button links to the PDF matching the visitor's language.

| Source            | Output                             |
| ----------------- | ---------------------------------- |
| `public/cv/en.html` | `public/cv/juan-paladea-cv-en.pdf` |
| `public/cv/es.html` | `public/cv/juan-paladea-cv-es.pdf` |

Edit the HTML, then regenerate the PDF with headless Chrome:

```bash
chrome --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=public/cv/juan-paladea-cv-en.pdf public/cv/en.html
```

Both fit two A4 pages and keep a real text layer with embedded fonts, so
applicant tracking systems can parse them. Keep an eye on the page count after
editing — Spanish runs about 20% longer than English and prints slightly
tighter to compensate.

## Project structure

```
public/
├─ cv/                 CV in both languages: print-styled HTML + generated PDF
├─ icons/              Tech logos (local SVGs, no third-party hotlinking)
└─ img/                Portrait, project shots, certificates, share image
scripts/
└─ projectPages.ts     Build step: one HTML file per project with its own metadata
src/
├─ components/
│  ├─ motion/          Motion graphics (signal field, portrait scan, project covers…)
│  ├─ ui/              Shared building blocks (Section, SectionHeading, TechChip, icons)
│  └─ *Component.tsx   One component per page section
├─ data/               Site content: profile, career, skills, projects, certs, UI strings
├─ hooks/              Scroll, visibility and media-query hooks behind the motion
├─ preferences/        Language and theme context, persisted to localStorage
├─ router.ts           Two-route History API router, no dependency
├─ App.tsx             Route switch and section composition
├─ index.css           Colour tokens, focus states, reduced-motion rules
└─ motion.css          Every keyframe and transition on the site
```

### Routing

Two routes — `/` and `/projects/:id` — do not justify a routing library, so
`src/router.ts` is the History API plus a subscription, in about 40 lines.
Links are real anchors with real `href`s, so they stay crawlable and
ctrl-clickable; `InternalLink` intercepts only plain left clicks. Unknown
project ids fall back to the home page rather than rendering blank.

Deep links need the server to serve `index.html` for those paths — that is what
the rewrite in `vercel.json` does. On another host, configure the equivalent
SPA fallback or project pages will 404 on a hard refresh.

Link previews do not run JavaScript, so `scripts/projectPages.ts` also writes
`dist/projects/<id>/index.html` at build time with each project's title,
description and image.

### Adding a project case study

A card links to its page only when `src/data/projectDetails.ts` has an entry
under the project's `id`, holding the context, the decisions worth defending,
and an honest note on what is still missing. `repo` is optional: leave it out
when the source is private and the page says so instead of linking to a 404.
Each project also needs a scene in `src/components/motion/ProjectCover.tsx`.

**Content lives in `src/data`, not in JSX.** To add a project, append an entry
to `src/data/projects.ts`; the same applies to `skills.ts` and
`certifications.ts`. Nothing in the components needs to change.

### Adding translated content

Anything a visitor reads is a `Localized<T>` — an object with an `en` and an
`es` key — and components render it through `t()` from `usePreferences()`:

```ts
description: {
  en: "RESTful API that manages healthcare data…",
  es: "API RESTful que gestiona datos clínicos…",
}
```

TypeScript fails the build if a translation is missing, so a half-translated
entry cannot ship. Interface strings (buttons, labels, form errors) live in
`src/data/ui.ts`.

### Adding a skill icon

Skills render a logo when `icon` is set and an accent dot when it is not. To
give one a logo, drop an SVG into `public/icons/` and reference it:

```ts
{ name: "Jest", icon: icon("jest") }   // resolves to /icons/jest.svg
```

### Colours

Components never name a palette colour. They use semantic tokens — `bg-page`,
`bg-surface`, `border-line`, `text-heading`, `text-body`, `text-muted`,
`bg-accent` (fills) and `text-accent-soft` (accent text) — which are CSS
variables redefined under `.dark` in `index.css`. Adding a theme means editing
one block, not every component. Every foreground/background pair in both themes
clears WCAG AA (4.5:1).

### Layout

Everything hangs from one left edge: section headings, text, timelines and
cards all start on the container's left side. Do not centre a column inside
the page or right-align a subtitle.

### Motion

The motion is drawn from the story it tells: a beam develops the portrait from a
radiograph, a message travels from WhatsApp to a metric as you scroll, and each
project cover animates the decision that defines it. There is no animation
library, just CSS, SVG, one canvas and `IntersectionObserver`.

- `motion.css` holds every keyframe. Base styles are the finished state, so
  turning animation off leaves a complete page.
- `prefers-reduced-motion` is honoured everywhere: the pinned section renders
  in normal flow, the canvas paints one still frame, and loops do not run.
- Looping pieces stop while off screen (`useOnScreen`), and scroll-driven pieces
  write to the DOM once per frame (`useScrollFrame`) without re-rendering React.
- Route changes and the theme toggle use the View Transitions API where it
  exists and simply happen without it.

## Notes

- All images, logos and fonts are served from this origin, so the page has no
  third-party dependency at load time.
- Sections reveal on scroll with CSS transitions driven by
  `IntersectionObserver`. The reveal is progressive enhancement: it is skipped
  for reduced-motion visitors, and a fallback timer shows the content anyway if
  the observer never reports, so nothing is ever left invisible.
- Images below the fold are lazy-loaded and carry intrinsic dimensions to avoid
  layout shift. The hero portrait is preloaded from `index.html` as the LCP
  element and served responsively via `srcset`.
