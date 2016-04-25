using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public static class ThemeService
    {
        public static List<Theme> THEMES { get; set; } = new List<Theme>
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
    }

    public class Theme
    {
        public string text { get; set; }
        public int id { get; set; }
        public string photo { get; set; }
        public bool done { get; set; }
    }
}
