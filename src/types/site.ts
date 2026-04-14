export type NavItem = {
  href: "/" | "/about" | "/projects" | "/experience" | "/practice";
  label: string;
};

export type Project = {
  title: string;
  link: string;
  imgUrl: string;
};

export type CourseGroup = {
  title: string;
  description?: string;
  items: string[];
};

export type TimelineItem = {
  title: string;
  company: string;
  year: string;
  desc: string;
  companyLink?: string;
  imgUrl?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type SocialLinks = {
  github: string;
};

export type SiteMeta = {
  siteUrl: string;
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultImage: string;
};

export type SiteProfile = {
  githubUsername: string;
  name: string;
  designation: string;
  avatarUrl: string;
  email: string;
  phone: string;
  address: string;
  resumeUrl: string;
  heroRoles: string[];
  aboutTitle: string;
  aboutDescription: string[];
  undergraduateCourses: CourseGroup[];
  graduateCourses: CourseGroup[];
  skills: SkillGroup[];
  socialLinks: SocialLinks;
};

export type GithubRepository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};
