import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import Logo from './Logo';
import { nav, profile } from '../data/portfolio';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute('data-theme') || 'dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next); document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('sc-theme', next); } catch { /* storage unavailable */ }
  };

  return (
    <header className={`header ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="container header-in">
        <Logo />
        <nav aria-label="Primary" className={`nav ${open ? 'open' : ''}`} id="primary-nav">
          <ul>
            {nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className={active === n.id ? 'active' : ''} aria-current={active === n.id ? 'true' : undefined} onClick={() => setOpen(false)}>{n.label}</a></li>
            ))}
          </ul>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} download="Sudhanshu_Chouhan_Resume.pdf" className="btn btn-ghost nav-cta" onClick={() => setOpen(false)}>
              Resume
            </a>
          )}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>Let's Connect</a>
        </nav>
        <div className="header-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-nav" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
