import {
  GreetingsType,
  AboutType,
  SkillsSectionType,
  EducationType,
  CertificationType,
  AchievementType,
  ProjectType,
  SEODataType,
  SocialLinksType,
  ContactInfoType,
  ExperienceType,
  FeedbackType,
  SkillBarsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Akriti Singh",
  title: "Hi all, I'm Akriti Singh",
  headline: "Data Analyst & MERN Stack Developer",
  subTitle: "B.Tech CSE (AI & ML) | Data Analytics & Scalable Web Development",
  description:
    "I am a Computer Science Engineering student specializing in AI and Machine Learning, with skills in data analytics and full-stack web development. I build data-driven solutions and interactive web applications using JavaScript, Python, SQL, Excel, Power BI, React, Node.js, Express.js, and MongoDB. My interests include data visualization, machine learning, analytics, and scalable software development.",
  resumeLink: "/Akriti_Singh_Resume.pdf",
};

export const about: AboutType = {
  title: "About Me",
  subtitle: "Bridging analytical insight and modern full-stack web engineering",
  description:
    "I am currently pursuing my B.Tech in Computer Science Engineering (AI & ML) at Rungta College of Engineering and Technology, Bhilai (2023–2027). My focus lies at the dynamic intersection of data analytics and full-stack software development. Whether developing responsive, interactive MERN-stack applications or extracting high-impact insights from complex datasets using Python, SQL, and Power BI dashboards, I love solving real-world challenges. To keep my algorithmic foundation sharp, I consistently practice problem solving, with 150+ DSA problems solved across key data structures and algorithms.",
  highlights: [
    {
      title: "B.Tech in CSE (AI & ML)",
      description: "Rungta College of Engineering and Technology, Bhilai (2023–2027) with deep focus on AI, data systems, and software engineering.",
      icon: "carbon:education",
    },
    {
      title: "Data Analytics & Visualization",
      description: "Skilled in exploratory data analysis (EDA), SQL querying, Power BI interactive reporting, and data-driven storytelling.",
      icon: "carbon:chart-line-data",
    },
    {
      title: "MERN Stack Engineering",
      description: "Hands-on experience developing modular, scalable web platforms using MongoDB, Express.js, React.js, and Node.js.",
      icon: "carbon:code",
    },
    {
      title: "150+ DSA Problems Solved",
      description: "Consistent problem-solving practice reinforcing algorithmic complexity, data structures, and optimized logic.",
      icon: "carbon:data-structures",
    },
  ],
};

export const openSource = {
  githubUserName: "akritisingh",
};

export const contactInfo: ContactInfoType = {
  email: "singha65241@gmail.com",
  phone: "+91-9651900852",
  location: "Bhilai, Chhattisgarh, India",
  github: "https://github.com/akritisingh",
  linkedin: "https://www.linkedin.com/in/akriti-singh",
};

export const socialLinks: SocialLinksType = {
  email: "mailto:singha65241@gmail.com",
  linkedin: "https://www.linkedin.com/in/akriti-singh",
  github: "https://github.com/akritisingh",
};

