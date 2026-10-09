import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Barlow, Barlow_Condensed, Plus_Jakarta_Sans, Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { PostView } from '@/components/exploracoes/PostView';
import { posts } from '@/content/exploracoes';
import { buildPostView } from '@/lib/post-view';

// Fontes usadas só dentro das ilustrações de blocos (nunca no layout raiz)
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins', display: 'swap' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-jakarta', display: 'swap' });
const barlow = Barlow({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-barlow', display: 'swap' });
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['600'], variable: '--font-barlow-condensed', display: 'swap' });

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<'/exploracoes/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: p.titulo,
    description: p.descricao,
    openGraph: { type: 'article', title: p.titulo, description: p.descricao, images: p.capa ? [{ url: p.capa }] : undefined },
  };
}

export default async function PostPage({ params }: PageProps<'/exploracoes/[slug]'>) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  const view = buildPostView(p, new Date().getFullYear());
  return (
    <div className={`${poppins.variable} ${jakarta.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <Header />
      <PostView {...view} />
    </div>
  );
}
