Feature: Calculator
![Calculator](https://specflow.org/wp-content/uploads/2020/09/calculator.png)
Simple calculator for adding **two** numbers

Link to a feature: [Calculator](Demo_2Specflow_BDD/Features/Calculator.feature)
***Further read***: **[Learn more about how to generate Living Documentation](https://docs.specflow.org/projects/specflow-livingdoc/en/latest/LivingDocGenerator/Generating-Documentation.html)**

@mytag
Scenario: Add two numbers
	Given the first number is 50
	And the second number is 70
	When the two numbers are added
	Then the result should be 120

Scenario: Check The Employee Detail
	#Given I have open the website
	#Then I should see employee details in page
	When I fill the all mandatory details
	| name   | age | mobile     | email          |
	| akshay | 22  | 9876543210 | ap@testrig.com |
	| xyz | 23  | 9874543210 | xyz@testrig.com |
	| kp | 21  | 974543210 | kp@testrig.com |

	#And I click the save button
	#Then I will see the all details saved






Scenario Outline: Check The Employee Detail in differnt iteraction
	#Given I have open the website
	#Then I should see employee details in page
	When I fill the all mandatory details <name> , <age> ,<mobile> and <email>
	

	#And I click the save button
	#Then I will see the all details saved
	Examples: 
	| name   | age | mobile     | email           |
	| akshay | 22  | 9876543210 | ap@testrig.com  |
	| xyz    | 23  | 9874543210 | xyz@testrig.com |
	| kp     | 21  | 974543210  | kp@testrig.com  |





Scenario: context Injectction calculater class to injectionemployeedefinaction 
	When I fill the all mandatory details
	| name   | age | mobile     | email          |
	| akshay | 22  | 9876543210 | ap@testrig.com |

	Then I should get the value  from extended class


