import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTABand } from "./_site.about";

export const Route = createFileRoute("/_site/products")({
  head: () => ({
    meta: [
      { title: "Products — Fresh Indian Agro Exports | THE GILL EXIM" },
      { name: "description", content: "Browse our export catalogue: fresh onion, ginger, green chilli, lemon and pomegranate — hand-graded and shipped globally." },
      { property: "og:title", content: "Products — THE GILL EXIM" },
      { property: "og:description", content: "Fresh Indian agricultural produce for international buyers." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero title="Our Products" subtitle="Premium-grade, export-ready Indian produce — sourced, sorted and shipped with care." />
      <section className="py-20 md:py-28">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="group h-full relative overflow-hidden rounded-3xl bg-card border border-border hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold shadow-accent">
                    <BadgeCheck className="h-3.5 w-3.5" /> Export Quality
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-extrabold text-xl">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {["Hand-graded", "Export packaging", "Reefer shipping"].map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
