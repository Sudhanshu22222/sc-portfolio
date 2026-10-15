export type Credential = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  skills?: string[];
};

export type Insight = {
  title: string;
  summary: string;
  date: string;
  tags: string[];
  url?: string;
};

// Verified Credentials from IBM, Meta, Google Cloud, UC Davis, UMich, DeepLearning.AI, LearnQuest
export const credentials: Credential[] = [
  {
    title: 'Introduction to Cybersecurity Essentials',
    issuer: 'IBM (via Coursera)',
    date: 'Nov 2025',
    skills: ['Cybersecurity Essentials', 'Threat Vectors', 'Security Governance', 'Incident Response']
  },
  {
    title: 'Introduction to Cybersecurity Tools & Cyberattacks',
    issuer: 'IBM (via Coursera)',
    date: 'May 2026',
    skills: ['Cyberattacks', 'Security Tooling', 'Vulnerability Assessment', 'Defensive Tactics']
  },
  {
    title: 'Introduction to Networking and Storage',
    issuer: 'IBM (via Coursera)',
    date: 'Nov 2025',
    skills: ['Network Architecture', 'Storage Protocols', 'IP Addressing', 'Network Infrastructure']
  },
  {
    title: 'Database Structures and Management with MySQL',
    issuer: 'Meta (via Coursera)',
    date: 'Oct 2026',
    url: 'https://coursera.org/verify/WVHQKAR2WIOS',
    skills: ['MySQL', 'Relational Databases', 'Database Design', 'SQL Queries', 'Data Integrity']
  },
  {
    title: 'SQL for Data Science',
    issuer: 'University of California, Davis (via Coursera)',
    date: 'Dec 2025',
    skills: ['SQL', 'Data Science', 'Data Filtering', 'Complex Queries', 'Aggregations']
  },
  {
    title: 'Python Data Structures',
    issuer: 'University of Michigan (via Coursera)',
    date: 'Nov 2025',
    skills: ['Python', 'Data Structures', 'Dictionaries & Tuples', 'List Comprehensions', 'Algorithmic Thinking']
  },
  {
    title: 'Introduction to Java',
    issuer: 'LearnQuest (via Coursera)',
    date: 'May 2026',
    url: 'https://coursera.org/verify/80MJMSCFVGTT',
    skills: ['Java', 'Object-Oriented Programming (OOP)', 'Software Architecture', 'Data Structures']
  },
  {
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM (via Coursera)',
    date: 'Oct 2026',
    url: 'https://coursera.org/verify/MO4VT3M1BYIU',
    skills: ['Generative AI', 'Prompt Engineering', 'AI Applications', 'LLMs', 'AI Ethics']
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud (via Coursera)',
    date: 'Oct 2026',
    url: 'https://coursera.org/verify/YHEXQ123UL6H',
    skills: ['Google Cloud', 'Generative AI', 'Machine Learning Concepts', 'Cloud AI Solutions']
  },
  {
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI (Andrew Ng via Coursera)',
    date: 'Oct 2026',
    url: 'https://coursera.org/verify/EWLFD5NASY7K',
    skills: ['AI Strategy', 'DeepLearning.AI', 'Generative AI Workflow', 'Technology Transformation']
  }
];

// Study notes & hands-on authorized lab write-ups
export const insights: Insight[] = [
  {
    title: 'Network Traffic & Packet Capture Analysis with Wireshark',
    summary: 'Practical teardown of TCP handshakes, ARP poisoning indicators, and anomalous traffic streams in isolated test subnets.',
    date: '2026',
    tags: ['Wireshark', 'Packet Analysis', 'Network Protocols', 'Defense'],
  },
  {
    title: 'Linux Hardening & User Privilege Access Controls',
    summary: 'Best practices for securing Linux servers: SSH key-only authentication, sudoers privilege restrictions, and systemd service sandboxing.',
    date: '2026',
    tags: ['Linux', 'Server Hardening', 'Access Control', 'Bash'],
  }
];
