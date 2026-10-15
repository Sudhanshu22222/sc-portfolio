// ===== SUDHANSHU CHOUHAN PORTFOLIO DATA =====
export const profile = {
  name: 'Sudhanshu Chouhan',
  initials: 'SC',
  descriptor: 'Cybersecurity MCA Student & Developer | Proactive Defense & Full-Stack Systems',
  location: 'Pune, Maharashtra',
  phone: '+91 7000393193',
  email: 'sudhanshuchouhan306@gmail.com',
  github: 'https://github.com/Sudhanshu22222',
  linkedin: 'https://www.linkedin.com/in/sudhanshu022',
  resumeUrl: '/Sudhanshu_Chouhan_Resume.pdf',
};

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'credentials', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export type SkillGroup = {
  title: string;
  icon: 'shield' | 'code' | 'tools' | 'layout';
  blurb: string;
  items: string[];
  span: string;
};

export type SkillCategory = 'all' | 'cyber' | 'dev' | 'tools';

export interface SkillMetric {
  name: string;
  category: 'cyber' | 'dev' | 'tools';
  level: number;
  levelLabel: 'Advanced' | 'Proficient' | 'Familiar';
  highlight: string;
}

export const skillMetrics: SkillMetric[] = [
  {
    name: 'Network Defense & TCP/IP Analysis',
    category: 'cyber',
    level: 88,
    levelLabel: 'Advanced',
    highlight: 'Wireshark, Nmap, Packet Inspection & Subnetting'
  },
  {
    name: 'Python (FastAPI, OpenCV & Sockets)',
    category: 'dev',
    level: 90,
    levelLabel: 'Advanced',
    highlight: 'Smart Wardrobe engine, Socket port scanner'
  },
  {
    name: 'MySQL & Relational Schema Design',
    category: 'tools',
    level: 88,
    levelLabel: 'Advanced',
    highlight: 'Complex queries, Foreign keys, Normalization'
  },
  {
    name: 'Git, GitHub & Version Control',
    category: 'tools',
    level: 90,
    levelLabel: 'Advanced',
    highlight: 'Repository management, Branching, Code audits'
  },
  {
    name: 'Vulnerability Assessment & Port Audits',
    category: 'cyber',
    level: 85,
    levelLabel: 'Proficient',
    highlight: 'Service fingerprinting, Vulnerability discovery'
  },
  {
    name: 'React.js & Modern UI Architecture',
    category: 'dev',
    level: 86,
    levelLabel: 'Proficient',
    highlight: 'Phoneworld internship deliverable, Component state'
  },
  {
    name: 'Java (Core OOP & Multithreading)',
    category: 'dev',
    level: 84,
    levelLabel: 'Proficient',
    highlight: 'Parul University coursework (CGPA 7.91)'
  },
  {
    name: 'Security Operations & Incident Log Analysis',
    category: 'cyber',
    level: 82,
    levelLabel: 'Proficient',
    highlight: 'IBM Cybersecurity Analyst credential'
  },
  {
    name: 'Linux Systems & Security Tooling',
    category: 'tools',
    level: 85,
    levelLabel: 'Proficient',
    highlight: 'Kali Linux, Bash commands, File permissions'
  },
  {
    name: 'Node.js & Express REST APIs',
    category: 'dev',
    level: 82,
    levelLabel: 'Proficient',
    highlight: 'JWT auth, Protected routes, Middleware'
  },
  {
    name: 'MongoDB & NoSQL Data Modeling',
    category: 'tools',
    level: 82,
    levelLabel: 'Proficient',
    highlight: 'MERN stack collections, Indexing'
  },
  {
    name: 'Proactive Defense & System Hardening',
    category: 'cyber',
    level: 80,
    levelLabel: 'Proficient',
    highlight: 'Meta & Google Cloud Security foundations'
  }
];

export interface FeaturedRepo {
  name: string;
  desc: string;
  language: string;
  langColor: string;
  tag: string;
  url: string;
}

export interface GitHubTelemetry {
  username: string;
  profileUrl: string;
  repositoriesCount: string;
  certificationsCount: string;
  clientDeliverables: string;
  primaryStacks: string[];
  featuredRepos: FeaturedRepo[];
}

