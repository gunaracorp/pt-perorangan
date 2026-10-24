"use client";

import {
  Zap,
  ShieldCheck,
  HandCoins,
  Crown,
  FileCheck2,
  Fingerprint,
  TrendingUp,
} from "lucide-react";
import { Reveal, useTilt, Counter } from "./reveal";
import { waLink, WA_DEFAULT_MSG } from "@/lib/landing-constants";

const CARDS = [
  {
    icon: Zap,
    title: "1 Hari Kerja — Langsung Jadi",
    desc: "Transfer pagi, kirim KTP + NPWP + alamat siangnya — besoknya NIB dan Sertifikat Pendaftaran PT Anda sudah sah. Tanpa antre, tanpa drama birokrasi.",
    span: "md:col-span-2",
    big: true,
  },
  {
    icon: ShieldCheck,
    title: "Aset Pribadi Terlindungi",
    desc: "Status badan hukum membuat tanggung jawab Anda terbatas — hutang dan risiko usaha tidak menyentuh tabungan, rumah, dan kendaraan pribadi Anda.",
  },
  {
    icon: Crown,
    title: "Nama Depannya “PT”",
    desc: "Kredibilitas lompat kelas. Klien korporat, bank, dan mitra besar jauh lebih percaya kepada PT daripada usaha tanpa badan hukum.",
  },
  {
    icon: HandCoins,
    title: "Tanpa Notaris — Mulai Rp750rb",
    desc: "Akta pendirian digantikan jalur resmi OSS-RBA. Hemat biaya notaris jutaan rupiah dan modal dasar bebas Anda tentukan sendiri.",
  },
  {
    icon: FileCheck2,
    title: "Diperiksa Dua Kali",
    desc: "Setiap berkas melewati dual-review khas metodologi Mic Kinsey sebelum masuk sistem — itulah rahasia tingkat keberhasilan 98% kami.",
    span: "md:col-span-2",
    big: true,
  },
  {
    icon: Fingerprint,
    title: "1 NIK = 1 PT",
    desc: "Slot eksklusif: satu KTP hanya berhak satu PT Perseorangan. Punya PT Anda sebelum kepemilikan tahun ini terpakai.",
  },
];

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useTilt<HTMLDivElement>(5);
  return (
    <div ref={ref} className={`tilt-card ${className}`}>
      {children}
    </div>
  );
}

export function Advantages() {
  return (
    <section id="keunggulan" className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora left-[-8%] top-[10%] h-[360px] w-[360px] bg-[#d4af37]/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#d4af37]">
            KELEBIHAN PT PERSEORANGAN
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#EDE6D6] md:text-5xl">
            Kenapa Ribuan Pemilik Usaha{" "}
            <span className="text-gold-grad italic">Memilih PT Perseorangan</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#EDE6D6]/60">
            Semua keuntungan badan hukum PT — tanpa biaya notaris, tanpa mitra, tanpa
            modal ratusan juta. Diurus Gunara Consultant, tersertifikasi ISO 9001:2015,
            berakar dari Mic Kinsey sejak 2009.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
          {CARDS.map((card, i) => (
            <Reveal
              key={card.title}
              delay={i * 90}
              variant="scale"
              className={card.span ?? ""}
            >
              <TiltCard className={card.span ?? ""}>
                <div className="glass gold-hairline group h-full rounded-2xl p-6 transition-colors duration-500 hover:bg-[#d4af37]/[0.06] md:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af37]/30 bg-gradient-to-br from-[#d4af37]/15 to-transparent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <card.icon className="h-5.5 w-5.5 text-[#f1de9b]" />
                    </div>
                    {card.big && (
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#d4af37]/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-serif-lux mt-5 font-semibold text-[#EDE6D6] ${
                      card.big ? "text-xl md:text-2xl" : "text-lg"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#EDE6D6]/60">
                    {card.desc}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={630} variant="scale">
            <TiltCard>
              <a
                href={waLink(WA_DEFAULT_MSG)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex h-full min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center"
              >
                <TrendingUp className="h-7 w-7" />
                <span className="font-serif-lux text-xl font-bold leading-snug">
                  Klaim PT Anda
                  <br />
                  Hari Ini Juga
                </span>
                <span className="text-xs font-semibold opacity-80">
                  Klik — chat langsung dengan tim pakar
                </span>
              </a>
            </TiltCard>
          </Reveal>
        </div>

        {/* heritage band */}
        <Reveal delay={150} className="mt-16">
          <div className="glass gold-hairline relative overflow-hidden rounded-2xl px-6 py-10 md:px-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d4af37]/10 blur-3xl" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-[#d4af37]">
                  WARISAN MIC KINSEY · SEJAK 2009
                </p>
                <p className="font-serif-lux mt-4 text-xl font-medium leading-relaxed text-[#EDE6D6]/85 md:text-2xl">
                  “Legalitas bukan biaya, melainkan{" "}
                  <span className="text-gold-grad italic">fondasi keberanian</span>{" "}
                  berbisnis besar.”
                </p>
                <p className="mt-4 text-sm text-[#EDE6D6]/50">
                  — Gugun Gunara, Pendiri & Direktur Utama
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { v: 15, s: "+", l: "Tahun" },
                  { v: 1200, s: "+", l: "Klien" },
                  { v: 98, s: "%", l: "Sukses" },
                ].map((m) => (
                  <div key={m.l}>
                    <Counter
                      value={m.v}
                      suffix={m.s}
                      className="font-serif-lux text-2xl font-bold text-[#f1de9b] md:text-3xl"
                    />
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#EDE6D6]/45">
                      {m.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
