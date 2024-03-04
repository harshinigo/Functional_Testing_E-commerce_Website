const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber()); //step ensures that the cucumber preprocessor is applied to your feature files before they are processed by Cypress.
      return config; //return the updated config object to ensure the Cypress configuration is properly updated with the preprocessor setup.
    },
    specPattern: "**/*.feature",
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: false,
  },
});
