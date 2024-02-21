import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";

// const randomNumber1 = Math.floor(Math.random() * 10000);
// const newemail1 = `test${randomNumber1}@example.com`;

let newemail1, newemail2;
Before(() => {
  const randomNumber1 = Math.floor(Math.random() * 10000);
  let randomNumber2 = Math.floor(Math.random() * 10000);
  while (randomNumber2 === randomNumber1) {
    randomNumber2 = Math.floor(Math.random() * 10000);
  }
  newemail1 = `test${randomNumber1}@example.com`;
  newemail2 = `test${randomNumber2}@example.com`;
});

//1 | Successful Login with Valid Credentials
Given("I open the practice Website", () => {
  cy.visit("https://www.automationexercise.com/");
});
Then("I clicked on Sign /Login", () => {
  cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
});

When("I enter valid new registration user name and email-id", () => {
  cy.get('[data-qa="signup-name"]').type("John Doe");
  cy.get('[data-qa="signup-email"]').type(newemail1);
  cy.get('[data-qa="signup-button"]').click();
});

Then("I am on the registration page to Enter Account Information", () => {
  cy.get("#id_gender1").click();
  cy.get('[data-qa="password"]').type("SecurePassword123");
  cy.get('[data-qa="days"]').select("21");
  cy.get('[data-qa="months"]').select("September");
  cy.get('[data-qa="years"]').select("2000");
  cy.get('[data-qa="first_name"]').type("John");
  cy.get('[data-qa="last_name"]').type("Doe");
  cy.get('[data-qa="company"]').type("Demo");
  cy.get('[data-qa="address"]').type("address");
  cy.get('[data-qa="address2"]').type("address2");
  cy.get('[data-qa="country"]').select("India");
  cy.get('[data-qa="state"]').type("Karnataka");
  cy.get('[data-qa="city"]').type("Mysore");
  cy.get('[data-qa="zipcode"]').type("12345");
  cy.get('[data-qa="mobile_number"]').type("0987654321");
});

And("I submit the registration form", () => {
  cy.get('[data-qa="create-account"]').click();
});

Then("I should be redirected to the welcome page", () => {
  cy.url().should("include", "/account_created");
});

And('I should see a message "Account Created!"', () => {
  // cy.contains("Account Created!").should("be.visible");
  cy.get("b").should("contain", "Account Created!");
});

//2 | Registration fails with an already used email
When("I enter an email that is already in use", () => {
  cy.get('[data-qa="signup-name"]').type("John Doe");
  cy.get('[data-qa="signup-email"]').type("john.demo2@example.com");
  cy.get('[data-qa="signup-button"]').click();
});

Then("I should remain on the registration page", () => {
  cy.url().should("include", "/signup");
});

And('I should see an error message "Email already in use"', () => {
  cy.get(".signup-form > form > p").should(
    "contain",
    "Email Address already exist"
  );
});

//3 | Registration with missing mandatory fields
When("I enter valid registration user name and email-id", () => {
  cy.get('[data-qa="signup-name"]').type("John Doe");
  cy.get('[data-qa="signup-email"]').type(newemail2);
  cy.get('[data-qa="signup-button"]').click();
});

Then("I submit the registration form with missing mandatory fields", () => {
  cy.get('[data-qa="company"]').type("Demo");
});
Then("I should see error messages for all mandatory fields", () => {
  cy.on("window:alert", (text) => {
    expect(text).to.contains("Please fill out this field");
  });
});
