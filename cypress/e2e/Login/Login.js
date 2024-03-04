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
  cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
});

When("I enter valid credentials", () => {
  cy.get('[data-qa="login-email"]').type("john.demo2@example.com");
  cy.get('[data-qa="login-password"]').type("SecurePassword123");
});

When("I enter invalid credentials", () => {
  cy.get('[data-qa="login-email"]').type("john.demo2@example.com");
  cy.get('[data-qa="login-password"]').type("securePassword123");
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
