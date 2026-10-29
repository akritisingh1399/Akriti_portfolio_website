import React from "react";

export type SEODataType = {
  title: string;
  author?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords: string[];
};

export type SocialLinksType = {
  [link: string]: string | undefined;
};

// * HERO SECTION
export type GreetingsType = {
  name: string;
  title: string;
  headline?: string;
  subTitle?: string;
  description?: string;
  resumeLink?: string;
};

// * ABOUT SECTION
export type AboutType = {
  title: string;
  subtitle: string;
  description: string;
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
};

// * SKILLS SECTION
export type SoftwareSkillType = {
  skillName: string;
  iconifyTag: string;
};

export type SkillCategoryType = {
  categoryName: string;
  icon: string;
  description?: string;
  skills: SoftwareSkillType[];
};

export type SkillsSectionType = {
  title: string;
  subTitle: string;
  categories: SkillCategoryType[];
};

// * PROFICIENCY SECTION
export type SkillBarsType = {
  Stack: string;
  progressPercentage: string;
};

// * EDUCATION SECTION
export type EducationType = {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc?: string;
  location?: string;
  grade?: string;
  descBullets?: string[];
};

// * CERTIFICATION SECTION
export type CertificationType = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  icon?: string;
  skills?: string[];
};

// * ACHIEVEMENT SECTION
export type AchievementType = {
  title: string;
  highlight: string;
  description: string;
  icon: string;
};

// * EXPERIENCE SECTION
export type ExperienceType = {
  role: string;
  company: string;
  companyLogo: string;
  date: string;
  desc: string;
  descBullets?: string[];
};

// * PROJECT SECTION
export type ProjectType = {
  name: string;
  desc: string;
  problemStatement?: string;
  highlights?: string[];
  tags?: string[];
  github?: string;
  link?: string;
  category?: string;
};

// * FEEDBACK SECTION
export type FeedbackType = {
  name: string;
  role: string;
  feedback: string;
};

// * CONTACT SECTION
export type ContactInfoType = {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
};
