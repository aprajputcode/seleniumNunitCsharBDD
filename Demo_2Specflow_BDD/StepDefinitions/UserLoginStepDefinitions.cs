using System;
using TechTalk.SpecFlow;

namespace Demo_2Specflow_BDD.StepDefinitions
{
    [Binding]
    public class UserLoginStepDefinitions
    {
        [When(@"I am attempt to login")]
        [Scope(Feature = "UserLogin")]

        public void WhenIAmAttemptToLogin()
        {
            Console.WriteLine("Login attempting in user page");
        }
    }
}
