import { type SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

/* ============================================================
   ILUSTRAÇÃO HERO — Mãe abraçando filho (estilo flat cartoon)
   ============================================================ */
export function MomChildIllustration(props: Props) {
  return (
    <svg viewBox="0 0 400 400" fill="none" {...props}>
      {/* Sol decorativo */}
      <circle cx="330" cy="70" r="38" fill="#FFE5A0" />
      <g stroke="#FFE5A0" strokeWidth="3" strokeLinecap="round">
        <line x1="330" y1="20" x2="330" y2="10" />
        <line x1="380" y1="70" x2="392" y2="70" />
        <line x1="365" y1="35" x2="374" y2="26" />
        <line x1="365" y1="105" x2="374" y2="114" />
      </g>

      {/* Nuvenzinhas */}
      <ellipse cx="60" cy="80" rx="28" ry="14" fill="#FDFCFA" />
      <ellipse cx="80" cy="74" rx="22" ry="12" fill="#FDFCFA" />
      <ellipse cx="350" cy="160" rx="24" ry="12" fill="#FDFCFA" />
      <ellipse cx="368" cy="156" rx="18" ry="10" fill="#FDFCFA" />

      {/* Chão / grama */}
      <ellipse cx="200" cy="380" rx="180" ry="20" fill="#B8E6D1" />

      {/* Mãe — corpo */}
      <path
        d="M130 380 Q130 260 180 240 L240 240 Q290 260 290 380 Z"
        fill="#4A90C2"
      />
      {/* Mãe — pescoço */}
      <rect x="195" y="195" width="30" height="35" fill="#F4C8A0" />
      {/* Mãe — cabeça */}
      <circle cx="210" cy="170" r="48" fill="#F4C8A0" />
      {/* Mãe — cabelo */}
      <path
        d="M163 170 Q160 115 210 110 Q260 115 257 175 Q255 145 230 137 Q225 175 215 170 Q205 175 200 137 Q175 145 163 175 Z"
        fill="#5C3D2E"
      />
      {/* Mãe — sorriso suave */}
      <path
        d="M198 185 Q210 192 222 185"
        stroke="#5C3D2E"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Mãe — olhos fechados (acolhimento) */}
      <path
        d="M188 172 Q193 168 198 172"
        stroke="#5C3D2E"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M222 172 Q227 168 232 172"
        stroke="#5C3D2E"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Mãe — bochechas rosa */}
      <circle cx="178" cy="183" r="6" fill="#FFD6E0" opacity="0.7" />
      <circle cx="242" cy="183" r="6" fill="#FFD6E0" opacity="0.7" />

      {/* Braço da mãe abraçando */}
      <path
        d="M280 290 Q310 300 305 340 Q295 320 270 320 Z"
        fill="#4A90C2"
      />

      {/* Filho — corpo */}
      <path
        d="M230 380 Q230 320 250 305 L290 305 Q310 320 305 380 Z"
        fill="#FF8B7D"
      />
      {/* Filho — pescoço */}
      <rect x="262" y="278" width="22" height="28" fill="#F4C8A0" />
      {/* Filho — cabeça */}
      <circle cx="273" cy="260" r="32" fill="#F4C8A0" />
      {/* Filho — cabelo */}
      <path
        d="M243 260 Q241 220 273 217 Q305 220 303 263 Q301 240 285 235 Q280 260 273 258 Q266 260 261 235 Q250 240 243 263 Z"
        fill="#3A2418"
      />
      {/* Filho — olhinho fechado (calmo) */}
      <path
        d="M258 263 Q262 260 266 263"
        stroke="#3A2418"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M280 263 Q284 260 288 263"
        stroke="#3A2418"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Filho — bochecha */}
      <circle cx="252" cy="272" r="5" fill="#FFD6E0" opacity="0.8" />

      {/* Coração entre eles */}
      <path
        d="M330 240 c-4,-8 -16,-8 -16,4 c0,12 16,20 16,20 c0,0 16,-8 16,-20 c0,-12 -12,-12 -16,-4 z"
        fill="#FFD6E0"
        stroke="#FF8B7D"
        strokeWidth="2"
      />

      {/* Estrelinhas flutuantes */}
      <path
        d="M70 200 l3 8 l8 0 l-7 5 l3 8 l-7 -5 l-7 5 l3 -8 l-7 -5 l8 0 z"
        fill="#FFE5A0"
      />
      <path
        d="M120 130 l2 5 l5 0 l-4 3 l2 5 l-5 -3 l-5 3 l2 -5 l-4 -3 l5 0 z"
        fill="#DCD0F0"
      />
    </svg>
  );
}

/* ============================================================
   RETRATO ESTILIZADO DA ESPECIALISTA (placeholder até foto real)
   ============================================================ */
