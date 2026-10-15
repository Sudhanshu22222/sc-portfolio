import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CheckCircle2, CornerDownLeft, Sparkles } from 'lucide-react';

interface HistoryItem {
  type: 'cmd' | 'output' | 'system';
  text: string;
  isList?: boolean;
  listItems?: string[];
}

export default function CyberTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'system', text: '$ soc-telemetry --init-session' },
    { type: 'output', text: '[+] User: Sudhanshu Chouhan | MCA Cyber Security (MIT ADT) & BCA (Parul Univ, 7.91 CGPA)' },
    { type: 'output', text: '[+] Client Experience: Phoneworld (SR Mart) Full-Stack Trainee (4 Months)' },
    { type: 'output', text: '[+] Credentials: 10+ Certifications (IBM, Meta, Google Cloud, UC Davis, UMich)' },
    { type: 'system', text: 'Type a command below or click the quick action pills:' },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newHistory: HistoryItem[] = [
      ...history,
      { type: 'cmd', text: `$ ${rawCmd}` }
    ];

    switch (cmd) {
      case 'whoami':
        newHistory.push({
          type: 'output',
          text: 'Sudhanshu Chouhan — Cybersecurity MCA Student at MIT ADT University & BCA Cybersecurity graduate from Parul University (CGPA 7.91). Experienced in full-stack web engineering, Python FastAPI/OpenCV microservices, and proactive security defense.'
        });
        break;

      case 'experience':
      case 'internship':
        newHistory.push({
          type: 'output',
          text: 'Summer Internship Trainee — Consultancy Unit, FITCS Dept, Parul University (Dec 2024 – Apr 2025):',
          isList: true,
          listItems: [
            'Client: Contributed to live client enterprise project for Phoneworld (SR Mart)',
            'Engineering: Implemented web application features & Express/Node backend APIs',
            'Quality Assurance: Software testing, debugging, and workflow validation',
            'Collaboration: Mentored by university faculty and industry leads'
          ]
        });
        break;

      case 'certs':
      case 'certifications':
        newHistory.push({
          type: 'output',
          text: '10+ Verified Industry & University Credentials:',
          isList: true,
          listItems: [
            'IBM: Cybersecurity Essentials (Nov 2025)',
            'IBM: Cybersecurity Tools & Cyberattacks (May 2026)',
            'IBM: Networking & Storage (Nov 2025)',
            'Meta: Database Structures & Management with MySQL (Oct 2026)',
            'Google Cloud: Introduction to Generative AI (Oct 2026)',
            'DeepLearning.AI: Generative AI for Everyone (Andrew Ng, Oct 2026)',
            'UC Davis: SQL for Data Science (Dec 2025)',
            'University of Michigan: Python Data Structures (Nov 2025)',
            'LearnQuest: Introduction to Java (May 2026)'
          ]
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: 'Technical Skillsets & Core Stack:',
          isList: true,
          listItems: [
            'Languages: Java, Python, JavaScript, SQL, C/C++ fundamentals',
            'Web Stack: React.js, Node.js, Express.js, Tailwind CSS, REST APIs, JWT',
            'AI / ML: Python (FastAPI, OpenCV), Rule-based recommendation engine',
            'Databases: MongoDB, MySQL / Relational DBs',
            'Cybersecurity: Threat vectors, Vulnerability assessment, Network security, Linux / Kali Linux'
          ]
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: 'Featured Technical Projects:',
          isList: true,
          listItems: [
            '1. Smart Wardrobe — AI-Powered Outfit Recommendation Platform (React, FastAPI, OpenCV, MongoDB, Cloudinary)',
            '2. Phoneworld (SR Mart) — Live Client Web Project (React, Node, Express, Testing)',
            '3. Library Management System — MERN Stack with Role-based JWT Auth',
            '4. Network Vulnerability Scanner & Security Audit Tool — Python & Socket Programming'
          ]
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: 'Contact & Profile Links:',
          isList: true,
          listItems: [
            'Email: sudhanshuchouhan306@gmail.com',
            'Phone: +91 7000393193',
            'GitHub: github.com/Sudhanshu22222',
            'LinkedIn: linkedin.com/in/sudhanshu022',
            'Location: Pune, Maharashtra'
          ]
        });
        break;

      case 'clear':
        setHistory([
          { type: 'system', text: '$ session-cleared' },
          { type: 'output', text: 'Terminal reset. Type "help" or click quick pills.' }
        ]);
        setInput('');
        return;

      case 'help':
        newHistory.push({
          type: 'output',
          text: 'Supported commands: whoami, experience, certs, skills, projects, contact, clear'
        });
        break;

      default:
        newHistory.push({
          type: 'output',
          text: `zsh: command not found: "${cmd}". Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(input);
    }
  };

  return (
    <div className="cyber-terminal-card" role="region" aria-label="Interactive Cybersecurity Terminal">
      {/* Window Title Bar */}
      <div className="terminal-header">
        <div className="terminal-dots" aria-hidden="true">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title">
          <Terminal size={14} className="terminal-icon" />
          <span>sc-terminal@soc-node: ~</span>
        </div>
        <div className="terminal-badge">
          <span className="pulse-indicator" />
          <span>ACTIVE</span>
        </div>
      </div>

      {/* Terminal Output Body */}
      <div className="terminal-body">
        {history.map((item, idx) => (
          <div key={idx} className={`terminal-line line-${item.type}`}>
            {item.type === 'cmd' ? (
              <span className="cmd-text">{item.text}</span>
            ) : item.type === 'system' ? (
              <span className="system-text">
                <Sparkles size={13} className="inline-icon" /> {item.text}
              </span>
            ) : (
              <div>
                <p className="output-text">{item.text}</p>
                {item.isList && item.listItems && (
                  <ul className="terminal-list">
                    {item.listItems.map((li, i) => (
                      <li key={i}>
                        <CheckCircle2 size={13} className="list-check" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Action Commands */}
      <div className="terminal-pills">
        <span className="pills-label">Quick run:</span>
        {['whoami', 'experience', 'certs', 'skills', 'projects', 'contact', 'clear'].map((c) => (
          <button
            key={c}
            type="button"
            className="pill-btn"
            onClick={() => executeCommand(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Input Prompt */}
      <div className="terminal-input-bar">
        <span className="prompt-label">visitor@soc:~$</span>
        <input
          type="text"
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. whoami, certs, experience)..."
          aria-label="Terminal command prompt"
          autoComplete="off"
          spellCheck="false"
        />
        <button
          type="button"
          className="terminal-submit-btn"
          onClick={() => executeCommand(input)}
          aria-label="Execute command"
        >
          <CornerDownLeft size={14} />
        </button>
      </div>
    </div>
  );
}
