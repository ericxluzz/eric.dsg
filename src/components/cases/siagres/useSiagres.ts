'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Estado interativo do case SIAGRES (porta do DCLogic do protótipo):
 * - 06 Fluxo completo: 6 etapas de 5,6s em loop, só roda visível (IO .3),
 *   pausável; com reduced-motion fica parado e as etapas são clicáveis.
 * - 07 Cadastro de MTR: 3 tabs com crossfade.
 * - 08 Acompanhamento: destaque que percorre 5 marcadores a cada 3,6s.
 */
const DUR = 5600;

const STEPS = [
  { title: 'Emissão do MTR', actor: 'Gerador', desc: 'O cadastro em quatro etapas reúne tipo de resíduo, detalhes técnicos, logística e observações.', pill: ['Emitido', '#e3f2e7', '#0b5e2a'], web: 1, screen: ['/assets/siag-cad-01.webp', 'Cadastro de MTR · web', 'Cadastro de MTR no web, etapa 1'] },
  { title: 'Confirmações', actor: 'Todos', desc: 'Gerador, transportador e destinador confirmam a participação, e cada um vê o status dos outros.', pill: ['Aguardando', '#ffedd5', '#9a3412'], web: 0, screen: ['/assets/siag-m-gerador-coleta.webp', 'Confirmar participação · app', 'App com gerador confirmado e ação de confirmar participação'] },
  { title: 'Coleta', actor: 'Transportador', desc: 'Os lotes para coletar aparecem com código, classe, peso e tratamento, prontos para a conferência.', pill: ['Em transporte', '#e3f2e7', '#0b5e2a'], web: 0, screen: ['/assets/siag-m-lotes-coleta.webp', 'Lotes para coletar · app', 'Lista de lotes para coletar no app'] },
  { title: 'Chegada ao destino', actor: 'Transportador', desc: 'O resíduo chega à unidade de tratamento e o evento entra no histórico do documento.', pill: ['No destino', '#e3f2e7', '#0b5e2a'], web: 0, screen: ['/assets/siag-m-lotes-receb.webp', 'Lotes para recebimento · app', 'Lista de lotes para recebimento no app'] },
  { title: 'Recebimento', actor: 'Destinador', desc: 'Confirma o recebimento ou recebe com ressalva. Uma diferença de peso fica sinalizada no lote.', pill: ['Divergência de peso', '#ffedd5', '#9a3412'], web: 0, screen: ['/assets/siag-m-transportador.webp', 'Confirmar recebimento · app', 'App com confirmar recebimento ou receber com ressalva'] },
  { title: 'Pesagem e CDF', actor: 'Destinador', desc: 'Com a pesagem final aprovada, a emissão do CDF é liberada e o percurso inteiro fica no histórico.', pill: ['CDF liberado', '#e3f2e7', '#0b5e2a'], web: 1, screen: ['/assets/siag-detalhe.webp', 'Detalhamento e histórico · web', 'Detalhamento do MTR com histórico'] },
] as const;

const MARKS = [
  { t: 'Identificação e status', d: 'Número, emissão e situação no topo.', l: '21.5%', tp: '10.5%', w: '77%', hh: '6.5%' },
  { t: 'Resíduos', d: 'Divergência de peso em destaque.', l: '22%', tp: '18.3%', w: '76.5%', hh: '14.6%' },
  { t: 'Ação pendente', d: 'O que falta, explicado em texto.', l: '22%', tp: '34.8%', w: '76.5%', hh: '7%' },
  { t: 'Participantes', d: 'Cada um com seu status.', l: '22%', tp: '43.6%', w: '76.5%', hh: '31.6%' },
  { t: 'Histórico', d: 'Os eventos em ordem.', l: '22%', tp: '76%', w: '76.5%', hh: '22%' },
];

const CAPS = {
  c1: 'Etapa 1: a categoria do resíduo e a opção de armazenamento temporário vêm antes de qualquer detalhe técnico.',
  c2: 'Etapa 2: a escolha anterior limita o transporte a um tipo de resíduo, e o aviso aparece antes do preenchimento.',
  c3: 'Etapa 2 preenchida: o resíduo vira um resumo legível, e o peso total aparece em relação à capacidade.',
};
type Tab = keyof typeof CAPS;

