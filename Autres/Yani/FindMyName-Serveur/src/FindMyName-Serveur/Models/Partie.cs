using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FindMyName_Serveur.Models
{
    public class Partie : BaseObject
    {
        public virtual  Utilisateur j1 { get; set; }
        public virtual Utilisateur j2 { get; set; }
        public int s1 { get; set; }
        public int s2 { get; set; }
        public int player { get; set; }
        public virtual IList<Manche> Manches { get; private set; }

        public Partie(Utilisateur j1,Utilisateur j2, int s1, int s2, int player, IEnumerable<Manche> manches)
        {
            this.j1 = j1;
            this.j2 = j2;
            this.s1 = s1;
            this.s2 = s2;
            this.player = player;
            Manches = new List<Manche>(manches);
        }

        public Partie()
        {
        }
    }
}
