import { useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { location, sectionCopy, site } from "../data/site";
import { ui } from "../data/ui";
import { usePreferences } from "../preferences/context";
import type { Localized } from "../preferences/types";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";
import { CalendarIcon } from "./ui/icons";

const SERVICE_ID = import.meta.env.VITE_APP_SERVICE_ID ?? "";
const TEMPLATE_ID = import.meta.env.VITE_APP_TEMPLATE_ID ?? "";
const PUBLIC_KEY = import.meta.env.VITE_APP_PUBLIC_KEY ?? "";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Errors are stored localized so they re-render in the chosen language. */
type Errors = Partial<Record<"email" | "message", Localized<string>>>;

const validate = ({ email, message }: { email: string; message: string }): Errors => {
  const errors: Errors = {};
  if (!email.trim()) errors.email = ui.errorEmailRequired;
  else if (!EMAIL_PATTERN.test(email)) errors.email = ui.errorEmailInvalid;

  if (!message.trim()) errors.message = ui.errorMessageRequired;
  else if (message.trim().length < 10) errors.message = ui.errorMessageShort;

  return errors;
};

const ContactForm = () => {
  const { t } = usePreferences();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    // Clear the field error as soon as the visitor starts correcting it.
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || !formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error(`${t(ui.toastUnavailable)} ${site.email}`);
      return;
    }

    setIsSending(true);
    try {
      await toast.promise(emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY), {
        loading: t(ui.sending),
        success: t(ui.toastSuccess),
        error: t(ui.toastError),
      });
      // Only wipe the message once it is safely delivered.
      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  const fieldClass =
    "w-full rounded border bg-elevated px-3 py-1 text-base leading-8 text-heading outline-none transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-accent/40";

  return (
    <Section id="contact" aria-labelledby="contact-heading" className="relative">
      <SectionHeading
        id="contact-heading"
        index={7}
        title={t(sectionCopy.contact.title)}
        subtitle={t(sectionCopy.contact.subtitle)}
      />
      <div data-stagger className="container mx-auto grid gap-8 px-5 py-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12">
        <div className="rounded-xl border border-line bg-surface p-8">
          <dl className="grid gap-6 sm:grid-cols-2">
            {[
              { label: ui.basedIn, value: t(location) },
              { label: ui.timezoneLabel, value: site.timezone },
              { label: ui.languagesLabel, value: t(ui.languagesValue) },
            ].map(({ label, value }) => (
              <div key={t(label)}>
                <dt className="eyebrow">{t(label)}</dt>
                <dd className="mt-1 leading-relaxed text-heading">{value}</dd>
              </div>
            ))}
            <div className="sm:col-span-2">
              <dt className="eyebrow">{t(ui.emailLabel)}</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="leading-relaxed text-accent-soft hover:opacity-80">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>

          {/* A booking link converts interest into a meeting in one click. */}
          <div className="mt-8 border-t border-line pt-6">
            <a
              href={site.calendar}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <CalendarIcon className="h-5 w-5" />
              {t(ui.bookCall)}
            </a>
            <p className="mt-2 text-sm text-muted">{t(ui.bookCallHint)}</p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="flex w-full flex-col"
        >
          <h3 className="title-font mb-1 text-xl font-medium text-heading">{t(ui.contactTitle)}</h3>
          <p className="mb-4 text-sm">{t(ui.contactBlurb)}</p>

          <div className="mb-4">
            <label htmlFor="email" className="text-sm leading-7">
              {t(ui.emailField)}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`${fieldClass} ${errors.email ? "border-danger" : "border-line focus:border-accent"}`}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-danger">
                {t(errors.email)}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-sm leading-7">
              {t(ui.messageField)}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`${fieldClass} h-32 resize-none leading-6 ${
                errors.message ? "border-danger" : "border-line focus:border-accent"
              }`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-danger">
                {t(errors.message)}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="btn-primary justify-center disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? t(ui.sending) : t(ui.send)}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;
