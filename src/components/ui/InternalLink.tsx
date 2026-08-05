import type { ReactNode } from "react";
import { isPlainLeftClick, navigate } from "../../router";

interface InternalLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}

/**
 * A real anchor with a real href — so it is crawlable, and middle-click or
 * ctrl-click still opens a new tab — that routes in-page on a plain click.
 */
const InternalLink = ({ to, children, className, ...rest }: InternalLinkProps) => (
  <a
    href={to}
    className={className}
    onClick={(event) => {
      if (!isPlainLeftClick(event)) return;
      event.preventDefault();
      navigate(to);
    }}
    {...rest}
  >
    {children}
  </a>
);

export default InternalLink;
