using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class Reponse : BaseObject
    {
        public virtual IList<Mot> Appellations { get; private set; }
        public bool done { get; set; }

        public Reponse() : this(false, new List<Mot>())
        {
            
        }

        public Reponse(bool done, List<Mot> appellations)
        {
            Appellations = new List<Mot>(appellations);
            this.done = done;
        }
    }
}
