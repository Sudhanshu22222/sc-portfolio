import { profile } from '../data/portfolio';
import CyberShieldLogo from './CyberShieldLogo';

export default function Logo() {
  return (
    <a href="#home" className="logo" aria-label={`${profile.name}, home`}>
      <span className="logo-shield-wrap" aria-hidden="true">
        <CyberShieldLogo size={36} />
      </span>
      <span className="logo-name">{profile.name}</span>
    </a>
  );
}
