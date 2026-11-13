import { certifications } from "../data/certifications";
import { sectionCopy } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { ExternalLinkIcon } from "./ui/icons";

/**
 * A plain list: these back up the story, they are not the story. Each row is a
 * small picture of the certificate, what it covers and a link to verify it.
 */
const CertificationsComponent = () => {
  const { t } = usePreferences();

  return (
    <Section id="certifications" aria-labelledby="certifications-heading">
      <SectionHeading
        id="certifications-heading"
        index={6}
        title={t(sectionCopy.certifications.title)}
        subtitle={t(sectionCopy.certifications.subtitle)}
      />
      <div className="container mx-auto px-5 py-8 sm:py-12">
        <ul data-stagger className="divide-y divide-line border-y border-line">
          {certifications.map((cert) => (
            <li key={cert.id} className="grid grid-cols-[5rem_minmax(0,1fr)] gap-x-4 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-x-8 sm:py-6">
              <img
                alt={t(cert.imageAlt)}
                className="aspect-[16/10] w-full rounded-lg border border-line object-cover object-center"
                src={cert.image}
                width={cert.imageWidth}
                height={cert.imageHeight}
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3 className="title-font text-xl font-medium text-heading">{t(cert.title)}</h3>
                <p className="text-sm text-accent-soft">{t(cert.issuer)}</p>
                <p className="mt-2 max-w-prose text-sm leading-relaxed">{t(cert.description)}</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap mt-2 gap-1.5 text-sm font-medium text-accent-soft transition-opacity hover:opacity-80"
                  aria-label={`${t(cert.title)}, ${t(ui.viewCertificate)} (${t(ui.opensInNewTab)})`}
                >
                  {t(ui.viewCertificate)}
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default CertificationsComponent;
