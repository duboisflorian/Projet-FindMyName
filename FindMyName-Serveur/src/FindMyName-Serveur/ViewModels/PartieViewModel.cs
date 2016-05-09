using FindMyName_Serveur.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.ViewModels
{
    public class PartieViewModel
    {
        public int id_partie { get; set; }
        public int id_j1 { get; set; }
        public int id_j2 { get; set; }
        public string j1 { get; set; }
        public string j2 { get; set; }
        public int s1 { get; set; }
        public int s2 { get; set; }
        public int player { get; set; }
        public virtual IEnumerable<Manche> manche { get; set; }

        public PartieViewModel(int id_partie, int id_j1, int id_j2, string j1, string j2, int s1, int s2, int player, List<Manche> manche)
        {
            this.id_partie = id_partie;
            this.id_j1 = id_j1;
            this.id_j2 = id_j2;
            this.j1 = j1;
            this.j2 = j2;
            this.s1 = s1;
            this.s2 = s2;
            this.player = player;
            this.manche = manche;
        }

        public PartieViewModel()
        {
        }
    }
}
