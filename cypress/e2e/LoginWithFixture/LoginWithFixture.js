import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
  cy.visit("https://www.automationexercise.com/");
});

Then("I clicked on Signup / Login", () => {
  cy.contains("Signup / Login").click();
});

When("I enter valid credentials", () => {
  cy.get('[data-qa="login-email"]').type("john.demo2@example.com");
  cy.get('[data-qa="login-password"]').type("SecurePassword123");
});

When("I enter invalid credentials", () => {
  cy.get('[data-qa="login-email"]').type("john.demo2@example.com");
  cy.get('[data-qa="login-password"]').type("securePassword123");
});

//Using fixture files
//Implementing test data management using fixtures:
When("I enter valid credentials", () => {
  cy.fixture("User").then((userData) => {
    cy.get('[data-qa="login-email"]').type(userData.validUser.email);
    cy.get('[data-qa="login-password"]').type(userData.validUser.password);
  });
});

When("I enter invalid credentials", () => {
  cy.fixture("User").then((userData) => {
    cy.get('[data-qa="login-email"]').type(userData.invalidUser.email);
    cy.get('[data-qa="login-password"]').type(userData.invalidUser.password);
  });
});

And("I click the login button", () => {
  cy.get('[data-qa="login-button"]').click();
});

Then("I should be logged in to my account", () => {
  cy.contains("Logged in as").should("be.visible");
});

Then("I should see an error message", () => {
  cy.contains("Your email or password is incorrect!").should("be.visible");
});
