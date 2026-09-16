import { Bot, Layers, Puzzle } from "lucide-react";
import { aboutCards } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const icons = { Bot, Layers, Puzzle };

export const About = () => (
  <section id="about" data-testid="about-section" className="relative z-10 py-28 md:py-40">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:mb-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <figure data-testid="about-portrait" className="group relative mx-auto w-full max-w-[420px]">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-purple-400/25"
              aria-hidden="true"
            />
            <div className="glass relative overflow-hidden rounded-2xl">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 6%, rgba(0,240,255,0.2), rgba(15,23,42,0.94) 66%)",
                }}
                aria-hidden="true"
              />
              <div className="grid-bg absolute inset-0 opacity-30" aria-hidden="true" />
              <img
                src="/javeed-portrait.png"
                alt="Shaik Mohammad Javeed Ahamed — portrait"
                data-testid="about-portrait-image"
                className="relative z-10 w-full saturate-[0.82] transition-[filter] duration-500 group-hover:saturate-100"
              />
              <span className="absolute left-3 top-3 z-20 h-5 w-5 border-l-2 border-t-2 border-cyan-400/70" aria-hidden="true" />
              <span className="absolute right-3 top-3 z-20 h-5 w-5 border-r-2 border-t-2 border-cyan-400/70" aria-hidden="true" />
              <span className="absolute bottom-3 left-3 z-20 h-5 w-5 border-b-2 border-l-2 border-cyan-400/70" aria-hidden="true" />
              <span className="absolute bottom-3 right-3 z-20 h-5 w-5 border-b-2 border-r-2 border-cyan-400/70" aria-hidden="true" />
            </div>
            <figcaption className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              <span>fig. 01 — the developer</span>
              <span className="text-cyan-400/80">Guntur, India</span>
            </figcaption>
          </figure>
        </Reveal>
        <div>
          <SectionHeading
            index="01"
            eyebrow="About"
            title="Turning Ideas Into Intelligent Products"
            description="I'm a Computer Science & Engineering graduate specializing in Data Science, with hands-on experience across AI, Agentic AI, full-stack development and modern web technologies. I enjoy building practical software products that combine intelligent systems with polished user experiences."
          />
          <Reveal delay={0.15}>
            <dl className="-mt-8 space-y-0 border-t border-white/5 md:-mt-14" data-testid="about-facts">
              {[
                ["Focus", "Agentic AI · Full-Stack Development"],
                ["Base", "Guntur, Andhra Pradesh, India"],
                ["Status", "Open to opportunities"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between gap-6 border-b border-white/5 py-4"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">{k}</dt>
                  <dd className="font-mono text-xs tracking-wider text-slate-200">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {aboutCards.map((card, i) => {
          const Icon = icons[card.icon];
          return (
            <Reveal key={card.title} delay={i * 0.12}>
              <TiltCard className="group">
                <div
                  data-testid={`about-card-${i + 1}`}
                  className="glass glass-hover relative h-full overflow-hidden rounded-2xl p-8"
                >
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_24px_-6px_rgba(0,240,255,0.5)]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-50 sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{card.text}</p>
                  <span className="pointer-events-none absolute -right-8 -top-8 font-display text-[96px] font-bold leading-none text-white/[0.03]">
                    0{i + 1}
                  </span>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
