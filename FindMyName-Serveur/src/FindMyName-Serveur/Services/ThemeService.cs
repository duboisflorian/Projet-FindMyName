using System;
using System.Collections.Generic;
using FindMyName_Serveur.Models;

namespace FindMyName_Serveur.Services
{
    public class ThemeService
    {
      /*  public static List<Theme> THEMES { get; set; } = new List<Theme>
    {
        { new Theme() { text = "PSG", id = 1, photo = "./fichier/psg.jpg", done = false}},
        { new Theme() { text = "OL", id = 2, photo = "./fichier/ol.jpg", done = false}},
        { new Theme() { text = "REAL", id = 3, photo = "./fichier/real.jpg", done = false}},
        { new Theme() { text = "BARCA", id = 4, photo = "./fichier/barca.jpg", done = false}},
        { new Theme() { text = "ARSENAL", id = 5, photo = "./fichier/arsenal.jpg", done = false}},
        { new Theme() { text = "CITY", id = 6, photo = "./fichier/city.jpg", done = false}},
        { new Theme() { text = "HEAT", id = 7, photo = "./fichier/heat.jpg", done = false}},
        { new Theme() { text = "OM", id = 8, photo = "./fichier/om.jpg", done = false}},
        { new Theme() { text = "BAYERN", id = 9, photo = "./fichier/bayern.jpg", done = false}}
    };
        public static List<Theme> t;
        public static List<Theme> ALL() { return ThemeService.THEMES; }
        public static List<Theme> getThemes()
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
