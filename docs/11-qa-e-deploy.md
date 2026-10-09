# 11 · QA e deploy

## Validação automática
- `pnpm check` (lint + typecheck + build) no CI da Vercel: build falha = deploy bloqueado.
- `scripts/check-content.ts` (rodar no `prebuild`): slugs únicos; `relacionados` existem; todo `src`/`capa`/`logo` existe em `public/`; categoria válida.
- Opcional: Playwright com screenshots das rotas em 390 e 1440 para regressão visual.

## Checklist manual por página
- [ ] Lado a lado com o protótipo em 1440 / 1024 / 768 / 390 / 320px
- [ ] Copy idêntica (acentos, pontuação)
- [ ] Todos os links levam ao destino certo (incluindo âncoras a partir de páginas internas)
- [ ] Reveal ocorre uma vez, sem flash
- [ ] Mascote aparece no lugar certo, anima só visível, some no mobile (exceto hi)
- [ ] `prefers-reduced-motion` ativado: nada se move
- [ ] Teclado: Tab percorre tudo, foco visível, Esc fecha menu
- [ ] Zero erro/warning no console
- [ ] Lighthouse mobile ≥ 95 nas 4 categorias

## Navegadores
Chrome, Safari (macOS + iOS), Firefox, Edge, Samsung Internet (Android). Atenção ao Safari iOS: `backdrop-filter` (precisa de `-webkit-`), `100vh` (usar `100svh` no hero), subgrid (suportado a partir do 16).

## Deploy (Vercel)
1. Import do repo → framework Next.js detectado; build `pnpm build`.
2. Preview por PR; produção = branch `main`.
3. Domínio: adicionar em Settings → Domains; redirecionar `www` → apex (ou o contrário, escolher um).
4. Atualizar `metadataBase` com o domínio final antes do merge de lançamento.
5. Pós-lançamento: enviar sitemap no Google Search Console; testar OG no LinkedIn Post Inspector e no WhatsApp.
