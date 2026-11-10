"use client";

import Image from "next/image";
import { createLucideIcon } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

// Lucide-style brand icons constructed via lucide-react createLucideIcon
const GithubIcon = createLucideIcon("github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "gh-1",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "gh-2" }],
]);

const XIcon = createLucideIcon("x", [
  ["path", { d: "M4 4l11.733 16h4.267l-11.733-16z", key: "x-1" }],
  ["path", { d: "M4 20l6.768-6.768m2.46-2.46L20 4", key: "x-2" }],
]);

const LinkedinIcon = createLucideIcon("linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "li-1",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "li-2" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "li-3" }],
]);

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <section className="pt-12 pb-6">
      {/* Profile Header Row: Avatar, Identity Typography, and Social Icon Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-zinc-200">
        <div className="flex items-center gap-3.5">
          {/* Sharp 56x56 Circular Avatar with subtle ring & online status indicator dot */}
          <div className="relative w-14 h-14 shrink-0 select-none">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-zinc-200 bg-zinc-100">
              <Image
                src="/profile.jpg"
                alt={PERSONAL_INFO.name}
                width={56}
                height={56}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span
              className="absolute bottom-0 right-0 block w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white"
              title="Active / Available"
            />
          </div>

          {/* Identity Typography */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 font-sans">
                {PERSONAL_INFO.name}
              </h1>
              <span className="text-sm sm:text-base font-normal tracking-tight text-zinc-500">
                @{PERSONAL_INFO.aka}
              </span>
            </div>
            <p className="text-sm text-zinc-600 tracking-tight mt-0.5">
              {PERSONAL_INFO.headline}
            </p>
          </div>
        </div>

        {/* Subtle Interactive Social Icon Buttons */}
        <div className="flex items-center gap-1">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            <XIcon size={18} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex items-center gap-6 text-sm pt-4 mb-6">
        {navItems.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            className={`pb-1.5 border-b-2 text-xs sm:text-sm transition-colors duration-150 ${
              idx === 0
                ? "border-zinc-900 text-zinc-900 font-medium"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Bio Paragraphs with Dotted Underline Links */}
      <div className="space-y-3.5 text-sm sm:text-[14.5px] leading-relaxed text-zinc-700">
        <p>
          Full-stack web developer with over 3 years of experience building modern, responsive web applications from first principles. I specialize in <span className="text-zinc-900 font-medium">React.js</span>, <span className="text-zinc-900 font-medium">TypeScript</span>, <span className="text-zinc-900 font-medium">Next.js</span>, and designing resilient <span className="text-zinc-900 font-medium">REST APIs</span>. Over the years, I&apos;ve built and shipped multiple end-to-end web projects—from AI-powered developer tooling like{" "}
          <a
            href="#projects"
            className="text-zinc-900 font-medium underline decoration-dotted decoration-zinc-400 underline-offset-4 hover:decoration-zinc-900 transition-colors"
          >
            Sandpro
          </a>{" "}
          to interactive screening platforms like{" "}
          <a
            href="#projects"
            className="text-zinc-900 font-medium underline decoration-dotted decoration-zinc-400 underline-offset-4 hover:decoration-zinc-900 transition-colors"
          >
            DeepHireAI
          </a>
          .
        </p>

        <p className="text-zinc-600">
          Looking to develop high-quality React frontends, scale RESTful backend APIs, or build full-stack web applications from scratch?{" "}
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
