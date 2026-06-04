import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export const Route = createFileRoute("/_site")({
  component: SiteLayoutRoute,
});

function SiteLayoutRoute() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-[var(--site-header-height)]">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
