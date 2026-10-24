export const WA_NUMBER = "6281316516524";
export const WA_DISPLAY = "+62 813-1651-6524";
export const BCA_ACCOUNT = "0860742187";
export const BCA_NAME = "Gugun Gunara";
export const EMAIL = "halo@gunaraconsultant.com";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MSG =
  "Halo Gunara Consultant! Saya tertarik mendaftar *Pendirian Badan Usaha Perseorangan (PO/UPTA)*. Mohon info lengkapnya. Terima kasih.";

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

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Konsultasi Gratis",
    desc: "Ceritakan rencana usaha Anda via WhatsApp. Tim kami memetakan jenis badan usaha dan perizinan yang paling menguntungkan untuk posisi Anda — tanpa biaya, tanpa komitmen.",
  },
  {
    num: "02",
    title: "Analisis & Penawaran Transparan",
    desc: "Anda menerima analisis kebutuhan, rincian biaya sepeser pun dijelaskan, dan estimasi waktu yang jujur. Tidak ada biaya tersembunyi — prinsip Mic Kinsey yang kami warisi.",
  },
  {
    num: "03",
    title: "Kontrak & Pembayaran Resmi",
    desc: "Kontrak resmi ditandatangani. Pembayaran hanya ke rekening resmi BCA a.n. Gugun Gunara. Setelah itu tim langsung menyusun seluruh dokumen Anda.",
  },
  {
    num: "04",
    title: "Pengurusan Penuh oleh Tim Ahli",
    desc: "Kami mengurus semuanya ke OSS RBA dan instansi terkait. Anda hanya menandatangani saat diminta. Progres dilaporkan rutin — Anda selalu tahu posisi berkas Anda.",
  },
  {
    num: "05",
    title: "Penyerahan & Garansi",
    desc: "Dokumen legal serah terima lengkap: NIB, sertifikat badan usaha, dan akses OSS Anda. Bila ditolak bukan karena dokumen klien — kami proses ulang gratis.",
  },
];

export const PRICING_TIERS = [
  {
    id: "po",
    name: "PO / UPTA Standar",
    price: "750.000",
    tagline: "Legalitas inti untuk mulai berbisnis resmi",
    features: [
      "NIB — Nomor Induk Berusaha (OSS RBA)",
      "Sertifikat Badan Usaha Perseorangan",
      "Pemetaan KBLI paling menguntungkan",
      "Konsultasi pemilihan bentuk badan usaha",
      "Garansi proses ulang bila ditolak",
      "Progres dilaporkan rutin via WhatsApp",
    ],
    featured: false,
    ctaMsg:
      "Halo Gunara Consultant! Saya ingin mendaftar paket *PO/UPTA Standar (Rp750.000)*. Mohon diproses. Terima kasih.",
  },
  {
    id: "po-plus",
    name: "PO / UPTA Lengkap",
    price: "1.500.000",
    tagline: "Paling banyak dipilih — siap operasional penuh",
    features: [
      "Semua isi paket PO/UPTA Standar",
      "Wajib Lapor Perusahaan (Kemenaker)",
      "Pendaftaran BPJS Ketenagakerjaan & Kesehatan",
      "Pendampingan NPWP & fasilitas perpajakan",
      "Template kontrak & invoice resmi",
      "Prioritas antrean penanganan 2x lebih cepat",
      "Garansi proses ulang bila ditolak",
    ],
    featured: true,
    badge: "PALING LARIS",
    ctaMsg:
      "Halo Gunara Consultant! Saya ingin mendaftar paket *PO/UPTA Lengkap (Rp1.500.000)*. Mohon diproses. Terima kasih.",
  },
  {
    id: "pt-perseorangan",
    name: "PT Perseorangan",
    price: "2.500.000",
    tagline: "Badan hukum PT penuh untuk satu pemilik",
    features: [
      "Pendirian PT dengan satu pemegang saham",
      "Tanggung jawab terbatas — aset pribadi aman",
      "NIB & Perizinan Berusaha OSS RBA",
      "Pendampingan NPWP korporat",
      "Struktur direksi & pemegang saham",
      "Kredibilitas tertinggi untuk tender & bank",
      "Garansi proses ulang bila ditolak",
    ],
    featured: false,
    ctaMsg:
      "Halo Gunara Consultant! Saya ingin mendaftar paket *Pendirian PT Perseorangan (Rp2.500.000)*. Mohon diproses. Terima kasih.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Selama ini jualan pakai nama sendiri doang, rasanya kurang percaya diri masuk marketplace besar. Lewat Gunara, PO saya sah dalam 3 hari — sekarang bisa ikut pengadaan pemerintah.",
    name: "Dedi Kurniawan",
    role: "Owner Dapur Katering — Tasikmalaya",
    initials: "DK",
  },
  {
    quote:
      "Saya UMKM rumahan, awalnya takut biayanya mahal. Ternyata 750 ribu dan diurus semua sampai NIB terbit. Progresnya selalu dilaporkan tanpa saya tanya duluan. Profesional kelas dunia memang beda.",
    name: "Ratna Sari",
    role: "Founder Brand Hijab — Bandung",
    initials: "RS",
  },
  {
    quote:
      "Butuh badan usaha cepat untuk tender kecil-kecilan. Gunara urus PO saya 2 hari kerja selesai. Dokumennya rapi, KBLI-nya dipilihkan yang paling menguntungkan.",
    name: "Hendra Gunawan",
    role: "Kontraktor — Semarang",
    initials: "HG",
  },
  {
    quote:
      "Upgrade dari PO ke PT Perseorangan langsung dibimbing step by step. Aset pribadi jadi aman dengan tanggung jawab terbatas. Worth every rupiah.",
    name: "Melinda Oktaviani",
    role: "Owner Fashion Brand — Jakarta",
    initials: "MO",
  },
  {
    quote:
      "Sebagai pemula, saya bingung bedanya PO, CV, dan PT. Konsultasi gratisnya dijelaskan pakai bahasa manusia, bukan bahasa hukum. Akhirnya pilih yang tepat dan hemat biaya.",
    name: "Yusuf Maulana",
    role: "Dropshipper — Makassar",
    initials: "YM",
  },
  {
    quote:
      "Proses di Gunara itu terasa seperti dilayani bank premium — ada kontrak, ada laporan, ada garansi. Rekeningnya jelas satu-satunya, jadi tenang.",
    name: "Fitri Handayani",
    role: "Owner Salon & Spa — Yogyakarta",
    initials: "FH",
  },
];

