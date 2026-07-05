Feature: Registration and Login
  As a new visitor
  I want to register an account and log in
  So that I can access member-only features like checkout

  Scenario: Register a new user successfully
    Given I am on the Automation Exercise home page
    When I navigate to the Signup / Login page
    And I sign up with a new random name and email
    And I fill in the account information and submit
    Then my account should be created successfully
    And I should be logged in

  Scenario: Login with incorrect credentials shows an error
    Given I am on the Automation Exercise home page
    When I navigate to the Signup / Login page
    And I attempt to log in with an invalid email and password
    Then I should see a login error message

  Scenario: Logout returns to the logged-out navigation state
    Given I am logged in as a new user
    When I log out
    Then I should see the Signup / Login navigation link again
