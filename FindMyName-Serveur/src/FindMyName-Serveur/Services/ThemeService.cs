using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public class ThemeService
    {
        public List<Theme> THEMES { get; set; }
    }

    public class Theme
    {
        public string text { get; set; }
        public int id { get; set; }
        public string photo { get; set; }
        public bool done { get; set; }
    }
}
