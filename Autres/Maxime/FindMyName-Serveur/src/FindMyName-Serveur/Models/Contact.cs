using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace FindMyName_Serveur.Models
{
    public class Contact : BaseObject
    {
        public string type { get; set; }
        public int id_contact { get; set; }
        public virtual Utilisateur user { get; set; }

        public Contact() { }

        public Contact(Utilisateur user, int id_contact, string type) {
            this.user = user;
            this.id_contact = id_contact;
            this.type = type;
        }

    }
}
