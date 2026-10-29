import React from 'react';

interface GovernmentEmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const GovernmentEmblem: React.FC<GovernmentEmblemProps> = ({
  size = 'md',
  className = '',
  showText = false,
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-xs"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Official Government of India Civic Emblem"
      >
        <defs>
          <linearGradient id="emblemGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="sealBg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFBEB" />
          </linearGradient>

          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#D97706" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* Outer Circular Seal Rim */}
        <circle cx="50" cy="50" r="48" fill="url(#sealBg)" stroke="#D97706" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="44" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 1.5" />

        {/* Tricolor Outer Ring Arcs */}
        {/* Top Arc Saffron */}
        <path
          d="M 12 50 A 38 38 0 0 1 88 50"
          fill="none"
          stroke="#EA580C"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Bottom Arc Green */}
        <path
          d="M 88 50 A 38 38 0 0 1 12 50"
          fill="none"
          stroke="#16A34A"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Center Circular Medallion */}
        <circle cx="50" cy="50" r="34" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />

        {/* Ashoka Lion Capital (State Emblem of India) Vector Silhouette */}
        <g id="lionCapital" fill="#B45309" stroke="#92400E" strokeWidth="0.4">
          {/* Central Lion Head */}
          <path d="M 46 16 C 46 13, 54 13, 54 16 C 56 18, 57 21, 55 24 C 53 26, 47 26, 45 24 C 43 21, 44 18, 46 16 Z" />
          {/* Central Lion Mane */}
          <path d="M 43 22 C 41 24, 42 30, 44 33 C 46 36, 54 36, 56 33 C 58 30, 59 24, 57 22 C 55 25, 45 25, 43 22 Z" />
          {/* Left Lion Profile */}
          <path d="M 43 21 C 40 18, 35 19, 36 24 C 37 27, 40 29, 43 29 C 42 26, 41 23, 43 21 Z" />
          <path d="M 36 24 C 33 26, 34 32, 38 34 C 40 35, 43 34, 43 32 C 40 32, 37 30, 36 24 Z" />
          {/* Right Lion Profile */}
          <path d="M 57 21 C 60 18, 65 19, 64 24 C 63 27, 60 29, 57 29 C 58 26, 59 23, 57 21 Z" />
          <path d="M 64 24 C 67 26, 66 32, 62 34 C 60 35, 57 34, 57 32 C 60 32, 63 30, 64 24 Z" />
          
          {/* Muzzle / Facial Details */}
          <circle cx="48.5" cy="19" r="0.8" fill="#451A03" />
          <circle cx="51.5" cy="19" r="0.8" fill="#451A03" />
          <path d="M 49 21 L 51 21 L 50 22.5 Z" fill="#451A03" />

          {/* Abacus / Base Platform */}
          <rect x="32" y="36" width="36" height="5" rx="1.5" fill="#B45309" stroke="#78350F" strokeWidth="0.6" />
        </g>

        {/* The Ashoka Chakra (24-Spoked Dharma Wheel) on Abacus Center */}
        <g id="ashokaChakra" transform="translate(50, 52)">
          {/* Outer Wheel Rim */}
          <circle cx="0" cy="0" r="14" fill="#F8FAFC" stroke="#000080" strokeWidth="2" />
          <circle cx="0" cy="0" r="12.5" fill="none" stroke="#000080" strokeWidth="0.5" />
          {/* Center Hub */}
          <circle cx="0" cy="0" r="3.2" fill="#000080" />
          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />

          {/* 24 Radiating Spokes */}
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2="0"
              y2="-13"
              stroke="#000080"
              strokeWidth="0.9"
              transform={`rotate(${i * 15})`}
            />
          ))}
        </g>

        {/* Galloping Horse (Left) & Bull (Right) on Abacus */}
        {/* Galloping Horse silhouette (Left) */}
        <path
          d="M 23 53 C 24 51, 26 50, 28 51 C 29 52, 28 54, 26 55 C 24 56, 22 55, 23 53 Z"
          fill="#B45309"
        />
        {/* Zebu Bull silhouette (Right) */}
        <path
          d="M 77 53 C 76 51, 74 50, 72 51 C 71 52, 72 54, 74 55 C 76 56, 78 55, 77 53 Z"
          fill="#B45309"
        />

        {/* Lower Inscription Banner: Satyameva Jayate (सत्यमेव जयते) */}
        <path d="M 28 72 L 72 72 L 70 79 L 30 79 Z" fill="#FFFBEB" stroke="#B45309" strokeWidth="0.8" />
        <text
          x="50"
          y="77"
          textAnchor="middle"
          fontSize="5"
          fontWeight="bold"
          fill="#78350F"
          fontFamily="serif"
          letterSpacing="0.4"
        >
          सत्यमेव जयते
        </text>

        {/* Decorative Golden Stars / Dots */}
        <circle cx="21" cy="40" r="1.5" fill="#D97706" />
        <circle cx="79" cy="40" r="1.5" fill="#D97706" />
        <circle cx="50" cy="85" r="1.8" fill="#D97706" />
      </svg>
      {showText && (
        <span className="sr-only">Government of India Official Emblem</span>
      )}
    </div>
  );
};

