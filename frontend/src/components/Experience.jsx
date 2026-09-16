import { Reveal, SectionHeading } from "./Reveal";
import { experience } from "../data/portfolio";

const TimelineItem = ({ item, index }) => (
  <Reveal delay={index * 0.06}>
    <div className="group relative pl-14 md:pl-20" data-testid={`experience-item-${index}`}>
      <span
        className={`absolute left-0 top-8 flex h-5 w-5 items-center justify-center rounded-full border md:left-4 ${
          item.current
            ? "animate-pulse-ring border-cyan-300 bg-cyan-400"
            : "border-cyan-400/40 bg-[#0B0C10] shadow-[0_0_14px_rgba(0,240,255,0.35)]"
        }`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${item.current ? "bg-[#06262b]" : "bg-cyan-400"}`} />
      </span>

      <div className="glass glass-hover rounded-2xl p-6 transition-transform duration-300 group-hover:-translate-y-0.5 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="mono-label !text-[10px] mb-2">{item.org}</p>
            <h3 className="font-display text-xl font-semibold text-slate-50 sm:text-2xl">
              {item.role}
            </h3>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300">
            {item.period}
          </span>
        </div>

        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-5 text-sm leading-relaxed text-slate-400">{item.summary}</p>
            <div className="flex flex-wrap gap-2 pt-4">
              {item.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-[10px] tracking-wider text-cyan-300/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 transition-colors duration-300 group-hover:text-cyan-500/70">
          Hover to expand
        </p>
      </div>
    </div>
  </Reveal>
);

export const Experience = () => (
  <section id="experience" data-testid="experience-section" className="relative z-10 py-28 md:py-40">
    <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="The Journey So Far"
        description="Internships, ambassadorships and freelance engineering across AI, data and full-stack development."
      />
      <div className="relative">
        <span
          className="absolute bottom-4 left-[9px] top-4 w-px md:left-[25px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,240,255,0.5), rgba(168,85,247,0.4), rgba(0,240,255,0.08))",
          }}
          aria-hidden="true"
        />
        <div className="space-y-8">
          {experience.map((item, i) => (
            <TimelineItem key={item.org + item.period} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);
