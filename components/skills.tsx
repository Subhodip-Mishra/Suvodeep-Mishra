"use client";

import { SKILL_CATEGORIES } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-8 border-t border-zinc-200">
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4">
        <span>Technical Skills</span>
        <span>4 Domains</span>
      </div>

      {/* Compact Categorized Cards (py-3 px-4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="py-3 px-4 rounded-xl border border-zinc-200 bg-white shadow-2xs"
          >
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs font-semibold text-zinc-900 font-sans">
                {cat.title}
              </h3>
              <span className="text-[10px] font-mono text-zinc-400">
                {cat.skills.length} tools
              </span>
            </div>

            <p className="text-[11px] text-zinc-500 mb-2.5 leading-snug">
              {cat.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10.5px] font-mono ${
                    skill.isCore
                      ? "bg-zinc-100 text-zinc-900 border border-zinc-300 font-medium"
                      : "bg-zinc-50 text-zinc-600 border border-zinc-200"
                  }`}
                >
                  {skill.isCore && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  )}
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
