Feature: Product Search
  As a shopper
  I want to search for products
  So that I can find items I'm interested in

  Background:
    Given I am on the Automation Exercise home page
    And I navigate to the Products page

  Scenario: Searching for a product returns matching results
    When I search for the product "Dress"
    Then the "Searched Products" heading should be visible
    And at least one displayed product should relate to "Dress"

  Scenario: Viewing a product opens its detail page
    When I view the first product in the list
    Then I should be taken to the product details page
