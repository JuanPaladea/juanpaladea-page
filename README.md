# Juan Paladea — Portfolio

Personal portfolio site built with React, TypeScript, Vite and Tailwind CSS.
Live at [juanpaladea.com.ar](https://juanpaladea.com.ar).

Bilingual (English / Spanish) with a light and dark theme. Both preferences are
detected from the browser on a first visit, persisted to `localStorage`, and
applied before first paint by a small inline script in `index.html` so the page
never flashes the wrong theme.

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
└─ img/                Portrait, project shots, certificates
src/
├─ components/
│  ├─ ui/              Shared building blocks (Section, SectionHeading, TechChip, icons)
│  └─ *Component.tsx   One component per page section
├─ data/               Site content: profile, career, skills, projects, certs, UI strings
├─ hooks/              useInView — scroll reveal via IntersectionObserver
├─ preferences/        Language and theme context, persisted to localStorage
├─ App.tsx             Section composition
└─ index.css           Colour tokens, focus states, reduced-motion rules
```

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

## Notes

- All images and logos are served from this origin. Nothing hotlinks to imgur
  or svgrepo, which both rate-limit and can break the page without warning.
- Sections fade in on scroll with a CSS transition driven by
  `IntersectionObserver`. The reveal is progressive enhancement: it is skipped
  for reduced-motion visitors, and a fallback timer shows the content anyway if
  the observer never reports, so nothing is ever left invisible.
- Images below the fold are lazy-loaded and carry intrinsic dimensions to avoid
  layout shift. The hero portrait is preloaded from `index.html` as the LCP
  element and served responsively via `srcset`.
