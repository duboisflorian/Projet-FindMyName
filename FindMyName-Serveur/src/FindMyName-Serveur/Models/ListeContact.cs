using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FindMyName_Serveur.Models
{
    public class ListeContact
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int id { get; set; }
        public List<Contact> contact { get; set; }

        public ListeContact(int id, List<Contact> c)
        {
            this.id = id;
            this.contact = c;
        }

        public ListeContact()
        {
        }
    }
}
