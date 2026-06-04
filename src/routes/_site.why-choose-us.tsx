import { createFileRoute } from "@tanstack/react-router";
import { Sprout, BadgeCheck, Globe2, Package, Banknote, Clock, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { PageHero, CTABand } from "./_site.about";

export const Route = createFileRoute("/_site/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — THE GILL EXIM" },
      { name: "description", content: "Direct farm sourcing, premium quality, international export standards, secure packaging, competitive pricing and timely delivery." },
      { property: "og:title", content: "Why Choose THE GILL EXIM" },
      { property: "og:description", content: "Six promises that keep international buyers coming back." },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <>
      <PageHero title="Why Choose Us" subtitle="Six promises that keep international buyers coming back, shipment after shipment." />

      <section className="py-20 md:py-28">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {[
            { icon: Sprout, t: "Direct Farm Sourcing", d: "Partnerships with trusted growers across India." },
            { icon: BadgeCheck, t: "Premium Quality Selection", d: "Hand-graded for size, colour and shelf life." },
            { icon: Globe2, t: "International Export Standards", d: "Phytosanitary, labelling and packaging compliance." },
            { icon: Package, t: "Secure Packaging", d: "Mesh bags, ventilated cartons and pallets." },
            { icon: Banknote, t: "Competitive Pricing", d: "Direct sourcing means honest FOB pricing." },
            { icon: Clock, t: "Timely Delivery", d: "Reefer logistics with full traceability." },
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
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-x">
          <SectionHeading eyebrow="Built on Trust" title="What our process guarantees" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, t: "Quality Assurance", d: "Multi-point inspection from farm to port." },
              { icon: HeartHandshake, t: "Long-term Partnership", d: "We invest in repeat-buyer relationships." },
              { icon: Sparkles, t: "Brand Reliability", d: "Consistent standards across every shipment." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.08}>
                <div className="rounded-3xl bg-card border border-border p-8">
                  <span className="inline-grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-[oklch(0.36_0.10_152)] text-primary-foreground"><c.icon className="h-7 w-7" /></span>
                  <h3 className="mt-6 font-display font-extrabold text-2xl">{c.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
