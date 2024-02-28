const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // for setting the height of the viewport
  viewportWidth: 1366,
  viewportHeight: 931,
  env:{
    url: "https://www.telus.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
  },
});
