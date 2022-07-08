# Features

Generated on: 08 July 2022 at 11:07:06

### Calculator

![Calculator](https://specflow.org/wp-content/uploads/2020/09/calculator.png)

Simple calculator for adding **two** numbers



Link to a feature: [Calculator](Demo_2Specflow_BDD/Features/Calculator.feature)

***Further read***: **[Learn more about how to generate Living Documentation](https://docs.specflow.org/projects/specflow-livingdoc/en/latest/LivingDocGenerator/Generating-Documentation.html)**

*`@mytag`*

#### Scenario: ![Inconclusive](inconclusive.png) Add two numbers
>
> **Given** the first number is 50
>
> **And** the second number is 70
>
> **When** the two numbers are added
>
> **Then** the result should be 120
>
#### Scenario: ![Inconclusive](inconclusive.png) Check The Employee Detail
>
> **When** I fill the all mandatory details
>
> | name | age | mobile | email |
> | --- | --- | --- | --- |
> | akshay | 22 | 9876543210 | ap@testrig.com |
> | xyz | 23 | 9874543210 | xyz@testrig.com |
> | kp | 21 | 974543210 | kp@testrig.com |
>
#### Scenario Outline: Check The Employee Detail in differnt iteraction
>
> **When** I fill the all mandatory details \<name\> , \<age\> ,\<mobile\> and \<email\>
>
> Examples:
>
> | name | age | mobile | email | Result |
> | --- | --- | --- | --- | --- |
> | akshay | 22 | 9876543210 | ap@testrig.com | ![Inconclusive](inconclusive.png) |
> | xyz | 23 | 9874543210 | xyz@testrig.com | ![Inconclusive](inconclusive.png) |
> | kp | 21 | 974543210 | kp@testrig.com | ![Inconclusive](inconclusive.png) |
>
#### Scenario: ![Inconclusive](inconclusive.png) context Injectction calculater class to injectionemployeedefinaction
>
> **When** I fill the all mandatory details
>
> | name | age | mobile | email |
> | --- | --- | --- | --- |
> | akshay | 22 | 9876543210 | ap@testrig.com |
>
> **Then** I should get the value  from extended class
>

### CustomerLogin

A short summary of the feature

*`@customer`*

#### Scenario: ![Inconclusive](inconclusive.png) I should be Able to login on Page
>
> **Given** I should be open the web Apllication
>
> **When** I am attempt to login
>
> **Then** I should be see Customer dashboard
>

### ExcelFile

A short summary of the feature

*`@DataSource:data.xlsx`* *`@DataSet:Sheet1`*

#### Scenario: ![Inconclusive](inconclusive.png) Add two numbers
>
> **Given** the first number is \<num1\>
>
> **And** the second number is \<num2\>
>
> **When** the two numbers are added
>
> **Then** the result should be \<result\>
>

### stepArgument

A short summary of the feature

*`@tag1`*

#### Scenario: ![Inconclusive](inconclusive.png) step argument to add five days in to the current date
>
> **Given** I have current date
>
> **When** I should see current date to next 5 date
>
> **Then** test must me pass
>

### UserLogin

A short summary of the feature

*`@user`*

#### Scenario: ![Inconclusive](inconclusive.png) I should be Able to login on user Page
>
> **Given** I should be open the web Apllication
>
> **When** I am attempt to login
>
> **Then** I should be see user dashboard
>
