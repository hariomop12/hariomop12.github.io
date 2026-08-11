import { useState } from "react";
import { Mail, MapPin, Clock, Code2, Globe, Download, Send } from "lucide-react";
import { cn } from "../lib/utils";

const CONTACT_INFO = [
  { icon: Mail,   label: "Email",         value: "hariomvirkhare02@email.com", href: "mailto:hariomvirkhare02@gmail.com" },
  { icon: MapPin, label: "Location",      value: "Bhopal, India",     href: null },
  { icon: Clock,  label: "Response Time", value: "Within 24 hours",   href: null },
];

const SOCIALS = [
  { icon: Code2,    label: "GitHub",   href: "https://github.com/hariomop12" },
  { icon: Globe,    label: "LinkedIn", href: "https://linkedin.com/in/hariom-op" },
  { icon: Download, label: "Resume",   href: "https://docs.google.com/document/d/1B8bfqh7CUGF1GqRW4PNIF4aWhyXh5VgbYQ3droF-zEA/edit?usp=sharingz" },
];

const inputClasses =
  "w-full px-4 py-3 rounded-md text-sm bg-secondary/60 border border-border text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

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
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Let's build something together.
      </h2>
      <p className="text-foreground/55 text-[15px] leading-relaxed max-w-md mb-8">
        Got a project in mind, want to hire me, or just want to talk backend?
        My inbox is always open.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 items-start">
        <div className="space-y-3">
          {CONTACT_INFO.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-secondary/40"
            >
              <item.icon size={16} className="text-primary flex-shrink-0" />
              <div>
                <p className="text-[11px] text-foreground/40 uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-primary hover:text-orange-300">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground/80">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="pt-2">
            <p className="text-[11px] text-foreground/40 uppercase tracking-wider mb-3">
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
                  className="w-10 h-10 rounded-md flex items-center justify-center text-foreground/50 hover:text-primary border border-border hover:border-primary transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 rounded-lg border border-border bg-secondary/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              { name: "name",  label: "Name",  type: "text",  placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-[11px] text-foreground/40 uppercase tracking-wider mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className={inputClasses}
                />
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-[11px] text-foreground/40 uppercase tracking-wider mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Job opportunity / Project / Just saying hi"
              required
              className={inputClasses}
            />
          </div>

          <div className="mb-6">
            <label className="block text-[11px] text-foreground/40 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me what you're building or what role you have in mind..."
              rows={5}
              required
              className={cn(inputClasses, "resize-none")}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className={cn(
              "w-full py-3 rounded-md font-medium text-sm flex items-center justify-center gap-2 transition-colors",
              status === "sent"
                ? "bg-primary/20 border border-primary/40 text-primary cursor-default"
                : status === "error"
                ? "bg-destructive/20 border border-destructive/40 text-red-300"
                : "bg-primary text-primary-foreground hover:bg-orange-600"
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
            <p className="text-xs text-red-300/80 text-center mt-3">
              Something went wrong. Email me directly at{" "}
              <a href="mailto:hariomvirkhare02@email.com" className="underline">
                hariomvirkhare02@email.com
              </a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
