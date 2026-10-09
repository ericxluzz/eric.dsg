# Regras do projeto (portfólio Eric Luz)

- Fonte da verdade visual: `desenvolvimento/prototipo/*.dc.html`. Antes de implementar uma tela, abra o protótipo e copie valores exatos (px, clamp(), cores, copy). Não invente nem "melhore".
- Copy em PT-BR, exatamente como no protótipo (acentos, travessões, pontuação). Não usar em-dash "—" onde o protótipo usa "·" ou ":".
- Stack: Next.js App Router, TypeScript strict, Tailwind v4, deploy Vercel. Sem bibliotecas de UI (shadcn, MUI etc.). Ícones: `lucide-react` com `strokeWidth={1.5}`.
- Tokens só via `@theme` de `src/app/globals.css`. Proibido hex solto em componentes, exceto os gradientes documentados em `03-design-tokens.md`.
- Server Components por padrão. `"use client"` só em: Header (menu mobile), Reveal, CountUp, Mascote, filtros de Explorações, sumário sticky com scrollspy.
- Imagens: `next/image`, sempre com `alt` do protótipo, `sizes` correto e `priority` só na foto do hero.
- Todas as animações respeitam `prefers-reduced-motion`.
- Breakpoint mobile único: 767px (`max-md` customizado, ver tokens).
- Cada PR: rodar `pnpm lint && pnpm typecheck && pnpm build` sem warnings; comparar com o protótipo em 1440, 1024, 768, 390px.
- Toda menção a uma ferramenta no texto leva a logo ao lado (ver docs/13). Logos self-hosted em /icons, nunca CDN.
- Antes de abrir PR: `pnpm check` (inclui check-assets e check-content no prebuild).
- Não versionar `prototipo/support.js`, `_ds/` nem `.dc.html` dentro de `src/`.
