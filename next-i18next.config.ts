const path = require('path');

module.exports = {
  i18n: {
    locales: ['pt', 'en'], 
    defaultLocale: 'pt', 
  },
  localePath: path.resolve('./messages'), 
  reloadOnPrerender: true, 
};
