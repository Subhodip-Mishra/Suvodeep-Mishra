"use client";

import { motion } from "framer-motion";
import {
  GithubIcon,
  ZapIcon,
  ShieldIcon,
  TwitterIcon,
  LinkedinIcon,
  NextjsIcon,
  ArrowUpRightIcon,
} from "@/components/icons";
import { REACH_METRICS } from "@/lib/data";

const iconMap = {
  Github: GithubIcon,
  Flash: ZapIcon,
  Sandpro: ShieldIcon,
  Twitter: TwitterIcon,
  Linkedin: LinkedinIcon,
  Nextjs: NextjsIcon,
  Terminal: ZapIcon,
};

export function ReachMetrics() {
  return (
    <section className="py-6 border-t border-zinc-200">
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3.5">
        <span>Systems &amp; Network</span>
        <span>Updated Nov 2026</span>
      </div>

      {/* Metric & Network Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {REACH_METRICS.map((metric, idx) => {
          const Icon = iconMap[metric.iconName] || ZapIcon;
          return (
            <motion.a
              key={metric.id}
              href={metric.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group p-3.5 rounded-2xl bg-white hover:bg-zinc-50/70 border border-zinc-200 hover:border-zinc-300 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Top Row: Squircle icon, Title, Handle, and Arrow */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-lg ${metric.badgeColor} flex items-center justify-center shadow-xs flex-shrink-0`}
                    >
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xs font-semibold text-zinc-900 group-hover:text-black transition-colors leading-tight truncate">
                        {metric.title}
                      </h3>
                      <p className="text-[10px] font-mono text-zinc-400 truncate">
                        {metric.handle}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRightIcon
                    size={13}
                    className="text-zinc-400 group-hover:text-zinc-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5 flex-shrink-0"
                  />
                </div>

                {/* Big Bold Stat */}
                <div className="my-1">
                  <div className="text-2xl sm:text-[26px] font-bold text-zinc-900 tracking-tight font-sans">
                    {metric.stat}
                  </div>
                  <div className="text-[11px] text-zinc-500 font-mono -mt-0.5">
                    {metric.label}
                  </div>
                </div>
              </div>

              {/* Bottom Sub-Stat */}
              <div className="pt-2.5 mt-2 border-t border-zinc-100 text-[10.5px] font-mono text-zinc-400 group-hover:text-zinc-600 transition-colors">
                {metric.subStat}
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