export const skillsSection: SkillsSectionType = {
  title: "Technical Skills",
  subTitle: "Organized by domain expertise across Data Analytics, Full-Stack Development, and Core CS",
  categories: [
    {
      categoryName: "Programming Languages",
      icon: "carbon:terminal",
      description: "Foundational and modern languages for scripting, logic, and systems",
      skills: [
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "Python", iconifyTag: "logos:python" },
        { skillName: "C", iconifyTag: "logos:c" },
        { skillName: "Java", iconifyTag: "logos:java" },
      ],
    },
    {
      categoryName: "Data Analytics",
      icon: "carbon:analytics",
      description: "Tools and techniques for business intelligence and data insights",
      skills: [
        { skillName: "Microsoft Excel", iconifyTag: "vscode-icons:file-type-excel" },
        { skillName: "SQL", iconifyTag: "carbon:sql" },
        { skillName: "Power BI", iconifyTag: "simple-icons:powerbi" },
        { skillName: "Data Visualization", iconifyTag: "carbon:chart-line-smooth" },
      ],
    },
    {
      categoryName: "Data Science",
      icon: "carbon:chart-treemap",
      description: "Libraries and workflows for machine learning and exploratory analysis",
      skills: [
        { skillName: "NumPy", iconifyTag: "logos:numpy" },
        { skillName: "Pandas", iconifyTag: "logos:pandas-icon" },
        { skillName: "Data Cleaning", iconifyTag: "carbon:clean" },
        { skillName: "Exploratory Data Analysis (EDA)", iconifyTag: "carbon:data-analytics" },
      ],
    },
    {
      categoryName: "Frontend Development",
      icon: "carbon:application-web",
      description: "Modern, responsive, user-friendly client-side web architectures",
      skills: [
        { skillName: "React.js", iconifyTag: "vscode-icons:file-type-reactjs" },
        { skillName: "HTML5", iconifyTag: "vscode-icons:file-type-html" },
        { skillName: "CSS3", iconifyTag: "vscode-icons:file-type-css" },
      ],
    },
    {
      categoryName: "Backend Development",
      icon: "carbon:servers",
      description: "Scalable server-side APIs, real-time channels, and service architecture",
      skills: [
        { skillName: "Node.js", iconifyTag: "logos:nodejs-icon" },
        { skillName: "Express.js", iconifyTag: "skill-icons:expressjs-dark" },
        { skillName: "REST APIs", iconifyTag: "carbon:api" },
        { skillName: "WebSockets / Socket.IO", iconifyTag: "logos:socket-io" },
      ],
    },
    {
      categoryName: "Databases",
      icon: "carbon:data-base",
      description: "Relational and document databases for structured and scalable storage",
      skills: [
        { skillName: "MongoDB", iconifyTag: "vscode-icons:file-type-mongo" },
        { skillName: "MySQL", iconifyTag: "logos:mysql" },
      ],
    },
    {
      categoryName: "Core CS & Tools",
      icon: "carbon:tools",
      description: "Algorithmic thinking, version control, and developer workflows",
      skills: [
        { skillName: "Data Structures & Algorithms", iconifyTag: "carbon:data-structures" },
        { skillName: "Git", iconifyTag: "logos:git-icon" },
        { skillName: "GitHub", iconifyTag: "akar-icons:github-fill" },
        { skillName: "VS Code", iconifyTag: "vscode-icons:file-type-vscode" },
      ],
    },
  ],
};

