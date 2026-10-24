"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  speedY: number;
  speedX: number;
  alpha: number;
  phase: number;
  twinkleSpeed: number;
};

type Star = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

/**
 * V10 — Luxury gold dust canvas:
 * floating particles + constellation lines between neighbours
 * + occasional shooting star. Mouse-reactive, DPR-aware,
 * reduced-motion aware.
 */
export function GoldParticles({ density = 90 }: { density?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let stars: Star[] = [];
    let frame = 0;
    let nextStar = 260;
    const mouse = { x: -9999, y: -9999 };
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement ?? canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const count = Math.min(density, Math.floor((w * h) / 16000));
      particles = Array.from({ length: Math.max(30, count) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.4,
        speedY: -(Math.random() * 0.28 + 0.06),
        speedX: (Math.random() - 0.5) * 0.12,
        alpha: Math.random() * 0.55 + 0.15,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.018 + 0.006,
      }));
    };

    const spawnStar = (w: number, h: number) => {
      const ang = Math.PI * (0.08 + Math.random() * 0.22);
      const speed = 7 + Math.random() * 5;
      stars.push({
        x: Math.random() * w * 0.7,
        y: -20,
        vx: Math.cos(ang) * speed,
        vy: Math.sin(ang) * speed,
        life: 0,
        maxLife: 46 + Math.random() * 22,
      });
    };

    const drawConstellations = (w: number, h: number) => {
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120 && d2 > 1) {
            const t = 1 - Math.sqrt(d2) / 120;
            ctx.strokeStyle = `rgba(212, 175, 55, ${t * 0.14})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      frame++;

      // constellation web
      drawConstellations(w, h);

      // shooting star
      if (frame >= nextStar) {
        spawnStar(w, h);
        nextStar = frame + 320 + Math.random() * 340;
      }
      stars = stars.filter((s) => s.life < s.maxLife);
      for (const s of stars) {
        s.life++;
        s.x += s.vx;
        s.y += s.vy;
        const fade = 1 - s.life / s.maxLife;
        const grad = ctx.createLinearGradient(
          s.x - s.vx * 8,
          s.y - s.vy * 8,
          s.x,
          s.y
        );
        grad.addColorStop(0, "rgba(247, 236, 201, 0)");
        grad.addColorStop(1, `rgba(247, 236, 201, ${0.8 * fade})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(s.x - s.vx * 8, s.y - s.vy * 8);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
      }

      // gold dust
      for (const p of particles) {
        p.phase += p.twinkleSpeed;
        p.x += p.speedX;
        p.y += p.speedY;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 110 && dist > 0.001) {
          const force = ((110 - dist) / 110) * 0.35;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const twinkle = 0.5 + 0.5 * Math.sin(p.phase);
        const alpha = p.alpha * (0.45 + 0.55 * twinkle);

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.2);
        grad.addColorStop(0, `rgba(247, 236, 201, ${alpha})`);
        grad.addColorStop(0.4, `rgba(212, 175, 55, ${alpha * 0.65})`);
        grad.addColorStop(1, "rgba(212, 175, 55, 0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);

    if (!reduced) {
      window.addEventListener("mousemove", onMouse);
      canvas.addEventListener("mouseleave", onLeave);
      raf = requestAnimationFrame(draw);
    } else {
      draw();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1]"
    />
  );
}
