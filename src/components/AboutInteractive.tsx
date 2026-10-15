import { useState } from 'react';
import { 
  ShieldCheck, 
  Code2, 
  Activity, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Sparkles,
  Milestone,
  ArrowRight
} from 'lucide-react';
import { philosophies, journeyMilestones } from '../data/portfolio';

export default function AboutInteractive() {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'timeline'>('philosophy');

  const icons = {
    shield: ShieldCheck,
    code: Code2,
    activity: Activity,
  };

  return (
    <div className="about-interactive-wrap">
      {/* Sub-navigation tabs */}
      <div className="about-tab-bar" role="tablist" aria-label="About perspective selector">
        <button
          role="tab"
          aria-selected={activeTab === 'philosophy'}
          className={`about-tab-btn ${activeTab === 'philosophy' ? 'active' : ''}`}
          onClick={() => setActiveTab('philosophy')}
        >
          <Sparkles size={16} className="about-tab-icon" />
          <span>Engineering Philosophy</span>
          <span className="about-tab-badge">3 Pillars</span>
        </button>

        <button
          role="tab"
          aria-selected={activeTab === 'timeline'}
          className={`about-tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
          onClick={() => setActiveTab('timeline')}
        >
          <Milestone size={16} className="about-tab-icon" />
          <span>Journey Milestones</span>
          <span className="about-tab-badge">2022 – 2027</span>
        </button>
      </div>

      {/* Philosophy View */}
      {activeTab === 'philosophy' && (
        <div className="philosophy-grid">
          {philosophies.map((p, idx) => {
            const Icon = icons[p.icon];
            return (
              <div key={p.title} className="card philosophy-card" style={{ animationDelay: `${idx * 60}ms` }}>
                <div className="ph-card-top">
                  <span className="icon-tile sm">
                    <Icon size={20} />
                  </span>
                  <span className="ph-tag">{p.tag}</span>
                </div>

                <h3 className="ph-title">{p.title}</h3>
                <p className="ph-tagline">{p.tagline}</p>
                <p className="ph-desc">{p.desc}</p>

                <ul className="ph-bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>
                      <CheckCircle2 size={15} className="ph-bullet-icon" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {/* Timeline View */}
      {activeTab === 'timeline' && (
        <div className="milestones-timeline-wrap card">
          <div className="timeline-header">
            <div>
              <span className="spc-eyebrow">Academic & Professional Trajectory</span>
              <h3 className="spc-title">Continuous Progression in Cyber Systems</h3>
            </div>
            <span className="exp-badge">Verified Track Record</span>
          </div>

          <div className="timeline-track">
            {journeyMilestones.map((m, idx) => {
              const isAcademic = m.type === 'academic';
              const isExperience = m.type === 'experience';
              return (
                <div key={m.title} className="timeline-node-item" style={{ animationDelay: `${idx * 70}ms` }}>
                  {/* Left Column: Date & Badge */}
                  <div className="tni-marker-col">
                    <div className="tni-icon-wrap">
                      {isAcademic && <GraduationCap size={16} />}
                      {isExperience && <Briefcase size={16} />}
                      {!isAcademic && !isExperience && <Milestone size={16} />}
                    </div>
                    <div className="tni-line" />
                  </div>

                  {/* Content Box */}
                  <div className="tni-content-card">
                    <div className="tni-header-row">
                      <div className="tni-title-wrap">
                        <span className="tni-year">{m.year}</span>
                        <h4 className="tni-title">{m.title}</h4>
                        <p className="tni-org">{m.organization}</p>
                      </div>
                      <span className={`tni-badge ${isAcademic ? 'academic' : isExperience ? 'client' : 'foundation'}`}>
                        {m.badge}
                      </span>
                    </div>

                    <div className="tni-highlight-box">
                      <ArrowRight size={14} className="tni-arrow" />
                      <span>{m.highlight}</span>
                    </div>

                    <p className="tni-desc">{m.details}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
