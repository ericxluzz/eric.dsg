import type { Metadata } from 'next';
import { NotFoundBody } from '@/components/layout/NotFoundBody';

export const metadata: Metadata = { title: 'Página não encontrada', robots: { index: false } };

export default function NotFound() {
  return <NotFoundBody />;
}
