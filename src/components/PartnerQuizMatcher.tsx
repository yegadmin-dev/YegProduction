import React, { useState } from 'react';
import { CheckSquare, Square, Sparkles, Send, UserCheck, MessageSquare } from 'lucide-react';

interface PartnerQuizMatcherProps {
  onOpenCandidateForm: () => void;
}

export const PartnerQuizMatcher: React.FC<PartnerQuizMatcherProps> = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    'Kreatif & Punya Ide (Suka eksplorasi konsep baru)',
    'Mau Belajar & Cepat Beradaptasi',
    'Komunikatif & Tanggung Jawab',
  ]);

  const skillOptions = [
    { id: 'design', label: 'Basic Design (Canva / Photoshop / Illustrator / Figma)', category: 'CREATIVE' },
    { id: 'office', label: 'Basic Microsoft Word / Office / Google Docs', category: 'BUSINESS' },
    { id: 'digital', label: 'Digital Literate (Paham platform internet & medsos)', category: 'DIGITAL' },
    { id: 'creative', label: 'Kreatif & Punya Ide (Suka eksplorasi konsep baru)', category: 'CREATIVE' },
    { id: 'learn', label: 'Mau Belajar & Cepat Beradaptasi', category: 'CULTURE' },
    { id: 'comm', label: 'Komunikatif & Tanggung Jawab', category: 'CLIENT' },
    { id: 'initiative', label: 'Memiliki Inisiatif & Mandiri', category: 'DEVELOPMENT' },
    { id: 'teamwork', label: 'Bisa Bekerja Sama secara Fleksibel', category: 'CULTURE' },
    { id: 'vendor', label: 'Tertarik Belajar Riset Vendor & Percetakan', category: 'PRODUCTION' },
    { id: 'social', label: 'Suka Desain Konten & Social Media Feeds', category: 'DIGITAL' },
  ];

  const toggleSkill = (label: string) => {
    if (selectedSkills.includes(label)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== label));
    } else {
      setSelectedSkills([...selectedSkills, label]);
    }
  };

  const matchPercentage = Math.min(Math.round((selectedSkills.length / 7) * 100), 100);

  const getRoleRecommendation = () => {
    if (selectedSkills.length >= 6) {
      return {
        title: 'Ideal Co-Creator & All-Rounder Partner',
        desc: 'Kamu memiliki kombinasi inisiatif, kreativitas, dan fleksibilitas yang sangat dicari untuk membangun YEG Production bersama founder dari awal.',
        badge: 'Kecocokan Sangat Tinggi',
      };
    }
    if (selectedSkills.some((s) => s.includes('Design') || s.includes('Kreatif'))) {
      return {
        title: 'Creative Visual & Concept Specialist',
        desc: 'Fokusmu sangat kuat di eksplorasi desain, branding, dan konsep produk. Keterampilan ini langsung dapat diterapkan pada pesanan Map Ijazah dan jasa desain visual.',
        badge: 'Fokus Visual Kreatif',
      };
    }
    return {
      title: 'Operations, Client & Production Ally',
      desc: 'Kamu memiliki potensi besar dalam koordinasi komunikasi client, penawaran harga, dan riset produksi vendor lapangan yang menjadi tulang punggung YEG.',
      badge: 'Fokus Eksekusi Bisnis',
    };
  };

  const rec = getRoleRecommendation();

  const handleSendQuizToWhatsApp = () => {
    const skillsListText = selectedSkills.map((s) => `• ${s}`).join('\n');
    const message = `Halo YEG Production!
Saya tertarik dengan kesempatan Creative Production Partner yang sedang dibuka.

Saya sudah membaca informasi mengenai YEG Production dan ingin mengikuti proses selanjutnya.

Berikut data singkat saya:
Nama: 
Domisili: 
Usia: 
Skill: 
Pengalaman: 

Skill yang saya pilih di Kuis Kecocokan Partner:
${skillsListText}
Rekomendasi Role: ${rec.title} (${matchPercentage}% Match)

Terima kasih.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6289674849505?text=${encoded}`, '_blank');
  };

  return (
    <div className="bg-[#101917] border border-[#0a7463]/60 rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800 pb-4">
        <div>
          <span className="text-sm font-semibold text-[#34d399] uppercase tracking-wider font-mono flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Self-Assessment</span>
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-heading mt-1">
            Cek Kecocokanmu Sebagai Creative Production Partner
          </h3>
          <p className="text-sm text-neutral-300 mt-1">
            Tidak ada batasan pendidikan formal. Kemauan belajar dan inisiatif adalah hal utama yang kami cari.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-4 py-2 rounded-xl bg-[#0a7463] text-white text-sm font-bold font-mono shadow-md">
            {matchPercentage}% Match
          </span>
        </div>
      </div>

      {/* Checklist grid */}
      <div className="space-y-2.5">
        <label className="text-xs sm:text-sm font-bold text-neutral-200 uppercase tracking-wider block font-mono">
          Pilih kemampuan atau karakter yang kamu miliki:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          {skillOptions.map((opt) => {
            const isChecked = selectedSkills.includes(opt.label);
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => toggleSkill(opt.label)}
                className={`p-2.5 sm:p-3.5 rounded-xl border text-left flex items-start gap-2.5 sm:gap-3.5 transition-all cursor-pointer ${
                  isChecked
                    ? 'bg-[#152e27] border-[#0a7463] text-white shadow-sm'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#34d399]" />
                  ) : (
                    <Square className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500" />
                  )}
                </div>
                <div className="space-y-0.5">
                  <span className="text-xs sm:text-sm font-medium block leading-snug">{opt.label}</span>
                  <span className="text-[10px] sm:text-xs text-[#34d399] font-mono tracking-wider">{opt.category}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Result feedback and direct WhatsApp action */}
      <div className="p-5 sm:p-6 rounded-2xl bg-black/60 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            <UserCheck className="w-5 h-5 text-[#34d399]" />
            <h4 className="text-lg font-bold text-white font-heading">{rec.title}</h4>
            <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#0a7463]/40 text-[#34d399] font-semibold">
              {rec.badge}
            </span>
          </div>
          <p className="text-sm text-neutral-300 max-w-xl leading-relaxed">{rec.desc}</p>
        </div>

        <button
          onClick={handleSendQuizToWhatsApp}
          className="w-full md:w-auto px-6 py-3.5 text-sm font-bold text-white bg-[#0a7463] hover:bg-[#086354] rounded-xl transition-all shadow-md flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Kirim Profil & Chat Founder via WA</span>
        </button>
      </div>
    </div>
  );
};
