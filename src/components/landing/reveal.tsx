"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale";
  as?: "div" | "section" | "span" | "li";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left"
      ? "reveal-left"
      : variant === "right"
        ? "reveal-right"
        : variant === "scale"
          ? "reveal-scale"
          : "";

  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/**
 * V10 — SplitWords: per-word staggered rise + blur reveal.
 * Wrap a plain string (optionally with highlighted segment).
 */
export function SplitWords({
  text,
  highlight,
  className = "",
  highlightClass = "text-gold-grad italic",
  delay = 0,
  stagger = 90,
}: {
  text: string;
  /** substring to wrap with highlightClass */
  highlight?: string;
  className?: string;
  highlightClass?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("words-in");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const renderText = (s: string, baseDelay: number, highlighted = false) => {
    if (!s.trim()) return null;
    const words = s.split(" ");
    const els: React.ReactNode[] = [];
    words.forEach((word, i) => {
      els.push(
        <span
          key={`w-${word}-${i}-${baseDelay}`}
          className="word-clip"
        >
          <span
            className={`word-rise ${highlighted ? highlightClass : ""}`}
            style={{ transitionDelay: `${baseDelay + i * stagger}ms` }}
          >
            {word}
          </span>
        </span>
      );
      if (i < words.length - 1) els.push(" ");
    });
    return els;
  };

  let before = text;
  let after = "";
  const hasHighlight = !!highlight && text.includes(highlight);
  if (hasHighlight) {
    const idx = text.indexOf(highlight!);
    before = text.slice(0, idx);
    after = text.slice(idx + highlight!.length);
  }

  const beforeDelay = delay;
  const hlDelay = delay + (before.trim() ? before.split(" ").length * stagger : 0);
  const afterDelay =
    hlDelay + (hasHighlight ? highlight!.split(" ").length * stagger : 0);

  return (
    <span ref={ref} className={`split-words ${className}`}>
      {renderText(before, beforeDelay)}
      {hasHighlight && renderText(highlight!, hlDelay, true)}
      {hasHighlight && renderText(after, afterDelay)}
    </span>
  );
}

/** V10 — Magnetic: element gently pulled toward the cursor. */
export function Magnetic({
  children,
  strength = 0.28,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      className={`magnetic ${className}`}
      style={{ display: "inline-block", transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)" }}
    >
      {children}
    </span>
  );
}

/**
 * V10 — useSpotlight: sets --mx / --my CSS vars as the mouse moves,
 * powering the .spotlight-card radial highlight.
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return ref;
}

/** Animated counter that runs when scrolled into view */
export function Counter({
  value,
  suffix = "",
  duration = 1800,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);

          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            el.textContent = `${Math.round(eased * value)}${suffix}`;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className={`stat-num ${className}`}>
      0{suffix}
    </span>
  );
}

/** Mouse-follow 3D tilt for cards */
export function useTilt<T extends HTMLElement>(maxTilt = 8) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * maxTilt}deg) rotateX(${-py * maxTilt}deg) translateZ(0)`;
    };
    const onLeave = () => {
      el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [maxTilt]);

  return ref;
}
