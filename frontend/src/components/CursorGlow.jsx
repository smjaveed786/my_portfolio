import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsTouch, usePrefersReducedMotion } from "../hooks/useMotionPrefs";

export const CursorGlow = () => {
  const touch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (touch || reduced) return undefined;
    const fn = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [touch, reduced, x, y]);

  if (touch || reduced) return null;

  return (
    <>
      <motion.div
        data-testid="cursor-glow"
        className="pointer-events-none fixed z-[80] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
        style={{
          left: sx,
          top: sy,
          background:
            "radial-gradient(circle, rgba(0,240,255,0.07) 0%, rgba(168,85,247,0.05) 35%, transparent 65%)",
        }}
      />
      <motion.div
        className="pointer-events-none fixed z-[80] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/40"
        style={{ left: sx, top: sy }}
      />
    </>
  );
};
