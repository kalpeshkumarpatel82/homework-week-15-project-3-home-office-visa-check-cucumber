@regression
Feature: Search functionality home office visa check

  Scenario: Search the visa requirement for an Australian Tourist
    Given I am on homepage
    When I select nationality "australia"
    And I click on next step on nationality page
    Then I select reason for visit "tourism"
    And I click on next step on reason for travel page
    Then I see the result "You will not need a visa to come to the UK"

  Scenario: Search the visa requirement for a Chilean health worker staying longer than six month
    Given I am on homepage
    When I select nationality "chile"
    And I click on next step on nationality page
    Then I select reason for visit "work"
    And I click on next step on reason for travel page
    Then I select length of stay "longer than 6 months" on duration of stay page
    And I click on next step on duration of stay page
    Then I select job type "health" on work type page
    And I click on next step on work type page
    Then I see the result "You need a visa to work in health and care"

  Scenario: Search the visa requirement for a Columbian joining a partner
    Given I am on homepage
    When I select nationality "colombia"
    And I click on next step on nationality page
    Then I select reason for visit "family"
    And I click on next step on reason for travel page
    Then I select immigration status "yes"
    And I click on next step on immigration status page
    Then I see the result "You’ll need a visa to join your family or partner in the UK"

