import { LocaleProvider } from '../../components/LocalProvider';
import Main from '@/components/Main';

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <LocaleProvider messages={messages} locale={locale}>
      <Main />
    </LocaleProvider>
  );
}
