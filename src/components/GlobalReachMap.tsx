import { motion } from "motion/react";
import { MapPin } from "lucide-react";

const MARKETS = [
  { x: "20%", y: "40%", l: "Europe" },
  { x: "55%", y: "45%", l: "Middle East" },
  { x: "75%", y: "55%", l: "SE Asia" },
  { x: "32%", y: "75%", l: "Africa" },
  { x: "10%", y: "35%", l: "Americas" },
  { x: "85%", y: "75%", l: "Oceania" },
] as const;

type GlobalReachMapProps = {
  patternId?: string;
  maskId?: string;
};

export function GlobalReachMap({ patternId = "dotgrid", maskId = "worldmask" }: GlobalReachMapProps) {
  return (
    <div className="relative aspect-[2/1] max-w-5xl mx-auto">
      <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full opacity-30" fill="none" aria-hidden>
        <defs>
          <pattern id={patternId} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="white" />
          </pattern>
          <mask id={maskId}>
            <rect width="1000" height="500" fill="black" />
            <ellipse cx="200" cy="200" rx="120" ry="100" fill="white" />
            <ellipse cx="500" cy="220" rx="180" ry="140" fill="white" />
            <ellipse cx="780" cy="220" rx="140" ry="120" fill="white" />
            <ellipse cx="320" cy="380" rx="80" ry="70" fill="white" />
            <ellipse cx="850" cy="400" rx="60" ry="50" fill="white" />
          </mask>
        </defs>
        <rect width="1000" height="500" fill={`url(#${patternId})`} mask={`url(#${maskId})`} />
      </svg>
      {MARKETS.map((m, i) => (
        <motion.div
          key={m.l}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 motion-reduce:opacity-100 motion-reduce:scale-100"
          style={{ left: m.x, top: m.y }}
        >
          <span className="relative grid place-items-center">
            <span className="absolute h-8 w-8 rounded-full bg-accent/30 animate-ping motion-reduce:animate-none" />
            <span className="relative grid place-items-center h-4 w-4 rounded-full bg-accent ring-4 ring-accent/30 shadow-[0_0_12px_oklch(0.72_0.18_55/0.65)]">
              <MapPin className="h-2.5 w-2.5 text-accent-foreground" />
            </span>
            <span className="absolute top-5 text-[10px] uppercase tracking-wider text-white/85 whitespace-nowrap font-semibold">
              {m.l}
            </span>
          </span>
        </motion.div>
      ))}
    </div>
  );
}
