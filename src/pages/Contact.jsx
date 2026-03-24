import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Clock, Code2, Globe, Download, FileText, Send, X } from "lucide-react";
import { cn } from "../lib/utils";

 
const CONTACT_INFO = [
  { icon: Mail,   label: "Email",         value: "hariomvirkhare02@email.com",  href: "mailto:hariomvirkhare02@gmail.com" },
  { icon: MapPin, label: "Location",      value: "Bhopal, India",     href: null },
  { icon: Clock,  label: "Response Time", value: "Within 24 hours",   href: null },
];

const SOCIALS = [
  { icon: Code2,    label: "GitHub",   href: "https://github.com/hariomop12" },
  { icon: Globe,    label: "LinkedIn", href: "https://linkedin.com/in/hariom-op" },
  { icon: X,    label: "X",        href: "https://x.com/debug3z" },
  { icon: Download, label: "Resume",   href: "https://docs.google.com/document/d/1B8bfqh7CUGF1GqRW4PNIF4aWhyXh5VgbYQ3droF-zEA/edit?usp=sharingz" },
];
// ─────────────────────────────────────────────────────

// Framer variants
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

function SectionTag({ label }) {
  return (
    <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-medium uppercase tracking-widest mb-4">
      <span className="w-6 h-px bg-orange-500" />
      {label}
    </div>
  );
}

export default function Contact() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  // Form state
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    
    try {
      const res = await fetch("https://formspree.io/f/xreyndqy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* Header */}
      <motion.div
        ref={headerRef}
        variants={stagger}
        initial="hidden"
        animate={headerInView ? "show" : "hidden"}
        className="mb-14"
      >
        <motion.div variants={fadeUp}>
          <SectionTag label="Contact" />
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-foreground mb-4">
            Let's build
            <br />
            <span className="text-foreground/20">something together.</span>
          </h2>
          <p className="text-foreground/40 text-[15px] font-light leading-relaxed max-w-md">
            Got a project in mind, want to hire me, or just want to talk
            backend? My inbox is always open.
          </p>
        </motion.div>

        {/* Availability badge */}
        <motion.div variants={fadeUp} className="mt-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/[0.07] text-green-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for full-time roles — Bhopal / Indore / Remote
          </span>
        </motion.div>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 items-start">

        {/* ── Left — Info + Socials ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4"
        >
          {CONTACT_INFO.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl",
                "border border-border/50 bg-foreground/[0.02]",
                "hover:border-orange-500/20 hover:bg-orange-500/[0.03]",
                "transition-all duration-200"
              )}
            >
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                <item.icon size={14} className="text-orange-500" />
              </div>
              <div>
                <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-medium mb-0.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-orange-400 font-medium hover:text-orange-300 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground/70 font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Socials */}
          <motion.div variants={fadeUp} className="pt-2">
            <p className="text-[10px] text-foreground/25 uppercase tracking-widest font-medium mb-3">
              Find me on
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    "bg-foreground/[0.04] border border-border/50",
                    "text-foreground/40 hover:text-orange-400",
                    "hover:border-orange-500/30 hover:bg-orange-500/[0.07]",
                    "transition-all duration-200"
                  )}
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right — Form ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <form
            onSubmit={handleSubmit}
            className={cn(
              "p-8 rounded-2xl border border-border/60",
              "bg-foreground/[0.02]"
            )}
          >
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {[
                { name: "name",  label: "Name",  type: "text",  placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-[10px] text-foreground/30 uppercase tracking-widest font-medium mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-xl text-[13px]",
                      "bg-foreground/[0.04] border border-border/50",
                      "text-foreground/80 placeholder:text-foreground/20",
                      "focus:outline-none focus:border-orange-500/40 focus:bg-orange-500/[0.04]",
                      "focus:ring-2 focus:ring-orange-500/10",
                      "transition-all duration-200"
                    )}
                  />
                </div>
              ))}
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="block text-[10px] text-foreground/30 uppercase tracking-widest font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Job opportunity / Project / Just saying hi"
                required
                className={cn(
                  "w-full px-4 py-3 rounded-xl text-[13px]",
                  "bg-foreground/[0.04] border border-border/50",
                  "text-foreground/80 placeholder:text-foreground/20",
                  "focus:outline-none focus:border-orange-500/40 focus:bg-orange-500/[0.04]",
                  "focus:ring-2 focus:ring-orange-500/10",
                  "transition-all duration-200"
                )}
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-[10px] text-foreground/30 uppercase tracking-widest font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me what you're building or what role you have in mind..."
                rows={5}
                required
                className={cn(
                  "w-full px-4 py-3 rounded-xl text-[13px] resize-none leading-relaxed",
                  "bg-foreground/[0.04] border border-border/50",
                  "text-foreground/80 placeholder:text-foreground/20",
                  "focus:outline-none focus:border-orange-500/40 focus:bg-orange-500/[0.04]",
                  "focus:ring-2 focus:ring-orange-500/10",
                  "transition-all duration-200"
                )}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={cn(
                "w-full py-3.5 rounded-xl font-display font-bold text-sm tracking-wide",
                "flex items-center justify-center gap-2 transition-all duration-200",
                status === "sent"
                  ? "bg-green-500/20 border border-green-500/30 text-green-400 cursor-default"
                  : status === "error"
                  ? "bg-red-500/20 border border-red-500/30 text-red-400"
                  : "bg-orange-500 text-white hover:bg-orange-600 glow-orange hover:glow-orange-strong"
              )}
            >
              {status === "sending" && (
                <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              )}
              {status === "sent" && (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
              {status === "idle" && <Send size={14} />}
              {status === "idle"    && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent"    && "Message Sent!"}
              {status === "error"   && "Failed — Try Again"}
            </button>

            {status === "error" && (
              <p className="text-xs text-red-400/70 text-center mt-3 font-light">
                Something went wrong. Email me directly at{" "}
                <a href="mailto: hariomvirkhare02@email.com" className="text-red-400 underline underline-offset-2">
                  hariomvirkhare02@email.com
                </a>
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
