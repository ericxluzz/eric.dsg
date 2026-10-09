# 07 · Animações e mascote

Regra: toda animação para (ou mostra o estado final) com `prefers-reduced-motion: reduce`. Keyframes já estão em `codigo/globals.css`.

| Animação | Onde | Spec |
|---|---|---|
| Entrada da foto | Hero | `heroPhotoIn 1.3s var(--ease-out-soft) .15s both`: opacity 0→1, translateY 36→0, scale .985→1, blur 8→0, sombra 0→.25. Só no carregamento. |
| Dot "Disponível" | Hero | 8px primary; `elPulse 1.8s ease-out infinite` + `elBlink 1.8s infinite` |
| Contador | Hero | 0→alvo, 1800ms, easeOutCubic `1-(1-t)^3`, delay 300ms, inicia ao entrar na tela, roda uma vez |
| Reveal | Todas | Ver abaixo |
| Hover card projeto | Home | `background .25s` |
| Hover links/botões | Todas | cor `.2s` |
| Menu mobile | Header | `mIn .22s` (fade + translateY −8 + scale .98) |
| Scroll âncoras | Home | `scroll-behavior: smooth` |

## Reveal (substitui `reveal.js`)
Comportamento do protótipo: filhos diretos do container de cada seção entram com opacity 0→1 e translateY 28→0 (`.8s`/`.9s`, `cubic-bezier(.2,.7,.2,1)`), threshold `.12`, rootMargin `0px 0px -6% 0px`. Filhos de grids (2 a 8 itens) recebem stagger de 90ms (máx. 5 passos). Elementos `position:absolute` não animam. Cada elemento anima uma vez.

Implementação:
- `<Reveal>` client que adiciona `.reveal` aos filhos e `.is-in` quando entram. Um único IntersectionObserver compartilhado (módulo singleton).
- **Sem flash/SEO ruim:** no `layout.tsx` colocar `<script>document.documentElement.classList.add('js')</script>` no `<head>`; o CSS só esconde `.reveal` quando `html.js` existe.
- Elementos já visíveis no load (hero) **não** usam Reveal; o hero tem só a animação da foto.

## Mascote
Arquivo: `prototipo/mascote.js` → `src/components/mascote/mascote-element.js`. Web Component `<eric-mascote>` em `<canvas>` com `image-rendering: pixelated`.

Atributos: `mode` (`walk|hi|work`), `size` (px por pixel de arte: 2, 3 ou 7), `speed` (1), `text` (balão do hi, "E aí!"), `mobile` (`hide|show`), `hide-below` (760).

Comportamentos (6 fps × speed, só anima quando visível via IntersectionObserver):
- **walk**: 100% da largura, 2·size px por quadro, ciclo de 4 quadros; na borda pausa 1.8s piscando, vira (`scaleX(-1)`) e volta.
- **hi**: sobe 0.6s ease-out, acena até 3.4s com balão, depois idle piscando; reacena a cada 14s (2s) e no `mouseenter` (2.2s).
- **work**: na mesa com notebook e caneca com vapor; digita 4.2s a cada 6s; pisca a cada 3.4s.
- `aria-hidden="true"`, `pointer-events:none` (exceto hi para hover).
- Mobile (<760px): só `hi` aparece.

### Ajustes obrigatórios no `mascote-element.js`
1. **Guard SSR**: envolver o `customElements.define` em `if (typeof window !== 'undefined' && !customElements.get('eric-mascote'))`.
2. **Reduced motion**: se `matchMedia('(prefers-reduced-motion: reduce)').matches`, desenhar o quadro estático e não iniciar o intervalo (no hi, mostrar já na posição final, sem balão).
3. Limpar intervalos e observer em `disconnectedCallback` (navegação client-side do Next monta e desmonta).

### Wrapper
Usar `codigo/Mascote.tsx` + `codigo/mascote.d.ts`. O wrapper reserva a altura (evita CLS): altura = `34 * size` px (walk e hi; work usa a mesma altura com largura 30·size).
