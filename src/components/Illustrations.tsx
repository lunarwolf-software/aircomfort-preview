import type { IllustrationKind } from '../data/gallery';

/**
 * Original SVG illustrations created by LunarWolf for this preview.
 * They stand in for photography until the owner supplies approved photos
 * (see docs/IMAGE-SOURCES.md). All artwork is original — no third-party
 * or manufacturer assets.
 */

const stroke = '#0a638b';
const strokeSoft = '#7fb4cc';
const fillUnit = '#ffffff';
const fillShade = '#e3f1f8';
const accent = '#f59e0b';

function SplitUnit({ x = 0, y = 0, w = 150 }: { x?: number; y?: number; w?: number }) {
  const h = w * 0.34;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx={h * 0.28} fill={fillUnit} stroke={stroke} strokeWidth="3" />
      <rect
        x={w * 0.08}
        y={h * 0.62}
        width={w * 0.84}
        height={h * 0.14}
        rx={h * 0.07}
        fill={fillShade}
        stroke={strokeSoft}
        strokeWidth="2"
      />
      <circle cx={w * 0.86} cy={h * 0.36} r={h * 0.09} fill={accent} />
    </g>
  );
}

function AirWaves({ x = 0, y = 0, s = 1 }: { x?: number; y?: number; s?: number }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${s})`}
      fill="none"
      stroke={strokeSoft}
      strokeWidth="5"
      strokeLinecap="round"
      opacity="0.85"
    >
      <path d="M0 0q14 10 0 22 -14 12 0 24" />
      <path d="M30 4q14 10 0 22 -14 12 0 24" />
      <path d="M60 0q14 10 0 22 -14 12 0 24" />
    </g>
  );
}

export function IndoorSplitIllustration() {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="18" width="284" height="204" rx="16" fill="#f4fafd" stroke="#cde4ef" strokeWidth="2" />
      <rect x="18" y="176" width="284" height="46" rx="14" fill={fillShade} />
      <SplitUnit x={85} y={52} w={150} />
      <AirWaves x={128} y={126} />
      <rect x="238" y="120" width="40" height="56" rx="6" fill="#ffffff" stroke={strokeSoft} strokeWidth="2.5" />
      <line x1="238" y1="148" x2="278" y2="148" stroke={strokeSoft} strokeWidth="2.5" />
    </svg>
  );
}

export function OutdoorCondenserIllustration() {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="18" width="284" height="204" rx="16" fill="#f4fafd" stroke="#cde4ef" strokeWidth="2" />
      <rect x="18" y="180" width="284" height="42" rx="14" fill="#dcebe2" />
      <rect x="92" y="70" width="136" height="110" rx="12" fill={fillUnit} stroke={stroke} strokeWidth="3" />
      <circle cx="146" cy="125" r="36" fill="none" stroke={stroke} strokeWidth="3" />
      <g stroke={strokeSoft} strokeWidth="3" strokeLinecap="round">
        <line x1="146" y1="95" x2="146" y2="155" />
        <line x1="116" y1="125" x2="176" y2="125" />
        <line x1="125" y1="104" x2="167" y2="146" />
        <line x1="167" y1="104" x2="125" y2="146" />
      </g>
      <circle cx="146" cy="125" r="8" fill={accent} />
      <g stroke={strokeSoft} strokeWidth="2.5">
        <line x1="196" y1="88" x2="216" y2="88" />
        <line x1="196" y1="100" x2="216" y2="100" />
        <line x1="196" y1="112" x2="216" y2="112" />
        <line x1="196" y1="124" x2="216" y2="124" />
        <line x1="196" y1="136" x2="216" y2="136" />
        <line x1="196" y1="148" x2="216" y2="148" />
      </g>
      <path d="M228 92 h34 v88" fill="none" stroke={strokeSoft} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function PortableUnitIllustration() {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="18" width="284" height="204" rx="16" fill="#f4fafd" stroke="#cde4ef" strokeWidth="2" />
      <rect x="196" y="34" width="82" height="96" rx="8" fill="#dff0f9" stroke={strokeSoft} strokeWidth="2.5" />
      <line x1="237" y1="34" x2="237" y2="130" stroke={strokeSoft} strokeWidth="2.5" />
      <rect x="104" y="84" width="86" height="118" rx="14" fill={fillUnit} stroke={stroke} strokeWidth="3" />
      <rect x="118" y="98" width="58" height="14" rx="7" fill={fillShade} stroke={strokeSoft} strokeWidth="2" />
      <circle cx="130" cy="132" r="5" fill={accent} />
      <g stroke={strokeSoft} strokeWidth="2.5">
        <line x1="120" y1="152" x2="174" y2="152" />
        <line x1="120" y1="164" x2="174" y2="164" />
        <line x1="120" y1="176" x2="174" y2="176" />
      </g>
      <path
        d="M190 104 q34 -10 42 12"
        fill="none"
        stroke={stroke}
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.75"
      />
      <circle cx="122" cy="206" r="6" fill="none" stroke={stroke} strokeWidth="2.5" />
      <circle cx="172" cy="206" r="6" fill="none" stroke={stroke} strokeWidth="2.5" />
    </svg>
  );
}

export function TechnicianToolsIllustration() {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="18" width="284" height="204" rx="16" fill="#f4fafd" stroke="#cde4ef" strokeWidth="2" />
      <SplitUnit x={60} y={44} w={132} />
      {/* open filter panel */}
      <rect x="74" y="104" width="104" height="16" rx="8" fill="#ffffff" stroke={strokeSoft} strokeWidth="2.5" transform="rotate(14 74 104)" />
      {/* gauge */}
      <circle cx="236" cy="152" r="34" fill="#ffffff" stroke={stroke} strokeWidth="3" />
      <path d="M236 152 L254 136" stroke={accent} strokeWidth="4" strokeLinecap="round" />
      <circle cx="236" cy="152" r="4.5" fill={stroke} />
      <path d="M212 132 a34 34 0 0 1 48 0" fill="none" stroke={strokeSoft} strokeWidth="3" />
      {/* spanner */}
      <g transform="translate(84 156) rotate(-24)" fill="none" stroke={stroke} strokeWidth="6" strokeLinecap="round">
        <line x1="14" y1="14" x2="66" y2="14" />
        <circle cx="8" cy="14" r="10" fill="#f4fafd" />
        <circle cx="72" cy="14" r="10" fill="#f4fafd" />
      </g>
    </svg>
  );
}

export function RemoteComfortIllustration() {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="18" width="284" height="204" rx="16" fill="#f4fafd" stroke="#cde4ef" strokeWidth="2" />
      <rect x="112" y="48" width="96" height="150" rx="18" fill={fillUnit} stroke={stroke} strokeWidth="3" />
      <rect x="126" y="64" width="68" height="40" rx="8" fill={fillShade} stroke={strokeSoft} strokeWidth="2" />
      <text x="160" y="92" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="700" fill={stroke}>
        22°
      </text>
      <g fill="#ffffff" stroke={strokeSoft} strokeWidth="2">
        <circle cx="140" cy="128" r="10" />
        <circle cx="180" cy="128" r="10" />
        <circle cx="140" cy="158" r="10" />
        <circle cx="180" cy="158" r="10" />
      </g>
      <circle cx="160" cy="184" r="7" fill={accent} />
      <AirWaves x={230} y={84} s={0.8} />
      <AirWaves x={40} y={84} s={0.8} />
    </svg>
  );
}

export function CeilingAirflowIllustration() {
  return (
    <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="18" y="18" width="284" height="204" rx="16" fill="#f4fafd" stroke="#cde4ef" strokeWidth="2" />
      <rect x="94" y="30" width="132" height="34" rx="10" fill={fillUnit} stroke={stroke} strokeWidth="3" />
      <g stroke={strokeSoft} strokeWidth="2.5">
        <line x1="108" y1="52" x2="212" y2="52" />
      </g>
      <circle cx="208" cy="42" r="4.5" fill={accent} />
      <g fill="none" stroke={strokeSoft} strokeWidth="5" strokeLinecap="round" opacity="0.85">
        <path d="M120 78 q-12 22 6 40 q16 18 4 38" />
        <path d="M160 82 q-6 24 6 42 q10 18 2 36" />
        <path d="M200 78 q12 22 -6 40 q-16 18 -4 38" />
      </g>
      <path d="M52 196 h216" stroke="#cde4ef" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Illustration({ kind }: { kind: IllustrationKind }) {
  switch (kind) {
    case 'indoor-split':
      return <IndoorSplitIllustration />;
    case 'outdoor-condenser':
      return <OutdoorCondenserIllustration />;
    case 'portable-unit':
      return <PortableUnitIllustration />;
    case 'technician-tools':
      return <TechnicianToolsIllustration />;
    case 'remote-comfort':
      return <RemoteComfortIllustration />;
    case 'ceiling-airflow':
      return <CeilingAirflowIllustration />;
  }
}

/** Larger hero scene: split unit cooling a room, with condenser outside. */
export function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of a wall-mounted air-conditioner cooling a room">
      <defs>
        <linearGradient id="hero-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eaf5fa" />
        </linearGradient>
        <linearGradient id="hero-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0e7fae" stopOpacity="0.14" />
          <stop offset="1" stopColor="#0e7fae" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* room card */}
      <rect x="24" y="26" width="472" height="348" rx="26" fill="url(#hero-wall)" stroke="#d3e7f0" strokeWidth="2.5" />
      <rect x="24" y="300" width="472" height="74" rx="24" fill="#ddedf6" />

      {/* window with sun */}
      <rect x="330" y="70" width="118" height="120" rx="10" fill="#dff0f9" stroke="#a9cfe1" strokeWidth="2.5" />
      <line x1="389" y1="70" x2="389" y2="190" stroke="#a9cfe1" strokeWidth="2.5" />
      <line x1="330" y1="130" x2="448" y2="130" stroke="#a9cfe1" strokeWidth="2.5" />
      <circle cx="418" cy="98" r="14" fill={accent} opacity="0.9" />

      {/* split unit */}
      <g>
        <rect x="72" y="74" width="196" height="64" rx="18" fill="#ffffff" stroke={stroke} strokeWidth="3.5" />
        <rect x="88" y="114" width="164" height="12" rx="6" fill={fillShade} stroke={strokeSoft} strokeWidth="2" />
        <circle cx="244" cy="98" r="6" fill={accent} />
        <text x="92" y="102" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" fill={strokeSoft}>
          aircomfort
        </text>
      </g>

      {/* cool air */}
      <rect x="60" y="140" width="240" height="150" fill="url(#hero-glow)" rx="20" />
      <g fill="none" stroke="#8ec6dd" strokeWidth="6" strokeLinecap="round" opacity="0.95">
        <path d="M108 160 q-16 26 6 48 q20 22 6 46" />
        <path d="M164 168 q-8 28 8 50 q12 20 4 40" />
        <path d="M222 160 q16 26 -6 48 q-20 22 -6 46" />
      </g>

      {/* plant */}
      <g>
        <path d="M78 300 q-4 -34 18 -52 M84 300 q2 -26 22 -34 M90 300 q-14 -20 -30 -22" fill="none" stroke="#66a58c" strokeWidth="5" strokeLinecap="round" />
        <path d="M62 300 h52 l-7 42 q-1 8 -9 8 h-20 q-8 0 -9 -8 z" fill="#ffffff" stroke="#b7d6c8" strokeWidth="3" />
      </g>

      {/* couch */}
      <g>
        <rect x="318" y="238" width="150" height="62" rx="16" fill="#ffffff" stroke="#b9d5e2" strokeWidth="3" />
        <rect x="306" y="258" width="24" height="42" rx="10" fill="#eaf5fa" stroke="#b9d5e2" strokeWidth="3" />
        <rect x="456" y="258" width="24" height="42" rx="10" fill="#eaf5fa" stroke="#b9d5e2" strokeWidth="3" />
        <rect x="332" y="252" width="58" height="26" rx="10" fill="#dff0f9" />
        <rect x="396" y="252" width="58" height="26" rx="10" fill="#dff0f9" />
      </g>

      {/* temperature chip */}
      <g>
        <rect x="196" y="196" width="92" height="42" rx="21" fill="#ffffff" stroke="#cbe2ee" strokeWidth="2.5" filter="none" />
        <circle cx="219" cy="217" r="10" fill="#e3f1f8" stroke={stroke} strokeWidth="2.5" />
        <path d="M219 212v5l3 3" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        <text x="238" y="223" fontFamily="system-ui, sans-serif" fontSize="17" fontWeight="700" fill={stroke}>
          22°C
        </text>
      </g>
    </svg>
  );
}
