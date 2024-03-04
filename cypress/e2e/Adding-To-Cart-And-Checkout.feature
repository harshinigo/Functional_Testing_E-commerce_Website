Feature: Adding to Cart and Checkout
  As a customer
  I want to add items to my cart and complete the checkout process
Background:
  Given I am on the login page
  Then I clicked on Sign /Login
  When I enter valid credentials
  And I click the login button
  
  Scenario: Add Item to Cart and Proceed to Checkout
    Given I am on the product page
    When I click on the "Add to Cart" button
    And I navigate to the cart
    And I click on the "Proceed to Checkout" button
    Then I should be on the checkout page
