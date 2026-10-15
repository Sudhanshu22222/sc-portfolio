import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Check, AlertCircle, RefreshCw } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct mailto link
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${formData.subject} from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Sudhanshu,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n`
    )}`;

    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
  };

  const handleCopy = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'Job Opportunity',
      message: ''
    });
    setSubmitted(false);
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="contact-form-success" role="alert" aria-live="polite">
        <div className="success-icon-wrap">
          <CheckCircle2 size={44} className="success-icon" />
        </div>
        <h3>Message Drafted & Client Opened!</h3>
        <p className="muted">
          Your default email app was triggered with your message to <strong>{profile.email}</strong>. If your email client didn't open automatically, you can copy the draft below:
        </p>
        <div className="draft-preview">
          <p><strong>From:</strong> {formData.name} ({formData.email})</p>
          <p><strong>Subject:</strong> {formData.subject}</p>
          <p className="draft-msg">"{formData.message}"</p>
        </div>
        <div className="success-actions">
          <button type="button" className="btn btn-ghost" onClick={handleCopy}>
            {copied ? <Check size={18} /> : <Copy size={18} />} {copied ? 'Copied to Clipboard' : 'Copy Message'}
          </button>
          <button type="button" className="btn btn-ghost" onClick={handleReset}>
            <RefreshCw size={18} /> Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name" className="form-label">
            Your Name <span className="req">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            placeholder="e.g. Alex Morgan"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
          />
          {errors.name && (
            <p className="form-error">
              <AlertCircle size={14} /> {errors.name}
            </p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contact-email" className="form-label">
            Your Email <span className="req">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            placeholder="e.g. alex@company.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
          />
          {errors.email && (
            <p className="form-error">
              <AlertCircle size={14} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-subject" className="form-label">Subject</label>
        <select
          id="contact-subject"
          className="form-input form-select"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        >
          <option value="Job Opportunity">Job Opportunity / Hiring</option>
          <option value="Internship Inquiry">Internship Opportunity</option>
          <option value="Project Collaboration">Project Collaboration</option>
          <option value="Security Consulting">Security & Technical Discussion</option>
          <option value="General Question">General Inquiry</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">
          Your Message <span className="req">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
          placeholder="Tell me about your role, project, or requirements..."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: '' });
          }}
        />
        <div className="form-sub-row">
          {errors.message ? (
            <p className="form-error">
              <AlertCircle size={14} /> {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="char-count">{formData.message.length} chars</span>
        </div>
      </div>

      <button type="submit" className="btn btn-primary form-submit-btn">
        <Send size={18} /> Send Message
      </button>
    </form>
  );
}
