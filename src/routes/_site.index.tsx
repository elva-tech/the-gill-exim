import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight, Globe2, Leaf, ShieldCheck, Truck, BadgeCheck,
  Package, Sprout, Banknote, Clock, Target, Eye, HeartHandshake,
  Award, Plane
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import { GlobalReachMap } from "@/components/GlobalReachMap";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { PRODUCTS } from "@/lib/site";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "THE GILL EXIM — Premium Indian Agro Exports Worldwide" },
      { name: "description", content: "Exporting fresh onion, ginger, green chilli, lemon and pomegranate from India to international markets with premium quality and reliable logistics." },
      { property: "og:title", content: "THE GILL EXIM — Premium Indian Agro Exports" },
      { property: "og:description", content: "Fresh, premium-quality agricultural exports from India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-[var(--site-header-height)] min-h-svh w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Indian agricultural fields at golden hour"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.03_152)]/85 via-[oklch(0.20_0.04_152)]/55 to-[oklch(0.12_0.03_152)]/95" />
        </div>

        <div className="relative z-10 container-x flex min-h-svh flex-col justify-center pt-[calc(var(--site-header-height)+2rem)] md:pt-[calc(var(--site-header-height)+2.5rem)] pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark text-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
              <Leaf className="h-3.5 w-3.5 text-accent" /> Trusted Indian Agro Exporter
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] text-white tracking-tight">
              Exporting India's <span className="text-accent">Finest</span> Agricultural Products Worldwide
            </h1>
            <p className="mt-6 text-base md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Delivering fresh, premium-quality onions, ginger, green chillies, lemons and pomegranates to international markets with reliability and excellence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold shadow-accent hover:brightness-110 hover:-translate-y-0.5 transition-all">
                Get Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full glass text-foreground px-7 py-3.5 text-sm font-semibold hover:bg-white transition-all">
                Explore Products
              </Link>
            </div>
          </motion.div>

          {/* Floating stat cards */}
          <div className="hidden md:grid pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 gap-4">
            {[
              { icon: Globe2, label: "Global", value: "Reach" },
              { icon: BadgeCheck, label: "100%", value: "Quality" },
              { icon: Truck, label: "On-time", value: "Shipping" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
                className="glass-dark text-white rounded-2xl p-4 pr-6 flex items-center gap-3 min-w-[180px]"
              >
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent/20 text-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-display font-extrabold text-lg leading-none">{s.label}</div>
                  <div className="text-xs uppercase tracking-wider text-white/70 mt-1">{s.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2">
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="h-8 w-px bg-white/40" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-secondary">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: 5, suffix: "+", label: "Export Products" },
            { value: 100, suffix: "%", label: "Quality Focus" },
            { value: 25, suffix: "+", label: "Global Markets" },
            { value: 99, suffix: "%", label: "On-time Delivery" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-3xl bg-card border border-border p-7 md:p-9 hover:shadow-elevated hover:-translate-y-1 transition-all">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-primary leading-none">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm md:text-base text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
              <img src={about} alt="Indian farmer selecting fresh produce" loading="lazy" width={1280} height={1280} className="relative rounded-[2rem] object-cover w-full h-[520px] shadow-elevated" />
              <div className="absolute -bottom-6 -right-6 hidden md:block glass rounded-2xl p-5 max-w-[220px] shadow-elevated">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary text-primary-foreground"><Award className="h-5 w-5" /></span>
                  <div>
                    <div className="font-display font-extrabold text-foreground leading-none">Export Grade</div>
                    <div className="text-xs text-muted-foreground mt-1">Quality assured</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">About Us</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05]">
                About THE GILL EXIM
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                THE GILL EXIM is committed to delivering premium quality agricultural products across global markets. Based in India, we specialize in exporting fresh onions, ginger, green chillies, lemons, and pomegranates while maintaining international quality standards.
              </p>
              <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                We source directly from trusted farms and suppliers to ensure freshness, hygiene, and consistency in every shipment.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Sprout, t: "Direct Sourcing", d: "From trusted Indian farms" },
                  { icon: ShieldCheck, t: "Quality Assured", d: "International standards" },
                ].map((f) => (
                  <div key={f.t} className="flex gap-3 p-4 rounded-2xl bg-secondary border border-border">
                    <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary/10 text-primary shrink-0"><f.icon className="h-5 w-5" /></span>
                    <div>
                      <div className="font-display font-extrabold text-foreground">{f.t}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Products"
            title="Premium Produce, Export Ready"
            desc="Hand-graded, hygienically packed, and shipped fresh to your warehouse — anywhere in the world."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <article className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-500">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold shadow-accent">
                      <BadgeCheck className="h-3.5 w-3.5" /> Export Quality
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-extrabold text-xl text-foreground">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Request Quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us" title="Built for Global Trade" desc="Six promises that keep international buyers coming back, shipment after shipment." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[
              { icon: Sprout, t: "Direct Farm Sourcing", d: "Partnerships with trusted growers across Karnataka and Maharashtra." },
              { icon: BadgeCheck, t: "Premium Quality Selection", d: "Hand-graded for size, colour, firmness and shelf life." },
              { icon: Globe2, t: "International Export Standards", d: "Compliant with phytosanitary, packaging, and labelling norms." },
              { icon: Package, t: "Secure Packaging", d: "Mesh bags, ventilated cartons and pallets engineered for transit." },
              { icon: Banknote, t: "Competitive Pricing", d: "Direct sourcing means honest, market-competitive FOB pricing." },
              { icon: Clock, t: "Timely Delivery", d: "Reefer logistics with full traceability and on-time shipping." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.05}>
                <div className="group h-full rounded-3xl border border-border bg-card p-7 hover:border-primary/40 hover:shadow-soft transition-all">
                  <span className="inline-grid place-items-center h-12 w-12 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display font-extrabold text-xl">{f.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-x">
          <SectionHeading eyebrow="Our DNA" title="Mission, Vision & Values" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, t: "Mission", d: "To deliver fresh and premium-quality agricultural products globally while maintaining the highest standards of quality, reliability, and customer satisfaction." },
              { icon: Eye, t: "Vision", d: "To become a globally trusted name in agro exports by connecting Indian farms to international markets." },
              { icon: HeartHandshake, t: "Values", d: "Quality. Trust. Transparency. Commitment. Customer Satisfaction — every shipment, every time." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.1}>
                <div className="relative h-full rounded-3xl bg-card border border-border p-8 overflow-hidden">
                  <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/5" />
                  <span className="relative inline-grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.36_0.10_152)] text-primary-foreground">
                    <c.icon className="h-7 w-7" />
                  </span>
                  <h3 className="relative mt-6 font-display font-extrabold text-2xl">{c.t}</h3>
                  <p className="relative mt-3 text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPORT PROCESS */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Our Process" title="From Farm to Foreign Port" desc="A transparent five-step pipeline engineered for freshness and reliability." />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-10 md:space-y-16">
              {[
                { icon: Sprout, t: "Farm Selection", d: "We partner with vetted farms practising responsible agriculture." },
                { icon: ShieldCheck, t: "Quality Inspection", d: "Multi-stage checks on size, firmness, colour, residues and shelf life." },
                { icon: Package, t: "Processing & Packaging", d: "Cleaned, sorted and packed in export-grade materials for transit." },
                { icon: BadgeCheck, t: "Export Documentation", d: "Phytosanitary, COO, invoice, BL and all destination paperwork." },
                { icon: Plane, t: "Global Shipment", d: "Reefer containers and air cargo with end-to-end traceability." },
              ].map((s, i) => (
                <Reveal key={s.t} delay={i * 0.05}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`pl-16 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                      <div className="text-accent font-display font-extrabold text-sm uppercase tracking-[0.2em]">Step {i + 1}</div>
                      <h3 className="mt-2 font-display font-extrabold text-2xl md:text-3xl">{s.t}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
                    </div>
                    <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 md:relative md:top-auto">
                      <div className="grid place-items-center h-12 w-12 rounded-2xl bg-primary text-primary-foreground shadow-soft ring-8 ring-background">
                        <s.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-24 md:py-32 bg-[oklch(0.18_0.03_152)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] [background:radial-gradient(circle_at_30%_30%,white,transparent_50%),radial-gradient(circle_at_70%_60%,oklch(0.72_0.18_55),transparent_50%)]" />
        <div className="container-x relative">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark text-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              <Globe2 className="h-3.5 w-3.5 text-accent" /> Global Reach
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold leading-[1.05]">Serving international buyers worldwide</h2>
            <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed">
              Reliable agricultural exports and efficient logistics support — from Indian ports to your warehouse.
            </p>
          </div>

          <div className="mt-14">
            <GlobalReachMap />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-primary via-[oklch(0.40_0.11_152)] to-[oklch(0.32_0.10_152)] p-10 md:p-20 text-center">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <h2 className="relative font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] max-w-3xl mx-auto">
                Looking for a reliable agricultural export partner?
              </h2>
              <p className="relative mt-5 text-white/80 max-w-xl mx-auto">
                Let's discuss volumes, specifications, and shipping schedules tailored to your market.
              </p>
              <div className="relative mt-9 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold shadow-accent hover:brightness-110 hover:-translate-y-0.5 transition-all">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass text-foreground px-7 py-3.5 text-sm font-semibold hover:bg-white transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}