using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class ResIDViewModel
    {
        public string text { get; set; }
        public int id { get; set; }

        public ResIDViewModel(string t, int i)
        {
            this.text = t;
            this.id = i;
        }

    }
}
