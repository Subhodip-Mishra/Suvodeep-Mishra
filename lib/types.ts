export type ProjectCategory =
  | "Systems"
  | "Full-Stack"
  | "AI & Tools"
  | "AI Agent"
  | "Desktop"
  | "CLI Tool";

export interface Project {
  id: string;
  title: string;
  description: string;
  domain?: string;
  category?: ProjectCategory;
  highlights?: string[];
  techStack: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  metrics?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isCore?: boolean;
  }[];
}

