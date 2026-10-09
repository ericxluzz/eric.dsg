import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { SiagresBody } from '@/components/cases/siagres/SiagresBody';

export const metadata: Metadata = {
  title: 'SIAGRES: uma operação regulada transformada em experiência digital',
  description:
    'Case SIAGRES: emissão e acompanhamento de MTRs entre gerador, transportador e destinador, em web e mobile, para prefeituras.',
};

export default function SiagresPage() {
  return (
    <>
      <Header />
      <SiagresBody />
    </>
  );
}
