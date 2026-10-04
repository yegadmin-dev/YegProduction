import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeaderNav } from './components/HeaderNav';
import { CandidateModal } from './components/CandidateModal';
import { FounderCVSection } from './components/FounderCVSection';
import { BackToTopButton } from './components/BackToTopButton';
import { InteractiveMapCustomizer } from './components/InteractiveMapCustomizer';
import { PartnerQuizMatcher } from './components/PartnerQuizMatcher';
import { SectionDivider } from './components/SectionDivider';
import { YegLogo } from './components/YegLogo';
import { downloadPitchDeckPdf } from './utils/pdfExport';
import {
  Sparkles,
  Download,
  MessageSquareShare,
  ArrowRight,
  CheckCircle2,
  Layers,
  Palette,
  TrendingUp,
  Shirt,
  Calendar,
  Cpu,
  Tv,
  Lightbulb,
  Users,
  ShieldCheck,
  Quote,
  Clock,
  User,
  HeartHandshake,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'cv'>('home');
  const [isCandidateModalOpen, setIsCandidateModalOpen] = useState<boolean>(false);
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);
  const [conceptTab, setConceptTab] = useState<'sekarang' | 'sebelumnya'>('sekarang');
  const [scrollSectionIndex, setScrollSectionIndex] = useState<number>(1);

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('yeg-theme') === 'dark'
      ? 'dark'
      : 'light';
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const heroFounderCtaRef = useRef<HTMLButtonElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const heroTaglineRef = useRef<HTMLDivElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const heroCtasRef = useRef<HTMLDivElement>(null);
  const heroVisualRef = useRef<HTMLDivElement>(null);
  const heroMetricsRef = useRef<HTMLDivElement>(null);

  const navigateToCv = () => {
    setCurrentView('cv');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ============================================================
  // THEME
  // ============================================================

  useEffect(() => {
    document.documentElement.dataset.yegTheme = theme;
    localStorage.setItem('yeg-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === 'light' ? 'dark' : 'light'
    );
  };

  // ============================================================
  // GSAP
  // TRUE HERO → NAVBAR MORPH
  // ============================================================

  useLayoutEffect(() => {
    if (currentView !== 'home') return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ========================================================
      // DESKTOP
      // ========================================================

      mm.add('(min-width: 768px)', () => {
        // ------------------------------------------------------
        // HERO INTRO
        // ------------------------------------------------------

        const intro = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
        });

        intro
          .fromTo(
            heroBadgeRef.current,
            {
              opacity: 0,
              y: -15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
            }
          )
          .fromTo(
            heroLogoRef.current,
            {
              opacity: 0,
              scale: 0.92,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.65,
            },
            '-=0.25'
          )
          .fromTo(
            heroTitleRef.current,
            {
              opacity: 0,
              y: 25,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
            },
            '-=0.35'
          )
          .fromTo(
            heroSubtitleRef.current,
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
            },
            '-=0.3'
          )
          .fromTo(
            heroTaglineRef.current,
            {
              opacity: 0,
              y: 12,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
            },
            '-=0.3'
          )
          .fromTo(
            heroDescRef.current,
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.45,
            },
            '-=0.25'
          )
          .fromTo(
            heroCtasRef.current,
            {
              opacity: 0,
              y: 18,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
            },
            '-=0.25'
          )
          .fromTo(
            heroVisualRef.current,
            {
              opacity: 0,
              y: 25,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
            },
            '-=0.25'
          )
          .fromTo(
            heroMetricsRef.current,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
            },
            '-=0.35'
          );

        // ------------------------------------------------------
        // MORPH TARGETS
        // ------------------------------------------------------

        const header = document.getElementById(
          'yeg-floating-header'
        );
        
        const floatingLogo = document.getElementById(
          'floating-logo'
        );

        const floatingFounderCta = document.getElementById(
          'floating-founder-cta'
        );

        const floatingActions = document.getElementById(
          'floating-actions'
        );

        const themeToggle = document.getElementById(
          'theme-toggle'
        );

        const hero = heroRef.current;
        const heroLogo = heroLogoRef.current;
        const heroCta = heroFounderCtaRef.current;

        if (
          !header ||
          !floatingLogo ||
          !floatingFounderCta ||
          !hero ||
          !heroLogo ||
          !heroCta
        ) {
          return;
        }

        // ------------------------------------------------------
        // INITIAL NAVBAR STATE
        // ------------------------------------------------------

        gsap.set(header, {
          opacity: 0,
          y: -90,
          pointerEvents: 'none',
        });

        gsap.set(
          [floatingLogo, floatingFounderCta],
          {
            opacity: 0,
          }
        );

        if (floatingActions) {
          gsap.set(
            floatingActions,
            {
              x: 26,
              opacity: 0,
            }
          );
        }

        if (themeToggle) {
          gsap.set(
            themeToggle,
            {
              scale: 0.75,
              opacity: 0,
            }
          );
        }

        // ------------------------------------------------------
        // GET ACTUAL SOURCE / TARGET POSITION
        // ------------------------------------------------------

        const getMorph = () => {
          const sourceLogo =
            heroLogo.getBoundingClientRect();

          const targetLogo =
            floatingLogo.getBoundingClientRect();

          const sourceCta =
            heroCta.getBoundingClientRect();

          const targetCta =
            floatingFounderCta.getBoundingClientRect();

          return {
            logoX:
              targetLogo.left +
              targetLogo.width / 2 -
              (
                sourceLogo.left +
                sourceLogo.width / 2
              ),

            logoY:
              targetLogo.top +
              targetLogo.height / 2 -
              (
                sourceLogo.top +
                sourceLogo.height / 2
              ),

            logoScale:
              Math.min(
                targetLogo.width /
                  sourceLogo.width,

                targetLogo.height /
                  sourceLogo.height
              ),

            ctaX:
              targetCta.left +
              targetCta.width / 2 -
              (
                sourceCta.left +
                sourceCta.width / 2
              ),

            ctaY:
              targetCta.top +
              targetCta.height / 2 -
              (
                sourceCta.top +
                sourceCta.height / 2
              ),

            ctaScale:
              Math.min(
                targetCta.width /
                  sourceCta.width,

                targetCta.height /
                  sourceCta.height
              ),
          };
        };

        // ------------------------------------------------------
        // MAIN MORPH TIMELINE
        // ------------------------------------------------------

        const morph = gsap.timeline({
          scrollTrigger: {
            trigger: hero,

            start: 'top top',

            end: '+=700',

            scrub: 1.05,

            pin: true,

            pinSpacing: true,

            anticipatePin: 1,

            invalidateOnRefresh: true,

            onUpdate: (self) => {
              header.style.pointerEvents =
                self.progress > 0.94
                  ? 'auto'
                  : 'none';
            },
          },
        });

        // ------------------------------------------------------
        // 1. NAVBAR TURUN DARI ATAS
        // BUKAN SEKADAR FADE
        // ------------------------------------------------------

        morph.to(
          header,
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            ease: 'power2.out',
          },
          0.08
        );

        // ------------------------------------------------------
        // 2. LOGO HERO → LOGO NAVBAR
        // POSISI DIHITUNG DARI RECT ASLI
        // ------------------------------------------------------

        morph.to(
          heroLogo,
          {
            x: () => getMorph().logoX,
            y: () => getMorph().logoY,

            scale: () =>
              getMorph().logoScale,

            duration: 0.86,

            ease: 'power3.inOut',
          },
          0.06
        );

        // ------------------------------------------------------
        // 3. CTA HERO → CTA NAVBAR
        // ------------------------------------------------------

        morph.to(
          heroCta,
          {
            x: () => getMorph().ctaX,
            y: () => getMorph().ctaY,

            scale: () =>
              getMorph().ctaScale,

            duration: 0.8,

            ease: 'power3.inOut',
          },
          0.1
        );

        // ------------------------------------------------------
        // 4. HERO TEXT MUNDUR PERLAHAN
        // ------------------------------------------------------

        morph.to(
          [
            heroTitleRef.current,
            heroSubtitleRef.current,
            heroTaglineRef.current,
            heroDescRef.current,
          ],
          {
            y: -42,
            opacity: 0.2,

            duration: 0.55,

            stagger: 0.025,

            ease: 'power2.out',
          },
          0.16
        );

        // ------------------------------------------------------
        // 5. NAVBAR LOGO / CTA HANDOFF
        // ------------------------------------------------------

        morph.to(
          floatingLogo,
          {
            opacity: 1,
            duration: 0.06,
            ease: 'none',
          },
          0.91
        );

        morph.to(
          floatingFounderCta,
          {
            opacity: 1,
            duration: 0.06,
            ease: 'none',
          },
          0.91
        );

        // Source baru menghilang ketika sudah hampir
        // menyatu dengan target.

        morph.to(
          heroLogo,
          {
            opacity: 0,
            duration: 0.035,
            ease: 'none',
          },
          0.955
        );

        morph.to(
          heroCta,
          {
            opacity: 0,
            duration: 0.035,
            ease: 'none',
          },
          0.955
        );

        // ------------------------------------------------------
        // 6. ACTION NAVBAR MASUK DARI SAMPING
        // ------------------------------------------------------

        if (floatingActions) {
          morph.to(
            floatingActions,
            {
              x: 0,
              opacity: 1,

              duration: 0.22,

              ease: 'power2.out',
            },
            0.74
          );
        }

        // ------------------------------------------------------
        // 7. THEME TOGGLE
        // ------------------------------------------------------

        if (themeToggle) {
          morph.to(
            themeToggle,
            {
              scale: 1,
              opacity: 1,

              duration: 0.18,

              ease: 'back.out(1.5)',
            },
            0.82
          );
        }

        // ------------------------------------------------------
        // SECTION REVEAL
        // ------------------------------------------------------

        document
          .querySelectorAll('.gsap-reveal-section')
          .forEach((section, index) => {
            const initialClip =
              index % 2 === 0
                ? 'inset(6% 0% 6% 0% round 28px)'
                : 'inset(0% 4% 0% 4% round 28px)';

            gsap.fromTo(
              section,
              {
                clipPath: initialClip,
                opacity: 0.2,
                y: 40,
              },
              {
                clipPath:
                  'inset(0% 0% 0% 0% round 28px)',

                opacity: 1,

                y: 0,

                duration: 0.9,

                ease: 'power3.out',

                scrollTrigger: {
                  trigger: section,

                  start: 'top 85%',

                  end: 'bottom 15%',

                  toggleActions:
                    'play none none reverse',
                },
              }
            );

            const cards =
              section.querySelectorAll(
                '.gsap-card-stagger'
              );

            if (cards.length) {
              gsap.fromTo(
                cards,
                {
                  opacity: 0,
                  y: 25,
                  scale: 0.98,
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,

                  duration: 0.6,

                  stagger: 0.08,

                  ease: 'power2.out',

                  scrollTrigger: {
                    trigger: section,

                    start: 'top 80%',

                    toggleActions:
                      'play none none reverse',
                  },
                }
              );
            }
          });
      });

      // ========================================================
      // MOBILE
      // ========================================================

      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          [
            heroLogoRef.current,
            heroTitleRef.current,
            heroSubtitleRef.current,
            heroCtasRef.current,
          ],
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          }
        );

        const mobileHeader =
          document.getElementById(
            'yeg-floating-header'
          );

        if (mobileHeader) {
          gsap.set(
            mobileHeader,
            {
              opacity: 0,
              y: -70,
              pointerEvents: 'none',
            }
          );

          ScrollTrigger.create({
            trigger: heroRef.current,

            start: 'top top',

            end: '+=260',

            scrub: 0.8,

            onUpdate: (self) => {
              const p =
                self.progress;

              gsap.set(
                mobileHeader,
                {
                  opacity: p,
                  y: -70 + p * 70,
                }
              );

              mobileHeader.style.pointerEvents =
                p > 0.9
                  ? 'auto'
                  : 'none';
            },
          });
        }

        document
          .querySelectorAll('.gsap-reveal-section')
          .forEach((section) => {
            gsap.fromTo(
              section,
              {
                opacity: 0.1,
                y: 20,
              },
              {
                opacity: 1,
                y: 0,

                duration: 0.5,

                ease: 'power2.out',

                scrollTrigger: {
                  trigger: section,

                  start: 'top 92%',

                  toggleActions:
                    'play none none reverse',
                },
              }
            );
          });
      });
    });

    return () => ctx.revert();
  }, [currentView]);

  // ============================================================
  // MONITOR SCROLL POSITION
  // ============================================================

  useEffect(() => {
    const handleScroll = () => {
      const sectionHowItStarted =
        document.getElementById(
          'section-how-it-started'
        );

      if (sectionHowItStarted) {
        const rect =
          sectionHowItStarted.getBoundingClientRect();

        if (rect.bottom < 100) {
          setScrollSectionIndex(4);
        } else {
          setScrollSectionIndex(2);
        }
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );
  }, []);

  const scrollToSection = (id: string) => {
    const el =
      document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleOpenDirectWhatsApp = () => {
    const message = `Halo Kak Ridhwan (Founder YEG Production)!
Saya tertarik dengan kesempatan Creative Production Partner yang sedang dibuka.

Saya sudah membaca informasi mengenai YEG Production dan ingin mengikuti proses selanjutnya.

Berikut data singkat saya:
Nama: 
Domisili: 
Usia: 
Skill: 
Pengalaman: 

Terima kasih.`;

    const encoded =
      encodeURIComponent(message);

    window.open(
      `https://wa.me/6289674849505?text=${encoded}`,
      '_blank'
    );
  };

  const pipelineSteps = [
    {
      step: '01',
      title: 'Ide',
      subtitle: 'Gagasan & Solusi',
      desc: 'Mengidentifikasi kebutuhan riil klien (map ijazah sekolah, identitas visual, atau merchandise promosi).',
    },
    {
      step: '02',
      title: 'Desain',
      subtitle: 'Visual & Prototyping',
      desc: 'Menerjemahkan konsep jadi layout siap cetak dan mock-up realistis tanpa biaya desain terpisah.',
    },
    {
      step: '03',
      title: 'Produksi',
      subtitle: 'Vendor & Manufaktur',
      desc: 'Koordinasi langsung dengan mitra percetakan terpercaya: bahan ASE kulit sintetis, foil emas, dan finishing.',
    },
    {
      step: '04',
      title: 'Produk Jadi',
      subtitle: 'Nilai Ekonomi Nyata',
      desc: 'Pengiriman produk fisik bernilai jual tinggi langsung ke tangan klien dengan margin keuntungan nyata.',
    },
  ];

  const rolesList = [
    {
      title: 'CREATIVE',
      desc: 'Desain, konsep visual, ide produk, dan branding sistematis.',
      icon: Palette,
      themeColor:
        'from-[#0369a1]/20 to-[#075985]/10 border-[#0284c7]/40 text-[#38bdf8]',
      skills: [
        'Photoshop / Canva',
        'Tipografi & Mockup',
        'Visual Ideation',
      ],
    },
    {
      title: 'BUSINESS',
      desc: 'Riset pasar sekolah & instansi, mencari peluang, dan menyusun penawaran.',
      icon: TrendingUp,
      themeColor:
        'from-[#15803d]/20 to-[#166534]/10 border-[#22c55e]/40 text-[#4ade80]',
      skills: [
        'Market Mapping',
        'Proposal Penawaran',
        'Pricing Structure',
      ],
    },
    {
      title: 'CLIENT',
      desc: 'Komunikasi hangat, follow-up kebutuhan, dan konsultasi ramah dengan calon klien.',
      icon: Users,
      themeColor:
        'from-[#a21caf]/20 to-[#86198f]/10 border-[#c026d3]/40 text-[#e879f9]',
      skills: [
        'WA Communication',
        'Client Listening',
        'Service Excellence',
      ],
    },
    {
      title: 'PRODUCTION',
      desc: 'Koordinasi vendor percetakan, cek sampel bahan, dan kontrol kualitas produk.',
      icon: Layers,
      themeColor:
        'from-[#b45309]/20 to-[#92400e]/10 border-[#f59e0b]/40 text-[#fbbf24]',
      skills: [
        'Material Sourcing',
        'Quality Control',
        'Vendor Networking',
      ],
    },
    {
      title: 'DIGITAL',
      desc: 'Pengelolaan social media feeds, dokumentasi karya, dan digital marketing.',
      icon: Cpu,
      themeColor:
        'from-[#0e7490]/20 to-[#155e75]/10 border-[#06b6d4]/40 text-[#22d3ee]',
      skills: [
        'Social Media',
        'Content Strategy',
        'Documentation',
      ],
    },
    {
      title: 'DEVELOPMENT',
      desc: 'Mencari peluang inovasi produk fisik dan bidang bisnis baru yang potensial.',
      icon: Lightbulb,
      themeColor:
        'from-[#4338ca]/20 to-[#3730a3]/10 border-[#6366f1]/40 text-[#818cf8]',
      skills: [
        'New Product Ideas',
        'Ecosystem Scale',
        'Creative Solutions',
      ],
    },
  ];

  return (
    <div
      className={`
        ${
          theme === 'light'
            ? 'min-h-screen bg-slate-50 text-slate-900 selection:bg-[#0a7463] selection:text-white'
            : 'min-h-screen bg-[#080d0c] text-neutral-100 selection:bg-[#0a7463] selection:text-white'
        }
        flex
        flex-col
        font-sans
      `}
      data-yeg-theme={theme}
    >
      {/* ============================================================
          HEADER
      ============================================================ */}

      <HeaderNav
        currentView={currentView}
        onNavigateToCv={navigateToCv}
        onNavigateToHome={navigateToHome}
        onOpenCandidateForm={() =>
          setIsCandidateModalOpen(true)
        }
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* ============================================================
          VIEW CONDITIONAL
      ============================================================ */}

      {currentView === 'cv' ? (
        <main className="flex-1 pb-20">
          <FounderCVSection
            onBackToHome={navigateToHome}
          />
        </main>
      ) : (
        <main className="flex-1 space-y-12 sm:space-y-20 md:space-y-24 pb-24">

          {/* ============================================================
              HERO COVER
          ============================================================ */}

          <section
            ref={heroRef}
            id="hero-cover"
            className={`
              relative
              min-h-[680px]
              lg:min-h-[720px]
              pt-8
              sm:pt-12
              md:pt-16
              px-3.5
              sm:px-6
              md:px-8
              ${
                theme === 'light'
                  ? 'bg-white'
                  : 'bg-[#080d0c]'
              }
              overflow-visible
            `}
          >
            {/* Circular Ambient Glow */}

            <div
              className="
                absolute
                left-[58%]
                top-[42%]
                -translate-x-1/2
                -translate-y-1/2

                w-[280px]
                h-[280px]

                lg:w-[520px]
                lg:h-[520px]

                rounded-full

                bg-[#0a7463]/12

                blur-[110px]

                pointer-events-none
              "
            />

            <div
              className="
                max-w-6xl
                mx-auto
                relative
                z-10
              "
            >
              {/* =====================================================
                  BADGES
              ====================================================== */}

              <div
                ref={heroBadgeRef}
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  mb-8
                  lg:mb-10
                "
              >
                <span
                  className={`
                    px-3
                    py-1
                    sm:px-3.5
                    sm:py-1.5
                    rounded-full
                    border
                    text-[11px]
                    sm:text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    font-mono
                    flex
                    items-center
                    gap-1.5
                    ${
                      theme === 'light'
                        ? 'bg-emerald-50 border-emerald-200 text-[#0a7463]'
                        : 'bg-[#0a7463]/25 border-[#0a7463]/50 text-[#34d399]'
                    }
                  `}
                >
                  <Sparkles className="w-3.5 h-3.5" />

                  CREATIVE PRODUCTION PLATFORM
                </span>

                <span
                  className={
                    theme === 'light'
                      ? 'text-slate-300'
                      : 'text-neutral-500'
                  }
                >
                  ·
                </span>

                <span
                  className={`
                    px-2.5
                    py-1
                    rounded-full
                    border
                    text-[11px]
                    sm:text-xs
                    font-mono
                    ${
                      theme === 'light'
                        ? 'bg-slate-100 border-slate-200 text-slate-500'
                        : 'bg-neutral-900 border-neutral-700/80 text-neutral-300'
                    }
                  `}
                >
                  Est. 2025 · Bandung
                </span>
              </div>

              {/* =====================================================
                  HERO GRID
              ====================================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-[minmax(0,1fr)_430px]
                  gap-10
                  lg:gap-14
                  items-center
                  min-h-[560px]
                "
              >

                {/* =================================================
                    LEFT CONTENT
                ================================================== */}

                <div className="space-y-5 sm:space-y-7">

                  <div className="space-y-3 sm:space-y-4">

                    <h1
                      ref={heroTitleRef}
                      className={`
                        text-4xl
                        sm:text-6xl
                        md:text-7xl
                        lg:text-[78px]

                        font-black
                        tracking-tight
                        font-heading
                        leading-[1.02]

                        ${
                          theme === 'light'
                            ? 'text-slate-950'
                            : 'text-white'
                        }
                      `}
                    >
                      YEG PRODUCTION
                    </h1>

                    <p
                      ref={heroSubtitleRef}
                      className="
                        text-xl
                        sm:text-3xl
                        md:text-4xl

                        font-bold

                        text-[#0a7463]

                        font-heading
                      "
                    >
                      Your Expression, Our Creation.
                    </p>

                    <div
                      ref={heroTaglineRef}
                      className={`
                        text-sm
                        sm:text-xl
                        md:text-2xl

                        font-light

                        flex
                        items-center
                        flex-wrap
                        gap-1.5

                        ${
                          theme === 'light'
                            ? 'text-slate-600'
                            : 'text-neutral-200'
                        }
                      `}
                    >
                      <span
                        className={`
                          font-bold

                          ${
                            theme === 'light'
                              ? 'text-slate-900'
                              : 'text-white'
                          }
                        `}
                      >
                        Creative Production
                      </span>

                      <span
                        className={
                          theme === 'light'
                            ? 'text-slate-300'
                            : 'text-neutral-500'
                        }
                      >
                        —
                      </span>

                      <span>
                        Building from Ideas, Creating Value.
                      </span>
                    </div>

                    <p
                      ref={heroDescRef}
                      className={`
                        text-xs
                        sm:text-base

                        max-w-2xl

                        leading-relaxed

                        ${
                          theme === 'light'
                            ? 'text-slate-600'
                            : 'text-neutral-300'
                        }
                      `}
                    >
                      Mengubah gagasan dan kreativitas menjadi produk bernilai guna serta bernilai ekonomi nyata. Menghubungkan alur komprehensif mulai dari{' '}
                      <strong>
                        Ide → Desain Visual → Produksi Vendor → Produk Jadi
                      </strong>
                      .
                    </p>
                  </div>

                  {/* =================================================
                      HERO CTA
                  ================================================== */}

                  <div
                    ref={heroCtasRef}
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-2
                      sm:gap-3
                      pt-2
                    "
                  >

                    {/* PRIMARY MORPH CTA */}

                    <button
                      ref={heroFounderCtaRef}
                      onClick={() =>
                        setIsCandidateModalOpen(true)
                      }
                      className="
                        px-4
                        py-2.5

                        sm:px-6
                        sm:py-3.5

                        text-xs
                        sm:text-base

                        font-bold
                        text-white

                        bg-[#0a7463]
                        hover:bg-[#086354]

                        rounded-xl

                        transition-colors

                        shadow-[0_8px_25px_rgba(10,116,99,0.25)]

                        flex
                        items-center
                        gap-2

                        cursor-pointer

                        active:scale-95

                        will-change-transform
                      "
                    >
                      <MessageSquareShare className="w-4 h-4" />

                      <span>
                        Hubungi Founder
                      </span>
                    </button>

                    {/* PROFILE */}

                    <button
                      onClick={navigateToCv}
                      className="
                        px-4
                        py-2.5

                        sm:px-5
                        sm:py-3.5

                        text-xs
                        sm:text-base

                        font-semibold
                        text-white

                        bg-gradient-to-r
                        from-[#0369a1]
                        to-[#0284c7]

                        border
                        border-sky-300/40

                        rounded-xl

                        transition-all

                        hover:scale-[1.02]

                        flex
                        items-center
                        gap-2

                        cursor-pointer

                        active:scale-95
                      "
                    >
                      <User className="w-4 h-4" />

                      <span className="hidden sm:inline">
                        Profil Founder & CV
                      </span>
                    </button>

                    {/* BUSINESS */}

                    <button
                      onClick={() =>
                        scrollToSection(
                          'section-tentang'
                        )
                      }
                      className={`
                        px-4
                        py-2.5

                        sm:px-5
                        sm:py-3.5

                        text-xs
                        sm:text-base

                        font-semibold

                        rounded-xl

                        border

                        transition-all

                        flex
                        items-center
                        gap-2

                        cursor-pointer

                        active:scale-95

                        ${
                          theme === 'light'
                            ? `
                              text-slate-700
                              bg-white
                              border-slate-200
                              hover:border-[#0a7463]
                            `
                            : `
                              text-neutral-200
                              bg-neutral-900
                              border-neutral-800
                              hover:border-neutral-700
                            `
                        }
                      `}
                    >
                      <span>
                        Pelajari Model Bisnis
                      </span>

                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* =================================================
                    RIGHT LOGO / MORPH SOURCE
                ================================================== */}

                <div
                  ref={heroVisualRef}
                  className="
                    relative

                    flex
                    justify-center
                    lg:justify-end

                    items-center

                    min-h-[340px]
                    lg:min-h-[470px]
                  "
                >

                  {/* CIRCULAR GLOW */}

                  <div
                    className="
                      absolute

                      left-1/2
                      top-1/2

                      -translate-x-1/2
                      -translate-y-1/2

                      w-[260px]
                      h-[260px]

                      lg:w-[430px]
                      lg:h-[430px]

                      rounded-full

                      bg-[#0a7463]/16

                      blur-[105px]

                      pointer-events-none
                    "
                  />

                  <div
                    className="
                      absolute

                      left-1/2
                      top-1/2

                      -translate-x-1/2
                      -translate-y-1/2

                      w-[170px]
                      h-[170px]

                      lg:w-[290px]
                      lg:h-[290px]

                      rounded-full

                      bg-emerald-400/10

                      blur-[65px]

                      pointer-events-none
                    "
                  />

                  {/* ACTUAL MORPH SOURCE */}

                  <div
                    className="
                      relative
                      z-10

                      flex
                      flex-col
                      items-center
                    "
                  >

                    <div
                      ref={heroLogoRef}
                      className="
                        relative

                        flex
                        items-center
                        justify-center

                        origin-center

                        will-change-transform
                      "
                    >
                      <YegLogo
                        size={360}
                        animated={true}
                        theme={theme}
                      />
                    </div>

                    <span
                      className={`
                        mt-5

                        text-[10px]
                        sm:text-xs

                        font-mono

                        tracking-[0.35em]

                        uppercase

                        font-bold

                        ${
                          theme === 'light'
                            ? 'text-[#0a7463]'
                            : 'text-[#34d399]'
                        }
                      `}
                    >
                      YEG BRANDMARK
                    </span>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  HERO METRICS
              ====================================================== */}

              <div
                ref={heroMetricsRef}
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-4

                  gap-2.5
                  sm:gap-3

                  mt-8
                  lg:mt-2
                "
              >
                {[
                  {
                    num: '01',
                    label: 'Founder',
                    sub: 'Ridhwan Mubarok',
                    color: 'text-[#0a7463]',
                  },
                  {
                    num: '2025',
                    label: 'Started',
                    sub: 'Bandung',
                    color: 'text-[#0284c7]',
                  },
                  {
                    num: '100%',
                    label: 'Transparansi',
                    sub: 'Bagi hasil project terbuka',
                    color: 'text-emerald-500',
                  },
                  {
                    num: '∞',
                    label: 'Potential',
                    sub: 'Grow together',
                    color: 'text-violet-500',
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`
                      p-3
                      sm:p-4

                      rounded-xl
                      sm:rounded-2xl

                      border

                      transition-colors

                      flex
                      flex-col
                      justify-center

                      ${
                        theme === 'light'
                          ? `
                            bg-white
                            border-slate-200
                            shadow-sm
                          `
                          : `
                            bg-[#0f1514]
                            border-neutral-800
                          `
                      }
                    `}
                  >
                    <span
                      className={`
                        text-xl
                        sm:text-3xl

                        font-black

                        ${stat.color}

                        font-heading
                      `}
                    >
                      {stat.num}
                    </span>

                    <span
                      className={`
                        text-xs
                        sm:text-sm

                        font-bold

                        mt-0.5

                        ${
                          theme === 'light'
                            ? 'text-slate-800'
                            : 'text-white'
                        }
                      `}
                    >
                      {stat.label}
                    </span>

                    <span
                      className={`
                        text-[10px]
                        sm:text-xs

                        mt-0.5

                        leading-tight

                        ${
                          theme === 'light'
                            ? 'text-slate-500'
                            : 'text-neutral-400'
                        }
                      `}
                    >
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="emerald" />

          {/* ============================================================
              TENTANG YEG PRODUCTION & PERUBAHAN KONSEP
          ============================================================ */}

          <section
            id="section-tentang"
            className="
              gsap-reveal-section
              max-w-6xl
              mx-auto
              px-3.5
              sm:px-6
              md:px-8
              space-y-6
              sm:space-y-8
            "
          >
            <div className="space-y-2">

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold
                  text-[#38bdf8]

                  uppercase
                  tracking-wider

                  font-mono

                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#0284c7]
                  "
                />

                WHO WE ARE & THE CHANGE
              </span>

              <h2
                className={`
                  text-2xl
                  sm:text-4xl
                  md:text-5xl

                  font-black

                  font-heading

                  ${
                    theme === 'light'
                      ? 'text-slate-950'
                      : 'text-white'
                  }
                `}
              >
                Tentang YEG Production
              </h2>

              <p
                className={`
                  text-xs
                  sm:text-base
                  md:text-lg

                  max-w-3xl
                  leading-relaxed

                  ${
                    theme === 'light'
                      ? 'text-slate-600'
                      : 'text-neutral-300'
                  }
                `}
              >
                <strong
                  className={
                    theme === 'light'
                      ? 'text-slate-950'
                      : 'text-white'
                  }
                >
                  YEG Production
                </strong>{' '}
                adalah bisnis rintisan yang bergerak di bidang{' '}
                <strong className="text-[#0a7463]">
                  Creative Production
                </strong>
                , dengan fokus awal pada penyediaan produk dan jasa kreatif yang memiliki nilai guna serta nilai jual.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start">

              <div
                className={`
                  md:col-span-7

                  p-4
                  sm:p-7

                  rounded-2xl
                  sm:rounded-3xl

                  border

                  space-y-4

                  ${
                    theme === 'light'
                      ? `
                        bg-white
                        border-slate-200
                        shadow-sm
                      `
                      : `
                        bg-[#101715]
                        border-neutral-800
                      `
                  }
                `}
              >
                <span
                  className="
                    text-xs
                    font-bold
                    text-[#0a7463]
                    uppercase
                    tracking-wider
                    block
                    font-mono
                  "
                >
                  GAGASAN SEDERHANA
                </span>

                <blockquote
                  className={`
                    text-base
                    sm:text-2xl
                    md:text-3xl

                    font-bold

                    font-heading

                    leading-snug

                    ${
                      theme === 'light'
                        ? 'text-slate-900'
                        : 'text-white'
                    }
                  `}
                >
                  “Mengubah ide dan kreativitas menjadi sesuatu yang dapat digunakan, diproduksi, dan memiliki nilai ekonomi.”
                </blockquote>
              </div>

              {/* Interactive Pipeline */}

              <div className="md:col-span-12 space-y-3 sm:space-y-4">

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    justify-between
                    gap-1.5
                  "
                >
                  <div>
                    <h3
                      className={`
                        text-lg
                        sm:text-2xl

                        font-bold
                        font-heading

                        ${
                          theme === 'light'
                            ? 'text-slate-900'
                            : 'text-white'
                        }
                      `}
                    >
                      Alur Kebutuhan Client Terpadu
                    </h3>

                    <p
                      className={`
                        text-xs
                        sm:text-sm

                        ${
                          theme === 'light'
                            ? 'text-slate-500'
                            : 'text-neutral-400'
                        }
                      `}
                    >
                      Dalam perkembangannya, YEG membantu kebutuhan client mulai dari:
                    </p>
                  </div>

                  <span
                    className="
                      text-[11px]
                      sm:text-xs

                      font-mono

                      text-[#0a7463]

                      bg-emerald-50

                      px-3
                      py-1

                      rounded-full

                      border
                      border-emerald-200

                      self-start
                      sm:self-auto

                      font-medium
                    "
                  >
                    Ide → Desain → Produksi → Produk Jadi
                  </span>
                </div>

                <div
                  className="
                    grid
                    grid-cols-2
                    lg:grid-cols-4

                    gap-2.5
                    sm:gap-4
                  "
                >
                  {pipelineSteps.map(
                    (step, idx) => {
                      const isActive =
                        activePipelineStep === idx;

                      return (
                        <button
                          key={idx}
                          onClick={() =>
                            setActivePipelineStep(
                              idx
                            )
                          }
                          className={`
                            gsap-card-stagger

                            p-3.5
                            sm:p-5

                            rounded-xl
                            sm:rounded-2xl

                            border

                            text-left

                            transition-all
                            duration-200

                            cursor-pointer

                            ${
                              isActive
                                ? `
                                  bg-[#e9f7f3]
                                  border-[#0a7463]
                                  text-slate-900
                                  shadow-xl
                                  scale-[1.02]
                                `
                                : `
                                  bg-white
                                  border-slate-200
                                  text-slate-500
                                  hover:border-slate-300
                                  hover:text-slate-900
                                `
                            }
                          `}
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                            "
                          >
                            <span
                              className={`
                                text-[10px]
                                sm:text-xs

                                font-mono
                                font-bold

                                ${
                                  isActive
                                    ? 'text-[#0a7463]'
                                    : 'text-slate-400'
                                }
                              `}
                            >
                              {step.step}
                            </span>

                            {isActive && (
                              <CheckCircle2
                                className="
                                  w-3.5
                                  h-3.5
                                  text-[#0a7463]
                                "
                              />
                            )}
                          </div>

                          <h4
                            className="
                              text-sm
                              sm:text-lg

                              font-bold

                              text-slate-900

                              mt-1.5

                              font-heading
                            "
                          >
                            {step.title}
                          </h4>

                          <p
                            className="
                              text-[11px]
                              sm:text-xs

                              font-semibold

                              text-[#0a7463]

                              mt-0.5
                            "
                          >
                            {step.subtitle}
                          </p>

                          <p
                            className="
                              text-[11px]
                              sm:text-xs

                              text-slate-500

                              mt-1.5

                              leading-snug

                              line-clamp-3
                              sm:line-clamp-none
                            "
                          >
                            {step.desc}
                          </p>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* Perubahan Konsep */}

            <div
              className={`
                border
                rounded-2xl
                sm:rounded-3xl

                p-4
                sm:p-7

                space-y-4

                ${
                  theme === 'light'
                    ? `
                      bg-white
                      border-slate-200
                      shadow-sm
                    `
                    : `
                      bg-[#101715]
                      border-neutral-800
                    `
                }
              `}
            >
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  justify-between

                  gap-3

                  border-b
                  border-slate-200

                  pb-3
                "
              >
                <div>

                  <span
                    className="
                      text-[10px]
                      sm:text-xs

                      font-semibold

                      text-[#f59e0b]

                      uppercase

                      tracking-wider

                      font-mono
                    "
                  >
                    THE CHANGE · DARI JASA MENUJU PRODUKSI
                  </span>

                  <h3
                    className="
                      text-base
                      sm:text-2xl

                      font-bold

                      text-slate-900

                      font-heading

                      mt-0.5
                    "
                  >
                    Dari Creative Service → Creative Production
                  </h3>
                </div>

                {/* Segmented Switcher */}

                <div
                  className="
                    flex
                    items-center
                    gap-1

                    p-1

                    bg-slate-100

                    rounded-xl

                    border
                    border-slate-200

                    self-start
                    sm:self-auto
                  "
                >
                  <button
                    onClick={() =>
                      setConceptTab(
                        'sekarang'
                      )
                    }
                    className={`
                      px-3
                      py-1.5

                      text-xs

                      font-medium

                      rounded-lg

                      transition-all

                      cursor-pointer

                      ${
                        conceptTab ===
                        'sekarang'
                          ? `
                            bg-[#0a7463]
                            text-white
                            font-bold
                            shadow-sm
                          `
                          : `
                            text-slate-500
                            hover:text-slate-900
                          `
                      }
                    `}
                  >
                    Konsep Sekarang
                  </button>

                  <button
                    onClick={() =>
                      setConceptTab(
                        'sebelumnya'
                      )
                    }
                    className={`
                      px-3
                      py-1.5

                      text-xs

                      font-medium

                      rounded-lg

                      transition-all

                      cursor-pointer

                      ${
                        conceptTab ===
                        'sebelumnya'
                          ? `
                            bg-slate-700
                            text-white
                            font-bold
                            shadow-sm
                          `
                          : `
                            text-slate-500
                            hover:text-slate-900
                          `
                      }
                    `}
                  >
                    Sebelumnya
                  </button>
                </div>
              </div>

              {conceptTab === 'sekarang' ? (
                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-12

                    gap-4
                    sm:gap-6

                    items-center
                  "
                >
                  <div
                    className="
                      md:col-span-7
                      space-y-2.5
                    "
                  >
                    <div
                      className="
                        p-3
                        sm:p-4

                        rounded-xl

                        bg-[#effaf6]

                        border
                        border-[#0a7463]

                        font-mono

                        text-xs
                        sm:text-sm

                        text-slate-900

                        font-bold
                      "
                    >
                      Client → Kebutuhan → Ide & Desain → Produksi → Produk Jadi
                    </div>

                    <p
                      className="
                        text-xs
                        sm:text-sm

                        text-slate-600

                        leading-relaxed
                      "
                    >
                      YEG tidak hanya menawarkan jasa, tetapi juga menghadirkan produk yang dapat diproduksi dan dijual. Kemampuan desain yang sudah dimiliki menjadi bagian integral dari proses produksi.
                    </p>

                    <p
                      className="
                        text-xs
                        sm:text-base

                        font-bold

                        text-slate-900

                        font-heading

                        border-l-2
                        border-[#34d399]

                        pl-3

                        pt-0.5
                      "
                    >
                      “Kami tidak hanya membuat desain. Kami ingin membuat sesuatu yang bisa diproduksi dan memiliki nilai jual.”
                    </p>
                  </div>

                  <div
                    className="
                      md:col-span-5

                      bg-slate-50

                      p-4
                      sm:p-5

                      rounded-xl

                      border
                      border-slate-200

                      space-y-2
                    "
                  >
                    <span
                      className="
                        text-xs

                        font-bold

                        text-[#0a7463]

                        uppercase

                        tracking-wider

                        block

                        font-mono
                      "
                    >
                      Kelebihan Model Sekarang:
                    </span>

                    <ul
                      className="
                        text-xs
                        sm:text-sm

                        text-slate-600

                        space-y-1.5
                      "
                    >
                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          className="
                            w-3.5
                            h-3.5
                            text-[#0a7463]
                            shrink-0
                          "
                        />
                        Margin keuntungan lebih tinggi per order
                      </li>

                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          className="
                            w-3.5
                            h-3.5
                            text-[#0a7463]
                            shrink-0
                          "
                        />
                        Membuka segmen institusi & sekolah (B2B)
                      </li>

                      <li className="flex items-center gap-2">
                        <CheckCircle2
                          className="
                            w-3.5
                            h-3.5
                            text-[#0a7463]
                            shrink-0
                          "
                        />
                        Pesanan cetak custom berkala tiap tahun
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-12

                    gap-4
                    sm:gap-6

                    items-center
                  "
                >
                  <div
                    className="
                      md:col-span-7
                      space-y-2.5
                    "
                  >
                    <div
                      className="
                        p-3
                        sm:p-4

                        rounded-xl

                        bg-slate-100

                        border
                        border-slate-200

                        font-mono

                        text-xs
                        sm:text-sm

                        text-slate-500
                      "
                    >
                      Client → Memesan Jasa Desain → Selesai
                    </div>

                    <p
                      className="
                        text-xs
                        sm:text-sm

                        text-slate-500

                        leading-relaxed
                      "
                    >
                      Pada konsep sebelumnya, YEG hanya menjalankan jasa desain lepas. Selesai file diserahkan, transaksi berakhir tanpa andil dalam pembuatan produk fisik.
                    </p>
                  </div>

                  <div
                    className="
                      md:col-span-5

                      bg-slate-50

                      p-4
                      sm:p-5

                      rounded-xl

                      border
                      border-slate-200
                    "
                  >
                    <span
                      className="
                        text-xs
                        font-bold
                        text-slate-500
                        uppercase
                        tracking-wider
                        block
                        mb-1
                      "
                    >
                      Evaluasi:
                    </span>

                    <p
                      className="
                        text-xs
                        text-slate-500
                        leading-relaxed
                      "
                    >
                      Perlu evolusi dari sekadar biro jasa desain menjadi perusahaan Creative Production terpadu.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="amber" />

          {/* ============================================================
              AWAL MULA YEG PRODUCTION
          ============================================================ */}

          <section
            id="section-how-it-started"
            className="
              gsap-reveal-section
              max-w-6xl
              mx-auto
              px-3.5
              sm:px-6
              md:px-8

              space-y-6
              sm:space-y-8
            "
          >
            <div className="space-y-2">

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold

                  text-[#f59e0b]

                  uppercase
                  tracking-wider

                  font-mono

                  flex
                  items-center
                  gap-2
                "
              >
                <Clock
                  className="
                    w-4
                    h-4
                    text-[#f59e0b]
                  "
                />

                HOW IT STARTED · SEJAK 2025
              </span>

              <h2
                className={`
                  text-2xl
                  sm:text-4xl
                  md:text-5xl

                  font-black
                  font-heading

                  ${
                    theme === 'light'
                      ? 'text-slate-950'
                      : 'text-white'
                  }
                `}
              >
                Awal Mula YEG Production
              </h2>

              <p
                className={`
                  text-xs
                  sm:text-base

                  ${
                    theme === 'light'
                      ? 'text-slate-600'
                      : 'text-neutral-300'
                  }
                `}
              >
                YEG Production mulai dirintis sejak{' '}
                <strong>
                  2025
                </strong>
                .
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-12

                gap-4
                sm:gap-6

                items-start
              "
            >
              <div
                className="
                  md:col-span-6

                  bg-white

                  border
                  border-slate-200

                  rounded-2xl
                  sm:rounded-3xl

                  p-4
                  sm:p-6

                  space-y-3

                  shadow-sm
                "
              >
                <span
                  className="
                    text-xs

                    font-bold

                    text-[#f59e0b]

                    uppercase

                    tracking-wider

                    block

                    font-mono
                  "
                >
                  Pada awalnya, konsep YEG berfokus pada:
                </span>

                <div
                  className="
                    grid
                    grid-cols-2

                    gap-2

                    text-xs
                    sm:text-sm

                    text-slate-700
                  "
                >
                  {[
                    'Digital Creative',
                    'Jasa desain komersial',
                    'Social media design',
                    'Feed design',
                    'Banner & promosi',
                    'Logo & branding',
                    'Kebutuhan visual lainnya',
                  ].map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="
                          p-2
                          sm:p-3

                          rounded-xl

                          bg-slate-50

                          border
                          border-slate-200

                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            w-1.5
                            h-1.5

                            rounded-full

                            bg-[#f59e0b]

                            shrink-0
                          "
                        />

                        <span
                          className="
                            text-[11px]
                            sm:text-xs

                            font-medium

                            leading-snug
                          "
                        >
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div
                className="
                  md:col-span-6

                  space-y-3
                "
              >
                <div
                  className="
                    p-4
                    sm:p-7

                    rounded-2xl
                    sm:rounded-3xl

                    bg-gradient-to-br
                    from-amber-50
                    to-white

                    border
                    border-amber-200

                    space-y-3

                    shadow-sm
                  "
                >
                  <span
                    className="
                      text-xs

                      font-bold

                      text-[#f59e0b]

                      uppercase

                      tracking-wider

                      font-mono

                      block
                    "
                  >
                    Perjalanan & Realitas Lapangan
                  </span>

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-slate-600

                      leading-relaxed
                    "
                  >
                    Beberapa project telah berhasil dikerjakan. Namun belum berkembang optimal karena keterbatasan waktu pekerjaan, perkuliahan, dan promosi.
                  </p>

                  <div
                    className="
                      pt-2

                      border-t
                      border-amber-100

                      space-y-1
                    "
                  >
                    <p
                      className="
                        text-sm
                        sm:text-base

                        font-bold

                        text-[#0a7463]

                        font-heading
                      "
                    >
                      Bukan berarti idenya berhenti.
                    </p>

                    <p
                      className="
                        text-xs

                        text-slate-600

                        leading-relaxed
                      "
                    >
                      Pengalaman tersebut membuka jalan untuk mengembangkan model bisnis YEG menjadi Creative Production yang bernilai ekonomi jauh lebih besar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="blue" />

          {/* ============================================================
              BUSINESS MODEL
          ============================================================ */}

          <section
            id="section-model-bisnis"
            className="
              gsap-reveal-section
              max-w-6xl
              mx-auto

              px-3.5
              sm:px-6
              md:px-8

              space-y-6
              sm:space-y-8
            "
          >
            <div className="space-y-2">

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold

                  text-[#0284c7]

                  uppercase

                  tracking-wider

                  font-mono

                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#0284c7]
                  "
                />

                BUSINESS MODEL · DUA SUMBER AKTIVITAS
              </span>

              <h2
                className="
                  text-2xl
                  sm:text-4xl
                  md:text-5xl

                  font-black

                  text-slate-950

                  font-heading
                "
              >
                Bagaimana YEG Production Berjalan?
              </h2>

              <p
                className="
                  text-xs
                  sm:text-base

                  text-slate-600

                  max-w-2xl
                "
              >
                YEG mengembangkan dua sumber aktivitas bisnis yang saling menguatkan:
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2

                gap-4
                sm:gap-6
              "
            >

              {/* PILAR 01 */}

              <div
                className="
                  p-4
                  sm:p-7

                  rounded-2xl
                  sm:rounded-3xl

                  bg-gradient-to-br
                  from-sky-50
                  to-white

                  border
                  border-sky-200

                  space-y-4

                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2.5
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10

                        rounded-xl

                        bg-sky-100

                        flex
                        items-center
                        justify-center

                        text-[#0284c7]
                      "
                    >
                      <Palette
                        className="
                          w-5
                          h-5
                        "
                      />
                    </div>

                    <div>
                      <span
                        className="
                          text-[10px]

                          font-mono

                          text-[#0284c7]

                          font-bold
                        "
                      >
                        PILAR 01
                      </span>

                      <h3
                        className="
                          text-base
                          sm:text-xl

                          font-bold

                          text-slate-900

                          font-heading
                        "
                      >
                        CREATIVE SERVICE
                      </h3>
                    </div>
                  </div>

                  <span
                    className="
                      text-[10px]
                      sm:text-xs

                      text-slate-400

                      font-mono
                    "
                  >
                    Digital & Visual
                  </span>
                </div>

                <p
                  className="
                    text-xs
                    text-slate-600
                  "
                >
                  Menyediakan jasa seperti:
                </p>

                <div
                  className="
                    grid
                    grid-cols-2

                    gap-2

                    text-xs

                    text-slate-700
                  "
                >
                  {[
                    'Desain Grafis',
                    'Branding & Identitas',
                    'Social Media Feeds',
                    'Banner & Spanduk',
                    'Logo Usaha',
                    'Promotional Material',
                    'Creative Design',
                    'Kebutuhan Visual Lain',
                  ].map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="
                          p-2
                          sm:p-2.5

                          rounded-lg

                          bg-white

                          border
                          border-sky-100

                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            w-1.5
                            h-1.5

                            rounded-full

                            bg-[#38bdf8]

                            shrink-0
                          "
                        />

                        <span
                          className="
                            text-[11px]
                            sm:text-xs

                            font-medium
                          "
                        >
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* PILAR 02 */}

              <div
                className="
                  p-4
                  sm:p-7

                  rounded-2xl
                  sm:rounded-3xl

                  bg-gradient-to-br
                  from-emerald-50
                  to-white

                  border
                  border-emerald-200

                  space-y-4

                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2.5
                    "
                  >
                    <div
                      className="
                        w-10
                        h-10

                        rounded-xl

                        bg-emerald-100

                        flex
                        items-center
                        justify-center

                        text-[#0a7463]
                      "
                    >
                      <Layers
                        className="
                          w-5
                          h-5
                        "
                      />
                    </div>

                    <div>
                      <span
                        className="
                          text-[10px]

                          font-mono

                          text-[#0a7463]

                          font-bold
                        "
                      >
                        PILAR 02
                      </span>

                      <h3
                        className="
                          text-base
                          sm:text-xl

                          font-bold

                          text-slate-900

                          font-heading
                        "
                      >
                        PRODUCTION & VENDOR
                      </h3>
                    </div>
                  </div>

                  <span
                    className="
                      text-[10px]
                      sm:text-xs

                      text-[#0a7463]

                      font-mono
                    "
                  >
                    Fisik & Manufaktur
                  </span>
                </div>

                <p
                  className="
                    text-xs

                    text-slate-600
                  "
                >
                  Menyediakan produk melalui kerja sama dengan vendor produksi:
                </p>

                <div
                  className="
                    grid
                    grid-cols-2

                    gap-2

                    text-xs

                    text-slate-700
                  "
                >
                  {[
                    'Percetakan & Offset',
                    'Custom Product',
                    'Merchandise & Souvenir',
                    'Packaging & Kemasan',
                    'Apparel & Custom Wear',
                    'Produk Promosi',
                    'Kebutuhan Sekolah/Instansi',
                    'Dan Produk Lainnya',
                  ].map(
                    (item, idx) => (
                      <div
                        key={idx}
                        className="
                          p-2
                          sm:p-2.5

                          rounded-lg

                          bg-white

                          border
                          border-emerald-100

                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            w-1.5
                            h-1.5

                            rounded-full

                            bg-[#34d399]

                            shrink-0
                          "
                        />

                        <span
                          className="
                            text-[11px]
                            sm:text-xs

                            font-medium
                          "
                        >
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div
              className="
                p-4
                sm:p-6

                rounded-2xl

                bg-white

                border
                border-slate-200

                text-center

                flex
                flex-wrap
                items-center
                justify-center

                gap-2
                sm:gap-3

                shadow-sm
              "
            >
              <span
                className="
                  text-xs
                  sm:text-base

                  text-slate-500

                  font-mono
                "
              >
                Creative
              </span>

              <span
                className="
                  text-lg
                  sm:text-2xl

                  font-bold

                  text-[#0a7463]
                "
              >
                +
              </span>

              <span
                className="
                  text-xs
                  sm:text-base

                  text-slate-500

                  font-mono
                "
              >
                Production
              </span>

              <span
                className="
                  text-lg
                  sm:text-2xl

                  font-bold

                  text-[#0a7463]
                "
              >
                =
              </span>

              <span
                className="
                  text-base
                  sm:text-2xl

                  font-black

                  text-slate-900

                  font-heading

                  tracking-wider
                "
              >
                YEG PRODUCTION
              </span>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="amber" />

          {/* ============================================================
              PRODUK PERTAMA
          ============================================================ */}

          <section
            id="section-produk-pertama"
            className="
              gsap-reveal-section
              max-w-6xl
              mx-auto

              px-3.5
              sm:px-6
              md:px-8

              space-y-6
              sm:space-y-8
            "
          >
            <div className="space-y-2">

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold

                  text-[#f59e0b]

                  uppercase

                  tracking-wider

                  font-mono

                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    w-2
                    h-2

                    rounded-full

                    bg-[#f59e0b]
                  "
                />

                OUR FIRST PRODUCT · PRODUK UNGGULAN
              </span>

              <h2
                className="
                  text-2xl
                  sm:text-4xl
                  md:text-5xl

                  font-black

                  text-slate-950

                  font-heading
                "
              >
                Produk Pertama YEG Production
              </h2>

              <p
                className="
                  text-lg
                  sm:text-2xl

                  font-bold

                  text-[#0a7463]

                  font-heading
                "
              >
                CUSTOM MAP IJAZAH / RAPOR
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-12

                gap-4
                sm:gap-6

                items-start
              "
            >
              <div
                className="
                  lg:col-span-7

                  p-4
                  sm:p-7

                  rounded-2xl
                  sm:rounded-3xl

                  bg-white

                  border
                  border-slate-200

                  shadow-sm
                "
              >
                <InteractiveMapCustomizer />
              </div>

              <div
                className="
                  lg:col-span-5

                  space-y-3
                "
              >
                <div
                  className="
                    p-4
                    sm:p-6

                    rounded-2xl

                    bg-amber-50

                    border
                    border-amber-200

                    space-y-3
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >
                    <Shirt
                      className="
                        w-5
                        h-5

                        text-[#f59e0b]
                      "
                    />

                    <h3
                      className="
                        text-base
                        sm:text-xl

                        font-bold

                        text-slate-900

                        font-heading
                      "
                    >
                      Kenapa Produk Ini?
                    </h3>
                  </div>

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-slate-600

                      leading-relaxed
                    "
                  >
                    Produk pertama dipilih karena memiliki kebutuhan yang jelas, target pasar yang spesifik, dan potensi produksi berulang.
                  </p>

                  <div
                    className="
                      space-y-2
                    "
                  >
                    {[
                      'Kebutuhan sekolah dan institusi',
                      'Custom sesuai identitas client',
                      'Produksi dapat dilakukan melalui vendor',
                      'Memiliki nilai jual fisik',
                      'Potensi repeat order',
                    ].map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="
                            flex
                            items-center
                            gap-2

                            text-xs
                            sm:text-sm

                            text-slate-700
                          "
                        >
                          <CheckCircle2
                            className="
                              w-4
                              h-4

                              text-[#0a7463]

                              shrink-0
                            "
                          />

                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div
                  className="
                    p-4
                    sm:p-6

                    rounded-2xl

                    bg-white

                    border
                    border-slate-200

                    shadow-sm

                    space-y-2
                  "
                >
                  <span
                    className="
                      text-xs

                      font-bold

                      text-[#0a7463]

                      uppercase

                      tracking-wider

                      font-mono
                    "
                  >
                    MODEL PRODUKSI
                  </span>

                  <p
                    className="
                      text-xs
                      sm:text-sm

                      text-slate-600

                      leading-relaxed
                    "
                  >
                    YEG menangani konsep, desain, komunikasi client, dan koordinasi produksi. Vendor digunakan untuk proses manufaktur sesuai kebutuhan.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="emerald" />

          {/* ============================================================
              PARTNER MATCHER
          ============================================================ */}

          <section
            id="section-matcher"
            className="
              gsap-reveal-section
              max-w-6xl
              mx-auto

              px-3.5
              sm:px-6
              md:px-8

              space-y-6
              sm:space-y-8
            "
          >
            <div className="space-y-2">

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold

                  text-[#0a7463]

                  uppercase

                  tracking-wider

                  font-mono

                  flex
                  items-center
                  gap-2
                "
              >
                <HeartHandshake
                  className="
                    w-4
                    h-4
                  "
                />

                FIND YOUR ROLE
              </span>

              <h2
                className="
                  text-2xl
                  sm:text-4xl
                  md:text-5xl

                  font-black

                  text-slate-950

                  font-heading
                "
              >
                Partner yang Dibutuhkan YEG
              </h2>

              <p
                className="
                  text-xs
                  sm:text-base

                  text-slate-600

                  max-w-2xl
                "
              >
                YEG tidak mencari satu tipe orang yang harus bisa semuanya. Yang dibutuhkan adalah partner yang punya kemauan untuk bertumbuh bersama.
              </p>
            </div>

            <div
              className="
                p-4
                sm:p-7

                rounded-2xl
                sm:rounded-3xl

                bg-white

                border
                border-slate-200

                shadow-sm

                space-y-5
              "
            >
              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-4

                  gap-2.5
                  sm:gap-4
                "
              >
                {[
                  {
                    icon: Palette,
                    title: 'Creative',
                    desc: 'Suka desain dan ide visual.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Business',
                    desc: 'Tertarik peluang dan pasar.',
                  },
                  {
                    icon: Users,
                    title: 'Client',
                    desc: 'Nyaman berkomunikasi.',
                  },
                  {
                    icon: Layers,
                    title: 'Production',
                    desc: 'Suka mengatur proses.',
                  },
                ].map(
                  (item, idx) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        key={idx}
                        className="
                          gsap-card-stagger

                          p-3.5
                          sm:p-5

                          rounded-2xl

                          bg-slate-50

                          border
                          border-slate-200

                          space-y-2

                          hover:border-[#0a7463]

                          transition-colors
                        "
                      >
                        <div
                          className="
                            w-9
                            h-9

                            rounded-xl

                            bg-emerald-100

                            flex
                            items-center
                            justify-center

                            text-[#0a7463]
                          "
                        >
                          <Icon
                            className="
                              w-4
                              h-4
                            "
                          />
                        </div>

                        <h4
                          className="
                            text-sm
                            sm:text-base

                            font-bold

                            text-slate-900

                            font-heading
                          "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                            text-[11px]
                            sm:text-xs

                            text-slate-500

                            leading-snug
                          "
                        >
                          {item.desc}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>

              <PartnerQuizMatcher
                onOpenCandidateForm={() =>
                  setIsCandidateModalOpen(
                    true
                  )
                }
              />
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="blue" />

          {/* ============================================================
              PERAN PARTNER
          ============================================================ */}

          <section
            id="section-peran-partner"
            className="
              gsap-reveal-section
              max-w-6xl
              mx-auto

              px-3.5
              sm:px-6
              md:px-8

              space-y-6
              sm:space-y-8
            "
          >
            <div className="space-y-2">

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold

                  text-[#0284c7]

                  uppercase

                  tracking-wider

                  font-mono

                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#0284c7]
                  "
                />

                FLEXIBLE ROLES · PERAN PARTNER
              </span>

              <h2
                className="
                  text-2xl
                  sm:text-4xl
                  md:text-5xl

                  font-black

                  text-slate-950

                  font-heading
                "
              >
                Peran dalam YEG Production
              </h2>

              <p
                className="
                  text-xs
                  sm:text-base

                  text-slate-600
                "
              >
                Karena masih tahap awal, peran partner bersifat fleksibel dan dinamis:
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-2
                lg:grid-cols-3

                gap-2.5
                sm:gap-4
              "
            >
              {rolesList.map(
                (role, idx) => {
                  const Icon =
                    role.icon;

                  return (
                    <div
                      key={idx}
                      className="
                        gsap-card-stagger

                        p-3.5
                        sm:p-5

                        rounded-2xl

                        bg-white

                        border
                        border-slate-200

                        transition-all

                        space-y-2

                        shadow-sm
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <div
                          className="
                            w-7
                            h-7
                            sm:w-9
                            sm:h-9

                            rounded-lg

                            bg-slate-100

                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Icon
                            className="
                              w-4
                              h-4

                              text-[#0a7463]
                            "
                          />
                        </div>

                        <h4
                          className="
                            text-xs
                            sm:text-base

                            font-bold

                            text-slate-900

                            font-heading
                          "
                        >
                          {role.title}
                        </h4>
                      </div>

                      <p
                        className="
                          text-[11px]
                          sm:text-xs

                          text-slate-500

                          leading-snug
                        "
                      >
                        {role.desc}
                      </p>

                      <div
                        className="
                          pt-1

                          border-t
                          border-slate-100

                          flex
                          flex-wrap
                          gap-1
                        "
                      >
                        {role.skills
                          .slice(0, 2)
                          .map(
                            (
                              sk,
                              sIdx
                            ) => (
                              <span
                                key={
                                  sIdx
                                }
                                className="
                                  text-[10px]

                                  px-2
                                  py-0.5

                                  rounded

                                  bg-slate-100

                                  text-slate-500
                                "
                              >
                                {sk}
                              </span>
                            )
                          )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="emerald" />

          {/* ============================================================
              BUDAYA YEG
          ============================================================ */}

          <section
            id="section-budaya"
            className="
              gsap-reveal-section
              max-w-6xl
              mx-auto

              px-3.5
              sm:px-6
              md:px-8

              space-y-6
              sm:space-y-8
            "
          >
            <div className="space-y-2">

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold

                  text-[#0a7463]

                  uppercase

                  tracking-wider

                  font-mono

                  flex
                  items-center
                  gap-2
                "
              >
                <ShieldCheck
                  className="
                    w-4
                    h-4
                  "
                />

                WORK CULTURE
              </span>

              <h2
                className="
                  text-2xl
                  sm:text-4xl
                  md:text-5xl

                  font-black

                  text-slate-950

                  font-heading
                "
              >
                Budaya yang Ingin Dibangun
              </h2>

              <p
                className="
                  text-xs
                  sm:text-base

                  text-slate-600

                  max-w-2xl
                "
              >
                YEG ingin membangun lingkungan kerja yang sehat:
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-3

                gap-2.5
                sm:gap-4
              "
            >
              {[
                {
                  title: 'THINK',
                  desc: 'Berpikir sebelum bertindak.',
                },
                {
                  title: 'CREATE',
                  desc: 'Menghasilkan ide dan solusi.',
                },
                {
                  title: 'COMMUNICATE',
                  desc: 'Menyampaikan ide terbuka.',
                },
                {
                  title: 'EXECUTE',
                  desc: 'Tidak berhenti pada konsep.',
                },
                {
                  title: 'LEARN',
                  desc: 'Belajar dari pengalaman.',
                },
                {
                  title: 'GROW',
                  desc: 'Berkembang bersama.',
                },
              ].map(
                (pillar, idx) => (
                  <div
                    key={idx}
                    className="
                      gsap-card-stagger

                      p-3.5
                      sm:p-5

                      rounded-2xl

                      bg-white

                      border
                      border-slate-200

                      hover:border-[#0a7463]

                      transition-all

                      space-y-1

                      group

                      shadow-sm
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        sm:text-xs

                        font-mono

                        text-[#0a7463]

                        font-bold
                      "
                    >
                      0{idx + 1}
                    </span>

                    <h4
                      className="
                        text-base
                        sm:text-xl

                        font-bold

                        text-slate-900

                        font-heading
                      "
                    >
                      {pillar.title}
                    </h4>

                    <p
                      className="
                        text-[11px]
                        sm:text-xs

                        text-slate-500

                        leading-snug
                      "
                    >
                      {pillar.desc}
                    </p>
                  </div>
                )
              )}
            </div>

            <div
              className="
                p-4
                sm:p-5

                rounded-2xl

                bg-slate-100

                border
                border-slate-200

                text-center

                space-y-0.5
              "
            >
              <p
                className="
                  text-xs

                  text-slate-500
                "
              >
                Di tahap awal, tidak ada yang dituntut langsung sempurna.
              </p>

              <p
                className="
                  text-xs
                  sm:text-base

                  font-bold

                  text-slate-900

                  font-heading
                "
              >
                Yang penting adalah mau belajar, mau mencoba, dan mau bertanggung jawab.
              </p>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="emerald" />

          {/* ============================================================
              PARTNER NEED
          ============================================================ */}

          <section
            id="section-partner"
            className="
              gsap-reveal-section
              max-w-6xl
              mx-auto

              px-3.5
              sm:px-6
              md:px-8

              space-y-6
              sm:space-y-8
            "
          >
            <div className="space-y-2">

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold

                  text-[#0a7463]

                  uppercase

                  tracking-wider

                  font-mono

                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    w-2
                    h-2

                    rounded-full

                    bg-[#0a7463]
                  "
                />

                CREATIVE PRODUCTION PARTNER
              </span>

              <h2
                className="
                  text-2xl
                  sm:text-4xl
                  md:text-5xl

                  font-black

                  text-slate-950

                  font-heading
                "
              >
                Kenapa YEG Membutuhkan Partner?
              </h2>

              <p
                className="
                  text-xs
                  sm:text-base

                  text-slate-600

                  max-w-2xl
                "
              >
                Saat ini YEG Production masih dibangun dari tahap awal.
              </p>
            </div>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2

                gap-4
                sm:gap-6
              "
            >
              <div
                className="
                  p-4
                  sm:p-7

                  rounded-2xl
                  sm:rounded-3xl

                  bg-white

                  border
                  border-slate-200

                  shadow-sm

                  space-y-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                  "
                >
                  <div
                    className="
                      w-10
                      h-10

                      rounded-xl

                      bg-emerald-100

                      flex
                      items-center
                      justify-center

                      text-[#0a7463]
                    "
                  >
                    <Users
                      className="
                        w-5
                        h-5
                      "
                    />
                  </div>

                  <div>
                    <span
                      className="
                        text-[10px]

                        font-mono

                        text-[#0a7463]

                        font-bold
                      "
                    >
                      REASON 01
                    </span>

                    <h3
                      className="
                        text-base
                        sm:text-xl

                        font-bold

                        text-slate-900

                        font-heading
                      "
                    >
                      Tidak Bisa Berjalan Sendiri
                    </h3>
                  </div>
                </div>

                <p
                  className="
                    text-xs
                    sm:text-sm

                    text-slate-600

                    leading-relaxed
                  "
                >
                  Bisnis produksi membutuhkan kemampuan yang saling melengkapi, mulai dari creative, client handling, business, digital, hingga production.
                </p>
              </div>

              <div
                className="
                  p-4
                  sm:p-7

                  rounded-2xl
                  sm:rounded-3xl

                  bg-white

                  border
                  border-slate-200

                  shadow-sm

                  space-y-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2.5
                  "
                >
                  <div
                    className="
                      w-10
                      h-10

                      rounded-xl

                      bg-sky-100

                      flex
                      items-center
                      justify-center

                      text-[#0284c7]
                    "
                  >
                    <HeartHandshake
                      className="
                        w-5
                        h-5
                      "
                    />
                  </div>

                  <div>
                    <span
                      className="
                        text-[10px]

                        font-mono

                        text-[#0284c7]

                        font-bold
                      "
                    >
                      REASON 02
                    </span>

                    <h3
                      className="
                        text-base
                        sm:text-xl

                        font-bold

                        text-slate-900

                        font-heading
                      "
                    >
                      Tumbuh Bersama
                    </h3>
                  </div>
                </div>

                <p
                  className="
                    text-xs
                    sm:text-sm

                    text-slate-600

                    leading-relaxed
                  "
                >
                  Partner bukan sekadar tenaga tambahan. Partner menjadi bagian dari proses membangun sistem dan perkembangan YEG Production.
                </p>
              </div>
            </div>

            <div
              className="
                p-4
                sm:p-7

                rounded-2xl
                sm:rounded-3xl

                bg-gradient-to-br
                from-emerald-50
                to-sky-50

                border
                border-emerald-200

                space-y-4
              "
            >
              <span
                className="
                  text-xs

                  font-bold

                  text-[#0a7463]

                  uppercase

                  tracking-wider

                  block

                  font-mono
                "
              >
                SISTEM KERJA YANG DITAWARKAN
              </span>

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-4

                  gap-2.5
                  sm:gap-4
                "
              >
                {[
                  'Komunikasi Terbuka',
                  'Pembagian Peran',
                  'Transparansi Project',
                  'Bagi Hasil',
                ].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="
                        p-3
                        sm:p-4

                        rounded-xl

                        bg-white

                        border
                        border-slate-200

                        text-center

                        shadow-sm
                      "
                    >
                      <CheckCircle2
                        className="
                          w-5
                          h-5

                          text-[#0a7463]

                          mx-auto
                          mb-2
                        "
                      />

                      <span
                        className="
                          text-[11px]
                          sm:text-xs

                          font-bold

                          text-slate-700
                        "
                      >
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="blue" />

          {/* ============================================================
              ROADMAP
          ============================================================ */}

          <section
            id="section-roadmap"
            className="
              gsap-reveal-section
              max-w-6xl
              mx-auto

              px-3.5
              sm:px-6
              md:px-8

              space-y-6
              sm:space-y-8
            "
          >
            <div className="space-y-2">

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold

                  text-[#0284c7]

                  uppercase

                  tracking-wider

                  font-mono

                  flex
                  items-center
                  gap-2
                "
              >
                <TrendingUp
                  className="
                    w-4
                    h-4
                  "
                />

                ROADMAP · GROWTH
              </span>

              <h2
                className="
                  text-2xl
                  sm:text-4xl
                  md:text-5xl

                  font-black

                  text-slate-950

                  font-heading
                "
              >
                Dari 1 Produk Menuju Skala Perusahaan
              </h2>
            </div>

            <div
              className="
                p-4
                sm:p-7

                rounded-2xl
                sm:rounded-3xl

                bg-white

                border
                border-slate-200

                shadow-sm

                space-y-4
              "
            >
              <span
                className="
                  text-xs

                  font-bold

                  text-[#0a7463]

                  uppercase

                  tracking-wider

                  block

                  font-mono
                "
              >
                ROADMAP: DARI 1 PRODUK MENUJU SKALA PERUSAHAAN
              </span>

              <div
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-5

                  gap-2
                  sm:gap-3
                "
              >
                {[
                  {
                    title: '1. Dari 1 Produk',
                    desc: 'Map Ijazah / Rapor',
                  },
                  {
                    title: '2. Client Pertama',
                    desc: 'Validasi pasar sekolah',
                  },
                  {
                    title: '3. Revenue Pertama',
                    desc: 'Arus kas & bagi hasil',
                  },
                  {
                    title: '4. Modal Pertama',
                    desc: 'Kas mandiri reinvestasi',
                  },
                  {
                    title: '5. Produk Baru',
                    desc: 'Merchandise & apparel',
                  },
                  {
                    title: '6. Banyak Client',
                    desc: 'Jaringan instansi meluas',
                  },
                  {
                    title: '7. Skala Produksi',
                    desc: 'Vendor bertambah',
                  },
                  {
                    title: '8. Tim',
                    desc: 'Perekrutan anggota baru',
                  },
                  {
                    title: '9. Divisi',
                    desc: 'Struktur organisasi',
                  },
                  {
                    title: '10. YEG PRODUCTION',
                    desc: 'Perusahaan terpadu',
                  },
                ].map(
                  (step, idx) => (
                    <div
                      key={idx}
                      className={`
                        p-2.5
                        sm:p-4

                        rounded-xl

                        border

                        text-center

                        ${
                          idx === 9
                            ? `
                              bg-[#0a7463]
                              border-[#34d399]
                              text-white
                              shadow-md
                            `
                            : `
                              bg-slate-50
                              border-slate-200
                              text-slate-700
                            `
                        }
                      `}
                    >
                      <span
                        className="
                          text-xs

                          font-mono

                          font-bold

                          block
                        "
                      >
                        {step.title}
                      </span>

                      <span
                        className={`
                          text-[10px]

                          block

                          mt-0.5

                          ${
                            idx === 9
                              ? 'text-emerald-100'
                              : 'text-slate-400'
                          }
                        `}
                      >
                        {step.desc}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Partnership Works Both Ways */}

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2

                gap-4
                sm:gap-6
              "
            >
              <div
                className="
                  p-4
                  sm:p-6

                  rounded-2xl
                  sm:rounded-3xl

                  bg-white

                  border
                  border-slate-200

                  shadow-sm

                  space-y-2.5
                "
              >
                <span
                  className="
                    text-xs

                    font-bold

                    text-[#0a7463]

                    uppercase

                    tracking-wider

                    block

                    font-mono
                  "
                >
                  DARI YEG PRODUCTION:
                </span>

                <ul
                  className="
                    text-xs
                    sm:text-sm

                    text-slate-600

                    space-y-2
                  "
                >
                  {[
                    'Ruang untuk belajar & bertumbuh',
                    'Terlibat dalam keputusan bisnis',
                    'Transparansi penuh dalam tiap project',
                    'Pengembangan portofolio nyata',
                  ].map(
                    (p, idx) => (
                      <li
                        key={idx}
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <CheckCircle2
                          className="
                            w-3.5
                            h-3.5

                            text-[#0a7463]

                            shrink-0
                          "
                        />

                        {p}
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div
                className="
                  p-4
                  sm:p-6

                  rounded-2xl
                  sm:rounded-3xl

                  bg-white

                  border
                  border-slate-200

                  shadow-sm

                  space-y-2.5
                "
              >
                <span
                  className="
                    text-xs

                    font-bold

                    text-[#0284c7]

                    uppercase

                    tracking-wider

                    block

                    font-mono
                  "
                >
                  DARI PARTNER:
                </span>

                <ul
                  className="
                    text-xs
                    sm:text-sm

                    text-slate-600

                    space-y-2
                  "
                >
                  {[
                    'Waktu dan komitmen',
                    'Skill sesuai bidang',
                    'Kemauan belajar',
                    'Tanggung jawab terhadap peran',
                  ].map(
                    (p, idx) => (
                      <li
                        key={idx}
                        className="
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <CheckCircle2
                          className="
                            w-3.5
                            h-3.5

                            text-[#0284c7]

                            shrink-0
                          "
                        />

                        {p}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="amber" />

          {/* ============================================================
              NEXT SECTION CONTINUES IN PART 2
          =========================================={/* Animated Section Divider */}
<SectionDivider variant="blue" />
{/* ============================================================
BUSINESS MODEL (DUAL PILLARS) (GSAP Reveal)
============================================================ */}
<section id="section-model-bisnis" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
<div className="space-y-2">
<span className="text-xs sm:text-sm font-semibold text-[#38bdf8] uppercase
tracking-wider font-mono flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#0284c7]"></span>
BUSINESS MODEL · DUA SUMBER AKTIVITAS
</span>
<h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
Bagaimana YEG Production Berjalan?
</h2>
<p className="text-xs sm:text-base text-neutral-300 max-w-2xl">
YEG mengembangkan dua sumber aktivitas bisnis yang saling menguatkan:
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
{/* 01 Creative Service */}
<div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0c1929] to-[#08111c] border border-[#0284c7]/50 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-[#0284c7]/20 flex items-center justify-center text-[#38bdf8]">
<Palette className="w-5 h-5" />
</div>
<div>
<span className="text-[10px] font-mono text-[#38bdf8] font-bold">PILAR
01</span>
<h3 className="text-base sm:text-xl font-bold text-white font-heading">CREATIVE SERVICE</h3>
</div>
</div>
<span className="text-[10px] sm:text-xs text-neutral-400 font-mono">Digital &
Visual</span>
</div>
<p className="text-xs text-neutral-300">Menyediakan jasa seperti:</p>
<div className="grid grid-cols-2 gap-2 text-xs text-neutral-200">
{[
'Desain Grafis',
'Branding & Identitas',
'Social Media Feeds',
'Banner & Spanduk',
'Logo Usaha',
'Promotional Material',
'Creative Design',
'Kebutuhan Visual Lain',
].map((item, idx) => (
<div
key={idx}
className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-[#0284c7]/20
flex items-center gap-2"
>
<span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0" />
<span className="text-[11px] sm:text-xs font-medium">{item}</span>
</div>
))}
</div>
</div>
{/* 02 Production & Vendor */}
<div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0f241e] to-[#081511] border border-[#0a7463]/70 space-y-4 shadow-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-10 h-10 rounded-xl bg-[#0a7463] flex items-center justify-center text-white">
<Layers className="w-5 h-5" />
</div>
<div>
<span className="text-[10px] font-mono text-[#34d399] font-bold">PILAR
02</span>
<h3 className="text-base sm:text-xl font-bold text-white font-heading">PRODUCTION & VENDOR</h3>
</div>
</div>
<span className="text-[10px] sm:text-xs text-[#34d399] font-mono">Fisik &
Manufaktur</span>
</div>
<p className="text-xs text-neutral-300">
Menyediakan produk melalui kerja sama dengan vendor produksi:
</p>
<div className="grid grid-cols-2 gap-2 text-xs text-neutral-200">
{[
'Percetakan & Offset',
'Custom Product',
'Merchandise & Souvenir',
'Packaging & Kemasan',
'Apparel & Custom Wear',
'Produk Promosi',
'Kebutuhan Sekolah/Instansi',
'Dan Produk Lainnya',
].map((item, idx) => (
<div
key={idx}
className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-[#0a7463]/40
flex items-center gap-2"
>
<span className="w-1.5 h-1.5 rounded-full bg-[#34d399] shrink-0" />
<span className="text-[11px] sm:text-xs font-medium">{item}</span>================== */}

          
