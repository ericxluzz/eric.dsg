'use client';
import { useState } from 'react';

const TABS = ['inicio', 'eventos', 'ingressos', 'financeiro'] as const;
type Tab = (typeof TABS)[number];

/** Tabs do painel do gestor (06 Soluções): troca a tela com crossfade. */
export function useEventure() {
  const [tab, setTab] = useState<Tab>('inicio');
  const v = (k: Tab) => {
    const on = tab === k;
    return { go: () => setTab(k), bg: on ? '#5b16e0' : '#efe9ff', fg: on ? '#fff' : '#3a0fb0', op: on ? 1 : 0, on };
  };
  const [a, b, c, d] = TABS.map(v);
  return {
    tab_inicio: a.go, bg_inicio: a.bg, fg_inicio: a.fg, op_inicio: a.op, on_inicio: a.on,
    tab_eventos: b.go, bg_eventos: b.bg, fg_eventos: b.fg, op_eventos: b.op, on_eventos: b.on,
    tab_ingressos: c.go, bg_ingressos: c.bg, fg_ingressos: c.fg, op_ingressos: c.op, on_ingressos: c.on,
    tab_financeiro: d.go, bg_financeiro: d.bg, fg_financeiro: d.fg, op_financeiro: d.op, on_financeiro: d.on,
  };
}
