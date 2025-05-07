const path = require('path');

module.exports = {
  i18n: {
    locales: ['pt', 'en'], // Defina os idiomas disponíveis
    defaultLocale: 'pt', // Defina o local padrão para sua aplicação
  },
  localePath: path.resolve('./messages'), // Defina o caminho para a pasta de mensagens (traduções)
  reloadOnPrerender: true, // Recarregar as traduções no modo de renderização
  // Se você estiver usando o "timeZone" no Next.js, pode incluir as configurações de fuso horário aqui também:
  // Configure o fuso horário global se necessário (dependendo da lógica do seu projeto).
};
