# 04 · Componentes

Server Component salvo onde marcado **[client]**.

## Globais
| Componente | Props | Notas |
|---|---|---|
| `Header` **[client]** | `variant?: 'home' \| 'interna'` | Pill fixa `top:16px`, max 1280px, blur. Logo: Lucide `MousePointerClick` #4030ff + "Eric Luz" (700, 20px). Links: Início · Sobre · Projetos · Explorações (15px/500, padding 10×14, hover tint) + CTA "Contato" (pill ink → hover primary). Link ativo pela rota (`usePathname`). |
| `MobileMenu` **[client]** | `links`, `open`, `onClose` | Ver `08`. |
| `Reveal` **[client]** | `as?`, `stagger?: boolean`, `children` | IntersectionObserver; ver `07`. |
| `CountUp` **[client]** | `to: number`, `prefix?`, `suffix?`, `duration=1800`, `delay=300` | Começa quando visível; `tabular-nums`; com reduced-motion mostra o valor final direto. |
| `Mascote` **[client]** | `mode: 'walk'\|'hi'\|'work'`, `size`, `speed?`, `text?`, `mobile?: 'hide'\|'show'` | Wrapper do Web Component. Ver `07`. |
| `SectionBadge` | `n: string`, `label: string` | Pill tint com círculo primary + número ("01 Sobre mim"). Variante `onPrimary` para Contato. |
| `Pill` | `tone: 'tint'\|'glass'\|'outline'`, `dot?: boolean` | "Product Designer", "Disponível para projetos" (dot pulsante). |
| `Button` | `variant: 'light'\|'outlineLight'\|'dark'`, `href`, `icon?`, `download?` | Raio full. |
| `IconTile` | `icon` | 44px, raio 12, bg tint, ícone primary 1.5. |
| `Chip` | `icon?`, `children` | Borda line-2, raio full. |
| `GradientText` | `children` | `<span class="text-gradient">`. |
| `ArrowCircle` | `size=44`, `tone` | Círculo ink com ↗. |
| `RichText` | `text: string` | Converte `**x**` em `<strong>`. Único parser permitido; sem `dangerouslySetInnerHTML`. |

## Home
`Hero`, `ImpactStats` (usa CountUp), `SobreResumo`, `ProjetosGrid` + `ProjetoCard`, `Contato` (inclui lista de contato, mascote walk, rodapé, nota de Design Engineering).

`ProjetoCard` usa **CSS subgrid**: o grid pai define 4 linhas implícitas por card (`grid-row: span 4; grid-template-rows: subgrid`) para alinhar imagem, título, texto e rodapé entre os cards. Fallback desnecessário (suporte amplo).

## Sobre
`Carreira` (timeline com logos de `/assets/logos/`, mascote work size 2 apoiado na linha), `Formacao`, `Ferramentas`.

## Explorações
`FiltroCategorias` **[client]** (role="tablist", estado da categoria, sincroniza com `?cat=` via `useSearchParams` envolto em `<Suspense>`), `PostCard`, `Ficha`, `Sumario` **[client]** (sticky + scrollspy; no mobile vira chips horizontais), `Relacionados`, `BlockRenderer` (switch exaustivo por `tipo`; o `never` do TS garante que nenhum tipo fique sem render).

## Cases
Cada case tem componentes próprios (prefixo `EM`/`EV`). Reutilizar `SectionBadge`, `Reveal`, `RichText`. Não tentar generalizar os dois cases num template: o layout deles é diferente de propósito.
