# 03 · Design tokens

Implementação pronta em `codigo/globals.css`. Este arquivo explica o uso.

## Cores
| Token Tailwind | Hex | Uso |
|---|---|---|
| `ink` | #101014 | Texto principal, botão escuro, círculo ↗ |
| `bg` | #fafafc | Fundo das páginas |
| `primary` | #4030ff | Accent, seção Contato, hover de links, focus ring |
| `primary-ink` | #2a1fb3 | Texto sobre `primary-tint` |
| `primary-tint` | #eceaff | Pills, badges, hover do nav, ícone-tile |
| `violet` | #6929ff | Eyebrows, fim do gradiente |
| `blue` | #1239ff | Início do gradiente de texto |
| `text-2` | #3a3a40 | Parágrafos / lead |
| `text-3` | #4a4a52 | Secundário |
| `text-4` | #5d5d63 | Meta |
| `text-5` | #6b6b72 | Legendas |
| `line` | #e1e1e6 | Divisórias |
| `line-2` | #d4d4d7 | Borda de chips |
| `on-primary` | #e4e1ff | Texto suave sobre #4030ff |
| `on-primary-2` | #d4cfff | Labels sobre #4030ff |

Cards de projeto (fundo / hover / gradiente da imagem):
- `siagres` #e3f2e7 / #d4ebdb / `135deg #0a4a24 → #0b6b32 → #2f9a55`

Verde do produto SIAGRES (usar só no case e no card): `#0b5e2a` (sólido), `#0a3d1f` (texto escuro / fundo do fluxo), `#e3f2e7` (tint), `#f0f8f2` (tint claro), `#c9ecd4` / `#dff3e5` (texto sobre verde), `#4ade80` / `#86efac` (destaque animado no fluxo).
- `ematr` #dcf3f0 / #cdeeea / `135deg #0e7c86 → #14a3a8 → #5fd0c4`
- `eventure` #ece6ff / #e2daff / `135deg #3a12b8 → #5b21e6 → #8b5cf6`

Categorias (bg / ink): `mini-cases` #e5f5f0/#0b5d63 · `processos` #eceaff/#2a1fb3 · `reflexoes` #feece6/#9a3412. **Fonte da verdade: `content/exploracoes.ts`**, não duplicar no CSS.

Gradientes (únicos hex permitidos fora do `@theme`, já como utilitários em `globals.css`):
- `.bg-hero`: `linear-gradient(135deg,#07165c 0%,#1239ff 38%,#4030ff 62%,#6929ff 82%,#8129d9 100%)` + glow `radial-gradient(ellipse 42% 55% at 88% 55%, rgba(150,160,255,.55), transparent 70%)`
- `.text-gradient`: `linear-gradient(90deg,#1239ff,#6929ff)` + `background-clip:text`

## Tipografia
Família: Space Grotesk 400/500/600/700 (`--font-sans`). Mono: `ui-monospace, SFMono-Regular, Menlo, monospace`.
Escala (fluida, copiar exatamente):
| Estilo | Peso | Tamanho | lh | ls |
|---|---|---|---|---|
| H1 hero | 500 | clamp(44px,4.8vw,84px) | .95 | −.04em |
| H2 seção | 500 | clamp(36px,3.6vw,60px) (variações no protótipo até clamp(40px,4.8vw,76px)) | .98–1 | −.045em |
| H2 Contato | 500 | clamp(40px,5.2vw,84px) | .95 | −.05em |
| Frase hero direita | 600 | clamp(26px,2.4vw,42px) | — | — |
| H3 card | 500 | clamp(21px,1.6vw,26px) | 1.15 | −.025em |
| Lead | 400 | clamp(17px,1.3vw,20px) | 1.6 | — |
| Corpo | 400 | 15px | 1.55 | — |
| Eyebrow | 600 | 12px uppercase | — | .14em |
| Métrica card | 600 | clamp(22px,1.7vw,28px) | — | −.03em, `tabular-nums` |

Títulos: `text-wrap: balance`. Parágrafos: `text-wrap: pretty`. Lead `max-width: 52ch`.
Os valores `clamp()` variam entre seções: **sempre conferir o protótipo da tela**; criar classes utilitárias (`.h1-hero`, `.h2-section`…) só para os que se repetem.

## Raios
`full` 999px (pills/botões) · `card` 32px · `card-img` 22px · `photo` 28px · `panel` 24px (menu mobile) · `tile` 12px.

## Espaço
Padding lateral de seção: `clamp(20px,5vw,80px)` → utilitário `.px-section`. Vertical: `clamp(72px,8vw,120px)` → `.py-section`. Container do header: max 1280px.

## Sombras e efeitos
- Header: fundo `rgba(255,255,255,.86)`, `backdrop-filter: blur(14px)`, borda `1px rgba(16,16,20,.08)`.
- Foto hero: `drop-shadow(0 20px 40px rgba(7,22,92,.25))`.
- Menu mobile: `0 24px 60px rgba(16,16,20,.18)`; véu `rgba(16,16,20,.28)`.
- Balão do mascote: borda 2px #101014 + `3px 3px 0 #101014`.

## Breakpoint
Um só: **767px**. Em Tailwind v4: `@custom-variant mob (@media (max-width: 767px));` → classes `mob:…`. O resto do layout é fluido (`clamp`, `auto-fit/minmax`).

## Sobre o design system "Industry" (`_ds/`)
Não é a identidade do site. Só aparece dentro do bloco `dsboard` de uma publicação (ilustração com Barlow/Barlow Condensed). **Não importar `_ds/styles.css` em produção**; recriar o bloco com estilos locais.
