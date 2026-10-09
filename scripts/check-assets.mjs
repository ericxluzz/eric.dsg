// Roda no prebuild: falha se algum /assets/ ou /icons/ referenciado em src/ não existir em public/.
import { readdir, readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
const files = [];
async function walk(d) { for (const e of await readdir(d, { withFileTypes: true })) { const p = join(d, e.name); e.isDirectory() ? await walk(p) : /\.(tsx?|mdx?|css)$/.test(e.name) && files.push(p); } }
await walk('src');
const refs = new Set();
for (const f of files) for (const m of (await readFile(f, 'utf8')).matchAll(/["'`(]\/((?:assets|icons)\/[^"'`)\s?#]+)/g)) refs.add(m[1]);
const missing = [];
for (const r of refs) { try { await access(join('public', decodeURIComponent(r))); } catch { missing.push(r); } }
if (missing.length) { console.error('Assets faltando em public/:\n' + missing.join('\n')); process.exit(1); }
console.log(`check-assets: ${refs.size} referências ok`);
