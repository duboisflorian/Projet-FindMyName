using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class Utilisateur
    {
        public int id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
        public string mail { get; set; }
        public string password { get; set; }
        public string pays { get; set; }
        public int meilleurScore { get; set; }

        public Utilisateur(int id, string name, string photo, string mail, string password, string pays, int meilleurScore)
        {
            this.id = id;
            this.name = name;
            this.photo = photo;
            this.mail = mail;
            this.password = password;
            this.pays = pays;
            this.meilleurScore = meilleurScore;
        }

        public Utilisateur()
        {
        }

        public Utilisateur(string v1, string v2, string v3, string v4, string v5, int v6)
        {
            this.name = v1;
            this.photo = v2;
            this.mail = v3;
            this.password = v4;
            this.pays = v5;
            this.meilleurScore = v6;
        }
    }
}
