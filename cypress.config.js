const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Outras configurações de E2E
    setupNodeEvents(on, config) {
      // Configurações adicionais
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,


  
})
