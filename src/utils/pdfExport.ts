import { jsPDF } from 'jspdf';

export function downloadPitchDeckPdf() {
  // True 16:9 Widescreen Presentation Slide format (297mm x 167.06mm)
  const pageWidth = 297;
  const pageHeight = 167.0625;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  const contentHeight = pageHeight - margin * 2;

  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [pageWidth, pageHeight],
  });

  // Color Palette
  const emeraldPrimary = [10, 116, 99]; // #0a7463
  const emeraldLight = [52, 211, 153]; // #34d399
  const darkCanvas = [12, 17, 16]; // #0c1110
  const darkSurface = [17, 26, 24]; // #111a18
  const cardBorder = [28, 44, 40];
  const textWhite = [255, 255, 255];
  const textMuted = [156, 175, 170];

  const slides = [
    {
      num: '01',
      category: 'COVER',
      title: 'YEG PRODUCTION',
      subtitle: 'Your Expression, Our Creation.',
      body: [
        'Creative Production — Building from Ideas, Creating Value.',
        '',
        'PARTNERSHIP INTRODUCTION',
        'Before Interview Session',
        '',
        'Dokumen Presentasi Model Bisnis & Panduan Kemitraan',
        'Untuk Calon Rekan Kerja (Creative Production Partner)',
      ],
      isCover: true,
    },
    {
      num: '02',
      category: 'WHO WE ARE?',
      title: 'Tentang YEG Production',
      subtitle: 'Creative Production yang Mengubah Ide Menjadi Nilai Ekonomi',
      body: [
        'YEG Production adalah bisnis rintisan yang bergerak di bidang Creative Production, dengan fokus awal pada penyediaan produk dan jasa kreatif yang memiliki nilai guna serta nilai jual.',
        '',
        'YEG Production berawal dari sebuah gagasan sederhana:',
        '“Mengubah ide dan kreativitas menjadi sesuatu yang dapat digunakan, diproduksi, dan memiliki nilai ekonomi.”',
        '',
        'Dalam perkembangannya, YEG berkembang menjadi vendor & production company yang melayani:',
        'Ide  →  Desain  →  Produksi  →  Produk Jadi',
      ],
    },
    {
      num: '03',
      category: 'HOW IT STARTED',
      title: 'Awal Mula YEG Production',
      subtitle: 'Dirintis Sejak 2025 Berawal dari Jasa Desain Komersial',
      body: [
        'YEG Production mulai dirintis sejak 2025. Pada awalnya, konsep YEG berfokus pada:',
        '• Digital Creative & Jasa desain komersial',
        '• Social media design & Feed design',
        '• Banner & promotional material',
        '• Logo & branding, serta berbagai kebutuhan visual lainnya',
        '',
        'Beberapa project telah berhasil dikerjakan. Namun belum berkembang optimal karena keterbatasan waktu, pekerjaan, perkuliahan, dan promosi.',
        '',
        'Bukan berarti idenya berhenti. Justru dari pengalaman tersebut muncul pemikiran untuk mengembangkan model bisnis YEG menjadi sesuatu yang lebih luas.',
      ],
    },
    {
      num: '04',
      category: 'THE CHANGE',
      title: 'Dari Creative Service → Creative Production',
      subtitle: 'Evolusi Model Bisnis dari Jasa Lepas ke Produk Nyata',
      body: [
        'YEG Production kemudian mengalami perubahan konsep:',
        '',
        'SEBELUMNYA:',
        'Client  →  Memesan Jasa Desain  →  Selesai',
        '',
        'SEKARANG:',
        'Client  →  Kebutuhan  →  Ide & Desain  →  Produksi  →  Produk Jadi',
        '',
        'YEG tidak hanya menawarkan jasa, tetapi juga menghadirkan produk yang dapat diproduksi dan dijual.',
        '“Kami tidak hanya membuat desain. Kami ingin membuat sesuatu yang bisa diproduksi dan memiliki nilai jual.”',
      ],
    },
    {
      num: '05',
      category: 'BUSINESS MODEL',
      title: 'Bagaimana YEG Production Akan Berjalan?',
      subtitle: 'Dua Sumber Aktivitas Bisnis yang Saling Menguatkan',
      body: [
        '01 — CREATIVE SERVICE',
        'Menyediakan jasa: Desain, Branding, Social Media Content, Banner, Logo, Promotional Material, Creative Design, dan kebutuhan visual lainnya.',
        '',
        '02 — PRODUCTION & VENDOR',
        'Menyediakan produk melalui kerja sama vendor: Percetakan, Custom product, Merchandise, Packaging, Apparel, Produk promosi, Kebutuhan sekolah/perusahaan.',
        '',
        'Creative + Production = YEG Production',
      ],
    },
    {
      num: '06',
      category: 'OUR FIRST PRODUCT',
      title: 'Produk Pertama YEG Production',
      subtitle: 'CUSTOM MAP IJAZAH / RAPOR',
      body: [
        'Produk pertama yang akan dikembangkan adalah: Map Ijazah & Rapor Custom.',
        '',
        'Paket Penawaran Unggulan:',
        '• FREE DESIGN (Desain cover eksklusif gratis)',
        '• CUSTOM PRODUCTION (Hot print foil emas, mika interior tebal)',
        '• HARGA YANG LEBIH TERJANGKAU (Langsung dari mitra produksi)',
        '',
        'Target Awal: Sekolah, Madrasah, Yayasan Pendidikan, Lembaga Pendidikan, & Instansi terkait.',
        'Langkah awal membangun modal dan pengalaman bisnis nyata.',
      ],
    },
    {
      num: '07',
      category: 'WHY START FROM PRODUCT?',
      title: 'Kenapa Memulai dari Produk?',
      subtitle: 'Strategi Bootstrap Cerdas Berbasis Arus Kas Nyata',
      body: [
        'YEG Production saat ini berada pada tahap bootstrap.',
        'Bisnis dikembangkan dengan: Skill + Ide + Relasi + Komunikasi + Waktu (bukan modal besar).',
        '',
        'Kami memulai dari produk yang:',
        '• Bisa diproduksi melalui vendor tanpa harus beli mesin sendiri',
        '• Memanfaatkan kemampuan desain yang sudah kami kuasai',
        '• Memiliki target pasar yang jelas & bisa ditawarkan secara langsung (B2B / B2G)',
        '• Menghasilkan margin laba untuk pengembangan bisnis berikutnya',
        '',
        'Tujuan: Client pertama → Revenue pertama → Modal pertama → Produk berikutnya',
      ],
    },
    {
      num: '08',
      category: 'OUR WAY OF WORKING',
      title: 'Cara Kami Bekerja',
      subtitle: 'Budaya Kerja Kolaboratif 6 Pilar',
      body: [
        '• THINK : Berpikir sebelum bertindak.',
        '• CREATE : Menghasilkan ide dan solusi kreatif.',
        '• COMMUNICATE : Mampu menyampaikan dan mendiskusikan ide secara terbuka.',
        '• EXECUTE : Tidak berhenti pada tataran konsep semata.',
        '• LEARN : Terus belajar dari kesalahan dan pengalaman lapangan.',
        '• GROW : Berkembang bersama sebagai tim.',
        '',
        'Prinsip Inti: Tidak ada yang dituntut langsung sempurna.',
        'Yang penting adalah mau belajar, mau mencoba, dan mau bertanggung jawab.',
      ],
    },
    {
      num: '09',
      category: 'WHY WE NEED A PARTNER',
      title: 'Kenapa YEG Membutuhkan Partner?',
      subtitle: 'Membuka Kesempatan untuk 1 Orang Creative Production Partner',
      body: [
        'Saat ini YEG Production masih dibangun dari tahap awal.',
        'Founder memiliki kemampuan dasar: Desain, Komunikasi, Penawaran, Konsep produk, & Ide.',
        '',
        'Namun membangun bisnis tidak dapat bergantung pada satu orang saja.',
        'Karena itu, YEG membuka kesempatan untuk 1 orang Creative Production Partner.',
        '',
        'Bukan sekadar seseorang yang menjalankan tugas.',
        'Tetapi seseorang yang dapat: Berpikir bersama, belajar bersama, bekerja bersama, dan berkembang bersama.',
      ],
    },
    {
      num: '10',
      category: 'WHO WE ARE LOOKING FOR',
      title: 'Creative Production Partner',
      subtitle: 'Karakter & Kemauan Belajar Lebih Utama dari Ijazah',
      body: [
        'Tidak ada batasan pendidikan.',
        'Fokus utama kami: Skill • Attitude • Curiosity • Initiative • Communication',
        '',
        'Kualifikasi yang Diharapkan:',
        '• Basic design & Digital literate, Basic Microsoft Word / Office',
        '• Kreatif, punya inisiatif & ide',
        '• Cepat beradaptasi, komunikatif, dan bertanggung jawab',
        '• Bisa bekerja sama secara tim',
        '',
        'Catatan: Tidak harus menguasai semuanya. Skill dapat dipelajari bersama.',
      ],
    },
    {
      num: '11',
      category: 'WHAT YOU MAY DO',
      title: 'Peran dalam YEG Production',
      subtitle: 'Lingkup Peran yang Fleksibel & Dinamis',
      body: [
        '• CREATIVE : Desain, konsep visual, ide produk, dan branding.',
        '• BUSINESS : Riset pasar, mencari peluang, dan menyusun proposal penawaran.',
        '• CLIENT : Komunikasi, follow-up kebutuhan, dan hubungan klien.',
        '• PRODUCTION : Koordinasi dengan vendor dan kontrol kualitas cetak/produksi.',
        '• DIGITAL : Social media, dokumentasi, dan pemasaran konten.',
        '• DEVELOPMENT : Mencari peluang produk dan bidang bisnis baru.',
        '',
        'Tugas utama mungkin berbeda, namun keberhasilan project adalah tanggung jawab bersama.',
      ],
    },
    {
      num: '12',
      category: 'COMPENSATION & WORKING SYSTEM',
      title: 'Bagaimana Sistem Awalnya?',
      subtitle: 'Transparansi Penuh Berbasis Project Revenue Sharing',
      body: [
        'YEG Production masih berada pada tahap rintisan dan belum memiliki pemasukan tetap.',
        'Pada tahap awal: Tidak menggunakan sistem gaji bulanan tetap.',
        '',
        'Kompensasi mengikuti project/revenue yang berhasil diperoleh dan dikerjakan, dengan pembagian yang disepakati secara transparan.',
        '',
        'Saat YEG mencapai: Revenue stabil + Client berkelanjutan + Sistem kerja matang,',
        'maka sistem kompensasi akan dievaluasi dan dikembangkan menjadi gaji tetap + bonus.',
        '',
        'Prinsip Utama: Transparansi alokasi uang masuk dan pembagian hasil.',
      ],
    },
    {
      num: '13',
      category: 'THE BIG VISION',
      title: 'Where Are We Going?',
      subtitle: 'Ekosistem Bisnis Multi-Bidang di Bawah Satu Identitas',
      body: [
        'Produk pertama adalah langkah awal. Visi jangka panjang YEG adalah ekosistem multi-bidang:',
        '',
        '• PRODUCTION : Percetakan • Custom Product • Merchandise • Packaging',
        '• APPAREL : Clothing • Fashion • Custom Wear',
        '• CREATIVE : Design • Branding • Digital Creative',
        '• EVENT : Event Organizer • Wedding Organizer',
        '• TECHNOLOGY : Digital Solution • Technology • Innovation',
        '• ENTERTAINMENT : Music Production • Film Production • Creative Entertainment',
        '',
        'Semua bergerak selaras menjawab kebutuhan pasar dan peluang baru.',
      ],
    },
    {
      num: '14',
      category: 'ONE BRAND, MANY POSSIBILITIES',
      title: 'YEG Production',
      subtitle: 'Satu Identitas untuk Berbagai Solusi Kebutuhan Manusia',
      body: [
        'Bayangkan YEG bukan hanya sebagai “Jasa desain.”',
        '',
        'Tetapi sebagai:',
        'Sebuah perusahaan yang dapat membantu berbagai kebutuhan manusia melalui kreativitas, produksi, teknologi, dan bisnis.',
        '',
        'Semua berkembang di bawah satu identitas terpadu:',
        'YEG — Your Expression Gear',
      ],
    },
    {
      num: '15',
      category: 'WHAT DOES YEG MEAN?',
      title: 'The Story Behind YEG',
      subtitle: 'Dari Sebuah Nama Personal Menjadi Identitas Bisnis',
      body: [
        'YEG merupakan singkatan dari: Your Expression Gear.',
        '',
        'Namun nama YEG juga memiliki cerita personal:',
        'YEG terinspirasi dari nama Korea: Yoon Eun Geun.',
        'Lahir dari ketertarikan founder terhadap budaya Korea dan K-Pop pada masanya.',
        '',
        'Evolusi Makna:',
        'Dari sebuah nama  →  menjadi sebuah ide  →  menjadi sebuah bisnis  →  diharapkan menjadi sebuah perusahaan.',
      ],
    },
    {
      num: '16',
      category: "THE FOUNDER'S STORY",
      title: 'Why I Started This',
      subtitle: 'Memulai dari Apa yang Ada, Bersama Rekan yang Tepat',
      body: [
        '“Saya sudah memikirkan YEG sejak 2025.”',
        'Awalnya dijalankan sebagai jasa desain. Sempat terhambat pekerjaan dan perkuliahan.',
        '',
        'Sekarang saya ingin mencoba kembali. Bukan dengan menunggu semuanya sempurna, tetapi memulai dari apa yang saya punya.',
        '',
        'Modal saya saat ini:',
        'Tekad • Skill • Ide • Desain • Komunikasi • Kemauan untuk belajar',
        '',
        'Dan sekarang saya ingin membangun YEG dengan orang lain.',
      ],
    },
    {
      num: '17',
      category: 'THIS IS NOT A PERFECT BUSINESS',
      title: 'Kami Ingin Transparan',
      subtitle: 'Kejujuran Tahap Rintisan: Menghadapi Proses dari Nol',
      body: [
        'YEG Production belum merupakan perusahaan besar. Kami masih:',
        '• Mencari bentuk & Mencari client',
        '• Membangun sistem & Menguji produk',
        '• Belajar marketing, membangun jaringan, dan mengumpulkan modal',
        '',
        'Orang yang bergabung tidak sedang masuk ke perusahaan mapan.',
        'Kamu masuk ke bisnis yang sedang dibangun dari nol:',
        'Ada tantangan, ada ketidakpastian, tetapi juga ada ruang besar untuk ikut membentuk arahnya.',
      ],
    },
    {
      num: '18',
      category: 'WHAT WE CAN BUILD TOGETHER',
      title: 'Roadmap Pertumbuhan Nyata',
      subtitle: 'Alur Bertahap dari Produk Pertama Menuju Skala Perusahaan',
      body: [
        'Dari 1 Produk: Map Ijazah / Rapor',
        '   ↓  Client Pertama',
        '   ↓  Revenue Pertama',
        '   ↓  Modal Pertama',
        '   ↓  Produk Baru (Merchandise & Apparel)',
        '   ↓  Lebih Banyak Client & Skala Produksi',
        '   ↓  Pembentukan Tim & Pembagian Divisi',
        '   ↓',
        'YEG PRODUCTION (Perusahaan Creative Production Terpadu)',
      ],
    },
    {
      num: '19',
      category: 'WHAT WE EXPECT FROM EACH OTHER',
      title: 'Partnership Works Both Ways',
      subtitle: 'Komitmen Saling Mengisi dan Menghormati',
      body: [
        'DARI YEG PRODUCTION:',
        '• Ruang belajar & berkembang',
        '• Keterlibatan langsung dalam strategi bisnis',
        '• Transparansi penuh dalam setiap project & bagi hasil',
        '',
        'DARI PARTNER:',
        '• Komitmen, komunikasi terbuka, dan tanggung jawab',
        '• Inisiatif, kemauan belajar, dan kesiapan berproses dari awal',
        '',
        '“Kalau kita mulai, kita sama-sama mau berusaha.”',
      ],
    },
    {
      num: '20',
      category: 'FINAL CALL',
      title: 'ARE YOU READY TO BUILD FROM ZERO?',
      subtitle: 'Start Small. Create Value. Grow Together.',
      body: [
        'YEG Production tidak sedang mencari orang yang hanya ingin mendapatkan pekerjaan.',
        'Kami sedang mencari seseorang yang ingin ikut membangun sesuatu.',
        '',
        'Sesuatu yang hari ini mungkin masih kecil,',
        'tetapi suatu hari nanti bisa menjadi sesuatu yang jauh lebih besar.',
        '',
        'YEG PRODUCTION',
        'Your Expression, Our Creation.',
        'Creative Production',
        '',
        'Thank You. Siap berdiskusi di sesi interview!',
      ],
    },
  ];

  slides.forEach((slide, index) => {
    if (index > 0) {
      doc.addPage([pageWidth, pageHeight], 'landscape');
    }

    // Outer background
    doc.setFillColor(darkCanvas[0], darkCanvas[1], darkCanvas[2]);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Emerald top decorative border
    doc.setFillColor(emeraldPrimary[0], emeraldPrimary[1], emeraldPrimary[2]);
    doc.rect(margin, margin - 4, contentWidth, 2.5, 'F');

    // Slide Header: Brand & Slide Number
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(emeraldLight[0], emeraldLight[1], emeraldLight[2]);
    doc.text('YEG PRODUCTION — CREATIVE PRODUCTION', margin, margin + 4);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
    doc.text(`SLIDE ${slide.num} / 20  ·  ${slide.category}`, pageWidth - margin - 50, margin + 4);

    // Slide Body Card
    doc.setFillColor(darkSurface[0], darkSurface[1], darkSurface[2]);
    doc.setDrawColor(cardBorder[0], cardBorder[1], cardBorder[2]);
    doc.roundedRect(margin, margin + 8, contentWidth, contentHeight - 12, 3, 3, 'FD');

    // Slide Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.setTextColor(textWhite[0], textWhite[1], textWhite[2]);
    doc.text(slide.title, margin + 8, margin + 22);

    // Slide Subtitle
    if (slide.subtitle) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      doc.setTextColor(emeraldLight[0], emeraldLight[1], emeraldLight[2]);
      doc.text(slide.subtitle, margin + 8, margin + 30);
    }

    // Divider line
    doc.setDrawColor(32, 52, 46);
    doc.line(margin + 8, margin + 34, margin + contentWidth - 8, margin + 34);

    // Content body
    let startY = margin + 42;
    const lineHeight = 5.2;

    slide.body.forEach((line) => {
      if (line === '') {
        startY += 2.5;
        return;
      }

      if (
        line.startsWith('01') ||
        line.startsWith('02') ||
        line.startsWith('SEBELUMNYA') ||
        line.startsWith('SEKARANG') ||
        line.startsWith('DARI YEG') ||
        line.startsWith('DARI PARTNER') ||
        line.startsWith('Paket') ||
        line.startsWith('Kualifikasi')
      ) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(emeraldLight[0], emeraldLight[1], emeraldLight[2]);
      } else if (line.startsWith('“') || line.startsWith('Tujuan:') || line.startsWith('Prinsip:')) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(textWhite[0], textWhite[1], textWhite[2]);
      } else {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(215, 225, 222);
      }

      const splitText = doc.splitTextToSize(line, contentWidth - 20);
      doc.text(splitText, margin + 8, startY);
      startY += splitText.length * lineHeight;
    });

    // Slide Footer
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 125, 120);
    doc.text(
      'YEG Production · Partnership Introduction · Before Interview Session',
      margin + 8,
      pageHeight - margin + 2
    );
    doc.text(
      'Your Expression, Our Creation',
      pageWidth - margin - 42,
      pageHeight - margin + 2
    );
  });

  doc.save('YEG-Production-Pitch-Deck-16x9.pdf');
}
