import React from 'react';
import {
  Download,
  MessageSquareShare,
  User,
  ArrowLeft,
  Sun,
  Moon,
} from 'lucide-react';

import { downloadPitchDeckPdf } from '../utils/pdfExport';
import { YegLogo } from './YegLogo';

interface HeaderNavProps {
  onOpenCandidateForm: () => void;
  onNavigateToCv: () => void;
  onNavigateToHome: () => void;
  currentView: 'home' | 'cv';
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenCandidateForm,
  onNavigateToCv,
  onNavigateToHome,
  currentView,
  theme,
  onToggleTheme,
}) => {
  const isLight = theme === 'light';

  return (
    <header
      id="yeg-floating-header"
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        px-3.5
        sm:px-6
        md:px-8
        py-2.5
        sm:py-3
        backdrop-blur-xl
        border-b
        will-change-transform
        opacity-0
        pointer-events-none
        transition-colors
        duration-300
        ${
          isLight
            ? `
              bg-white/90
              border-slate-200/80
              shadow-[0_8px_30px_rgba(15,23,42,0.07)]
            `
            : `
              bg-[#080d0c]/95
              border-neutral-800/80
            `
        }
      `}
    >
      <div
        className="
          max-w-6xl
          mx-auto
          flex
          items-center
          justify-between
          gap-3
        "
      >
        {/* =====================================================
            BRAND
        ====================================================== */}

        <button
          type="button"
          onClick={onNavigateToHome}
          title="YEG Production - Kembali ke Beranda"
          className="
            flex
            items-center
            gap-2.5
            sm:gap-3
            group
            cursor-pointer
            text-left
            shrink-0
            outline-none
            focus-visible:ring-2
            focus-visible:ring-[#0a7463]
            focus-visible:ring-offset-2
            rounded-lg
          "
        >
          {/* LOGO */}

          <div
            id="floating-logo"
            className="
              relative
              flex
              items-center
              justify-center
              w-[46px]
              h-[46px]
              shrink-0
              will-change-transform
            "
          >
            <YegLogo
              size={46}
              animated={true}
              theme={theme}
            />
          </div>

          {/* BRAND TEXT */}

          <div className="flex flex-col">
            <span
              className={`
                text-base
                sm:text-xl
                font-black
                tracking-tight
                font-heading
                leading-tight
                transition-colors
                duration-300
                ${
                  isLight
                    ? 'text-slate-900 group-hover:text-[#0a7463]'
                    : 'text-white group-hover:text-[#34d399]'
                }
              `}
            >
              YEG PRODUCTION
            </span>

            <span
              className={`
                text-[10px]
                sm:text-xs
                font-mono
                tracking-wider
                transition-colors
                duration-300
                ${
                  isLight
                    ? 'text-slate-500'
                    : 'text-neutral-400'
                }
              `}
            >
              Creative Production
            </span>
          </div>
        </button>

        {/* =====================================================
            ACTIONS
        ====================================================== */}

        <div
          id="floating-actions"
          className="
            flex
            items-center
            gap-1.5
            sm:gap-2.5
            will-change-transform
          "
        >
          {/* =================================================
              PROFILE / BACK
          ================================================== */}

          {currentView === 'home' ? (
            <button
              id="floating-profile-cta"
              type="button"
              onClick={onNavigateToCv}
              title="Buka 1 Halaman Profil & CV Lengkap"
              aria-label="Profil Founder"
              className={`
                inline-flex
                items-center
                justify-center
                gap-1.5
                p-2
                sm:px-3.5
                sm:py-2
                text-xs
                sm:text-sm
                font-bold
                rounded-xl
                border
                transition-all
                duration-200
                hover:scale-105
                active:scale-95
                cursor-pointer
                whitespace-nowrap
                outline-none
                focus-visible:ring-2
                focus-visible:ring-sky-500
                ${
                  isLight
                    ? `
                      text-[#075985]
                      bg-sky-50
                      border-sky-200
                      hover:bg-sky-100
                    `
                    : `
                      text-white
                      bg-gradient-to-r
                      from-[#0369a1]
                      to-[#0284c7]
                      border-[#38bdf8]/40
                      hover:brightness-110
                    `
                }
              `}
            >
              <User className="w-4 h-4" />

              <span className="hidden sm:inline">
                Profil Founder
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onNavigateToHome}
              title="Kembali ke Presentasi Model Bisnis YEG"
              aria-label="Presentasi Bisnis"
              className={`
                inline-flex
                items-center
                justify-center
                gap-1.5
                p-2
                sm:px-3.5
                sm:py-2
                text-xs
                sm:text-sm
                font-bold
                rounded-xl
                border
                transition-all
                duration-200
                cursor-pointer
                active:scale-95
                whitespace-nowrap
                outline-none
                focus-visible:ring-2
                focus-visible:ring-[#0a7463]
                ${
                  isLight
                    ? `
                      text-slate-800
                      bg-slate-50
                      border-slate-200
                      hover:border-[#0a7463]
                      hover:bg-white
                    `
                    : `
                      text-white
                      bg-neutral-900
                      border-neutral-700
                      hover:border-[#34d399]
                    `
                }
              `}
            >
              <ArrowLeft
                className={`
                  w-4 h-4
                  ${
                    isLight
                      ? 'text-[#0a7463]'
                      : 'text-[#34d399]'
                  }
                `}
              />

              <span className="hidden sm:inline">
                Presentasi Bisnis
              </span>
            </button>
          )}

          {/* =================================================
              DOWNLOAD
          ================================================== */}

          <button
            id="floating-download-cta"
            type="button"
            onClick={downloadPitchDeckPdf}
            title="Unduh Pitch Deck"
            aria-label="Unduh Pitch Deck 16:9"
            className={`
              inline-flex
              items-center
              justify-center
              gap-1.5
              p-2
              sm:px-3
              sm:py-2
              text-xs
              sm:text-sm
              font-semibold
              rounded-xl
              border
              transition-all
              duration-200
              shadow-sm
              cursor-pointer
              active:scale-95
              outline-none
              focus-visible:ring-2
              focus-visible:ring-[#0a7463]
              ${
                isLight
                  ? `
                    text-slate-700
                    bg-white
                    border-slate-200
                    hover:border-[#0a7463]
                    hover:bg-slate-50
                  `
                  : `
                    text-neutral-200
                    bg-neutral-900/90
                    border-neutral-700/80
                    hover:border-[#0a7463]
                    hover:bg-neutral-800
                  `
              }
            `}
          >
            <Download className="w-4 h-4 text-[#0a7463]" />

            <span className="hidden md:inline">
              Unduh PPT 16:9
            </span>
          </button>

          {/* =================================================
              CONTACT FOUNDER
          ================================================== */}

          <button
            id="floating-founder-cta"
            type="button"
            onClick={onOpenCandidateForm}
            title="Hubungi Founder"
            aria-label="Hubungi Founder"
            className={`
              inline-flex
              items-center
              justify-center
              gap-1.5
              p-2
              sm:px-3.5
              sm:py-2
              text-xs
              sm:text-sm
              font-bold
              rounded-xl
              border
              transition-all
              duration-200
              shadow-sm
              whitespace-nowrap
              cursor-pointer
              active:scale-95
              will-change-transform
              outline-none
              focus-visible:ring-2
              focus-visible:ring-[#34d399]
              ${
                isLight
                  ? `
                    text-white
                    bg-[#0a7463]
                    hover:bg-[#086354]
                    border-[#0a7463]
                    shadow-[0_8px_22px_rgba(10,116,99,0.16)]
                  `
                  : `
                    text-white
                    bg-[#0a7463]
                    hover:bg-[#086354]
                    border-[#0a7463]
                  `
              }
            `}
          >
            <MessageSquareShare className="w-4 h-4" />

            <span className="hidden sm:inline">
              Hubungi Founder
            </span>
          </button>

          {/* =================================================
              THEME TOGGLE
          ================================================== */}

          <button
            id="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            title={
              isLight
                ? 'Aktifkan mode malam'
                : 'Aktifkan mode siang'
            }
            aria-label={
              isLight
                ? 'Aktifkan mode malam'
                : 'Aktifkan mode siang'
            }
            className={`
              ml-0.5
              sm:ml-1
              inline-flex
              items-center
              justify-center
              w-9
              h-9
              sm:w-10
              sm:h-10
              rounded-full
              border
              transition-all
              duration-200
              cursor-pointer
              active:scale-90
              outline-none
              focus-visible:ring-2
              focus-visible:ring-[#0a7463]
              ${
                isLight
                  ? `
                    bg-slate-100
                    border-slate-200
                    text-amber-500
                    hover:bg-amber-50
                  `
                  : `
                    bg-neutral-900
                    border-neutral-700
                    text-[#34d399]
                    hover:border-[#34d399]/50
                  `
              }
            `}
          >
            {isLight ? (
              <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            ) : (
              <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
