import { MapPin, Monitor, Clock, Code2, Phone, Server, Database, Container, Cloud } from "lucide-react";
import { cn } from "../lib/utils";

function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12">
      {children}
    </h2>
  );
}

function SkillBar({ name, pct }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs text-foreground/70">{name}</span>
        <span className="text-xs text-primary">{pct}%</span>
      </div>
      <div className="w-full h-1.5 rounded-full bg-secondary overflow-hidden">
        <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function SkillCard({ icon: Icon, title, skills }) {
  return (
    <div className="p-5 rounded-lg border border-border bg-secondary/40">
      <div className="flex items-center gap-3 mb-6">
        <Icon size={16} className="text-primary" />
        <span className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
          {title}
        </span>
      </div>
      {skills.map((s) => (
        <SkillBar key={s.name} name={s.name} pct={s.pct} />
      ))}
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-secondary/40">
      <Icon size={16} className="text-primary flex-shrink-0" />
      <div>
        <p className="text-[11px] text-foreground/40 uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-sm text-foreground/80">{value}</p>
      </div>
    </div>
  );
}

const INFO = [
  { icon: MapPin,   label: "Location",           value: "Bhopal, India" },
  { icon: Monitor,  label: "Focus",              value: "Backend & DevOps" },
  { icon: Clock,    label: "Experience",         value: "Fresher / Early Career" },
  { icon: Code2,    label: "Currently Studying", value: "Kubernetes Storage" },
  { icon: Phone,    label: "Open To",            value: "Full-time • Bhopal / Indore / Remote" },
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
      { name: "AWS (EC2/Lambda)",     pct: 60 },
      { name: "Cloudflare R2",        pct: 65 },
      { name: "Prometheus / Grafana", pct: 55 },
      { name: "Git / Linux",          pct: 85 },
    ],
  },
];

const ALSO_USED = [
  "Bull Queues", "ELK Stack", "Terraform", "Minikube",
  "JWT / OAuth", "Multer", "Socket.io", "Arch Linux",
  "Postman", "ffmpeg", "PM2", "Bcrypt",
];

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12">
          The dev behind the terminal.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-4 text-foreground/65 leading-relaxed text-[15px]">
            <p>
              I'm{" "}
              <span className="text-foreground font-medium">Hariom</span>, a
              backend developer from{" "}
              <span className="text-primary font-medium">Bhopal, India</span>{" "}
              — currently deep in the world of distributed systems,
              containerization, and building APIs that don't fall apart under
              load.
            </p>
            <p>
              My stack lives entirely on the server side. I think in{" "}
              <span className="text-foreground">Node.js</span>, dream in{" "}
              <span className="text-foreground">Docker containers</span>, and
              spend weekends chasing Kubernetes configs on{" "}
              <span className="text-foreground">Arch Linux</span>.
            </p>
            <p>
              Currently building{" "}
              <span className="text-primary font-medium">SoundWave</span> — a
              full-stack YouTube Music clone with Redis queues, Cloudflare R2,
              and a MongoDB + MySQL hybrid backend.
            </p>

            <div className="mt-6 pl-4 border-l-2 border-primary/40">
              <p className="text-foreground/50 text-sm italic">
                "Code that works at 3am in production is the only code worth
                writing."
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {INFO.map((item) => (
              <InfoCard key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border mb-20" />

      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-12">
        What I work with daily.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
        {SKILL_CATEGORIES.map((cat) => (
          <SkillCard key={cat.title} {...cat} />
        ))}
      </div>

      <p className="text-[11px] text-foreground/40 uppercase tracking-wider mb-3">
        Also worked with
      </p>
      <div className="flex flex-wrap gap-2">
        {ALSO_USED.map((tool) => (
          <span
            key={tool}
            className="px-3 py-1 rounded text-xs bg-secondary text-foreground/60"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  );
}
