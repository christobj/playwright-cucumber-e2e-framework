Feature: Shopping Cart
  As a shopper
  I want to add and remove products from my cart
  So that I can manage what I intend to purchase

  Background:
    Given I am on the Automation Exercise home page
    And I navigate to the Products page

  Scenario: Adding a product to the cart
    When I add the first product to the cart
    And I view the cart
    Then the cart should contain 1 product

  Scenario: Removing a product from the cart
    Given I have added the first product to the cart
    When I view the cart
    And I remove that product from the cart
    Then the cart should be empty
