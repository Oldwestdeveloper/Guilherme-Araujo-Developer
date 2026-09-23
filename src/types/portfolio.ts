export interface Project {
  id: string;
  title: string;
  category: 'Full-stack' | 'Front-end' | 'Mobile' | 'Cloud & API';
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  imageCaptions?: string[];
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
  metrics?: string;
  confidential?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  status?: string;
  credentialUrl?: string;
  description: string;
  honors?: string;
  courses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  status?: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectRelation: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  icon?: string;
  targetId?: string;
}
