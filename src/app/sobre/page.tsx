import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { SobreBody } from '@/components/sobre/SobreBody';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Carreira, formação e ferramentas de Eric Luz, Product Designer há mais de 8 anos em GovTech, Fintech e SaaS.',
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <SobreBody />
    </>
  );
}
