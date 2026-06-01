export interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  features: string[];
  tech: string[];
  category: string[];
  color: string;
  accentColor: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Achievement {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
}
