import { createFileRoute } from "@tanstack/react-router";
import { Globe2, MapPin, Plane, Ship } from "lucide-react";
import { GlobalReachMap } from "@/components/GlobalReachMap";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { EXPORT_MARKETS } from "@/lib/site";
import { PageHero, CTABand } from "./_site.about";

export const Route = createFileRoute("/_site/global-export")({
  head: () => ({
    meta: [
      { title: "Global Export — THE GILL EXIM" },
      { name: "description", content: "Serving international buyers with reliable agricultural exports and efficient logistics support — across Europe, Middle East, Asia, Africa, Americas and Oceania." },
      { property: "og:title", content: "Global Export — THE GILL EXIM" },
      { property: "og:description", content: "Reliable agro exports to 25+ international markets." },
      { property: "og:url", content: "/global-export" },
    ],
    links: [{ rel: "canonical", href: "/global-export" }],
  }),
  component: GlobalPage,
});

function GlobalPage() {
  return (
    <>
      <PageHero title="Global Export" subtitle="Serving international buyers with reliable agricultural exports and efficient logistics support." />

      <section className="py-20 md:py-28 bg-[oklch(0.18_0.03_152)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_30%_30%,white,transparent_50%),radial-gradient(circle_at_70%_60%,oklch(0.72_0.18_55),transparent_50%)]" />
        <div className="container-x relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark text-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
              <Globe2 className="h-3.5 w-3.5 text-accent" /> Worldwide Coverage
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold leading-[1.05]">Connecting Indian farms to the world</h2>
          </div>

          <GlobalReachMap patternId="dotgrid2" maskId="worldmask2" />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Regions Served" title="Markets we ship to" desc="A network of importers, distributors, food suppliers and retail chains across six continents." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPORT_MARKETS.map((c, i) => (
              <Reveal key={c} delay={i * 0.03}>
                <div className="flex items-center gap-3 rounded-2xl bg-card border border-border p-4 hover:border-primary/40 transition-colors">
                  <span className="grid place-items-center h-9 w-9 rounded-xl bg-primary/10 text-primary"><MapPin className="h-4 w-4" /></span>
                  <span className="font-semibold text-foreground">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {[
            { icon: Ship, t: "Sea Freight", d: "Reefer containers (20ft & 40ft) from Mundra, JNPT, Nhava Sheva and Tuticorin." },
            { icon: Plane, t: "Air Freight", d: "Time-critical shipments via BLR, BOM and DEL with full cold-chain integrity." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.1}>
              <div className="rounded-3xl bg-card border border-border p-8">
                <span className="inline-grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.36_0.10_152)] text-primary-foreground"><c.icon className="h-7 w-7" /></span>
                <h3 className="mt-6 font-display font-extrabold text-2xl">{c.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}