import React from 'react';
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
  Award,
  CheckCircle2,
  Palette,
  Video,
  FileSpreadsheet,
  Layers,
  ArrowLeft,
  Quote,
  Clock,
  HeartHandshake,
  Download,
} from 'lucide-react';
import { downloadPitchDeckPdf } from '../utils/pdfExport';
import founderPhoto from './assets/images/m_ridhwan_mubarok_founder.jpg';

interface FounderCVSectionProps {
  onBackToHome?: () => void;
}

export const FounderCVSection: React.FC<FounderCVSectionProps> = ({
  onBackToHome,
}) => {
  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Halo Kak Ridhwan (Founder YEG Production)!
Saya tertarik dengan kesempatan Creative Production Partner yang sedang dibuka.

Saya sudah membaca profil & CV Kak Ridhwan serta model bisnis YEG Production, dan ingin mengikuti proses selanjutnya.

Berikut data singkat saya:
Nama: 
Domisili: 
Usia: 
Skill: 
Pengalaman: 

Terima kasih.`
    );
    window.open(`https://wa.me/6289674849505?text=${text}`, '_blank');
  };

  return (
    <div id="founder-cv-page" className="max-w-6xl mx-auto px-3.5 sm:px-6 md:px-8 py-4 sm:py-8 space-y-8 sm:space-y-10 animate-in fade-in duration-300">
      {/* Top Back Navigation Bar */}
      {onBackToHome && (
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-800">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white transition-all cursor-pointer hover:border-[#34d399] active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 text-[#34d399]" />
            <span>Kembali ke Presentasi Model Bisnis</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={downloadPitchDeckPdf}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#34d399]" />
              <span className="hidden sm:inline">Unduh PPT 16:9</span>
            </button>
            <button
              onClick={handleOpenWhatsApp}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0a7463] hover:bg-[#086354] text-xs sm:text-sm font-bold text-white transition-all shadow-sm cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat WA Founder</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Hero Card for Kak Ridhwan */}
      <div className="bg-gradient-to-br from-[#0f241e] via-[#0d1a17] to-[#081210] border border-[#0a7463]/70 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#34d399]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
          {/* Photo & Badge */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative group">
              <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-[#34d399] shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <img
                  src={founderPhoto}
                  alt="Kak Ridhwan (M. Ridhwan Mubarok) - Founder YEG Production"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#0a7463] text-white text-[11px] sm:text-xs font-bold font-mono shadow-lg border border-[#34d399]/60 whitespace-nowrap">
                Founder YEG Production
              </span>
            </div>

            <div className="mt-4 sm:mt-5 space-y-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white font-heading tracking-tight">
                M. RIDHWAN MUBAROK
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-[#34d399]">
                Panggil aku: <strong>Kak Ridhwan</strong>
              </p>
            </div>
          </div>

          {/* Core Biography & Founder Vision */}
          <div className="lg:col-span-8 space-y-3.5 text-center lg:text-left">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#38bdf8] font-bold uppercase tracking-wider block">
                Graphic Designer & Multimedia Enthusiast
              </span>
              <h2 className="text-lg sm:text-2xl font-bold text-white font-heading">
                “Membangun YEG dari Ide Menjadi Nilai Ekonomi Nyata”
              </h2>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-neutral-200 leading-relaxed">
              Saya adalah <strong>Founder YEG Production</strong>. Berpengalaman profesional di <em>Al-Basyariyah Multimedia Centre (AMC)</em> dalam menangani produksi desain grafis, pengelolaan dan koordinasi tim multimedia dalam berbagai kebutuhan publikasi dan acara. Saat ini saya merupakan mahasiswa aktif S1 Desain Komunikasi Visual (DKV) di Universitas ‘Aisyiyah (UNISA) Bandung.
            </p>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/50 border border-[#0a7463]/40 text-xs sm:text-sm text-neutral-300 space-y-1 text-left">
              <p className="text-[#34d399] font-bold font-heading flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Catatan Komitmen Founder:
              </p>
              <p className="italic leading-relaxed text-xs sm:text-[13px]">
                “Gagasan YEG sudah saya mulai pikirkan sejak 2025. Kini saya memulai kembali bukan dengan menunggu semuanya serba ada, tetapi dari apa yang saya punya: <strong>Tekad, Skill, Ide, Desain, Komunikasi, dan Kemauan untuk Belajar</strong> bersama partner yang siap bertumbuh bersama.”
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 text-xs sm:text-sm text-neutral-300">
              <span className="flex items-center gap-1.5 text-white font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#fbbf24]" />
                Dayeuhkolot, Bandung
              </span>
              <span className="text-neutral-600 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-white font-medium">
                <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
                ridhwanmujahidin01@gmail.com
              </span>
              <span className="text-neutral-600 hidden sm:inline">·</span>
              <button
                onClick={handleOpenWhatsApp}
                className="px-3.5 py-1.5 rounded-xl bg-[#0a7463] hover:bg-[#086354] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat WA Kak Ridhwan</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ALL SECTIONS EXPOSED AT ONCE (NO TAB BUTTONS!) */}
      <div className="space-y-6 sm:space-y-8">
        {/* ROW 1: Riwayat Pendidikan & Pengalaman Kerja (2-Columns Side by Side) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Riwayat Pendidikan Card */}
          <div className="bg-[#101715] border border-neutral-800 rounded-3xl p-5 sm:p-7 space-y-4 shadow-xl hover:border-[#fbbf24]/50 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#fbbf24]/20 flex items-center justify-center text-[#fbbf24]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-[#fbbf24] font-bold uppercase tracking-wider block">
                    AKADEMIK & FORMAL
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    Riwayat Pendidikan
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border-l-4 border-[#fbbf24] space-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      S1 Desain Komunikasi Visual (DKV)
                    </h4>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#fbbf24] bg-[#fbbf24]/15 px-2 py-0.5 rounded">
                      2025 – 2029 (Aktif)
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#38bdf8]">
                    Universitas ‘Aisyiyah (UNISA) Bandung
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                    Fokus pada desain identitas visual, tipografi, komunikasi grafis, dan perancangan media produksi komersial.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border-l-4 border-neutral-700 space-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      Tarbiyatul Muallimin Al-Islamiyah (Mu’adalah)
                    </h4>
                    <span className="text-[10px] sm:text-xs font-mono text-neutral-400">
                      2018 – 2025
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Pondok Pesantren Al-Basyariyah 2
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-400">
                    Pendidikan terpadu kedisiplinan, kepemimpinan santri, dan keorganisasian asrama.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-black/40 border border-neutral-800 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-bold text-white">Sekolah Dasar</h4>
                    <span className="text-[10px] font-mono text-neutral-500">2012 – 2018</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">SD Negeri Dayeuhkolot 12</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pengalaman Kerja & Organisasi Card */}
          <div className="bg-[#101715] border border-neutral-800 rounded-3xl p-5 sm:p-7 space-y-4 shadow-xl hover:border-[#38bdf8]/50 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono text-[#38bdf8] font-bold uppercase tracking-wider block">
                    PROFESIONAL & KEPEMIMPINAN
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                    Pengalaman Kerja & Organisasi
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border-l-4 border-[#38bdf8] space-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">Staff Multimedia</h4>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#38bdf8] bg-[#38bdf8]/15 px-2 py-0.5 rounded">
                      2024 – Sekarang
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-200">
                    Al-Basyariyah Multimedia Centre (AMC)
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                    Bertanggung jawab mengoordinasikan tim multimedia, mengatur penugasan desain dan konten visual, mengawasi standar kualitas publikasi, serta terlibat langsung dalam desain grafis.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border-l-4 border-neutral-700 space-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">Design Visual Production</h4>
                    <span className="text-[10px] sm:text-xs font-mono text-neutral-400">2026 – 2027</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300">Himpunan Mahasiswa DKV</p>
                  <p className="text-[11px] sm:text-xs text-neutral-400">
                    Mengelola produksi visual dan konten untuk seluruh kebutuhan acara dan branding himpunan.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-xl bg-black/40 border border-neutral-800 space-y-0.5">
                    <span className="text-[10px] font-mono text-neutral-500">2023 – 2024</span>
                    <h5 className="text-xs font-bold text-white">Bagian Informasi & Multimedia</h5>
                    <p className="text-[10px] text-neutral-400">Organisasi Santri Al-Basyariyah</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-neutral-800 space-y-0.5">
                    <span className="text-[10px] font-mono text-neutral-500">2022 – 2023</span>
                    <h5 className="text-xs font-bold text-white">Sekretaris Pengurus Asrama</h5>
                    <p className="text-[10px] text-neutral-400">Administrasi & Dokumentasi Visual</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Keahlian & Penguasaan Tools (Full Width 4-Columns Grid) */}
        <div className="bg-gradient-to-br from-[#121b18] to-[#0c1412] border border-[#0a7463]/50 rounded-3xl p-5 sm:p-7 space-y-5 shadow-xl">
          <div className="flex items-center gap-3 border-b border-neutral-800 pb-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#34d399]/20 flex items-center justify-center text-[#34d399]">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-[#34d399] font-bold uppercase tracking-wider block">
                SKILLSET & SOFTWARE PROFICIENCY
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                Keahlian & Penguasaan Tools
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Graphic Design */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-1.5 text-[#34d399] font-bold text-xs sm:text-sm font-heading">
                <Palette className="w-4 h-4" />
                <span>Desain Grafis</span>
              </div>
              <ul className="text-[11px] sm:text-xs text-neutral-300 space-y-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#34d399] shrink-0" />
                  Adobe Photoshop
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#34d399] shrink-0" />
                  CorelDRAW
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#34d399] shrink-0" />
                  Canva Pro
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#34d399] shrink-0" />
                  Media Cetak / Map
                </li>
              </ul>
            </div>

            {/* Video & Motion */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-1.5 text-[#38bdf8] font-bold text-xs sm:text-sm font-heading">
                <Video className="w-4 h-4" />
                <span>Video & Editing</span>
              </div>
              <ul className="text-[11px] sm:text-xs text-neutral-300 space-y-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#38bdf8] shrink-0" />
                  After Effects
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#38bdf8] shrink-0" />
                  Premiere Pro
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#38bdf8] shrink-0" />
                  CapCut Desktop
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#38bdf8] shrink-0" />
                  Color & Visual Cut
                </li>
              </ul>
            </div>

            {/* Office & Admin */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-1.5 text-[#fbbf24] font-bold text-xs sm:text-sm font-heading">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Administrasi</span>
              </div>
              <ul className="text-[11px] sm:text-xs text-neutral-300 space-y-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#fbbf24] shrink-0" />
                  Microsoft Word
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#fbbf24] shrink-0" />
                  Microsoft Excel
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#fbbf24] shrink-0" />
                  PowerPoint / Deck
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#fbbf24] shrink-0" />
                  Tata Kelola Surat
                </li>
              </ul>
            </div>

            {/* Management & Leadership */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-1.5 text-[#e879f9] font-bold text-xs sm:text-sm font-heading">
                <Layers className="w-4 h-4" />
                <span>Manajemen Tim</span>
              </div>
              <ul className="text-[11px] sm:text-xs text-neutral-300 space-y-1">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#e879f9] shrink-0" />
                  Kerja Tim & Arahan
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#e879f9] shrink-0" />
                  Manajemen Waktu
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#e879f9] shrink-0" />
                  Koordinasi Publikasi
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#e879f9] shrink-0" />
                  Layout Promosi
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROW 3: Cerita Personal YEG & Catatan Filosofi Founder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-5 sm:p-7 rounded-3xl bg-[#101715] border border-neutral-800 space-y-3">
            <span className="text-[10px] sm:text-xs font-mono text-[#fbbf24] font-bold uppercase tracking-wider block">
              THE STORY BEHIND YEG
            </span>
            <h4 className="text-base sm:text-xl font-bold text-white font-heading">
              Kisah di Balik Nama YEG
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              YEG merupakan akronim dari: <strong className="text-white">Your Expression Gear</strong>. Nama ini berakar dari nama <em>Yoon Eun Geun</em> karena ketertarikan Kak Ridhwan terhadap budaya kreatif Korea pada masanya.
            </p>
            <div className="p-3 bg-black/40 rounded-xl border border-neutral-800/80 font-mono text-xs text-[#34d399] space-y-1">
              <p>Dari sebuah nama →</p>
              <p>menjadi sebuah ide →</p>
              <p>menjadi sebuah bisnis rintisan →</p>
              <p className="font-bold text-white">dan diharapkan menjadi sebuah perusahaan multi-bidang.</p>
            </div>
          </div>

          <div className="p-5 sm:p-7 rounded-3xl bg-[#121917] border border-[#0a7463]/60 space-y-3">
            <span className="text-[10px] sm:text-xs font-mono text-[#34d399] font-bold uppercase tracking-wider block">
              WHY I STARTED THIS · PESAN KAK RIDHWAN
            </span>
            <h4 className="text-base sm:text-xl font-bold text-white font-heading">
              Transparansi Membangun dari Nol
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              “YEG belum merupakan perusahaan besar yang mapan. Kami masih mencari bentuk, mencari klien, dan merajut sistem. Orang yang bergabung akan memiliki ruang nyata untuk ikut membentuk arah bisnis ini dari awal.”
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Tekad', 'Skill', 'Ide', 'Desain', 'Komunikasi', 'Kemauan Belajar'].map((m, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-black/60 text-white border border-neutral-700"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Connect Callout */}
        <div className="p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0f241e] via-[#0b1715] to-[#07100e] border border-[#0a7463] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-xl font-bold text-white font-heading">
              Siap Berkolaborasi dan Berkembang Bersama Kak Ridhwan?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              YEG Production membuka kesempatan untuk <strong>1 orang Creative Production Partner</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 text-xs sm:text-sm font-semibold border border-neutral-700 transition-all cursor-pointer"
              >
                <span>Lihat Presentasi Bisnis</span>
              </button>
            )}
            <button
              onClick={handleOpenWhatsApp}
              className="px-5 py-3 rounded-xl bg-[#0a7463] hover:bg-[#086354] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WA Kak Ridhwan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
