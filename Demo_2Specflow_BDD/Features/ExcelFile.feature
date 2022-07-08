Feature: ExcelFile

A short summary of the feature

@DataSource:data.xlsx @DataSet:Sheet1
Scenario: Add two numbers
	Given the first number is <num1>
	And the second number is <num2>
	When the two numbers are added
	Then the result should be <result>
