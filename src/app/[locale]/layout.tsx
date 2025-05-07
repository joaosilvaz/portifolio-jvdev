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
  title: 'João Vitor da Silva - Desenvolvedor Full Stack',
  description: 'Portfólio desenvolvido com Next.js',
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>; 
}) {
  
  const { locale } = await params; 

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
