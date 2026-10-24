"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck } from "lucide-react";
import { LIVE_FEED } from "@/lib/landing-constants";

/**
 * V10 — Live activity feed: rotating social-proof popups,
 * "X baru mendaftar Paket Y — N mnt lalu".
 * Auto-appears every 9s, hides after 5.5s, starts after 7s.
 */
export function LiveFeed() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const push = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timers.current.push(id);
    };

    const cycle = (i: number) => {
      setVisible(true);
      setLeaving(false);
      push(() => setLeaving(true), 5000);
      push(() => setVisible(false), 5500);
      push(() => cycle((i + 1) % LIVE_FEED.length), 9000);
    };

    const first = window.setTimeout(() => cycle(0), 7000);
    timers.current.push(first);

    return () => {
      timers.current.forEach((t) => window.clearTimeout(t));
      timers.current = [];
    };
  }, []);

  if (!visible) return null;
  const item = LIVE_FEED[index];

  return (
    <div
      aria-live="polite"
      className={`feed-pop ${leaving ? "is-leaving" : ""} fixed bottom-24 left-4 z-40 md:bottom-7 md:left-7`}
    >
      <div className="glass-strong gold-hairline flex max-w-[280px] items-center gap-3 rounded-2xl px-4 py-3 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.85)]">
        <div className="relative shrink-0">
          <span className="avatar-ring flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#d4af37]/35 to-[#0a0c14]">
            <span className="font-serif-lux text-[11px] font-bold text-[#f1de9b]">
              {item.initials}
            </span>
          </span>
          <span className="live-dot absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-[#25D366]">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        </div>
        <div className="min-w-0 leading-snug">
          <p className="truncate text-[12px] font-bold text-[#EDE6D6]">
            {item.name}
            <span className="font-normal text-[#EDE6D6]/55"> · {item.city}</span>
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-[#f1de9b]/90">
            <BadgeCheck className="h-3 w-3 shrink-0" />
            <span className="truncate font-semibold">{item.pkg}</span>
          </p>
          <p className="mt-0.5 text-[10px] text-[#EDE6D6]/40">
            baru mendaftar · {item.mins} mnt lalu
          </p>
        </div>
      </div>
    </div>
  );
}
