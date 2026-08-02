import type { JSX } from "react";
import type { ArtKey, BrandArtKey, MediaArtKey } from "./content";

/**
 * Brand-native generative plates.
 * These stand in for photography. Replace any of them with a real screenshot
 * by setting `image` on the project in lib/content.ts.
 */

const C = {
  ivory: "#FAF9F3",
  beige: "#F5F5DC",
  sand: "#E8DFC9",
  teal: "#008080",
  dark: "#075F60",
  muted: "#6F7775",
};

/** Four-point spark lifted from the logo. Used sparingly. */
function Spark({ x, y, s, fill, opacity = 1 }: { x: number; y: number; s: number; fill: string; opacity?: number }) {
  const d = `M${x} ${y - s} L${x + s * 0.32} ${y - s * 0.32} L${x + s} ${y} L${x + s * 0.32} ${y + s * 0.32} L${x} ${y + s} L${x - s * 0.32} ${y + s * 0.32} L${x - s} ${y} L${x - s * 0.32} ${y - s * 0.32} Z`;
  return <path d={d} fill={fill} opacity={opacity} />;
}

/* ============================================================
   PROJECT PLATES (4:3)
   ============================================================ */

function Topo() {
  const lines = Array.from({ length: 13 }, (_, i) => {
    const y = 40 + i * 26;
    const a = 16 + i * 2.4;
    return (
      <path
        key={i}
        d={`M-20 ${y} C 120 ${y - a}, 220 ${y + a}, 360 ${y - a * 0.6} C 500 ${y - a * 1.4}, 600 ${y + a}, 740 ${y}`}
        fill="none"
        stroke={i % 4 === 0 ? C.teal : C.dark}
        strokeWidth={i % 4 === 0 ? 1.5 : 1}
        opacity={0.14 + i * 0.045}
      />
    );
  });
  return (
    <svg viewBox="0 0 720 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="720" height="540" fill={C.ivory} />
      {lines}
      <circle cx="470" cy="228" r="52" fill="none" stroke={C.teal} strokeWidth="1.5" opacity="0.55" />
      <circle cx="470" cy="228" r="7" fill={C.teal} />
      <path d="M470 228 L286 352" stroke={C.teal} strokeWidth="1.2" opacity="0.45" strokeDasharray="5 6" />
      <circle cx="286" cy="352" r="5" fill={C.dark} />
    </svg>
  );
}

function Orchard() {
  const dots: JSX.Element[] = [];
  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 10; c++) {
      dots.push(
        <circle key={`${r}-${c}`} cx={70 + c * 64} cy={110 + r * 58} r={1.6 + ((r * c) % 3) * 0.7} fill={C.dark} opacity="0.25" />
      );
    }
  }
  return (
    <svg viewBox="0 0 720 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="720" height="540" fill={C.beige} />
      {dots}
      <path d="M180 400 C 180 300, 250 236, 340 236 C 430 236, 500 300, 500 400 Z" fill={C.teal} opacity="0.14" />
      <path d="M340 236 C 292 300, 292 344, 340 400 C 388 344, 388 300, 340 236 Z" fill={C.teal} opacity="0.8" />
      <path d="M340 236 L340 148" stroke={C.dark} strokeWidth="2" strokeLinecap="round" />
      <path d="M340 176 C 396 176, 424 148, 428 116 C 386 118, 348 140, 340 176 Z" fill={C.sand} />
      <circle cx="562" cy="130" r="34" fill="none" stroke={C.teal} strokeWidth="1.4" opacity="0.4" />
    </svg>
  );
}

