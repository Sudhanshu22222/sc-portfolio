import { useState } from 'react';
import { Award, BookOpen, ExternalLink, FolderGit2, CheckCircle2, Star, Building2, ShieldCheck, Database, Cpu } from 'lucide-react';
import Reveal from '../components/Reveal';
import { SectionHead } from './Content';
import ProjectVisual from '../components/ProjectVisual';
import ProjectModal from '../components/ProjectModal';
import { projects, type Project } from '../data/projects';
import { credentials, insights } from '../data/certifications';

function getProjectBadge(slug: string, featured?: boolean) {
  if (featured) return { label: 'Featured AI Project', icon: Star, color: 'badge-gold' };
  if (slug === 'phoneworld-sr-mart') return { label: 'Live Client Deliverable', icon: Building2, color: 'badge-purple' };
  if (slug === 'network-vulnerability-scanner') return { label: 'Cybersecurity Utility', icon: ShieldCheck, color: 'badge-cyber' };
  return { label: 'Full-Stack MERN System', icon: Database, color: 'badge-blue' };
}

function ProjectCard({ p, big, onSelect }: { p: Project; big?: boolean; onSelect: (p: Project) => void }) {
  const badge = getProjectBadge(p.slug, p.featured);
  const BadgeIcon = badge.icon;

  return (
    <Reveal className={`card project ${big ? 'featured' : ''}`}>
      <div className="project-visual-wrap" onClick={() => onSelect(p)} style={{ cursor: 'pointer' }} role="button" aria-label={`View deep-dive details for ${p.title}`}>
        {p.image ? (
          <img src={p.image} alt={`Screenshot of ${p.title}`} loading="lazy" className="shot" />
        ) : (
          <ProjectVisual slug={p.slug} title={p.title} />
        )}
      </div>

      <div className="project-body">
        <div className="proj-top-meta">
          <span className={`proj-status-badge ${badge.color}`}>
            <BadgeIcon size={12} /> {badge.label}
          </span>
          <span className="eyebrow sm">{p.category}</span>
        </div>

        <h3>{p.title}</h3>

        <dl className="pdl">
          <dt>Problem</dt>
          <dd>{p.problem}</dd>
          <dt>Solution</dt>
          <dd>{p.solution}</dd>
          <dt>My Contribution</dt>
          <dd>{p.contribution}</dd>
          {p.outcomes?.length ? (
            <>
              <dt>Key Technical Outcomes</dt>
              <dd>
                <ul className="proj-outcomes-list">
                  {p.outcomes.map((o, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} className="outcome-icon" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </>
          ) : null}
        </dl>

        <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>

        <div className="links">
          <button type="button" className="btn btn-primary sm" onClick={() => onSelect(p)}>
            <Cpu size={16} /> Architecture & Details
          </button>
          {p.github && (
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost sm">
              <FolderGit2 size={16} /> Code
            </a>
          )}
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost sm">
              <ExternalLink size={16} /> Demo
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const list = projects.filter((p) => p.published);
  const featured = list.find((p) => p.featured) ?? list[0];
  const rest = list.filter((p) => p !== featured);

  return (
    <section id="projects" className="section" aria-labelledby="proj-title">
      <div className="container">
        <SectionHead label="Selected Work" title="Solutions Built With Purpose." id="proj-title" />
        <div className="proj-grid">
          {featured && <ProjectCard p={featured} big onSelect={setSelectedProject} />}
          {rest.map((p) => (
            <ProjectCard key={p.slug} p={p} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* Project Deep-Dive Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

export function Credentials() {
  if (!credentials.length) return null;
  return (
    <section id="credentials" className="section" aria-labelledby="cred-title">
      <div className="container">
        <SectionHead label="Credentials & Certifications" title="Verified Continuous Learning." id="cred-title" />
        <div className="cards3">
          {credentials.map((c) => (
            <Reveal key={c.title} className="card cred-card">
              <div className="cred-top">
                <span className="icon-tile sm"><Award size={20} /></span>
                <span className="cred-date">{c.date}</span>
              </div>
              <h3>{c.title}</h3>
              <p className="muted sm">{c.issuer}</p>
              {c.skills && (
                <ul className="chips sm">
                  {c.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}
              {c.url && (
                <div className="links">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="verify-link">
                    <ExternalLink size={14} /> Verify Credential
                  </a>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  if (!insights.length) return null;
  return (
    <section id="insights" className="section" aria-labelledby="ins-title">
      <div className="container">
        <SectionHead label="Technical Insights" title="Notes From the Security Lab." id="ins-title" />
        <p className="note" style={{ marginBottom: '28px' }}>
          Personal learning labs in authorized environments, focusing on defensive forensics, network telemetry, and system hardening.
        </p>
        <div className="cards3">
          {insights.map((i) => (
            <Reveal key={i.title} className="card insight-card">
              <div className="cred-top">
                <span className="icon-tile sm"><BookOpen size={20} /></span>
                <span className="cred-date">{i.date}</span>
              </div>
              <h3>{i.title}</h3>
              <p className="muted body-sm">{i.summary}</p>
              <ul className="chips sm">
                {i.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {i.url && (
                <div className="links">
                  <a href={i.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> Read Notes
                  </a>
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
