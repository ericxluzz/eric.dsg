export type CategoriaId = 'mini-cases' | 'processos' | 'reflexoes';

export interface Categoria { label: string; bg: string; ink: string }

export type Bloco =
  | { tipo: 'h2'; rotulo?: string; texto: string }
  | { tipo: 'h3'; texto: string }
  | { tipo: 'p'; texto: string; normal?: boolean }
  | { tipo: 'fluxo'; itens: { k: string; v: string; d: string }[]; legenda?: string }
  | { tipo: 'destaque'; rotulo?: string; titulo: string; texto?: string; escuro?: boolean }
  | { tipo: 'chips'; titulo?: string; itens: { t: string; icon?: string }[] }
  | { tipo: 'quote'; texto: string }
  | { tipo: 'roles'; itens: { k: string; t: string; d: string }[] }
  | { tipo: 'phones'; itens: { src: string; titulo: string; d?: string }[]; legenda?: string }
  | { tipo: 'tiles'; itens: { k: string; t: string }[] }
  | { tipo: 'process'; antes: Record<string, unknown>; depois: Record<string, unknown>; legenda?: string }
  | { tipo: 'dsboard'; legenda?: string }
  | { tipo: 'stat'; de: string; deLabel: string; para: string; paraLabel: string; contexto?: string; legenda?: string }
  | {
      tipo: 'hipoteses';
      itens: { l: string; t: string; ctx?: string; princ?: string; obs?: string; src?: string; retrato?: boolean; alt?: string }[];
    };
// Ao migrar, refine `process.antes/depois` com a forma real dos dados.

export interface Post {
  id: number;
  slug: string;
  titulo: string;
  descricao: string;
  categoria: CategoriaId;
  empresa: string;
  tags: string[];
  relacionados: string[];
  logo?: string;
  logoFill?: string;
  logoBg?: string;
  capa: string;
  capaLegenda?: string;
  capaNotebook?: boolean;
  cardCapa?: string;
  marca?: string;
  ficha: { k: string; v: string }[];
  conteudo: Bloco[];
  resumo?: unknown;
  tema?: unknown;
  leitura?: number;
  data?: string;
}

export interface Projeto {
  slug: 'siagres' | 'ematr' | 'eventure';
  titulo: string;
  texto: string;
  metrica: string;
  legenda: string;
  imagem: string;
  alt: string;
  href: string | null;
}
