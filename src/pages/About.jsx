import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin, Monitor, Clock, Code2, Phone,
  Server, Database, Container, Cloud,
} from "lucide-react";
import { cn } from "../lib/utils";

// ─── Animation Variants ───────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

// ─── Section Tag ──────────────────────────────────────
function SectionTag({ label }) {
  return (
    <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-medium uppercase tracking-widest mb-4">
      <span className="w-6 h-px bg-orange-500" />
      {label}
    </div>
  );
}

// ─── Animated Skill Bar ───────────────────────────────
function SkillBar({ name, pct, delay = 0 }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-mono font-medium text-foreground/60">{name}</span>
        <span className="text-xs font-mono text-orange-500">{pct}%</span>
      </div>
      <div className="w-full h-[3px] rounded-full bg-foreground/[0.07] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

// ─── Skill Category Card ──────────────────────────────
function SkillCard({ icon: Icon, title, skills }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "p-6 rounded-2xl border border-border/60",
        "bg-foreground/[0.02] hover:bg-orange-500/[0.03]",
        "hover:border-orange-500/20 transition-all duration-300 group"
      )}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
          <Icon size={15} className="text-orange-500" />
        </div>
        <span className="font-display font-bold text-xs uppercase tracking-widest text-foreground/60">
          {title}
        </span>
      </div>
      {skills.map((s, i) => (
        <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 0.08} />
      ))}
    </motion.div>
  );
}

// ─── Info Card ────────────────────────────────────────
function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className={cn(
      "flex items-center gap-4 p-4 rounded-xl",
      "bg-foreground/[0.03] border border-border/50",
      "hover:border-orange-500/25 hover:bg-orange-500/[0.03]",
      "transition-all duration-200"
    )}>
      <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
        <Icon size={15} className="text-orange-500" />
      </div>
      <div>
        <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-medium mb-0.5">
          {label}
        </p>
        <p className="text-sm text-foreground/75 font-medium">{value}</p>
      </div>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────
const INFO = [
  { icon: MapPin,   label: "Location",          value: "Bhopal, India" },
  { icon: Monitor,  label: "Focus",             value: "Backend & DevOps" },
  { icon: Clock,    label: "Experience",        value: "Fresher / Early Career" },
  { icon: Code2,    label: "Currently Studying",value: "Kubernetes Storage" },
  { icon: Phone,    label: "Open To",           value: "Full-time • Bhopal / Indore / Remote" },
];

const SKILL_CATEGORIES = [
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js",    pct: 90 },
      { name: "Express.js", pct: 88 },
      { name: "REST APIs",  pct: 85 },
      { name: "Go / Gin",   pct: 55 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "MySQL",      pct: 80 },
      { name: "MongoDB",    pct: 78 },
      { name: "Redis",      pct: 72 },
      { name: "PostgreSQL", pct: 60 },
    ],
  },
  {
    icon: Container,
    title: "DevOps",
    skills: [
      { name: "Docker",         pct: 82 },
      { name: "Kubernetes",     pct: 65 },
      { name: "GitHub Actions", pct: 70 },
      { name: "Nginx / PM2",    pct: 68 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Tools",
    skills: [
      { name: "AWS (EC2/Lambda)",    pct: 60 },
      { name: "Cloudflare R2",       pct: 65 },
      { name: "Prometheus / Grafana",pct: 55 },
      { name: "Git / Linux",         pct: 85 },
    ],
  },
];

const ALSO_USED = [
  "Bull Queues", "ELK Stack", "Terraform", "Minikube",
  "JWT / OAuth", "Multer", "Socket.io", "Arch Linux",
  "Postman", "ffmpeg", "PM2", "Bcrypt",
];

// ─── Component ────────────────────────────────────────
export default function About() {
  const bioRef      = useRef(null);
  const skillsRef   = useRef(null);
  const bioInView   = useInView(bioRef,    { once: true, margin: "-80px" });
  const skillsInView= useInView(skillsRef, { once: true, margin: "-80px" });

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* ── About Block ── */}
      <motion.div
        ref={bioRef}
        variants={stagger}
        initial="hidden"
        animate={bioInView ? "show" : "hidden"}
        className="mb-24"
      >
        <motion.div variants={fadeUp}>
          <SectionTag label="About me" />
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-foreground mb-12">
            The dev behind
            <br />
            <span className="text-foreground/20">the terminal.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Bio */}
          <motion.div variants={fadeUp} className="space-y-5 text-foreground/55 text-[15px] leading-relaxed font-light">
            <p>
              I'm{" "}
              <span className="text-foreground/80 font-medium">Hariom</span>, a
              backend developer from{" "}
              <span className="text-orange-400 font-medium">Bhopal, India</span>{" "}
              — currently deep in the world of distributed systems,
              containerization, and building APIs that don't fall apart under load.
            </p>
            <p>
              My stack lives entirely on the server side. I think in{" "}
              <span className="text-foreground/75 font-medium">Node.js</span>,
              dream in{" "}
              <span className="text-foreground/75 font-medium">
                Docker containers
              </span>
              , and spend weekends chasing Kubernetes configs on{" "}
              <span className="text-foreground/75 font-medium">Arch Linux</span>.
              If there's a queue to manage or a database to optimize, I'm already
              interested.
            </p>
            <p>
              Currently building{" "}
              <span className="text-orange-400 font-medium">SoundWave</span> — a
              full-stack YouTube Music clone with Redis queues, Cloudflare R2,
              and a MongoDB + MySQL hybrid backend. Because side projects should
              be <span className="text-foreground/75 font-medium">ambitious</span>
              .
            </p>

            {/* Quote */}
            <div className="mt-6 pl-4 border-l-2 border-orange-500/40">
              <p className="text-foreground/40 text-sm italic font-light leading-relaxed">
                "Code that works at 3am in production is the only code worth
                writing."
              </p>
            </div>
          </motion.div>

          {/* Info Cards */}
          <motion.div variants={stagger} className="space-y-3">
            {INFO.map((item) => (
              <motion.div key={item.label} variants={fadeUp}>
                <InfoCard {...item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px bg-border/50 mb-24" />

      {/* ── Skills Block ── */}
      <motion.div
        ref={skillsRef}
        variants={stagger}
        initial="hidden"
        animate={skillsInView ? "show" : "hidden"}
      >
        <motion.div variants={fadeUp}>
          <SectionTag label="Skills" />
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-foreground mb-12">
            What I work
            <br />
            <span className="text-foreground/20">with daily.</span>
          </h2>
        </motion.div>

        {/* Skills 2x2 Grid */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12"
        >
          {SKILL_CATEGORIES.map((cat) => (
            <SkillCard key={cat.title} {...cat} />
          ))}
        </motion.div>

        {/* Also used chips */}
        <motion.div variants={fadeUp}>
          <p className="text-[10px] text-foreground/30 uppercase tracking-widest font-medium mb-4">
            Also worked with
          </p>
          <div className="flex flex-wrap gap-2">
            {ALSO_USED.map((tool) => (
              <span
                key={tool}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-mono font-medium",
                  "bg-foreground/[0.04] border border-foreground/[0.07]",
                  "text-foreground/45 hover:text-orange-400",
                  "hover:border-orange-500/30 hover:bg-orange-500/[0.04]",
                  "transition-all duration-200 cursor-default"
                )}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}