import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Terminal,
  Server,
  Container,
  GitBranch,
} from "lucide-react";
import { cn } from "../lib/utils";

// Typing animation hook
const ROLES = [
  "Backend Developer",
  "Node.js Engineer",
  "DevOps Enthusiast",
  "API Architect",
];

function useTypingEffect(words, speed = 80, pause = 1800) {
  const [displayed, setDisplayed]   = useState("");
  const [wordIndex, setWordIndex]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, speed, pause]);

  return displayed;
}

// Animated grid background
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Orange orb top-right */}
      <div
        className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, #f97316 0%, transparent 70%)",
        }}
      />
      {/* Orange orb bottom-left */}
      <div
        className="absolute -bottom-20 -left-16 w-[320px] h-[320px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, #ea580c 0%, transparent 70%)",
        }}
      />
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}

// Framer motion variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const STATS = [
  { num: "10+",  label: "Projects" },
  { num: "5+",   label: "Tech Stacks" },
  { num: "∞",    label: "Coffee" },
];

const STACK = [
  { icon: <Terminal size={13} />,  label: "Node.js" },
  { icon: <Server size={13} />,    label: "Docker" },
  { icon: <Container size={13} />, label: "Kubernetes" },
  { icon: <GitBranch size={13} />, label: "Redis" },
];

export default function Home() {
  const role = useTypingEffect(ROLES);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >

          {/* Availability badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-orange-500/25 bg-orange-500/8 text-orange-400 text-xs font-medium tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] text-foreground mb-3"
          >
            Building backends
            <br />
            that{" "}
            <span className="gradient-text">don't break</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="font-display font-bold text-4xl md:text-5xl text-foreground/20 mb-8 leading-tight"
          >
            at 3am in production.
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-foreground/55 text-lg leading-relaxed max-w-xl mb-6 font-light"
          >
            Hey, I'm{" "}
            <span className="text-foreground/80 font-medium">Hariom</span> — a
            backend developer obsessed with{" "}
            <span className="text-orange-400 font-medium">Node.js</span>,
            distributed systems, and shipping things that scale. From REST APIs
            to Kubernetes clusters, I build the stuff nobody sees but everyone
            depends on.
          </motion.p>

          {/* Typing role */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 mb-10"
          >
            <span className="text-foreground/35 text-sm font-mono">~/role</span>
            <span className="text-orange-400 font-mono text-sm font-medium">
              {role}
              <span className="inline-block w-0.5 h-4 bg-orange-400 ml-0.5 animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-8 mb-10"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                <div>
                  <div className="font-display font-extrabold text-2xl text-foreground">
                    {s.num.includes("+") ? (
                      <>
                        {s.num.replace("+", "")}
                        <span className="text-orange-500">+</span>
                      </>
                    ) : (
                      s.num
                    )}
                  </div>
                  <div className="text-xs text-foreground/35 uppercase tracking-widest font-medium mt-0.5">
                    {s.label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div className="w-px h-8 bg-border" />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 flex-wrap mb-12"
          >
            <Link
              to="/projects"
              className={cn(
                "inline-flex items-center gap-2.5 px-6 py-3 rounded-xl",
                "bg-orange-500 text-white font-display font-bold text-sm",
                "hover:bg-orange-600 transition-all duration-200",
                "glow-orange hover:glow-orange-strong",
                "tracking-wide"
              )}
            >
              View Projects
              <ArrowRight size={15} />
            </Link>

            <a
              href="/resume.pdf"
              download
              className={cn(
                "inline-flex items-center gap-2.5 px-6 py-3 rounded-xl",
                "border border-border bg-transparent",
                "text-foreground/65 hover:text-orange-400 hover:border-orange-500/40",
                "transition-all duration-200 text-sm font-medium",
                "hover:bg-orange-500/5"
              )}
            >
              <Download size={14} />
              Resume
            </a>
          </motion.div>

          {/* Stack pills */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 flex-wrap"
          >
            <span className="text-xs text-foreground/30 uppercase tracking-widest font-medium mr-1">
              Stack
            </span>
            {["Node.js", "Docker", "Kubernetes", "MySQL", "MongoDB", "Redis", "AWS", "Go"].map(
              (tech) => (
                <span
                  key={tech}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-xs font-mono font-medium",
                    "bg-foreground/[0.04] border border-foreground/[0.07]",
                    "text-foreground/50 hover:text-orange-400",
                    "hover:border-orange-500/30 hover:bg-orange-500/[0.05]",
                    "transition-all duration-200 cursor-default"
                  )}
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-10 bg-gradient-to-b from-orange-500/60 to-transparent animate-pulse" />
        <span className="text-[10px] text-orange-500/50 uppercase tracking-widest">
          scroll
        </span>
      </div>
    </section>
  );
}