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
        title={t(sectionCopy.contact.title)}
        subtitle={t(sectionCopy.contact.subtitle)}
      />
      <div className="container mx-auto flex flex-wrap px-5 py-12 sm:flex-nowrap">
        <div className="relative flex items-end justify-start overflow-hidden rounded-xl border border-line p-10 sm:mr-10 md:w-1/2 lg:w-2/3">
          <iframe
            width="100%"
            height="100%"
            title={`${t(ui.mapOf)} ${t(location)}`}
            className="absolute inset-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210146.75955271677!2d-58.5981081473618!3d-34.61571293339003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires!5e0!3m2!1sen!2sar!4v1730223674778!5m2!1sen!2sar"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.5)", border: 0 }}
          />
          <div className="relative flex flex-wrap gap-6 rounded-lg border border-line bg-page px-6 py-6 shadow-md">
            <div>
              <p className="title-font text-xs font-semibold tracking-widest text-heading">
                {t(ui.addressLabel)}
              </p>
              <p className="leading-relaxed">{t(location)}</p>
            </div>
            <div>
              <p className="title-font text-xs font-semibold tracking-widest text-heading">{t(ui.emailLabel)}</p>
              <a href={`mailto:${site.email}`} className="leading-relaxed text-accent-soft hover:opacity-80">
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 flex w-full flex-col md:ml-auto md:mt-0 md:w-1/2 md:py-8 lg:w-1/3"
        >
          <h3 className="title-font mb-1 text-lg font-medium text-heading">{t(ui.contactTitle)}</h3>
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
            className="rounded-lg border-0 bg-accent px-6 py-2.5 text-lg font-medium text-accent-contrast transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSending ? t(ui.sending) : t(ui.send)}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;
