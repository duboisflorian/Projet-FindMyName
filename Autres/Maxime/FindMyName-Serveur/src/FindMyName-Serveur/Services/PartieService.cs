using FindMyName_Serveur.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public class PartieService
    {
        /*
        public static List<Partie> PARTIES { get; set; } = new List<Partie>
        {
            new Partie(1,2,6,"Yani","tingting",1,2,2, new List<Manche>
            {
                new Manche( new Theme() { text = "PSG", id = 1, photo = "./fichier/psg.jpg", done = false},10,20),
                new Manche(2,"OL",15,7),
                new Manche(new Theme() { text = "PSG", id = 1, photo = "./fichier/psg.jpg", done = false},"PSG",10,15)
            }
            ),
           new Partie(2,6,3,"tingting","maxime",1,2,-1, new List<Manche>
            {
                new Manche(new Theme() { text = "PSG", id = 1, photo = "./fichier/psg.jpg", done = false},10,20),
                new Manche(2,"OL",15,7),
                new Manche(3,"REAL",10,15),
                new Manche(4,"Barca",10,15)
            }
            ),
            new Partie(3,6,3,"tingting","maxime",3,2,-1, new List<Manche>
            {
                new Manche(new Theme() { text = "PSG", id = 1, photo = "./fichier/psg.jpg", done = false},10,20),
                new Manche(2,"OL",15,7),
                new Manche(3,"REAL",10,15),
                new Manche(4,"Barca",20,15),
                new Manche(5,"arsenal",20,15)
            }
            ),
            new Partie(4,6,4,"tingting","lionel",1,1,6, new List<Manche>
            {
                new Manche(new Theme() { text = "PSG", id = 1, photo = "./fichier/psg.jpg", done = false},10,20),
                new Manche(2,"OL",15,7),
                new Manche(3,"REAL",-1,10)
            }
            ),
             new Partie(5,6,1,"tingting","florian",1,2,1, new List<Manche>
            {
                new Manche(new Theme() { text = "PSG", id = 1, photo = "./fichier/psg.jpg", done = false},25,20),
                new Manche(2,"OL",4,7),
                new Manche(3,"REAL",10,11)
            }
            ),
            new Partie(6,6,5,"tingting","diego",1,2,6, new List<Manche>
            {
                new Manche(new Theme() { text = "PSG", id = 1, photo = "./fichier/psg.jpg", done = false},10,20),
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
                    if (((PARTIES[i].id_j1 == id && PARTIES[i].s1 > PARTIES[i].s2) || (PARTIES[i].s1 < PARTIES[i].s2 && PARTIES[i].id_j2 == id)) && PARTIES[i].player == -1)
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
                    if (((PARTIES[i].id_j1 == id && PARTIES[i].s1 < PARTIES[i].s2) || (PARTIES[i].s1 > PARTIES[i].s2 && PARTIES[i].id_j2 == id)) && PARTIES[i].player == -1)
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

        internal static void savePartie(int id, int us, int th, int remaining)
        {
            var Partieexiste= PartieService.getPartieExiste(id, us);

            if (Partieexiste == false) {
              var j1=  UtilisateurService.getName(us);
              var j2 = UtilisateurService.getName(id);
            PartieService.AjouterPartie(us, id, th, remaining, j1, j2);
            }
            else {
                var p = PartieService.getPartieEnCours(id, us);
                ModifierPartie(us, id, th,remaining,p.id_partie);
            }
           

            UtilisateurService.ChangerMeilleurScore(us,remaining);
        }

        public static Boolean getPartieExiste(int id, int id_ami)
        {
            for (var i = PARTIES.Count - 1; i >= 0; i--)
            {
                if (((PARTIES[i].id_j1 == id && PARTIES[i].id_j2 == id_ami) || (PARTIES[i].id_j1 == id_ami && PARTIES[i].id_j2 == id)) && (PARTIES[i].player == id || PARTIES[i].player == id_ami))
                    return true;
            }
            return false;
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

        
        public static void AjouterPartie(int id, int id_ami, int th, int score, string j1, string j2)
        {
            int taille = PARTIES.Count;
            int id_partie = taille + 1;
            string theme = ThemeService.getName(th);
            Partie p = new Partie(id_partie, id, id_ami, j1, j2, 0, 0, id_ami, new List<Manche> { new Manche(th, theme, score, 0) });
            PARTIES.Add(p);
        }


        public static void ModifierPartie(int id, int id_ami, int th, int score, int id_partie)
        {
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if (PARTIES[i].id_partie == id_partie)
                {
                    var n = PARTIES[i].manche.Count - 1;
                    if (PARTIES[i].manche[n].s1 == -1)
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
                            PARTIES[i].player = -1;
                        }
                    }
                    else if (PARTIES[i].manche[n].s2 == -1)
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
                            PARTIES[i].player = -1;
                        }
                    }
                    else
                    {
                        string theme = ThemeService.getName(th); 
                        if (id == PARTIES[i].id_j1)
                        {
                            PARTIES[i].manche.Add(new Manche( th, theme, score,-1));
                        }
                        else {
                            PARTIES[i].manche.Add(new Manche(th, theme,-1, score));
                        }

                        PARTIES[i].player = id_ami;
                    }
                }
            }
        }

        public static string getThemeFavori(int id)
        {
            string th = "acun pour le moment";
            int c1 = 0, c2 = 0;
            if (getnbParties(id) != 0) { 
            for (var i = 0; i < ThemeService.THEMES.Count; i++)
            {
                for (var j = 0; j < PARTIES.Count; j++)
                {
                    if (PARTIES[j].id_j1 == id || PARTIES[j].id_j2 == id)
                    {
                        for (var h = 0; h < PARTIES[j].manche.Count; h++)
                        {
                            if (th == "acun pour le moment")
                            {
                                if (PARTIES[j].manche[h].id_theme == ThemeService.THEMES[i].id)
                                    c1++;
                            }
                            else
                            {
                                if (PARTIES[j].manche[h].id_theme == ThemeService.THEMES[i].id)
                                {
                                    c2++;
                                }
                            }
                        }

                    }
                }
                if (th == "acun pour le moment")
                {
                    th = ThemeService.THEMES[i].text;
                    c2 = 0;
                }
                if (c2 > c1)
                {
                    c1 = c2;
                    th = ThemeService.THEMES[i].text;
                }
                c2 = 0;
            }
            }
            return th;
        }

        public static int getNbD(int id)
        {
            int nb = 0;
            for (var i = 0; i < PARTIES.Count; i++)
            {
                if ((PARTIES[i].id_j1 == id || PARTIES[i].id_j2 == id) && PARTIES[i].player == -1)
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
                if ((PARTIES[i].id_j1 == id || PARTIES[i].id_j2 == id) && PARTIES[i].player == -1)
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
                    if (PARTIES[i].player == -1)
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

 */
    }

}
