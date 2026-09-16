import { BadgeCheck, GraduationCap, ScrollText } from "lucide-react";
import { certifications } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const MarqueeRow = ({ items, reverse = false, icon: Icon }) => {
  const row = [...items, ...items];
  return (
    <div className="marquee-paused overflow-hidden" data-testid={reverse ? "training-marquee" : "cert-marquee"}>
      <div className={`${reverse ? "animate-marquee-reverse" : "animate-marquee"} flex w-max gap-4 py-2`}>
        {row.map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            className="glass glass-hover flex items-center gap-3 whitespace-nowrap rounded-full px-6 py-3.5"
          >
            <Icon size={15} className={reverse ? "text-purple-300" : "text-cyan-300"} />
            <span className="text-sm font-medium text-slate-200">{c.name}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              {c.issuer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Certifications = () => (
  <section id="certifications" data-testid="certifications-section" className="relative z-10 overflow-hidden py-28 md:py-40">
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <SectionHeading
        index="06"
        eyebrow="Credentials"
        title="Certifications & Training"
        description="Formal professional certifications, industry training programs and campus leadership roles."
      />

      <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        {certifications.professional.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.1}>
            <div
              data-testid={`professional-cert-${i}`}
              className="glass glass-hover group flex h-full items-start gap-4 rounded-2xl border-cyan-400/20 p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                <BadgeCheck size={20} />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-slate-50">{c.name}</p>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Professional Certification · {c.issuer}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    <div className="space-y-4">
      <p className="mono-label px-6 md:px-10 lg:px-16">{"//"} Certificates & Training</p>
      <MarqueeRow items={certifications.training} icon={ScrollText} />
      <p className="mono-label px-6 pt-8 md:px-10 lg:px-16">{"//"} Campus Leadership</p>
      <MarqueeRow items={certifications.ambassador} reverse icon={GraduationCap} />
    </div>
  </section>
);