export function SpecialistPortrait(props: Props) {
  return (
    <svg viewBox="0 0 200 200" fill="none" {...props}>
      <circle cx="100" cy="100" r="100" fill="#FDFCFA" />
      {/* Ombros / blusa */}
      <path
        d="M30 200 Q30 150 70 135 L130 135 Q170 150 170 200 Z"
        fill="#A8D8F0"
      />
      {/* Gola */}
      <path
        d="M85 135 Q100 150 115 135 L115 145 Q100 158 85 145 Z"
        fill="#FDFCFA"
      />
      {/* Pescoço */}
      <rect x="88" y="115" width="24" height="22" fill="#F4C8A0" />
      {/* Rosto */}
      <ellipse cx="100" cy="90" rx="42" ry="48" fill="#F4C8A0" />
      {/* Cabelo */}
      <path
        d="M58 95 Q55 40 100 35 Q145 40 142 100 Q140 70 115 60 Q110 88 100 86 Q90 88 85 60 Q70 70 58 100 Z"
        fill="#5C3D2E"
      />
      {/* Sorriso */}
      <path
        d="M88 105 Q100 113 112 105"
        stroke="#5C3D2E"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Olhos */}
      <circle cx="85" cy="92" r="2.5" fill="#5C3D2E" />
      <circle cx="115" cy="92" r="2.5" fill="#5C3D2E" />
      {/* Sobrancelhas */}
      <path
        d="M78 83 Q85 80 92 83"
        stroke="#5C3D2E"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M108 83 Q115 80 122 83"
        stroke="#5C3D2E"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Bochechas */}
      <circle cx="74" cy="103" r="5" fill="#FFD6E0" opacity="0.7" />
      <circle cx="126" cy="103" r="5" fill="#FFD6E0" opacity="0.7" />
      {/* Brincos */}
      <circle cx="58" cy="100" r="3" fill="#FFE5A0" />
      <circle cx="142" cy="100" r="3" fill="#FFE5A0" />
    </svg>
  );
}

/* ============================================================
   MOCKUPS DE PRODUTO
   ============================================================ */
export function MockupMethod(props: Props) {
  return (
    <svg viewBox="0 0 200 150" fill="none" {...props}>
      {/* Tela de vídeo */}
      <rect x="20" y="15" width="160" height="100" rx="12" fill="#4A90C2" />
      <rect x="28" y="23" width="144" height="84" rx="6" fill="#FDFCFA" />
      {/* Botão play */}
      <circle cx="100" cy="65" r="22" fill="#FF8B7D" />
      <path d="M93 55 L93 75 L112 65 Z" fill="#FDFCFA" />
      {/* Base */}
      <rect x="60" y="115" width="80" height="6" rx="3" fill="#4A90C2" />
      <rect x="80" y="121" width="40" height="14" rx="3" fill="#A8D8F0" />
      {/* Apostila ao lado */}
      <rect
        x="135"
        y="80"
        width="50"
        height="60"
        rx="4"
        fill="#FFE5A0"
        transform="rotate(8 160 110)"
      />
      <line
        x1="145"
        y1="95"
        x2="170"
        y2="95"
        stroke="#4A90C2"
        strokeWidth="2"
        transform="rotate(8 160 110)"
      />
      <line
        x1="145"
        y1="105"
        x2="170"
        y2="105"
        stroke="#4A90C2"
        strokeWidth="2"
        transform="rotate(8 160 110)"
      />
      <line
        x1="145"
        y1="115"
        x2="165"
        y2="115"
        stroke="#4A90C2"
        strokeWidth="2"
        transform="rotate(8 160 110)"
      />
    </svg>
  );
}

export function MockupPlanner(props: Props) {
  return (
    <svg viewBox="0 0 200 150" fill="none" {...props}>
      {/* Capa do planner */}
      <rect x="40" y="10" width="120" height="130" rx="8" fill="#FFD6E0" />
      <rect x="48" y="18" width="104" height="114" rx="4" fill="#FDFCFA" />
      {/* Espiral */}
      <g fill="#4A90C2">
        <circle cx="40" cy="25" r="3" />
        <circle cx="40" cy="45" r="3" />
        <circle cx="40" cy="65" r="3" />
        <circle cx="40" cy="85" r="3" />
        <circle cx="40" cy="105" r="3" />
        <circle cx="40" cy="125" r="3" />
      </g>
      {/* Conteúdo do planner */}
      <text
        x="100"
        y="45"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="11"
        fontWeight="700"
        fill="#4A90C2"
      >
        90 DIAS
      </text>
      <line x1="58" y1="58" x2="142" y2="58" stroke="#A8D8F0" strokeWidth="1.5" />
      {/* Quadrinhos do planner (semana) */}
      <g fill="#A8D8F0">
        <rect x="58" y="68" width="14" height="14" rx="2" />
        <rect x="76" y="68" width="14" height="14" rx="2" />
        <rect x="94" y="68" width="14" height="14" rx="2" />
        <rect x="112" y="68" width="14" height="14" rx="2" />
        <rect x="130" y="68" width="12" height="14" rx="2" />
      </g>
      <g fill="#B8E6D1">
        <rect x="58" y="86" width="14" height="14" rx="2" />
        <rect x="76" y="86" width="14" height="14" rx="2" />
        <rect x="94" y="86" width="14" height="14" rx="2" />
      </g>
      <g fill="#FFE5A0">
        <rect x="112" y="86" width="14" height="14" rx="2" />
        <rect x="130" y="86" width="12" height="14" rx="2" />
      </g>
      {/* Linhas finais */}
      <line x1="58" y1="110" x2="142" y2="110" stroke="#A8D8F0" strokeWidth="1.5" />
      <line x1="58" y1="118" x2="130" y2="118" stroke="#A8D8F0" strokeWidth="1.5" />
    </svg>
  );
}

