/**
 * Temporary concept identity prepared by LunarWolf Software for the private
 * website preview. Final branding remains subject to client approval.
 * Original SVG — no competitor or manufacturer marks are used.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="lm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0e7fae" />
          <stop offset="1" stopColor="#0a5f84" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="15" fill="url(#lm-g)" />
      <g fill="none" stroke="#ffffff" strokeWidth="4.4" strokeLinecap="round">
        <path d="M14 24h27" />
        <path d="M14 34h36" />
        <path d="M14 44h22" />
      </g>
      <circle cx="49" cy="23.5" r="4.6" fill="#f59e0b" />
    </svg>
  );
}

export function LogoText() {
  return (
    <span className="logo__text">
      <span className="logo__name">Aircomfort</span>
      <span className="logo__sub">Airconditioning</span>
    </span>
  );
}
