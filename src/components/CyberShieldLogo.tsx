export default function CyberShieldLogo({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`cyber-shield-logo ${className}`}
      role="img"
      aria-label="SC Cyber Shield"
    >
      <defs>
        <linearGradient id="csl-shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5AA32" />
          <stop offset="50%" stopColor="#E87945" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>
        <linearGradient id="csl-textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD180" />
          <stop offset="100%" stopColor="#F5AA32" />
        </linearGradient>
        <radialGradient id="csl-shieldBg" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#241B3B" />
          <stop offset="100%" stopColor="#0E0B19" />
        </radialGradient>
      </defs>

      {/* Hex Shield Contour */}
      <path 
        d="M32 4 L56 15 V36 C56 48.5 32 59.5 32 59.5 C32 59.5 8 48.5 8 36 V15 Z" 
        fill="url(#csl-shieldBg)" 
        stroke="url(#csl-shieldGrad)" 
        strokeWidth="2.4" 
        strokeLinejoin="round"
      />

      {/* Subtle Inner Plate */}
      <path 
        d="M32 9 L51 18.5 V34 C51 44.5 32 53.5 32 53.5 C32 53.5 13 44.5 13 34 V18.5 Z" 
        fill="none" 
        stroke="#423561" 
        strokeWidth="1" 
        strokeDasharray="2 2"
      />

      {/* Circuit Nodes */}
      <path d="M16 22 L23 22 L26 25" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <circle cx="16" cy="22" r="1.8" fill="#A78BFA" />

      <path d="M48 22 L41 22 L38 25" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      <circle cx="48" cy="22" r="1.8" fill="#A78BFA" />

      <path d="M32 6 V12" stroke="#F5AA32" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="12" r="1.8" fill="#F5AA32" />

      {/* Stylized Cyber Monogram SC */}
      <path 
        d="M28.5 25 H21 C18.8 25 17.5 26.2 17.5 28 V29.5 C17.5 31.2 18.8 32.2 21 32.5 H25 C27.2 32.8 28.5 33.8 28.5 35.5 V37 C28.5 38.8 27.2 40 25 40 H17" 
        stroke="url(#csl-textGrad)" 
        strokeWidth="2.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />

      <path 
        d="M46.5 26 H39 C36.8 26 35 27.8 35 30 V35 C35 37.2 36.8 39 39 39 H46.5" 
        stroke="url(#csl-textGrad)" 
        strokeWidth="2.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
      />

      {/* Bottom Node */}
      <circle cx="32" cy="49" r="1.5" fill="#F5AA32" opacity="0.9" />
      <path d="M32 51 V54" stroke="#F5AA32" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}
