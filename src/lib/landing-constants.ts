export const WA_NUMBER = "6281316516524";
export const WA_DISPLAY = "+62 813-1651-6524";
export const BCA_ACCOUNT = "0860742187";
export const BCA_NAME = "Gugun Gunara";
export const EMAIL = "gunara@pusatperizinan.com";

/** Jaringan domain resmi Gunara Consultant */
export const DOMAIN_MAIN = "pusatperizinan.com";
export const DOMAIN_MAIN_URL = "https://pusatperizinan.com";
export const DOMAIN_ALT = "gunara.web.id";
export const DOMAIN_ALT_URL = "https://gunara.web.id";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MSG =
  "Halo Gunara Consultant! Saya mau DAFTAR *Pendirian PT Perseorangan (1 hari jadi, mulai Rp750rb)*. Saya siap transfer dan kirim KTP + NPWP + Alamat hari ini. Mohon diproses sekarang!";

export const STATS = [
  { value: 500, suffix: "+", label: "Jenis Perizinan" },
  { value: 38, suffix: "", label: "Provinsi Terjangkau" },
  { value: 15, suffix: "+", label: "Tahun Pengalaman" },
  { value: 98, suffix: "%", label: "Tingkat Keberhasilan" },
];

export const INSTITUTIONS = [
  "OSS RBA",
  "Kemenkumham RI",
  "BPOM",
  "BSN",
  "Halal BPJPH",
  "BKPM",
  "ISO 9001:2015",
  "BNSP",
  "Kemenaker RI",
  "DJKI",
];

export const DOC_REQUIREMENTS = [
  {
    title: "KTP",
    desc: "Foto/scan KTP Anda yang masih berlaku — satu NIK hanya boleh punya satu PT Perseorangan, jadi slotnya eksklusif.",
    icon: "id",
  },
  {
    title: "NPWP",
    desc: "NPWP pribadi aktif. Belum punya? Tim kami pandu pembuatannya lewat Coretax dalam hitungan menit.",
    icon: "tax",
  },
  {
    title: "Alamat Usaha",
    desc: "Alamat rumah atau tempat usaha — boleh alamat rumah sendiri. Tidak perlu gedung kantor mewah.",
    icon: "pin",
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Transfer & Kirim 3 Dokumen",
    desc: "Transfer ke rekening resmi kami, lalu kirim foto KTP, NPWP, dan alamat usaha via WhatsApp. Total waktu Anda: kurang dari 10 menit.",
    tag: "10 MENIT SELESAI",
  },
  {
    num: "02",
    title: "Akta Perseorangan Kami Susun",
    desc: "Tim Gunara Consultant menyusun Surat Pernyataan / Akta Pendirian PT Perseorangan Anda lengkap dengan pemetaan KBLI paling menguntungkan — Anda tidak mengerjakan apa pun.",
    tag: "DIURUS PAKAR",
  },
  {
    num: "03",
    title: "Kami Daftarkan ke OSS-RBA",
    desc: "Seluruh proses pendaftaran badan hukum ke sistem resmi pemerintah (OSS-RBA — Kemenkumham RI / BKPM) kami kerjakan penuh. Anda tinggal menunggu kabar baik.",
    tag: "JALUR RESMI",
  },
  {
    num: "04",
    title: "NIB & Sertifikat Pendaftaran Terbit",
    desc: "Dalam 1×24 jam sejak dokumen lengkap, NIB Anda terbit dan berfungsi sebagai akta pendirian + SK pengesahan badan hukum, disertai Sertifikat Pendaftaran Perseroan.",
    tag: "1×24 JAM",
  },
  {
    num: "05",
    title: "Serah Terima + Panduan Naik Kelas",
    desc: "Seluruh dokumen legal diserahkan lengkap plus akses akun OSS Anda — beserta panduan memakai status PT untuk buka rekening korporat, ikut tender, dan naikkan omzet.",
    tag: "SIAP PAKAI",
  },
];

