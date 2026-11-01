import type { Plugin } from "vite";
import { projectDetails } from "../src/data/projectDetails";
import { projects } from "../src/data/projects";

const SITE_URL = "https://juanpaladea.com.ar";

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const setMeta = (html: string, attribute: "name" | "property", key: string, value: string) =>
  html.replace(new RegExp(`(<meta\\s+${attribute}="${key}"\\s+content=")[^"]*(")`), `$1${value}$2`);

/**
 * WhatsApp, LinkedIn and the other link previews do not run JavaScript, so a
 * shared case study would show the home page's card. This writes one HTML file
 * per project with its own metadata; the body is still the same React app, and
 * hosts serve these files ahead of the SPA rewrite in vercel.json.
 */
export const projectPages = (): Plugin => ({
  name: "project-pages",
  apply: "build",
  enforce: "post",
  generateBundle(_, bundle) {
    const shell = bundle["index.html"];
    if (shell?.type !== "asset") return;

    for (const project of projects) {
      const title = escapeHtml(`${project.title} — Juan Paladea`);
      const description = escapeHtml(projectDetails[project.id].tagline.en);
      const url = `${SITE_URL}/projects/${project.id}`;
      const image = `${SITE_URL}${project.image}`;

      let html = String(shell.source)
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
  },
});
