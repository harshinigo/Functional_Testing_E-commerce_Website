Feature: Product Browsing
  As a user
  I want to browse through product categories
  So that I can view product details and make purchases
Background:
  Given I am on the login page
  Then I clicked on Sign /Login
  When I enter valid credentials
  And I click the login button
  
 Scenario: 1 | View Product Categories
  When I navigate to the "Womens Dress" category
  Then I should see a list of "Womens Dress" products

 Scenario: 2 | View Product Details
  When I navigate to the "Tshirt" category
  When I click on a product
  And I should see the product details
