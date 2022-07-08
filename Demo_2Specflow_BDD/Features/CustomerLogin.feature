Feature: CustomerLogin

A short summary of the feature

@customer
Scenario: I should be Able to login on Page
	Given I should be open the web Apllication
	When I am attempt to login
	Then I should be see Customer dashboard
