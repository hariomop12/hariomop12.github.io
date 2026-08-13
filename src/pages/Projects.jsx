import { Code2, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

const PROJECTS = [
  {
    id: "01",
    title: "Go-Storm",
    description:
      "High-performance HTTP load testing in Go — local & distributed. Built to actually understand concurrency, worker pools, and rate limiting by pushing systems to their limit.",
    tech: ["Go", "gRPC", "Docker"],
    github: "https://github.com/hariomop12/go-storm",
    live: null,
    status: "wip",
  },
  {
    id: "02",
    title: "Chathub",
    description:
      "A modern real-time chat app with instant messaging, voice/video calls, file sharing, and secure authentication.",
    tech: ["JavaScript", "Go", "Docker"],
    github: "https://github.com/hariomop12/Chathub",
    live: null,
    status: "done",
  },
  {
    id: "03",
    title: "ClearRouter",
    description:
      "A gateway for LLMs, just like Open Router.",
    tech: ["Go", "Gin", "PostgreSQL", "Redis"],
    github: "https://github.com/hariomop12/ClearRouter.git",
    live: null,
    status: "done",
  },
  {
    id: "04",
    title: "File Vault",
    description:
      "Secure Cloud File Storage API — enterprise-grade file management with JWT authentication, AWS S3 integration, PostgreSQL, rate limiting, email verification, Docker deployment, and Swagger docs.",
    tech: ["Node.js", "Express", "MySQL", "Docker"],
    github: "https://github.com/hariomop12/FileVault.git",
    live: "https://filevault-frontend-x842.onrender.com",
    status: "done",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col p-6 rounded-lg border border-border bg-secondary/40">
      <span className="font-mono text-[11px] text-foreground/40 mb-2">
        {project.id}
      </span>

      {project.status === "wip" && (
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-primary mb-3 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          In progress
        </span>
      )}

      <h3 className="text-xl font-bold mb-2">{project.title}</h3>

      <p className="text-sm text-foreground/55 leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 rounded text-[11px] font-mono bg-secondary text-foreground/60"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-border">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs text-foreground/70 hover:text-foreground border border-border hover:border-primary transition-colors"
          >
            <Code2 size={13} />
            GitHub
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs text-primary hover:text-orange-300 border border-primary/40 transition-colors"
            )}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="max-w-5xl px-6 py-20 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Things I've actually built.
      </h2>
      <p className="text-foreground/55 text-[15px] leading-relaxed max-w-lg mb-12">
        A mix of side projects and practice builds — each one taught me
        something new about backend engineering.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-14">
        <p className="mb-4 text-sm text-foreground/50">
          More projects on GitHub
        </p>
        <a
          href="https://github.com/hariomop12"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground/70 hover:text-foreground hover:border-primary transition-colors text-sm"
        >
          <Code2 size={15} />
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}
