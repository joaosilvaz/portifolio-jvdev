'use client';
import { NextIntlClientProvider } from 'next-intl';
import { AbstractIntlMessages } from 'next-intl';

type Props = {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
};

export function LocaleProvider({ children, messages, locale }: Props) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
