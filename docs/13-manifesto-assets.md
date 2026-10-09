# 13 · Manifesto de assets

Gerado a partir dos protótipos finais. **Todo arquivo listado precisa existir em `public/`** com o mesmo nome (`assets/x` → `public/assets/x`). O script `check-assets` (ver `codigo/scripts/check-assets.mjs`) falha o build se algum faltar.

Regras:
- Copiar a pasta `prototipo/assets/` inteira para `public/assets/`. Ela contém tudo o que as páginas usam e algumas fontes/versões antigas. **Só apagar arquivos não listados abaixo depois que todas as páginas estiverem prontas e `check-assets` passar.** `eric-pixel.png` fica: é a base do favicon.
- PNGs listados abaixo (ex.: `case-ematr-filas.png`, `ematr-*.png`): converter para `.webp` (qualidade 82) **e trocar a referência no código**. O `next/image` já serve AVIF/WebP, então a conversão é opcional; o importante é não quebrar o caminho.
- Imagens `siag-*` já têm nomes, CPFs e endereços desfocados. Não substituir pelos originais de `uploads/`.

## Ícones de marca externos (self-host obrigatório)
Os protótipos carregam logos de ferramentas de `cdn.simpleicons.org` / `cdn.jsdelivr.net`. **Em produção, nada de CDN de terceiros**: rodar uma vez `node scripts/fetch-icons.mjs` (em `codigo/scripts/`), que baixa estes SVGs para `public/icons/<slug>.svg`, e trocar as URLs por `/icons/<slug>.svg`.

- `figma` (cor #F24E1E)
- `framer` (cor #0055FF)
- `jira` (cor #0052CC)
- `confluence` (cor #172B4D)
- `confluence` (cor #1868DB)
- `notion` (cor #000000)
- `clickup` (cor #7B68EE)
- `googlemeet` (cor #00897B)
- `googlecalendar` (cor #4285F4)
- `claude` (cor #D97757)
- `googlegemini` (cor #8E75B2)
- `cursor` (cor #000000)
- `supabase` (cor #3FCF8E)
- `vercel` (cor #000000)
- `hostinger` (cor #673DE6)
- `vuedotjs` (cor #4FC08D)
- `nuxt` (cor #00DC82)
- `googlechrome` (cor #4285F4)
- `apple` (cor #000000)
- `android` (cor #3DDC84)
- `openai`, `visualstudiocode` (simple-icons@9.0.0 via jsdelivr)
- `rocket`, `link` (lucide-static: usar `lucide-react` em vez de SVG)

Regra do conteúdo: **toda menção a uma ferramenta no texto leva a logo ao lado** (inline, 1em, `vertical-align:-.15em`, `margin-right:.3em`).

## Assets por página

## Portfolio Site.dc.html
Seções: Hero · Sobre · Projetos · Contato

- `assets/case-ematriculas-phones.webp`
- `assets/case-eventure.webp`
- `assets/eric2-cutout.webp`
- `assets/siag-detalhe.webp`
- `assets/sobre-time.webp`

## Sobre.dc.html
Seções: Sobre · 01 Carreira · 02 Formação · 03 Ferramentas

- `assets/logos/a3.png`
- `assets/logos/aicb-white.png`
- `assets/logos/designcircuit.png`
- `assets/logos/fraktal.png`
- `assets/logos/masterw.png`
- `assets/logos/mf-mark.png`
- `assets/logos/pmbv.png`
- `assets/logos/udemy.png`
- `assets/logos/unifatecie.png`

## Exploracoes.dc.html
Seções: Explorações · Abertura · Explorações · Publicações

- `assets/ath-cal-modal.webp`
- `assets/ath-registrar-crop.webp`
- `assets/bull-01.webp`
- `assets/bull-02.webp`
- `assets/bull-03.webp`
- `assets/bull-04.webp`
- `assets/bull-05.webp`
- `assets/bull-06.webp`
- `assets/bull-07.webp`
- `assets/bull-08.webp`
- `assets/exp-athletto-capa3.webp`
- `assets/exp-athletto-card.webp`
- `assets/exp-bull-capa.webp`
- `assets/exp-fraktal-capa.webp`
- `assets/logos/athletto.png`
- `assets/logos/bullapp.png`
- `assets/logos/fraktal.png`

## Exploracao.dc.html
Seções: Exploração

- `assets/ath-cal-modal.webp`
- `assets/ath-registrar-crop.webp`
- `assets/bull-01.webp`
- `assets/bull-02.webp`
- `assets/bull-03.webp`
- `assets/bull-04.webp`
- `assets/bull-05.webp`
- `assets/bull-06.webp`
- `assets/bull-07.webp`
- `assets/bull-08.webp`
- `assets/exp-athletto-capa3.webp`
- `assets/exp-athletto-card.webp`
- `assets/exp-bull-capa.webp`
- `assets/exp-fraktal-capa.webp`
- `assets/exp-interface.webp`
- `assets/exp-wireframe.webp`
- `assets/logos/athletto.png`
- `assets/logos/bullapp.png`
- `assets/logos/fraktal.png`

## Case SIAGRES.dc.html
Seções: 01 Abertura · 02 Contexto · 03 Imersão · 04 Linguagem do setor · 05 Papéis · 06 Fluxo completo · 07 Cadastro de MTR · 08 Acompanhamento · 09 Mobile · 10 Colaboração · 11 Entrega e evolução · Próximo case

- `assets/siag-cad-01.webp`
- `assets/siag-cad-02.webp`
- `assets/siag-cad-03.webp`
- `assets/siag-detalhe.webp`
- `assets/siag-m-destinador.webp`
- `assets/siag-m-gerador-aguardando.webp`
- `assets/siag-m-gerador-coleta.webp`
- `assets/siag-m-lista-dest.webp`
- `assets/siag-m-lista-transp.webp`
- `assets/siag-m-lotes-coleta.webp`
- `assets/siag-m-lotes-receb.webp`
- `assets/siag-m-transportador.webp`
- `assets/siagres-logo-mark.svg`

## Case e-Matriculas.dc.html
Seções: Abertura · 01 Contexto · 02 Discovery · 03 Público · 04 A experiência · 05 Design System · 06 Resultados · Próximo

- `assets/case-ematr-filas.png`
- `assets/ematr-fluxo-antes.png`
- `assets/ematr-fluxo-depois.png`
- `assets/ematr-landing-full.png`
- `assets/ematr-solicitacao.png`
- `assets/ematr-status-phones.png`
- `assets/ematr-web-frequencia.png`
- `assets/ematr-web-home.png`
- `assets/ematr-web-notas.png`

## Case Eventure.dc.html
Seções: 01 Abertura · 02 Oportunidade · 03 Ecossistema · 04 Desafios · 05 Minha atuação · 06 Soluções · 07 Validação · 08 Aplicações reais · 09 Resultados

- `assets/ev-g-eventos.webp`
- `assets/ev-g-financeiro.webp`
- `assets/ev-g-ingressos.webp`
- `assets/ev-g-inicio.webp`
- `assets/ev-jia.webp`
- `assets/ev-m-financeiro.webp`
- `assets/ev-m-ingressos.webp`
- `assets/ev-m-inicio.webp`
- `assets/ev-m-login.webp`
- `assets/ev-m-validados.webp`
- `assets/ev-mk-discover.webp`
- `assets/ev-mk-presence.webp`
- `assets/ev-mk-tickets.webp`
- `assets/ev-mormaco-shows.webp`
- `assets/eventure-icon.svg`
- `assets/eventure-phones.webp`
- `assets/eventure-web.webp`

## 404.dc.html
Seções: 404


