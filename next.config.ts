import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['encrypted-tbn0.gstatic.com'], // Adicione o domínio aqui
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
