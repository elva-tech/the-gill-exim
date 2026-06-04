import { Link } from "@tanstack/react-router";
import { Leaf, Phone, MapPin, Mail } from "lucide-react";
import { NAV, PRODUCTS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-20 bg-[oklch(0.18_0.03_152)] text-white">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none [background:radial-gradient(circle_at_20%_20%,white,transparent_50%),radial-gradient(circle_at_80%_60%,white,transparent_45%)]" />
      <div className="container-x relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 py-16 md:py-20">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-accent text-accent-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-display font-extrabold text-lg">THE GILL EXIM</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Delivering premium-quality Indian agricultural produce to international markets with reliability, hygiene, and consistent standards.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.18em] text-white/60 mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-white/80 hover:text-accent transition-colors text-sm">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.18em] text-white/60 mb-5">Products</h4>
          <ul className="space-y-3">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to="/products" className="text-white/80 hover:text-accent transition-colors text-sm">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.18em] text-white/60 mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-accent">{SITE.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
              <address className="not-italic leading-relaxed">
                {SITE.address.line1}<br />{SITE.address.line2}<br />{SITE.address.line3}
              </address>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© 2026 THE GILL EXIM. All rights reserved.</p>
          <p>Crafted for global trade.</p>
        </div>
      </div>
    </footer>
  );
}