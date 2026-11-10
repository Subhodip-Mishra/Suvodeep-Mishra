export type ProjectCategory = "Systems" | "Full-Stack" | "AI & Tools";

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: ProjectCategory;
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