export const PRICING_TIERS = [
  {
    id: "legalitas",
    name: "Paket Legalitas",
    subtitle: "PT Perseorangan Saja",
    price: "750.000",
    oldPrice: "2.000.000",
    tagline: "PT sah atas nama Anda — tanpa notaris, tanpa ribet",
    deliverables: [
      "NIB — Nomor Induk Berusaha via OSS-RBA",
      "Sertifikat Pendaftaran PT Perseorangan (jalur Kemenkumham)",
      "Akta Perseorangan / Surat Pernyataan Pendirian — disusun Gunara Consultant",
      "Akun OSS aktif + pemetaan KBLI optimal",
      "Terbit 1×24 jam sejak dokumen & pembayaran lengkap",
      "Garansi proses ulang bila ditolak",
    ],
    featured: false,
    badge: "",
    ctaMsg:
      "Halo Gunara Consultant! Saya PILIH *PAKET 1 — LEGALITAS PT PERSEORANGAN Rp750.000 (harga khusus dari Rp2.000.000)*. Saya siap transfer ke BCA dan kirim KTP + NPWP + Alamat sekarang. Mohon diproses 1 hari ini juga!",
  },
  {
    id: "legalitas-website",
    name: "Paket Legalitas + Website",
    subtitle: "PT Sah + Etalase Digital",
    price: "1.500.000",
    oldPrice: "4.000.000",
    tagline: "Paling banyak dipilih — legalitas plus mesin kredibilitas online",
    deliverables: [
      "SEMUA isi Paket Legalitas (NIB, Sertifikat Pendaftaran, Akta Perseorangan)",
      "Website company profile profesional atas nama PT Anda",
      "Domain sendiri + hosting aktif 1 tahun",
      "Tombol WhatsApp langsung + katalog produk/jasa",
      "SEO dasar — nama PT Anda ditemukan di Google",
      "Email bisnis profesional @namaPT Anda",
      "Prioritas antrean penanganan",
      "Garansi proses ulang bila ditolak",
    ],
    featured: true,
    badge: "PALING LARIS",
    ctaMsg:
      "Halo Gunara Consultant! Saya PILIH *PAKET 2 — LEGALITAS + WEBSITE Rp1.500.000 (harga khusus dari Rp4.000.000)*. Saya siap transfer ke BCA dan kirim KTP + NPWP + Alamat sekarang. Mohon diproses 1 hari ini juga!",
  },
  {
    id: "sultan-20x",
    name: "Paket Sultan 20X",
    subtitle: "Legalitas + Website + Branding + Tools Omzet 20X",
    price: "5.000.000",
    oldPrice: "13.500.000",
    tagline: "Investasi balik modal — omzet naik sampai 20 kali lipat",
    deliverables: [
      "SEMUA isi Paket Legalitas + Website (NIB, sertifikat, akta, website, domain)",
      "Company branding premium: logo, identitas visual, profil brand",
      "Setup & optimasi media sosial: Instagram, TikTok, Facebook",
      "ALL TOOLS OMZET 20X senilai Rp5.000.000: senjata lengkap pemasaran & penjualan",
      "Pendampingan strategi omzet 1-on-1 oleh tim ahli",
      "GARANSI OMZET: ikuti aturan kami — omzet belum naik? Pendampingan kami ULANG GRATIS sampai naik",
      "Slot terbatas: hanya untuk usaha yang serius naik kelas",
    ],
    featured: false,
    badge: "GARANSI OMZET",
    ctaMsg:
      "Halo Gunara Consultant! Saya PILIH *PAKET 3 — SULTAN 20X Rp5.000.000 (total nilai Rp13.500.000, ada garansi omzet)*. Saya serius naik kelas dan siap transfer + kirim KTP + NPWP + Alamat sekarang!",
  },
];

