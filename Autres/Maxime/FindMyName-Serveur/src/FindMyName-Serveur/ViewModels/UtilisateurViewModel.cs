using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.ViewModels
{
    public class UtilisateurViewModel
    {
        public UtilisateurViewModel(int id, string name, string photo)
        {
            this.id = id;
            this.name = name;
            this.photo = photo;
        }

        public int id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
    }
}
