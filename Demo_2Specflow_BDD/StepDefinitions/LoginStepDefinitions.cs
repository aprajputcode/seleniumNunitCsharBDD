using System;
using TechTalk.SpecFlow;

namespace Demo_2Specflow_BDD.StepDefinitions
{
    [Binding]
    public class LoginStepDefinitions
    {
        [Given(@"I should be open the web Apllication")]
        public void GivenIShouldBeOpenTheWebApllication()
        {
            Console.WriteLine("hit the page");
        }

        [When(@"I am attempt to login")]
        [Scope(Feature ="CustomerLogin")]
        public void WhenIAmAttemptToLogin()
        {
            Console.WriteLine("Login attemeting  cutomer page");
        }
        

        [Then(@"I should be see Customer dashboard")]
        public void ThenIShouldBeSeeCustomerDashboard()
        {
            Console.WriteLine("Login succefully to  customer page");
        }

        [Then(@"I should be see user dashboard")]
        public void ThenIShouldBeSeeUserDashboard()
        {
            Console.WriteLine("Login succefully to  user page");
        }

    }
}
