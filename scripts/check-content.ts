// Roda no prebuild (via tsx): valida o conteúdo das Explorações.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { categorias, posts } from '../src/content/exploracoes';

const err: string[] = [];
const slugs = new Set<string>();
const img = (slug: string, campo: string, src?: string) => {
  if (src && src.startsWith('/') && !existsSync(join('public', decodeURIComponent(src)))) err.push(`${slug}: ${campo} inexistente ${src}`);
};
for (const p of posts) {
  if (slugs.has(p.slug)) err.push('slug duplicado: ' + p.slug);
  slugs.add(p.slug);
  if (!(p.categoria in categorias)) err.push(`${p.slug}: categoria inválida ${p.categoria}`);
  img(p.slug, 'logo', p.logo);
  img(p.slug, 'capa', p.capa);
  img(p.slug, 'cardCapa', p.cardCapa);
  for (const b of p.conteudo) {
    if (b.tipo === 'phones') b.itens.forEach((x) => img(p.slug, 'phones.src', x.src));
    if (b.tipo === 'hipoteses') b.itens.forEach((x) => img(p.slug, 'hipoteses.src', x.src));
    if (b.tipo === 'chips') b.itens.forEach((x) => typeof x !== 'string' && img(p.slug, 'chips.icon', x.icon));
  }
}
for (const p of posts) for (const r of p.relacionados ?? []) if (!slugs.has(r)) err.push(`${p.slug}: relacionado inexistente ${r}`);
if (err.length) {
  console.error(err.join('\n'));
  process.exit(1);
}
console.log(`check-content: ${posts.length} posts ok`);
