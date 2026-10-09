# 00 · Comece aqui

Roteiro de execução. Siga na ordem; **não pule a Fase 0**.

## Pré-requisitos (uma vez)
- Node LTS (22.x) e pnpm 9+ (`corepack enable`).
- Conta GitHub + Vercel conectadas.
- Claude Code instalado (opcional, mas o plano foi escrito para ele).

## Passo a passo
1. Criar o projeto (comando em `01-stack-e-setup.md`).
2. Copiar para o repositório:
   - `CLAUDE.md` → raiz
   - `desenvolvimento/` inteira → `docs/` (fica versionada como referência)
   - `codigo/globals.css` → `src/app/globals.css`
   - `codigo/types.ts` → `src/content/types.ts`
   - `codigo/Mascote.tsx`, `codigo/mascote.d.ts` → `src/components/mascote/`
   - `prototipo/mascote.js` → `src/components/mascote/mascote-element.js` (aplicar os 3 ajustes de `07`)
   - `codigo/Reveal.tsx`, `codigo/CountUp.tsx` → `src/components/motion/`
   - `codigo/scripts/*` → `scripts/`
   - `prototipo/assets/` → `public/assets/`; `prototipo/cv-eric-luz.pdf` → `public/`
3. `node scripts/fetch-icons.mjs` (logos das ferramentas para `public/icons/`).
4. Adicionar ao `package.json`:
   ```json
   "engines": { "node": ">=22" },
   "scripts": {
     "prebuild": "node scripts/check-assets.mjs && tsx scripts/check-content.ts",
     "typecheck": "tsc --noEmit",
     "check": "pnpm lint && pnpm typecheck && pnpm build"
   }
   ```
   e `pnpm add -D tsx`.
5. `pnpm check` verde → primeiro commit → deploy de preview.
6. Seguir `10-roadmap.md` fase a fase.

## Prompt inicial para o Claude Code
Cole isto na primeira sessão, com o repositório aberto:

> Leia `CLAUDE.md` e todos os arquivos de `docs/` na ordem numérica. Depois execute a **Fase 0** de `docs/10-roadmap.md`. Não implemente nenhuma tela ainda. Ao terminar, rode `pnpm check` e me mostre o resultado.

Para cada fase seguinte:

> Execute a Fase N de `docs/10-roadmap.md`. Para cada tela, abra o protótipo correspondente em `docs/prototipo/` e copie valores exatos (px, clamp, cores, copy). Ao final, rode `pnpm check` e liste os critérios de aceite de `docs/05-paginas.md` atendidos e os pendentes.

## Como comparar com o protótipo
`npx serve docs/prototipo` em uma aba e `pnpm dev` em outra, mesma largura de janela (1440 / 1024 / 768 / 390). Diferença visível = bug.

## Nunca
- Importar `docs/prototipo/support.js`, `_ds/` ou qualquer `.dc.html` no app.
- Usar CDN de ícones/imagens em produção.
- Mudar copy, cor ou espaçamento "para melhorar" sem aprovação do Eric.
