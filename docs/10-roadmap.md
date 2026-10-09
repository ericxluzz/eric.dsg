# 10 · Roadmap

Cada fase termina com deploy de preview na Vercel e comparação visual com o protótipo. Uma fase só começa quando a anterior cumpre a **Definição de Pronto (DoP)**.

## Fase 0: Fundação (~0,5 dia)
- [ ] Criar projeto (01), configurar ESLint/Prettier, `.nvmrc`, `pnpm check`.
- [ ] `globals.css` com tokens; fonte; `layout.tsx` com `lang`, script `js`, skip-link.
- [ ] Copiar assets, CV; `fetch-icons`; `check-assets` e `check-content` no prebuild (00).
- [ ] Repo + Vercel conectados.
**DoP:** `pnpm check` verde; preview no ar com página em branco estilizada.

## Fase 1: Base de UI (~1 dia)
- [ ] `ui/*` (Pill, Button, SectionBadge, IconTile, Chip, GradientText, ArrowCircle, RichText).
- [ ] `Header` + `MobileMenu` (08) completos.
- [ ] `Reveal`, `CountUp`.
- [ ] `Mascote` + ajustes no `mascote-element.js` (07).
- [ ] `content/contato.ts`, `content/projetos.ts`.
**DoP:** página `/dev/kitchen-sink` (removida antes do lançamento) mostrando todos os componentes, os 3 modos do mascote e o menu mobile funcionando.

## Fase 2: Home (~1,5 dia)
- [ ] Hero (com animação da foto e contador), Sobre, Projetos (subgrid), Contato (mascote, rodapé, nota).
**DoP:** aceite de `05` para a Home em 4 larguras; Lighthouse ≥ 95.

## Fase 3: Sobre + 404 (~1 dia)
- [ ] `content/sobre.ts`, Carreira, Formação, Ferramentas.
- [ ] `not-found.tsx`.
**DoP:** aceite de `05`.

## Fase 4: Explorações (~2,5 dias)
- [ ] Migrar dados (06) + `scripts/check-content.ts`.
- [ ] Listagem + filtro.
- [ ] Página do post: capa, ficha, sumário/scrollspy, relacionados, mascote.
- [ ] `BlockRenderer` + os 13 blocos usados.
- [ ] `generateStaticParams`, `generateMetadata`, redirect `?p=`.
**DoP:** os 3 posts idênticos ao protótipo; slug inválido → 404.

## Fase 5: Cases (~4 dias)
- [ ] SIAGRES (11 seções; animação do fluxo e tabs do cadastro são client).
- [ ] e-Matrículas (7 seções + próximo case).
- [ ] Eventure (9 seções + próximo case).
- [ ] Ordem do "Próximo case": SIAGRES → e-Matrículas → Eventure → SIAGRES.
**DoP:** aceite de `05`; imagens otimizadas; sem CLS.

## Fase 6: SEO, polish e lançamento (~1 dia)
- [ ] Metadata, OG, ícones, sitemap, robots, JSON-LD.
- [ ] Analytics (opcional).
- [ ] QA completo (11), remover `/dev`.
- [ ] Domínio + produção.
**DoP:** checklist de `11` 100% marcado.

Total estimado: **~11,5 dias úteis** de uma pessoa.
