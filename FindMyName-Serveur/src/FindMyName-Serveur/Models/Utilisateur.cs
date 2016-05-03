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
        public IList<Contact> contact { get; set; }

        public Utilisateur(int id, string name, string photo, string mail, string password, string pays, int meilleurScore, List<Contact> contact)
        {
            this.id = id;
            this.name = name;
            this.photo = photo;
            this.mail = mail;
            this.password = password;
            this.pays = pays;
            this.meilleurScore = meilleurScore;
            this.contact = contact;
        }
        public Utilisateur( string name, string photo, string mail, string password, string pays, int meilleurScore, List<Contact> contact)
        {
            this.name = name;
            this.photo = photo;
            this.mail = mail;
            this.password = password;
            this.pays = pays;
            this.meilleurScore = meilleurScore;
            this.contact = contact;
        }
        public Utilisateur(string name, string photo, string mail, string password, string pays, int meilleurScore)
        {
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

    }
}
