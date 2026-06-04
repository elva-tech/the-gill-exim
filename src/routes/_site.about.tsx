import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, HeartHandshake, Sprout, ShieldCheck, Globe2 } from "lucide-react";
import about from "@/assets/about.jpg";
import { Reveal, SectionHeading } from "@/components/Reveal";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About THE GILL EXIM — Indian Agricultural Exporter" },
      { name: "description", content: "Learn about THE GILL EXIM, a premium Indian agricultural exporter delivering fresh produce to international markets with quality and reliability." },
      { property: "og:title", content: "About THE GILL EXIM" },
      { property: "og:description", content: "Premium Indian agricultural exporter." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero title="About Us" subtitle="A trusted partner connecting Indian farms with global markets." />
      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <img src={about} alt="Farmer hand-selecting produce" loading="lazy" width={1280} height={1280} className="rounded-[2rem] object-cover w-full h-[560px] shadow-elevated" />
          </Reveal>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">Who We Are</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">A premium agro export brand from India</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                THE GILL EXIM is committed to delivering premium quality agricultural products across global markets. Based in India, we specialize in exporting fresh onions, ginger, green chillies, lemons, and pomegranates while maintaining international quality standards.
              </p>
              <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                We source directly from trusted farms and suppliers to ensure freshness, hygiene, and consistency in every shipment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-x">
          <SectionHeading eyebrow="Our DNA" title="Mission, Vision & Values" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, t: "Mission", d: "To deliver fresh and premium-quality agricultural products globally while maintaining the highest standards of quality, reliability, and customer satisfaction." },
              { icon: Eye, t: "Vision", d: "To become a globally trusted name in agro exports by connecting Indian farms to international markets." },
              { icon: HeartHandshake, t: "Values", d: "Quality. Trust. Transparency. Commitment. Customer Satisfaction — every shipment, every time." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="relative h-full rounded-3xl bg-card border border-border p-8">
                  <span className="inline-grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.36_0.10_152)] text-primary-foreground">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display font-extrabold text-2xl">{c.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: Sprout, t: "Direct Sourcing", d: "Trusted farm partnerships across India." },
            { icon: ShieldCheck, t: "Quality Assured", d: "International grade selection at every stage." },
            { icon: Globe2, t: "Global Logistics", d: "Reliable shipping to 25+ markets." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="rounded-3xl border border-border p-7 bg-card">
                <span className="inline-grid place-items-center h-12 w-12 rounded-2xl bg-primary/10 text-primary"><c.icon className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display font-extrabold text-xl">{c.t}</h3>
                <p className="mt-2 text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative scroll-mt-[var(--site-header-height)] pt-6 md:pt-10 pb-16 md:pb-24 bg-gradient-to-br from-[oklch(0.96_0.02_152)] via-secondary to-background overflow-hidden">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="container-x relative z-10 text-center max-w-3xl mx-auto">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">THE GILL EXIM</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 font-display text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">{title}</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-[oklch(0.32_0.10_152)] p-10 md:p-16 text-center">
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
            <h2 className="relative font-display text-3xl md:text-5xl font-extrabold text-white leading-tight">Ready to import premium Indian produce?</h2>
            <p className="relative mt-5 text-white/80 max-w-xl mx-auto text-base md:text-lg">
              Let&apos;s discuss volumes, specifications, and shipping schedules tailored to your market.
            </p>
            <div className="relative mt-9 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold shadow-accent hover:brightness-110 hover:-translate-y-0.5 transition-all">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white hover:text-foreground transition-all">
                View Products
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}