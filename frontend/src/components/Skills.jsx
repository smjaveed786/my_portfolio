import { Suspense, lazy, useState } from "react";
import { skills, techStack } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { usePrefersReducedMotion } from "../hooks/useMotionPrefs";

const SkillsScene = lazy(() => import("./three/SkillsScene"));

export const Skills = () => {
  const reduced = usePrefersReducedMotion();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" data-testid="skills-section" className="relative z-10 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <SectionHeading
          index="05"
          eyebrow="Skills"
          title="The Skill Universe"
          description="Technologies orbiting one focus — building intelligent software. Hover a node to explore."
        />

        {reduced ? (
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s.name}
                className="glass rounded-full px-5 py-2.5 font-mono text-xs tracking-wider text-slate-200"
              >
                {s.name}
              </span>
            ))}
          </div>
        ) : (
          <Reveal>
            <div
              className="glass relative h-[480px] overflow-hidden rounded-3xl md:h-[600px]"
              data-testid="skills-universe"
            >
              <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center font-mono text-xs uppercase tracking-[0.3em] text-cyan-500/60">
                    Initializing universe…
                  </div>
                }
              >
                <SkillsScene setHoveredSkill={setHoveredSkill} />
              </Suspense>
              <div
                data-testid="skill-info-panel"
                className="glass absolute bottom-5 left-5 max-w-xs rounded-xl px-5 py-4"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-400">
                  {hoveredSkill ? hoveredSkill.name : "Skill Intel"}
                </p>
                <p className="mt-1.5 text-sm text-slate-300">
                  {hoveredSkill ? hoveredSkill.desc : "Hover any orbiting node — rotation pauses and details appear here."}
                </p>
              </div>
            </div>
          </Reveal>
        )}

        <Reveal delay={0.1}>
          <div className="mt-16">
            <p className="mono-label mb-6">{"//"} Full Technology Stack</p>
            <div className="flex flex-wrap gap-2.5" data-testid="tech-stack-cloud">
              {techStack.map((t) => (
                <span
                  key={t}
                  className="cursor-default rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-slate-300 backdrop-blur-sm transition-[border-color,color,box-shadow] duration-300 hover:border-cyan-400/40 hover:text-cyan-300 hover:shadow-[0_0_20px_-6px_rgba(0,240,255,0.5)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
