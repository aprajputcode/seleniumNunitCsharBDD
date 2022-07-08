using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo_2Specflow_BDD.StepDefinitions
{
    public class stepargument
    {

        [StepArgumentTransformation(@"(\d+)")]
        public DateTime arguement(int datetime)
        {
            return DateTime.Today.AddDays(datetime);
        }
    }
}
