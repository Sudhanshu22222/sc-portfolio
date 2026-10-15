import { Cpu, ShieldCheck, Database, Terminal, CheckCircle2, Sparkles, Building2, Layers } from 'lucide-react';

interface ProjectVisualProps {
  slug: string;
  title: string;
}

export default function ProjectVisual({ slug, title }: ProjectVisualProps) {
  if (slug === 'smart-wardrobe-ai') {
    return (
      <div className="proj-visual visual-ai" role="img" aria-label={`Preview graphic for ${title}`}>
        <div className="pv-header">
          <div className="pv-tag"><Sparkles size={13} /> AI Recommendation Engine</div>
          <span className="pv-status live"><span className="pulse-indicator" /> FastAPI Microservice</span>
        </div>
        <div className="pv-body">
          <div className="pv-mockup-card">
            <div className="pv-mockup-top">
              <Cpu size={16} className="pv-icon" />
              <span>OpenCV Color & Contour Analysis</span>
              <span className="pv-metric">98.4% Match</span>
            </div>
            <div className="pv-outfit-preview">
              <div className="outfit-tag active">Color Harmony: Complementary</div>
              <div className="outfit-tag">Weather Engine: Auto-Adjust</div>
              <div className="outfit-tag">Style: Smart Casual</div>
            </div>
            <div className="pv-pipeline-row">
              <span className="pipeline-node">React Client</span>
              <span className="pipeline-arrow">→</span>
              <span className="pipeline-node">Express API</span>
              <span className="pipeline-arrow">→</span>
              <span className="pipeline-node accent">FastAPI + OpenCV</span>
              <span className="pipeline-arrow">→</span>
              <span className="pipeline-node">Cloudinary</span>
            </div>
          </div>
        </div>
        <div className="pv-footer-badge">
          <span>React • FastAPI • OpenCV • MongoDB • JWT</span>
        </div>
      </div>
    );
  }

  if (slug === 'phoneworld-sr-mart') {
    return (
      <div className="proj-visual visual-client" role="img" aria-label={`Preview graphic for ${title}`}>
        <div className="pv-header">
          <div className="pv-tag"><Building2 size={13} /> Live Client Deliverable</div>
          <span className="pv-status verified"><CheckCircle2 size={12} /> Consultancy Unit</span>
        </div>
        <div className="pv-body">
          <div className="pv-mockup-card">
            <div className="pv-mockup-top">
              <Layers size={16} className="pv-icon client-icon" />
              <span>Phoneworld (SR Mart) Enterprise Platform</span>
            </div>
            <div className="client-metrics-grid">
              <div className="metric-box">
                <span className="metric-num">100%</span>
                <span className="metric-txt">Workflow QA Validation</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">REST API</span>
                <span className="metric-txt">Full-Stack Modules</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">4 Mo</span>
                <span className="metric-txt">Client Trainee Tenure</span>
              </div>
            </div>
            <div className="pv-sub-info">
              <span>Collaborative delivery with university mentors & client stakeholders</span>
            </div>
          </div>
        </div>
        <div className="pv-footer-badge">
          <span>Production Web Application & QA Verification</span>
        </div>
      </div>
    );
  }

  if (slug === 'library-management-system-mern') {
    return (
      <div className="proj-visual visual-mern" role="img" aria-label={`Preview graphic for ${title}`}>
        <div className="pv-header">
          <div className="pv-tag"><Database size={13} /> MERN Full-Stack System</div>
          <span className="pv-status live"><span className="pulse-indicator" /> MongoDB Atlas</span>
        </div>
        <div className="pv-body">
          <div className="pv-mockup-card">
            <div className="pv-mockup-top">
              <Database size={16} className="pv-icon mern-icon" />
              <span>Role-Based Management & Ledger</span>
              <span className="pv-metric">JWT Auth</span>
            </div>
            <div className="mern-schema-row">
              <div className="schema-pill">Admin Dashboard</div>
              <div className="schema-pill">Student Portal</div>
              <div className="schema-pill">Borrow / Return Ledger</div>
            </div>
            <div className="security-layer">
              <ShieldCheck size={14} className="sec-icon" />
              <span>Protected Endpoints: Bcrypt Password Hashing & Bearer Tokens</span>
            </div>
          </div>
        </div>
        <div className="pv-footer-badge">
          <span>React • Node.js • Express • MongoDB • JWT</span>
        </div>
      </div>
    );
  }

  // Network Vulnerability Scanner
  return (
    <div className="proj-visual visual-cyber" role="img" aria-label={`Preview graphic for ${title}`}>
      <div className="pv-header">
        <div className="pv-tag"><Terminal size={13} /> Cybersecurity Tool</div>
        <span className="pv-status sec"><ShieldCheck size={12} /> Active Recon Engine</span>
      </div>
      <div className="pv-body">
        <div className="pv-mockup-card terminal-style">
          <div className="pv-term-line">$ python scanner.py --target 192.168.1.0/24</div>
          <div className="pv-term-line res">[+] Scanning 254 subnet hosts across CIDR...</div>
          <div className="pv-term-line res open">[✓] Port 22 (SSH) - Open • OpenSSH 8.9</div>
          <div className="pv-term-line res open">[✓] Port 80 (HTTP) - Open • Apache/2.4</div>
          <div className="pv-term-line res open">[✓] Port 443 (HTTPS) - Open • TLS 1.3</div>
          <div className="pv-term-line done">[+] Audit Complete: JSON report generated</div>
        </div>
      </div>
      <div className="pv-footer-badge">
        <span>Python • Sockets • Scapy • Linux • Security Auditing</span>
      </div>
    </div>
  );
}