export function MockupActivities(props: Props) {
  return (
    <svg viewBox="0 0 200 150" fill="none" {...props}>
      {/* Cartões empilhados */}
      <rect
        x="35"
        y="30"
        width="70"
        height="90"
        rx="8"
        fill="#A8D8F0"
        transform="rotate(-8 70 75)"
      />
      <rect
        x="70"
        y="20"
        width="70"
        height="90"
        rx="8"
        fill="#FFE5A0"
        transform="rotate(2 105 65)"
      />
      <rect x="100" y="25" width="70" height="90" rx="8" fill="#FFD6E0" />
      {/* Conteúdo do cartão da frente */}
      <circle cx="135" cy="55" r="14" fill="#FF8B7D" />
      <path
        d="M129 55 L133 60 L141 50"
        stroke="#FDFCFA"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="115" y1="80" x2="155" y2="80" stroke="#4A90C2" strokeWidth="2" />
      <line x1="115" y1="90" x2="155" y2="90" stroke="#4A90C2" strokeWidth="2" />
      <line x1="115" y1="100" x2="145" y2="100" stroke="#4A90C2" strokeWidth="2" />
    </svg>
  );
}

export function MockupCommunity(props: Props) {
  return (
    <svg viewBox="0 0 200 150" fill="none" {...props}>
      {/* Balão grande */}
      <path
        d="M30 30 H120 Q132 30 132 42 V70 Q132 82 120 82 H55 L42 95 L42 82 H30 Q18 82 18 70 V42 Q18 30 30 30 Z"
        fill="#DCD0F0"
      />
      <line x1="38" y1="48" x2="110" y2="48" stroke="#4A90C2" strokeWidth="2" />
      <line x1="38" y1="60" x2="100" y2="60" stroke="#4A90C2" strokeWidth="2" />
      <line x1="38" y1="72" x2="90" y2="72" stroke="#4A90C2" strokeWidth="2" />

      {/* Balão pequeno (resposta) */}
      <path
        d="M105 75 H180 Q188 75 188 83 V108 Q188 116 180 116 H140 L130 128 L130 116 H105 Q97 116 97 108 V83 Q97 75 105 75 Z"
        fill="#A8D8F0"
      />
      <line x1="113" y1="92" x2="170" y2="92" stroke="#4A90C2" strokeWidth="2" />
      <line x1="113" y1="103" x2="160" y2="103" stroke="#4A90C2" strokeWidth="2" />

      {/* Coração indicando conexão */}
      <path
        d="M165 50 c-4,-8 -16,-8 -16,4 c0,12 16,18 16,18 c0,0 16,-6 16,-18 c0,-12 -12,-12 -16,-4 z"
        fill="#FFD6E0"
        stroke="#FF8B7D"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ============================================================
   ELEMENTOS DECORATIVOS REUTILIZÁVEIS
   ============================================================ */
export function CloudShape(props: Props) {
  return (
    <svg viewBox="0 0 100 60" fill="none" {...props}>
      <ellipse cx="30" cy="40" rx="22" ry="14" fill="currentColor" />
      <ellipse cx="55" cy="35" rx="28" ry="18" fill="currentColor" />
      <ellipse cx="75" cy="42" rx="20" ry="13" fill="currentColor" />
    </svg>
  );
}

export function StarShape(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SproutShape(props: Props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M20 35 L20 22"
        stroke="#4A90C2"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 22 Q12 18 10 10 Q18 12 20 22 Z"
        fill="#B8E6D1"
        stroke="#4A90C2"
        strokeWidth="1.5"
      />
      <path
        d="M20 22 Q28 18 30 10 Q22 12 20 22 Z"
        fill="#B8E6D1"
        stroke="#4A90C2"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function HeartShape(props: Props) {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 28 c-2,-2 -12,-8 -12,-16 c0,-5 4,-8 8,-8 c2,0 4,1 4,3 c0,-2 2,-3 4,-3 c4,0 8,3 8,8 c0,8 -10,14 -12,16 z"
        fill="#FFD6E0"
        stroke="#FF8B7D"
        strokeWidth="2"
      />
    </svg>
  );
}
