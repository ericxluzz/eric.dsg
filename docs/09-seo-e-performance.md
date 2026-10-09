# 09 · SEO e performance

## Metadata
- `layout.tsx`: `metadataBase` (domínio final), `title.template: '%s · Eric Luz'`, default "Eric Luz · Product Designer", description, `openGraph` (locale `pt_BR`, type `website`), `twitter: summary_large_image`.
- Por página: title + description próprios. Publicações: `generateMetadata` com `titulo`, `descricao` e `capa` como OG image.
- Imagem OG padrão 1200×630 (Home): foto do hero sobre `.bg-hero` com "Eric Luz · Product Designer". Pode ser `opengraph-image.tsx` (ImageResponse).
- Ícones: `app/icon.png` (512), `app/apple-icon.png` (180). Sugestão: o mascote em pixel art (`eric-pixel.png`) recortado.
- `sitemap.ts` com todas as rotas + slugs; `robots.ts` liberando tudo.
- JSON-LD `Person` na Home (nome, jobTitle, sameAs LinkedIn, email).
- Canonical automático via `metadataBase`.

## Imagens
- Tudo via `next/image`. Usar sempre o `.webp` quando existir; `.png` duplicados não vão para `public/` (ver lista abaixo).
- Informar `width`/`height` reais ou `fill` + container com aspect-ratio. Nunca imagem sem dimensão.
- `sizes` por contexto: cards da Home `(max-width:767px) 100vw, 33vw`; capa de publicação `100vw`; foto do hero `(max-width:767px) 100vw, 60vw`.
- `priority` apenas na foto do hero (Home) e na capa da publicação.
- PNGs sem par webp (`case-ematr-filas.png`, `ematr-*.png`, `eric-pixel.png`, `eric.png`, `eric-cutout.png`): converter para webp antes (`npx @squoosh/cli` ou `sharp`), qualidade 82.
- A pasta `prototipo/assets/` já foi limpa: só contém o que as páginas usam (ver `13`).

## Fontes
- `next/font/google` Space Grotesk, `weight: ['400','500','600','700']`, `display: 'swap'`, `variable: '--font-space-grotesk'`.
- Poppins, Plus Jakarta Sans, Barlow e Barlow Condensed **só** em `app/exploracoes/[slug]/` (são usadas dentro de ilustrações de blocos). Nunca no layout raiz.

## Orçamento
| Métrica (mobile, 4G) | Alvo |
|---|---|
| LCP | < 2.0s (elemento LCP = foto do hero) |
| CLS | < 0.05 (mascote e imagens com altura reservada) |
| INP | < 150ms |
| JS da Home (gzip) | < 110 KB |
| Peso total da Home | < 1.2 MB |

Cuidados: a animação de entrada da foto não pode atrasar o LCP. Ela começa com opacity 0, então medir; se o LCP piorar, trocar o estado inicial para `opacity:.001` ou remover o blur no mobile.
