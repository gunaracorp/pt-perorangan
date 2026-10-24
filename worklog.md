# Worklog

---
Task ID: 1
Agent: Main agent (Z.ai)
Task: Membuat landing page mewah, full animasi, full interaktif untuk Gunara Consultant — awalnya fokus Badan Usaha Perseorangan (PO/UPTA), kemudian diarahkan ulang oleh user menjadi fokus penuh PT PERSEORANGAN (Perseroan Perseorangan) dengan 3 paket harga & push transfer langsung.

Work Log:
- Memuat skill fullstack-dev, inisialisasi environment Next.js 16 (port 3000, dev server otomatis).
- Mem pelajari gunara.web.id via WebFetch: bisnis konsultan perizinan, ISO 9001:2015, Kemenkumham AHU-038293.AH.01.30.Tahun 2024, WA +62 813-1651-6524, BCA 0860742187 a.n. Gugun Gunara.
- Build v1 (PO/UPTA): design system "Midnight Obsidian & Gold" (Playfair Display + Manrope), preloader, canvas partikel emas interaktif, navbar glass + scroll progress, hero 3D tilt + counter, marquee instansi, bento keunggulan, comparison tabs, timeline proses, pricing + countdown, testimoni carousel, payment copy-to-clipboard, FAQ accordion, form pendaftaran → WhatsApp, floating WA, cursor glow. Lulus lint, diverifikasi agent-browser (screenshot + interaksi: copy toast, tab, form submit → wa.me benar, mobile 390px).
- Revisi v2 atas arahan user: fokus 100% PT Perseorangan. Riset internet (OSS.go.id, golaw.id, izinkilat, izinworks, legalitas.org, vOffice): deliverable resmi = NIB (akta pendirian + SK), Sertifikat Pendaftaran, Surat Pernyataan/Akta Perseorangan; syarat = KTP, NPWP, alamat; paket kilat 1 hari kerja kredibel; aturan 1 NIK = 1 PT Perseorangan; modal maks Rp5 M.
- Rewrite landing-constants.ts: 3 paket (P1 Legalitas 750rb dari 2jt; P2 Legalitas+Website 1,5jt dari 4jt; P3 Sultan 20X 5jt nilai 13,5jt + garansi omzet naik sampai 20x), proses 5 langkah transfer-dokumen-OSS-terbit-serah terima, FAQ baru, testimoni baru, DOC_REQUIREMENTS.
- Rombak hero (headline "PT Atas Nama Anda, Sah Dalam 1 Hari Kerja", kartu offer hemat 62%, chips 3 dokumen), advantages (kelebihan PT Perseorangan), comparison ("Mending mana?" — tanpa badan hukum vs PT Perseorangan vs PT notaris, default PT Perseorangan PALING CERDAS), process (tag 1×24 JAM), doc-requirements (section baru "3 Dokumen. 1 Transfer. Besok Sah."), pricing (harga coret + badge diskon + Jaminan Ganda), payment (copy transfer → kirim dokumen), registration-form (opsi 3 paket + nama PT), metadata SEO.
- Verifikasi ulang via agent-browser: hero, proses, dokumen, pricing, jaminan — semua render sempurna; 12 link WhatsApp aktif; lint bersih; dev.log GET 200.

Stage Summary:
- Deliverable: landing page single-route (/) mewah full-animasi, fokus PT Perseorangan, konversi transfer → BCA 0860742187 a.n. Gugun Gunara + dokumen KTP/NPWP/alamat → 1 hari jadi.
- File utama: src/app/{layout,page,globals.css}, src/lib/landing-constants.ts, src/components/landing/{preloader,particles,reveal,navbar,hero,marquee,advantages,comparison,process,doc-requirements,pricing,testimonials,payment,faq,registration-form,floating,footer-cta}.tsx
- Catatan: harga Paket 3 (Rp5jt) diturunkan dari interpretasi "all tools seharga 5 juta" — mudah diubah di src/lib/landing-constants.ts (PRICING_TIERS).

---
Task ID: 2
Agent: Main agent (Z.ai)
Task: Final polish — ganti email ke gunara@pusatperizinan.com, hubungkan domain pusatperizinan.com (utama) + gunara.web.id, dan migrasi seluruh tema warna dari "Midnight Obsidian & Gold" (gelap) ke "Royal Amethyst & Pearl" (putih terang + ungu full power).

Work Log:
- Menulis script migrasi persisten scripts/migrate-purple-theme.pl (41 aturan pemetaan warna: hex case-insensitive + rgba opsional-spasi + kelas white-on-light) dan menjalankannya ke 21 file (19 komponen landing + page.tsx + layout.tsx) — tanpa sisa palet lama (audit rg bersih).
- Rewrite penuh src/app/globals.css ke tema terang: latar #FBFAFF, teks royal ink #241A4F, aksen violet (#7C3AED/#5B21B6/#8B5CF6/#6D28D9), glass putih frosted, hairline ungu, btn-gold (nama kelas dipertahankan) kini gradasi ungu teks putih, text-gold-grad kini ungu mengalir, scrollbar/selection/cursor-glow/grid/slider/spotlight/grain semuanya dimigrasi; token shadcn :root di-set ke light-violet; grain dipertipis (0.035).
- EMAIL → gunara@pusatperizinan.com; konstanta baru DOMAIN_MAIN(_URL) & DOMAIN_ALT(_URL) di landing-constants.ts.
- layout.tsx: metadataBase https://pusatperizinan.com, canonical "/", openGraph.url, siteName "PusatPerizinan.com — Gunara Consultant", keywords + domain; themeColor #FBFAFF; body class terang.
- page.tsx: JSON-LD Organization — url domain utama, email baru, sameAs kedua domain.
- footer-cta.tsx: blok "Kontak Resmi" + baris domain ber-Globe icon (pusatperizinan.com — domain utama; gunara.web.id — jaringan resmi kami), copyright memakai link domain.
- navbar.tsx: chip Globe "PUSATPERIZINAN.COM" (xl), shadow navbar di-lembutkan ke ungu.
- Fix kontras: inisial avatar hero → putih; live-feed shadow hitam → ungu; live-dot/white-dot → ungu; copy "3 Dokumen Emas" → "3 Dokumen Kunci".
- Insiden: reload browser menyajikan CSS basi (body masih #05060A) — restart dev server + rm -rf .next; setelah itu computed style terverifikasi (body rgb(251,250,255), btn-gold & text-gold-grad gradasi ungu).
- Verifikasi: lint bersih; 13 CTA wa.me aktif; mailto:gunara@pusatperizinan.com; link kedua domain OK; klik "Salin Nomor Rekening" → toast muncul; screenshot desktop (hero/pricing/proses/mid/docs/payment/footer) + mobile 390px — semuanya tematik putih-ungu, tanpa error console.

Stage Summary:
- Deliverable: landing page PT Perseorangan edisi "Putih Terang Ungu" (Royal Amethyst & Pearl) dengan email gunara@pusatperizinan.com dan jaringan domain pusatperizinan.com + gunara.web.id terintegrasi (footer, navbar, metadata, canonical, JSON-LD).
- Kunci teknis: nama kelas design system dipertahankan (btn-gold, text-gold-grad, dst.) sehingga 0 perubahan markup massal; palet dimigrasi via script replikabel scripts/migrate-purple-theme.pl.
- Catatan: bila ingin aksenemasar warna lain cukup edit variabel di globals.css (:root --violet-*) + script pemetaan.
