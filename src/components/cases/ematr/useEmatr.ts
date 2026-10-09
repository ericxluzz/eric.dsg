'use client';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/useReducedMotion';

/**
 * Estado interativo do case e-Matrículas (porta do DCLogic do protótipo):
 * barra de progresso de leitura, rolagem automática da landing no hero,
 * linha do tempo do status (04), lightbox dos fluxos (02) e contadores (06).
 * Com prefers-reduced-motion tudo fica no estado final, sem animar.
 */
const BASE = [
  { title: 'Solicitado', desc: 'Pedido recebido, com data e responsável.' },
  { title: 'Em análise', desc: 'Documentos e cotas validados pela secretaria, com observações.' },
  { title: 'Aprovado', desc: 'A família sabe quando ir à escola.' },
  { title: 'Matriculado', desc: 'Vaga confirmada.' },
];
const ANTES = '/assets/ematr-fluxo-antes.webp';
const DEPOIS = '/assets/ematr-fluxo-depois.webp';

type HeroScroller = HTMLElement & { _hover?: boolean };

export function useEmatr() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [ct, setCt] = useState(0);
  const [lb, setLb] = useState<string | null>(null);
  const reduced = useReducedMotion();

  // Progresso de leitura
  useEffect(() => {
    const onScroll = () => {
      const d = document.documentElement;
      const max = d.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.round((window.scrollY / max) * 1000) / 10 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Contadores dos resultados: começam quando #res-grid entra na tela
  useEffect(() => {
    const g = document.getElementById('res-grid');
    if (!g) return;
    if (reduced) return;
    let raf = 0;
    const io = new IntersectionObserver(
      (en) => {
        if (!en.some((x) => x.isIntersecting)) return;
        io.disconnect();
        const t0 = performance.now();
        const D = 1800;
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / D);
          setCt(1 - Math.pow(1 - k, 3));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    io.observe(g);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [reduced]);

  // Rolagem automática da landing no hero (pausa no hover/toque)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const sc = document.getElementById('hero-scroll') as HeroScroller | null;
    if (!sc) return;
    let wait = 90;
    let last = performance.now();
    let pos = 0;
    let raf = 0;
    const enter = () => { sc._hover = true; };
    const leave = () => { sc._hover = false; pos = sc.scrollTop; wait = 60; };
    const tEnd = () => { sc._hover = false; pos = sc.scrollTop; wait = 120; };
    sc.addEventListener('mouseenter', enter);
    sc.addEventListener('mouseleave', leave);
    sc.addEventListener('touchstart', enter, { passive: true });
    sc.addEventListener('touchend', tEnd, { passive: true });
    const loop = (t: number) => {
      const dt = Math.min(64, t - last);
      last = t;
      const max = sc.scrollHeight - sc.clientHeight;
      if (!sc._hover && max > 0) {
        if (wait > 0) wait--;
        else if (pos >= max) { pos = 0; sc.scrollTo({ top: 0, behavior: 'smooth' }); wait = 140; }
        else { pos = Math.min(max, pos + dt * 0.06); sc.scrollTop = pos; }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      sc.removeEventListener('mouseenter', enter);
      sc.removeEventListener('mouseleave', leave);
      sc.removeEventListener('touchstart', enter);
      sc.removeEventListener('touchend', tEnd);
    };
  }, []);

  // Linha do tempo do status: avança a cada 1,5s enquanto visível
  useEffect(() => {
    if (reduced) return;
    let hold = 0;
    const id = window.setInterval(() => {
      const el = document.querySelector('#experiencia ol');
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      setPhase((p) => {
        if (p === 4) {
          if (++hold < 2) return p;
          hold = 0;
          return 0;
        }
        return p + 1;
      });
    }, 1500);
    return () => clearInterval(id);
  }, [reduced]);

  // Lightbox: Esc fecha
  useEffect(() => {
    if (!lb) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLb(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lb]);

  // Com reduced motion: estado final (todas as etapas concluídas, números finais)
  const ph = reduced ? 4 : phase;
  const k = reduced ? 1 : ct;
  const steps = BASE.map((b, i) => {
    const done = i < ph || ph === 4;
    const active = i === ph && ph < 4;
    const last = i === BASE.length - 1;
    return {
      ...b,
      bg: done ? '#22c55e' : active ? '#f97316' : '#fff',
      border: done ? '#22c55e' : active ? '#f97316' : '#c9c9cf',
      glow: active ? '0 0 0 6px rgba(249,115,22,.18)' : done && last ? '0 0 0 6px rgba(34,197,94,.18)' : '0 0 0 0 transparent',
      scale: active ? 1.12 : 1,
      checkOp: done ? 1 : 0, clockOp: active ? 1 : 0, dotOp: !done && !active ? 1 : 0,
      fill: i < ph ? '100%' : '0%',
      lineDisplay: last ? 'none' : 'block',
      pb: last ? '0px' : '18px',
      textOp: done || active ? 1 : 0.5,
      tag: active ? 'Agora' : 'Concluído',
      tagDisplay: active || (done && last) ? 'inline-block' : 'none',
      tagBg: active ? '#fff1e6' : '#e7f6ec',
      tagColor: active ? '#c2410c' : '#15803d',
    };
  });
  const fmt = (n: number) => Math.round(n).toLocaleString('pt-BR');

  return {
    progress,
    steps,
    r1: fmt(40934 * k), r2: fmt(50 * k), r3: fmt(120 * (1 - k)), r4: fmt(10 * k),
    lightboxOpen: !!lb,
    lbAntes: lb === ANTES ? 'block' : 'none',
    lbDepois: lb === DEPOIS ? 'block' : 'none',
    openAntes: () => setLb(ANTES),
    openDepois: () => setLb(DEPOIS),
    closeLightbox: () => setLb(null),
  };
}
