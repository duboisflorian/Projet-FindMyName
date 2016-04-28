using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class Manche
    {
        public int id_theme { get; set; }
        public string theme { get; set; }
        public int s1 { get; set; }
        public int s2 { get; set; }

        public Manche(int id_theme, string theme, int s1, int s2)
        {
            this.id_theme = id_theme;
            this.theme = theme;
            this.s1 = s1;
            this.s2 = s2;
        }

    }
}
