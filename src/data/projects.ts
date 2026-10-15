export type Project = {
  slug: string;
  published: boolean;
  featured?: boolean;
  title: string;
  category: string;
  problem: string;
  solution: string;
  contribution: string;
  stack: string[];
  image?: string;
  github?: string;
  demo?: string;
  outcomes?: string[];
  architecture?: string[];
  securityHighlights?: string[];
  challenges?: string[];
};

export const projects: Project[] = [
  {
    slug: 'smart-wardrobe-ai',
    published: true,
    featured: true,
    title: 'Smart Wardrobe — AI-Powered Outfit Recommendation Platform',
    category: 'Full-Stack & AI Recommendation Engine',
    problem: 'Users struggle with keeping track of wardrobe inventory and getting smart personalized clothing suggestions matching color harmony, style, occasion, and seasonal trends.',
    solution: 'Built a full-stack web application enabling users to upload and catalog clothing items and receive AI-generated outfit recommendations powered by a Python FastAPI microservice using OpenCV and rule-based intelligence.',
    contribution: 'Developed the responsive frontend with React.js and Tailwind CSS with JWT protected routes; built REST APIs with Node.js/Express; designed MongoDB schemas for wardrobe data; integrated the Python OpenCV microservice; and implemented secure Cloudinary image uploading.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python (FastAPI, OpenCV)', 'Tailwind CSS', 'JWT', 'Cloudinary'],
    github: 'https://github.com/Sudhanshu22222/Smart-wardrobe',
    outcomes: [
      'Interactive AI outfit recommendation engine based on color harmony, style, and season',
      'Secure authentication with JWT and bcrypt password hashing',
      'Automated image processing and Cloudinary media storage pipeline',
      'Responsive, mobile-friendly interface with instant search and filtering'
    ],
    architecture: [
      'Frontend: React.js single-page application with Tailwind CSS & JWT route protection',
      'Backend API: Express/Node.js handling auth, user profiles, and wardrobe inventory',
      'AI Microservice: Python FastAPI server utilizing OpenCV for RGB/HSV color space extraction and rule-based outfit harmony matching',
      'Storage & CDN: MongoDB Atlas database for document storage and Cloudinary for optimized media delivery'
    ],
    securityHighlights: [
      'Stateless JSON Web Tokens (JWT) with signature validation on protected routes',
      'Bcrypt salted hashing (10 salt rounds) for user credential protection',
      'CORS policy restrictions between React client and FastAPI microservice',
      'Input sanitization preventing NoSQL query injection attacks'
    ],
    challenges: [
      'Accurately identifying dominant clothing colors across varied lighting conditions using OpenCV color quantization',
      'Structuring clean asynchronous inter-service communication between Express.js and the Python FastAPI engine'
    ]
  },
  {
    slug: 'phoneworld-sr-mart',
    published: true,
    title: 'Phoneworld (SR Mart) — Live Client Enterprise Web Project',
    category: 'Live Client Project (Parul University Consultancy Unit)',
    problem: 'Retail client required an efficient web platform to streamline inventory management, validate commercial workflows, and improve daily transaction operations.',
    solution: 'Contributed to the full-stack web engineering and comprehensive quality assurance testing for Phoneworld (SR Mart) within the university consultancy unit.',
    contribution: 'Assisted in implementing web application features and backend logic as part of the core development team, collaborated with faculty mentors and client reps, and conducted software testing and bug triage.',
    stack: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Software Testing', 'Workflow Validation'],
    outcomes: [
      'Successfully deployed functional application modules for live client testing',
      'Executed systematic software testing, debugging, and edge-case verification',
      'Hands-on experience delivering according to real-world commercial requirements'
    ],
    architecture: [
      'Frontend: Component-driven React UI structured for retail cashier and manager views',
      'Backend: Node.js & Express RESTful API managing product catalog, inventory records, and sales receipts',
      'Quality Assurance: Comprehensive test suites ensuring transaction integrity and validation across edge cases'
    ],
    securityHighlights: [
      'Strict input validation and payload bounds on transaction endpoints',
      'Role-based permissions separating manager operations from cashier actions',
      'Environment-isolated secret keys for database connections and API tokens'
    ],
    challenges: [
      'Translating dynamic commercial client requirements into rigid software specifications under tight development deadlines',
      'Validating complex inventory edge cases where simultaneous stock updates occurred'
    ]
  },
  {
    slug: 'library-management-system-mern',
    published: true,
    title: 'Library Management System (MERN Stack)',
    category: 'Full-Stack Web Application',
    problem: 'Educational institutions require an organized, secure system to manage catalog inventory, student book reservations, and overdue tracking with role access controls.',
    solution: 'Developed a comprehensive full-stack management web platform featuring JWT authentication, role-based dashboards (Admin & Member), and automated borrowing status.',
    contribution: 'Constructed RESTful API endpoints using Node.js & Express, established MongoDB schemas, and integrated JWT authentication with protected routes in React.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST API'],
    github: 'https://github.com/Sudhanshu22222/Library-Management-System-MERN',
    outcomes: [
      'Role-based access control (Admin vs Student)',
      'Secure password hashing with bcrypt and JWT sessions',
      'Real-time book availability and issue/return ledger'
    ],
    architecture: [
      'Client Layer: Modular React component tree (Catalog, Member Dashboard, Admin Console)',
      'API Layer: Express.js REST router with auth, books, and borrowing transaction controllers',
      'Data Layer: MongoDB document collections with normalized relational references for loan records'
    ],
    securityHighlights: [
      'Bearer token authorization header validation middleware on all mutation endpoints',
      'Role-Based Access Control (RBAC) preventing students from modifying catalog records',
      'Rate limiting on login routes to prevent brute-force credential stuffing'
    ],
    challenges: [
      'Preventing simultaneous checkout race conditions when book inventory reached 1 copy',
      'Automating overdue penalty calculation logic dynamically based on checkout timestamps'
    ]
  },
  {
    slug: 'network-vulnerability-scanner',
    published: true,
    title: 'Network Vulnerability Scanner & Security Audit Tool',
    category: 'Cybersecurity Utility',
    problem: 'Manual network audits are time-consuming and often miss open vulnerable ports and unauthorized hosts across local subnets.',
    solution: 'Engineered a multi-threaded network scanner in Python that scans target IP ranges, inspects active hosts, detects open services, and flags potential security weaknesses.',
    contribution: 'Designed raw socket routines, implemented concurrent scanning workers, created banner-grabbing detection, and generated structured JSON/CSV audit reports.',
    stack: ['Python', 'Socket Programming', 'Scapy', 'Linux', 'Network Protocols', 'Security Auditing'],
    github: 'https://github.com/Sudhanshu22222',
    outcomes: [
      'Multi-threaded concurrent scanning across CIDR subnets',
      'Banner grabbing for service identification',
      'Automated structured report generation for security audits'
    ],
    architecture: [
      'Reconnaissance Engine: Python socket-based discovery engine scanning TCP/UDP ports',
      'Concurrency Layer: Thread pool workers executing parallel non-blocking port handshakes',
      'Fingerprint Engine: Banner-grabbing heuristics parsing service daemons and version strings',
      'Export Pipeline: Structured data formatting exporting audit reports in JSON and CSV formats'
    ],
    securityHighlights: [
      'Configurable socket timeouts preventing socket exhaustion and hung connections',
      'Controlled rate-limiting parameters preventing inadvertent network denial-of-service during audits',
      'Designed strictly for authorized security baseline assessments and lab verification'
    ],
    challenges: [
      'Balancing high-speed multi-threaded socket polling against packet loss over wireless networks',
      'Handling non-standard daemon banners that fail standard HTTP/SSH handshake protocols'
    ]
  }
];