export function useSiagres() {
  const [tab, setTab] = useState<Tab>('c1');
  const [mk, setMk] = useState(0);
  const [mkAuto, setMkAuto] = useState(true);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [fill, setFill] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const playingRef = useRef(true);
  const visibleRef = useRef(false);
  const stepRef = useRef(0);
  const mkAutoRef = useRef(true);
  const timer = useRef(0);
  const raf = useRef(0);

  const go = useCallback(function go(i: number) {
    clearTimeout(timer.current);
    cancelAnimationFrame(raf.current);
    stepRef.current = i;
    setStep(i);
    if (!playingRef.current || !visibleRef.current) {
      setFill(true);
      return;
    }
    setFill(false);
    raf.current = requestAnimationFrame(() => {
      raf.current = requestAnimationFrame(() => setFill(true));
    });
    timer.current = window.setTimeout(() => go((i + 1) % STEPS.length), DUR);
  }, []);

  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let mkTimer = 0;
    if (reduce) {
      playingRef.current = false;
      mkAutoRef.current = false;
      setPlaying(false);
      setFill(true);
      setMkAuto(false);
    } else {
      mkTimer = window.setInterval(() => {
        if (mkAutoRef.current) setMk((m) => (m + 1) % MARKS.length);
      }, 3600);
    }
    const el = stageRef.current;
    let io: IntersectionObserver | undefined;
    if (el) {
      io = new IntersectionObserver(
        ([e]) => {
          const was = visibleRef.current;
          visibleRef.current = e.isIntersecting;
          if (e.isIntersecting && !was) go(stepRef.current);
          if (!e.isIntersecting) clearTimeout(timer.current);
        },
        { threshold: 0.3 },
      );
      io.observe(el);
    }
    return () => {
      clearInterval(mkTimer);
      clearTimeout(timer.current);
      cancelAnimationFrame(raf.current);
      io?.disconnect();
    };
  }, [go]);

  const s = STEPS[step];
  const m = MARKS[mk];
  const tabVals = (k: Tab) => {
    const on = tab === k;
    return { go: () => setTab(k), bg: on ? '#0b5e2a' : '#fff', fg: on ? '#fff' : '#0b5e2a', op: on ? 1 : 0, on };
  };
  const t1 = tabVals('c1');
  const t2 = tabVals('c2');
  const t3 = tabVals('c3');

  return {
    stageRef,
    capCad: CAPS[tab],
    tab_c1: t1.go, bg_c1: t1.bg, fg_c1: t1.fg, op_c1: t1.op, on_c1: t1.on,
    tab_c2: t2.go, bg_c2: t2.bg, fg_c2: t2.fg, op_c2: t2.op, on_c2: t2.on,
    tab_c3: t3.go, bg_c3: t3.bg, fg_c3: t3.fg, op_c3: t3.op, on_c3: t3.on,
    hl: { l: m.l, t: m.tp, w: m.w, h: m.hh, label: mk + 1 + ' · ' + m.t },
    marks: MARKS.map((x, i) => {
      const on = i === mk;
      return {
        n: i + 1, t: x.t, d: x.d,
        bg: on ? '#4030ff' : '#eceaff', fg: on ? '#fff' : '#2a1fb3', tc: on ? '#101014' : '#5d5d63',
        go: () => {
          if (mk !== i || mkAuto) {
            mkAutoRef.current = false;
            setMk(i);
            setMkAuto(false);
          }
        },
      };
    }),
    stepScreen: 'Tela real · ' + s.screen[1],
    playLabel: playing ? 'Pausar' : 'Reproduzir',
    togglePlay: () => {
      playingRef.current = !playing;
      setPlaying(!playing);
      go(step);
    },
    screens: STEPS.map((x, i) => ({
      src: x.screen[0], alt: x.screen[2], op: i === step ? 1 : 0, y: i === step ? '0px' : '16px',
      l: x.web ? '8%' : '31%', t: x.web ? '12%' : '8%', w: x.web ? '108%' : '38%', r: x.web ? '12px 0 0 0' : '18px',
    })),
    steps: STEPS.map((x, i) => ({
      n: String(i + 1).padStart(2, '0'), title: x.title, actor: x.actor, desc: x.desc,
      pill: x.pill[0], pillBg: x.pill[1], pillFg: x.pill[2],
      active: i === step, on: i === step,
      fg: i === step ? '#101014' : '#6b6b72', nc: i === step ? '#0b5e2a' : '#9a9aa2',
      fill: i === step ? (fill ? '100%' : '0%') : '0%',
      tr: i === step && playing && fill ? 'width ' + DUR + 'ms linear' : 'none',
      go: () => go(i),
    })),
  };
}
