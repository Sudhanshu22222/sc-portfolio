import { useEffect } from 'react';
import { X, ExternalLink, FolderGit2, ShieldCheck, Cpu, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { type Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="eyebrow sm">{project.category}</span>
            <h2 id="modal-title" className="modal-title">{project.title}</h2>
          </div>
          <button className="icon-btn modal-close-btn" onClick={onClose} aria-label="Close project modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Problem & Solution Card */}
          <div className="modal-section-card">
            <div className="modal-section-grid">
              <div>
                <span className="modal-subhead">The Challenge</span>
                <p className="modal-text">{project.problem}</p>
              </div>
              <div>
                <span className="modal-subhead">Engineered Solution</span>
                <p className="modal-text">{project.solution}</p>
              </div>
            </div>
          </div>

          {/* Architecture Breakdown */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="modal-section">
              <div className="modal-section-title">
                <Cpu size={18} className="modal-icon" />
                <h3>System Architecture & Flow</h3>
              </div>
              <ul className="modal-arch-list">
                {project.architecture.map((arch, i) => (
                  <li key={i} className="arch-item">
                    <span className="arch-step-num">0{i + 1}</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Security & Reliability Considerations */}
          {project.securityHighlights && project.securityHighlights.length > 0 && (
            <div className="modal-section">
              <div className="modal-section-title">
                <ShieldCheck size={18} className="modal-icon sec-icon" />
                <h3>Security & Reliability Engineering</h3>
              </div>
              <ul className="modal-sec-list">
                {project.securityHighlights.map((sec, i) => (
                  <li key={i}>
                    <ShieldCheck size={16} className="sec-bullet" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="modal-section">
              <div className="modal-section-title">
                <AlertTriangle size={18} className="modal-icon warn-icon" />
                <h3>Key Technical Challenges</h3>
              </div>
              <ul className="modal-challenges-list">
                {project.challenges.map((c, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="chal-bullet" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack Chips */}
          <div className="modal-section">
            <span className="modal-subhead">Technologies & Libraries</span>
            <ul className="chips">{project.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <div className="modal-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary sm">
                <FolderGit2 size={16} /> GitHub Repository
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost sm">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
          <button type="button" className="btn btn-ghost sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
