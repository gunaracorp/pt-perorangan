"use client";

import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck, Sparkles } from "lucide-react";
import { waLink, WA_DEFAULT_MSG } from "@/lib/landing-constants";

const NAV_LINKS = [
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#paket", label: "Paket & Harga" },
  { href: "#proses", label: "Proses" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#05060A]/80 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* scroll progress */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-[#8a6a1f] via-[#f1de9b] to-[#d4af37] transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label="Gunara Consultant">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/40 bg-gradient-to-br from-[#16130a] to-[#0a0c14]">
            <span className="font-serif-lux text-gold-grad text-xl font-bold">G</span>
            <span className="absolute inset-0 rounded-full bg-[#d4af37]/10 blur-md transition-opacity group-hover:opacity-100" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif-lux text-[15px] font-semibold tracking-[0.18em] text-[#EDE6D6]">
              GUNARA
            </span>
            <span className="mt-1 text-[8px] tracking-[0.4em] text-[#d4af37]/80">
              CONSULTANT
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[13px] font-medium tracking-wide text-[#EDE6D6]/70 transition-colors hover:text-[#f1de9b]"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-[#d4af37] to-transparent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/5 px-3 py-1.5 md:flex">
            <ShieldCheck className="h-3.5 w-3.5 text-[#d4af37]" />
            <span className="text-[10px] font-semibold tracking-[0.14em] text-[#d4af37]">
              ISO 9001:2015
            </span>
          </div>
          <a
            href={waLink(WA_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold tracking-wide sm:flex"
          >
            <Sparkles className="h-4 w-4" />
            Daftar Sekarang
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Buka menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/30 text-[#EDE6D6] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={`overflow-hidden bg-[#05060A]/95 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-96 border-b border-[#d4af37]/15" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-[#EDE6D6]/80 transition-colors hover:bg-[#d4af37]/10 hover:text-[#f1de9b]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink(WA_DEFAULT_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-2 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold"
          >
            <Sparkles className="h-4 w-4" />
            Daftar via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
