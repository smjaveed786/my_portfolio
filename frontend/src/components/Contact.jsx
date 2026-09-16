import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { personal } from "../data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    testid: "contact-email-button",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "shaik-mohammad-javeed-ahamed",
    href: personal.linkedin,
    testid: "contact-linkedin-button",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "smjaveed786",
    href: personal.github,
    testid: "contact-github-button",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personal.location,
    href: null,
    testid: "contact-location",
  },
];

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Javeed, I'm ${form.name} (${form.email}). ${form.message}`;
    window.open(`https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setStatus("Opening WhatsApp — your message is ready to send.");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 6000);
  };

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm text-slate-100 placeholder:text-slate-600 outline-none backdrop-blur-sm transition-[border-color,box-shadow] duration-300 focus:border-cyan-400/50 focus:shadow-[0_0_24px_-8px_rgba(0,240,255,0.5)]";

  return (
    <form onSubmit={onSubmit} data-testid="contact-form" className="glass space-y-5 rounded-3xl p-8 md:p-10">
      <div>
        <label htmlFor="contact-name" className="mono-label !text-[10px] mb-2 block">Name</label>
        <input
          id="contact-name"
          data-testid="contact-name-input"
          required
          value={form.name}
          onChange={set("name")}
          placeholder="Your name"
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mono-label !text-[10px] mb-2 block">Email</label>
        <input
          id="contact-email"
          data-testid="contact-email-input"
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          placeholder="you@company.com"
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mono-label !text-[10px] mb-2 block">Message</label>
        <textarea
          id="contact-message"
          data-testid="contact-message-input"
          required
          rows={4}
          value={form.message}
          onChange={set("message")}
          placeholder="Tell me about your idea, project or opportunity…"
          className={`${inputCls} resize-none`}
        />
      </div>
      <button
        type="submit"
        data-testid="contact-submit-button"
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#06262b] transition-[box-shadow,background-color] duration-300 hover:bg-cyan-300 hover:shadow-[0_0_44px_-8px_rgba(0,240,255,0.8)]"
      >
        Send Message
        <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      {status && (
        <p data-testid="contact-form-status" className="text-center font-mono text-xs text-cyan-300">
          {status}
        </p>
      )}
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
        Sends via WhatsApp — {personal.phoneDisplay}
      </p>
    </form>
  );
};

export const Contact = () => (
  <section id="contact" data-testid="contact-section" className="relative z-10 overflow-hidden py-28 md:py-40">
    <div
      className="pointer-events-none absolute -left-32 bottom-0 h-[460px] w-[460px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(0,240,255,0.06), transparent 65%)" }}
      aria-hidden="true"
    />
    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
      <SectionHeading
        index="09"
        eyebrow="Contact"
        title="LET'S BUILD SOMETHING INTELLIGENT"
        description="Have an idea, project or opportunity? Let's connect."
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid content-start gap-5 sm:grid-cols-2">
          {channels.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <div
                data-testid={c.testid}
                className="glass glass-hover flex h-full flex-col gap-4 rounded-2xl p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
                  <Icon size={19} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">{c.label}</p>
                  <p className="mt-1.5 break-all text-sm font-medium text-slate-200">{c.value}</p>
                </div>
              </div>
            );
            return (
              <Reveal key={c.label} delay={i * 0.08} className="h-full">
                <TiltCard max={7} className="group h-full">
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  </section>
);
