jsonPWrapper ({
  "Features": [
    {
      "RelativeFolder": "Calculator.feature",
      "Feature": {
        "Name": "Calculator",
        "Description": "![Calculator](https://specflow.org/wp-content/uploads/2020/09/calculator.png)\r\nSimple calculator for adding **two** numbers\r\n\r\nLink to a feature: [Calculator](Demo_2Specflow_BDD/Features/Calculator.feature)\r\n***Further read***: **[Learn more about how to generate Living Documentation](https://docs.specflow.org/projects/specflow-livingdoc/en/latest/LivingDocGenerator/Generating-Documentation.html)**",
        "FeatureElements": [
          {
            "Name": "Add two numbers",
            "Slug": "add-two-numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first number is 50",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the second number is 70",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are added",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be 120",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@mytag"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          },
          {
            "Name": "Check The Employee Detail",
            "Slug": "check-the-employee-detail",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I fill the all mandatory details",
                "TableArgument": {
                  "HeaderRow": [
                    "name",
                    "age",
                    "mobile",
                    "email"
                  ],
                  "DataRows": [
                    [
                      "akshay",
                      "22",
                      "9876543210",
                      "ap@testrig.com"
                    ],
                    [
                      "xyz",
                      "23",
                      "9874543210",
                      "xyz@testrig.com"
                    ],
                    [
                      "kp",
                      "21",
                      "974543210",
                      "kp@testrig.com"
                    ]
                  ]
                },
                "StepComments": [
                  {
                    "Text": "#Given I have open the website"
                  },
                  {
                    "Text": "#Then I should see employee details in page"
                  }
                ],
                "AfterLastStepComments": [
                  {
                    "Text": "#And I click the save button"
                  },
                  {
                    "Text": "#Then I will see the all details saved"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          },
          {
            "Examples": [
              {
                "Name": "",
                "TableArgument": {
                  "HeaderRow": [
                    "name",
                    "age",
                    "mobile",
                    "email"
                  ],
                  "DataRows": [
                    [
                      "akshay",
                      "22",
                      "9876543210",
                      "ap@testrig.com",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "xyz",
                      "23",
                      "9874543210",
                      "xyz@testrig.com",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ],
                    [
                      "kp",
                      "21",
                      "974543210",
                      "kp@testrig.com",
                      {
                        "WasExecuted": false,
                        "WasSuccessful": false,
                        "WasProvided": true
                      }
                    ]
                  ]
                },
                "Tags": [],
                "NativeKeyword": "Examples"
              }
            ],
            "Name": "Check The Employee Detail in differnt iteraction",
            "Slug": "check-the-employee-detail-in-differnt-iteraction",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I fill the all mandatory details <name> , <age> ,<mobile> and <email>",
                "StepComments": [
                  {
                    "Text": "#Given I have open the website"
                  },
                  {
                    "Text": "#Then I should see employee details in page"
                  }
                ],
                "AfterLastStepComments": [
                  {
                    "Text": "#And I click the save button"
                  },
                  {
                    "Text": "#Then I will see the all details saved"
                  }
                ]
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          },
          {
            "Name": "context Injectction calculater class to injectionemployeedefinaction",
            "Slug": "context-injectction-calculater-class-to-injectionemployeedefinaction",
            "Description": "",
            "Steps": [
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I fill the all mandatory details",
                "TableArgument": {
                  "HeaderRow": [
                    "name",
                    "age",
                    "mobile",
                    "email"
                  ],
                  "DataRows": [
                    [
                      "akshay",
                      "22",
                      "9876543210",
                      "ap@testrig.com"
                    ]
                  ]
                },
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should get the value  from extended class",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "CustomerLogin.feature",
      "Feature": {
        "Name": "CustomerLogin",
        "Description": "A short summary of the feature",
        "FeatureElements": [
          {
            "Name": "I should be Able to login on Page",
            "Slug": "i-should-be-able-to-login-on-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I should be open the web Apllication",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I am attempt to login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should be see Customer dashboard",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@customer"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "ExcelFile.feature",
      "Feature": {
        "Name": "ExcelFile",
        "Description": "A short summary of the feature",
        "FeatureElements": [
          {
            "Name": "Add two numbers",
            "Slug": "add-two-numbers",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "the first number is <num1>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "And",
                "NativeKeyword": "And ",
                "Name": "the second number is <num2>",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "the two numbers are added",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "the result should be <result>",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@DataSource:data.xlsx",
              "@DataSet:Sheet1"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "stepArgument.feature",
      "Feature": {
        "Name": "stepArgument",
        "Description": "A short summary of the feature",
        "FeatureElements": [
          {
            "Name": "step argument to add five days in to the current date",
            "Slug": "step-argument-to-add-five-days-in-to-the-current-date",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I have current date",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I should see current date to next 5 date",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "test must me pass",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@tag1"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    },
    {
      "RelativeFolder": "UserLogin.feature",
      "Feature": {
        "Name": "UserLogin",
        "Description": "A short summary of the feature",
        "FeatureElements": [
          {
            "Name": "I should be Able to login on user Page",
            "Slug": "i-should-be-able-to-login-on-user-page",
            "Description": "",
            "Steps": [
              {
                "Keyword": "Given",
                "NativeKeyword": "Given ",
                "Name": "I should be open the web Apllication",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "When",
                "NativeKeyword": "When ",
                "Name": "I am attempt to login",
                "StepComments": [],
                "AfterLastStepComments": []
              },
              {
                "Keyword": "Then",
                "NativeKeyword": "Then ",
                "Name": "I should be see user dashboard",
                "StepComments": [],
                "AfterLastStepComments": []
              }
            ],
            "Tags": [
              "@user"
            ],
            "Result": {
              "WasExecuted": false,
              "WasSuccessful": false,
              "WasProvided": true
            }
          }
        ],
        "Result": {
          "WasExecuted": false,
          "WasSuccessful": false,
          "WasProvided": true
        },
        "Tags": []
      },
      "Result": {
        "WasExecuted": false,
        "WasSuccessful": false,
        "WasProvided": true
      }
    }
  ],
  "Summary": {
    "Tags": [
      {
        "Tag": "@mytag",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@customer",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@DataSource:data.xlsx",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@DataSet:Sheet1",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@tag1",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Tag": "@user",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      }
    ],
    "Folders": [
      {
        "Folder": "Calculator.feature",
        "Total": 4,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 4
      },
      {
        "Folder": "CustomerLogin.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "ExcelFile.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "stepArgument.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      },
      {
        "Folder": "UserLogin.feature",
        "Total": 1,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 1
      }
    ],
    "NotTestedFolders": [
      {
        "Folder": "Calculator.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "CustomerLogin.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "ExcelFile.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "stepArgument.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      },
      {
        "Folder": "UserLogin.feature",
        "Total": 0,
        "Passing": 0,
        "Failing": 0,
        "Inconclusive": 0
      }
    ],
    "Scenarios": {
      "Total": 8,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 8
    },
    "Features": {
      "Total": 5,
      "Passing": 0,
      "Failing": 0,
      "Inconclusive": 5
    },
    "FoldersWithTestKinds": [
      {
        "Folder": "Calculator.feature",
        "Total": 4,
        "Automated": 4,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "CustomerLogin.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "ExcelFile.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "stepArgument.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      },
      {
        "Folder": "UserLogin.feature",
        "Total": 1,
        "Automated": 1,
        "Manual": 0,
        "NotTested": 0
      }
    ]
  },
  "Configuration": {
    "SutName": "Demo_2Specflow_BDD_Result",
    "SutVersion": "1.0",
    "GeneratedOn": "8 July 2022 11:07:06"
  }
});