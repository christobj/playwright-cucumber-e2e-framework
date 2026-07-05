Feature: Home Page
  As a visitor to Automation Exercise
  I want the home page to load correctly with core navigation
  So that I can access the rest of the site with confidence

  Background:
    Given I am on the Automation Exercise home page

  Scenario: Home page loads with all main navigation elements visible
    Then the page title should contain "Automation Exercise"
    And the "Home", "Products", "Cart" and "Signup / Login" navigation links should be visible

  Scenario: Subscribing to the newsletter with a valid email succeeds
    When I subscribe to the newsletter with a valid email address
    Then I should see the subscription success message
