/* eslint-disable @typescript-eslint/no-explicit-any -- view model espelha o renderVals() do protótipo */
import { categorias, posts } from '@/content/exploracoes';
import type { Bloco, Post, TipoBloco } from '@/content/types';
import { metaPost, tempoLeitura } from './leitura';

/**
 * Porta do renderVals() de docs/prototipo/Exploracao.dc.html: transforma um Post
 * no modelo que o template (PostView) consome. Mantido o mais literal possível
 * para que cores, numeração e tempos fiquem idênticos ao protótipo.
 */

type Seg = { t: string; w: number | string; c: string; bg: string; pad: string };
export type BlocoView = Bloco & Record<string, any>;

export interface PostViewProps {
  post: Record<string, any>;
  blocks: BlocoView[];
  toc: { texto: string; n: string; href: string }[];
  related: Record<string, any>[];
  relTitle: string;
  ano: number;
}

const PILL: Record<string, [string, string, string]> = {
  'mini-cases': ['#dcf1ec', '#0b5d63', '#0e7c86'],
  processos: ['#eceaff', '#2a1fb3', '#4030ff'],
  reflexoes: ['#feece6', '#9a3412', '#c2410c'],
};
const ACC_DEF: Record<string, [string, string]> = {
  'mini-cases': ['#0b5d63', '#d5f0ea'],
  processos: ['#2a1fb3', '#e4e0ff'],
  reflexoes: ['#9a3412', '#fde0d4'],
};

/** Garante em tempo de compilação que todo `tipo` de bloco tem render. */
const RENDERIZAVEIS = {
  h2: true, p: true, fluxo: true, destaque: true, chips: true, quote: true, roles: true,
  phones: true, tiles: true, process: true, dsboard: true, stat: true, hipoteses: true,
} satisfies Record<TipoBloco, true>;

function deco(x: Post) {
  const c = categorias[x.categoria];
  return { ...x, cat: c.label, bg: c.bg, ink: c.ink, href: '/exploracoes/' + x.slug, leitura: tempoLeitura(x) };
}

