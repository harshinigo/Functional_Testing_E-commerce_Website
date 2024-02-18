const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      return config;
    },
    specPattern: "cypress/e2e/*.feature",
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: false,
  },
});