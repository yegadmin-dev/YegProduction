import React, { useState } from 'react';
import { Check, Sparkles, School, Eye } from 'lucide-react';

export const InteractiveMapCustomizer: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<'emerald' | 'navy' | 'maroon' | 'black'>('emerald');
  const [selectedFoil, setSelectedFoil] = useState<'gold' | 'silver'>('gold');
  const [selectedPockets, setSelectedPockets] = useState<number>(10);

  const colorStyles = {
    emerald: {
      bg: 'from-[#063d33] via-[#094e41] to-[#03211b]',
      border: 'border-[#0d6959]',
      label: 'Hijau Botol Kulit Jeruk (Favorit Sekolah & Madrasah)',
      hex: '#0a7463',
    },
    navy: {
      bg: 'from-[#0e274c] via-[#153b70] to-[#07152b]',
      border: 'border-[#1e4380]',
      label: 'Biru Dongker / Navy Elegan (SMK, SMA & Kampus)',
      hex: '#1e3a8a',
    },
    maroon: {
      bg: 'from-[#42101e] via-[#5c172a] to-[#24080f]',
      border: 'border-[#801e36]',
      label: 'Merah Marun Klasik Mewah (Yayasan Pendidikan)',
      hex: '#881337',
    },
    black: {
      bg: 'from-[#171717] via-[#242424] to-[#0d0d0d]',
      border: 'border-[#404040]',
      label: 'Hitam Formal Eksekutif (Instansi & Kedinasan)',
      hex: '#171717',
    },
  };

  const foilStyles = {
    gold: {
      text: 'text-[#ffd700]',
      shadow: 'drop-shadow-[0_2px_10px_rgba(255,215,0,0.6)]',
      border: 'border-[#ffd700]',
      label: 'Hot Print Foil Emas (Mewah & Klasik)',
    },
    silver: {
      text: 'text-[#f1f5f9]',
      shadow: 'drop-shadow-[0_2px_10px_rgba(241,245,249,0.7)]',
      border: 'border-[#cbd5e1]',
      label: 'Hot Print Foil Perak (Modern & Bersih)',
    },
  };

  return (
    <div className="bg-[#101715] border border-neutral-800 rounded-3xl p-5 sm:p-8 shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/80 pb-4">
        <div>
          <span className="text-sm font-semibold text-[#34d399] uppercase tracking-wider font-mono flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Interactive Simulator</span>
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-heading mt-1">
            Simulasi Produk: Custom Map Ijazah & Rapor
          </h3>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-[#0a7463]/25 border border-[#0a7463]/60 text-xs sm:text-sm text-[#34d399] font-medium">
            Free Design + Custom Production
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive 3D Card Mockup */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div
            className="w-full max-w-[280px] sm:max-w-xs aspect-[3/4] rounded-2xl p-5 sm:p-6 shadow-2xl transition-all duration-500 flex flex-col justify-between items-center text-center border-4 relative overflow-hidden group hover:scale-[1.02]"
            style={{
              backgroundImage: `linear-gradient(145deg, ${colorStyles[selectedColor].hex} 0%, #031210 100%)`,
              borderColor: selectedFoil === 'gold' ? '#d4af37' : '#94a3b8',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 0 25px rgba(0,0,0,0.6)',
            }}
          >
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

            {/* Brass corner brackets */}
            <div className="absolute top-2.5 left-2.5 w-6 h-6 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
            <div className="absolute top-2.5 right-2.5 w-6 h-6 border-t-2 border-r-2 border-[#d4af37] pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 w-6 h-6 border-b-2 border-l-2 border-[#d4af37] pointer-events-none" />
            <div className="absolute bottom-2.5 right-2.5 w-6 h-6 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />

            {/* Top Emblem */}
            <div className="pt-4 relative z-10">
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 ${foilStyles[selectedFoil].border} flex items-center justify-center mx-auto mb-2 bg-black/40 backdrop-blur-sm ${foilStyles[selectedFoil].shadow}`}
              >
                <School className={`w-7 h-7 sm:w-8 sm:h-8 ${foilStyles[selectedFoil].text}`} />
              </div>
              <p className={`text-xs tracking-widest uppercase font-mono font-bold ${foilStyles[selectedFoil].text}`}>
                REPUBLIK INDONESIA
              </p>
            </div>

            {/* Middle Gold Foil Typography */}
            <div className="space-y-2 relative z-10 px-2">
              <h4
                className={`text-xl sm:text-2xl font-black tracking-wider font-heading uppercase ${foilStyles[selectedFoil].text} ${foilStyles[selectedFoil].shadow}`}
              >
                IJAZAH & RAPOR
              </h4>
              <p className={`text-xs sm:text-sm font-semibold tracking-wide ${foilStyles[selectedFoil].text}`}>
                DOKUMEN PENDIDIKAN RESMI
              </p>
              <div
                className={`w-16 h-0.5 mx-auto ${selectedFoil === 'gold' ? 'bg-[#ffd700]' : 'bg-[#cbd5e1]'}`}
              />
              <p className="text-xs sm:text-sm text-white/95 font-medium tracking-wide">
                SMA / SMK / MADRASAH ALIYAH
              </p>
            </div>

            {/* Bottom Details */}
            <div className="pb-3 relative z-10 text-xs text-white/80 space-y-1">
              <p className="font-mono text-neutral-300">KABUPATEN / KOTA SETEMPAT</p>
              <p className="text-[#34d399] font-medium">Bahan ASE Kulit Jeruk · Busa Tebal · {selectedPockets} Pasang Mika</p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
            <Eye className="w-4 h-4 text-[#34d399]" />
            <span>Live interactive preview</span>
          </div>
        </div>

        {/* Customizer Controls */}
        <div className="lg:col-span-7 space-y-5">
          {/* Color Chooser */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-200 uppercase tracking-wider block">
              1. Pilih Warna Sampul:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {(['emerald', 'navy', 'maroon', 'black'] as const).map((colorKey) => (
                <button
                  key={colorKey}
                  onClick={() => setSelectedColor(colorKey)}
                  className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    selectedColor === colorKey
                      ? 'bg-[#152e27] border-[#0a7463] text-white shadow-md'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-5 h-5 rounded-full border border-white/20 shrink-0 shadow-inner"
                      style={{ backgroundColor: colorStyles[colorKey].hex }}
                    />
                    <span className="text-sm font-medium capitalize">{colorKey}</span>
                  </div>
                  {selectedColor === colorKey && <Check className="w-4 h-4 text-[#34d399]" />}
                </button>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-neutral-400">
              Varian: {colorStyles[selectedColor].label}
            </p>
          </div>

          {/* Foil Stamping Chooser */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-200 uppercase tracking-wider block">
              2. Pilihan Hot Print Emboss:
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => setSelectedFoil('gold')}
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedFoil === 'gold'
                    ? 'bg-[#1e2315] border-[#ffd700] text-[#ffd700] shadow-md font-bold'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                <span className="text-sm">Foil Emas (Gold)</span>
                {selectedFoil === 'gold' && <Check className="w-4 h-4 text-[#ffd700]" />}
              </button>
              <button
                onClick={() => setSelectedFoil('silver')}
                className={`p-3.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                  selectedFoil === 'silver'
                    ? 'bg-[#1a2327] border-[#cbd5e1] text-[#cbd5e1] shadow-md font-bold'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
                }`}
              >
                <span className="text-sm">Foil Perak (Silver)</span>
                {selectedFoil === 'silver' && <Check className="w-4 h-4 text-[#cbd5e1]" />}
              </button>
            </div>
          </div>

          {/* Pockets Chooser */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-neutral-200 uppercase tracking-wider block">
              3. Jumlah Kantong Mika Interior:
            </label>
            <div className="flex gap-2">
              {[6, 10, 16, 20].map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedPockets(num)}
                  className={`flex-1 py-2.5 text-xs sm:text-sm font-medium rounded-xl border transition-all cursor-pointer ${
                    selectedPockets === num
                      ? 'bg-[#0a7463] border-[#34d399] text-white font-bold shadow-sm'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white'
                  }`}
                >
                  {num} Pasang
                </button>
              ))}
            </div>
          </div>

          {/* Target Market Callout */}
          <div className="p-4 rounded-2xl bg-black/50 border border-neutral-800 space-y-1.5">
            <span className="text-xs sm:text-sm font-bold text-[#34d399] uppercase tracking-wider block">
              Kelebihan Langsung untuk Klien Sekolah:
            </span>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Sekolah mendapatkan desain sampul gratis tanpa perlu menyewa desainer luar, mutu bahan kulit sintetis tebal dan sudut siku tahan banting, serta harga terjangkau langsung dari vendor percetakan rekanan YEG.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
