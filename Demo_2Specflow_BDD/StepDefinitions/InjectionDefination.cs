using System;
using TechTalk.SpecFlow;

namespace Demo_2Specflow_BDD.StepDefinitions
{
    [Binding]
    public class InjectionDefination
    {
        public readonly EmplyoeeDetails employee;
        public InjectionDefination(EmplyoeeDetails emp)
        {
            this.employee = emp;
        }
        [Then(@"I should get the value  from extended class")]
        public void ThenIShouldGetTheValueFromExtendedClass()
        {
            Console.WriteLine(employee.name);
            Console.WriteLine(employee.age);
            Console.WriteLine(employee.email);
            Console.WriteLine(employee.mobile);
        }
    }
}
