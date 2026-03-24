import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

 const PROJECTS = [
  {
    id: "01",
    title: "SoundWave",
    description:
      "A full-stack YouTube Music clone with audio streaming, Redis-powered job queues, Cloudflare R2 storage, and a hybrid MongoDB + MySQL backend. Built to scale.",
    tech: ["Node.js", "Express", "Redis", "Bull", "MongoDB", "MySQL", "Docker", "R2"],
    github: "https://github.com/hariomop12/YTM-Backend.git",
    live: null,           // null = no live demo button
    status: "wip",        // "wip" | "done"
    featured: true,
  },
  {
    id: "02",
    title: "File Vault",
    description:
      "Secure Cloud File Storage API | Enterprise-grade file management with JWT authentication, AWS S3 integration, PostgreSQL database, and comprehensive security features. Built with Node.js/Express.js, featuring rate limiting, email verification, Docker deployment, and Swagger documentation. ",
    tech: ["Node.js", "Express", "MySQL", "Docker"],
    github: "https://github.com/hariomop12/FileVault.git",
    live: "",
    status: "done",
    featured: false,
  },
  {
    id: "03",
    title: "ClearRouter",
    description:
      "A Getway For LLM Just Like Open Router",
    tech: ["Go", "Gin", "PostgreSQL", "Redis"],
    github: "https://github.com/hariomop12/ClearRouter.git",
    live: null,
    status: "done",
    featured: false,
  },
  {
    id: "04",
    title: "LinkCraft",
    description:
      "Link Shortner Just like bitly",
    tech: ["Node.js", "MongoDB", "JWT", "AWS"],
    github: "https://github.com/hariomop12/LinkCraft.git",
    live: null,
    status: "done",
    featured: false,
  },
];
// ─────────────────────────────────────────────────────

// Framer variants
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

function SectionTag({ label }) {
  return (
    <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-medium uppercase tracking-widest mb-4">
      <span className="w-6 h-px bg-orange-500" />
      {label}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay: (index % 2) * 0.1 }}
      className={cn(
        "relative flex flex-col p-7 rounded-2xl border transition-all duration-300 group overflow-hidden",
        project.featured
          ? "border-orange-500/20 bg-orange-500/[0.04]"
          : "border-border/60 bg-foreground/[0.02] hover:border-orange-500/20 hover:bg-orange-500/[0.03]"
      )}
    >
      {/* Radial glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(400px circle at 50% 0%, rgba(249,115,22,0.06), transparent 60%)"
        }}
      />

      {/* Featured badge */}
      {project.featured && (
        <div className="inline-flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 w-fit mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">
            Featured
          </span>
        </div>
      )}

      {/* Number */}
      <span className="font-mono text-[11px] text-foreground/20 font-medium mb-3">
        {project.id}
      </span>

      {/* Title */}
      <h3 className="font-display font-extrabold text-xl text-foreground mb-3 leading-tight group-hover:text-orange-50 transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-foreground/45 leading-relaxed font-light mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-foreground/[0.05] border border-foreground/[0.07] text-foreground/45"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-5 border-t border-border/40">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium",
              "bg-foreground/[0.05] border border-foreground/[0.08] text-foreground/55",
              "hover:bg-foreground/[0.09] hover:text-foreground/80 hover:border-foreground/[0.14]",
              "transition-all duration-200"
            )}
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
              "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium",
              "bg-orange-500/10 border border-orange-500/20 text-orange-400",
              "hover:bg-orange-500/20 hover:border-orange-500/40",
              "transition-all duration-200"
            )}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}

        {project.status === "wip" && !project.live && (
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-foreground/30">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            In progress
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

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
          <SectionTag label="Projects" />
          <h2 className="font-display font-extrabold text-4xl md:text-5xl leading-tight text-foreground mb-4">
            Things I've
            <br />
            <span className="text-foreground/20">actually built.</span>
          </h2>
          <p className="text-foreground/40 text-[15px] font-light leading-relaxed max-w-lg">
            A mix of side projects and practice builds — each one taught me
            something new about backend engineering.
          </p>
        </motion.div>
      </motion.div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <p className="text-foreground/30 text-sm mb-4 font-light">
          More projects on GitHub
        </p>
        <a
          href="https://github.com/hariomop12"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
            "border border-border/60 text-foreground/50 text-sm font-medium",
            "hover:border-orange-500/30 hover:text-orange-400 hover:bg-orange-500/[0.04]",
            "transition-all duration-200"
          )}
        >
          <Code2 size={15} />
          View GitHub Profile
        </a>
      </motion.div>

    </section>
  );
}
 
