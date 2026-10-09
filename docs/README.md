# Plano de desenvolvimento: Portfólio Eric Luz

Pasta única e autossuficiente para transformar os protótipos em site de produção **sem divergência visual**. Leia na ordem.

| # | Arquivo | Para quê |
|---|---|---|
| 00 | `00-COMECE-AQUI.md` | **Roteiro de execução e prompts prontos** |
| — | `CLAUDE.md` | Regras para o agente/dev (copiar para a raiz do repositório) |
| 01 | `01-stack-e-setup.md` | Stack fixa, versões, comandos de criação do projeto |
| 02 | `02-arquitetura.md` | Estrutura de pastas, rotas, mapa protótipo → rota |
| 03 | `03-design-tokens.md` | Cores, tipo, raios, sombras, breakpoints (+ `codigo/globals.css`) |
| 04 | `04-componentes.md` | Inventário de componentes, props e onde aparecem |
| 05 | `05-paginas.md` | Especificação e critérios de aceite por página |
| 06 | `06-conteudo.md` | Modelo de dados das Explorações e cases (+ `codigo/types.ts`) |
| 07 | `07-animacoes-e-mascote.md` | Todas as animações, timings e o mascote |
| 08 | `08-responsivo-e-acessibilidade.md` | Breakpoints, menu mobile, a11y |
| 09 | `09-seo-e-performance.md` | Metadata, imagens, fontes, orçamento de performance |
| 10 | `10-roadmap.md` | Fases e tarefas com Definição de Pronto |
| 11 | `11-qa-e-deploy.md` | Checklists de QA, deploy na Vercel, domínio |
| 12 | `12-riscos-e-pendencias.md` | Gargalos previstos + o que ainda depende do Eric |
| 13 | `13-manifesto-assets.md` | Todo asset usado por página + ícones a self-hostear |

`codigo/` tem arquivos prontos para colar no projeto: tokens, tipos, Mascote, Reveal, CountUp e scripts de validação (assets, conteúdo, ícones).
`prototipo/` é a **fonte da verdade visual**: protótipos HTML + todos os assets.

## Como abrir os protótipos
```bash
npx serve desenvolvimento/prototipo
# abrir http://localhost:3000/Portfolio%20Site.dc.html
```
`support.js`, `image-slot.js` e `_ds/` existem só para os protótipos rodarem. **Não vão para produção.**

## Decisões fixas (não reabrir durante o desenvolvimento)
1. **Next.js (App Router) + TypeScript + Tailwind CSS v4**, deploy na **Vercel**. É o que o rodapé do site declara.
2. **100% estático (SSG)**. Nenhuma rota dinâmica em runtime, nenhum banco, nenhuma API.
3. Conteúdo das Explorações em **TypeScript tipado** (`content/exploracoes.ts`), não MDX/CMS.
4. Visual idêntico aos protótipos. Qualquer diferença é bug.
5. Os protótipos usam estilo inline; em produção vira **componentes + classes Tailwind** consumindo os tokens.
6. O mascote reaproveita `mascote.js` (Web Component) quase sem mudanças.
