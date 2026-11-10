"use client";

import { motion } from "framer-motion";
import { GithubIcon, ExternalLinkIcon } from "@/components/icons";
import { PROJECTS, Project } from "@/lib/data";

const domainBadgeStyles: Record<string, string> = {
  "AI Agent": "bg-purple-50 text-purple-700 border-purple-200",
  Desktop: "bg-blue-50 text-blue-700 border-blue-200",
  Systems: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "CLI Tool": "bg-amber-50 text-amber-700 border-amber-200",
  "Full-Stack": "bg-rose-50 text-rose-700 border-rose-200",
};

export function Projects() {
  return (
    <section id="projects" className="py-8 border-t border-zinc-200">
      {/* Section Header */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-5">
        <span>Featured Projects</span>
        <span>{PROJECTS.length} Systems &amp; Tools</span>
      </div>

      {/* 2-Column Responsive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECTS.map((project: Project, idx: number) => {
          const hasLiveUrl = Boolean(project.liveUrl);
          const badgeStyle =
            domainBadgeStyles[project.domain] ||
            "bg-zinc-100 text-zinc-700 border-zinc-200";

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all p-5 flex flex-col justify-between"
            >
              <div>
                {/* Header: Project Title & Domain Badge */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-[17px] font-bold text-zinc-900 tracking-tight font-sans">
                    {project.title}
                  </h3>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-mono border ${badgeStyle}`}
                  >
                    {project.domain}
                  </span>
                </div>

                {/* Technical Description (No Ellipsis) */}
                <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-50 text-zinc-700 border border-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-zinc-100 flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors shadow-2xs active:scale-95 ${
                      hasLiveUrl
                        ? "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200"
                        : "bg-zinc-900 hover:bg-black text-white font-medium"
                    }`}
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                )}

                {hasLiveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-sans font-semibold transition-colors shadow-2xs active:scale-95"
                  >
                    <span>Live Demo</span>
                    <ExternalLinkIcon size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
