Feature: Login functionality

Background:
  Given I open the practice Website 
  Then I clicked on Sign /Login

Scenario:1 | Successful Login with Valid Credentials
  When I enter valid new registration user name and email-id
  Then I am on the registration page to Enter Account Information
  And I submit the registration form
  Then I should be redirected to the welcome page
  And I should see a message "Account Created!"

Scenario:2 | Registration fails with an already used email
  When I enter an email that is already in use 
  Then I should remain on the registration page
  And I should see an error message "Email already in use"  

Scenario:3 | Registration with missing mandatory fields
  When I enter valid registration user name and email-id
  Then I submit the registration form with missing mandatory fields
  And I submit the registration form 
  Then I should see error messages for all mandatory fields  
