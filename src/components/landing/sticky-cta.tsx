"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Clock3 } from "lucide-react";
import { waLink, WA_DEFAULT_MSG } from "@/lib/landing-constants";

/**
 * V10 — Sticky mobile conversion bar:
 * appears after scrolling past the hero, hides near the
 * final form/footer so it never blocks the real CTA.
 */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearEnd =
        y + window.innerHeight >
        document.documentElement.scrollHeight - 900;
      setShow(y > 640 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="sticky-cta-in fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="glass-strong border-t border-[#7C3AED]/35 bg-[#FBFAFF]/92 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="min-w-0 flex-1 leading-tight">
            <p className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.14em] text-[#7C3AED]">
              <Clock3 className="h-3 w-3" />
              PT JADI 1 HARI
            </p>
            <p className="mt-0.5 truncate text-[13px] font-semibold text-[#241A4F]">
              Mulai{" "}
              <span className="font-serif-lux text-gold-grad text-base font-bold">
                Rp750rb
              </span>{" "}
              <span className="text-[11px] text-[#241A4F]/40 line-through">
                Rp2jt
              </span>
            </p>
          </div>
          <a
            href={waLink(WA_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex shrink-0 items-center gap-1.5 rounded-full px-5 py-3 text-[13px] font-bold"
          >
            Daftar Sekarang
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
