using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public class ContactService
    {
        public List<ListeContact> CONTACTS { get; set; }
    }

    public class Contact
    {
        public int id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
        public string type { get; set; }
    }

    public class ListeContact
    {
        public int id { get; set; }
        public List<Contact> Lcontact { get; set; }
    }
}
