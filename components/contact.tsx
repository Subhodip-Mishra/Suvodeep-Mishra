"use client";

import { useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  CopyIcon,
  CheckIcon,
  SendIcon,
  ArrowUpRightIcon,
} from "@/components/icons";
import { PERSONAL_INFO } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "X (Twitter)",
      href: PERSONAL_INFO.x,
      icon: TwitterIcon,
      handle: "@SuvodeepMishra",
    },
    {
      name: "GitHub",
      href: PERSONAL_INFO.github,
      icon: GithubIcon,
      handle: "@Subhodip-Mishra",
    },
    {
      name: "LinkedIn",
      href: PERSONAL_INFO.linkedin,
      icon: LinkedinIcon,
      handle: "in/suvodeep-mishra",
    },
  ];

  return (
    <footer id="contact" className="py-6 border-t border-zinc-200 pb-16">
      {/* Section Sub-Header */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-3.5">
        <span>Get in Touch</span>
        <span>Open for Inquiries</span>
      </div>

      {/* Clean Contact Card */}
      <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs mb-6">
        <h3 className="text-sm font-semibold text-zinc-900 mb-1">
          Let&apos;s build resilient systems together.
        </h3>
        <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
          I&apos;m always excited to discuss low-latency architectures, systems engineering challenges, or full-stack software development.
        </p>

        {/* Email CTA buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-black text-white font-semibold text-xs transition-all active:scale-95 shadow-xs"
          >
            <SendIcon size={13} />
            <span>Send Email</span>
            <ArrowUpRightIcon size={12} />
          </a>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-zinc-100 text-zinc-800 border border-zinc-200 text-xs font-mono transition-all active:scale-95 shadow-xs"
          >
            {copied ? (
              <>
                <CheckIcon size={13} className="text-emerald-600" />
                <span className="text-emerald-600 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <CopyIcon size={13} />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Social Links Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-8">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 shadow-xs transition-all flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <Icon size={14} className="text-zinc-600" />
                <span className="text-zinc-800 font-medium">{social.name}</span>
              </div>
              <ArrowUpRightIcon size={12} className="text-zinc-400" />
            </a>
          );
        })}
      </div>

      {/* Minimal Footer Line */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-zinc-200 pt-4">
        <span>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}</span>
        <span>Systems nominal &bull; Next.js 15</span>
      </div>
    </footer>
  );
}
