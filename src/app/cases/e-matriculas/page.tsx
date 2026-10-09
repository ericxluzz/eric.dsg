import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { EmatrBody } from '@/components/cases/ematr/EmatrBody';

export const metadata: Metadata = {
  title: 'e-Matrículas: inscrição escolar sem filas',
  description:
    'Case e-Matrículas: digitalização completa da matrícula escolar, com fluxos de inscrição, alocação e gestão para responsáveis e administração central.',
};

export default function EmatrPage() {
  return (
    <>
      <Header variant="ematr" />
      <EmatrBody />
    </>
  );
}
