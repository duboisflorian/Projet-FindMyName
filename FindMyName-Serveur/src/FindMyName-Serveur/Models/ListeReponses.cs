using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class ListeReponses
    {
        public int id { get; set; }
        public List<Reponse> reponses { get; set; }
        public ListeReponses(int v, List<Reponse> list)
        {
            this.id = v;
            this.reponses = list;
        }


    }
}
