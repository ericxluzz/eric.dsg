// node scripts/fetch-icons.mjs  → baixa as logos para public/icons/
import { mkdir, writeFile } from 'node:fs/promises';
const icons = ["figma/F24E1E","framer/0055FF","jira/0052CC","confluence/172B4D","confluence/1868DB","notion/000000","clickup/7B68EE","googlemeet/00897B","googlecalendar/4285F4","claude/D97757","googlegemini/8E75B2","cursor/000000","supabase/3FCF8E","vercel/000000","hostinger/673DE6","vuedotjs/4FC08D","nuxt/00DC82","googlechrome/4285F4","apple/000000","android/3DDC84"];
const legacy = { openai: 'https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/openai.svg', visualstudiocode: 'https://cdn.jsdelivr.net/npm/simple-icons@9.0.0/icons/visualstudiocode.svg' };
await mkdir('public/icons', { recursive: true });
for (const i of icons) {
  const [slug, color] = i.split('/');
  const r = await fetch('https://cdn.simpleicons.org/' + i);
  if (!r.ok) throw new Error('falhou ' + i);
  await writeFile(`public/icons/${slug}${color === '1868DB' ? '-blue' : ''}.svg`, await r.text());
  console.log('ok', slug);
}
for (const [slug, url] of Object.entries(legacy)) {
  const r = await fetch(url); if (!r.ok) throw new Error('falhou ' + slug);
  await writeFile(`public/icons/${slug}.svg`, await r.text()); console.log('ok', slug);
}
