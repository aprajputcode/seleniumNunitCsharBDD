using TechTalk.SpecFlow.Assist;
using TechTalk.SpecFlow;
using NUnit.Framework;

[assembly:Parallelizable(ParallelScope.Fixtures)]
namespace Demo_2Specflow_BDD.StepDefinitions
{


    public  class EmployeeInjection
        {
       

        }
    [Binding]
    public sealed class CalculatorStepDefinitions
    {
        //injection
        public readonly EmplyoeeDetails employee;
        public CalculatorStepDefinitions(EmplyoeeDetails emp)
        {
            this.employee = emp;
        }



        int number1, number2;

        [Given("the first number is (.*)")]
        public void GivenTheFirstNumberIs(int number)
        {
            number1 = number;
            Console.WriteLine((int)number);
        }

        [Given("the second number is (.*)")]
        public void GivenTheSecondNumberIs(int number)
        {
            number2= number;
            Console.WriteLine((int)number);
        }

        [When("the two numbers are added")]
        public void WhenTheTwoNumbersAreAdded()
        {
            
            Console.WriteLine("Add the Two Number");
        }

        [Then("the result should be (.*)")]
        public void ThenTheResultShouldBe(int result)
        {
            if ((int)result ==number1+number2)
            {
                Console.WriteLine("test case pass");
            }
            else
            {
                Console.WriteLine("test cas failed");
                throw new Exception("invalid output");
            }
        }
        [When(@"I fill the all mandatory details")]
        //public void WhenIFillTheAllMandatoryDetails(IEnumerable<dynamic> menu)
        public void WhenIFillTheAllMandatoryDetails(Table table)
        {

            //for single data
            //EmplyoeeDetails details= table.CreateInstance<EmplyoeeDetails>();
            //Console.WriteLine(details.name);
            //Console.WriteLine(details.age);
            //Console.WriteLine(details.mobile);
            //Console.WriteLine(details.email);


            //for multiple data
            //var details = table.CreateSet<EmplyoeeDetails>();
            //foreach(EmplyoeeDetails Items in details)
            //{
            //    Console.WriteLine("Employee Details");
            //    Console.WriteLine("=========================================");
            //    Console.WriteLine(Items.name);
            //    Console.WriteLine(Items.age);
            //    Console.WriteLine(Items.mobile);
            //    Console.WriteLine(Items.email);

            //}


            // //dynamic tables
            //var details= table.CreateDynamicSet();

            // //iterate
            // foreach(var items in details)
            // {
            //      Console.WriteLine("Employee Details");
            //      Console.WriteLine("=========================================");
            //      Console.WriteLine(items.name);
            //      Console.WriteLine(items.age);
            //      Console.WriteLine(items.mobile);
            //      Console.WriteLine(items.email);


            // }

            ////injection
            //var details = table.CreateDynamicSet();

            ////iterate
            // foreach(var items in details)
            // {

            //    employee.name=(string)items.name;
            //    employee.age =(int) items.age;
            //    employee.mobile=(long)items.mobile;
            //    employee.email=(string)items.email;
            // }
            //var menus = menu.First();
            //Console.WriteLine("fisrt element is {0} and second elements is{2}",(string) menus.name,(int) menus.age);

        }


        [When(@"I fill the all mandatory details (.*), (.*) ,(.*) and (.*)")]
        public void WhenIFillTheAllMandatoryDetailsAkshayAndApTestrig_Com(string name, int age, Int64 mobile, string email)
        {
            //by using senario outlines
            Console.WriteLine(name);
            Console.WriteLine(age);
            Console.WriteLine(mobile);
            Console.WriteLine(email);



            //scenariocontect 
            ScenarioContext.Current["employee"] = "employee test run sucefully";

            Console.WriteLine(ScenarioContext.Current["employee"].ToString());

            //list of of employee details class
            List<EmplyoeeDetails> emplyoeedetails = new List<EmplyoeeDetails>() { 
            new EmplyoeeDetails()
            {
                name="akshay",
                age=23,
                mobile=1234567890
            },
            new EmplyoeeDetails()
            {
                name="aj",
                age=32,
                mobile=1234567890
            }
            };
            // set the value of list in the scenarioContext
            ScenarioContext.Current.Add("EmpDetails", emplyoeedetails);
            //get the value of list by using scenarioContect  <name of the class>("key of the add action")
            var emplist = ScenarioContext.Current.Get<IEnumerable<EmplyoeeDetails>>("EmpDetails");
            //display the list Class ame and create object of class in name of the get object
            foreach(EmplyoeeDetails emp in emplist)
            {
                Console.WriteLine(emp.name);
                Console.WriteLine(emp.age);
                Console.WriteLine(emp.mobile);

            }
        }

       

    }
}