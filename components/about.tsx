"use client";

import { motion } from "framer-motion";
import { Gauge, Terminal, ShieldCheck, Binary, Sparkles } from "lucide-react";

const principles = [
  {
    icon: Gauge,
    title: "Low-Latency & Concurrency",
    description:
      "Designing asynchronous event loops, lock-free queues, and epoll-driven networks that achieve deterministic, sub-millisecond latencies under high saturation.",
    accent: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  },
  {
    icon: Binary,
    title: "First-Principles Systems",
    description:
      "Reasoning from mechanical sympathy and memory efficiency up through protocol design. Writing C++ and Rust that minimizes heap churn and CPU cache misses.",
    accent: "text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
  },
  {
    icon: Terminal,
    title: "Developer Tools & Native CLIs",
    description:
      "Creating standalone developer binaries and orchestrators like NextPlan and Sandpro with deterministic execution, clean ANSI styling, and instant feedback.",
    accent: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
  },
  {
    icon: ShieldCheck,
    title: "Isolated Sandboxes & Security",
    description:
      "Isolating untrusted agentic code with ephemeral microVMs (E2B, Docker), cryptographic HMAC request signing, and zero-trust perimeter enforcement.",
    accent: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
            First-Principles Engineering. Low-Latency Design.
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base sm:text-lg mt-2">
            Building software with a relentless focus on mechanical sympathy, deterministic execution, and developer leverage.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-7 space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              I am a <strong className="text-white font-medium">Systems Engineer &amp; Full-Stack Developer</strong> driven by understanding how computers execute instructions at the deepest layers — from OS thread scheduling and network socket buffers to reactive modern web interfaces.
            </p>
            <p>
              My journey centers on building infrastructure that doesn&apos;t compromise: crafting asynchronous C++ services handling tens of thousands of concurrent webhook deliveries, writing Rust desktop applications with sub-30MB memory profiles, and architecting multi-tenant sandboxed execution environments for autonomous AI agents.
            </p>
            <p className="text-zinc-400">
              When I&apos;m not tuning network event loops or optimizing database indexing, I craft fast, accessible web applications using Next.js 15, TypeScript, and modern design systems that feel fluid, responsive, and delightful.
            </p>

            {/* Quick Fact Callout */}
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm font-mono text-zinc-300 space-y-1 mt-6">
              <div className="text-zinc-500">{"// Personal Motto"}</div>
              <p className="text-emerald-400 font-sans italic text-sm">
                &ldquo;Simplicity is prerequisite for reliability. Eliminate unnecessary layers and let the hardware do what it does best.&rdquo;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                Core Philosophy
              </span>
              <h3 className="text-base font-semibold text-zinc-100 mb-2">Zero-Bloat Engineering</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Every CPU cycle, memory allocation, and network round-trip counts. I prefer explicit data structures, single-binary distribution, and lean architectures over bloated abstraction stacks.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-1">
                Engineering Scope
              </span>
              <h3 className="text-base font-semibold text-zinc-100 mb-2">Full-Spectrum Capability</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                From epoll event loops and POSIX sockets to WebSocket streaming, distributed worker queues (BullMQ), and full-stack Next.js platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {principles.map((p, index) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-[#0d1117]/60 border border-zinc-800/80 hover:border-zinc-700 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className={`p-2 rounded-lg border ${p.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-100 font-sans group-hover:text-white transition-colors">
                    {p.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
