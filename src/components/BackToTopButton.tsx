import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  currentSectionIndex: number;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({ currentSectionIndex }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find element for section 3 (Awal Mula YEG)
      const section3 = document.getElementById('section-how-it-started');
      if (section3) {
        const rect = section3.getBoundingClientRect();
        // Visible only after scrolling past the first 3 sections
        const passedThree = rect.bottom < 100 || currentSectionIndex > 3 || window.scrollY > 950;
        setIsVisible(passedThree);
      } else {
        setIsVisible(window.scrollY > 950 || currentSectionIndex > 3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSectionIndex]);

  const scrollToCover = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-5 z-40 no-print animate-in fade-in duration-300">
      <button
        onClick={scrollToCover}
        title="Kembali ke Bagian Teratas"
        className="group flex items-center justify-center p-3 sm:px-4 sm:py-2.5 bg-[#0e1614]/90 hover:bg-[#0a7463] text-white border border-[#0a7463]/50 hover:border-[#34d399] rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
        aria-label="Kembali ke atas"
      >
        <ArrowUp className="w-5 h-5 text-[#34d399] group-hover:text-white stroke-[2.5]" />
        <span className="text-sm font-semibold font-heading hidden sm:inline ml-2 text-neutral-200 group-hover:text-white">
          Ke Atas
        </span>
      </button>
    </div>
  );
};
