import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/content/contato';
import { posts } from '@/content/exploracoes';

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = ['', '/sobre', '/exploracoes', '/cases/siagres', '/cases/e-matriculas', '/cases/eventure'];
  return [
    ...rotas.map((r) => ({ url: SITE_URL + r, changeFrequency: 'monthly' as const, priority: r === '' ? 1 : 0.8 })),
    ...posts.map((p) => ({ url: `${SITE_URL}/exploracoes/${p.slug}`, changeFrequency: 'yearly' as const, priority: 0.6 })),
  ];
}
