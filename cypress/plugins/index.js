// cypress/plugins/index.js
const { writeFile } = require('fs');

module.exports = (on, config) => {
  require('cypress-file-upload')(on, config);

  // Outras configurações de plugins, se houver
  // ...

  // Retorna configuração modificada (opcional)
  return config;
};
