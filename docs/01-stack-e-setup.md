# 01 · Stack e setup

## Stack
| Camada | Escolha | Motivo |
|---|---|---|
| Framework | Next.js (última estável, App Router) | SSG, `next/image`, `next/font`, metadata API, deploy nativo Vercel |
| Linguagem | TypeScript `strict: true` | Conteúdo tipado evita post quebrado |
| Estilo | Tailwind CSS v4 (`@theme` em CSS) | Tokens num só lugar; sem arquivo de config JS |
| Ícones | `lucide-react` | Mesma família do protótipo |
| Fonte | `next/font/google` (Space Grotesk; extras só na rota de publicação) | Self-host automático, zero CLS |
| Animação | CSS + IntersectionObserver próprios | Animações são simples; evitar dependência (Framer Motion desnecessário) |
| Gerenciador | pnpm | |
| Qualidade | ESLint (config Next) + Prettier + `prettier-plugin-tailwindcss` | |
| Analytics (opcional) | `@vercel/analytics` + `@vercel/speed-insights` | Sem cookies, sem banner LGPD |
| Hospedagem | Vercel (Hobby) | |

Node: LTS atual (fixar em `.nvmrc` e em `engines` do `package.json`).

## Criação
```bash
pnpm create next-app@latest portfolio-eric-luz \
  --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
cd portfolio-eric-luz
pnpm add lucide-react
pnpm add -D prettier prettier-plugin-tailwindcss
```

## Scripts do `package.json`
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "check": "pnpm lint && pnpm typecheck && pnpm build"
  }
}
```

## `next.config.ts`
```ts
import type { NextConfig } from 'next';
const config: NextConfig = {
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      // links antigos/compartilhados no formato do protótipo
      { source: '/exploracao', has: [{ type: 'query', key: 'p', value: '(?<slug>.*)' }], destination: '/exploracoes/:slug', permanent: true },
    ];
  },
};
export default config;
```

## Passos iniciais
1. Copiar `codigo/globals.css` para `src/app/globals.css` (substitui o gerado).
2. Copiar `codigo/types.ts` para `src/content/types.ts`.
3. Copiar `prototipo/assets/` para `public/assets/` e `prototipo/cv-eric-luz.pdf` para `public/`.
4. Copiar `prototipo/mascote.js` para `src/components/mascote/mascote-element.js` (ver `07`).
5. Copiar `CLAUDE.md` para a raiz.
6. Criar repo no GitHub e conectar na Vercel (preview automático por PR).
