using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace FindMyName_Serveur.Models
{
    public class Contact
    {
        public int id { get; set; }
        public string type { get; set; }

        public Utilisateur u { get; set; }

        public Contact() { }

        public Contact(Utilisateur u,string type) {
            this.u = u;
            this.type = type;
        }

    }
}