export const githubTelemetry: GitHubTelemetry = {
  username: 'Sudhanshu22222',
  profileUrl: 'https://github.com/Sudhanshu22222',
  repositoriesCount: '15+',
  certificationsCount: '10 Verified',
  clientDeliverables: 'Phoneworld (SR Mart)',
  primaryStacks: ['Python', 'FastAPI', 'Java', 'React.js', 'Node.js', 'MySQL', 'Kali Linux', 'Wireshark'],
  featuredRepos: [
    {
      name: 'Smart-Wardrobe',
      desc: 'AI-Powered Smart Wardrobe Outfit Recommendation System with OpenCV & FastAPI backend',
      language: 'Python',
      langColor: '#3572A5',
      tag: 'AI & Vision',
      url: 'https://github.com/Sudhanshu22222'
    },
    {
      name: 'library-management-system',
      desc: 'Full-Stack MERN platform with role-based access control, book cataloging & JWT security',
      language: 'JavaScript',
      langColor: '#F7DF1E',
      tag: 'Full-Stack MERN',
      url: 'https://github.com/Sudhanshu22222'
    },
    {
      name: 'network-vulnerability-scanner',
      desc: 'Multi-threaded TCP/IP network scanner with banner grabbing and port profiling',
      language: 'Python',
      langColor: '#3572A5',
      tag: 'Cyber Defense',
      url: 'https://github.com/Sudhanshu22222'
    },
    {
      name: 'phoneworld-client',
      desc: 'Client application deliverable from 4-month Parul University consultancy internship',
      language: 'React',
      langColor: '#61DAFB',
      tag: 'Client Project',
      url: 'https://github.com/Sudhanshu22222'
    }
  ]
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cybersecurity & Defense',
    icon: 'shield',
    span: 'wide tall',
    blurb: 'Core specialization in digital defense, vulnerability identification, and secure architecture.',
    items: [
      'Security fundamentals',
      'Common cyberattack vectors',
      'Network security basics',
      'Vulnerability assessment',
      'Security tools & log auditing'
    ]
  },
  {
    title: 'Programming Languages',
    icon: 'code',
    span: '',
    blurb: 'Languages used to develop secure software, microservices, and automated tools.',
    items: ['Java', 'Python', 'JavaScript', 'SQL & MySQL', 'C / C++ (fundamentals)']
  },
  {
    title: 'AI / ML & Databases',
    icon: 'tools',
    span: '',
    blurb: 'Integrating intelligence and reliable storage into scalable systems.',
    items: ['Python (FastAPI, OpenCV)', 'Rule-based recommendation systems', 'MongoDB', 'MySQL & Relational DBs']
  },
  {
    title: 'Full-Stack Web Development',
    icon: 'layout',
    span: 'wide',
    blurb: 'Constructing robust, database-driven web platforms with authenticated APIs.',
    items: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'REST APIs', 'JWT & Bcrypt Security', 'Cloudinary']
  },
];

export type Experience = {
  role: string;
  organization: string;
  unit: string;
  period: string;
  duration: string;
  location: string;
  clientProject: string;
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Summer Internship Trainee',
    organization: 'Parul University',
    unit: 'Consultancy Unit, FITCS Department',
    period: 'Dec 2024 – Apr 2025',
    duration: '4 months',
    location: 'Vadodara / Hybrid',
    clientProject: 'Phoneworld (SR Mart)',
    points: [
      'Contributed to the development and testing of a live client project for Phoneworld (SR Mart).',
      'Assisted in implementing web application features and backend functionality as part of a full-stack development team.',
      'Collaborated with student developers and faculty/industry mentors to understand requirements and deliver project tasks on schedule.',
      'Participated in software testing, debugging, and application workflow validation to ensure quality assurance.',
      'Gained practical experience working with direct client requirements and real-world software engineering lifecycles.'
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'Software Testing', 'Workflow Validation', 'REST APIs']
  }
];

export type EducationItem = {
  degree: string;
  specialization: string;
  institution: string;
  period: string;
  score?: string;
  notes: string[];
};

