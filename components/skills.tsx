"use client";

import { SKILL_CATEGORIES } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-6 border-t border-zinc-200">
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3.5">
        <span>Technical Stack</span>
        <span>4 Domains</span>
      </div>

      <div className="space-y-3">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="p-3.5 rounded-xl border border-zinc-200 bg-white shadow-xs"
          >
            <div className="flex items-center justify-between mb-1.5">
              <h3 className="text-xs font-semibold text-zinc-900 font-sans">
                {cat.title}
              </h3>
              <span className="text-[10px] font-mono text-zinc-400">
                {cat.skills.length} tools
              </span>
            </div>

            <p className="text-[11.5px] text-zinc-500 mb-3 leading-relaxed">
              {cat.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono ${
                    skill.isCore
                      ? "bg-zinc-100 text-zinc-900 border border-zinc-250 font-medium"
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
