/** Domínio final: atualizar antes do lançamento (docs/12). */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ericluz.design';

export const contato = {
  whatsapp: { href: 'https://wa.me/5595984140592', label: '(95) 98414-0592' },
  email: { href: 'mailto:ericxluzz.dsg@gmail.com', label: 'ericxluzz.dsg@gmail.com' },
  linkedin: { href: 'https://www.linkedin.com/in/ericxluzzz-dsg/', label: 'in/ericxluzzz-dsg' },
  cv: { href: '/cv-eric-luz.pdf', label: 'Baixar CV em PDF' },
} as const;
