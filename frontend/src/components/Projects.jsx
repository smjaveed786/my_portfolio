import { ArrowUpRight, Award, ChefHat, Fingerprint, MapPin, ScanFace, ShieldCheck, TrendingUp } from "lucide-react";
import { personal, projects } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const icons = { ScanFace, ShieldCheck, MapPin, ChefHat, TrendingUp, Fingerprint };

const ProjectCard = ({ project, index }) => {
  const Icon = icons[project.icon];
  const link = project.link || personal.githubRepos;
  return (
    <Reveal delay={(index % 2) * 0.12} className="h-full">
      <TiltCard className="group" max={6}>
        <article
          data-testid={`project-card-${project.id}`}
          className="glass glass-hover relative flex h-full flex-col overflow-hidden rounded-2xl p-8 md:p-10"
        >
          <span className="pointer-events-none absolute -right-4 -top-6 font-display text-[110px] font-bold leading-none text-white/[0.04]">
            {project.num}
          </span>

          <div className="mb-7 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_24px_-6px_rgba(0,240,255,0.5)]">
              <Icon size={22} />
            </div>
            {project.badge && (
              <span className="flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-400/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-purple-300">
                <Award size={12} />
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="font-display text-xl font-semibold text-slate-50 sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

          {project.id === "image-analysis" && (
            <div className="relative mt-6 h-20 overflow-hidden rounded-xl border border-cyan-400/20 bg-[#0B0C10]/80">
              <div className="grid-bg absolute inset-0 opacity-70" />
              <span className="animate-scan absolute left-0 h-px w-full bg-cyan-300 shadow-[0_0_16px_2px_rgba(0,240,255,0.7)]" />
              <span className="absolute bottom-2 left-3 font-mono text-[9px] uppercase tracking-[0.25em] text-cyan-400/70">
                vision.system — analyzing
              </span>
            </div>
          )}

          {project.features.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.features.map((f) => (
                <span
                  key={f}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-wider text-slate-300"
                >
                  {f}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono text-[10px] tracking-wider text-cyan-300/90"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`project-link-${project.id}`}
            className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300 transition-colors duration-300 hover:text-cyan-300"
          >
            View Project
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </article>
      </TiltCard>
    </Reveal>
  );
};

export const Projects = () => (
  <section id="projects" data-testid="projects-section" className="relative z-10 py-28 md:py-40">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <SectionHeading
        index="03"
        eyebrow="Projects"
        title="Featured Work"
        description="Systems built across AI, computer vision, machine learning and modern web — each one engineered end to end."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);
