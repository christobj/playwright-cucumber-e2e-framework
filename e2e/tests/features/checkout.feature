Feature: Checkout
  As a registered shopper
  I want to complete the checkout process
  So that I can successfully place an order

  Scenario: Complete checkout as a newly registered user
    Given I am logged in as a new user
    And I navigate to the Products page
    And I add the first product to the cart
    When I view the cart
    And I proceed to checkout
    And I place the order with a comment
    And I fill in the payment details and confirm payment
    Then my order should be placed successfully
