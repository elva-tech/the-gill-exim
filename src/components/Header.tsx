import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Leaf, Phone } from "lucide-react";
import { NAV } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className={`grid place-items-center h-10 w-10 rounded-xl transition-colors ${solid ? "bg-primary text-primary-foreground" : "bg-white/15 text-white backdrop-blur-md"}`}>
            <Leaf className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display font-extrabold tracking-tight text-base md:text-lg ${solid ? "text-foreground" : "text-white"}`}>
              THE GILL EXIM
            </span>
            <span className={`text-[10px] uppercase tracking-[0.18em] mt-1 ${solid ? "text-muted-foreground" : "text-white/70"}`}>
              Agro Exports
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                solid ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"
              }`}
              activeProps={{
                className: `relative px-4 py-2 text-sm font-semibold rounded-full ${solid ? "text-primary bg-primary/10" : "text-white bg-white/15"}`,
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold shadow-accent hover:brightness-110 hover:-translate-y-0.5 transition-all"
          >
            <Phone className="h-4 w-4" /> Get Quote
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`lg:hidden grid place-items-center h-11 w-11 rounded-xl ${solid ? "bg-secondary text-foreground" : "bg-white/15 text-white backdrop-blur-md"}`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-x-hidden overflow-y-auto max-h-[min(70vh,24rem)] bg-background/95 backdrop-blur-xl border-t border-border"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-4 py-3 rounded-xl text-foreground/85 font-medium hover:bg-secondary"
                  activeProps={{ className: "px-4 py-3 rounded-xl text-primary bg-primary/10 font-semibold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3 font-semibold">
                <Phone className="h-4 w-4" /> Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}