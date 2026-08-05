import { certifications } from "../data/certifications";
import { sectionCopy } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { ExternalLinkIcon } from "./ui/icons";

const CertificationsComponent = () => {
  const { t } = usePreferences();

  return (
    <Section id="certifications" aria-labelledby="certifications-heading">
      <SectionHeading
        id="certifications-heading"
        title={t(sectionCopy.certifications.title)}
        subtitle={t(sectionCopy.certifications.subtitle)}
      />
      <div className="container mx-auto px-5 py-12">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert.id} className="flex">
              <article className="flex w-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-accent/60">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden"
                  aria-label={`${t(cert.title)} — ${t(ui.certificateOf)} (${t(ui.opensInNewTab)})`}
                >
                  <img
                    alt={t(cert.imageAlt)}
                    className="aspect-[16/10] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    src={cert.image}
                    width={cert.imageWidth}
                    height={cert.imageHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-page/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ExternalLinkIcon className="h-8 w-8 text-heading" />
                  </span>
                </a>
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="title-font text-lg font-medium text-heading">{t(cert.title)}</h3>
                  <p className="mb-3 text-sm text-accent-soft">{t(cert.issuer)}</p>
                  <p className="text-sm leading-relaxed">{t(cert.description)}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default CertificationsComponent;
