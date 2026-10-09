# 08 · Responsivo e acessibilidade

## Responsivo (substitui `mobile.js`), breakpoint 767px
- Header: links somem; botão "Menu" + ícone (pill ink, min 44px). Abre painel fixo abaixo do header (raio 24, sombra, `mIn .22s`) com véu `rgba(16,16,20,.28)`. Último item (Contato) vira CTA escuro.
  Fecha com: clique no véu, clique em link, `Esc`, resize > 767, mudança de rota. Trava o scroll do body enquanto aberto. Foco vai para o primeiro link e volta para o botão ao fechar. `aria-expanded`, `aria-controls`.
- Listas marcadas `data-m="row"` no protótipo viram carrossel horizontal com `scroll-snap-type: x mandatory`, itens com 72% de largura, sem scrollbar visível.
- Tablists rolam na horizontal; elementos sticky viram static; botões e tabs com min-height 40px.
- Hero: sem `min-height:100vh`; foto com altura `min(70vh,560px)`.
- Mascote: só `hi` aparece abaixo de 760px.
- Sem scroll horizontal em 320px (testar).
- O resto vem de `clamp()` e `auto-fit/minmax`: não criar breakpoints extras.

Procure `data-m=` nos protótipos para achar cada ajuste mobile.

## Acessibilidade (meta WCAG 2.2 AA)
- `<html lang="pt-BR">`; um `h1` por página; hierarquia sem pular níveis.
- Link "Pular para o conteúdo" (visível no foco) antes do header.
- Focus visível: outline 2px primary, offset 3px (já no CSS base).
- Alvos de toque ≥ 44px no mobile.
- Contraste: texto sobre #4030ff usa #fff ou #e4e1ff (ok). Não usar #d4cfff para texto < 18px.
- Imagens decorativas `alt=""`; conteúdo usa os `alt` do protótipo.
- Mascote, círculos do hero e dot pulsante: `aria-hidden`.
- Filtro de Explorações: padrão WAI-ARIA Tabs (`role=tablist/tab`, `aria-selected`, setas).
- Links externos: `target="_blank" rel="noopener noreferrer"` + texto/aria indicando nova aba.
- Download do CV: `download` + texto "Baixar CV (PDF)".
- Testar com teclado do início ao fim e com VoiceOver/NVDA em Home e numa publicação.
