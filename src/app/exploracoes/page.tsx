import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { ExploracoesBody, type CardPost } from '@/components/exploracoes/ExploracoesBody';
import { categorias, posts } from '@/content/exploracoes';
import { metaPost } from '@/lib/leitura';

export const metadata: Metadata = {
  title: 'Explorações',
  description: 'Experiências, processos e experimentações que fazem parte da minha atuação em Product Design e Design Engineering.',
};

export default function ExploracoesPage() {
  const cards: CardPost[] = posts.map((p) => {
    const c = categorias[p.categoria];
    return {
      slug: p.slug,
      categoria: p.categoria,
      titulo: p.titulo,
      descricao: p.resumo ?? p.descricao,
      cat: c.label,
      bg: c.bg,
      ink: c.ink,
      meta: metaPost(p),
      capa: p.cardCapa ?? p.capa ?? null,
      exemplo: !!p.exemplo,
    };
  });
  const filtros = [{ key: 'todos', label: 'Todos' }, ...Object.entries(categorias).map(([key, c]) => ({ key, label: c.label }))];
  return (
    <>
      <Header />
      <ExploracoesBody posts={cards} filtros={filtros} ano={new Date().getFullYear()} />
    </>
  );
}