export function buildPostView(p: Post, ano: number): PostViewProps {
  let h2n = 0;
  let prevH2 = false;
  const ACC = p.tema?.acc ?? ACC_DEF[p.categoria] ?? ['#2a1fb3', '#e4e0ff'];
  const segs = (txt: string, lead: boolean): Seg[] =>
    String(txt || '')
      .split(/(\*\*[^*]+\*\*)/g)
      .filter(Boolean)
      .map((s) =>
        s.startsWith('**')
          ? { t: s.slice(2, -2), w: 600, c: '#101014', bg: lead ? 'transparent' : ACC[1], pad: lead ? '0' : '1px 4px' }
          : { t: s, w: 'inherit', c: 'inherit', bg: 'transparent', pad: '0' },
      );

  const blocks: BlocoView[] = p.conteudo.map((b0) => {
    if (!RENDERIZAVEIS[b0.tipo]) throw new Error('Bloco sem render: ' + b0.tipo);
    let b: BlocoView = { ...b0 };
    if (b0.tipo === 'h2') {
      h2n++;
      const pc = p.tema?.pill ?? PILL[p.categoria] ?? PILL.processos;
      b = { ...b, num: String(h2n).padStart(2, '0'), anchor: 'sec-' + h2n, kicker: b0.rotulo || 'Seção', pillBg: pc[0], pillInk: pc[1], pillDot: pc[2] };
      prevH2 = true;
    } else if (b0.tipo === 'p') {
      b = { ...b, lead: prevH2 && !b0.normal };
      prevH2 = false;
    } else prevH2 = false;

    const t = b0.tipo;
    const lead = !!b.lead;
    const view: BlocoView = {
      ...b,
      isP: t === 'p', isH2: t === 'h2', isQuote: t === 'quote', isFluxo: t === 'fluxo', isHipoteses: t === 'hipoteses',
      isChips: t === 'chips', isDestaque: t === 'destaque', isTiles: t === 'tiles', isPhones: t === 'phones',
      isDsboard: t === 'dsboard', isRoles: t === 'roles', isProcess: t === 'process', isStat: t === 'stat',
      panel: ACC[1],
      hipItems:
        b0.tipo === 'hipoteses'
          ? b0.itens.map((x) => {
              const win = x.l === 'C';
              return {
                ...x,
                bg: win ? ACC[1] : '#f4f4f6', lBg: win ? ACC[0] : '#fff', lFg: win ? '#fff' : '#101014',
                obsK: x.l === 'B' ? 'Risco levantado' : win ? 'Na avaliação' : 'Questão de uso',
                obsC: x.l === 'B' ? '#9a3412' : win ? ACC[0] : '#3a3a40',
                hasImg: !!x.src, noImg: !x.src && x.l === 'B', isA: x.l === 'A', isC: x.l === 'C',
                ratio: x.retrato ? '512/546' : '1176/460', w: x.retrato ? 'min(100%,340px)' : '100%',
                srcCss: x.src ? 'url("' + x.src + '")' : 'none',
              };
            })
          : [],
      segs: b0.tipo === 'p' ? segs(b0.texto, lead) : [],
      fs: lead ? 'clamp(19px,1.5vw,21px)' : '17px',
      lh: lead ? '1.6' : '1.75',
      col: lead ? '#101014' : '#2f2f35',
      fw: lead ? 500 : 400,
      ls: lead ? '-.012em' : '0',
      fluxoItems:
        b0.tipo === 'fluxo'
          ? b0.itens.map((x, j, a) => (j === a.length - 1 ? { ...x, bg: ACC[0], fg: '#fff', kc: 'rgba(255,255,255,.75)' } : { ...x, bg: ACC[1], fg: '#101014', kc: ACC[0] }))
          : [],
      chipItems:
        b0.tipo === 'chips'
          ? b0.itens.map((x) =>
              typeof x === 'string'
                ? { t: x, dot: ACC[0], sz: '7px', rad: '50%', iconCss: 'none' }
                : { t: x.t, dot: 'transparent', sz: '18px', rad: '0', iconCss: 'url("' + x.icon + '")' },
            )
          : [],
      tileItems:
        b0.tipo === 'tiles'
          ? b0.itens.map((x, j) => ({
              ...x,
              n: String(j + 1).padStart(2, '0'),
              ...(j === 0
                ? { bg: ACC[0], fg: '#fff', kc: 'rgba(255,255,255,.8)' }
                : j === 1
                  ? { bg: '#fff4c2', fg: '#101014', kc: '#7a5c00' }
                  : { bg: ACC[1], fg: '#101014', kc: ACC[0] }),
            }))
          : [],
      ...(b0.tipo === 'destaque'
        ? b0.escuro
          ? { bg: ACC[0], fg: '#fff', sub: 'rgba(255,255,255,.86)', tagBg: 'rgba(255,255,255,.18)', tagFg: '#fff' }
          : { bg: ACC[1], fg: '#101014', sub: '#2f2f35', tagBg: '#fff', tagFg: ACC[0] }
        : {}),
      phoneItems: b0.tipo === 'phones' ? b0.itens.map((x, j) => ({ ...x, n: String(j + 1).padStart(2, '0') })) : [],
      roleItems: (b0.tipo === 'roles' ? b0.itens : []).map((r, j) => ({
        ...r,
        ink: ['#2a1fb3', '#0b5d63', '#5d5d63'][j] || '#5d5d63',
        line: ['#4030ff', '#0b5d63', '#b9b9c2'][j] || '#b9b9c2',
      })),
      flows:
        b0.tipo === 'process'
          ? [b0.antes, b0.depois].map((fl, fi) => ({
              titulo: fl.titulo,
              ink: fi ? '#2a1fb3' : '#5d5d63',
              passos: fl.passos.map((s, si) => {
                const novo = fi === 1 && (b0.depois.novos || []).includes(si);
                return { t: s, n: String(si + 1).padStart(2, '0'), novo, ink: novo ? '#101014' : '#3a3a40', weight: novo ? 600 : 400, numInk: novo ? '#4030ff' : '#9a9aa2' };
              }),
            }))
          : [],
    };
    return view;
  });

  let rel = (p.relacionados || []).map((s) => posts.find((x) => x.slug === s)).filter((x): x is Post => !!x);
  if (!rel.length) rel = posts.filter((x) => x.slug !== p.slug).slice(0, 2);
  const d = deco(p);
  const toc = blocks.filter((b) => b.isH2).map((b) => ({ texto: b.texto as string, n: b.num as string, href: '#' + b.anchor }));

  return {
    toc,
    blocks,
    related: rel.map(deco),
    relTitle: rel.length ? 'Relacionadas' : '',
    ano,
    post: {
      ...d,
      bg: p.tema?.hero || d.bg,
      exemplo: !!p.exemplo,
      meta: metaPost(p),
      tagList: p.tags || [],
      ficha: p.ficha || [],
      hasFicha: !!(p.ficha && p.ficha.length),
      hasLogo: !!p.logo,
      logo: p.logo || '',
      logoBg: p.logoBg || '#fff',
      logoSize: p.logoFill ? '100%' : '84%',
      logoCss: p.logo ? 'url("' + p.logo + '")' : 'none',
      marca: p.marca || p.empresa || '',
      hasCapa: !!p.capa && !p.capaNotebook,
      capaNotebook: !!p.capaNotebook,
      capa: p.capa || '',
      capaCss: p.capa ? 'url("' + p.capa + '")' : 'none',
      capaLegenda: p.capaLegenda || '',
    },
  };
}
