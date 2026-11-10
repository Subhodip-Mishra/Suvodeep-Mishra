import { Project, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Suvodeep Mishra",
  aka: "suvodeep",
  headline: "Systems Engineer & Full-Stack Developer",
  subHeadline:
    "Focused on high-performance backends, native CLI tools, distributed systems, and modern web applications.",
  bioPart1:
    "I build high-performance distributed backends, native CLI tools, and modern web applications from first principles. Most days, I'm hacking on low-latency C++ / Rust services, isolated microVM sandboxes like Sandpro, or crafting deterministic developer tools like NextPlan.",
  bioPart2:
    "Need low-latency backend infrastructure built or audited? Looking for distributed systems expertise? Let's connect or drop me an email.",
  email: "suvodeepmishra01@gmail.com",
  github: "https://github.com/Subhodip-Mishra",
  linkedin: "https://linkedin.com/in/suvodeep-mishra",
  x: "https://x.com/SuvodeepMishra",
  location: "India • Remote Worldwide",
  availability: "Available for Systems & Full-Stack Roles",
  featuredLink: {
    label: "X (Twitter)",
    url: "https://x.com/SuvodeepMishra",
    description: "Follow @SuvodeepMishra on X",
  },
};

export interface MetricCard {
  id: string;
  iconName: "Github" | "Flash" | "Sandpro" | "Twitter" | "Linkedin" | "Nextjs" | "Terminal";
  title: string;
  handle: string;
  url: string;
  stat: string;
  label: string;
  subStat: string;
  badgeColor: string;
}

export const REACH_METRICS: MetricCard[] = [
  {
    id: "webhook-perf",
    iconName: "Flash",
    title: "Dispatchhook",
    handle: "C++ / epoll",
    url: "https://github.com/Subhodip-Mishra/dispatchhook",
    stat: "50K+",
    label: "events / sec dispatch",
    subStat: "<4ms tail latency",
    badgeColor: "bg-emerald-600 text-white",
  },
  {
    id: "x-reach",
    iconName: "Twitter",
    title: "X",
    handle: "@SuvodeepMishra",
    url: "https://x.com/SuvodeepMishra",
    stat: "Active",
    label: "systems & engineering",
    subStat: "Follow @SuvodeepMishra",
    badgeColor: "bg-black text-white",
  },
  {
    id: "linkedin-reach",
    iconName: "Linkedin",
    title: "LinkedIn",
    handle: "in/suvodeep-mishra",
    url: "https://linkedin.com/in/suvodeep-mishra",
    stat: "Connect",
    label: "professional network",
    subStat: "Systems & Full-Stack",
    badgeColor: "bg-[#0a66c2] text-white",
  },
  {
    id: "nextjs-reach",
    iconName: "Nextjs",
    title: "Next.js",
    handle: "App Router • React 19",
    url: "https://nextjs.org",
    stat: "v15.5",
    label: "modern web stack",
    subStat: "Server Components & Turbopack",
    badgeColor: "bg-black text-white",
  },
  {
    id: "github-reach",
    iconName: "Github",
    title: "GitHub",
    handle: "@Subhodip-Mishra",
    url: "https://github.com/Subhodip-Mishra",
    stat: "10+",
    label: "systems repositories",
    subStat: "C++ • Rust • TypeScript",
    badgeColor: "bg-zinc-900 text-white",
  },
  {
    id: "sandpro-vm",
    iconName: "Sandpro",
    title: "Sandpro",
    handle: "MicroVM Agent",
    url: "https://github.com/Subhodip-Mishra/sandpro",
    stat: "180ms",
    label: "sandbox cold start",
    subStat: "Isolated compute sandboxes",
    badgeColor: "bg-purple-600 text-white",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "systems-backends",
    title: "Systems & Backends",
    iconName: "Cpu",
    description: "High-throughput servers, low-latency execution, and concurrency primitives.",
    skills: [
      { name: "C++", isCore: true, level: "Advanced" },
      { name: "Rust", isCore: true, level: "Advanced" },
      { name: "Node.js", isCore: true, level: "Expert" },
      { name: "Express", isCore: false, level: "Proficient" },
      { name: "Fastify", isCore: true, level: "Advanced" },
      { name: "Drogon", isCore: true, level: "Proficient" },
      { name: "gRPC", isCore: true, level: "Proficient" },
      { name: "BullMQ", isCore: false, level: "Advanced" },
    ],
  },
  {
    id: "frontend-ui",
    title: "Frontend & UI",
    iconName: "Layout",
    description: "Modern reactive interfaces, smooth animations, and type-safe component systems.",
    skills: [
      { name: "Next.js", isCore: true, level: "Expert" },
      { name: "React", isCore: true, level: "Expert" },
      { name: "TypeScript", isCore: true, level: "Expert" },
      { name: "Tailwind CSS", isCore: true, level: "Expert" },
      { name: "Framer Motion", isCore: true, level: "Advanced" },
      { name: "Shadcn UI", isCore: false, level: "Advanced" },
    ],
  },
  {
    id: "databases-storage",
    title: "Databases & Storage",
    iconName: "Database",
    description: "Relational modeling, in-memory caching, vector search, and schema migrations.",
    skills: [
      { name: "PostgreSQL", isCore: true, level: "Advanced" },
      { name: "Redis", isCore: true, level: "Advanced" },
      { name: "MongoDB", isCore: false, level: "Proficient" },
      { name: "Qdrant", isCore: true, level: "Proficient" },
      { name: "Prisma", isCore: false, level: "Advanced" },
      { name: "Drizzle ORM", isCore: true, level: "Advanced" },
    ],
  },
  {
    id: "devops-tooling",
    title: "DevOps, Tooling & Core",
    iconName: "Terminal",
    description: "Containerization, secure microVM sandboxes, deterministic pipelines, and OS internals.",
    skills: [
      { name: "Linux/Ubuntu", isCore: true, level: "Expert" },
      { name: "Docker", isCore: true, level: "Advanced" },
      { name: "Docker Compose", isCore: false, level: "Advanced" },
      { name: "Git", isCore: true, level: "Expert" },
      { name: "CI/CD", isCore: false, level: "Proficient" },
      { name: "Sandboxes/E2B", isCore: true, level: "Advanced" },
    ],
  },
];

