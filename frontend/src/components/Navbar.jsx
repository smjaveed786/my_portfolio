import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { personal } from "../data/portfolio";
import { Magnetic } from "./Magnetic";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        data-testid="navbar"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#0B0C10]/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <a
            href="#home"
            data-testid="nav-logo"
            className="font-mono text-lg font-semibold text-slate-50"
          >
            JA<span className="text-cyan-400 animate-caret">_</span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-cyan-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Magnetic strength={0.25}>
              <a
                href={personal.resume}
                download
                data-testid="nav-resume-button"
                className="hidden items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-300 transition-[background-color,box-shadow] duration-300 hover:bg-cyan-400/20 hover:shadow-[0_0_24px_-6px_rgba(0,240,255,0.6)] sm:flex"
              >
                <Download size={13} />
                Resume
              </a>
            </Magnetic>
            <button
              data-testid="nav-menu-button"
              onClick={() => setOpen(true)}
              className="text-slate-200 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#0B0C10]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="font-mono text-lg font-semibold text-slate-50">
                JA<span className="text-cyan-400">_</span>
              </span>
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="text-slate-200"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-white/5 py-4 font-display text-3xl font-bold text-slate-200 transition-colors duration-300 hover:text-cyan-300"
                >
                  <span className="mr-4 font-mono text-xs text-cyan-500">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href={personal.resume}
                download
                data-testid="mobile-nav-resume-button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex w-fit items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300"
              >
                <Download size={14} />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
