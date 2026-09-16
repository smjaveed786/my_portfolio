import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/useMotionPrefs";

export const Reveal = ({ children, delay = 0, className = "", y = 32 }) => {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeading = ({ index, eyebrow, title, description, align = "left" }) => (
  <Reveal className={`mb-14 md:mb-20 ${align === "center" ? "text-center" : ""}`}>
    <p className="mono-label mb-4" data-testid={`section-eyebrow-${index}`}>
      {index} {"//"} {eyebrow}
    </p>
    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-50">
      {title}
    </h2>
    {description && (
      <p className="mt-5 max-w-2xl text-base text-slate-400 leading-relaxed">{description}</p>
    )}
  </Reveal>
);
