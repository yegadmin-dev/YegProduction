import React from 'react';
import yegLogo from '../assets/images/yeg-logo.png';

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
      {animated && (
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a7463] to-[#34d399] rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />
      )}

      <img
        src={yegLogo}
        alt="YEG Production"
        className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  );
};
