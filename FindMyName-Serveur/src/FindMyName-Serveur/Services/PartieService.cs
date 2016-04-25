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

        public static int getNbVictoire(int id, int id_ami)
        {
            int nb = 0;
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if ((PARTIES[i].id_j1 == id && PARTIES[i].id_j2 == id_ami) || (PARTIES[i].id_j1 == id_ami && PARTIES[i].id_j2 == id))
                    if (((PARTIES[i].id_j1 == id && PARTIES[i].s1 > PARTIES[i].s2) || (PARTIES[i].s1 < PARTIES[i].s2 && PARTIES[i].id_j2 == id)) && PARTIES[i].player == 0)
                        nb++;
            }
            return nb;
        }

        public static int getNbDefaite(int id, int id_ami)
        {
            int nb = 0;
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if ((PARTIES[i].id_j1 == id && PARTIES[i].id_j2 == id_ami) || (PARTIES[i].id_j1 == id_ami && PARTIES[i].id_j2 == id))
                    if (((PARTIES[i].id_j1 == id && PARTIES[i].s1 < PARTIES[i].s2) || (PARTIES[i].s1 > PARTIES[i].s2 && PARTIES[i].id_j2 == id)) && PARTIES[i].player == 0)
                        nb++;
            }
            return nb;
        }

        public static List<Partie> getHistorique(int id, int id_ami)
        {
            List<Partie> p = new List<Partie>();
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if ((PARTIES[i].id_j1 == id && PARTIES[i].id_j2 == id_ami) || (PARTIES[i].id_j1 == id_ami && PARTIES[i].id_j2 == id))
                    p.Add(PARTIES[i]);
            }
            return p;
        }

        public static Partie getPartieExiste(int id, int id_ami)
        {
            for (var i = PARTIES.Count - 1; i >= 0; i--)
            {
                if (((PARTIES[i].id_j1 == id && PARTIES[i].id_j2 == id_ami) || (PARTIES[i].id_j1 == id_ami && PARTIES[i].id_j2 == id)) && (PARTIES[i].player == id || PARTIES[i].player == id_ami))
                    return PARTIES[i];
            }
            return null;
        }

        public static Partie getPartieEnCours(int id, int id_ami)
        {
            for (var i = PARTIES.Count - 1; i >= 0; i--)
            {
                if ((PARTIES[i].id_j1 == id && PARTIES[i].id_j2 == id_ami) || (PARTIES[i].id_j1 == id_ami && PARTIES[i].id_j2 == id))
                    return PARTIES[i];
            }
            return null;
        }

        public static void AjouterPartie(int id, int id_ami, int th, int score, string j1, string j2)
        {
            int taille = PARTIES.Count;
            int id_partie = taille + 1;
            //  var theme = this._tService.getName(th); Yani class
            Partie p = new Partie(id_partie, id, id_ami, j1, j2, 0, 0, id_ami, new List<Manche> { new Manche(th, "PSG", score, 0) });
            PARTIES.Add(p);
        }

        public static List<Partie> getPartieEnCours(int id)
        {
            List<Partie> p = new List<Partie>();
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if ((PARTIES[i].id_j1 == id || PARTIES[i].id_j2 == id) && PARTIES[i].s1 < 3 && PARTIES[i].s2 < 3)
                    p.Add(PARTIES[i]);
            }
            return p;
        }

        public static int getnbParties(int id)
        {
            int nb = 0;
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if (PARTIES[i].id_j1 == id || PARTIES[i].id_j2 == id)
                    nb++;
            }
            return nb;
        }

        public static void ModifierPartie(int id, int id_ami, int th, int score, int id_partie)
        {
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if (PARTIES[i].id_partie == id_partie)
                {
                    var n = PARTIES[i].manche.Count - 1;
                    if (PARTIES[i].manche[n].s1 == 0)
                    {
                        PARTIES[i].manche[n].s1 = score;
                        if (PARTIES[i].manche[n].s1 > PARTIES[i].manche[n].s2)
                        {
                            PARTIES[i].s1 = PARTIES[i].s1 + 1;
                        }
                        if (PARTIES[i].manche[n].s1 < PARTIES[i].manche[n].s2)
                        {
                            PARTIES[i].s2 = PARTIES[i].s2 + 1;
                        }
                        if (PARTIES[i].s2 == 3 || PARTIES[i].s1 == 3)
                        {
                            PARTIES[i].player = 0;
                        }
                    }
                    else if (PARTIES[i].manche[n].s2 == 0)
                    {
                        PARTIES[i].manche[n].s2 = score;
                        if (PARTIES[i].manche[n].s1 > PARTIES[i].manche[n].s2)
                        {
                            PARTIES[i].s1 = PARTIES[i].s1 + 1;
                        }
                        if (PARTIES[i].manche[n].s1 < PARTIES[i].manche[n].s2)
                        {
                            PARTIES[i].s2 = PARTIES[i].s2 + 1;
                        }
                        if (PARTIES[i].s2 == 3 || PARTIES[i].s1 == 3)
                        {
                            PARTIES[i].player = 0;
                        }
                    }
                    else
                    {
                        // var theme = this._tService.getName(th); Yani class
                        if (id == PARTIES[i].id_j1)
                        {
                            PARTIES[i].manche.Add(new Manche( th, "PSG", score,0));
                        }
                        else {
                            PARTIES[i].manche.Add(new Manche(th, "PSG",0, score));
                        }

                        PARTIES[i].player = id_ami;
                    }
                }
            }
        }

        public static string getThemeFavori(int id)
        {
            return "PSG";
        }

        public static int getNbD(int id)
        {
            int nb = 0;
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if ((PARTIES[i].id_j1 == id || PARTIES[i].id_j2 == id) && PARTIES[i].player == 0)
                    if ((PARTIES[i].id_j1 == id && PARTIES[i].s1 < PARTIES[i].s2) || (PARTIES[i].s1 > PARTIES[i].s2 && PARTIES[i].id_j2 == id))
                        nb++;
            }
            return nb;
        }

        public static int getNbV(int id)
        {
            int nb = 0;
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if ((PARTIES[i].id_j1 == id || PARTIES[i].id_j2 == id) && PARTIES[i].player == 0)
                    if ((PARTIES[i].id_j1 == id && PARTIES[i].s1 > PARTIES[i].s2) || (PARTIES[i].s1 < PARTIES[i].s2 && PARTIES[i].id_j2 == id))
                        nb++;
            }
            return nb;
        }

        public static Boolean getEn_Cours(int id, int id_ami)
        {
            for (var i = PARTIES.Count - 1; i >= 0; i--)
            {
                if ((PARTIES[i].id_j1 == id && PARTIES[i].id_j2 == id_ami) || (PARTIES[i].id_j1 == id_ami && PARTIES[i].id_j2 == id))
                {
                    if (PARTIES[i].player == 0)
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }
            }
            return false;
        }


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

        public Partie()
        {
        }
    }

}
