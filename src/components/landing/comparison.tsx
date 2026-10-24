"use client";

import { useState } from "react";
import { Check, X, ArrowRight, Crown } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink } from "@/lib/landing-constants";

type ChoiceKey = "tanpa-badan-hukum" | "pt-perseorangan" | "pt-notaris";

const CHOICES: Record<
  ChoiceKey,
  {
    name: string;
    tagline: string;
    cost: string;
    time: string;
    verdict: string;
    pros: string[];
    cons: string[];
    waMsg: string;
    recommended?: boolean;
  }
> = {
  "tanpa-badan-hukum": {
    name: "Usaha Tanpa Badan Hukum",
    tagline: "Jualan tanpa legalitas",
    cost: "Rp0",
    time: "Tidak ada proses",
    verdict: "Kelihatannya gratis — sebenarnya pilihan paling mahal.",
    pros: [
      "Tidak ada biaya awal sama sekali",
      "Cukup jualan langsung",
    ],
    cons: [
      "Tidak bisa pakai nama “PT” — kredibilitas rendah",
      "Tidak bisa ikut tender & pengadaan pemerintah",
      "Ditolak bank saat mengajukan modal usaha",
      "Aset pribadi menyatu dengan risiko usaha",
      "Banyak marketplace & mitra besar menolak legalitas kosong",
    ],
    waMsg:
      "Halo Gunara Consultant! Saya selama ini usaha tanpa badan hukum dan ketinggalan banyak peluang. Saya mau segera punya *PT Perseorangan (mulai Rp750rb, 1 hari jadi)*. Mohon diproses hari ini!",
  },
  "pt-perseorangan": {
    name: "PT Perseorangan",
    tagline: "Badan hukum PT penuh — 1 pemilik",
    cost: "Mulai Rp750rb",
    time: "1 hari kerja",
    verdict: "Pilihan paling cerdas: semua keuntungan PT, tanpa biaya notaris.",
    pros: [
      "Badan hukum resmi — aset pribadi terlindungi hukum",
      "Tanpa akta notaris — hemat jutaan rupiah",
      "Terbit 1×24 jam sejak dokumen lengkap",
      "Bisa pakai nama PT, ikut tender, rekening korporat",
      "Cukup KTP + NPWP + alamat — diurus penuh oleh kami",
      "Harga khusus hari ini: Rp750rb dari normal Rp2jt",
    ],
    cons: [
      "Satu NIK hanya boleh satu PT Perseorangan (slot eksklusif)",
      "Untuk usaha mikro-kecil-menengah (modal maks Rp5 miliar)",
    ],
    waMsg:
      "Halo Gunara Consultant! Saya PILIH *PT PERSEORANGAN (mulai Rp750rb, 1 hari jadi)*. Saya siap transfer ke BCA dan kirim KTP + NPWP + Alamat sekarang. Mohon diproses hari ini juga!",
    recommended: true,
  },
  "pt-notaris": {
    name: "PT Biasa (Lewat Notaris)",
    tagline: "Jalur klasik dengan akta notaris",
    cost: "Rp2.500.000+",
    time: "5–10 hari kerja",
    verdict: "Cocok untuk perusahaan besar — boros untuk usaha satu pemilik.",
    pros: [
      "Tanpa batas modal usaha",
      "Bisa banyak pemegang saham / investor",
      "Struktur dewan lengkap (dirkom)",
    ],
    cons: [
      "Wajib akta notaris — biaya jutaan rupiah",
      "Proses 5–10 hari kerja atau lebih",
      "Perundang-undangan lebih berat untuk usaha kecil",
      "Bayar mahal untuk proteksi yang sama",
    ],
    waMsg:
      "Halo Gunara Consultant! Saya tertarik mendirikan *PT biasa lewat notaris*. Mohon konsultasi dulu apakah lebih cocok PT Perseorangan atau PT biasa. Terima kasih!",
  },
};

const KEYS: ChoiceKey[] = ["tanpa-badan-hukum", "pt-perseorangan", "pt-notaris"];

