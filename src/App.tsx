import React, { useState, useEffect, useRef } from 'react';
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

  const heroRef = useRef<HTMLDivElement>(null);
  const heroBadgeRef = useRef<HTMLDivElement>(null);
  const heroLogoRef = useRef<HTMLDivElement>(null);
  const floatingHeaderRef = useRef<HTMLElement>(null);
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

  // Responsive GSAP animations using matchMedia (smooth on desktop, lightweight on mobile)
  useEffect(() => {
    if (currentView !== 'home') return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP (min-width: 768px): Full ClipPath Reveal, Parallax & Stagger
      mm.add('(min-width: 768px)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
          heroBadgeRef.current,
          { opacity: 0, y: -15 },
          { opacity: 1, y: 0, duration: 0.5 }
        )
          .fromTo(
            heroLogoRef.current,
            { opacity: 0, scale: 0.85, rotation: -6 },
            { opacity: 1, scale: 1, rotation: 0, duration: 0.6 },
            '-=0.2'
          )
          .fromTo(
            heroTitleRef.current,
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.3'
          )
          .fromTo(
            heroSubtitleRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.3'
          )
          .fromTo(
            heroTaglineRef.current,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.3'
          )
          .fromTo(
            heroDescRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5 },
            '-=0.2'
          )
          .fromTo(
            heroCtasRef.current,
            { opacity: 0, scale: 0.96, y: 15 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5 },
            '-=0.2'
          )
          .fromTo(
            heroVisualRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7 },
            '-=0.3'
          )
          .fromTo(
            heroMetricsRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            '-=0.4'
          );

        // Hero visual subtle parallax
        if (heroVisualRef.current) {
          gsap.to(heroVisualRef.current, {
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.2,
            },
            y: -25,
            opacity: 0.95,
          });
        }

        // ClipPath reveal on desktop
        const revealSections = document.querySelectorAll('.gsap-reveal-section');
        revealSections.forEach((section, index) => {
          const initialClip =
            index % 2 === 0
              ? 'inset(6% 0% 6% 0% round 28px)'
              : 'inset(0% 4% 0% 4% round 28px)';

          gsap.fromTo(
            section,
            { clipPath: initialClip, opacity: 0.2, y: 40 },
            {
              clipPath: 'inset(0% 0% 0% 0% round 28px)',
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          const innerCards = section.querySelectorAll('.gsap-card-stagger');
          if (innerCards.length > 0) {
            gsap.fromTo(
              innerCards,
              { opacity: 0, y: 25, scale: 0.98 },
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
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });
      });

      // MOBILE (max-width: 767px): Lightweight smooth fade & subtle 20px slide (zero clipping)
      mm.add('(max-width: 767px)', () => {
        gsap.fromTo(
          [heroLogoRef.current, heroTitleRef.current, heroSubtitleRef.current, heroCtasRef.current],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
        );

        const revealSections = document.querySelectorAll('.gsap-reveal-section');
        revealSections.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0.1, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 92%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, [currentView]);

  // Monitor scroll position for BackToTopButton
  useEffect(() => {
    const handleScroll = () => {
      const sectionHowItStarted = document.getElementById('section-how-it-started');
      if (sectionHowItStarted) {
        const rect = sectionHowItStarted.getBoundingClientRect();
        if (rect.bottom < 100) {
          setScrollSectionIndex(4);
        } else {
          setScrollSectionIndex(2);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6289674849505?text=${encoded}`, '_blank');
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
      themeColor: 'from-[#0369a1]/20 to-[#075985]/10 border-[#0284c7]/40 text-[#38bdf8]',
      skills: ['Photoshop / Canva', 'Tipografi & Mockup', 'Visual Ideation'],
    },
    {
      title: 'BUSINESS',
      desc: 'Riset pasar sekolah & instansi, mencari peluang, dan menyusun penawaran.',
      icon: TrendingUp,
      themeColor: 'from-[#15803d]/20 to-[#166534]/10 border-[#22c55e]/40 text-[#4ade80]',
      skills: ['Market Mapping', 'Proposal Penawaran', 'Pricing Structure'],
    },
    {
      title: 'CLIENT',
      desc: 'Komunikasi hangat, follow-up kebutuhan, dan konsultasi ramah dengan calon klien.',
      icon: Users,
      themeColor: 'from-[#a21caf]/20 to-[#86198f]/10 border-[#c026d3]/40 text-[#e879f9]',
      skills: ['WA Communication', 'Client Listening', 'Service Excellence'],
    },
    {
      title: 'PRODUCTION',
      desc: 'Koordinasi vendor percetakan, cek sampel bahan, dan kontrol kualitas produk.',
      icon: Layers,
      themeColor: 'from-[#b45309]/20 to-[#92400e]/10 border-[#f59e0b]/40 text-[#fbbf24]',
      skills: ['Material Sourcing', 'Quality Control', 'Vendor Networking'],
    },
    {
      title: 'DIGITAL',
      desc: 'Pengelolaan social media feeds, dokumentasi karya, dan digital marketing.',
      icon: Cpu,
      themeColor: 'from-[#0e7490]/20 to-[#155e75]/10 border-[#06b6d4]/40 text-[#22d3ee]',
      skills: ['Social Media', 'Content Strategy', 'Documentation'],
    },
    {
      title: 'DEVELOPMENT',
      desc: 'Mencari peluang inovasi produk fisik dan bidang bisnis baru yang potensial.',
      icon: Lightbulb,
      themeColor: 'from-[#4338ca]/20 to-[#3730a3]/10 border-[#6366f1]/40 text-[#818cf8]',
      skills: ['New Product Ideas', 'Ecosystem Scale', 'Creative Solutions'],
    },
  ];

  return (
    <div className="min-h-screen bg-[#080d0c] text-neutral-100 flex flex-col font-sans selection:bg-[#0a7463] selection:text-white">
      {/* Top Bar Header with Enlarged Logo & Profil Founder CTA */}
      <HeaderNav
        currentView={currentView}
        onNavigateToCv={navigateToCv}
        onNavigateToHome={navigateToHome}
        onOpenCandidateForm={() => setIsCandidateModalOpen(true)}
      />

      {/* VIEW CONDITIONAL: DEDICATED 1-PAGE CV OR FULL BUSINESS PRESENTATION */}
      {currentView === 'cv' ? (
        <main className="flex-1 pb-20">
          <FounderCVSection onBackToHome={navigateToHome} />
        </main>
      ) : (
        <main className="flex-1 space-y-12 sm:space-y-20 md:space-y-24 pb-24">
          {/* ============================================================
              HERO COVER SECTION WITH ENLARGED CREATIVE LOGO
          ============================================================ */}
          <section
            ref={heroRef}
            id="hero-cover"
            className="relative pt-4 sm:pt-10 md:pt-14 px-3.5 sm:px-6 md:px-8 overflow-hidden"
          >
            {/* Subtle Ambient Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] h-[320px] bg-[#0a7463]/18 rounded-full blur-[110px] pointer-events-none" />

            <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 relative z-10">
              {/* Top Badges */}
              <div ref={heroBadgeRef} className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#0a7463]/25 border border-[#0a7463]/50 text-[#34d399] text-[11px] sm:text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#34d399]" />
                  CREATIVE PRODUCTION PLATFORM
                </span>
                <span className="text-neutral-500">·</span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 text-[11px] sm:text-xs text-neutral-300 font-mono">
                  Est. 2025 · Bandung
                </span>
              </div>

              {/* ENLARGED LOGO above YEG text */}
              <div ref={heroLogoRef} className="pt-1">
                <div className="inline-flex flex-col items-start gap-1.5">
                  <YegLogo size={92} animated={true} />
                  <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#34d399] uppercase font-bold pl-1">
                    YEG BRANDMARK
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-2.5 sm:space-y-4 max-w-4xl">
                <h1
                  ref={heroTitleRef}
                  className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight font-heading leading-[1.08]"
                >
                  YEG PRODUCTION
                </h1>

                <p
                  ref={heroSubtitleRef}
                  className="text-xl sm:text-3xl md:text-4xl font-bold text-[#34d399] font-heading"
                >
                  Your Expression, Our Creation.
                </p>

                <div
                  ref={heroTaglineRef}
                  className="text-sm sm:text-xl md:text-2xl text-neutral-200 font-light flex items-center flex-wrap gap-1.5 pt-0.5"
                >
                  <span className="font-bold text-white">Creative Production</span>
                  <span className="text-neutral-500">—</span>
                  <span className="text-neutral-300">Building from Ideas, Creating Value.</span>
                </div>

                <p
                  ref={heroDescRef}
                  className="text-xs sm:text-base text-neutral-300 max-w-2xl leading-relaxed pt-1"
                >
                  Mengubah gagasan dan kreativitas menjadi produk bernilai guna serta bernilai ekonomi nyata. Menghubungkan alur komprehensif mulai dari <strong>Ide → Desain Visual → Produksi Vendor → Produk Jadi</strong>.
                </p>
              </div>

              {/* Action Buttons: Responsive for mobile (icons/short) & desktop */}
              <div ref={heroCtasRef} className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                <button
                  onClick={() => scrollToSection('section-tentang')}
                  className="px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-base font-bold text-white bg-[#0a7463] hover:bg-[#086354] rounded-xl transition-all shadow-[0_4px_20px_rgba(10,116,99,0.35)] hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                  title="Pelajari Profil & Model Bisnis"
                >
                  <span>Pelajari Model Bisnis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={navigateToCv}
                  className="p-2.5 sm:px-5 sm:py-3.5 text-xs sm:text-base font-semibold text-white bg-gradient-to-r from-[#0369a1] to-[#0284c7] hover:from-[#0284c7] hover:to-[#38bdf8] border border-[#38bdf8]/40 rounded-xl transition-all hover:border-[#38bdf8] flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                  title="Buka 1 Halaman Profil & CV Lengkap Kak Ridhwan"
                  aria-label="Profil Kak Ridhwan & CV"
                >
                  <User className="w-4 h-4 text-white" />
                  <span className="hidden sm:inline">Profil Founder & CV</span>
                </button>

                <button
                  onClick={handleOpenDirectWhatsApp}
                  className="p-2.5 sm:px-5 sm:py-3.5 text-xs sm:text-base font-bold text-white bg-[#15803d] hover:bg-[#166534] border border-[#22c55e]/50 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
                  title="Chat WA Kak Ridhwan (+62 896-7484-9505)"
                  aria-label="Chat WA Kak Ridhwan"
                >
                  <MessageSquareShare className="w-4 h-4" />
                  <span className="hidden sm:inline">Chat WA Founder</span>
                </button>

                <button
                  onClick={downloadPitchDeckPdf}
                  className="p-2.5 sm:px-4 sm:py-3.5 text-xs sm:text-base font-semibold text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
                  title="Unduh Format PPT 16:9 (PDF)"
                  aria-label="Unduh Format PPT 16:9"
                >
                  <Download className="w-4 h-4 text-[#34d399]" />
                  <span className="hidden sm:inline">Unduh PPT 16:9</span>
                </button>
              </div>

              {/* Studio Visual Asset & Key Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch pt-2 sm:pt-4">
                <div
                  ref={heroVisualRef}
                  className="lg:col-span-8 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl aspect-[16/10] sm:aspect-[16/9] max-h-[380px] sm:max-h-[440px]"
                >
                  <img
                    src="/src/assets/images/yeg_creative_studio_1791037426847.jpg"
                    alt="YEG Production Creative Studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
                    <div>
                      <span className="text-[10px] sm:text-xs font-mono text-[#34d399] font-bold uppercase tracking-wider block">
                        CREATIVE PRODUCTION OPERATIONS
                      </span>
                      <h3 className="text-base sm:text-2xl font-bold font-heading mt-0.5">
                        Menghubungkan Ide Visual dengan Produksi Fisik
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-[11px] sm:text-xs text-neutral-300 self-start sm:self-auto font-medium">
                      Kombinasi Desain & Vendor
                    </span>
                  </div>
                </div>

                {/* 4 Interactive Snapshot Metrics: Compact 2x2 grid on mobile */}
                <div ref={heroMetricsRef} className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3.5">
                  {[
                    {
                      num: '2025',
                      label: 'Awal Mula Dirintis',
                      sub: 'Project desain & branding',
                      color: 'text-[#fbbf24]',
                      border: 'hover:border-[#f59e0b]/50',
                    },
                    {
                      num: '2 Pilar',
                      label: 'Creative + Production',
                      sub: 'Jasa visual + manufaktur fisik',
                      color: 'text-[#38bdf8]',
                      border: 'hover:border-[#0284c7]/50',
                    },
                    {
                      num: '1 Partner',
                      label: 'Production Partner',
                      sub: 'Tumbuh bersama dari nol',
                      color: 'text-[#34d399]',
                      border: 'hover:border-[#0a7463]/50',
                    },
                    {
                      num: '100%',
                      label: 'Transparansi',
                      sub: 'Bagi hasil project terbuka',
                      color: 'text-[#e879f9]',
                      border: 'hover:border-[#c026d3]/50',
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className={`gsap-card-stagger p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0f1514] border border-neutral-800 ${stat.border} transition-colors flex flex-col justify-center`}
                    >
                      <span className={`text-xl sm:text-3xl font-black ${stat.color} font-heading`}>
                        {stat.num}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white mt-0.5">{stat.label}</span>
                      <span className="text-[10px] sm:text-xs text-neutral-400 mt-0.5 leading-tight">{stat.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="emerald" />

          {/* ============================================================
              TENTANG YEG PRODUCTION & PERUBAHAN KONSEP (GSAP Reveal)
          ============================================================ */}
          <section id="section-tentang" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#38bdf8] uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284c7]"></span>
                WHO WE ARE & THE CHANGE
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Tentang YEG Production
              </h2>
              <p className="text-xs sm:text-base md:text-lg text-neutral-300 max-w-3xl leading-relaxed">
                <strong className="text-white">YEG Production</strong> adalah bisnis rintisan yang bergerak di bidang <strong className="text-[#34d399]">Creative Production</strong>, dengan fokus awal pada penyediaan produk dan jasa kreatif yang memiliki nilai guna serta nilai jual.
              </p>
            </div>

            {/* Core Philosophy Quote Card */}
            <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0d1b2a] via-[#102438] to-[#0c1a24] border border-[#1e4976] relative shadow-xl">
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 text-[#38bdf8]/15" />
              <span className="text-[10px] sm:text-xs font-bold text-[#38bdf8] uppercase tracking-widest font-mono block mb-1">
                GAGASAN SEDERHANA
              </span>
              <blockquote className="text-base sm:text-2xl md:text-3xl font-bold text-white font-heading leading-snug">
                “Mengubah ide dan kreativitas menjadi sesuatu yang dapat digunakan, diproduksi, dan memiliki nilai ekonomi.”
              </blockquote>
            </div>

            {/* Interactive Pipeline: Ide -> Desain -> Produksi -> Produk Jadi (Compact 2x2 grid on mobile) */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white font-heading">
                    Alur Kebutuhan Client Terpadu
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    Dalam perkembangannya, YEG membantu kebutuhan client mulai dari:
                  </p>
                </div>
                <span className="text-[11px] sm:text-xs font-mono text-[#34d399] bg-[#0a7463]/20 px-3 py-1 rounded-full border border-[#0a7463]/50 self-start sm:self-auto font-medium">
                  Ide → Desain → Produksi → Produk Jadi
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
                {pipelineSteps.map((step, idx) => {
                  const isActive = activePipelineStep === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActivePipelineStep(idx)}
                      className={`gsap-card-stagger p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#152e27] border-[#0a7463] text-white shadow-xl scale-[1.02]'
                          : 'bg-[#101715] border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] sm:text-xs font-mono font-bold ${isActive ? 'text-[#34d399]' : 'text-neutral-500'}`}>
                          {step.step}
                        </span>
                        {isActive && <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" />}
                      </div>
                      <h4 className="text-sm sm:text-lg font-bold text-white mt-1.5 font-heading">{step.title}</h4>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#34d399] mt-0.5">{step.subtitle}</p>
                      <p className="text-[11px] sm:text-xs text-neutral-300 mt-1.5 leading-snug line-clamp-3 sm:line-clamp-none">{step.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Perubahan Konsep */}
            <div className="bg-[#101715] border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-3">
                <div>
                  <span className="text-[10px] sm:text-xs font-semibold text-[#fbbf24] uppercase tracking-wider font-mono">
                    THE CHANGE · DARI JASA MENUJU PRODUKSI
                  </span>
                  <h3 className="text-base sm:text-2xl font-bold text-white font-heading mt-0.5">
                    Dari Creative Service → Creative Production
                  </h3>
                </div>

                {/* Segmented Switcher */}
                <div className="flex items-center gap-1 p-1 bg-black/60 rounded-xl border border-neutral-800 self-start sm:self-auto">
                  <button
                    onClick={() => setConceptTab('sekarang')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      conceptTab === 'sekarang'
                        ? 'bg-[#0a7463] text-white font-bold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Konsep Sekarang
                  </button>
                  <button
                    onClick={() => setConceptTab('sebelumnya')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                      conceptTab === 'sebelumnya'
                        ? 'bg-neutral-800 text-white font-bold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Sebelumnya
                  </button>
                </div>
              </div>

              {conceptTab === 'sekarang' ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
                  <div className="md:col-span-7 space-y-2.5">
                    <div className="p-3 sm:p-4 rounded-xl bg-[#0f241e] border border-[#0a7463] font-mono text-xs sm:text-sm text-white font-bold">
                      Client → Kebutuhan → Ide & Desain → Produksi → Produk Jadi
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      YEG tidak hanya menawarkan jasa, tetapi juga menghadirkan produk yang dapat diproduksi dan dijual. Kemampuan desain yang sudah dimiliki menjadi bagian integral dari proses produksi.
                    </p>
                    <p className="text-xs sm:text-base font-bold text-white font-heading border-l-2 border-[#34d399] pl-3 pt-0.5">
                      “Kami tidak hanya membuat desain. Kami ingin membuat sesuatu yang bisa diproduksi dan memiliki nilai jual.”
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-neutral-900 p-4 sm:p-5 rounded-xl border border-neutral-800 space-y-2">
                    <span className="text-xs font-bold text-[#34d399] uppercase tracking-wider block font-mono">
                      Kelebihan Model Sekarang:
                    </span>
                    <ul className="text-xs sm:text-sm text-neutral-300 space-y-1.5">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                        Margin keuntungan lebih tinggi per order
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                        Membuka segmen institusi & sekolah (B2B)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                        Pesanan cetak custom berkala tiap tahun
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
                  <div className="md:col-span-7 space-y-2.5">
                    <div className="p-3 sm:p-4 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-xs sm:text-sm text-neutral-400">
                      Client → Memesan Jasa Desain → Selesai
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      Pada konsep sebelumnya, YEG hanya menjalankan jasa desain lepas. Selesai file diserahkan, transaksi berakhir tanpa andil dalam pembuatan produk fisik.
                    </p>
                  </div>
                  <div className="md:col-span-5 bg-black/40 p-4 sm:p-5 rounded-xl border border-neutral-800">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                      Evaluasi:
                    </span>
                    <p className="text-xs text-neutral-400 leading-relaxed">
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
              AWAL MULA YEG PRODUCTION (2025) (GSAP Reveal)
          ============================================================ */}
          <section id="section-how-it-started" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#fbbf24] uppercase tracking-wider font-mono flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#fbbf24]" />
                HOW IT STARTED · SEJAK 2025
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Awal Mula YEG Production
              </h2>
              <p className="text-xs sm:text-base text-neutral-300">
                YEG Production mulai dirintis sejak <strong>2025</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start">
              <div className="md:col-span-6 bg-[#111716] border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 space-y-3">
                <span className="text-xs font-bold text-[#fbbf24] uppercase tracking-wider block font-mono">
                  Pada awalnya, konsep YEG berfokus pada:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-200">
                  {[
                    'Digital Creative',
                    'Jasa desain komersial',
                    'Social media design',
                    'Feed design',
                    'Banner & promosi',
                    'Logo & branding',
                    'Kebutuhan visual lainnya',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2 sm:p-3 rounded-xl bg-neutral-900 border border-neutral-800/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0" />
                      <span className="text-[11px] sm:text-xs font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-6 space-y-3">
                <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1a1c18] to-[#111412] border border-[#f59e0b]/30 space-y-3">
                  <span className="text-xs font-bold text-[#fbbf24] uppercase tracking-wider font-mono block">
                    Perjalanan & Realitas Lapangan
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    Beberapa project telah berhasil dikerjakan. Namun belum berkembang optimal karena keterbatasan waktu pekerjaan, perkuliahan, dan promosi.
                  </p>
                  <div className="pt-2 border-t border-neutral-800/80 space-y-1">
                    <p className="text-sm sm:text-base font-bold text-[#34d399] font-heading">
                      Bukan berarti idenya berhenti.
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
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
              BUSINESS MODEL (DUAL PILLARS) (GSAP Reveal)
          ============================================================ */}
          <section id="section-model-bisnis" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#38bdf8] uppercase tracking-wider font-mono flex items-center gap-2">
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
                      <span className="text-[10px] font-mono text-[#38bdf8] font-bold">PILAR 01</span>
                      <h3 className="text-base sm:text-xl font-bold text-white font-heading">CREATIVE SERVICE</h3>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-neutral-400 font-mono">Digital & Visual</span>
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
                      className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-[#0284c7]/20 flex items-center gap-2"
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
                      <span className="text-[10px] font-mono text-[#34d399] font-bold">PILAR 02</span>
                      <h3 className="text-base sm:text-xl font-bold text-white font-heading">PRODUCTION & VENDOR</h3>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs text-[#34d399] font-mono">Fisik & Manufaktur</span>
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
                      className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-[#0a7463]/40 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] shrink-0" />
                      <span className="text-[11px] sm:text-xs font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-neutral-900 border border-neutral-800 text-center flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-base text-neutral-300 font-mono">Creative</span>
              <span className="text-lg sm:text-2xl font-bold text-[#34d399]">+</span>
              <span className="text-xs sm:text-base text-neutral-300 font-mono">Production</span>
              <span className="text-lg sm:text-2xl font-bold text-[#34d399]">=</span>
              <span className="text-base sm:text-2xl font-black text-white font-heading tracking-wider">
                YEG PRODUCTION
              </span>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="amber" />

          {/* ============================================================
              PRODUK PERTAMA & CUSTOMIZER (GSAP Reveal)
          ============================================================ */}
          <section id="section-produk-pertama" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#fbbf24] uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
                OUR FIRST PRODUCT · PRODUK UNGGULAN
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Produk Pertama YEG Production
              </h2>
              <p className="text-lg sm:text-2xl font-bold text-[#34d399] font-heading">
                CUSTOM MAP IJAZAH / RAPOR
              </p>
              <p className="text-xs sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                Produk pertama yang akan dikembangkan: <strong>Map Ijazah & Rapor Custom</strong> dengan 3 keunggulan utama:
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 text-center space-y-1">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-[#fbbf24] block">01</span>
                <h4 className="text-xs sm:text-base font-bold text-white font-heading">FREE DESIGN</h4>
                <p className="text-[10px] sm:text-xs text-neutral-300">Desain sampul gratis sesuai logo sekolah.</p>
              </div>
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 text-center space-y-1">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-[#34d399] block">02</span>
                <h4 className="text-xs sm:text-base font-bold text-white font-heading">CUSTOM PRODUCTION</h4>
                <p className="text-[10px] sm:text-xs text-neutral-300">Bahan ASE kulit jeruk empuk & foil emboss.</p>
              </div>
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 text-center space-y-1">
                <span className="text-[10px] sm:text-xs font-mono font-bold text-[#38bdf8] block">03</span>
                <h4 className="text-xs sm:text-base font-bold text-white font-heading">HARGA TERJANGKAU</h4>
                <p className="text-[10px] sm:text-xs text-neutral-300">Langsung dari relasi produsen tangan pertama.</p>
              </div>
            </div>

            {/* Interactive Customizer Simulator */}
            <InteractiveMapCustomizer />

            {/* Target Market */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#101715] border border-neutral-800 space-y-2.5">
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block font-mono">
                Target awal dapat diarahkan kepada:
              </span>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                {[
                  'Sekolah Negeri & Swasta',
                  'Madrasah Ibtidaiyah / MTs / MA',
                  'Yayasan Pendidikan',
                  'Lembaga Kursus & Instansi',
                ].map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 font-medium"
                  >
                    • {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-neutral-400 italic pt-1">
                Produk ini dipilih sebagai langkah awal membangun modal dan pengalaman bisnis YEG Production.
              </p>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="emerald" />

          {/* ============================================================
              KENAPA MEMULAI DARI PRODUK? (BOOTSTRAP) (GSAP Reveal)
          ============================================================ */}
          <section id="section-kenapa-produk" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#34d399] uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0a7463]"></span>
                STRATEGI BOOTSTRAP BISNIS
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Kenapa Memulai dari Produk?
              </h2>
              <p className="text-xs sm:text-base text-neutral-300">
                YEG Production saat ini berada pada tahap <strong className="text-white">bootstrap</strong>.
              </p>
            </div>

            {/* Bootstrap Formula */}
            <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#141c1a] via-[#182622] to-[#101715] border border-neutral-700/80 text-center space-y-1.5">
              <span className="text-[11px] sm:text-xs text-neutral-400 block uppercase tracking-wider">
                Bisnis dikembangkan dengan modal:
              </span>
              <div className="text-lg sm:text-3xl font-black text-[#34d399] font-heading">
                Skill + Ide + Relasi + Komunikasi + Waktu
              </div>
              <span className="text-[11px] sm:text-xs text-neutral-400 block">
                bukan dengan modal besar.
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block font-mono">
                Produk awal yang dipilih memiliki kriteria:
              </span>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {[
                  'Diproduksi via vendor',
                  'Tanpa mesin sendiri',
                  'Memakai skill desain',
                  'Target pasar jelas',
                  'Bisa ditawarkan langsung',
                  'Hasil untuk reinvestasi',
                ].map((reason, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-4 rounded-xl bg-[#101715] border border-neutral-800 text-xs sm:text-sm text-neutral-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0a7463] shrink-0" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 sm:p-6 rounded-2xl bg-[#0f241e] border border-[#0a7463] text-center space-y-1">
              <span className="text-[10px] sm:text-xs font-mono text-[#34d399] font-bold block uppercase tracking-wider">
                Tujuan Awal:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-xs sm:text-base font-bold text-white font-mono">
                <span>Client pertama</span>
                <span className="text-[#34d399]">→</span>
                <span className="text-[#34d399]">Revenue pertama</span>
                <span className="text-[#34d399]">→</span>
                <span>Modal pertama</span>
                <span className="text-[#34d399]">→</span>
                <span className="text-[#34d399]">Produk berikutnya</span>
              </div>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="purple" />

          {/* ============================================================
              CARA KAMI BEKERJA (6 PILAR) (GSAP Reveal)
          ============================================================ */}
          <section id="section-budaya-kerja" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#e879f9] uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c026d3]"></span>
                OUR WAY OF WORKING · BUDAYA KERJA
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Cara Kami Bekerja
              </h2>
              <p className="text-xs sm:text-base text-neutral-300">
                YEG Production ingin membangun budaya kerja yang sehat:
              </p>
            </div>

            {/* 6 Budaya Cards: 2-column on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
              {[
                { title: 'THINK', desc: 'Berpikir sebelum bertindak.' },
                { title: 'CREATE', desc: 'Menghasilkan ide dan solusi.' },
                { title: 'COMMUNICATE', desc: 'Menyampaikan ide terbuka.' },
                { title: 'EXECUTE', desc: 'Tidak berhenti pada konsep.' },
                { title: 'LEARN', desc: 'Belajar dari pengalaman.' },
                { title: 'GROW', desc: 'Berkembang bersama.' },
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  className="gsap-card-stagger p-3.5 sm:p-5 rounded-2xl bg-[#101715] border border-neutral-800 hover:border-[#0a7463] transition-all space-y-1 group"
                >
                  <span className="text-[10px] sm:text-xs font-mono text-[#34d399] font-bold">0{idx + 1}</span>
                  <h4 className="text-base sm:text-xl font-bold text-white font-heading group-hover:text-[#34d399] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-300 leading-snug">{pillar.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-neutral-800 text-center space-y-0.5">
              <p className="text-xs text-neutral-400">
                Di tahap awal, tidak ada yang dituntut langsung sempurna.
              </p>
              <p className="text-xs sm:text-base font-bold text-white font-heading">
                Yang penting adalah mau belajar, mau mencoba, dan mau bertanggung jawab.
              </p>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="emerald" />

          {/* ============================================================
              KENAPA YEG MEMBUTUHKAN PARTNER & KUIS (GSAP Reveal)
          ============================================================ */}
          <section id="section-partner" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#34d399] uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0a7463]"></span>
                CREATIVE PRODUCTION PARTNER
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Kenapa YEG Membutuhkan Partner?
              </h2>
              <p className="text-xs sm:text-base text-neutral-300 max-w-2xl">
                Saat ini YEG Production masih dibangun dari tahap awal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
                <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block font-mono">
                  Kak Ridhwan memiliki dasar dalam:
                </span>
                <ul className="text-xs sm:text-sm text-neutral-200 space-y-2">
                  {['Desain', 'Komunikasi', 'Penawaran', 'Konsep produk', 'Pengembangan ide'].map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0a7463]" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0f241e] border border-[#0a7463] space-y-3">
                <span className="text-xs font-bold text-[#34d399] uppercase tracking-wider block font-mono">
                  Peluang Kemitraan:
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Membangun bisnis tidak dapat bergantung pada satu orang saja.
                </p>
                <div className="p-3 bg-black/40 rounded-xl border border-[#0a7463]/50">
                  <p className="text-sm sm:text-base font-bold text-white font-heading">
                    YEG membuka kesempatan untuk{' '}
                    <span className="text-[#34d399]">1 orang Creative Production Partner</span>.
                  </p>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  Berpikir bersama, belajar bersama, bekerja bersama, dan bertumbuh bersama.
                </p>
              </div>
            </div>

            {/* Kriteria Pelamar */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-neutral-900/90 border border-neutral-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-neutral-800 pb-2.5">
                <h3 className="text-base sm:text-xl font-bold text-white font-heading">
                  Karakter & Kemampuan yang Diharapkan
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-neutral-800 text-[#34d399] text-[11px] sm:text-xs font-bold font-mono self-start sm:self-auto">
                  Tidak ada batasan pendidikan formal
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-neutral-200">
                {[
                  'Basic design',
                  'Basic Office / Word',
                  'Digital literate',
                  'Kreatif & beride',
                  'Mau belajar',
                  'Cepat beradaptasi',
                  'Komunikatif',
                  'Bertanggung jawab',
                  'Memiliki inisiatif',
                  'Bisa bekerja sama',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-neutral-800 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                    <span className="text-[11px] sm:text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Partner Matcher Quiz */}
            <PartnerQuizMatcher onOpenCandidateForm={() => setIsCandidateModalOpen(true)} />
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="blue" />

          {/* ============================================================
              PERAN DALAM YEG PRODUCTION (6 LINGKUP) (GSAP Reveal)
          ============================================================ */}
          <section id="section-peran-partner" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#38bdf8] uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284c7]"></span>
                FLEXIBLE ROLES · PERAN PARTNER
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Peran dalam YEG Production
              </h2>
              <p className="text-xs sm:text-base text-neutral-300">
                Karena masih tahap awal, peran partner bersifat fleksibel dan dinamis:
              </p>
            </div>

            {/* 6 Roles: 2-column on mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
              {rolesList.map((role, idx) => {
                const Icon = role.icon;
                return (
                  <div
                    key={idx}
                    className={`gsap-card-stagger p-3.5 sm:p-5 rounded-2xl bg-gradient-to-br ${role.themeColor} border transition-all space-y-2`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-black/40 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs sm:text-base font-bold text-white font-heading">{role.title}</h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-200 leading-snug line-clamp-2">{role.desc}</p>
                    <div className="pt-1 border-t border-white/10 flex flex-wrap gap-1">
                      {role.skills.slice(0, 2).map((sk, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-neutral-300"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-neutral-800 text-center">
              <p className="text-xs sm:text-sm font-semibold text-neutral-200">
                Tugas utama dibagi sesuai fokus, tetapi keberhasilan project adalah tanggung jawab bersama.
              </p>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="emerald" />

          {/* ============================================================
              COMPENSATION & WORKING SYSTEM (GSAP Reveal)
          ============================================================ */}
          <section id="section-kompensasi" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#34d399] uppercase tracking-wider font-mono flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#34d399]" />
                TRANSPARANSI KEMITRAAN
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Bagaimana Sistem Awalnya?
              </h2>
              <p className="text-xs sm:text-base text-neutral-300 max-w-2xl">
                YEG Production masih berada pada tahap rintisan dan belum memiliki pemasukan tetap.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-neutral-900 border border-neutral-800 space-y-3">
                <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider block font-mono">
                  Kondisi Tahap Awal:
                </span>
                <div className="p-3 bg-black/40 rounded-xl border border-neutral-700">
                  <p className="text-sm sm:text-base font-bold text-white font-heading">
                    Tidak menggunakan sistem gaji bulanan tetap.
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Kompensasi mengikuti project/revenue yang berhasil diperoleh dan dikerjakan, dengan pembagian transparan.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0f241e] border border-[#0a7463] space-y-3">
                <span className="text-xs font-bold text-[#34d399] uppercase tracking-wider block font-mono">
                  Menuju Sistem Gaji Tetap:
                </span>
                <p className="text-xs sm:text-sm text-neutral-300">
                  Ketika YEG telah memiliki revenue stabil, client berkelanjutan, dan SOP jelas, maka sistem kompensasi akan dievaluasi dan dikembangkan.
                </p>
                <span className="inline-block px-3 py-1 bg-black/40 rounded-lg text-xs font-mono text-[#34d399] font-bold">
                  Keterbukaan Finansial 100%
                </span>
              </div>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="purple" />

          {/* ============================================================
              THE BIG VISION & ONE BRAND (GSAP Reveal)
          ============================================================ */}
          <section id="section-visi-ekosistem" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#818cf8] uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#6366f1]"></span>
                THE BIG VISION · EKOSISTEM MASA DEPAN
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Where Are We Going?
              </h2>
              <p className="text-xs sm:text-base text-neutral-300 max-w-2xl">
                Visi jangka panjang YEG adalah membangun ekosistem multi-bidang dalam satu brand:
              </p>
            </div>

            {/* 6 Divisions: 2-column on mobile */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
              {[
                { title: 'PRODUCTION', desc: 'Percetakan • Merchandise • Kemasan', icon: Layers, color: 'text-[#34d399]' },
                { title: 'APPAREL', desc: 'Clothing • Custom Wear', icon: Shirt, color: 'text-[#fbbf24]' },
                { title: 'CREATIVE', desc: 'Design • Branding • Digital', icon: Palette, color: 'text-[#38bdf8]' },
                { title: 'EVENT', desc: 'Event & Wedding Organizer', icon: Calendar, color: 'text-[#f472b6]' },
                { title: 'TECHNOLOGY', desc: 'Digital Solution & Inovasi', icon: Cpu, color: 'text-[#818cf8]' },
                { title: 'ENTERTAINMENT', desc: 'Music & Film Production', icon: Tv, color: 'text-[#a78bfa]' },
              ].map((div, idx) => {
                const Icon = div.icon;
                return (
                  <div
                    key={idx}
                    className="gsap-card-stagger p-3.5 sm:p-5 rounded-2xl bg-[#101715] border border-neutral-800 space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${div.color}`} />
                      <h4 className="text-xs sm:text-base font-bold text-white font-heading">{div.title}</h4>
                    </div>
                    <p className="text-[10px] sm:text-xs text-neutral-300 leading-tight">{div.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0f241e] via-[#091512] to-[#0c1110] border border-[#0a7463] text-center space-y-2">
              <span className="text-[10px] sm:text-xs font-mono text-[#34d399] font-bold uppercase tracking-wider block">
                ONE BRAND, MANY POSSIBILITIES
              </span>
              <p className="text-sm sm:text-xl md:text-2xl font-black text-white font-heading max-w-2xl mx-auto">
                “Membantu berbagai kebutuhan manusia melalui kreativitas, produksi, teknologi, dan bisnis.”
              </p>
              <p className="text-base sm:text-2xl font-black text-[#34d399] font-heading tracking-widest pt-1">
                YEG — Your Expression Gear
              </p>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="amber" />

          {/* ============================================================
              DEDICATED FOUNDER PROFILE BANNER (Leads to 1-Page CV)
          ============================================================ */}
          <section className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8">
            <div className="p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-[#032a30] via-[#093d38] to-[#0a4840] border border-[#34d399]/60 flex flex-col md:flex-row items-center justify-between gap-5 shadow-2xl">
              <div className="flex items-center gap-4 text-center md:text-left flex-col sm:flex-row">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#34d399] shadow-lg shrink-0">
                  <img
                    src="/src/assets/images/m_ridhwan_mubarok_founder_1791040301376.jpg"
                    alt="Kak Ridhwan - Founder YEG"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-[#38bdf8] font-bold uppercase tracking-wider block">
                    FOUNDER PROFILE & CV
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white font-heading mt-0.5">
                    Kenali Rekam Jejak Kak Ridhwan (Founder YEG)
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 mt-1 max-w-xl">
                    Mahasiswa S1 DKV UNISA Bandung, pengalaman profesional di AMC Multimedia, dan catatan filosofi rintisan YEG.
                  </p>
                </div>
              </div>

              <button
                onClick={navigateToCv}
                className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-100 text-[#064036] font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Buka 1 Halaman CV Lengkap</span>
                <ArrowRight className="w-4 h-4 text-[#064036]" />
              </button>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="emerald" />

          {/* ============================================================
              ROADMAP & DUAL COMMITMENT (GSAP Reveal)
          ============================================================ */}
          <section id="section-roadmap-komitmen" className="gsap-reveal-section max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-semibold text-[#34d399] uppercase tracking-wider font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0a7463]"></span>
                GROWTH ROADMAP & MUTUAL EXPECTATIONS
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-heading">
                Apa yang Bisa Kita Bangun Bersama?
              </h2>
            </div>

            {/* Roadmap: 2-column on mobile */}
            <div className="p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#101715] border border-neutral-800 space-y-4">
              <span className="text-xs font-bold text-[#34d399] uppercase tracking-wider block font-mono">
                ROADMAP: DARI 1 PRODUK MENUJU SKALA PERUSAHAAN
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
                {[
                  { title: '1. Dari 1 Produk', desc: 'Map Ijazah / Rapor' },
                  { title: '2. Client Pertama', desc: 'Validasi pasar sekolah' },
                  { title: '3. Revenue Pertama', desc: 'Arus kas & bagi hasil' },
                  { title: '4. Modal Pertama', desc: 'Kas mandiri reinvestasi' },
                  { title: '5. Produk Baru', desc: 'Merchandise & apparel' },
                  { title: '6. Banyak Client', desc: 'Jaringan instansi meluas' },
                  { title: '7. Skala Produksi', desc: 'Vendor bertambah' },
                  { title: '8. Tim', desc: 'Perekrutan anggota baru' },
                  { title: '9. Divisi', desc: 'Struktur organisasi' },
                  { title: '10. YEG PRODUCTION', desc: 'Perusahaan terpadu' },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 sm:p-4 rounded-xl border text-center ${
                      idx === 9
                        ? 'bg-[#0a7463] border-[#34d399] text-white shadow-md'
                        : 'bg-neutral-900 border-neutral-800 text-neutral-300'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold block">{step.title}</span>
                    <span className="text-[10px] text-neutral-400 block mt-0.5">{step.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Works Both Ways */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-neutral-900 border border-neutral-800 space-y-2.5">
                <span className="text-xs font-bold text-[#34d399] uppercase tracking-wider block font-mono">
                  DARI YEG PRODUCTION:
                </span>
                <ul className="text-xs sm:text-sm text-neutral-200 space-y-2">
                  {[
                    'Ruang untuk belajar & bertumbuh',
                    'Terlibat dalam keputusan bisnis',
                    'Transparansi penuh dalam tiap project',
                    'Pengembangan portofolio nyata',
                  ].map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0f241e] border border-[#0a7463] space-y-2.5">
                <span className="text-xs font-bold text-white uppercase tracking-wider block font-mono">
                  DARI PARTNER:
                </span>
                <ul className="text-xs sm:text-sm text-neutral-200 space-y-2">
                  {[
                    'Komitmen & inisiatif mandiri',
                    'Komunikasi terbuka & tanggung jawab',
                    'Kemauan belajar & adaptasi cepat',
                    'Kesediaan berproses dari awal',
                  ].map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Animated Section Divider */}
          <SectionDivider variant="purple" />

          {/* ============================================================
              FINAL CALL TO ACTION (GSAP Reveal) WITH ENLARGED LOGO
          ============================================================ */}
          <section id="section-final-call" className="gsap-reveal-section max-w-4xl mx-auto px-3.5 sm:px-6 md:px-8 text-center space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-[#0a7463]/25 border border-[#0a7463]/50 text-[#34d399] text-xs font-semibold uppercase tracking-wider font-mono">
                FINAL QUESTION
              </span>

              <h2 className="text-2xl sm:text-5xl md:text-6xl font-black text-white font-heading tracking-tight leading-tight">
                ARE YOU READY TO BUILD FROM ZERO?
              </h2>

              <p className="text-xs sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                YEG Production mencari partner yang ingin ikut membangun sesuatu bernilai dari awal.
              </p>
            </div>

            {/* Final Call Card with Enlarged Logo */}
            <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0f241e] to-[#07100e] border border-[#0a7463] space-y-5 shadow-2xl">
              <div className="flex justify-center">
                {/* Enlarged logo as requested */}
                <YegLogo size={88} animated={true} />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl sm:text-3xl font-black text-white font-heading tracking-wider">
                  YEG PRODUCTION
                </h3>
                <p className="text-sm sm:text-base font-bold text-[#34d399]">
                  Your Expression, Our Creation.
                </p>
                <p className="text-xs sm:text-sm text-neutral-300">Creative Production</p>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-neutral-200">
                <span>Start Small.</span>
                <span className="text-[#34d399]">·</span>
                <span>Create Value.</span>
                <span className="text-[#34d399]">·</span>
                <span>Grow Together.</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                <button
                  onClick={handleOpenDirectWhatsApp}
                  className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#0a7463] hover:bg-[#086354] rounded-xl transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquareShare className="w-4 h-4" />
                  <span>Chat Kak Ridhwan via WA</span>
                </button>

                <button
                  onClick={navigateToCv}
                  className="px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <User className="w-4 h-4 text-[#38bdf8]" />
                  <span>Profil & CV Founder</span>
                </button>

                <button
                  onClick={() => setIsCandidateModalOpen(true)}
                  className="px-4 py-3 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Form Konfirmasi Minat</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Floating Back to Top Button */}
      {currentView === 'home' && (
        <BackToTopButton currentSectionIndex={scrollSectionIndex} />
      )}

      {/* Candidate Modal Dialog */}
      <CandidateModal
        isOpen={isCandidateModalOpen}
        onClose={() => setIsCandidateModalOpen(false)}
      />

      {/* Footer */}
      <footer className="no-print border-t border-neutral-800 bg-[#060a09] py-8 sm:py-12 px-3.5 sm:px-6 md:px-8 text-neutral-400 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left flex flex-col sm:flex-row items-center gap-3">
            <YegLogo size={44} animated={false} />
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-heading tracking-tight">
                YEG PRODUCTION
              </h4>
              <p className="text-neutral-400 text-[11px] sm:text-xs">
                Your Expression, Our Creation. · Creative Production
              </p>
              <p className="text-neutral-500 text-[10px]">
                Start Small. Create Value. Grow Together.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs">
            <button
              onClick={navigateToHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <button
              onClick={navigateToCv}
              className="text-[#38bdf8] font-semibold hover:underline transition-colors cursor-pointer"
            >
              Profil Founder (CV)
            </button>
            <button
              onClick={downloadPitchDeckPdf}
              className="text-[#34d399] font-semibold hover:underline cursor-pointer"
            >
              Unduh PPT 16:9
            </button>
            <button
              onClick={handleOpenDirectWhatsApp}
              className="text-white hover:text-[#34d399] transition-colors cursor-pointer"
            >
              Chat WA Founder
            </button>
          </div>

          <div className="text-neutral-500 text-center md:text-right text-[11px]">
            <p>© 2025–2026 YEG Production. All rights reserved.</p>
            <p>Founder: Kak Ridhwan (M. Ridhwan Mubarok) · Dayeuhkolot, Bandung</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
