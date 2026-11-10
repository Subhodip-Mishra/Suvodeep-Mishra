"use client";

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
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
        <span>Featured Projects</span>
        <span>{PROJECTS.length} Systems &amp; Tools</span>
      </div>

      {/* Sleek Minimalist List / Compact Table - Clean White Theme */}
      <div className="rounded-xl border border-zinc-200 bg-white divide-y divide-zinc-200 shadow-2xs overflow-hidden">
        {PROJECTS.map((project: Project) => {
          const badgeStyle =
            domainBadgeStyles[project.domain] ||
            "bg-zinc-100 text-zinc-700 border-zinc-200";

          return (
            <div
              key={project.id}
              id={project.id}
              className="group p-4 sm:px-5 sm:py-3.5 hover:bg-zinc-50/80 transition-colors"
            >
              {/* Row 1: Title, Category Badge, Tech Stack Pills (Desktop), and Action / Status */}
              <div className="flex items-start sm:items-center justify-between gap-2 sm:gap-3 flex-wrap sm:flex-nowrap mb-1.5">
                <div className="flex items-center gap-2 flex-wrap min-w-0">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm sm:text-[15px] text-zinc-900 group-hover:text-black tracking-tight transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <h3 className="font-bold text-sm sm:text-[15px] text-zinc-900 tracking-tight">
                      {project.title}
                    </h3>
                  )}

                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-mono border shrink-0 ${badgeStyle}`}
                  >
                    {project.domain}
                  </span>

                  {/* Desktop Tech Stack Pills */}
                  <span className="hidden sm:inline-block text-zinc-300 select-none text-xs">
                    •
                  </span>
                  <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 rounded text-[10.5px] font-mono bg-zinc-50 text-zinc-700 border border-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action / Status Indicator */}
                <div className="shrink-0 flex items-center">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-700 hover:text-black transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>Live Demo</span>
                      <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10.5px] font-mono text-zinc-500 bg-zinc-50 border border-zinc-200 select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                      <span>{project.status}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: 1-line clean summary of what it does */}
              <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed">
                {project.description}
              </p>

              {/* Mobile Tech Stack Pills */}
              <div className="flex sm:hidden flex-wrap items-center gap-1.5 mt-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 py-0.5 rounded text-[10.5px] font-mono bg-zinc-50 text-zinc-700 border border-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
