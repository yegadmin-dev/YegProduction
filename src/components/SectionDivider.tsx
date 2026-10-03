import React from 'react';

interface SectionDividerProps {
  variant?: 'emerald' | 'amber' | 'blue' | 'purple';
  symbol?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = 'emerald',
}) => {
  const gradientColors = {
    emerald: 'from-transparent via-[#0a7463]/70 to-transparent',
    amber: 'from-transparent via-[#f59e0b]/60 to-transparent',
    blue: 'from-transparent via-[#0284c7]/60 to-transparent',
    purple: 'from-transparent via-[#a855f7]/60 to-transparent',
  };

  const dotColors = {
    emerald: 'bg-[#34d399] shadow-[0_0_12px_#34d399]',
    amber: 'bg-[#fbbf24] shadow-[0_0_12px_#fbbf24]',
    blue: 'bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]',
    purple: 'bg-[#c084fc] shadow-[0_0_12px_#c084fc]',
  };

  return (
    <div className="relative py-6 sm:py-10 max-w-5xl mx-auto px-4 flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Animated glowing hairline */}
      <div className={`w-full h-[1px] bg-gradient-to-r ${gradientColors[variant]} opacity-70 animate-pulse`} />

      {/* Floating Center Motif */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-[#090e0d] border border-neutral-800 rounded-full">
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]} animate-ping`} style={{ animationDuration: '2.5s' }} />
        <span className={`w-2 h-2 rounded-full ${dotColors[variant]}`} />
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]} animate-ping`} style={{ animationDuration: '3.5s' }} />
      </div>
    </div>
  );
};
