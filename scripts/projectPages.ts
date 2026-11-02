import type { Plugin } from "vite";
import { career } from "../src/data/career";
import { projectDetails } from "../src/data/projectDetails";
import { projects } from "../src/data/projects";
import type { Project } from "../src/data/projects";
import { role, sectionCopy, site, summary } from "../src/data/site";
import type { Lang } from "../src/preferences/types";

const SITE_URL = "https://juanpaladea.com.ar";

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const setMeta = (html: string, attribute: "name" | "property", key: string, value: string) =>
  html.replace(new RegExp(`(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*(")`), `$1${value}$2`);

const setNoscript = (html: string, body: string) =>
  html.replace(/<noscript>[\s\S]*?<\/noscript>/, () => `<noscript>${body}</noscript>`);

/** The page's content for readers and crawlers that do not run JavaScript. */
const homeContent = (lang: Lang) => {
  const projectItems = projects
    .map(
      (project) =>
        `<li><a href="/projects/${project.id}">${escapeHtml(project.title)}</a>: ${escapeHtml(project.description[lang])}</li>`,
    )
    .join("");
  const careerItems = career
    .filter((entry) => entry.kind === "work")
    .map(
      (entry) =>
        `<li>${escapeHtml(entry.title[lang])}, ${escapeHtml(entry.organization[lang])} (${escapeHtml(entry.period[lang])})</li>`,
    )
    .join("");

  return [
    `<h1>${site.name}</h1>`,
    `<p>${escapeHtml(role[lang])}</p>`,
    `<p>${escapeHtml(summary[lang])}</p>`,
    `<h2>${escapeHtml(sectionCopy.projects.title[lang])}</h2><ul>${projectItems}</ul>`,
    `<h2>${escapeHtml(sectionCopy.experience.title[lang])}</h2><ul>${careerItems}</ul>`,
    `<p><a href="mailto:${site.email}">${site.email}</a></p>`,
  ].join("");
};

const projectContent = (project: Project) => {
  const detail = projectDetails[project.id];
  return [
    `<h1>${escapeHtml(project.title)}</h1>`,
    `<p>${escapeHtml(detail.tagline.en)}</p>`,
    ...detail.context.en.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`),
    ...detail.decisions.en.map((decision) => `<h2>${escapeHtml(decision.title)}</h2><p>${escapeHtml(decision.body)}</p>`),
    `<p>${escapeHtml(detail.next.en)}</p>`,
    `<p><a href="${project.demo}">${escapeHtml(project.demoLabel.en)}</a></p>`,
  ].join("");
};

const spanishHome = (shell: string) => {
  const title = "Juan Paladea — Desarrollador Full-stack, APIs y automatización con IA";
  const description =
    "Juan Paladea es un desarrollador full-stack de Buenos Aires que construye APIs, automatizaciones y agentes de IA. Creador de Vialo, Customer Success en Chatty y más de cinco años dentro de un instituto de investigación en patologías pediátricas.";
  const url = `${SITE_URL}/es`;

  let html = shell
    .replace(/<html lang="[^"]*">/, '<html lang="es">')
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:locale", "es_AR");
  html = setMeta(html, "property", "og:locale:alternate", "en_US");
  return setNoscript(html, homeContent("es"));
};

/**
 * WhatsApp, LinkedIn and the other link previews do not run JavaScript, so a
 * shared case study would show the home page's card. This writes one HTML file
 * per project and a Spanish home page, each with its own metadata and its
 * content for readers without JavaScript. The body is still the same React app.
 * These files are also why the host needs no SPA rewrite, so unknown paths can
 * get a real 404.
 */
export const projectPages = (): Plugin => ({
  name: "project-pages",
  apply: "build",
  enforce: "post",
  generateBundle(_, bundle) {
    const shell = bundle["index.html"];
    if (shell?.type !== "asset") return;

    const english = setNoscript(String(shell.source), homeContent("en"));
    this.emitFile({ type: "asset", fileName: "es/index.html", source: spanishHome(english) });

    for (const project of projects) {
      const title = escapeHtml(`${project.title} — Juan Paladea`);
      const description = escapeHtml(projectDetails[project.id].tagline.en);
      const url = `${SITE_URL}/projects/${project.id}`;
      const image = `${SITE_URL}${project.image}`;

      let html = setNoscript(String(shell.source), projectContent(project))
        .replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>/g, "")
        .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);

      html = setMeta(html, "name", "description", description);
      html = setMeta(html, "name", "twitter:title", title);
      html = setMeta(html, "name", "twitter:description", description);
      html = setMeta(html, "name", "twitter:image", image);
      html = setMeta(html, "property", "og:title", title);
      html = setMeta(html, "property", "og:description", description);
      html = setMeta(html, "property", "og:url", url);
      html = setMeta(html, "property", "og:image", image);
      html = setMeta(html, "property", "og:image:width", String(project.imageWidth));
      html = setMeta(html, "property", "og:image:height", String(project.imageHeight));

      this.emitFile({ type: "asset", fileName: `projects/${project.id}/index.html`, source: html });
    }

    shell.source = english;
  },
});
