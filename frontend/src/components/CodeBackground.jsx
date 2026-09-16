import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { bgSnippets } from "../data/portfolio";
import { useIsMobile, useIsTouch, usePrefersReducedMotion } from "../hooks/useMotionPrefs";

const Layer = ({ snippet, index, mouseX, mouseY, scrollY }) => {
  const reduced = usePrefersReducedMotion();
  const factor = snippet.depth;
  const px = useTransform(mouseX, (v) => v * 26 * factor);
  const py = useTransform(mouseY, (v) => v * 20 * factor);
  const sx = useSpring(px, { stiffness: 40, damping: 16 });
  const sy = useSpring(py, { stiffness: 40, damping: 16 });
  const scrollShift = useTransform(scrollY, (v) => v * -0.06 * factor);

  return (
    <motion.pre
      data-testid={`bg-code-snippet-${index}`}
      className="absolute font-mono text-[10px] md:text-[11px] leading-relaxed text-cyan-200/[0.07] whitespace-pre select-none"
      style={{
        top: snippet.top,
        left: snippet.left,
        x: reduced ? 0 : sx,
        y: reduced ? 0 : sy,
        translateY: reduced ? 0 : scrollShift,
        textShadow: "0 0 18px rgba(0,240,255,0.15)",
      }}
      animate={reduced ? {} : { opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 7 + index * 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      {snippet.code}
    </motion.pre>
  );
};

export const CodeBackground = () => {
  const mobile = useIsMobile();
  const touch = useIsTouch();
  const reduced = usePrefersReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const ref = useRef(null);

  const onMove = (e) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  const snippets = mobile ? bgSnippets.slice(0, 3) : bgSnippets;

  return (
    <div
      ref={ref}
      data-testid="code-background"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      onMouseMove={!touch && !reduced ? onMove : undefined}
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      {snippets.map((s, i) => (
        <Layer key={i} snippet={s} index={i} mouseX={mouseX} mouseY={mouseY} scrollY={scrollY} />
      ))}
    </div>
  );
};
