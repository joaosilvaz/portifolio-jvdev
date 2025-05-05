import './globals.css';
import { Poppins } from 'next/font/google';
import { AOSInitializer } from '@/components/AOSInitializer';
import { NextIntlClientProvider } from 'next-intl';
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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = (await import(`/messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={poppins.variable}>
      <body className="font-poppins">
        <NextIntlClientProvider messages={messages}>
          <AOSInitializer />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
