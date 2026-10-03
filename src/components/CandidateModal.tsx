import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';

interface CandidateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CandidateModal: React.FC<CandidateModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [domisili, setDomisili] = useState('');
  const [usia, setUsia] = useState('');
  const [skill, setSkill] = useState('');
  const [pengalaman, setPengalaman] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    const message = `Halo YEG Production!
Saya tertarik dengan kesempatan Creative Production Partner yang sedang dibuka.

Saya sudah membaca informasi mengenai YEG Production dan ingin mengikuti proses selanjutnya.

Berikut data singkat saya:
Nama: ${name || '-'}
Domisili: ${domisili || '-'}
Usia: ${usia || '-'}
Skill: ${skill || '-'}
Pengalaman: ${pengalaman || '-'}

Terima kasih.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/6289674849505?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#111716] border border-neutral-700 rounded-3xl shadow-2xl overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0e1413]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse"></span>
            <h3 className="text-base sm:text-lg font-bold text-white font-heading">
              Hubungi Kak Ridhwan (Founder YEG)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-[#0a7463]/25 border border-[#0a7463]/60 rounded-full flex items-center justify-center mx-auto text-[#34d399]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white font-heading">
                Data Telah Siap, {name}!
              </h4>
              <p className="text-sm sm:text-base text-neutral-300 mt-2 leading-relaxed">
                Format pesan WhatsApp sudah otomatis disiapkan. Klik tombol di bawah untuk langsung membuka chat WhatsApp ke nomor founder <strong>+62 896-7484-9505</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 text-left text-sm text-neutral-200 space-y-1">
              <p className="font-bold text-[#34d399] mb-1">Preview Format Pesan:</p>
              <p>• Nama: {name || '-'}</p>
              <p>• Domisili: {domisili || '-'}</p>
              <p>• Usia: {usia || '-'}</p>
              <p>• Skill: {skill || '-'}</p>
              <p>• Pengalaman: {pengalaman || '-'}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleOpenWhatsApp}
                className="flex-1 px-5 py-3 text-sm font-bold text-white bg-[#0a7463] hover:bg-[#086354] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Buka WhatsApp Sekarang</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-3 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-800 rounded-xl transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-sm text-neutral-300 leading-relaxed bg-[#152420] p-3.5 rounded-2xl border border-[#0a7463]/40">
              Silakan lengkapi data singkat kamu di bawah ini untuk memulai obrolan langsung dengan Founder YEG Production via WhatsApp.
            </p>

            <div>
              <label className="block text-sm font-semibold text-neutral-200 mb-1">
                Nama Lengkap <span className="text-[#34d399]">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Farhan / Sarah"
                className="w-full px-4 py-2.5 text-sm sm:text-base bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#0a7463] focus:ring-1 focus:ring-[#0a7463]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-neutral-200 mb-1">
                  Domisili / Kota <span className="text-[#34d399]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={domisili}
                  onChange={(e) => setDomisili(e.target.value)}
                  placeholder="Contoh: Bandung / Jakarta"
                  className="w-full px-4 py-2.5 text-sm sm:text-base bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#0a7463] focus:ring-1 focus:ring-[#0a7463]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-200 mb-1">
                  Usia <span className="text-[#34d399]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={usia}
                  onChange={(e) => setUsia(e.target.value)}
                  placeholder="Contoh: 21 Tahun"
                  className="w-full px-4 py-2.5 text-sm sm:text-base bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#0a7463] focus:ring-1 focus:ring-[#0a7463]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-200 mb-1">
                Skill yang Dikuasai / Diminati <span className="text-[#34d399]">*</span>
              </label>
              <input
                type="text"
                required
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                placeholder="Contoh: Desain Grafis, Photoshop, Canva, Riset Vendor"
                className="w-full px-4 py-2.5 text-sm sm:text-base bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#0a7463] focus:ring-1 focus:ring-[#0a7463]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutral-200 mb-1">
                Pengalaman Singkat / Catatan (Opsional)
              </label>
              <textarea
                rows={2}
                value={pengalaman}
                onChange={(e) => setPengalaman(e.target.value)}
                placeholder="Contoh: Pernah desain feed sosmed, mengurus kepanitiaan, atau link portofolio"
                className="w-full px-4 py-2.5 text-sm sm:text-base bg-neutral-900 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#0a7463] focus:ring-1 focus:ring-[#0a7463]"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 py-3 px-4 text-sm font-bold text-white bg-[#0a7463] hover:bg-[#086354] rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Lanjutkan ke WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-3 px-4 text-sm font-medium text-neutral-400 hover:text-white bg-neutral-800 rounded-xl transition-colors cursor-pointer"
              >
                Batal
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
