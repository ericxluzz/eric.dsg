# 02 · Arquitetura

## Rotas
| Rota | Protótipo | Render |
|---|---|---|
| `/` | `Portfolio Site.dc.html` | SSG |
| `/sobre` | `Sobre.dc.html` | SSG |
| `/exploracoes` | `Exploracoes.dc.html` | SSG (filtro client-side) |
| `/exploracoes/[slug]` | `Exploracao.dc.html?p=slug` | SSG via `generateStaticParams`, `dynamicParams = false` |
| `/cases/siagres` | `Case SIAGRES.dc.html` | SSG |
| `/cases/e-matriculas` | `Case e-Matriculas.dc.html` | SSG |
| `/cases/eventure` | `Case Eventure.dc.html` | SSG |
| 404 | `404.dc.html` | `app/not-found.tsx` |
| `/cv-eric-luz.pdf` | arquivo estático | `public/` |

Âncoras da Home: `#inicio`, `#sobre`, `#projetos`, `#contato` (manter os mesmos ids).

**Substituir todos os links do protótipo:** `Portfolio Site.dc.html` → `/`, `Sobre.dc.html` → `/sobre`, `Exploracoes.dc.html` → `/exploracoes`, `Exploracao.dc.html?p=x` → `/exploracoes/x`, `Case …dc.html` → `/cases/…`, `assets/x` → `/assets/x`. Links do header em páginas internas para seções da Home usam `/#projetos` etc.

## Estrutura de pastas
```
src/
  app/
    layout.tsx              # <html lang="pt-BR">, fonte, Header, metadata base
    globals.css             # tokens (@theme) + resets + keyframes
    page.tsx                # Home
    sobre/page.tsx
    exploracoes/page.tsx
    exploracoes/[slug]/page.tsx
    exploracoes/[slug]/opengraph-image.tsx   # opcional
    cases/siagres/page.tsx
    cases/e-matriculas/page.tsx
    cases/eventure/page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    layout/   Header.tsx, MobileMenu.tsx, Footer.tsx (rodapé azul de Contato)
    ui/       Pill.tsx, Button.tsx, SectionBadge.tsx, IconTile.tsx, Chip.tsx, GradientText.tsx, ArrowCircle.tsx
    motion/   Reveal.tsx, CountUp.tsx
    mascote/  Mascote.tsx, mascote-element.js, mascote.d.ts
    home/     Hero.tsx, SobreResumo.tsx, ProjetosGrid.tsx, ProjetoCard.tsx, Contato.tsx
    sobre/    Carreira.tsx, Formacao.tsx, Ferramentas.tsx
    exploracoes/  FiltroCategorias.tsx, PostCard.tsx, Sumario.tsx, Ficha.tsx, Relacionados.tsx
    exploracoes/blocos/  BlockRenderer.tsx + um arquivo por tipo de bloco
    cases/    componentes específicos de cada case (prefixo SG*/EM*/EV*)
  content/
    types.ts
    exploracoes.ts          # migrado de exploracoes-data.js
    projetos.ts             # 3 cards da Home
    contato.ts              # WhatsApp, e-mail, LinkedIn, CV (usado na Home e no 404)
    sobre.ts                # carreira, formação, ferramentas
  lib/
    leitura.ts              # tempo de leitura a partir dos blocos
    rich.tsx                # converte **negrito** em <strong>
public/
  assets/ …  cv-eric-luz.pdf  favicon / icon.png / apple-icon.png
```

## Regras de composição
- Uma página = arquivo `page.tsx` que só monta seções. Seções = componentes. Sem lógica de layout em `page.tsx`.
- Dados repetidos (links de contato, projetos) ficam em `content/`, nunca duplicados em JSX.
- Componentes client são folhas pequenas; o resto é Server Component.
