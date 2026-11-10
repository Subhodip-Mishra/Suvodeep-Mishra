"use client";

import { motion } from "framer-motion";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  NextjsIcon,
  ArrowUpRightIcon,
} from "@/components/icons";
import { PERSONAL_INFO } from "@/lib/data";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const topPlatforms = [
  {
    name: "X (Twitter)",
    href: PERSONAL_INFO.x,
    icon: TwitterIcon,
    iconClass: "text-zinc-800",
  },
  {
    name: "GitHub",
    href: PERSONAL_INFO.github,
    icon: GithubIcon,
    iconClass: "text-zinc-800",
  },
  {
    name: "LinkedIn",
    href: PERSONAL_INFO.linkedin,
    icon: LinkedinIcon,
    iconClass: "text-[#0a66c2]",
  },
  {
    name: "Next.js 15",
    href: "https://nextjs.org",
    icon: NextjsIcon,
    iconClass: "text-black",
  },
];

export function Hero() {
  return (
    <section className="pt-12 pb-8">
      {/* Top Header Row: Avatar, Name & Monogram */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Avatar Squircle */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 font-mono font-bold text-sm shadow-sm select-none"
          >
            <span className="text-zinc-900 font-sans font-bold">SM</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
          </motion.div>

          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 flex items-center gap-1.5 font-sans">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-zinc-400 font-normal italic text-sm sm:text-base">
                aka {PERSONAL_INFO.aka}
              </span>
            </h1>
            <p className="text-xs text-zinc-500 font-mono">
              {PERSONAL_INFO.headline}
            </p>
          </div>
        </div>

        {/* Minimalist Top-Right GitHub Badge */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-all shadow-xs"
          title="GitHub Profile"
          aria-label="GitHub Profile"
        >
          <GithubIcon size={16} />
        </motion.a>
      </div>

      {/* Top Social & Platform Pills Row */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap items-center gap-2 mb-4"
      >
        {topPlatforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="group px-3 py-1.5 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 shadow-xs transition-all flex items-center gap-2 text-xs"
            >
              <Icon size={14} className={platform.iconClass} />
              <span className="text-zinc-800 font-medium">{platform.name}</span>
              <ArrowUpRightIcon
                size={12}
                className="text-zinc-400 group-hover:text-zinc-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-3 text-xs font-mono text-zinc-500 border-b border-zinc-200 pb-4 mb-6">
        {navItems.map((item, idx) => (
          <span key={item.label} className="flex items-center gap-3">
            <a
              href={item.href}
              className={`hover:text-zinc-900 transition-colors ${
                idx === 0
                  ? "text-zinc-900 font-medium underline underline-offset-4 decoration-zinc-400"
                  : ""
              }`}
            >
              {item.label}
            </a>
            {idx < navItems.length - 1 && (
              <span className="text-zinc-300 select-none">•</span>
            )}
          </span>
        ))}
      </nav>

      {/* Bio Paragraphs with Dotted Underline Links */}
      <div className="space-y-3.5 text-sm sm:text-[14.5px] leading-relaxed text-zinc-700">
        <p>
          I build high-performance distributed backends, native CLI tools, and modern web applications from first principles. Most days, I&apos;m hacking on low-latency C++ / Rust engines, isolated execution sandboxes like{" "}
          <a
            href="#projects"
            className="text-zinc-900 font-medium underline decoration-dotted decoration-zinc-400 underline-offset-4 hover:decoration-zinc-900 transition-colors"
          >
            Sandpro
          </a>
          , or building deterministic developer tools like{" "}
          <a
            href="#projects"
            className="text-zinc-900 font-medium underline decoration-dotted decoration-zinc-400 underline-offset-4 hover:decoration-zinc-900 transition-colors"
          >
            NextPlan
          </a>
          .
        </p>

        <p className="text-zinc-600">
          Need low-latency backend infrastructure or distributed systems built? Want a technical consultation on your stack?{" "}
          <a
            href="#contact"
            className="text-zinc-900 font-medium underline decoration-dotted decoration-zinc-400 underline-offset-4 hover:decoration-zinc-900 transition-colors"
          >
            Get in touch
          </a>{" "}
          or{" "}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-zinc-900 font-medium underline decoration-dotted decoration-zinc-400 underline-offset-4 hover:decoration-zinc-900 transition-colors"
          >
            send an email
          </a>
          .
        </p>
      </div>
    </section>
  );
}
