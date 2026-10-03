import React from 'react';

interface YegLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
}

export const YegLogo: React.FC<YegLogoProps> = ({
  className = '',
  size = 56,
  animated = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center group ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Ambient background glow */}
      {animated && (
        <div
          className="absolute inset-0 bg-gradient-to-tr from-[#0a7463] to-[#34d399] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none"
        />
      )}

      {/* Modern Creative Monogram for YEG */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105"
      >
        <defs>
          <linearGradient id="yegGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#0a7463" />
            <stop offset="100%" stopColor="#064036" />
          </linearGradient>
          <linearGradient id="yegGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#0a7463" />
          </linearGradient>
          <linearGradient id="yegGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#052e27" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Hexagonal Shield Ring */}
        <polygon
          points="50,6 90,28 90,72 50,94 10,72 10,28"
          stroke="url(#yegGradient1)"
          strokeWidth="3.5"
          fill="#081412"
          filter="url(#shadowFilter)"
          className={animated ? 'animate-pulse' : ''}
          style={{ animationDuration: '4s' }}
        />

        {/* Top 'Y' Branch */}
        <path
          d="M32 28 L50 48 L68 28"
          stroke="url(#yegGradient1)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M50 48 L50 72"
          stroke="url(#yegGradient1)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Dynamic 'E' Wing (Central Creative Bar) */}
        <path
          d="M50 36 L74 36"
          stroke="url(#yegGradient2)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M50 50 L68 50"
          stroke="url(#yegGradient2)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M50 64 L74 64"
          stroke="url(#yegGradient2)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Dynamic 'G' Arc Loop */}
        <path
          d="M30 42 C24 54 28 72 44 76 C58 79 72 74 72 60 L54 60"
          stroke="url(#yegGradient3)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Core Jewel Sparkle Accent */}
        <circle cx="50" cy="48" r="3.5" fill="#ffd700" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="50" cy="48" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
};
