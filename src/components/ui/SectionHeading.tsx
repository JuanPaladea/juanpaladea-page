interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Ties the heading to its section via aria-labelledby. */
  id: string;
}

const SectionHeading = ({ title, subtitle, id }: SectionHeadingProps) => (
  <div className="container mx-auto px-5 pt-20">
    <div className="h-px w-full bg-gradient-to-r from-accent via-line to-transparent" />
    <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <h2 id={id} className="title-font text-3xl font-semibold text-heading">
        {title}
      </h2>
      {subtitle && <p className="max-w-md leading-relaxed sm:text-right">{subtitle}</p>}
    </div>
  </div>
);

export default SectionHeading;