/** Social proof feed — rotasi popup "baru saja mendaftar" */
export const LIVE_FEED = [
  { name: "Budi Santoso", city: "Bekasi", pkg: "Paket Legalitas + Website", mins: 2, initials: "BS" },
  { name: "Siti Rahmawati", city: "Surabaya", pkg: "Paket Legalitas", mins: 6, initials: "SR" },
  { name: "Andi Wijaya", city: "Makassar", pkg: "Paket Sultan 20X", mins: 11, initials: "AW" },
  { name: "Dewi Lestari", city: "Denpasar", pkg: "Paket Legalitas + Website", mins: 18, initials: "DL" },
  { name: "Rizky Pratama", city: "Jakarta Selatan", pkg: "Paket Legalitas", mins: 24, initials: "RP" },
  { name: "Maya Anggraeni", city: "Bandung", pkg: "Paket Sultan 20X", mins: 31, initials: "MA" },
  { name: "Hoji Nasution", city: "Medan", pkg: "Paket Legalitas + Website", mins: 39, initials: "HN" },
  { name: "Lina Marlina", city: "Tasikmalaya", pkg: "Paket Legalitas", mins: 47, initials: "LM" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Transfer pagi, kirim KTP dan NPWP siangnya — besoknya NIB dan Sertifikat Pendaftaran PT sudah di WhatsApp saya. Sekarang nama usaha saya pakai PT, klien korporat jauh lebih percaya.",
    name: "Dedi Kurniawan",
    role: "Owner PT Katering Nusantara — Tasikmalaya",
    initials: "DK",
    pkg: "Paket Legalitas",
  },
  {
    quote:
      "Awalnya saya kira buat PT harus ke notaris dan bayar jutaan. Ternyata lewat Gunara cukup 750rb, 1 hari jadi, tanpa keluar rumah. KTP, NPWP, alamat — segitu doang syaratnya.",
    name: "Ratna Sari",
    role: "Founder PT Fashion Brand — Bandung",
    initials: "RS",
    pkg: "Paket Legalitas + Website",
  },
  {
    quote:
      "Butuh badan hukum cepat untuk tender Senin. Hubungi Gunara Kamis, transfer Kamis juga — Jumat sore semua dokumen PT saya sudah sah. Presisi, cepat, tidak ada drama.",
    name: "Hendra Gunawan",
    role: "Direktur PT Konstruksi — Semarang",
    initials: "HG",
    pkg: "Paket Legalitas",
  },
  {
    quote:
      "Ambil Paket Sultan 20X karena penasaran garansinya. Website + branding + tools-nya dibawakan serius, omzet saya dari 30 juta ke 200 jutaan dalam 4 bulan. Ikuti aturan mereka, hasilnya nyata.",
    name: "Melinda Oktaviani",
    role: "Owner PT Beauty Indonesia — Jakarta",
    initials: "MO",
    pkg: "Paket Sultan 20X",
  },
  {
    quote:
      "Sebagai pemula saya bingung beda PT Perseorangan sama PT biasa. Konsultasi gratisnya dijelaskan santai pakai bahasa manusia. Akhirnya pilih PT Perseorangan — aset pribadi aman, biaya hemat 1,2 juta lebih.",
    name: "Yusuf Maulana",
    role: "Founder PT Digital Pekanbaru",
    initials: "YM",
    pkg: "Paket Legalitas",
  },
  {
    quote:
      "Yang bikin tenang: rekeningnya jelas satu-satunya BCA a.n. Gugun Gunara, ada kontrak, ada laporan progres. Terasa dilayani bank premium, bukan calo perizinan.",
    name: "Fitri Handayani",
    role: "Owner PT Salon & Spa — Yogyakarta",
    initials: "FH",
    pkg: "Paket Legalitas + Website",
  },
];

