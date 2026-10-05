import React from 'react';
import {
  User,
  Download,
  MessageSquareShare,
  Moon,
  Sun,
} from 'lucide-react';
import { YegLogo } from './YegLogo';

type HeaderNavProps = {
  currentView: 'home' | 'cv';
  onNavigateToCv: () => void;
  onNavigateToHome: () => void;
  onOpenCandidateForm: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};

export function HeaderNav({
  currentView,
  onNavigateToCv,
  onNavigateToHome,
  onOpenCandidateForm,
  theme,
  onToggleTheme,
}: HeaderNavProps) {
  return (
    <header
      id="yeg-floating-header"
      className="
        fixed
        top-0
        left-0
        right-0
        z-[100]
        w-full
        border-b
        border-white/10
        bg-[#080d0c]/90
        backdrop-blur-xl
        shadow-[0_8px_30px_rgba(0,0,0,0.25)]
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-3
          sm:px-6
          lg:px-8
          h-[58px]
          sm:h-[68px]
          flex
          items-center
          justify-between
          gap-2
        "
      >

        {/* =========================================================
            LOGO
        ========================================================= */}
        <button
          onClick={onNavigateToHome}
          className="
            flex
            items-center
            shrink-0
            cursor-pointer
            group
          "
          aria-label="YEG Production - Beranda"
        >
          {/* MOBILE LOGO */}
          <div className="sm:hidden flex items-center">
            <YegLogo
              size={42}
              animated={false}
              theme={theme}
            />
          </div>

          {/* DESKTOP LOGO */}
          <div className="hidden sm:flex items-center gap-3">
            <YegLogo
              size={46}
              animated={false}
              theme={theme}
            />

            <div className="leading-none">
              <div className="text-white font-black text-base lg:text-lg tracking-tight">
                YEG PRODUCTION
              </div>

              <div className="text-neutral-400 text-[9px] lg:text-[10px] tracking-[0.18em] mt-1">
                CREATIVE PRODUCTION
              </div>
            </div>
          </div>
        </button>

        {/* =========================================================
            DESKTOP NAVIGATION
        ========================================================= */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-2.5">

          <button
            onClick={onNavigateToCv}
            className="
              px-4
              py-2.5
              rounded-xl
              bg-gradient-to-r
              from-[#0369a1]
              to-[#0284c7]
              border
              border-[#38bdf8]/40
              text-white
              text-sm
              font-bold
              flex
              items-center
              gap-2
              hover:scale-[1.02]
              transition-all
              cursor-pointer
            "
          >
            <User className="w-4 h-4" />
            <span>Profil Founder</span>
          </button>

          <button
            onClick={() => {
              const event = new CustomEvent('yeg-download-ppt');
              window.dispatchEvent(event);
            }}
            className="
              px-4
              py-2.5
              rounded-xl
              bg-neutral-900
              border
              border-neutral-700
              text-neutral-200
              text-sm
              font-semibold
              flex
              items-center
              gap-2
              hover:border-neutral-500
              hover:text-white
              transition-all
              cursor-pointer
            "
          >
            <Download className="w-4 h-4 text-[#34d399]" />
            <span>Unduh PPT 16:9</span>
          </button>

          <button
            onClick={onOpenCandidateForm}
            className="
              px-4
              py-2.5
              rounded-xl
              bg-[#087f69]
              border
              border-[#34d399]/30
              text-white
              text-sm
              font-bold
              flex
              items-center
              gap-2
              hover:bg-[#099879]
              transition-all
              cursor-pointer
            "
          >
            <MessageSquareShare className="w-4 h-4" />
            <span>Hubungi Founder</span>
          </button>

          <button
            onClick={onToggleTheme}
            className="
              w-10
              h-10
              rounded-xl
              border
              border-neutral-700
              bg-neutral-900
              flex
              items-center
              justify-center
              text-neutral-300
              hover:text-white
              hover:border-neutral-500
              transition-all
              cursor-pointer
            "
            aria-label="Ganti tema"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>

        </nav>

        {/* =========================================================
            MOBILE NAVIGATION
        ========================================================= */}
        <nav className="flex md:hidden items-center gap-1.5">

          {/* PROFILE */}
          <button
            onClick={onNavigateToCv}
            className="
              w-9
              h-9
              rounded-xl
              bg-gradient-to-r
              from-[#0369a1]
              to-[#0284c7]
              border
              border-[#38bdf8]/40
              text-white
              flex
              items-center
              justify-center
              cursor-pointer
              active:scale-95
              transition-transform
            "
            aria-label="Profil Founder"
            title="Profil Founder"
          >
            <User className="w-[17px] h-[17px]" />
          </button>

          {/* WHATSAPP / CONTACT */}
          <button
            onClick={onOpenCandidateForm}
            className="
              w-9
              h-9
              rounded-xl
              bg-[#087f69]
              border
              border-[#34d399]/30
              text-white
              flex
              items-center
              justify-center
              cursor-pointer
              active:scale-95
              transition-transform
            "
            aria-label="Hubungi Founder"
            title="Hubungi Founder"
          >
            <MessageSquareShare className="w-[17px] h-[17px]" />
          </button>

          {/* THEME */}
          <button
            onClick={onToggleTheme}
            className="
              w-9
              h-9
              rounded-xl
              border
              border-neutral-700
              bg-neutral-900
              text-neutral-300
              flex
              items-center
              justify-center
              cursor-pointer
              active:scale-95
              transition-transform
            "
            aria-label="Ganti tema"
            title="Ganti tema"
          >
            {theme === 'dark' ? (
              <Sun className="w-[17px] h-[17px]" />
            ) : (
              <Moon className="w-[17px] h-[17px]" />
            )}
          </button>

        </nav>

      </div>
    </header>
  );
}
