using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.ViewModels
{
    public class UtilisateurALLViewModel
    {
        public UtilisateurALLViewModel(int id, string name, string photo,string mail,string password,string pays,int meilleurScore)
        {
            this.id = id;
            this.name = name;
            this.photo = photo;
            this.mail = mail;
            this.password = password;
            this.pays = pays;
            this.meilleurScore = meilleurScore;
        }

        public int id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
        public string mail { get; set; }
        public string password { get; set; }
        public string pays { get; set; }
        public int meilleurScore { get; set; }
    }
}
