export type CategoriaId = 'mini-cases' | 'processos' | 'reflexoes';

export interface Categoria { label: string; bg: string; ink: string }

export type Bloco =
  | { tipo: 'h2'; rotulo?: string; texto: string }
  | { tipo: 'p'; texto: string; normal?: boolean }
  | { tipo: 'fluxo'; itens: { k: string; v: string; d: string }[]; legenda?: string }
  | { tipo: 'destaque'; rotulo?: string; titulo: string; texto?: string; escuro?: boolean }
  | { tipo: 'chips'; titulo?: string; itens: (string | { t: string; icon: string })[] }
  | { tipo: 'quote'; texto: string }
  | { tipo: 'roles'; itens: { k: string; t: string; d: string }[] }
  | { tipo: 'phones'; itens: { src: string; titulo: string; d?: string }[]; legenda?: string }
  | { tipo: 'tiles'; itens: { k: string; t: string }[] }
  | {
      tipo: 'process';
      antes: { titulo: string; passos: string[] };
      depois: { titulo: string; passos: string[]; novos?: number[] };
      legenda?: string;
    }
  | { tipo: 'dsboard'; legenda?: string }
  | { tipo: 'stat'; de: string; deLabel: string; para: string; paraLabel: string; contexto?: string; legenda?: string }
  | {
      tipo: 'hipoteses';
      itens: { l: string; t: string; ctx?: string; princ?: string; obs?: string; src?: string; retrato?: boolean; alt?: string }[];
    };

export type TipoBloco = Bloco['tipo'];

export interface Post {
  id: number;
  slug: string;
  titulo: string;
  descricao: string;
  /** Texto curto usado na listagem (cai para `descricao`). */
  resumo?: string;
  categoria: CategoriaId;
  empresa: string;
  tags: string[];
  relacionados: string[];
  logo?: string;
  logoFill?: boolean;
  logoBg?: string;
  capa?: string;
  capaLegenda?: string;
  capaNotebook?: boolean;
  cardCapa?: string;
  marca?: string;
  ficha: { k: string; v: string }[];
  conteudo: Bloco[];
  /** Cores próprias da publicação: pill [bg, ink, dot], acc [forte, suave], hero (fundo). */
  tema?: { pill?: [string, string, string]; acc?: [string, string]; hero?: string };
  /** Ex.: "6 min". Sem valor, é calculado a partir dos blocos. */
  leitura?: string;
  data?: string;
  exemplo?: boolean;
}
