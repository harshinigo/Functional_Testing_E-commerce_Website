import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the login page", () => {
  cy.visit("https://www.automationexercise.com/");
});
Then("I clicked on Sign /Login", () => {
  cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
});
When("I enter valid credentials", () => {
  cy.get('[data-qa="login-email"]').type("john.demo2@example.com");
  cy.get('[data-qa="login-password"]').type("SecurePassword123");
});
And("I click the login button", () => {
  cy.get('[data-qa="login-button"]').click();
});

Given("I am on the product page", () => {
  cy.contains("Products").click();
  cy.contains("View Product").first().click();
});

When('I click on the "Add to Cart" button', () => {
  cy.contains("Add to cart").click();
});

When("I navigate to the cart", () => {
  cy.contains('View Cart').click();
});

When('I click on the "Proceed to Checkout" button', () => {
  cy.contains('Proceed To Checkout').click();
});

Then("I should be on the checkout page", () => {
  cy.url().should("include", "/checkout");
});
