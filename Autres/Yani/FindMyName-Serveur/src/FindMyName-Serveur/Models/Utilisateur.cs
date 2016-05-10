using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class Utilisateur : BaseObject
    {
        public string name { get; set; }
        public string photo { get; set; }
        public string mail { get; set; }
        public string password { get; set; }
        public string pays { get; set; }
        public int meilleurScore { get; set; }
        public virtual IList<Contact> contacts { get; set; }

        public Utilisateur(int id, string name, string photo, string mail, string password, string pays, int meilleurScore, List<Contact> contacts)
        {
            this.id = id;
            this.name = name;
            this.photo = photo;
            this.mail = mail;
            this.password = password;
            this.pays = pays;
            this.meilleurScore = meilleurScore;
            this.contacts = new List<Contact>(contacts);
        }

        public Utilisateur( string name, string photo, string mail, string password, string pays, int meilleurScore, List<Contact> contacts)
            : this(0, name, photo, mail, password, password, meilleurScore, contacts)
        {
         
        }
        public Utilisateur(string name, string photo, string mail, string password, string pays, int meilleurScore)
            :this(0, name, photo, mail, password, password, meilleurScore, new List<Contact>())
        {

        }

        public Utilisateur()
            : this(0, "", "", "", "", "", 0, new List<Contact>())
        {
        }

    }
}
