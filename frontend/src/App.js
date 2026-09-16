import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EditorialMarquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { CodeSection } from "@/components/CodeSection";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Publication } from "@/components/Publication";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CodeBackground } from "@/components/CodeBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { usePrefersReducedMotion } from "@/hooks/useMotionPrefs";

function App() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return undefined;
    const lenis = new Lenis({ duration: 1.15, anchors: true, smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return (
    <div className="noise relative min-h-screen bg-[#0B0C10] text-slate-200">
      <CodeBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <EditorialMarquee />
        <About />
        <Experience />
        <Projects />
        <CodeSection />
        <Skills />
        <Certifications />
        <Education />
        <Publication />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
