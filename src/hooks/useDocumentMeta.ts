import { useEffect } from "react";

/**
 * Keeps the tab title and the description in step with the route and the
 * language. The HTML file of each address already ships the right pair; this
 * covers what changes after load, when the visitor navigates or switches language.
 */
export const useDocumentMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
};
