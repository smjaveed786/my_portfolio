import { Bot, Layers, Puzzle } from "lucide-react";
import { aboutCards } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const icons = { Bot, Layers, Puzzle };

export const About = () => (
  <section id="about" data-testid="about-section" className="relative z-10 py-28 md:py-40">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <div className="mb-16 max-w-4xl lg:mb-24">
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
