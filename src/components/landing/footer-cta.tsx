"use client";

import { Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";
import { waLink, WA_DEFAULT_MSG, WA_DISPLAY, EMAIL, BCA_ACCOUNT, BCA_NAME } from "@/lib/landing-constants";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-[#d4af37]/10 py-24 md:py-28">
      <div className="aurora left-[30%] top-[-20%] h-[360px] w-[520px] bg-[#d4af37]/14" />
      <GoldDust />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center md:px-8">
        <Reveal>
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#d4af37]">
            SAATNYA BISNIS ANDA DIKENALI NEGARA
          </p>
          <h2 className="font-serif-lux mt-5 text-3xl font-bold leading-[1.12] text-[#EDE6D6] md:text-[3.4rem]">
            Besok, Bisnis Anda Bisa Sudah{" "}
            <span className="text-gold-grad italic shine-wrap shine-sweep">Resmi & Siap Naik Kelas</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[#EDE6D6]/60">
            Setiap hari tanpa legalitas adalah tender yang hilang, marketplace yang
            memblokir, dan mitra yang ragu. Konsultasi gratis sekarang — tim kami menjawab
            cepat di jam kerja.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={waLink(WA_DEFAULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-bold"
            >
              <Sparkles className="h-4.5 w-4.5" />
              Chat WhatsApp Sekarang
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="glass gold-hairline flex items-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-semibold text-[#EDE6D6] transition-colors hover:bg-[#d4af37]/10 hover:text-[#f1de9b]"
            >
              <Mail className="h-4.5 w-4.5 text-[#d4af37]" />
              Kirim Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GoldDust() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        { l: "8%", t: "30%", d: "0s", s: "h-1.5 w-1.5" },
        { l: "22%", t: "70%", d: "1.2s", s: "h-1 w-1" },
        { l: "46%", t: "18%", d: "0.6s", s: "h-2 w-2" },
        { l: "63%", t: "58%", d: "2s", s: "h-1 w-1" },
        { l: "82%", t: "28%", d: "0.3s", s: "h-1.5 w-1.5" },
        { l: "92%", t: "66%", d: "1.6s", s: "h-1 w-1" },
        { l: "35%", t: "82%", d: "2.4s", s: "h-1.5 w-1.5" },
        { l: "72%", t: "86%", d: "0.9s", s: "h-1 w-1" },
      ].map((p, i) => (
        <span
          key={i}
          className={`float-slow absolute rounded-full bg-[#f1de9b]/70 blur-[1px] ${p.s}`}
          style={{ left: p.l, top: p.t, animationDelay: p.d }}
        />
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#d4af37]/12 bg-[#04050a]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 bg-gradient-to-br from-[#16130a] to-[#0a0c14]">
                <span className="font-serif-lux text-gold-grad text-xl font-bold">G</span>
              </span>
              <div className="leading-none">
                <p className="font-serif-lux text-[15px] font-semibold tracking-[0.18em] text-[#EDE6D6]">
                  GUNARA
                </p>
                <p className="mt-1 text-[8px] tracking-[0.4em] text-[#d4af37]/80">
                  CONSULTANT
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#EDE6D6]/55">
              Pusat perizinan terlengkap di Asia. Berakar dari Mic Kinsey sejak 2009,
              tersertifikasi ISO 9001:2015, melayani 38 provinsi Indonesia dengan 500+
              jenis perizinan.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-[#d4af37]">
                ISO 9001:2015
              </span>
              <span className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-[#d4af37]">
                KEMENKUMHAM RI
              </span>
              <span className="rounded-full border border-[#d4af37]/25 bg-[#d4af37]/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-[#d4af37]">
                MIC KINSEY · 2009
              </span>
            </div>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#d4af37]">
              Kontak Resmi
            </h4>
            <ul className="mt-5 flex flex-col gap-3.5 text-sm text-[#EDE6D6]/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]/70" />
                <span>
                  Andalusia Garden Cluster Granada No.11, Jln. Abdi Negara II, Kota
                  Tasikmalaya, Jawa Barat 46115
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]/70" />
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-[#f1de9b]">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* payment */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#d4af37]">
              Pembayaran Resmi
            </h4>
            <div className="glass gold-hairline mt-5 rounded-xl px-4 py-4">
              <p className="font-mono text-sm font-bold tracking-[0.12em] text-[#f1de9b]">
                BCA {BCA_ACCOUNT}
              </p>
              <p className="mt-1 text-xs text-[#EDE6D6]/55">a.n. {BCA_NAME}</p>
            </div>
            <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-[#EDE6D6]/40">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#25D366]/70" />
              Pembayaran aman hanya ke rekening resmi di atas. Waspadai penipuan.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-7">
          <p className="text-center text-xs leading-relaxed text-[#EDE6D6]/40">
            © 2026 Gunara Consultant. Seluruh hak cipta dilindungi. Berbadan usaha resmi
            terdaftar Kemenkumham RI (AHU-038293.AH.01.30.Tahun 2024) · gunara.web.id ·
            pusatperizinan.com
          </p>
          <p className="mt-2 text-center text-[11px] text-[#EDE6D6]/30">
            Website resmi Gunara Consultant. Pembayaran hanya ke rekening BCA{" "}
            {BCA_ACCOUNT} a.n. {BCA_NAME}. WhatsApp {WA_DISPLAY}.
          </p>
        </div>
      </div>
    </footer>
  );
}
