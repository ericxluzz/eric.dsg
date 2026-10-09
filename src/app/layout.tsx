import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { MascoteLoader } from '@/components/mascote/MascoteLoader';
import { RevealScanner } from '@/components/motion/RevealScanner';
import { SITE_URL } from '@/content/contato';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Eric Luz · Product Designer', template: '%s · Eric Luz' },
  description:
    'Portfólio de Eric Luz, Product Designer há mais de 8 anos. Produtos complexos de ponta a ponta: GovTech, Fintech, SaaS e Design Systems.',
  openGraph: { locale: 'pt_BR', type: 'website', siteName: 'Eric Luz', title: 'Eric Luz · Product Designer' },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: './' },
};

export const viewport: Viewport = { themeColor: '#4030ff' };

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        {children}
        <MascoteLoader />
        <RevealScanner />
      </body>
    </html>
  );
}
