using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class ResViewModel
    {
        public string text { get; set; }

        public ResViewModel(string t)
        {
            this.text = t;

        }

    }
}
