import { useState } from 'react';
import { 
  ShieldCheck, 
  Code2, 
  Wrench, 
  ExternalLink, 
  GitBranch, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { skillMetrics, githubTelemetry, SkillCategory } from '../data/portfolio';

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = activeCategory === 'all' 
    ? skillMetrics 
    : skillMetrics.filter(s => s.category === activeCategory);

  const categoryTabs = [
    { id: 'all' as SkillCategory, label: 'All Disciplines', count: skillMetrics.length },
    { id: 'cyber' as SkillCategory, label: 'Cybersecurity & Defense', count: skillMetrics.filter(s => s.category === 'cyber').length },
    { id: 'dev' as SkillCategory, label: 'Development & Full-Stack', count: skillMetrics.filter(s => s.category === 'dev').length },
    { id: 'tools' as SkillCategory, label: 'Databases & Core Tools', count: skillMetrics.filter(s => s.category === 'tools').length },
  ];

  return (
    <div className="skills-matrix-wrap">
      {/* Category filter tabs */}
      <div className="skills-filter-bar" role="tablist" aria-label="Skill categories">
        {categoryTabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeCategory === tab.id}
            className={`skill-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(tab.id)}
          >
            {tab.id === 'cyber' && <ShieldCheck size={16} className="tab-icon" />}
            {tab.id === 'dev' && <Code2 size={16} className="tab-icon" />}
            {tab.id === 'tools' && <Wrench size={16} className="tab-icon" />}
            {tab.id === 'all' && <Layers size={16} className="tab-icon" />}
            <span>{tab.label}</span>
            <span className="tab-count">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Main Grid: Skills Progress Column + GitHub Activity Bento Column */}
      <div className="skills-bento-grid">
        {/* Left Column: Interactive Skill Progress Bars */}
        <div className="skills-progress-card card">
          <div className="spc-header">
            <div>
              <span className="spc-eyebrow">Technical Proficiency Matrix</span>
              <h3 className="spc-title">Hands-on Competency & Practice</h3>
            </div>
            <span className="spc-count-pill">{filteredSkills.length} Verified Areas</span>
          </div>

          <div className="skills-meter-list">
            {filteredSkills.map((skill, idx) => (
              <div key={skill.name} className="skill-meter-item" style={{ animationDelay: `${idx * 40}ms` }}>
                <div className="smi-top">
                  <div className="smi-info">
                    <span className="smi-name">{skill.name}</span>
                    <span className="smi-highlight">{skill.highlight}</span>
                  </div>
                  <div className="smi-badge-wrap">
                    <span className={`smi-level-pill ${skill.levelLabel.toLowerCase()}`}>
                      {skill.levelLabel}
                    </span>
                    <span className="smi-percent">{skill.level}%</span>
                  </div>
                </div>

                {/* Meter Bar */}
                <div className="meter-track" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={skill.name}>
                  <div 
                    className={`meter-fill ${skill.category}`} 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="skills-footer-note">
            <CheckCircle2 size={15} className="sfn-icon" />
            <span>Ratings benchmarked against Parul Univ coursework (7.91 CGPA), client delivery & verified credentials.</span>
          </div>
        </div>

        {/* Right Column: Live GitHub Activity & Telemetry Bento */}
        <div className="github-bento-card card">
          {/* GitHub Header */}
          <div className="gh-header">
            <div className="gh-id-block">
              <div className="gh-avatar-placeholder">
                <GitBranch size={22} className="gh-git-icon" />
              </div>
              <div>
                <span className="gh-label">GitHub Telemetry</span>
                <h3 className="gh-user">@{githubTelemetry.username}</h3>
              </div>
            </div>

            <a 
              href={githubTelemetry.profileUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-ghost btn-sm gh-profile-link"
              aria-label="Visit Sudhanshu's GitHub Profile"
            >
              <span>GitHub</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="gh-metrics-row">
            <div className="gh-metric-chip">
              <span className="gh-metric-val">{githubTelemetry.repositoriesCount}</span>
              <span className="gh-metric-label">Repositories</span>
            </div>
            <div className="gh-metric-chip">
              <span className="gh-metric-val">{githubTelemetry.certificationsCount}</span>
              <span className="gh-metric-label">Credentials</span>
            </div>
            <div className="gh-metric-chip">
              <span className="gh-metric-val">1 Client</span>
              <span className="gh-metric-label">Phoneworld</span>
            </div>
          </div>

          {/* Primary Stacks Tags */}
          <div className="gh-stacks-wrap">
            <span className="gh-stacks-label">Frequent Technologies:</span>
            <div className="gh-stacks-pills">
              {githubTelemetry.primaryStacks.map((st) => (
                <span key={st} className="gh-stack-pill">{st}</span>
              ))}
            </div>
          </div>

          {/* Featured Repository Cards */}
          <div className="gh-repos-list">
            <span className="gh-repos-subhead">Featured Source Code & Projects</span>
            {githubTelemetry.featuredRepos.map((repo) => (
              <a 
                key={repo.name}
                href={repo.url} 
                target="_blank" 
                rel="noreferrer"
                className="gh-repo-card"
              >
                <div className="gh-repo-main">
                  <div className="gh-repo-top">
                    <span className="gh-repo-name">{repo.name}</span>
                    <span className="gh-repo-tag">{repo.tag}</span>
                  </div>
                  <p className="gh-repo-desc">{repo.desc}</p>
                  <div className="gh-repo-bottom">
                    <span className="gh-repo-lang">
                      <span className="lang-dot" style={{ backgroundColor: repo.langColor }} />
                      <span>{repo.language}</span>
                    </span>
                    <span className="gh-repo-view">
                      <span>View Code</span>
                      <ExternalLink size={12} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Security & QA Status Footer */}
          <div className="gh-card-footer">
            <div className="gh-status-stream">
              <span className="pulse-indicator" />
              <span>Version Controlled & Clean Security Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
