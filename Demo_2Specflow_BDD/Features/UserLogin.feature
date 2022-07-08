Feature: UserLogin

A short summary of the feature

@user
Scenario: I should be Able to login on user Page
	Given I should be open the web Apllication
	When I am attempt to login
	Then I should be see user dashboard
