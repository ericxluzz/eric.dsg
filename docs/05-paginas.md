# 05 · Páginas e critérios de aceite

Critério geral para TODAS: comparação lado a lado com o protótipo em **1440, 1024, 768 e 390px** sem diferença perceptível de layout, copy, cor, tipo ou espaçamento; zero erro no console; reveal e mascote funcionando; Lighthouse ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO (mobile).

## `/` Home: `Portfolio Site.dc.html`
**Hero `#inicio`**: `min-height:100vh`, flex-wrap.
- Painel esquerdo `flex:3 1 600px`, `.bg-hero`, círculos decorativos translúcidos. Conteúdo max 460px: pill "Product Designer", H1 "Produtos complexos de ponta a ponta", botões "Ver meus trabalhos" (branco, ↗ → `#projetos`) e "Baixar CV" (outline branco 50%, `download` → `/cv-eric-luz.pdf`), ícones 44px LinkedIn/E-mail.
- Foto `eric2-cutout.webp` ancorada no fundo, altura `clamp(520px, max(94vh,46vw), 1080px)`, `margin-right: calc(-1 * clamp(0px,9vw,160px))`, `margin-top:-40px`, drop-shadow, animação `heroPhotoIn` (ver 07). `priority` + `fetchPriority="high"`.
- Painel direito `flex:2 1 380px`: pill "Disponível para projetos" (dot pulsante), frase com trecho em gradiente, parágrafo, chips GovTech/Fintech/SaaS/Design Systems, `ImpactStats` (grid 2 col, borda-topo ink): "+150 mil" cidadãos atendidos (SIABES · GovTech, ver 12) em destaque, "+50 mil" acessos simultâneos · e-Matrículas, "+8" anos de experiência em produto.
- Aceite: foto não causa scroll horizontal (`overflow-x: clip` na seção); contador roda uma vez; sem CLS.

**Sobre `#sobre`**: grid `repeat(auto-fit, minmax(min(100%,460px),1fr))`. Foto `sobre-time.webp` (cover, raio 28, min-h 340). Badge "01 Sobre mim" com **Mascote hi size 3** à direita (posição do protótipo: sobe −120px). H2, lead, 3 itens com IconTile, botão "Ver mais sobre mim" → `/sobre`.

**Projetos `#projetos`**: badge "02 Projetos", H2 "Casos *selecionados*", grid `auto-fit minmax(min(100%,360px),1fr)` + subgrid. Cards: SIAGRES → `/cases/siagres`, e-Matrículas → `/cases/e-matriculas`, Eventure → `/cases/eventure`. Hover troca o fundo (.25s).

**Contato `#contato`**: bg primary. Badge "03 Contato", H2 "Tem um produto complexo pela frente?", 4 linhas-link (WhatsApp `https://wa.me/5595984140592`, e-mail `mailto:ericxluzz.dsg@gmail.com`, LinkedIn, Currículo). **Mascote walk size 3** sobre a linha do rodapé. Rodapé "© 2026 Eric Luz · Product Designer" + "Voltar ao topo ↑". Nota mono 12.5px com ícone `Code`: texto exato do protótipo. Ano: `new Date().getFullYear()` no build.

## `/sobre`: `Sobre.dc.html`
Seções: abertura "Eric Luz", **01 Carreira** (timeline + logos; Mascote work size 2 na linha), **02 Formação e certificações**, **03 Ferramentas**. Dados em `content/sobre.ts`.

## `/exploracoes`: `Exploracoes.dc.html`
Abertura "Explorações", **Mascote walk size 3** acima dos filtros, tablist de categorias ("Todas" + 3), grid de `PostCard` (capa `cardCapa ?? capa`, categoria colorida, título, descrição, empresa, leitura).
Aceite: filtro funciona sem recarregar; `?cat=processos` abre filtrado; teclado ←/→ navega tabs.

## `/exploracoes/[slug]`: `Exploracao.dc.html`
Capa + legenda, ficha k/v, sumário sticky (`aside aria-label="Nesta publicação"`, gerado dos blocos `h2` com `rotulo`), corpo por `BlockRenderer`, **Mascote work size 2** na linha antes de "próximos posts", relacionados (por `relacionados[]`).
Aceite: os 3 posts renderizam todos os blocos idênticos ao protótipo; slug inexistente → 404; `generateMetadata` por post.

## `/cases/siagres`: `Case SIAGRES.dc.html`
Título com a logo (`siagres-logo-mark.svg`) ao lado do nome. Cabeçalho de cada seção: título à esquerda, texto à direita (grid `auto-fit minmax(min(100%,420px),1fr)`), texto com max 58ch.
- **01 Abertura**: meta em 4 colunas, mockup web + 2 celulares sobre `grad-siagres`.
- **02 Contexto**: 4 blocos do problema (Origem → Transporte → Destino → Rastreamento).
- **03 Imersão**: 3 fontes; card "Cerca de 4 meses" + citação verde com **Mascote work size 3** dentro, no canto inferior direito.
- **04 Linguagem do setor**: recorte do cadastro + chips; bloco Confluence com logo.
- **05 Papéis**: 3 cards Gerador/Transportador/Destinador com a tela real no topo (web cortado no topo-esquerda; celulares estreitos 62%, max 240px, topo à mostra) + frase com a logo.
- **06 Fluxo completo** **[client]**: animação de 6 etapas, 5,6s cada, loop. Caminhão e documento MTR andam numa linha Gerador → Destinador; nó ativo acende (#4ade80); pill de status muda; tela real faz crossfade (.6s) ao lado; 6 tabs com barra de progresso linear; botão Pausar/Reproduzir. Só roda visível (IntersectionObserver, threshold .3); reduced-motion = parado, etapa clicável. Dados das etapas: ver `STEPS` no logic do protótipo.
- **07 Cadastro de MTR** **[client]**: 3 tabs trocam a tela com crossfade .35s + legenda; 4 princípios em grid 2×2.
- **08 Acompanhamento**: tela web inteira com marcadores 1–5; legenda em linha abaixo.
- **09 Mobile**: 2 fileiras de 4 celulares (vira carrossel no mobile).
- **10 Colaboração**: 2 colunas (minha contribuição / com a equipe).
- **11 Entrega e evolução**: 3 cards.
- **Próximo case** → e-Matrículas; rodapé com **Mascote walk size 3**.
Sem seção de reflexão. Dados pessoais já desfocados nas imagens `siag-*`.

## `/cases/e-matriculas`: `Case e-Matriculas.dc.html`
Abertura · 01 Contexto ("Filas na porta da escola") · 02 Discovery · 03 Público · 04 A experiência · 05 Design System · 06 Resultados · barra "Próximo case" (→ Eventure) com **Mascote walk size 3**. Ignorar v1/v2/v3.

## `/cases/eventure`: `Case Eventure.dc.html`
01 Abertura · 02 Oportunidade · 03 Ecossistema · 04 Desafios · 05 Minha atuação · 06 Soluções · 07 Validação · 08 Aplicações reais · 09 Resultados · **Mascote walk size 3** no fim (próximo case → e-Matrículas).

## 404: `404.dc.html`
H1 "Ainda estou construindo isso" (quebra de linha como no protótipo), links para Home e Explorações, **Mascote work size 7**. Status HTTP 404 real (via `not-found.tsx`).
