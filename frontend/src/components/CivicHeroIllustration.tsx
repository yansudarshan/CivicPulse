import React from 'react';
import { CheckCircle2, Zap, Sparkles } from 'lucide-react';

export const CivicHeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 bg-gradient-to-b from-sky-50 via-amber-50/30 to-slate-50 shadow-sm">
      {/* SVG Indian Urban Civic Street Scene */}
      <svg
        viewBox="0 0 680 380"
        className="w-full h-auto block select-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Illustration of a clean, modern Indian municipal street with repaired roads, smart streetlights, citizens, and municipal cleanliness"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="65%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="sunGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          <linearGradient id="pavementGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="curbGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          <linearGradient id="muniBuilding" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          <linearGradient id="greenTreeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        {/* 1. Sky & Sun */}
        <rect width="680" height="230" fill="url(#skyGrad)" />
        <circle cx="560" cy="65" r="45" fill="url(#sunGlow)" />
        <circle cx="560" cy="65" r="22" fill="#FBBF24" opacity="0.9" />

        {/* Birds in flight */}
        <path d="M 120 40 Q 126 35 132 40 Q 138 35 144 40" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 148 48 Q 153 44 158 48 Q 163 44 168 48" fill="none" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 230 32 Q 235 28 240 32 Q 245 28 250 32" fill="none" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />

        {/* 2. Distant Smart City Skyline (Light, Clean, Optimistic) */}
        <path d="M 0 170 L 40 170 L 40 145 L 85 145 L 85 170 L 130 170 L 130 135 L 175 135 L 175 170 L 220 170 L 220 150 L 260 150 L 260 170 L 310 170 L 310 130 L 360 130 L 360 170 L 420 170 L 420 140 L 470 140 L 470 170 L 530 170 L 530 155 L 580 155 L 580 170 L 680 170 L 680 230 L 0 230 Z" fill="#E2E8F0" opacity="0.6" />

        {/* 3. Municipal Corporation Headquarters / Civic Center */}
        <g id="municipalHQ">
          {/* Main Hall */}
          <rect x="220" y="115" width="160" height="75" rx="2" fill="url(#muniBuilding)" stroke="#CBD5E1" strokeWidth="1" />
          {/* Columns */}
          <rect x="235" y="130" width="8" height="60" fill="#94A3B8" />
          <rect x="255" y="130" width="8" height="60" fill="#94A3B8" />
          <rect x="275" y="130" width="8" height="60" fill="#94A3B8" />
          <rect x="295" y="130" width="8" height="60" fill="#94A3B8" />
          <rect x="315" y="130" width="8" height="60" fill="#94A3B8" />
          <rect x="335" y="130" width="8" height="60" fill="#94A3B8" />
          <rect x="355" y="130" width="8" height="60" fill="#94A3B8" />
          {/* Pediment triangle roof */}
          <polygon points="215,115 300,85 385,115" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
          {/* Central Ashoka Chakra motif circle */}
          <circle cx="300" cy="102" r="7" fill="none" stroke="#2563EB" strokeWidth="1.2" />
          {/* Flagpole & Indian Tricolor flag on roof */}
          <line x1="300" y1="85" x2="300" y2="60" stroke="#64748B" strokeWidth="1.5" />
          <rect x="300" y="60" width="18" height="4" fill="#F97316" />
          <rect x="300" y="64" width="18" height="4" fill="#FFFFFF" />
          <rect x="300" y="68" width="18" height="4" fill="#16A34A" />
        </g>

        {/* Adjacent Modern Urban Buildings */}
        <rect x="50" y="125" width="80" height="65" rx="2" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        {/* Windows */}
        <rect x="60" y="135" width="15" height="12" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="82" y="135" width="15" height="12" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="105" y="135" width="15" height="12" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="60" y="155" width="15" height="12" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="82" y="155" width="15" height="12" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="105" y="155" width="15" height="12" fill="#BAE6FD" opacity="0.8" rx="1" />

        <rect x="440" y="120" width="95" height="70" rx="2" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="452" y="132" width="16" height="14" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="478" y="132" width="16" height="14" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="504" y="132" width="16" height="14" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="452" y="155" width="16" height="14" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="478" y="155" width="16" height="14" fill="#BAE6FD" opacity="0.8" rx="1" />
        <rect x="504" y="155" width="16" height="14" fill="#BAE6FD" opacity="0.8" rx="1" />

        {/* 4. Avenue Trees (Lush green municipal canopy) */}
        {/* Tree 1 Left */}
        <rect x="30" y="155" width="8" height="40" fill="#78350F" rx="2" />
        <circle cx="34" cy="145" r="28" fill="url(#greenTreeGrad)" />
        <circle cx="20" cy="140" r="18" fill="#10B981" />
        <circle cx="48" cy="142" r="19" fill="#059669" />

        {/* Tree 2 Mid-Left */}
        <rect x="175" y="150" width="7" height="45" fill="#78350F" rx="2" />
        <circle cx="178" cy="138" r="26" fill="url(#greenTreeGrad)" />
        <circle cx="165" cy="135" r="16" fill="#10B981" />
        <circle cx="192" cy="136" r="18" fill="#059669" />

        {/* Tree 3 Right */}
        <rect x="610" y="150" width="8" height="45" fill="#78350F" rx="2" />
        <circle cx="614" cy="138" r="30" fill="url(#greenTreeGrad)" />
        <circle cx="598" cy="134" r="20" fill="#10B981" />
        <circle cx="630" cy="136" r="20" fill="#059669" />

        {/* 5. Clean Pedestrian Sidewalk / Pavement */}
        <rect x="0" y="190" width="680" height="35" fill="url(#pavementGrad)" />
        {/* Yellow accessibility tactile paving strip */}
        <rect x="0" y="194" width="680" height="5" fill="#FBBF24" opacity="0.9" />
        {/* Kerb boundary */}
        <rect x="0" y="222" width="680" height="5" fill="url(#curbGrad)" />
        {/* Kerb paint: alternating black & yellow municipal safety pattern */}
        <rect x="30" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="60" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="90" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="120" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="150" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="180" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="210" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="240" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="270" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="300" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="330" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="360" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="390" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="420" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="450" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="480" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="510" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="540" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="570" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="600" y="222" width="30" height="5" fill="#1E293B" />
        <rect x="630" y="222" width="30" height="5" fill="#FBBF24" />
        <rect x="660" y="222" width="20" height="5" fill="#1E293B" />

        {/* 6. Smart Solar LED Streetlight */}
        <g id="streetlight">
          <rect x="135" y="90" width="4" height="105" fill="#64748B" rx="1" />
          <path d="M 137 90 C 137 70, 160 68, 175 70" fill="none" stroke="#64748B" strokeWidth="3.5" strokeLinecap="round" />
          {/* LED Fixture */}
          <rect x="165" y="68" width="18" height="6" rx="2" fill="#334155" />
          <rect x="167" y="73" width="14" height="3" rx="1" fill="#FEF08A" />
          {/* Soft light cone */}
          <polygon points="166,76 140,195 210,195 182,76" fill="#FEF08A" opacity="0.18" />
          {/* Solar Panel */}
          <line x1="130" y1="82" x2="148" y2="76" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* 7. Waste Segregation Station (Swachh Bharat Cleanliness Dual Bins) */}
        <g id="wasteBins">
          {/* Green Bin (Wet Waste) */}
          <rect x="400" y="196" width="14" height="22" rx="2" fill="#16A34A" stroke="#15803D" strokeWidth="1" />
          <rect x="398" y="193" width="18" height="4" rx="1" fill="#15803D" />
          <circle cx="407" cy="207" r="2.5" fill="#BBF7D0" />

          {/* Blue Bin (Dry Waste) */}
          <rect x="420" y="196" width="14" height="22" rx="2" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1" />
          <rect x="418" y="193" width="18" height="4" rx="1" fill="#1D4ED8" />
          <circle cx="427" cy="207" r="2.5" fill="#BFDBFE" />
        </g>

        {/* 8. Paved Repaired Asphalt Road (Smooth, High-Quality, Clean) */}
        <rect x="0" y="227" width="680" height="153" fill="url(#roadGrad)" />

        {/* White Zebra Crossing */}
        <g id="zebraCrossing">
          <rect x="220" y="232" width="16" height="85" fill="#F8FAFC" rx="1" transform="skewX(-15)" />
          <rect x="250" y="232" width="16" height="85" fill="#F8FAFC" rx="1" transform="skewX(-15)" />
          <rect x="280" y="232" width="16" height="85" fill="#F8FAFC" rx="1" transform="skewX(-15)" />
          <rect x="310" y="232" width="16" height="85" fill="#F8FAFC" rx="1" transform="skewX(-15)" />
          <rect x="340" y="232" width="16" height="85" fill="#F8FAFC" rx="1" transform="skewX(-15)" />
          <rect x="370" y="232" width="16" height="85" fill="#F8FAFC" rx="1" transform="skewX(-15)" />
        </g>

        {/* Dashed Road Divider Line */}
        <line x1="10" y1="345" x2="120" y2="345" stroke="#F8FAFC" strokeWidth="3" strokeDasharray="25 15" strokeLinecap="round" />
        <line x1="430" y1="345" x2="670" y2="345" stroke="#F8FAFC" strokeWidth="3" strokeDasharray="25 15" strokeLinecap="round" />

        {/* 9. Municipal Maintenance / Utility Electric Van */}
        <g id="municipalVan" transform="translate(470, 248)">
          {/* Shadow */}
          <ellipse cx="65" cy="52" rx="60" ry="6" fill="#0F172A" opacity="0.4" />
          {/* Van Body */}
          <rect x="15" y="10" width="85" height="38" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Cabin front */}
          <path d="M 100 22 L 118 28 L 120 48 L 100 48 Z" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
          {/* Windshield */}
          <path d="M 100 24 L 114 29 L 114 38 L 100 38 Z" fill="#BAE6FD" />
          {/* Side Window */}
          <rect x="68" y="16" width="26" height="14" rx="1" fill="#BAE6FD" />
          {/* Municipal Green Stripe */}
          <rect x="15" y="34" width="103" height="6" fill="#16A34A" />
          {/* Text "CIVIC PULSE" */}
          <text x="24" y="27" fill="#0F172A" fontSize="7" fontWeight="bold" fontFamily="sans-serif">MUNICIPAL DESK</text>
          {/* Emergency / Service Amber Beacon */}
          <rect x="94" y="6" width="8" height="4" rx="1" fill="#F59E0B" />
          {/* Headlight */}
          <circle cx="119" cy="40" r="3" fill="#FEF08A" />
          {/* Wheels */}
          <circle cx="36" cy="48" r="10" fill="#1E293B" />
          <circle cx="36" cy="48" r="4" fill="#94A3B8" />
          <circle cx="98" cy="48" r="10" fill="#1E293B" />
          <circle cx="98" cy="48" r="4" fill="#94A3B8" />
        </g>

        {/* 10. Citizens on the Street */}
        {/* Citizen 1: Active Resident Snapping Photo */}
        <g id="citizenReporting" transform="translate(70, 168)">
          {/* Head */}
          <circle cx="15" cy="10" r="6" fill="#9A3412" />
          {/* Hair */}
          <path d="M 9 9 Q 15 4 21 9 Z" fill="#1E293B" />
          {/* Torso: Saffron/Orange Shirt */}
          <rect x="10" y="16" width="10" height="18" rx="2" fill="#EA580C" />
          {/* Arm holding phone */}
          <path d="M 18 19 L 28 17" stroke="#9A3412" strokeWidth="2.5" strokeLinecap="round" />
          {/* Smartphone */}
          <rect x="27" y="14" width="4" height="7" rx="1" fill="#1E293B" />
          <rect x="28" y="15" width="2" height="4" fill="#38BDF8" />
          {/* Camera Flash effect */}
          <circle cx="29" cy="15" r="2" fill="#FEF08A" opacity="0.8" />
          {/* Legs */}
          <rect x="10" y="34" width="4" height="22" fill="#334155" rx="1" />
          <rect x="16" y="34" width="4" height="22" fill="#334155" rx="1" />
        </g>

        {/* Citizen 2: Resident Walking Safely */}
        <g id="citizenWalking" transform="translate(195, 172)">
          {/* Head */}
          <circle cx="12" cy="8" r="5" fill="#C2410C" />
          {/* Torso: Blue Kurta */}
          <path d="M 6 13 L 18 13 L 20 32 L 4 32 Z" fill="#0284C7" />
          {/* Backpack / Tote */}
          <rect x="4" y="15" width="5" height="12" rx="1" fill="#475569" />
          {/* Legs */}
          <line x1="9" y1="32" x2="6" y2="48" stroke="#F8FAFC" strokeWidth="3" strokeLinecap="round" />
          <line x1="15" y1="32" x2="19" y2="48" stroke="#F8FAFC" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Citizen 3: Pedestrian on Zebra Crossing */}
        <g id="citizenCrossing" transform="translate(325, 222)">
          <circle cx="10" cy="8" r="5" fill="#9A3412" />
          <rect x="6" y="13" width="8" height="16" rx="2" fill="#059669" />
          <line x1="7" y1="29" x2="4" y2="44" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="12" y1="29" x2="16" y2="44" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>

      {/* Floating Civic Status Badges (Light Themed, Interactive, Realistic) */}
      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-emerald-200/80 rounded-xl px-3 py-1.5 shadow-sm flex items-center space-x-2 text-slate-800 text-[11px] font-medium animate-in fade-in slide-in-from-top-1 duration-300">
        <span className="w-5 h-5 rounded-md bg-emerald-100 flex items-center justify-center text-emerald-600">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </span>
        <div>
          <span className="font-bold text-slate-900 block leading-tight">Pothole Repaired</span>
          <span className="text-[10px] text-slate-500">Ward 04 • Inspected</span>
        </div>
      </div>

      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs border border-orange-200/80 rounded-xl px-3 py-1.5 shadow-sm flex items-center space-x-2 text-slate-800 text-[11px] font-medium hidden sm:flex animate-in fade-in slide-in-from-top-1 duration-300 delay-100">
        <span className="w-5 h-5 rounded-md bg-orange-100 flex items-center justify-center text-orange-600">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <div>
          <span className="font-bold text-slate-900 block leading-tight">Segregated Waste</span>
          <span className="text-[10px] text-slate-500">Scheduled Daily Collection</span>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs border border-blue-200/80 rounded-xl px-3 py-1.5 shadow-sm flex items-center space-x-2 text-slate-800 text-[11px] font-medium animate-in fade-in slide-in-from-bottom-1 duration-300 delay-200">
        <span className="w-5 h-5 rounded-md bg-blue-100 flex items-center justify-center text-blue-600">
          <Zap className="w-3.5 h-3.5" />
        </span>
        <div>
          <span className="font-bold text-slate-900 block leading-tight">100% LED Streetlights</span>
          <span className="text-[10px] text-slate-500">Solar Active &amp; Verified</span>
        </div>
      </div>
    </div>
  );
};

