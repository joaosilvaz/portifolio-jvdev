import { LocaleProvider } from '@/components/LocalProvider';
import Main from '@/components/Main';

type Props = {
  params: { locale: string } | Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  // Aguarda a resolução de `params` se for uma Promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // Carrega as mensagens dinamicamente com base no `locale`
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <LocaleProvider messages={messages} locale={locale}>
      <Main />
    </LocaleProvider>
  );
}

