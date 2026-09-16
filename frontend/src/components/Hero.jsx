import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { heroCode, personal } from "../data/portfolio";
import { Magnetic } from "./Magnetic";
import { Portrait } from "./Portrait";
import { useIsMobile, usePrefersReducedMotion } from "../hooks/useMotionPrefs";

const HeroScene = lazy(() => import("./three/HeroScene"));

const MaskedLine = ({ children, delay }) => {
  const reduced = usePrefersReducedMotion();
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={reduced ? false : { y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const Hero = () => {
  const mobile = useIsMobile();
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      {!reduced && (
        <Suspense fallback={null}>
          <HeroScene particleCount={mobile ? 700 : 2200} />
        </Suspense>
      )}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,240,255,0.08), transparent 65%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.09), transparent 65%)" }}
        aria-hidden="true"
      />

      <pre
        data-testid="hero-code-stream"
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute left-[46%] top-[5%] hidden select-none whitespace-pre font-mono text-[11px] leading-loose text-cyan-200/[0.1] lg:block"
        style={{ textShadow: "0 0 20px rgba(0,240,255,0.2)" }}
      >
        {heroCode}
      </pre>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-32 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-16">
        <div>
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 lg:hidden"
        >
          <div
            data-testid="hero-portrait-mobile"
            className="relative h-24 w-24 overflow-hidden rounded-full border border-cyan-400/40 shadow-[0_0_30px_-6px_rgba(0,240,255,0.6)]"
          >
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(circle at 50% 12%, rgba(0,240,255,0.28), #0f172a 72%)" }}
            />
            <img
              src="/javeed-portrait.png"
              alt="Shaik Mohammad Javeed Ahamed"
              className="relative h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-2 backdrop-blur-md"
          data-testid="availability-badge"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">
            {personal.availability}
          </span>
        </motion.div>

        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mono-label mb-6"
          data-testid="hero-intro"
        >
          {"//"} {personal.heroIntro}
        </motion.p>

        <h1
          data-testid="hero-headline"
          className="font-display text-4xl font-bold leading-[1.06] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl"
        >
          <MaskedLine delay={0.4}>Building Intelligent</MaskedLine>
          <MaskedLine delay={0.52}>
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </MaskedLine>
          <MaskedLine delay={0.64}>with AI & Code.</MaskedLine>
        </h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
          data-testid="hero-supporting-text"
        >
          {personal.heroSupport}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <a
              href="#projects"
              data-testid="hero-cta-projects"
              className="group flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#06262b] transition-[box-shadow,background-color] duration-300 hover:bg-cyan-300 hover:shadow-[0_0_44px_-8px_rgba(0,240,255,0.8)]"
            >
              View Projects
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={personal.resume}
              download
              data-testid="hero-cta-resume"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-purple-400/50 hover:shadow-[0_0_36px_-10px_rgba(168,85,247,0.7)]"
            >
              <Download size={15} />
              Download Resume
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              data-testid="hero-cta-contact"
              className="flex items-center gap-2 px-4 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-slate-400 transition-colors duration-300 hover:text-cyan-300"
            >
              <Mail size={15} />
              Contact Me
            </a>
          </Magnetic>
        </motion.div>
        </div>
        <div className="hidden lg:block">
          <Portrait />
        </div>
      </div>

      <motion.a
        href="#about"
        data-testid="hero-scroll-cue"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-slate-500 transition-colors duration-300 hover:text-cyan-300"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <ArrowDown size={15} className="animate-bounce" />
      </motion.a>
    </section>
  );
};
