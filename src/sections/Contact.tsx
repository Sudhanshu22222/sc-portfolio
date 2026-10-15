import { Download, Link2, Mail, FolderGit2, Phone, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import Logo from '../components/Logo';
import ContactForm from '../components/ContactForm';
import { nav, profile } from '../data/portfolio';

export function Contact() {
  const { email, phone, github, linkedin, resumeUrl, location } = profile;

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="contact-card">
          <div className="contact-grid">
            {/* Left Column: Direct Info & Socials */}
            <div className="contact-info">
              <p className="eyebrow">Get In Touch</p>
              <h2 id="contact-title" className="h2">Let's Build Something Secure.</h2>
              <p className="lead sm">
                Have an opportunity, an internship role, or a project in mind? Reach out directly or send a message using the form.
              </p>

              <div className="contact-methods">
                {email && (
                  <a className="contact-method-card" href={`mailto:${email}`}>
                    <span className="icon-tile sm"><Mail size={18} /></span>
                    <div>
                      <span className="method-label">Email Me</span>
                      <strong className="method-value">{email}</strong>
                    </div>
                  </a>
                )}

                {phone && (
                  <a className="contact-method-card" href={`tel:${phone.replace(/\s+/g, '')}`}>
                    <span className="icon-tile sm"><Phone size={18} /></span>
                    <div>
                      <span className="method-label">Call / WhatsApp</span>
                      <strong className="method-value">{phone}</strong>
                    </div>
                  </a>
                )}

                <div className="contact-method-card static">
                  <span className="icon-tile sm"><MapPin size={18} /></span>
                  <div>
                    <span className="method-label">Location</span>
                    <strong className="method-value">{location}</strong>
                  </div>
                </div>
              </div>

              <div className="contact-links-row">
                {github && (
                  <a className="btn btn-ghost" href={github} target="_blank" rel="noopener noreferrer">
                    <FolderGit2 size={18} /> GitHub
                  </a>
                )}
                {linkedin && (
                  <a className="btn btn-ghost" href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Link2 size={18} /> LinkedIn
                  </a>
                )}
                {resumeUrl && (
                  <a className="btn btn-ghost" href={resumeUrl} download="Sudhanshu_Chouhan_Resume.pdf">
                    <Download size={18} /> Resume
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="contact-form-panel">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { github, linkedin, email, phone } = profile;
  return (
    <footer className="footer">
      <div className="container footer-in">
        <div>
          <Logo />
          <p className="muted sm">{profile.descriptor}</p>
          <p className="muted sm" style={{ marginTop: '4px' }}>{profile.location}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="footer-links">
          {github && <li><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></li>}
          {linkedin && <li><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
          {email && <li><a href={`mailto:${email}`}>Email</a></li>}
          {phone && <li><a href={`tel:${phone.replace(/\s+/g, '')}`}>Call</a></li>}
        </ul>
      </div>
      <p className="container copy muted sm">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}