export function Comparison() {
  const [active, setActive] = useState<ChoiceKey>("pt-perseorangan");
  const data = CHOICES[active];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="aurora right-[-10%] top-[30%] h-[380px] w-[380px] bg-[#8B5CF6]/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#7C3AED]">
            HITUNG CERDAS SEBELUM MEMILIH
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#241A4F] md:text-5xl">
            Kenapa <span className="text-gold-grad italic">PT Perseorangan</span> adalah
            Keputusan Paling Cerdas?
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#241A4F]/60">
            Klik dan bandingkan sendiri ketiga jalurnya — lihat mengapa pemilik usaha
            cerdas berbondong-bondong pindah ke PT Perseorangan.
          </p>
        </Reveal>

        {/* tab buttons */}
        <Reveal delay={120} className="mt-10">
          <div
            role="tablist"
            aria-label="Perbandingan jalur pendirian usaha"
            className="glass mx-auto grid max-w-2xl grid-cols-3 gap-1.5 rounded-2xl p-1.5"
          >
            {KEYS.map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={`rounded-xl px-2 py-3 text-center text-[11px] font-bold transition-all duration-400 sm:text-sm ${
                  active === key
                    ? "bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-[#FFFFFF] shadow-[0_8px_24px_-8px_rgba(124, 58, 237,0.6)]"
                    : "text-[#241A4F]/55 hover:text-[#6D28D9]"
                }`}
              >
                {CHOICES[key].name.replace(" (Lewat Notaris)", "")}
              </button>
            ))}
          </div>
        </Reveal>

        {/* active panel */}
        <Reveal delay={200} variant="scale" className="mt-8">
          <div
            key={active}
            className={`testi-enter grid gap-10 rounded-3xl p-7 md:grid-cols-[1fr_1.1fr] md:p-10 ${
              data.recommended
                ? "glass-strong gold-hairline glow-gold"
                : "glass gold-hairline"
            }`}
          >
            <div>
              <p className="text-[11px] font-bold tracking-[0.26em] text-[#7C3AED]">
                {data.tagline.toUpperCase()}
              </p>
              <h3 className="font-serif-lux mt-3 flex flex-wrap items-center gap-3 text-3xl font-bold text-[#241A4F] md:text-4xl">
                {data.name}
                {data.recommended && (
                  <span className="btn-gold inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-black tracking-[0.12em]">
                    <Crown className="h-3.5 w-3.5" />
                    PALING CERDAS
                  </span>
                )}
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="count-box rounded-xl px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#241A4F]/45">
                    Biaya
                  </p>
                  <p className="font-serif-lux mt-1 text-xl font-bold text-[#6D28D9]">
                    {data.cost}
                  </p>
                </div>
                <div className="count-box rounded-xl px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#241A4F]/45">
                    Waktu
                  </p>
                  <p className="font-serif-lux mt-1 text-xl font-bold text-[#6D28D9]">
                    {data.time}
                  </p>
                </div>
              </div>
              <p className="mt-6 rounded-xl border-l-2 border-[#7C3AED]/60 bg-white/[0.03] px-4 py-3 text-sm italic leading-relaxed text-[#241A4F]/75">
                {data.verdict}
              </p>
              <a
                href={waLink(data.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-bold ${
                  data.recommended ? "btn-gold" : "glass gold-hairline text-[#6D28D9] hover:bg-[#7C3AED]/10"
                }`}
              >
                {data.recommended ? "Saya Pilih yang Cerdas" : `Pilih ${data.name}`}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col gap-3">
              {data.pros.map((pro) => (
                <div
                  key={pro}
                  className="flex items-start gap-3 rounded-xl border border-[#25D366]/20 bg-[#25D366]/[0.05] px-4 py-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20">
                    <Check className="h-3 w-3 text-[#4ade80]" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#241A4F]/85">{pro}</span>
                </div>
              ))}
              {data.cons.map((con) => (
                <div
                  key={con}
                  className="flex items-start gap-3 rounded-xl border border-[#7C3AED]/12 bg-white/[0.02] px-4 py-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7C3AED]/10">
                    <X className="h-3 w-3 text-[#241A4F]/45" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#241A4F]/50">{con}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
