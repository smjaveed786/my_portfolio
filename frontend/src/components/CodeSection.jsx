import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github } from "lucide-react";
import { editorTabs, personal } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { useIsTouch, usePrefersReducedMotion } from "../hooks/useMotionPrefs";

const KEYWORDS = {
  python: ["from", "import", "def", "return", "async", "await", "while", "True", "False", "None", "class", "with", "as", "for", "in", "if", "else", "elif", "print"],
  javascript: ["const", "let", "var", "await", "async", "return", "import", "from", "export", "function", "true", "false", "null", "new"],
  typescript: ["const", "let", "var", "await", "async", "return", "import", "from", "export", "function", "true", "false", "null", "new", "interface", "type", "string", "number", "boolean"],
};

const tokenRe = /(\/\/.*$|#.*$)|("[^"]*"|'[^']*'|`[^`]*`)|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_][\w]*\b)/g;

const renderLine = (line, lang, lineIdx) => {
  if (!line) return <div key={lineIdx} className="whitespace-pre">&nbsp;</div>;
  const nodes = [];
  let last = 0;
  let k = 0;
  let m;
  const re = new RegExp(tokenRe.source, "g");
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) nodes.push(<span key={k++} className="text-slate-400">{line.slice(last, m.index)}</span>);
    const [full, comment, str, num, word] = m;
    let cls = "text-sky-200";
    if (comment) cls = "text-slate-600 italic";
    else if (str) cls = "text-cyan-300";
    else if (num) cls = "text-amber-300";
    else if (word && KEYWORDS[lang]?.includes(word)) cls = "text-purple-400";
    nodes.push(<span key={k++} className={cls}>{full}</span>);
    last = m.index + full.length;
  }
  if (last < line.length) nodes.push(<span key={k++} className="text-slate-400">{line.slice(last)}</span>);
  return (
    <div key={lineIdx} className="whitespace-pre">
      <span className="mr-5 inline-block w-5 select-none text-right text-slate-700">{lineIdx + 1}</span>
      {nodes}
    </div>
  );
};

const Editor = () => {
  const reduced = usePrefersReducedMotion();
  const [tabIdx, setTabIdx] = useState(0);
  const [count, setCount] = useState(reduced ? Infinity : 0);
  const tab = editorTabs[tabIdx];
  const full = useMemo(() => tab.lines.join("\n"), [tab]);

  useEffect(() => {
    if (reduced) return undefined;
    setCount(0);
    const iv = setInterval(() => {
      setCount((c) => {
        if (c >= full.length + 24) {
          clearInterval(iv);
          setTimeout(() => setTabIdx((t) => (t + 1) % editorTabs.length), 2200);
          return c;
        }
        return c + 2;
      });
    }, 34);
    return () => clearInterval(iv);
  }, [tabIdx, full, reduced]);

  const touch = useIsTouch();
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 160, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 160, damping: 18 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const visible = reduced ? full : full.slice(0, count);
  const lines = visible.split("\n");

  return (
    <div style={{ perspective: 1400 }}>
      <motion.div
        ref={ref}
        data-testid="code-editor"
        onMouseMove={!touch && !reduced ? onMove : undefined}
        onMouseLeave={() => {
          mx.set(0.5);
          my.set(0.5);
        }}
        style={touch || reduced ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass relative overflow-hidden rounded-2xl shadow-[0_40px_90px_-30px_rgba(0,240,255,0.18)]"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <div className="ml-4 flex gap-1 overflow-x-auto">
            {editorTabs.map((t, i) => (
              <button
                key={t.id}
                data-testid={`editor-tab-${t.id}`}
                onClick={() => setTabIdx(i)}
                className={`rounded-md px-3 py-1.5 font-mono text-[11px] transition-colors duration-300 ${
                  i === tabIdx ? "bg-cyan-400/15 text-cyan-300" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {t.file}
              </button>
            ))}
          </div>
        </div>
        <div className="min-h-[340px] p-6 font-mono text-[12px] leading-relaxed md:text-[13px]">
          {lines.map((l, i) => renderLine(l, tab.lang, i))}
          <span className="animate-caret ml-[46px] inline-block h-4 w-2 bg-cyan-300" />
        </div>
        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
          <span>utf-8 · {tab.lang}</span>
          <span className="text-cyan-500/70">agent.runtime — active</span>
        </div>
      </motion.div>
    </div>
  );
};

export const CodeSection = () => (
  <section id="code" data-testid="code-section" className="relative z-10 overflow-hidden py-28 md:py-40">
    <div
      className="pointer-events-none absolute right-0 top-1/3 h-[440px] w-[440px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07), transparent 65%)" }}
      aria-hidden="true"
    />
    <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-16">
      <div>
        <SectionHeading
          index="04"
          eyebrow="The Craft"
          title="CODE THAT BUILDS THE FUTURE"
          description="From agentic pipelines in Python to type-safe interfaces in TypeScript — this is the kind of code I write every day."
        />
        <Reveal delay={0.15}>
          <Magnetic>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="github-cta-button"
              className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-slate-200 backdrop-blur-md transition-[border-color,box-shadow] duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_36px_-10px_rgba(0,240,255,0.6)]"
            >
              <Github size={16} />
              View My Code
            </a>
          </Magnetic>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <Editor />
      </Reveal>
    </div>
  </section>
);