export const educationList: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    specialization: 'Cyber Security',
    institution: 'MIT ADT University',
    period: 'Expected 2027',
    notes: ['Pursuing advanced cybersecurity systems, enterprise defense, and modern software architecture.']
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    specialization: 'Cyber Security',
    institution: 'Parul University',
    period: '2022 – 2025',
    score: 'CGPA: 7.91 / 10',
    notes: ['Specialized in cybersecurity fundamentals, network protocols, secure application development, and Linux.']
  },
  {
    degree: 'Senior Secondary (XII), Science (PCB)',
    specialization: 'Science',
    institution: 'Kendriya Vidyalaya, Barwani, MP (CBSE)',
    period: '2022',
    score: 'Aggregate: 69.6%',
    notes: []
  }
];

export interface PhilosophyPrinciple {
  title: string;
  tagline: string;
  desc: string;
  icon: 'shield' | 'code' | 'activity';
  tag: string;
  bullets: string[];
}

export const philosophies: PhilosophyPrinciple[] = [
  {
    title: 'Defense-in-Depth Architecture',
    tagline: 'Security is an architectural foundation, never an afterthought.',
    desc: 'Assuming threat actors will test every entry point. Enforcing granular controls, encrypted JWT payloads, salted bcrypt hashing, and strict role-based access limits at every API tier.',
    icon: 'shield',
    tag: 'Proactive Defense',
    bullets: ['Strict perimeter authentication', 'Sanitized inputs & SQL injection prevention', 'Least-privilege authorization']
  },
  {
    title: 'Resilient Full-Stack Systems',
    tagline: 'High speed and reliability backed by clean, scalable engineering.',
    desc: 'Connecting dynamic client interfaces (React.js) with modular backends (FastAPI & Express) and resilient databases (MySQL & MongoDB), validated through systematic QA workflows.',
    icon: 'code',
    tag: 'Reliability Engineering',
    bullets: ['RESTful API contract validation', 'Modular and maintainable components', 'Real-world client software delivery']
  },
  {
    title: 'Continuous Telemetry & Auditing',
    tagline: 'You cannot secure what you cannot observe.',
    desc: 'Leveraging active network inspection (Wireshark), port scanning, and structured log audits to anticipate vulnerabilities and eliminate attack surfaces before deployment.',
    icon: 'activity',
    tag: 'Threat Intelligence',
    bullets: ['Packet & protocol inspection', 'Multi-threaded socket scanning', 'System event log auditing']
  }
];

export interface JourneyMilestone {
  year: string;
  title: string;
  organization: string;
  badge: string;
  highlight: string;
  details: string;
  type: 'academic' | 'experience' | 'milestone';
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: '2025 – 2027',
    title: 'Master of Computer Applications (MCA) in Cyber Security',
    organization: 'MIT ADT University, Pune',
    badge: 'Advanced Postgrad',
    highlight: 'Advanced Enterprise Defense, Cloud Infrastructure & Resilient System Design',
    details: 'Expanding research and practical engineering in proactive defense, cloud security architectures, and advanced vulnerability engineering.',
    type: 'academic'
  },
  {
    year: 'Dec 2024 – Apr 2025',
    title: 'Summer Internship Trainee — Phoneworld Client Delivery',
    organization: 'Parul University Consultancy Unit (FITCS Dept)',
    badge: 'Industry Trainee',
    highlight: 'Full-Stack Web Development, Workflow Validation & Direct Client Delivery',
    details: 'Collaborated in developing and testing the live web application for Phoneworld (SR Mart), validating workflows, QA testing, and backend REST APIs.',
    type: 'experience'
  },
  {
    year: '2022 – 2025',
    title: 'Bachelor of Computer Applications (BCA) in Cyber Security',
    organization: 'Parul University, Vadodara',
    badge: '7.91 / 10 CGPA',
    highlight: 'Core Cybersecurity, Network Security, Java, Python & Linux Environments',
    details: 'Graduated with high distinction (7.91 CGPA). Built foundational security projects including the Python port scanner, MERN library system, and AI Smart Wardrobe.',
    type: 'academic'
  },
  {
    year: '2022',
    title: 'Senior Secondary (XII) — Science (PCB)',
    organization: 'Kendriya Vidyalaya, Barwani, MP (CBSE)',
    badge: 'Foundation',
    highlight: 'Scientific Foundations, Analytical Reasoning & Computing Curiosity',
    details: 'Completed CBSE senior secondary curriculum (69.6% aggregate) with a passion for computer architectures, network protocols, and software logic.',
    type: 'milestone'
  }
];
