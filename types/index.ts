// types/index.ts

export interface Education {
  degree: string;
  institution: string;
  date: string;
  details?: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
}
