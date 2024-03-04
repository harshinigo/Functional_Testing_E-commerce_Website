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

When("I navigate to the {string} category", (category) => {
  cy.contains("Products").click();
  cy.get("#search_product").type(category);
  cy.get("#submit_search").click();
});

Then("I should see a list of {string} products", (category) => {
  const expectedSearchQuery =
    "/products?search=" + encodeURIComponent(category.toLowerCase());

  cy.url().then((url) => {
    expect(url.toLowerCase()).to.include(expectedSearchQuery);
  });
  cy.get(".features_items").should("have.length.gt", 0);
});

When("I click on a product", () => {
  cy.contains("View Product").first().click();
});

Then("I should see the product details", () => {
  cy.url().should("include", "/product_detail");
  // Assert product details are visible, such as name, price, description, etc.
  cy.get(".product-details").should("be.visible");
});
