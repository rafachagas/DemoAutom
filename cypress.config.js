const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 5000,

  envi: {
    NODE_ENV: 'development',
  },
  cache: false,

  e2e: {
    baseUrl: 'https://buger-eats.vercel.app/',
    setupNodeEvents(on, config) {
    },
  },
});