export const FAQS = [
  {
    q: "Apa itu Badan Usaha Perseorangan (PO/UPTA)?",
    a: "Badan Usaha Perseorangan adalah legalitas resmi untuk usaha yang dikelola sendiri oleh satu orang — tanpa perlu mitra, tanpa notaris, dan tanpa modal dasar yang rumit. Sejak UU Cipta Kerja dan UU No. 6/2023, usaha perseorangan diakui sebagai badan usaha sah dengan nomor induk resmi, sehingga bisa mengikuti tender, membuka rekening korporat, dan bekerja sama dengan perusahaan besar.",
  },
  {
    q: "Apa saja syaratnya? Apakah rumit?",
    a: "Sangat sederhana: KTP, NPWP pribadi, dan nomor WhatsApp aktif. Itu saja. Tidak perlu akta notaris, tidak perlu modal minimum, tidak perlu datang ke kantor kelurahan. Seluruh proses kami yang mengurus — Anda cukup menandatangani dokumen digital saat diminta.",
  },
  {
    q: "Berapa lama prosesnya dan berapa biayanya?",
    a: "Estimasi 2–4 hari kerja untuk paket PO/UPTA Standar mulai Rp750.000 — biaya sudah termasuk NIB, sertifikat badan usaha, dan pemetaan KBLI. Setiap paket memiliki rincian transparan yang kami kirim sebelum kontrak. Tidak ada biaya tersembunyi.",
  },
  {
    q: "Bedanya PO/UPTA dengan PT Perseorangan apa?",
    a: "PO/UPTA cocok untuk usaha yang baru jalan dan ingin legal cepat dengan biaya ringan. PT Perseorangan adalah badan hukum Perseroan Terbatas dengan satu pemegang saham — tanggung jawab Anda terbatas pada modal perusahaan (aset pribadi terpisah), kredibilitasnya tertinggi di mata bank dan investor. Tim kami akan memetakan mana yang paling menguntungkan lewat konsultasi gratis.",
  },
  {
    q: "Ke rekening mana pembayarannya?",
    a: "Pembayaran HANYA ke rekening resmi satu-satunya kami: BANK BCA 0860742187 a.n. Gugun Gunara. Kami tidak pernah memakai rekening lain atau rekening perantara. Bila ada pihak meminta transfer ke rekening berbeda dengan mengatasnamakan kami — itu penipuan, laporkan segera ke WhatsApp resmi kami.",
  },
  {
    q: "Apakah dokumen usaha saya aman?",
    a: "Sangat aman. Seluruh dokumen klien dikelola dalam sistem arsip digital dengan akses terbatas pada tim penanganan, sesuai standar mutu ISO 9001:2015 yang tersertifikasi, dan dihancurkan atas permintaan klien setelah proses selesai.",
  },
  {
    q: "Bagaimana jika perizinan saya ditolak?",
    a: "Bila penolakan terjadi bukan karena kelalaian atau dokumen klien, kami memproses ulang TANPA biaya tambahan sesuai garansi kontrak. Selama 15+ tahun, tingkat keberhasilan kami 98% — karena setiap berkas diperiksa dua kali sebelum masuk ke instansi.",
  },
  {
    q: "Saya di luar Tasikmalaya, apakah bisa dilayani?",
    a: "Ya. Kami melayani seluruh 38 provinsi Indonesia — dari Aceh sampai Papua Pegunungan. Mayoritas proses kini online (OSS, e-Mol), dan bila dibutuhkan kehadiran fisik, tim ahli daerah kami yang turun tangan di wilayah Anda.",
  },
];
