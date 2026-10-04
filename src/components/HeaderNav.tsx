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

        ${
          isLight
            ? `
              bg-white/90
              border-slate-200/80
              shadow-[0_8px_30px_rgba(15,23,42,0.07)]
            `
            : `
              bg-[#080d0c]/92
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
          onClick={onNavigateToHome}
          className="
            flex
            items-center
            gap-2.5
            sm:gap-3
            group
            cursor-pointer
            text-left
            shrink-0
          "
          title="YEG Production - Kembali ke Beranda"
        >

          {/* =================================================
              MORPH TARGET LOGO
          ================================================== */}

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

          {/* PROFILE */}

          {currentView === 'home' ? (
            <button
              id="floating-profile-cta"
              onClick={onNavigateToCv}
              title="Buka 1 Halaman Profil & CV Lengkap"
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

                hover:scale-105
                active:scale-95

                cursor-pointer
                whitespace-nowrap

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
                    `
                }
              `}
              aria-label="Profil Founder"
            >
              <User className="w-4 h-4" />

              <span className="hidden sm:inline">
                Profil Founder
              </span>
            </button>
          ) : (
            <button
              onClick={onNavigateToHome}
              title="Kembali ke Presentasi Model Bisnis YEG"
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

                cursor-pointer
                active:scale-95
                whitespace-nowrap

                ${
                  isLight
                    ? `
                      text-slate-800
                      bg-slate-50
                      border-slate-200
                      hover:border-[#0a7463]
                    `
                    : `
                      text-white
                      bg-neutral-900
                      border-neutral-700
                      hover:border-[#34d399]
                    `
                }
              `}
              aria-label="Presentasi Bisnis"
            >
              <ArrowLeft className="w-4 h-4 text-[#0a7463]" />

              <span className="hidden sm:inline">
                Presentasi Bisnis
              </span>
            </button>
          )}

          {/* DOWNLOAD */}

          <button
            id="floating-download-cta"
            onClick={downloadPitchDeckPdf}
            title="Unduh Pitch Deck"
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

              shadow-sm

              cursor-pointer
              active:scale-95

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
            aria-label="Unduh Pitch Deck 16:9"
          >
            <Download className="w-4 h-4 text-[#0a7463]" />

            <span className="hidden md:inline">
              Unduh PPT 16:9
            </span>
          </button>

          {/* =================================================
              MORPH TARGET CTA
          ================================================== */}

          <button
            id="floating-founder-cta"
            onClick={onOpenCandidateForm}
            title="Hubungi Founder"
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

              shadow-sm

              whitespace-nowrap

              cursor-pointer
              active:scale-95

              will-change-transform

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
            aria-label="Hubungi Founder"
          >
            <MessageSquareShare className="w-4 h-4" />

            <span className="hidden sm:inline">
              Hubungi Founder
            </span>
          </button>

          {/* =================================================
              DAY / NIGHT
          ================================================== */}

          <button
            id="theme-toggle"
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

              cursor-pointer
              active:scale-90

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
