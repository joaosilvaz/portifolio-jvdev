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
};

// A função RootLayout precisa ser assíncrona para lidar com o `params`
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // Não é mais necessário Promise, pois o Next resolve isso automaticamente
}) {
  // Esperando a resolução de `params`
  const { locale } = params; // O Next já resolve os params automaticamente

  // Verifica se o locale é válido
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Configuração do timeZone
  if (typeof window !== 'undefined') {
    const timeZone = 'UTC';  // Defina o fuso horário que desejar
    Intl.DateTimeFormat().resolvedOptions().timeZone = timeZone;
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
