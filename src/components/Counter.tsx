import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, animate } from "motion/react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView || to < 0) return;
    const controls = animate(mv, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return controls.stop;
  }, [inView, mv, to]);

  return (
    <motion.span ref={ref}>
      {val}
      {suffix}
    </motion.span>
  );
}