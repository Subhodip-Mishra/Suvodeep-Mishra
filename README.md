# Suvodeep Mishra — Personal Developer Portfolio

A modern, high-performance personal developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed with a dark-first, minimalist aesthetic inspired by Vercel, Linear, and Aceternity UI.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type checking)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS variables and custom subtle grid/glow utilities
- **Typography**: [Geist](https://vercel.com/font) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via `next/font/google`
- **Animations**: [Framer Motion](https://www.framer.com/motion/) layout transitions and interactive micro-interactions
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand vector icons

---

## 📂 Project Structure

```
.
├── app/
│   ├── globals.css          # Dark palette, glassmorphism, tech grid styles
│   ├── layout.tsx           # SEO metadata, OpenGraph tags, Google fonts
│   └── page.tsx             # Single-page layout integrating all sections
├── components/
│   ├── navbar.tsx           # Sticky glassmorphic navbar with active scroll spy
│   ├── hero.tsx             # Terminal simulation, headline, stats, and CTAs
│   ├── about.tsx            # First-principles engineering and architectural pillars
│   ├── skills.tsx           # Categorized technical buckets with pill badges
│   ├── projects.tsx         # Card grid with category filter tabs ("All", "Systems", etc.)
│   ├── project-card.tsx     # Project card handling both repo-only & live-demo links
│   ├── contact.tsx          # Contact CTA card, copy-email button, and social links
│   └── icons.tsx            # Optimized SVG icons (GitHub, LinkedIn, X)
├── lib/
│   ├── data.ts              # Personal info, skills, and featured projects data
│   ├── types.ts             # TypeScript schemas for Project, SkillCategory
│   └── utils.ts             # Tailwind class merging utility (cn)
├── public/                  # Static assets and icons
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure [Node.js](https://nodejs.org/) (v18+ or v20+) is installed.

### Development Server

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production build:

```bash
npm run build
npm run start
```

---

## 🛠️ Customization

- **Profile & Projects**: Edit [`lib/data.ts`](file:///home/suvodeep-mishra/Desktop/suvodeep/lib/data.ts) to update personal info, skills, social handles, or featured projects.
- **Styling**: Modify [`app/globals.css`](file:///home/suvodeep-mishra/Desktop/suvodeep/app/globals.css) to customize the color palette or background glow effects.
