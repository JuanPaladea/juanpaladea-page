import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

/**
 * Fade-in wrapper shared by every section. The reveal is a plain CSS
 * transition driven by an IntersectionObserver — no animation library needed.
 */
const Section = ({ children, id, className = "", ...rest }: SectionProps) => {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
