import { useEffect, useRef } from 'react';
import { ArrowRight, ShieldCheck, Award, Code2, ChevronDown, FolderGit2, Download } from 'lucide-react';
import CyberTerminal from '../components/CyberTerminal';
import { profile } from '../data/portfolio';

export default function Hero() {
  const art = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = art.current;
    const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || !ok) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty('--px', `${(x * 8).toFixed(1)}px`);
        el.style.setProperty('--py', `${(y * 6).toFixed(1)}px`);
        el.style.setProperty('--rx', `${(x * -5).toFixed(1)}deg`);
        el.style.setProperty('--ry', `${(y * 5).toFixed(1)}deg`);
      });
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.removeEventListener('pointermove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="pulse-indicator" />
            <span>Available for Cybersecurity & Tech Roles</span>
          </div>

          <h1 id="hero-title" className="display">
            Securing Systems. <span className="grad">Building Solutions.</span>
          </h1>

          <p className="lead">
            I'm <strong>{profile.name}</strong>, a cybersecurity-focused MCA student at MIT ADT University and BCA Cybersecurity graduate (Parul University, 7.91 CGPA) with hands-on client engineering experience.
          </p>

          <p className="muted hero-p">
            I bridge defensive security (threat analysis, vulnerability tooling, network protocols) with modern software engineering (React, Node.js, Python FastAPI, OpenCV, MySQL, MongoDB).
          </p>

          {/* Stat Badges */}
          <div className="hero-stats">
            <div className="stat-badge">
              <Award size={18} className="stat-icon" />
              <div>
                <strong>10+ Certifications</strong>
                <span>IBM, Meta, Google Cloud</span>
              </div>
            </div>
            <div className="stat-badge">
              <ShieldCheck size={18} className="stat-icon" />
              <div>
                <strong>MCA & BCA Cyber Sec</strong>
                <span>MIT ADT & Parul Univ</span>
              </div>
            </div>
            <div className="stat-badge">
              <Code2 size={18} className="stat-icon" />
              <div>
                <strong>Client Experience</strong>
                <span>Phoneworld Internship</span>
              </div>
            </div>
          </div>

          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href="#credentials" className="btn btn-ghost">
              <Award size={18} /> View Certificates
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} download="Sudhanshu_Chouhan_Resume.pdf" className="btn btn-ghost" aria-label="Download Resume PDF">
                <Download size={18} /> Resume
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <FolderGit2 size={18} /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Interactive Cyber Terminal Window */}
        <div className="hero-art hero-terminal-wrapper" ref={art}>
          <CyberTerminal />
        </div>
      </div>

      <a href="#about" className="scroll-ind" aria-label="Scroll to About section">
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
