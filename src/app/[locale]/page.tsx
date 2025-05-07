import { LocaleProvider } from '@/components/LocalProvider';
import Main from '@/components/Main';

type Props = {
  params: { locale: string }; 
};

export default async function Page({ params }: Props) {
  const { locale } = params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <LocaleProvider messages={messages} locale={locale}>
      <Main />
    </LocaleProvider>
  );
}

