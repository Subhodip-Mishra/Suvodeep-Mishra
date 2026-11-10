"use client";

import { SKILL_CATEGORIES } from "@/lib/data";
import { Kbd } from "@/components/ui/kbd";

export function Skills() {
  return (
    <section id="skills" className="py-8 border-t border-zinc-200">
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-4">
        <span>Technical Skills</span>
        <span>Stack Primitives</span>
      </div>

      {/* Row-based list with subtle horizontal divider lines between categories */}
      <div className="divide-y divide-zinc-200/70 border-t border-b border-zinc-200/70">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4"
          >
            {/* Left side: fixed width ~170px with clean, muted category title */}
            <span className="sm:w-[170px] shrink-0 text-xs sm:text-[13px] font-medium text-zinc-500 font-sans">
              {cat.title}
            </span>

            {/* Right side: Clean Shadcn Kbd badges */}
            <div className="flex flex-wrap items-center gap-1.5 flex-1">
              {cat.skills.map((skill) => (
                <Kbd key={skill.name}>
                  {skill.name}
                </Kbd>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
