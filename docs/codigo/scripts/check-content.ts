// Roda no prebuild (via tsx): valida o conteúdo das Explorações.
import { posts, categorias } from '../src/content/exploracoes';
const err: string[] = [];
const slugs = new Set<string>();
for (const p of posts) {
  if (slugs.has(p.slug)) err.push('slug duplicado: ' + p.slug);
  slugs.add(p.slug);
  if (!(p.categoria in categorias)) err.push(`${p.slug}: categoria inválida ${p.categoria}`);
}
for (const p of posts) for (const r of p.relacionados ?? []) if (!slugs.has(r)) err.push(`${p.slug}: relacionado inexistente ${r}`);
if (err.length) { console.error(err.join('\n')); process.exit(1); }
console.log(`check-content: ${posts.length} posts ok`);