function Arch() {
  const arcs = Array.from({ length: 6 }, (_, i) => {
    const k = i * 20;
    return (
      <path
        key={i}
        d={`M${180 + k} 440 L${180 + k} 270 A ${180 - k} ${180 - k} 0 0 1 ${540 - k} 270 L${540 - k} 440`}
        fill="none"
        stroke={i % 2 ? C.sand : C.teal}
        strokeWidth={i % 2 ? 1 : 1.4}
        opacity={0.85 - i * 0.11}
      />
    );
  });
  return (
    <svg viewBox="0 0 720 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="720" height="540" fill={C.ivory} />
      <rect x="88" y="70" width="544" height="400" fill={C.beige} />
      {arcs}
      <circle cx="360" cy="248" r="26" fill="none" stroke={C.dark} strokeWidth="1.4" />
      <circle cx="360" cy="248" r="6" fill={C.teal} />
      <line x1="88" y1="470" x2="632" y2="470" stroke={C.dark} strokeWidth="1.4" opacity="0.5" />
    </svg>
  );
}

function Forge() {
  return (
    <svg viewBox="0 0 720 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="720" height="540" fill={C.dark} />
      <path d="M-20 380 C 160 380, 220 200, 400 200 C 580 200, 640 340, 760 340" fill="none" stroke={C.sand} strokeWidth="2" opacity="0.85" />
      <path d="M-20 420 C 180 420, 240 250, 420 250 C 600 250, 660 386, 760 386" fill="none" stroke={C.teal} strokeWidth="2" opacity="0.9" />
      <path d="M-20 458 C 200 458, 260 300, 440 300" fill="none" stroke={C.sand} strokeWidth="1" opacity="0.4" />
      <circle cx="400" cy="200" r="16" fill="none" stroke={C.sand} strokeWidth="2.5" />
      <Spark x={556} y={168} s={40} fill={C.sand} />
      <path d="M614 120 L636 106 M622 148 L650 148 M620 172 L644 186" stroke={C.sand} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/* ============================================================
   BRANDING TILES
   ============================================================ */

function BIdentity() {
  return (
    <svg viewBox="0 0 720 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="720" height="360" fill={C.dark} />
      <path d="M-10 300 C 140 300, 190 150, 340 150 C 490 150, 540 262, 730 262" fill="none" stroke={C.sand} strokeWidth="1.6" opacity="0.8" />
      <path d="M-10 328 C 160 328, 210 186, 360 186" fill="none" stroke={C.teal} strokeWidth="1.6" opacity="0.9" />
      <text x="52" y="132" fill={C.ivory} fontFamily="var(--font-poppins), sans-serif" fontSize="52" fontWeight="500" letterSpacing="-2">
        AI FORGE
      </text>
      <text x="56" y="166" fill={C.sand} fontFamily="var(--font-poppins), sans-serif" fontSize="12" letterSpacing="9">
        AGENCY
      </text>
      <Spark x={618} y={92} s={20} fill={C.sand} />
    </svg>
  );
}

function BPalette() {
  const cols = [C.dark, C.teal, C.sand, C.beige, C.ivory];
  return (
    <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {cols.map((c, i) => (
        <rect key={i} x={i * 72} y="0" width="72" height="360" fill={c} />
      ))}
      <text x="16" y="336" fill={C.ivory} fontFamily="var(--font-poppins), sans-serif" fontSize="9" letterSpacing="2">
        075F60
      </text>
      <text x="232" y="336" fill={C.dark} fontFamily="var(--font-poppins), sans-serif" fontSize="9" letterSpacing="2">
        F5F5DC
      </text>
    </svg>
  );
}

function BType() {
  return (
    <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="360" height="360" fill={C.ivory} />
      <text x="30" y="150" fill={C.dark} fontFamily="var(--font-poppins), sans-serif" fontSize="108" fontWeight="500" letterSpacing="-5">
        Aa
      </text>
      <text x="200" y="150" fill={C.teal} fontFamily="var(--font-playfair), Georgia, serif" fontStyle="italic" fontSize="108">
        Aa
      </text>
      <line x1="30" y1="188" x2="330" y2="188" stroke={C.dark} strokeWidth="1" opacity="0.2" />
      <text x="30" y="222" fill={C.muted} fontFamily="var(--font-poppins), sans-serif" fontSize="11" letterSpacing="4">
        POPPINS · 300 400 500 600
      </text>
      <text x="30" y="248" fill={C.muted} fontFamily="var(--font-poppins), sans-serif" fontSize="11" letterSpacing="4">
        PLAYFAIR DISPLAY · ITALIC
      </text>
      <text x="30" y="306" fill={C.dark} fontFamily="var(--font-playfair), Georgia, serif" fontStyle="italic" fontSize="34">
        forge
      </text>
    </svg>
  );
}

function BMarks() {
  const pos = [
    [90, 96],
    [266, 96],
    [90, 264],
    [266, 264],
  ];
  return (
    <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="360" height="360" fill={C.beige} />
      {pos.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="56" fill="none" stroke={C.dark} strokeWidth="1" opacity="0.16" />
          <path
            d={`M${x - 32} ${y + 26} L${x} ${y - 30} L${x + 32} ${y + 26}`}
            fill="none"
            stroke={i % 2 ? C.sand : C.teal}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d={`M${x - 19} ${y + 6} L${x + 19} ${y + 6}`} stroke={i % 2 ? C.teal : C.sand} strokeWidth="2.4" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

function BPack() {
  return (
    <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="360" height="360" fill={C.sand} />
      <rect x="52" y="130" width="150" height="150" rx="6" fill={C.dark} />
      <rect x="176" y="96" width="132" height="184" rx="6" fill={C.ivory} stroke={C.dark} strokeOpacity="0.14" />
      <path d="M62 250 C 92 250, 100 216, 130 216 C 160 216, 168 244, 196 244" fill="none" stroke={C.sand} strokeWidth="1.6" />
      <text x="70" y="176" fill={C.ivory} fontFamily="var(--font-poppins), sans-serif" fontSize="15" letterSpacing="4">
        AI FORGE
      </text>
      <text x="196" y="150" fill={C.dark} fontFamily="var(--font-playfair), Georgia, serif" fontStyle="italic" fontSize="30">
        forged
      </text>
      <line x1="196" y1="168" x2="288" y2="168" stroke={C.teal} strokeWidth="1.4" />
      <Spark x={288} y={214} s={12} fill={C.teal} opacity={0.85} />
    </svg>
  );
}

function BStat() {
  return (
    <svg viewBox="0 0 360 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="360" height="360" fill={C.ivory} />
      <rect x="44" y="70" width="272" height="180" rx="5" fill={C.beige} stroke={C.dark} strokeOpacity="0.12" />
      <rect x="76" y="112" width="208" height="1" fill={C.teal} opacity="0.5" />
      <text x="76" y="104" fill={C.dark} fontFamily="var(--font-poppins), sans-serif" fontSize="14" letterSpacing="3">
        AI FORGE AGENCY
      </text>
      <rect x="76" y="136" width="150" height="1" fill={C.dark} opacity="0.15" />
      <rect x="76" y="156" width="180" height="1" fill={C.dark} opacity="0.15" />
      <rect x="76" y="176" width="120" height="1" fill={C.dark} opacity="0.15" />
      <rect x="44" y="272" width="272" height="46" rx="5" fill={C.dark} />
      <text x="72" y="301" fill={C.sand} fontFamily="var(--font-poppins), sans-serif" fontSize="10" letterSpacing="5">
        FORGING IDEAS INTO EXPERIENCES
      </text>
    </svg>
  );
}

/* ============================================================
   AI MEDIA TILES (3:4)
   ============================================================ */

function MCinematic() {
  return (
    <svg viewBox="0 0 540 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="cinematic" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.dark} />
          <stop offset="0.55" stopColor="#0A7A7A" />
          <stop offset="1" stopColor={C.sand} />
        </linearGradient>
      </defs>
      <rect width="540" height="720" fill="url(#cinematic)" />
      <circle cx="270" cy="292" r="96" fill={C.ivory} opacity="0.92" />
      <circle cx="270" cy="292" r="140" fill="none" stroke={C.ivory} strokeWidth="1" opacity="0.3" />
      <circle cx="270" cy="292" r="190" fill="none" stroke={C.ivory} strokeWidth="1" opacity="0.16" />
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x="0" y={300 + i * 22} width="540" height={1 + i * 0.5} fill={C.sand} opacity={0.5 - i * 0.045} />
      ))}
      <path d="M-10 560 L160 452 L330 560 L440 500 L550 560 L550 720 L-10 720 Z" fill={C.dark} opacity="0.55" />
      <Spark x={430} y={150} s={22} fill={C.sand} opacity={0.9} />
    </svg>
  );
}

function MProduct() {
  return (
    <svg viewBox="0 0 540 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="540" height="720" fill={C.beige} />
      <ellipse cx="270" cy="562" rx="160" ry="26" fill={C.dark} opacity="0.12" />
      <rect x="176" y="212" width="188" height="340" rx="14" fill={C.dark} />
      <rect x="176" y="212" width="188" height="340" rx="14" fill="none" stroke={C.sand} strokeOpacity="0.25" />
      <path d="M196 470 C 226 470, 236 424, 270 424 C 304 424, 314 462, 344 462" fill="none" stroke={C.sand} strokeWidth="1.6" />
      <text x="206" y="300" fill={C.ivory} fontFamily="var(--font-poppins), sans-serif" fontSize="17" letterSpacing="5">
        FORGE
      </text>
      <text x="206" y="330" fill={C.sand} fontFamily="var(--font-playfair), Georgia, serif" fontStyle="italic" fontSize="24">
        no. 01
      </text>
      <path d="M120 168 L420 168" stroke={C.teal} strokeWidth="1.4" opacity="0.45" />
      <Spark x={392} y={140} s={15} fill={C.teal} opacity={0.8} />
    </svg>
  );
}

function MMotion() {
  return (
    <svg viewBox="0 0 540 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="540" height="720" fill={C.ivory} />
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} x={70 + i * 14} y={110 + i * 82} width={400 - i * 28} height="54" rx="4" fill={i % 2 ? C.teal : C.dark} opacity={0.85 - i * 0.1} />
      ))}
      <line x1="40" y1="60" x2="500" y2="60" stroke={C.dark} strokeWidth="1" opacity="0.2" />
      <text x="40" y="46" fill={C.muted} fontFamily="var(--font-poppins), sans-serif" fontSize="11" letterSpacing="5">
        00:00 — 00:24
      </text>
      <Spark x={470} y={650} s={20} fill={C.teal} opacity={0.7} />
    </svg>
  );
}

