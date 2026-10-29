import React from 'react';
import { GovernmentEmblem } from './GovernmentEmblem';

interface GovernmentLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const GovernmentLogo: React.FC<GovernmentLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  return (
    <div className={`flex items-center space-x-3 select-none ${className}`}>
      {/* Official Government Seal / Emblem */}
      <GovernmentEmblem size={size} />

      {/* Official Bilingual Government Typography Hierarchy */}
      <div className="flex flex-col">
        {/* Top Micro-Line: National / Municipal Authority */}
        <div className="flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500 leading-none mb-0.5">
          <span className="text-orange-700 font-extrabold">भारत सरकार</span>
          <span className="text-slate-300">•</span>
          <span>GOVT. OF INDIA</span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="text-emerald-700 font-bold hidden sm:inline">MUNICIPAL PORTAL</span>
        </div>

        {/* Main Brand Title & Official Badge */}
        <div className="flex items-center space-x-2">
          <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
            CivicPulse
          </span>
          <span className="text-[10px] px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-300/90 rounded-full font-bold tracking-tight shadow-2xs">
            Public Service
          </span>
        </div>

        {/* Portal Descriptor */}
        {showSubtitle && (
          <p className="text-[11px] text-slate-500 leading-tight mt-0.5 hidden sm:block font-medium">
            Municipal Citizen Grievance Redressal &amp; Resolution System
          </p>
        )}
      </div>
    </div>
  );
};

