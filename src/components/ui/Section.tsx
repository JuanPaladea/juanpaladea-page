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
 * Wrapper shared by every section. It only reports when it scrolls into view;
 * motion.css does the rest with plain transitions on `data-stagger` children
 * and the heading, so no animation library is needed.
 */
const Section = ({ children, id, className = "", ...rest }: SectionProps) => {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section ref={ref} id={id} data-inview={isInView} className={className} {...rest}>
      {children}
    </section>
  );
};

export default Section;
