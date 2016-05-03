using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class Manche
    {
        public int id { get; set; }
        public virtual Theme theme { get; set; }
        public int s1 { get; set; }
        public int s2 { get; set; }

        public Manche(int i,Theme t,int s1, int s2)
        {
            this.id = i;
            this.theme = t;
            this.s1 = s1;
            this.s2 = s2;
        }

    }
}
