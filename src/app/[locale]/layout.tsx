// src/app/[locale]/layout.tsx
import './globals.css';
import { Poppins } from 'next/font/google';
import { AOSInitializer } from '@/components/AOSInitializer';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'João Vitor da Silva',
  description: 'Portfólio desenvolvido com Next.js',
};

interface Params {
  locale: string;
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { locale } = await params;  // Aqui, você deve aguardar o `params`

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={poppins.variable}>
      <body className="font-poppins">
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}
