"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GithubIcon,
  ExternalLinkIcon,
  ArrowDownIcon,
} from "@/components/icons";
import { PROJECTS } from "@/lib/data";

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>("dispatchhook");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-6 border-t border-zinc-200">
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3.5">
        <span>Things I Do &bull; Featured Projects</span>
        <span>{PROJECTS.length} Systems</span>
      </div>

      {/* Clean Expandable Projects List with Framer Motion */}
      <motion.div layout className="space-y-2">
        {PROJECTS.map((project) => {
          const isExpanded = expandedId === project.id;
          const hasLiveUrl = Boolean(project.liveUrl);

          return (
            <motion.div
              layout
              key={project.id}
              transition={{
                layout: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
              }}
              className="rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 shadow-xs transition-colors overflow-hidden"
            >
              {/* Header Row (Clickable) */}
              <button
                onClick={() => toggleExpand(project.id)}
                className="w-full p-3 sm:p-3.5 flex items-center justify-between text-left gap-3 focus:outline-none select-none cursor-pointer group"
                aria-expanded={isExpanded}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Brand Squircle */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg ${project.color} flex-shrink-0 flex items-center justify-center font-bold text-xs sm:text-sm font-sans shadow-xs`}
                  >
                    {project.letter}
                  </motion.div>

                  {/* Project Name and Tagline */}
                  <div className="truncate text-xs sm:text-sm">
                    <span className="font-semibold text-zinc-900 font-sans group-hover:text-black transition-colors">
                      {project.title}
                    </span>
                    <span className="text-zinc-300 mx-1.5">&bull;</span>
                    <span className="text-zinc-600 font-normal">
                      {project.tagline}
                    </span>
                  </div>
                </div>

                {/* Animated Arrow / Chevron */}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="text-zinc-400 group-hover:text-zinc-700 flex-shrink-0 ml-2"
                >
                  <ArrowDownIcon size={14} />
                </motion.div>
              </button>

              {/* Expanded Details Body with Framer Motion AnimatePresence */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.28, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.2, delay: 0.05 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.22, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.15 },
                      },
                    }}
                    className="overflow-hidden border-t border-zinc-150 bg-zinc-50/50"
                  >
                    <div className="px-3 sm:px-4 pb-4 pt-3.5 space-y-3.5">
                      {/* Deep Technical Summary */}
                      <p className="text-xs sm:text-[13px] text-zinc-700 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights with Subtle Entrance Animation */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div className="space-y-1.5 pl-2.5 border-l border-zinc-250 text-[11.5px] text-zinc-600">
                          {project.highlights.map((h, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -4 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: i * 0.04 }}
                              className="flex items-start gap-1.5"
                            >
                              <span className="text-emerald-600 font-mono text-[10px] mt-0.5 select-none font-bold">
                                ›
                              </span>
                              <span>{h}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-white text-zinc-700 border border-zinc-200 shadow-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Row */}
                      <div className="flex items-center gap-2 pt-1">
                        {project.githubUrl && (
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white text-xs font-mono transition-colors shadow-xs"
                          >
                            <GithubIcon size={13} />
                            <span>View Repository</span>
                          </motion.a>
                        )}

                        {hasLiveUrl && (
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 font-semibold text-xs transition-colors shadow-xs"
                          >
                            <span>Live Demo</span>
                            <ExternalLinkIcon size={12} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
