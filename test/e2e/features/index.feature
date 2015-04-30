Feature: Home Page

  Scenario: Validate home page
    Given I am on home page 
    When I see home tab
    And I see Mortgage Loan tab
    And I see Car Loan content
    When I click on weather tab
    Then I see about content