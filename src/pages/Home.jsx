import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const STATS = [
  { num: "10+",  label: "Projects" },
  { num: "5+",   label: "Tech Stacks" },
];

const STACK = ["Go", "Node.js", "Docker", "Kubernetes", "MySQL", "MongoDB", "Redis", "AWS"];

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-5xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6 mb-3">
            Building backends
            <br />
            that don't break.
          </h1>

          <p className="text-lg text-foreground/60 leading-relaxed max-w-xl mb-8">
            Hey, I'm{" "}
            <span className="text-foreground font-medium">Hariom</span>. I
            build the backend that keeps apps running: APIs, queues, and the
            infrastructure nobody notices until it breaks.
          </p>

          <div className="flex items-center gap-3 mb-10">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div>
                  <div className="text-xl font-bold">{s.num}</div>
                  <div className="text-xs text-foreground/50">{s.label}</div>
                </div>
                {i < STATS.length - 1 && <div className="w-px h-8 bg-border" />}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-wrap mb-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-orange-600 transition-colors"
            >
              View Projects
              <ArrowRight size={15} />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground/70 hover:text-foreground hover:border-primary transition-colors text-sm"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-foreground/40 mr-1">Stack</span>
            {STACK.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-xs bg-secondary text-foreground/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
