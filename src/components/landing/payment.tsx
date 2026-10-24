"use client";

import { useState } from "react";
import { Copy, Check, ShieldAlert, Landmark, Lock } from "lucide-react";
import { Reveal, useTilt } from "./reveal";
import { toast } from "@/hooks/use-toast";
import { BCA_ACCOUNT, BCA_NAME, WA_DISPLAY } from "@/lib/landing-constants";

export function Payment() {
  const [copied, setCopied] = useState(false);
  const [flash, setFlash] = useState(false);
  const tiltRef = useTilt<HTMLDivElement>(5);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(BCA_ACCOUNT);
    } catch {
      // clipboard API may be unavailable — fallback
      const ta = document.createElement("textarea");
      ta.value = BCA_ACCOUNT;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setFlash(true);
    toast({
      title: "Nomor rekening tersalin",
      description: `BCA ${BCA_ACCOUNT} a.n. ${BCA_NAME}`,
    });
    window.setTimeout(() => setCopied(false), 2600);
    window.setTimeout(() => setFlash(false), 800);
  };

  return (
    <section
      id="pembayaran"
      className="relative overflow-hidden border-y border-[#7C3AED]/10 bg-[#F6F4FE]/60 py-24 md:py-32"
    >
      <div className="aurora right-[15%] top-[10%] h-[320px] w-[480px] bg-[#7C3AED]/10" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#7C3AED]">
            PEMBAYARAN RESMI
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#241A4F] md:text-5xl">
            Transfer ke <span className="text-gold-grad italic">Rekening Resmi</span> — PT Langsung Diproses
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#241A4F]/60">
            Seluruh pembayaran Gunara Consultant HANYA ke rekening di bawah ini. Setelah
            transfer, kirim bukti + KTP, NPWP, dan alamat ke WhatsApp resmi kami —
            pendirian PT Perseorangan Anda langsung diproses 1×24 jam.
          </p>
        </Reveal>

        <Reveal delay={150} variant="scale" className="mt-12">
          <div ref={tiltRef} className="tilt-card mx-auto max-w-xl">
            <div className="glass-strong gold-hairline glow-gold relative overflow-hidden rounded-3xl p-8 md:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#6D28D9] to-transparent" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Landmark className="h-6 w-6 text-[#7C3AED]" />
                  <div>
                    <p className="font-serif-lux text-lg font-bold tracking-[0.22em] text-[#241A4F]">
                      BANK BCA
                    </p>
                    <p className="text-[10px] tracking-[0.24em] text-[#241A4F]/45">
                      OFFICIAL ACCOUNT
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-[#4ade80]">
                  <Lock className="h-3 w-3" />
                  100% RESMI
                </span>
              </div>

              <p className="mt-8 text-[11px] uppercase tracking-[0.26em] text-[#241A4F]/45">
                Nomor Rekening
              </p>
              <p
                className={`font-mono mt-2 text-4xl font-bold tracking-[0.14em] text-[#6D28D9] md:text-[3rem] ${
                  flash ? "copy-flash rounded-xl" : ""
                }`}
                style={{ textShadow: "0 0 40px rgba(124, 58, 237,0.35)" }}
              >
                {BCA_ACCOUNT}
              </p>
              <p className="mt-3 text-sm text-[#241A4F]/60">
                Atas Nama —{" "}
                <span className="font-semibold text-[#241A4F]">{BCA_NAME}</span>
              </p>

              <button
                onClick={copyAccount}
                className={`btn-gold mt-7 flex w-full items-center justify-center gap-2.5 rounded-full py-4 text-sm font-bold ${
                  copied ? "opacity-95" : ""
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4.5 w-4.5" />
                    Tersalin — Siap Ditransfer
                  </>
                ) : (
                  <>
                    <Copy className="h-4.5 w-4.5" />
                    Salin Nomor Rekening
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-[#241A4F]/45">
                Setelah transfer: kirim bukti + KTP, NPWP, alamat ke{" "}
                <span className="font-semibold text-[#6D28D9]">{WA_DISPLAY}</span> — PT diproses
                1×24 jam
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={220} className="mt-8">
          <div className="mx-auto flex max-w-xl items-start gap-4 rounded-2xl border border-red-400/20 bg-red-500/[0.06] px-6 py-5">
            <ShieldAlert className="mt-0.5 h-5.5 w-5.5 shrink-0 text-red-400/90" />
            <p className="text-sm leading-relaxed text-[#241A4F]/70">
              <span className="font-bold text-red-300">Waspadai penipuan!</span> Gunara
              Consultant TIDAK memiliki rekening lain selain BCA {BCA_ACCOUNT} a.n.{" "}
              {BCA_NAME}. Bila ada pihak meminta transfer ke rekening berbeda dengan
              mengatasnamakan kami — tolak dan laporkan segera ke WhatsApp resmi kami.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
