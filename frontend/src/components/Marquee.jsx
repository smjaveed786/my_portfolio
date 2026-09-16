import { marqueeWords } from "../data/portfolio";

export const EditorialMarquee = () => {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative z-10 overflow-hidden border-y border-white/5 bg-[#0B0C10] py-6 md:py-8"
      aria-hidden="true"
    >
      <div className="animate-marquee-slow flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl md:text-4xl font-bold tracking-tight text-outline">
              {w}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/50" />
          </span>
        ))}
      </div>
    </div>
  );
};
