// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },
  localePath: path.resolve('./messages'), // Configura o caminho para ler da pasta "messages"
};
