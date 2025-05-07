import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { AOSInitializer } from "@/components/AOSInitializer";
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from "next-intl";
import { routing, Locale } from "@/i18n/routing";
import { notFound } from "next/navigation";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'João Vitor da Silva - Desenvolvedor Full Stack',
  description: 'Portfólio desenvolvido com Next.js',
  icons: {
    icon: '/favicon.ico',
  },
};

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // como seu amigo fez
};

const RootLayout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={poppins.variable}>
      <body className="font-poppins">
        <AOSInitializer />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
