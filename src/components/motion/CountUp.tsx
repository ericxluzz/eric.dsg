'use client';
import { useEffect, useRef, useState } from 'react';

export function CountUp({ to, prefix = '', suffix = '', duration = 1800, delay = 300 }: { to: number; prefix?: string; suffix?: string; duration?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(to); // SSR mostra o valor final (SEO e sem JS)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current; if (!el) return;
    let raf = 0, t0 = 0, timer = 0;
    setV(0);
    const tick = (t: number) => { if (!t0) t0 = t; const p = Math.min((t - t0) / duration, 1); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick); };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); timer = window.setTimeout(() => (raf = requestAnimationFrame(tick)), delay); } });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); clearTimeout(timer); };
  }, [to, duration, delay]);
  return <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>{prefix}{v.toLocaleString('pt-BR')}{suffix}</span>;
}
