import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "./_site.about";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact THE GILL EXIM — Request a Quote" },
      { name: "description", content: "Get in touch with THE GILL EXIM for premium Indian agro exports. Call +91 96113 91348 or send us a message for a tailored quote." },
      { property: "og:title", content: "Contact THE GILL EXIM" },
      { property: "og:description", content: "Request quotes for fresh Indian agricultural produce." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+\-()]{7,20}$/;

type ContactCard = {
  icon: typeof Phone;
  t: string;
  d: string;
  href?: string;
  external?: boolean;
};

const CONTACT_CARDS: ContactCard[] = [
  { icon: Phone, t: "Call Us", d: SITE.phone, href: `tel:${SITE.phoneRaw}` },
  { icon: Mail, t: "Email", d: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MessageCircle, t: "WhatsApp", d: "Chat instantly", href: `https://wa.me/${SITE.whatsapp}`, external: true },
  { icon: Clock, t: "Hours", d: "Mon–Sat · 9am–7pm IST" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || name.length < 2) {
      setError("Please enter your full name (at least 2 characters).");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (phone && !PHONE_RE.test(phone)) {
      setError("Please enter a valid phone number, or leave it blank.");
      return;
    }
    if (!message || message.length < 10) {
      setError("Please enter a message of at least 10 characters.");
      return;
    }

    setError(null);
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      form.reset();
    }, 400);
  };

  const resetForm = () => {
    setSent(false);
    setError(null);
  };

  return (
    <>
      <PageHero title="Get In Touch" subtitle="Tell us your requirements — volumes, destination port, packaging — and we'll send you a tailored quote." />

      <section className="py-16 md:py-24">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTACT_CARDS.map((c, i) => {
            const card = (
              <>
                <span className="inline-grid place-items-center h-12 w-12 rounded-2xl bg-primary/10 text-primary"><c.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 font-display font-extrabold text-lg">{c.t}</h3>
                <p className="mt-1 text-muted-foreground text-sm break-words">{c.d}</p>
              </>
            );
            return (
              <Reveal key={c.t} delay={i * 0.05}>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="block h-full rounded-3xl bg-card border border-border p-6 hover:shadow-soft hover:-translate-y-1 transition-all"
                  >
                    {card}
                  </a>
                ) : (
                  <div className="h-full rounded-3xl bg-card border border-border p-6">{card}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              onInput={() => error && setError(null)}
              className="rounded-4xl bg-card border border-border p-8 md:p-10 shadow-soft"
            >
              <h2 className="font-display text-2xl md:text-3xl font-extrabold">Send a message</h2>
              <p className="mt-2 text-muted-foreground text-sm">We typically respond within one business day.</p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required maxLength={120} disabled={sent} />
                <Field label="Company" name="company" maxLength={120} disabled={sent} />
                <Field label="Email" type="email" name="email" required maxLength={254} disabled={sent} />
                <Field label="Phone" name="phone" type="tel" maxLength={20} disabled={sent} />
                <Field label="Country" name="country" maxLength={80} disabled={sent} />
                <Field label="Product Interest" name="product" maxLength={120} disabled={sent} />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  disabled={sent}
                  className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none disabled:opacity-60"
                  placeholder="Tell us about your requirements…"
                />
              </div>
              {error && <p className="mt-4 text-sm text-destructive" role="alert">{error}</p>}
              {sent && !error && (
                <p className="mt-4 text-sm text-primary" role="status">
                  Thank you — we received your message and will reply within one business day.
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                {sent ? (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-7 py-3.5 text-sm font-semibold hover:bg-primary/10 transition-colors"
                  >
                    Send another message
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-primary-dark transition-colors disabled:opacity-70"
                  >
                    {submitting ? "Sending…" : (<><Send className="h-4 w-4" /> Send Message</>)}
                  </button>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-4xl bg-gradient-to-br from-primary to-[oklch(0.32_0.10_152)] text-white p-8">
              <h3 className="font-display font-extrabold text-xl">Head Office</h3>
              <address className="not-italic mt-4 text-white/85 leading-relaxed">
                <MapPin className="h-5 w-5 text-accent mb-2" />
                {SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.line3}
              </address>
              <div className="mt-5 pt-5 border-t border-white/15 space-y-2 text-sm">
                <p className="flex items-center gap-2 flex-wrap"><Phone className="h-4 w-4 text-accent shrink-0" /> {SITE.phone}</p>
                <p className="flex items-center gap-2 flex-wrap break-all"><Mail className="h-4 w-4 text-accent shrink-0" /> {SITE.email}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  maxLength,
  disabled = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  disabled?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete={name === "email" ? "email" : name === "phone" ? "tel" : name === "name" ? "name" : undefined}
        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all disabled:opacity-60"
      />
    </div>
  );
}