export const PROJECTS: (Project & {
  tagline: string;
  letter: string;
  color: string;
  accentBg: string;
})[] = [
  {
    id: "sandpro",
    title: "Sandpro",
    letter: "S",
    color: "bg-purple-600 text-white",
    accentBg: "border-purple-200 bg-purple-50",
    tagline: "AI tool-generation agent platform with isolated code execution sandboxes.",
    category: "AI & Tools",
    description:
      "AI tool-generation agent platform with isolated code execution sandboxes, deterministic tool synthesis, and dynamic multi-step workflows.",
    highlights: [
      "Secure multi-tenant execution in isolated microVMs with 180ms cold starts",
      "Dynamic tool synthesis with automated AST validation and runtime verification",
      "Qdrant vector store integration for semantic skill retrieval and persistent memory",
    ],
    techStack: ["TypeScript", "Node.js", "Docker", "E2B Sandboxes", "Qdrant", "Next.js"],
    githubUrl: "https://github.com/Subhodip-Mishra/sandpro",
    featured: true,
    metrics: "Isolated MicroVMs",
  },
  {
    id: "cortex",
    title: "Cortex",
    letter: "C",
    color: "bg-blue-600 text-white",
    accentBg: "border-blue-200 bg-blue-50",
    tagline: "High-performance accounting desktop application built with Rust and Tauri.",
    category: "Systems",
    description:
      "High-performance accounting desktop application built with Rust and Tauri connecting to local accounting APIs with zero-latency local caching.",
    highlights: [
      "Zero-latency double-entry bookkeeping ledger engine compiled directly in Rust",
      "Tauri desktop runtime with ultra-low memory footprint (<35MB) and type-safe IPC",
      "Local-first SQLite storage with deterministic offline reconciliation",
    ],
    techStack: ["Rust", "Tauri", "TypeScript", "React", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/Subhodip-Mishra/cortex",
    featured: true,
    metrics: "Native Rust Engine",
  },
  {
    id: "webhook-delivery-engine",
    title: "Dispatchhook",
    letter: "D",
    color: "bg-emerald-600 text-white",
    accentBg: "border-emerald-200 bg-emerald-50",
    tagline: "Low-latency webhook delivery and traffic control engine with HMAC signing.",
    category: "Systems",
    description:
      "Low-latency webhook delivery and traffic control engine featuring cryptographic HMAC-SHA256 signing, concurrency backpressure, and automated DLQ replay.",
    highlights: [
      "Asynchronous C++ epoll event loops capable of dispatching 50k+ webhooks/sec",
      "Exponential backoff retry policy with jitter and dead-letter queue (DLQ) failover",
      "Strict per-destination token bucket rate limiting and Redis-backed state synchronization",
    ],
    techStack: ["C++", "Drogon", "Redis", "BullMQ", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Subhodip-Mishra/dispatchhook",
    featured: true,
    metrics: "<4ms Dispatch Latency",
  },
  {
    id: "nextplan",
    title: "NextPlan",
    letter: "N",
    color: "bg-amber-600 text-white",
    accentBg: "border-amber-200 bg-amber-50",
    tagline: "Task management and scheduling CLI engine built for deterministic execution.",
    category: "Systems",
    description:
      "Deterministic task management and scheduling CLI engine built for systems programmers, featuring DAG dependency resolution and instant terminal feedback.",
    highlights: [
      "Sub-millisecond CLI startup time with zero runtime bloat and pure Rust execution",
      "Directed Acyclic Graph (DAG) task engine with topological cycle detection",
      "Customizable ANSI terminal UI and offline-first atomic JSON/SQLite transactions",
    ],
    techStack: ["Rust", "Clap", "SQLite", "Linux", "Git"],
    githubUrl: "https://github.com/Subhodip-Mishra/nextplan",
    featured: true,
    metrics: "Sub-ms CLI Startup",
  },
  {
    id: "deephire-ai",
    title: "DeepHireAI",
    letter: "H",
    color: "bg-rose-600 text-white",
    accentBg: "border-rose-200 bg-rose-50",
    tagline: "AI voice interview screening platform with dynamic role question chaining.",
    category: "Full-Stack",
    description:
      "AI voice interview screening platform with dynamic role question chaining, real-time audio streaming, and automated candidate competency evaluation.",
    highlights: [
      "Real-time bidirectional audio streaming pipeline leveraging WebSockets & WebRTC",
      "Dynamic prompt chaining that adapts interview questions based on candidate depth",
      "Automated rubric grading, voice transcriptions, and objective scoring matrices",
    ],
    techStack: ["Next.js 15", "TypeScript", "WebRTC", "Fastify", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Subhodip-Mishra/deephire-ai",
    liveUrl: "https://deephire-ai.vercel.app",
    featured: true,
    metrics: "Live Audio Streaming",
  },
];
