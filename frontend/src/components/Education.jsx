import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

export const Education = () => (
  <section id="education" data-testid="education-section" className="relative z-10 py-28 md:py-40">
    <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
      <SectionHeading index="07" eyebrow="Education" title="The Foundation" />
      <Reveal>
        <TiltCard className="group" max={5}>
          <div
            data-testid="education-card"
            className="glass glass-hover relative overflow-hidden rounded-3xl p-10 md:p-14"
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-cyan-400/20"
              style={{ boxShadow: "0 0 80px rgba(0,240,255,0.12) inset" }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-purple-400/20"
              aria-hidden="true"
            />
            <div className="animate-float-slow mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_32px_-6px_rgba(0,240,255,0.55)]">
              <GraduationCap size={30} />
            </div>
            <h3 className="max-w-xl font-display text-xl font-semibold leading-snug text-slate-50 sm:text-2xl">
              {education.degree}
            </h3>
            <p className="mt-4 text-base text-slate-400">{education.institute}</p>
            <span className="mt-7 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
              {education.graduated}
            </span>
          </div>
        </TiltCard>
      </Reveal>
    </div>
  </section>
);
