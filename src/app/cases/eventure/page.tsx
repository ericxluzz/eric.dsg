import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { EventureBody } from '@/components/cases/eventure/EventureBody';

export const metadata: Metadata = {
  title: 'Eventure: a agenda cultural da cidade em um app',
  description:
    'Case Eventure: gestão e divulgação de eventos locais com foco em comunidade. Descoberta, ingressos e validação em um só app.',
};

export default function EventurePage() {
  return (
    <>
      <Header />
      <EventureBody />
    </>
  );
}
