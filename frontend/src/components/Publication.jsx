import { BookOpen, Lock } from "lucide-react";
import { publication } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

export const Publication = () => (
  <section id="research" data-testid="research-section" className="relative z-10 py-28 md:py-40">
    <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
      <SectionHeading
        index="08"
        eyebrow="Research & Publication"
        title="Published Work"
      />
      <Reveal>
        <TiltCard className="group" max={5}>
          <article
            data-testid="publication-card"
            className="glass glass-hover relative overflow-hidden rounded-3xl p-10 md:p-14"
          >
            <span
              className="pointer-events-none absolute -left-10 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"
              aria-hidden="true"
            />
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/25 bg-purple-400/10 text-purple-300 shadow-[0_0_32px_-6px_rgba(168,85,247,0.55)]">
                <BookOpen size={26} />
              </div>
              <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-purple-300">
                {publication.tag}
              </span>
            </div>
            <h3 className="max-w-2xl font-display text-xl font-semibold leading-snug text-slate-50 sm:text-2xl">
              {publication.title}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
              {publication.description}
            </p>
            <p className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
              <Lock size={12} />
              {publication.note}
            </p>
          </article>
        </TiltCard>
      </Reveal>
    </div>
  </section>
);