function MCampaign() {
  return (
    <svg viewBox="0 0 540 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="540" height="720" fill={C.dark} />
      <rect x="0" y="0" width="540" height="300" fill={C.sand} />
      <path d="M-10 300 C 120 300, 170 176, 300 176 C 430 176, 480 268, 560 268" fill="none" stroke={C.dark} strokeWidth="2.4" />
      <text x="46" y="404" fill={C.ivory} fontFamily="var(--font-poppins), sans-serif" fontSize="46" fontWeight="500" letterSpacing="-2">
        FORGED,
      </text>
      <text x="46" y="464" fill={C.sand} fontFamily="var(--font-playfair), Georgia, serif" fontStyle="italic" fontSize="52">
        not generated.
      </text>
      <line x1="46" y1="510" x2="300" y2="510" stroke={C.teal} strokeWidth="1.6" />
      <text x="46" y="556" fill={C.sand} fontFamily="var(--font-poppins), sans-serif" fontSize="11" letterSpacing="6">
        AI FORGE AGENCY · CAMPAIGN 01
      </text>
      <Spark x={452} y={624} s={26} fill={C.teal} opacity={0.9} />
    </svg>
  );
}

/* ============================================================
   REGISTRIES
   ============================================================ */

export const PROJECT_ART: Record<ArtKey, () => JSX.Element> = {
  topo: Topo,
  orchard: Orchard,
  arch: Arch,
  forge: Forge,
};

export const BRAND_ART: Record<BrandArtKey, () => JSX.Element> = {
  bIdentity: BIdentity,
  bPalette: BPalette,
  bType: BType,
  bMarks: BMarks,
  bPack: BPack,
  bStat: BStat,
};

export const MEDIA_ART: Record<MediaArtKey, () => JSX.Element> = {
  mCinematic: MCinematic,
  mProduct: MProduct,
  mMotion: MMotion,
  mCampaign: MCampaign,
};
