import { createHash } from "node:crypto";
import type { Plugin } from "vite";
import { career } from "../src/data/career";
import { projectDetails } from "../src/data/projectDetails";
import { projects } from "../src/data/projects";
import type { Project } from "../src/data/projects";
import { pageDescription, pageTitle, role, sectionCopy, site, summary } from "../src/data/site";
import { localizePath } from "../src/preferences/langPath";
import type { Lang } from "../src/preferences/types";

const SITE_URL = "https://juanpaladea.com.ar";
const LANGS: Lang[] = ["en", "es"];
const OG_LOCALE: Record<Lang, string> = { en: "en_US", es: "es_AR" };

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** `path` is written without a language, like the links inside the app. */
const pageUrl = (path: string, lang: Lang) => `${SITE_URL}${localizePath(path, lang)}`;

// Replacer functions, so a `$` in the copy is never read as a capture group.
const setAttribute = (html: string, pattern: RegExp, value: string) =>
  html.replace(pattern, (_, before: string, after: string) => before + value + after);

const setMeta = (html: string, attribute: "name" | "property", key: string, value: string) =>
  setAttribute(html, new RegExp(`(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*(")`), value);

const setAlternate = (html: string, hreflang: string, url: string) =>
  setAttribute(html, new RegExp(`(<link rel="alternate" hreflang="${hreflang}" href=")[^"]*(")`), url);

const setNoscript = (html: string, body: string) =>
  html.replace(/<noscript>[\s\S]*?<\/noscript>/, () => `<noscript>${body}</noscript>`);

const CHARSET = '<meta charset="UTF-8" />';

/**
 * Only this site's own files may run, load or receive data, plus EmailJS for
 * the contact form. The policy travels inside the page instead of a header so
 * the hash of the inline script is taken from the very HTML being written:
 * editing that script can never leave a stale hash that blocks it.
 */
const withContentSecurityPolicy = (html: string) => {
  if (!html.includes(CHARSET)) throw new Error("project-pages: charset tag not found, cannot place the CSP");

  // A browser hashes the script as parsed, where every line break is a single
  // line feed, so a checkout with Windows line endings has to hash it the same way.
  const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(
    ([, body]) => `'sha256-${createHash("sha256").update(body.replace(/\r\n?/g, "\n")).digest("base64")}'`,
  );
  const policy = [
    "default-src 'self'",
    ["script-src 'self'", ...inlineScripts].join(" "),
    // React writes style attributes and the toast library adds a <style> tag.
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    // The bundler inlines the smallest font subsets into the stylesheet.
    "font-src 'self' data:",
    "connect-src 'self' https://api.emailjs.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join("; ");

  // Right after the charset, so it is in force before anything else is read.
  const meta = `<meta http-equiv="Content-Security-Policy" content="${policy}" />`;
  return html.replace(CHARSET, `${CHARSET}\n    ${meta}`);
};

interface Page {
  lang: Lang;
  /** Without a language prefix: "/" or "/projects/<id>". */
  path: string;
  title: string;
  description: string;
  /** The share image, when the page has its own. */
  image?: { src: string; width: number; height: number; alt: string };
  /** The page's content for readers and crawlers that do not run JavaScript. */
  body: string;
}

/** The app shell with one page's own metadata and its no-JavaScript content. */
const render = (shell: string, page: Page) => {
  const other: Lang = page.lang === "en" ? "es" : "en";
  const url = pageUrl(page.path, page.lang);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);

  let html = shell
    .replace(/<html lang="[^"]*">/, `<html lang="${page.lang}">`)
    .replace(/<title>[^<]*<\/title>/, () => `<title>${title}</title>`);

  html = setAttribute(html, /(<link rel="canonical" href=")[^"]*(")/, url);
  html = setAlternate(html, "en", pageUrl(page.path, "en"));
  html = setAlternate(html, "es", pageUrl(page.path, "es"));
  html = setAlternate(html, "x-default", pageUrl(page.path, "en"));

  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:locale", OG_LOCALE[page.lang]);
  html = setMeta(html, "property", "og:locale:alternate", OG_LOCALE[other]);

  if (page.image) {
    const image = `${SITE_URL}${page.image.src}`;
    html = setMeta(html, "name", "twitter:image", image);
    html = setMeta(html, "property", "og:image", image);
    html = setMeta(html, "property", "og:image:width", String(page.image.width));
    html = setMeta(html, "property", "og:image:height", String(page.image.height));
    html = setMeta(html, "property", "og:image:alt", escapeHtml(page.image.alt));
  }

  return setNoscript(html, page.body);
};

const homeBody = (lang: Lang) => {
  const projectItems = projects
    .map(
      (project) =>
        `<li><a href="${localizePath(`/projects/${project.id}`, lang)}">${escapeHtml(project.title)}</a>: ${escapeHtml(project.description[lang])}</li>`,
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

const projectBody = (project: Project, lang: Lang) => {
  const detail = projectDetails[project.id];
  return [
    `<h1>${escapeHtml(project.title)}</h1>`,
    `<p>${escapeHtml(detail.tagline[lang])}</p>`,
    ...detail.context[lang].map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`),
    ...detail.decisions[lang].map(
      (decision) => `<h2>${escapeHtml(decision.title)}</h2><p>${escapeHtml(decision.body)}</p>`,
    ),
    `<p>${escapeHtml(detail.next[lang])}</p>`,
    `<p><a href="${project.demo}">${escapeHtml(project.demoLabel[lang])}</a></p>`,
  ].join("");
};

const homePage = (lang: Lang): Page => ({
  lang,
  path: "/",
  title: pageTitle[lang],
  description: pageDescription[lang],
  body: homeBody(lang),
});

const projectPage = (project: Project, lang: Lang): Page => ({
  lang,
  path: `/projects/${project.id}`,
  title: `${project.title} — ${site.name}`,
  description: projectDetails[project.id].tagline[lang],
  image: {
    src: project.image,
    width: project.imageWidth,
    height: project.imageHeight,
    alt: project.imageAlt[lang],
  },
  body: projectBody(project, lang),
});

/** "/" is the shell itself; every other address gets its own index.html. */
const fileName = (page: Page) => `${localizePath(page.path, page.lang).slice(1)}/index.html`;

/**
 * WhatsApp, LinkedIn and the other link previews do not run JavaScript, so a
 * shared link would show the English home page's card whatever it pointed to.
 * This writes one HTML file per address — the home page and each project, in
 * both languages — each with its own metadata, its hreflang pair and its
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
    const source = withContentSecurityPolicy(String(shell.source));

    const pages = LANGS.flatMap((lang) => [
      homePage(lang),
      ...projects.map((project) => projectPage(project, lang)),
    ]);

    for (const page of pages) {
      const html = render(source, page);
      if (page.path === "/" && page.lang === "en") shell.source = html;
      else this.emitFile({ type: "asset", fileName: fileName(page), source: html });
    }
  },
});
