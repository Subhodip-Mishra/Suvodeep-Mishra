"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Zap } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const categoryStyles: Record<
  Project["category"],
  { badge: string; border: string; glow: string }
> = {
  Systems: {
    badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    border: "group-hover:border-emerald-500/30",
    glow: "group-hover:shadow-emerald-500/5",
  },
  "Full-Stack": {
    badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    border: "group-hover:border-cyan-500/30",
    glow: "group-hover:shadow-cyan-500/5",
  },
  "AI & Tools": {
    badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    border: "group-hover:border-purple-500/30",
    glow: "group-hover:shadow-purple-500/5",
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const currentCategory = categoryStyles[project.category] || categoryStyles["Systems"];
  const hasLiveUrl = Boolean(project.liveUrl);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#0d1117]/85 border border-zinc-800/80 ${currentCategory.border} ${currentCategory.glow} p-6 transition-all duration-300 hover:shadow-2xl shadow-black/40`}
    >
      <div>
        {/* Card Header: Category & Metric */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border ${currentCategory.badge}`}
          >
            {project.category}
          </span>

          {project.metrics && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-2.5 py-0.5 rounded-md">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>{project.metrics}</span>
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors font-sans mb-2.5">
          {project.title}
        </h3>

        {/* Technical Description */}
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Architectural Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-1.5 mb-5 border-l border-zinc-800/80 pl-3">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-400">
                <span className="text-emerald-400 font-mono text-[11px] select-none mt-0.5">›</span>
                <span className="leading-snug">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-900/90 text-zinc-300 border border-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Row */}
        <div className="flex items-center gap-2.5 pt-1">
          {hasLiveUrl ? (
            <>
              {/* Primary: Live Demo */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs transition-all shadow-md active:scale-95"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Secondary: GitHub */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium text-xs font-mono transition-all active:scale-95"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}
            </>
          ) : (
            /* No live demo: GitHub link is cleanly styled as the full-width primary action */
            project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-2 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium text-xs transition-all active:scale-95 group/btn"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-white" />
                  <span className="font-mono">View Repository &amp; Code</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover/btn:translate-x-0.5 group-hover/btn:text-zinc-200 transition-all" />
              </a>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}
