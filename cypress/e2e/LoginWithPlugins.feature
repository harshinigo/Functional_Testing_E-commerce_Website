Feature: User Login
  As a registered user
  I want to log in to my account
  So that I can access the website's features
  
  Background:
  Given I am on the login page
  Then I clicked on Signup / Login
  
  Scenario: Successful Login 
    When I enter valid credentials
    And I click the login button
    Then I should be logged in to my account

  Scenario: Unsuccessful Login
    When I enter invalid credentials
    And I click the login button
    Then I should see an error message
