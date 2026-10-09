# 12 · Riscos e pendências

## Pendências do Eric (bloqueiam o lançamento, não o desenvolvimento)
- [ ] Hero: o destaque "+150 mil cidadãos atendidos" cita **SIABES**, que não tem case no site. Manter (dado real de carreira) ou trocar.
- [ ] **SIAGRES**: confirmar autorização para publicar as capturas (nomes e endereços já desfocados).
- [ ] **Domínio** final (ex.: ericluz.design) para `metadataBase` e OG.
- [ ] **CV** atualizado (`cv-eric-luz.pdf`).
- [ ] URL exata do **LinkedIn** (`in/ericxluzzz-dsg`: confirmar).
- [ ] Datas das publicações (opcional; sem data, a data fica oculta).
- [ ] Analytics: sim/não.

## Gargalos previstos e como evitar
| Risco | Mitigação |
|---|---|
| Diferenças visuais por "interpretar" o protótipo | Copiar valores exatos; comparar lado a lado em todo PR (CLAUDE.md) |
| `Exploracao.dc.html` é grande (≈560 linhas, 13+ blocos) | Um componente por bloco; implementar só os usados; `never` no switch |
| Mascote quebrar no SSR / vazar intervalos na navegação | Import dinâmico no client + guard + `disconnectedCallback` (07) |
| Reveal escondendo conteúdo sem JS ou piorando SEO | Classe `html.js` antes de esconder (07) |
| Foto do hero piorar LCP pela animação | Medir; fallback descrito em 09 |
| Hero com scroll horizontal (foto transborda) | `overflow-x: clip` na seção; testar em 320px |
| CLS das imagens e do mascote | Dimensões sempre declaradas; wrapper do mascote reserva altura |
| Safari iOS (`100vh`, blur) | `100svh`, `-webkit-backdrop-filter` |
| Fontes extras pesando o site todo | Só na rota de publicação (09) |
| Links antigos `?p=` compartilhados | Redirect 308 em `next.config.ts` |
| Copy do rodapé declara a stack | Manter a stack do 01; se mudar, atualizar a nota |
| Asset faltando ou com caminho errado | `check-assets` no prebuild bloqueia o deploy |
| CDN de ícones fora do ar | Self-host via `fetch-icons` (13) |
| Animação do fluxo SIAGRES travar/vazar timers | Limpar timeout/raf/observer no unmount; pausar fora da tela |
| Preview do editor lento ao abrir protótipos | Usar `npx serve` local; não é problema do site |
