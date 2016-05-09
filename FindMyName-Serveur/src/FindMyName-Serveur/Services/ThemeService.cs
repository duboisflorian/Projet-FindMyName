using System;
using System.Collections.Generic;
using FindMyName_Serveur.Models;
using System.Linq;

namespace FindMyName_Serveur.Services
{
    public class ThemeService
    {
        /*public static List<Theme> ALL() {
            fmnContext context = new fmnContext();
                var requete = from theme in context.Themes
                              select theme ;

                // Execution de la requête
                return requete.ToList();
        }*/
        /* public static List<Theme> getThemes()
        {
            ThemeService.t = new List<Theme> { };
            ThemeService.melanger();
            return ThemeService.t;
        }

        public static void melanger()
        {
            List<int> aleatoire = new List<int> { };
            Random rndNumbers = new Random();
            int rndNumber = rndNumbers.Next(THEMES.Count);
            ThemeService.t.Add(THEMES[rndNumber]);
            aleatoire.Add(rndNumber);
            for (var i = 0; i < 3; i++)
            {
                do
                {
                    rndNumber = rndNumbers.Next(THEMES.Count);
                } while (ThemeService.isvalid(rndNumber, aleatoire));
                ThemeService.t.Add(THEMES[rndNumber]);
                aleatoire.Add(rndNumber);
            }
        }
        public static bool isvalid(int nombre, List<int> aleatoire)
        {
            for (var i = 0; i < aleatoire.Count; i++)
                if (aleatoire[i] == nombre)
                    return true;
            return false;
        }

        public static Theme getTheme(int id)
        {
            for (var i = 0; i < THEMES.Count; i++)
            {
                if (THEMES[i].id == id)
                    return THEMES[i];
            }
            return THEMES[0];
        }
        public static String getName(int u)
        {
            for (var i = 0; i < THEMES.Count; i++)
            {
                if (THEMES[i].id == u)
                    return THEMES[i].text;
            }
            return "";
        }

        public static int getId(String n)
        {
            for (var i = 0; i < THEMES.Count; i++)
            {
                if (THEMES[i].text == n)
                    return THEMES[i].id;
            }
            return 0;
        }*/
    }
}
