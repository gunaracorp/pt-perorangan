"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { Reveal } from "./reveal";
import { FAQS } from "@/lib/landing-constants";

export function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-8">
        <Reveal className="text-center">
          <p className="text-[11px] font-bold tracking-[0.34em] text-[#7C3AED]">
            PERTANYAAN UMUM
          </p>
          <h2 className="font-serif-lux mt-4 text-3xl font-bold leading-tight text-[#241A4F] md:text-5xl">
            Segala yang Ingin Anda{" "}
            <span className="text-gold-grad italic">Tanyakan</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 60}>
                <div
                  className={`glass gold-hairline overflow-hidden rounded-2xl transition-all duration-500 ${
                    isOpen ? "bg-[#7C3AED]/[0.05]" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="flex items-start gap-3.5">
                      <MessageCircleQuestion
                        className={`mt-0.5 h-5 w-5 shrink-0 transition-colors ${
                          isOpen ? "text-[#6D28D9]" : "text-[#7C3AED]/60"
                        }`}
                      />
                      <span
                        className={`text-[15px] font-semibold leading-snug transition-colors ${
                          isOpen ? "text-[#6D28D9]" : "text-[#241A4F]/85"
                        }`}
                      >
                        {faq.q}
                      </span>
                    </span>
                    <span
                      className={`faq-chevron flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                        isOpen
                          ? "rotate-180 border-[#7C3AED]/50 bg-[#7C3AED]/15"
                          : "border-[#7C3AED]/15"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4 text-[#7C3AED]" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-[3.4rem] text-sm leading-relaxed text-[#241A4F]/65">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
