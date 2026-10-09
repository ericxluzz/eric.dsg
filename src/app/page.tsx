import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { SobreResumo } from '@/components/home/SobreResumo';
import { ProjetosGrid } from '@/components/home/ProjetosGrid';
import { Contato } from '@/components/home/Contato';
import { contato } from '@/content/contato';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Eric Luz',
  jobTitle: 'Product Designer',
  email: contato.email.href,
  sameAs: [contato.linkedin.href],
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', color: '#101014', background: '#fafafc' }}>
        <Hero />
        <SobreResumo />
        <ProjetosGrid />
        <Contato />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\u003c') }} />
    </>
  );
}
