'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Porta do reveal.js do protótipo: os filhos diretos do container de cada seção
 * (section > div > *) entram com opacity 0→1 e translateY 28→0. Filhos de grids
 * (2 a 8 itens) recebem stagger de 90ms (máx. 5 passos). Elementos absolute/fixed
 * ou com transform próprio não animam. Cada elemento anima uma vez.
 */
export function RevealScanner() {
  const pathname = usePathname();
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const seen = new WeakSet<Element>();
    const timers: number[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue;
          const el = en.target as HTMLElement;
          el.style.opacity = '1';
          el.style.transform = 'none';
          io.unobserve(el);
          timers.push(window.setTimeout(() => { el.style.transition = ''; el.style.willChange = ''; }, 1200));
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    const prep = (el: HTMLElement, delay: number) => {
      if (seen.has(el)) return;
      seen.add(el);
      const cs = getComputedStyle(el);
      if (cs.position === 'absolute' || cs.position === 'fixed' || (el.style.transform && el.style.transform !== 'none')) return;
      // Já visível quando o script roda: não esconder (evita o "pisca" visível → oculto → fade)
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.willChange = 'opacity, transform';
      el.style.transition = `opacity .8s cubic-bezier(.2,.7,.2,1) ${delay}ms, transform .9s cubic-bezier(.2,.7,.2,1) ${delay}ms`;
      io.observe(el);
    };
    const scan = () => {
      // O hero (#inicio) tem só a animação própria da foto (docs/07), sem reveal.
      document.querySelectorAll<HTMLElement>('main section:not(#inicio) > div:not([style*="absolute"]) > *').forEach((el) => {
        if (seen.has(el)) return;
        const cs = getComputedStyle(el);
        const kids = el.children;
        if (cs.display === 'grid' && kids.length > 1 && kids.length <= 8) {
          seen.add(el);
          Array.from(kids).forEach((k, i) => prep(k as HTMLElement, Math.min(i, 5) * 90));
        } else prep(el, 0);
      });
    };
    let t = 0;
    const schedule = () => { clearTimeout(t); t = window.setTimeout(scan, 120); };
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true });
    schedule();
    return () => { mo.disconnect(); io.disconnect(); clearTimeout(t); timers.forEach(clearTimeout); };
  }, [pathname]);
  return null;
}