export const projects: ProjectType[] = [
  {
    name: "Indic Bias Detection System",
    category: "MERN Stack • NLP & ML",
    desc: "A full-stack platform designed to analyze Indic-language content and identify potential stereotypical bias using machine-learning techniques.",
    problemStatement:
      "Detecting cultural and linguistic bias in Indic textual corpora requires dedicated preprocessing pipelines and intuitive explainability dashboards for researchers and content auditors.",
    highlights: [
      "Text preprocessing and classification workflows tailored for Indic dialects",
      "End-to-end bias detection pipeline identifying stereotypical classifications",
      "MERN-based web application providing a responsive user experience",
      "Interactive analytics dashboard and prediction-result visualizations",
    ],
    tags: ["MERN Stack", "Python", "NLP", "Machine Learning", "Data Visualization"],
  },
  {
    name: "Smart Traffic Management System (STMS)",
    category: "Full-Stack Web & Real-Time Analytics",
    desc: "A data-driven traffic monitoring platform designed to visualize urban traffic conditions and support traffic-flow analysis.",
    problemStatement:
      "Urban congestion bottlenecks often lack synchronized live monitoring and predictive modeling to assist traffic administrators with proactive intervention.",
    highlights: [
      "Real-time dashboard updates powered by WebSockets / Socket.IO",
      "Color-coded congestion indicators: Low, Medium, and High traffic zones",
      "Interactive charts and continuous telemetry traffic monitoring",
      "Traffic-load prediction and congestion forecasting features",
      "Scenario simulation tool, threshold alerts, and CSV telemetry export",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Machine Learning"],
  },
  {
    name: "E-commerce Sales & Customer Analytics",
    category: "Business Intelligence & Data Analytics",
    desc: "An analytics project focused on understanding e-commerce sales performance, customer behavior, and purchasing patterns.",
    problemStatement:
      "Transforming high-volume transactional data into executive decision models through SQL queries, customer cohort segmentation, and interactive visual reporting.",
    highlights: [
      "End-to-end data cleaning, anomaly handling, and data preparation",
      "Exploratory Data Analysis (EDA) uncovering seasonal purchase patterns",
      "Revenue and average order value (AOV) trend analysis",
      "Multi-table SQL joins and aggregation queries for deep business metrics",
      "Customer segmentation by purchase frequency and spending tiers",
      "Interactive Power BI dashboards delivering actionable business insights",
      "Identification of top-performing product categories and retention drivers",
    ],
    tags: ["Excel", "SQL", "Power BI", "Data Cleaning", "EDA", "Data Visualization"],
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Rungta College of Engineering and Technology, Bhilai",
    subHeader: "B.Tech in Computer Science Engineering (AI & ML)",
    duration: "2023 – 2027",
    location: "Bhilai, Chhattisgarh",
    desc: "Comprehensive undergraduate engineering program specializing in Artificial Intelligence and Machine Learning. Focus areas include data structures, algorithms, database management systems, full-stack web engineering, and machine learning models.",
    descBullets: [
      "Specialization in Artificial Intelligence and Machine Learning",
      "Active problem-solving and full-stack software development",
      "Hands-on project work in data analytics and intelligent web applications",
    ],
  },
  {
    schoolName: "Pavanagar Mahavir Inter College, Fazilnagar, Kushinagar",
    subHeader: "Class XII",
    duration: "Higher Secondary Education",
    location: "Fazilnagar, Kushinagar, Uttar Pradesh",
    desc: "Completed secondary education with focus on science and mathematics, developing a strong analytical and quantitative foundation.",
    descBullets: [
      "Core curriculum in Mathematics and Physical Sciences",
      "Built rigorous foundation for computer science and engineering studies",
    ],
  },
];

export const certifications: CertificationType[] = [
  {
    title: "MERN Full Stack Developer",
    issuer: "Coding Spoon",
    date: "January 2026",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
  },
  {
    title: "Data Science with Python",
    issuer: "LetsUpgrade",
    date: "June 2025",
    skills: ["Python", "NumPy", "Pandas", "Data Cleaning", "EDA"],
  },
  {
    title: "Introduction to MS Excel",
    issuer: "Simplilearn SkillUp, powered by Microsoft",
    date: "July 2025",
    skills: ["Excel Formulas", "Data Modeling", "Spreadsheets", "Data Analysis"],
  },
];

export const achievements: AchievementType[] = [
  {
    title: "150+ DSA Problems Solved",
    highlight: "150+ Problems",
    description:
      "Consistent problem-solving practice across core data structures (arrays, strings, linked lists, trees) and algorithmic paradigms (searching, sorting, recursion, dynamic programming).",
    icon: "carbon:code-reference",
  },
];

export const seoData: SEODataType = {
  title: "Akriti Singh | Data Analyst & MERN Stack Developer",
  description:
    "Portfolio of Akriti Singh - Computer Science Engineering student (AI & ML) with strong expertise in Data Analytics, Power BI, Python, SQL, and MERN Full-Stack Development.",
  author: "Akriti Singh",
  image: "/favicon.png",
  url: "https://akriti-singh-portfolio.vercel.app",
  keywords: [
    "Akriti Singh",
    "Akriti Singh Portfolio",
    "Data Analyst",
    "MERN Stack Developer",
    "AI & ML",
    "Python",
    "SQL",
    "Power BI",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Indic Bias Detection System",
    "Smart Traffic Management System",
    "E-commerce Analytics",
  ],
};

// Backwards compatibility for legacy containers
export const experience: ExperienceType[] = [];
export const feedbacks: FeedbackType[] = [];
export const SkillBars: SkillBarsType[] = [];

