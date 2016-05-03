using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class Reponse
    {
        public int id { get; set; }
        public virtual IList<Mot> appellation { get; set; }
        public bool done { get; set; }

        public Reponse()
        {

        }

        public Reponse(int id,bool done, List<Mot> appellation)
        {
            this.id = id;
            this.appellation = appellation;
                this.done = done;
        }
    }
}
