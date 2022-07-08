using TechTalk.SpecFlow;

namespace Demo_2Specflow_BDD.StepDefinitions
{
    [Binding]
    public sealed class testfeature
    {


        [BeforeScenario]
        public void FirstBeforeScenario()
        {
            Console.WriteLine("before scenarios");
        }

        [AfterScenario]
        public void AfterScenario()
        {
            Console.WriteLine("after scenarios");
        }
    }
}