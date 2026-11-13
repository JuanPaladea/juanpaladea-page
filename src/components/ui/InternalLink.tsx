import type { ReactNode } from "react";
import { usePreferences } from "../../preferences/context";
import { localizePath } from "../../preferences/langPath";
import { isPlainLeftClick, navigate } from "../../router";

interface InternalLinkProps {
  /** Written without a language; the link adds the prefix for the current one. */
  to: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  /** For a link that repeats one right next to it: mouse only, skipped by keyboard and screen readers. */
  "aria-hidden"?: boolean;
  tabIndex?: number;
}

/**
 * A real anchor with a real href — so it is crawlable, and middle-click or
 * ctrl-click still opens a new tab — that routes in-page on a plain click.
 */
const InternalLink = ({ to, children, className, ...rest }: InternalLinkProps) => {
  const { lang } = usePreferences();
  const href = localizePath(to, lang);

  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        if (!isPlainLeftClick(event)) return;
        event.preventDefault();
        navigate(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
};

export default InternalLink;
