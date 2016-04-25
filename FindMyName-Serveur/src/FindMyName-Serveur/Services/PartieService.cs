using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public class PartieService
    {
        public List<Partie> PARTIES { get; set; }
    }


    public class Manche
    {
        public int id_theme { get; set; }
        public string theme { get; set; }
        public int s1 { get; set; }
        public int s2 { get; set; }
    }

    public class Partie
    {
        public int id_partie { get; set; }
        public int id_j1 { get; set; }
        public int id_j2 { get; set; }
        public string j1 { get; set; }
        public string j2 { get; set; }
        public int s1 { get; set; }
        public int s2 { get; set; }
        public int player { get; set; }
        public List<Manche> manche { get; set; }
    }

}
