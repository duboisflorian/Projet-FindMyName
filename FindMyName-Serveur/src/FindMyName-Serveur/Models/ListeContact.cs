using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class ListeContact
    {
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
