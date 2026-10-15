import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import SkillsMatrix from '../components/SkillsMatrix';
import AboutInteractive from '../components/AboutInteractive';
import { educationList, experiences, profile } from '../data/portfolio';

export function SectionHead({ label, title, id }: { label: string; title: string; id: string }) {
  return (
    <Reveal>
      <p className="eyebrow">{label}</p>
      <h2 id={id} className="h2">{title}</h2>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div>
            <SectionHead label="About Me" title="From Curiosity to a More Secure Internet." id="about-title" />
            <Reveal delay={80}>
              <p className="body">
                I am a Cybersecurity-focused MCA student at <strong>MIT ADT University</strong> with a Bachelor of Computer Applications in Cybersecurity from <strong>Parul University (CGPA: 7.91 / 10)</strong>.
              </p>
              <p className="body">
                My technical foundation spans hands-on experience in <strong>Java, Python, SQL, and networking</strong>, backed by verified credentials from <strong>IBM, Meta, and Google Cloud</strong>. I have real-world engineering experience from contributing to a live client project for Phoneworld (SR Mart) during my 4-month university consultancy internship, and engineering <em>Smart Wardrobe</em>, an AI-powered outfit recommendation platform.
              </p>
              <p className="body">
                My objective is to leverage my dual skills in cybersecurity and full-stack software development to build robust, secure, and user-centric systems.
              </p>
              <ul className="chips" aria-label="Core focus areas">
                {['Cybersecurity & Defense', 'MERN Stack Development', 'Python (FastAPI & OpenCV)', 'Java & OOP', 'MySQL & Relational DBs', 'Software Testing & QA'].map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="about-art" delay={120}>
            <svg viewBox="0 0 400 400" role="img" aria-label="Illustration of a shield with a keyhole surrounded by network nodes">
              <defs>
                <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
                  <stop stopColor="#F5AA32" />
                  <stop offset="1" stopColor="#E87945" />
                </linearGradient>
              </defs>
              <g fill="none" stroke="#A78BFA" strokeOpacity=".5">
                <circle cx="200" cy="200" r="170" strokeDasharray="3 8" />
                <circle cx="200" cy="200" r="130" />
                <path d="M200 30 L60 120 M200 30 L340 120 M60 280 L200 370 M340 280 L200 370 M60 120 L60 280 M340 120 L340 280" opacity=".5" />
              </g>
              <g fill="#A78BFA">
                {[[200, 30], [60, 120], [340, 120], [60, 280], [340, 280], [200, 370]].map(([x, y]) => (
                  <circle key={`${x}${y}`} cx={x} cy={y} r="6" />
                ))}
              </g>
              <path d="M200 100 L290 135 V210 C290 262 250 295 200 312 C150 295 110 262 110 210 V135 Z" fill="#171325" stroke="url(#sg)" strokeWidth="3" />
              <circle cx="200" cy="195" r="20" fill="none" stroke="url(#sg)" strokeWidth="5" />
              <path d="M200 215 V252" stroke="url(#sg)" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </Reveal>
        </div>

        <AboutInteractive />
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead label="Technical Capabilities" title="Hands-On Proficiency & Defense Engineering." id="skills-title" />
        <SkillsMatrix />
        <p className="note">Verified technical capabilities practiced through Parul University coursework (CGPA 7.91), Phoneworld client project, and authorized cybersecurity laboratories.</p>
      </div>
    </section>
  );
}

export function Experience() {
  if (!experiences.length) return null;
  return (
    <section id="experience" className="section" aria-labelledby="exp-title">
      <div className="container">
        <SectionHead label="Work Experience" title="Practical Engineering Experience." id="exp-title" />
        <div className="exp-grid">
          {experiences.map((exp, idx) => (
            <Reveal key={exp.role} className="card exp-card" delay={idx * 80}>
              <div className="exp-header">
                <span className="icon-tile"><Briefcase size={22} /></span>
                <div>
                  <div className="exp-role-row">
                    <h3>{exp.role}</h3>
                    <span className="exp-badge">{exp.duration}</span>
                  </div>
                  <p className="exp-org">{exp.organization} • <span className="muted">{exp.unit}</span></p>
                  <p className="muted sm">{exp.period} • {exp.location}</p>
                </div>
              </div>

              <div className="exp-client-tag">
                <span className="label">Client Project:</span> <strong>{exp.clientProject}</strong>
              </div>

              <ul className="exp-points">
                {exp.points.map((pt, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="exp-bullet-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-stack">
                <span className="label">Technologies:</span>
                <ul className="chips sm">
                  {exp.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="edu-title">
      <div className="container">
        <SectionHead label="Education" title="The Academic Foundation." id="edu-title" />
        <div className="edu-list">
          {educationList.map((e, idx) => (
            <Reveal key={e.degree} className="card edu-card" delay={idx * 80}>
              <span className="icon-tile"><GraduationCap size={24} /></span>
              <div className="edu-main">
                <div className="edu-top-row">
                  <h3>{e.degree}</h3>
                  <span className="edu-period">{e.period}</span>
                </div>
                <p className="edu-spec">
                  Specialization: <strong>{e.specialization}</strong>
                  {e.score && <span className="edu-score"> • <strong>{e.score}</strong></span>}
                </p>
                <p className="muted">{e.institution}</p>
                {e.notes.length > 0 && (
                  <ul className="skill-list edu-notes">
                    {e.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="edu-loc muted">{profile.location}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
