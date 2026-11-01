interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Ties the heading to its section via aria-labelledby. */
  id: string;
  /** Position in the page, shown as a technical label above the title. */
  index: number;
}

/** Everything sits on the page's left edge, so every section starts in the same place. */
const SectionHeading = ({ title, subtitle, id, index }: SectionHeadingProps) => (
  <div className="container mx-auto px-5 pt-24">
    <div className="rule-draw h-px w-full bg-gradient-to-r from-accent via-line to-transparent" />
    <p aria-hidden="true" className="eyebrow mt-6">
      {String(index).padStart(2, "0")}
    </p>
    <h2 id={id} className="title-font heading-mask mt-2 text-4xl font-semibold text-heading sm:text-5xl">
      <span>{title}</span>
    </h2>
    {subtitle && <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{subtitle}</p>}
  </div>
);

export default SectionHeading;
