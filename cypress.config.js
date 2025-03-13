// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    retries: {
      runMode: 2,   // Retries failed tests 2 times when running in CLI mode
      openMode: 0,  // No retries when running tests in Cypress GUI
    },
  },
});
