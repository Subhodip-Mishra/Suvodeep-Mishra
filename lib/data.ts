export interface Project {
  id: string;
  title: string;
  domain: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    isCore?: boolean;
  }[];
}

export const PERSONAL_INFO = {
  name: "Suvodeep Mishra",
  aka: "suvodeep",
  headline: "Systems Engineer & Full-Stack Developer",
  subHeadline:
    "Focused on high-performance backends, native CLI tools, distributed systems, and modern web applications.",
  email: "suvodeepmishra01@gmail.com",
  github: "https://github.com/Subhodip-Mishra",
  linkedin: "https://linkedin.com/in/suvodeep-mishra",
  x: "https://x.com/SuvodeepMishra",
  location: "India • Remote Worldwide",
  availability: "Available for Systems & Full-Stack Roles",
};

export const PROJECTS: Project[] = [
  {
    id: "sandpro",
    title: "Sandpro",
    domain: "AI Agent",
    description:
      "AI tool-generation agent platform featuring isolated execution sandboxes, auto-healing execution scripts, and multi-provider auth.",
    techStack: ["TypeScript", "Python", "Next.js", "Sandboxes"],
    githubUrl: "https://github.com/Subhodip-Mishra/sandpro",
    liveUrl: "https://sandpro.vercel.app",
  },
  {
    id: "cortex",
    title: "Cortex",
    domain: "Desktop",
    description:
      "High-performance accounting desktop application with local HTTP/XML integrations to TallyPrime, structured reconciliation tables, and SHA-256 cache verification.",
    techStack: ["Rust", "Tauri", "React", "SQLite"],
    githubUrl: "https://github.com/Subhodip-Mishra/cortex",
  },
  {
    id: "dispatchhook",
    title: "Dispatchhook",
    domain: "Systems",
    description:
      "Low-latency webhook delivery and traffic control platform with HMAC payload signing, Dockerized workers, and concurrency queues.",
    techStack: ["C++", "epoll", "Docker", "Redis", "Express"],
    githubUrl: "https://github.com/Subhodip-Mishra/dispatchhook",
  },
  {
    id: "nextplan",
    title: "NextPlan",
    domain: "CLI Tool",
    description:
      "Deterministic CLI task scheduling and execution engine built with fast JSON serialization.",
    techStack: ["Java", "Jackson", "CLI", "Linux"],
    githubUrl: "https://github.com/Subhodip-Mishra/nextplan",
  },
  {
    id: "deephire-ai",
    title: "DeepHireAI",
    domain: "Full-Stack",
    description:
      "AI-powered voice interview screening platform featuring recruiter job vaults and dynamic question chaining.",
    techStack: ["Next.js", "AI Voice", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com/Subhodip-Mishra/deephire-ai",
    liveUrl: "https://deephire-ai.vercel.app",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "systems",
    title: "Systems & Backends",
    description: "High-throughput engines, low-latency execution, and concurrency primitives.",
    skills: [
      { name: "C++", isCore: true },
      { name: "Rust", isCore: true },
      { name: "Node.js", isCore: true },
      { name: "Express", isCore: false },
      { name: "Fastify", isCore: true },
      { name: "Drogon", isCore: true },
      { name: "gRPC", isCore: true },
      { name: "BullMQ", isCore: false },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    description: "Modern reactive interfaces, smooth animations, and type-safe systems.",
    skills: [
      { name: "Next.js 15", isCore: true },
      { name: "React 19", isCore: true },
      { name: "TypeScript", isCore: true },
      { name: "Tailwind CSS", isCore: true },
      { name: "Framer Motion", isCore: true },
      { name: "Shadcn UI", isCore: false },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational modeling, in-memory caching, vector search, and migrations.",
    skills: [
      { name: "PostgreSQL", isCore: true },
      { name: "Redis", isCore: true },
      { name: "MongoDB", isCore: false },
      { name: "Qdrant", isCore: true },
      { name: "Prisma", isCore: false },
      { name: "Drizzle ORM", isCore: true },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Core Tools",
    description: "Containerization, secure microVM sandboxes, and deterministic pipelines.",
    skills: [
      { name: "Linux", isCore: true },
      { name: "Docker", isCore: true },
      { name: "Docker Compose", isCore: false },
      { name: "Git", isCore: true },
      { name: "CI/CD", isCore: false },
      { name: "Sandboxes/E2B", isCore: true },
    ],
  },
];
