"use client";

import Image from "next/image";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
} from "@/components/icons";
import { PERSONAL_INFO } from "@/lib/data";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  return (
    <section className="pt-12 pb-6">
      {/* Top Header Row: Avatar, Name & Monogram, and Clean Social Links */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          {/* Rounded-full Profile Avatar */}
          <div className="relative w-15 h-15 shrink-0 select-none">
            <div className="w-full h-full rounded-full overflow-hidden border border-zinc-200 shadow-2xs bg-zinc-100">
              <Image
                src="/profile.jpg"
                alt={PERSONAL_INFO.name}
                width={50}
                height={50}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div>
            <h1 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-900 flex items-center gap-1.5 font-sans">
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

        {/* Clean Header Social Links with Larger Icons & External Arrows */}
        <div className="flex items-center gap-4 text-xs sm:text-[13px] font-mono">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-700 hover:text-black transition-colors"
          >
            <GithubIcon size={22} className="text-zinc-900" />
          </a>
          <span className="text-zinc-300 select-none">•</span>
          <a
            href={PERSONAL_INFO.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-700 hover:text-black transition-colors"
          >
            <TwitterIcon size={22} className="text-black" />
          </a>
          <span className="text-zinc-300 select-none">•</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-700 hover:text-black transition-colors"
          >
            <LinkedinIcon size={25} className="text-[#0a66c2]" />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center gap-3 text-xs text-zinc-500 border-b border-zinc-200 pb-3 mb-5">
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
