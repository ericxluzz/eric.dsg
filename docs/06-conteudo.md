# 06 · Conteúdo e dados

## Explorações
Origem: `prototipo/exploracoes-data.js` (3 posts: `bullapp-experiencia-mobile`, `figma-ao-codigo-fraktal`, `athletto-frequencia`).

Migração para `src/content/exploracoes.ts`:
1. Copiar o arquivo, renomear para `.ts`, tipar com `codigo/types.ts`: `export const posts = [...] satisfies Post[]`.
2. Trocar todos os caminhos `assets/…` por `/assets/…`.
3. Rodar `pnpm typecheck`: qualquer campo errado quebra o build (é o objetivo).
4. O teste `scripts/check-content.ts` (ver 11) valida: slugs únicos, `relacionados` apontando para slugs existentes, imagens existentes em `public/`.

Campos do post usados: `id, slug, titulo, descricao, categoria, empresa, tags, relacionados, logo, logoFill, logoBg, capa, capaLegenda, capaNotebook, cardCapa, marca, ficha, conteudo, resumo, tema, leitura?, data?`.
- Sem `leitura` → calcular (`lib/leitura.ts`: soma das palavras de todos os campos de texto dos blocos ÷ 200 wpm, arredondar para cima, mínimo 1 → "X min de leitura").
- Sem `data` → não mostrar data.
- `**texto**` → negrito via `RichText`.

## Blocos de conteúdo
Tipos presentes nos dados hoje e seus campos:
| tipo | campos |
|---|---|
| `h2` | `rotulo` (entra no sumário), `texto` |
| `p` | `texto`, `normal?` |
| `fluxo` | `itens[{k,v,d}]`, `legenda` |
| `destaque` | `rotulo`, `titulo`, `texto`, `escuro?` |
| `chips` | `titulo`, `itens[{t,icon}]` (icon = nome Lucide) |
| `quote` | `texto` |
| `roles` | `itens[{k,t,d}]` |
| `phones` | `itens[{src,titulo,d}]`, `legenda` |
| `tiles` | `itens[{k,t}]` |
| `process` | `antes{…}`, `depois{…}`, `legenda` |
| `dsboard` | `legenda` (ilustração fixa do DS; recriar a partir do protótipo) |
| `stat` | `de`, `deLabel`, `para`, `paraLabel`, `contexto`, `legenda` |
| `hipoteses` | `itens[{l,t,ctx,princ,obs,src,retrato,alt}]` |

Tipos que o renderer do protótipo suporta mas nenhum post usa hoje: `h3, list, img, compare, code, video, link, pergunta, figmacode, wirefinal, vitrine`. **Implementar apenas os usados** (fase 4) e deixar os outros como tarefa opcional, para não atrasar o lançamento. Para os campos de `process.antes/depois` e qualquer forma exata, ler o objeto no arquivo de dados e o render correspondente em `Exploracao.dc.html`.

Ícones em `chips.itens[].icon`: mapear o nome para o componente Lucide num objeto `icons` explícito (evita importar a biblioteca inteira).

## Outros conteúdos
- `content/projetos.ts`: 3 cards (SIAGRES, e-Matrículas, Eventure) (título, texto, métrica, legenda, imagem, tema de cor, href|null).
- `content/contato.ts`: WhatsApp, e-mail, LinkedIn, CV. Reusado na Home, no rodapé e no 404.
- `content/sobre.ts`: experiências (empresa, logo, cargo, período, descrição), formação, ferramentas. Extrair do `Sobre.dc.html`.
- Os cases ficam em JSX (conteúdo único, não vale abstrair).