export const FAQS = [
  {
    q: "Apa itu PT Perseorangan (Perseroan Perseorangan)?",
    a: "PT Perseorangan adalah Perseroan Terbatas resmi dengan satu pemegang saham yang sekaligus jadi direksi — diakui Undang-Undang Cipta Kerja. NIB-nya berfungsi sekaligus sebagai akta pendirian dan SK pengesahan badan hukum. Artinya: Anda mendapat status PT penuh — tanggung jawab terbatas, aset pribadi terpisah — tanpa perlu akta notaris, tanpa mitra, tanpa modal ratusan juta.",
  },
  {
    q: "Benarkah bisa jadi dalam 1 hari?",
    a: "Benar. Karena tidak memakai akta notaris, seluruh proses berjalan di sistem OSS-RBA. Begitu Anda transfer dan kirim 3 dokumen (KTP, NPWP, alamat usaha), tim kami menyusun akta perseorangan dan mendaftarkan hari itu juga — NIB dan Sertifikat Pendaftaran terbit dalam 1×24 jam sejak dokumen lengkap. Selama 15+ tahun tingkat keberhasilan kami 98%.",
  },
  {
    q: "Syaratnya apa saja? Apakah rumit?",
    a: "Hanya 3: KTP, NPWP, dan alamat usaha (boleh alamat rumah sendiri). Catatan penting: satu NIK KTP hanya boleh memiliki SATU PT Perseorangan, dan modal usahanya maksimal Rp5 miliar (untuk usaha mikro-kecil-menengah). Belum punya NPWP? Kami pandu pembuatannya gratis lewat Coretax.",
  },
  {
    q: "Apa saja yang saya terima di Paket Legalitas Rp750rb?",
    a: "Anda menerima: (1) NIB — Nomor Induk Berusaha via OSS-RBA yang sekaligus jadi akta pendirian dan SK pengesahan, (2) Sertifikat Pendaftaran PT Perseorangan dari jalur Kemenkumham, (3) Akta Perseorangan / Surat Pernyataan Pendirian yang disusun Gunara Consultant, plus akun OSS aktif dan pemetaan KBLI paling menguntungkan. Semua dokumen resmi, bisa dicek keabsahannya kapan pun.",
  },
  {
    q: "Apa bedanya dengan PT biasa lewat notaris?",
    a: "PT biasa butuh akta notaris (biaya jutaan rupiah), proses 5–10 hari kerja, dan kerumunan birokrasi tambahan. PT Perseorangan: tanpa notaris, mulai Rp750rb, terbit 1×24 jam, dengan proteksi aset pribadi yang sama. Untuk usaha satu pemilik mikro-kecil-menengah, PT Perseorangan adalah pilihan paling cerdas — hemat waktu, hemat biaya, status sama-sama PT.",
  },
  {
    q: "Bagaimana garansi omzet naik 20x lipat di Paket Sultan 20X?",
    a: "Paket ini menggabungkan legalitas + website + branding + media sosial + ALL TOOLS OMZET 20X senilai Rp5 juta plus pendampingan strategi 1-on-1. Aturannya jelas: Anda mengikuti roadmap dan aturan yang kami tetapkan. Selama aturan diikuti dan omzet belum naik, kami ULANGI pendampingan tanpa biaya tambahan sampai omzet Anda naik. Kami menang hanya jika Anda menang.",
  },
  {
    q: "Ke rekening mana saya harus transfer?",
    a: "HANYA ke rekening resmi satu-satunya kami: BANK BCA 0860742187 a.n. Gugun Gunara. Setelah transfer, kirim bukti transfer + foto KTP, NPWP, dan alamat ke WhatsApp resmi kami — proses 1 hari langsung dimulai. Bila ada pihak meminta transfer ke rekening berbeda dengan mengatasnamakan kami, itu penipuan — laporkan segera.",
  },
  {
    q: "Apakah dokumen KTP dan NPWP saya aman?",
    a: "Sangat aman. Seluruh dokumen klien dikelola dalam sistem arsip digital dengan akses terbatas pada tim penanganan, sesuai standar mutu ISO 9001:2015 yang tersertifikasi, dan dihancurkan atas permintaan klien setelah proses selesai.",
  },
];
