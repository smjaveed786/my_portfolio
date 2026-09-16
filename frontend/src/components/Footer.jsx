import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personal } from "../data/portfolio";

export const Footer = () => (
  <footer data-testid="footer" className="relative z-10 border-t border-white/5 bg-[#08090d]">
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl">
            {personal.name}
          </p>
          <p className="mono-label mt-3">AI & Full-Stack Developer</p>
          <div className="mt-7 flex gap-3">
            {[
              { icon: Github, href: personal.github, testid: "footer-github-link", label: "GitHub" },
              { icon: Linkedin, href: personal.linkedin, testid: "footer-linkedin-link", label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personal.email}`, testid: "footer-email-link", label: "Email" },
            ].map(({ icon: Icon, href, testid, label }) => (
              <a
                key={testid}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                data-testid={testid}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-[border-color,color,box-shadow] duration-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_24px_-6px_rgba(0,240,255,0.6)]"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
        <a
          href="#home"
          data-testid="back-to-top-button"
          className="group flex w-fit items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500 transition-colors duration-300 hover:text-cyan-300"
        >
          Back to top
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-cyan-400/50">
            <ArrowUp size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
      <div className="mt-14 border-t border-white/5 pt-8">
        <p className="font-mono text-xs text-slate-600" data-testid="footer-copyright">
          © 2026 Javeed Ahamed. Built with code, AI & curiosity.
        </p>
      </div>
    </div>
  </footer>
);
