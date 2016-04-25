using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public static class PartieService
    {
        public static List<Partie> PARTIES { get; set; } = new List<Partie>
        {
            new Partie(1,2,6,"Yani","tingting",1,2,2, new List<Manche>
            {
                new Manche(1,"PSG",10,20),
                new Manche(2,"OL",15,7),
                new Manche(1,"PSG",10,15)
            }
            ),
           new Partie(2,6,3,"tingting","maxime",1,2,0, new List<Manche>
            {
                new Manche(1,"PSG",10,20),
                new Manche(2,"OL",15,7),
                new Manche(3,"REAL",10,15),
                new Manche(4,"Barca",10,15)
            }
            ),
            new Partie(3,6,3,"tingting","maxime",3,2,0, new List<Manche>
            {
                new Manche(1,"PSG",10,20),
                new Manche(2,"OL",15,7),
                new Manche(3,"REAL",10,15),
                new Manche(4,"Barca",20,15),
                new Manche(5,"arsenal",20,15)
            }
            ),
            new Partie(4,6,4,"tingting","lionel",1,1,6, new List<Manche>
            {
                new Manche(1,"PSG",10,20),
                new Manche(2,"OL",15,7),
                new Manche(3,"REAL",0,10)
            }
            ),
             new Partie(5,6,1,"tingting","florian",1,2,1, new List<Manche>
            {
                new Manche(1,"PSG",25,20),
                new Manche(2,"OL",4,7),
                new Manche(3,"REAL",10,11)
            }
            ),
            new Partie(6,6,5,"tingting","diego",1,2,6, new List<Manche>
            {
                new Manche(1,"PSG",10,20),
                new Manche(2,"OL",15,7),
                new Manche(3,"REAL",7,10)
            }
            )
        };
    }



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

        public Partie(int id_partie, int id_j1, int id_j2, string j1, string j2, int s1, int s2, int player , List<Manche> manche)
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
    }

}
