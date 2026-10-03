import React from 'react';
import { Download, MessageSquareShare, User, ArrowLeft } from 'lucide-react';
import { downloadPitchDeckPdf } from '../utils/pdfExport';
import { YegLogo } from './YegLogo';

interface HeaderNavProps {
  onOpenCandidateForm: () => void;
  onNavigateToCv: () => void;
  onNavigateToHome: () => void;
  currentView: 'home' | 'cv';
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenCandidateForm,
  onNavigateToCv,
  onNavigateToHome,
  currentView,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#080d0c]/95 backdrop-blur-md border-b border-neutral-800/80 px-3.5 sm:px-6 md:px-8 py-2.5 sm:py-3 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Brand with Enlaraged Logo */}
        <button
          onClick={onNavigateToHome}
          className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer text-left shrink-0"
          title="YEG Production - Kembali ke Beranda"
        >
          {/* Enlarged Logo as requested */}
          <YegLogo size={46} animated={true} />
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-black tracking-tight text-white group-hover:text-[#34d399] transition-colors font-heading leading-tight flex items-center gap-1.5">
              <span>YEG PRODUCTION</span>
            </span>
            <span className="text-[10px] sm:text-xs text-neutral-400 font-mono tracking-wider">
              Creative Production
            </span>
          </div>
        </button>

        {/* Right Actions: Profil Founder CTA, Download PPT 16:9, & Hubungi Kak Ridhwan */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {currentView === 'home' ? (
            /* Dedicated CTA Profil Founder */
            <button
              onClick={onNavigateToCv}
              title="Buka 1 Halaman Profil & CV Lengkap Kak Ridhwan"
              className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#0369a1] to-[#0284c7] hover:from-[#0284c7] hover:to-[#38bdf8] border border-[#38bdf8]/40 rounded-xl transition-all shadow-md shadow-[#0284c7]/20 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              aria-label="Profil Founder"
            >
              <User className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Profil Founder</span>
            </button>
          ) : (
            /* Back to Business Presentation button when on CV page */
            <button
              onClick={onNavigateToHome}
              title="Kembali ke Presentasi Model Bisnis YEG"
              className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-all hover:border-[#34d399] cursor-pointer active:scale-95 whitespace-nowrap"
              aria-label="Presentasi Bisnis"
            >
              <ArrowLeft className="w-4 h-4 text-[#34d399]" />
              <span className="hidden sm:inline">Presentasi Bisnis</span>
            </button>
          )}

          {/* Download PPT 16:9 Button */}
          <button
            onClick={downloadPitchDeckPdf}
            title="Unduh Pitch Deck (Format PPT 16:9 PDF)"
            className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-[#0a7463] rounded-xl transition-all shadow-sm cursor-pointer active:scale-95"
            aria-label="Unduh Pitch Deck 16:9"
          >
            <Download className="w-4 h-4 text-[#34d399]" />
            <span className="hidden md:inline">Unduh PPT 16:9</span>
          </button>

          {/* Contact WA Button */}
          <button
            onClick={onOpenCandidateForm}
            title="Hubungi Kak Ridhwan Langsung via WhatsApp"
            className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-bold text-white bg-[#0a7463] hover:bg-[#086354] border border-[#0a7463] rounded-xl transition-all shadow-sm hover:shadow-[0_0_15px_rgba(10,116,99,0.4)] whitespace-nowrap cursor-pointer active:scale-95"
            aria-label="Hubungi Kak Ridhwan"
          >
            <MessageSquareShare className="w-4 h-4 text-white" />
            <span className="hidden sm:inline">Hubungi Founder</span>
          </button>
        </div>
      </div>
    </header>
  );
};
