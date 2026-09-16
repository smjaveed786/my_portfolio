import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/useMotionPrefs";

export const Portrait = () => {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.div
      data-testid="hero-portrait"
      initial={reduced ? false : { opacity: 0, scale: 0.92, y: 32 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="animate-float-slow relative mx-auto w-full max-w-[330px] xl:max-w-[390px]"
    >
      <div
        className="absolute -inset-12 rounded-full"
        style={{ background: "radial-gradient(circle at 50% 18%, rgba(0,240,255,0.18), transparent 60%)" }}
        aria-hidden="true"
      />
      <div
        className="animate-spin-slower absolute -inset-[3px] rounded-[34px] opacity-70"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(0,240,255,0.45) 10%, transparent 22%, transparent 52%, rgba(168,85,247,0.45) 64%, transparent 76%)",
        }}
        aria-hidden="true"
      />
      <div className="glass relative overflow-hidden rounded-[32px]">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 8%, rgba(0,240,255,0.22), rgba(15,23,42,0.92) 68%)" }}
          aria-hidden="true"
        />
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
        <span
          className="animate-scan absolute left-0 z-20 h-px w-full bg-cyan-300/70 shadow-[0_0_14px_2px_rgba(0,240,255,0.5)]"
          aria-hidden="true"
        />
        <img
          src="/javeed-portrait.png"
          alt="Shaik Mohammad Javeed Ahamed"
          data-testid="hero-portrait-image"
          className="relative z-10 w-full"
        />
        <div className="relative z-20 flex items-center justify-between border-t border-white/10 bg-[#0B0C10]/80 px-5 py-3 backdrop-blur-md">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-400">javeed.exe</span>
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            online
          </span>
        </div>
      </div>
      <span className="glass animate-float-slow absolute -left-6 top-12 rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300">
        Agentic AI
      </span>
      <span
        className="glass animate-float-slow absolute -right-4 bottom-24 rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-purple-300"
        style={{ animationDelay: "1.4s" }}
      >
        React + Python
      </span>
    </motion.div>
  );
};
