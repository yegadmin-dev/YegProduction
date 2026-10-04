import React from 'react';
import yegLogoDark from '../assets/images/yeg-logo.png';
import yegLogoLight from '../image/yeg-logo-siang.png';

interface YegLogoProps {
  className?: string;
  size?: number;
  animated?: boolean;
  theme?: 'light' | 'dark';
}

export const YegLogo: React.FC<YegLogoProps> = ({
  className = '',
  size = 56,
  animated = true,
  theme = 'light',
}) => {
  const logo = theme === 'light' ? yegLogoLight : yegLogoDark;

  return (
    <div
      className={`
        relative inline-flex items-center justify-center
        group
        ${className}
      `}
      style={{
        width: size,
        height: size,
      }}
    >
      {/* CIRCULAR SOFT GLOW */}
      {animated && (
        <div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            pointer-events-none
            blur-[45px]
            transition-all
            duration-500
            ${
              theme === 'light'
                ? `
                  w-[85%]
                  h-[85%]
                  bg-[#0a7463]/20
                  opacity-80
                  group-hover:opacity-100
                `
                : `
                  w-[90%]
                  h-[90%]
                  bg-[#34d399]/20
                  opacity-70
                  group-hover:opacity-100
                `
            }
          `}
        />
      )}

      {/* SECONDARY RADIAL GLOW */}
      {animated && (
        <div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            pointer-events-none
            blur-[70px]
            ${
              theme === 'light'
                ? 'w-[130%] h-[130%] bg-[#22c55e]/8'
                : 'w-[140%] h-[140%] bg-[#0a7463]/12'
            }
          `}
        />
      )}

      <img
        src={logo}
        alt="YEG Production"
        draggable={false}
        className="
          relative
          z-10
          w-full
          h-full
          object-contain
          select-none
          transition-transform
          duration-500
          group-hover:scale-[1.025]
        "
      />
    </div>
  );
};
