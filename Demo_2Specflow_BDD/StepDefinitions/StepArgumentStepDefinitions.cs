using System;
using TechTalk.SpecFlow;

namespace Demo_2Specflow_BDD.StepDefinitions
{
    [Binding]
    public class StepArgumentStepDefinitions
    {
        [Given(@"I have current date")]
        public void GivenIHaveCurrentDate()
        {
            Console.WriteLine(1);
        }

        [When(@"I should see current date to next (.*) date")]
        public void WhenIShouldSeeCurrentDateToNextDate(int currentdates)
        {
            Console.WriteLine(DateTime.Today.AddDays(currentdates));
        }

        [Then(@"test must me pass")]
        public void ThenTestMustMePass()
        {
            Console.WriteLine(2);
        }
    }
}
