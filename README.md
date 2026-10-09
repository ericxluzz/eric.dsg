# Portfólio Eric Luz

Site de produção do portfólio, construído a partir dos protótipos em `docs/prototipo/` (fonte da verdade visual) seguindo o plano em `docs/`.

**Stack:** Next.js (App Router, 100% estático) · TypeScript strict · Tailwind CSS v4 · deploy na Vercel.

## Comandos

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm check        # lint + typecheck + build (o prebuild roda check-assets e check-content)
```

Para comparar com o protótipo lado a lado, copie a pasta `prototipo/` completa do zip do Claude Design para `docs/prototipo-full/` (ignorada pelo git) e rode `npx serve -l 4000 docs/prototipo-full`.

## Estrutura

| Rota | Protótipo |
|---|---|
| `/` | `Portfolio Site.dc.html` |
| `/sobre` | `Sobre.dc.html` |
| `/exploracoes` e `/exploracoes/[slug]` | `Exploracoes.dc.html` / `Exploracao.dc.html` |
| `/cases/siagres`, `/cases/e-matriculas`, `/cases/eventure` | `Case *.dc.html` |
| 404 | `404.dc.html` |

- Publicações das Explorações: `src/content/exploracoes.ts` (tipado; adicione um objeto ao array).
- Contato e domínio: `src/content/contato.ts` (`NEXT_PUBLIC_SITE_URL` sobrescreve o domínio).
- Tokens, hovers e regras mobile: `src/app/globals.css`.
- Mascote pixel art: `src/components/mascote/`.
