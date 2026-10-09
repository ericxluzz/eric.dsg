'use client';
import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

let io: IntersectionObserver | null = null;
function observer() {
  if (io) return io;
  io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io!.unobserve(e.target); }
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  return io;
}

/** Anima os filhos diretos (ou o próprio elemento) ao entrar na tela. stagger = 90ms entre filhos, máx. 5 passos. */
export function Reveal({ as: Tag = 'div', stagger = false, self = false, className, children }: { as?: ElementType; stagger?: boolean; self?: boolean; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = self ? [el] : (Array.from(el.children) as HTMLElement[]).filter((c) => getComputedStyle(c).position !== 'absolute');
    targets.forEach((t, i) => {
      t.classList.add('reveal');
      if (stagger) t.style.transitionDelay = Math.min(i, 5) * 90 + 'ms';
      observer().observe(t);
    });
    return () => targets.forEach((t) => io?.unobserve(t));
  }, [stagger, self]);
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
