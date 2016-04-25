using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public class ReponsesService
    {
        public List<ListeReponses> REPONSES { get; set; }
    }

    public class Reponse
    {
        public string text { get; set; }
        public bool done { get; set; }
    }

    public class ListeReponses
    {
        public int id { get; set; }
        public List<Reponse> reponses { get; set; }
    }

}
