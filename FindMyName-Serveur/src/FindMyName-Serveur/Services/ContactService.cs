using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public static class ContactService
    {

        static List<ListeContact> CONTACTS = new List<ListeContact>
        {
            new ListeContact(6,new List<Contact>
            {
                    new Contact()
                    {
                        id = 1,name="Florian",photo="fichier/logo.jpg",type="ami"
                    },
                    new Contact()
                    {
                        id = 2,name="Yani",photo="fichier/logo.jpg",type="ami"
                    },
                    new Contact()
                    {
                        id = 3,name="maxime",photo="fichier/logo.jpg",type="ami"
                    },
                    new Contact()
                    {
                        id = 4,name="lionel",photo="fichier/logo.jpg",type="ami"
                    },
                    new Contact()
                    {
                        id = 5,name="diegO",photo="fichier/logo.jpg",type="ami"
                    },
                    new Contact()
                    {
                        id = 8,name="Luffy",photo="fichier/logo.jpg",type="online"
                    }
            }),
            new ListeContact(4,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/psg.jpg",type="ami"
                    }
            }),
            new ListeContact(1,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/psg.jpg",type="ami"
                    }
            }),
            new ListeContact(2,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/psg.jpg",type="ami"
                    }
            }),
            new ListeContact(3,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/psg.jpg",type="ami"
                    }
            }),
            new ListeContact(5,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/psg.jpg",type="ami"
                    }
            }),
            new ListeContact(4,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/psg.jpg",type="online"
                    }
            }),
            new ListeContact(7,new List<Contact> { }),
            new ListeContact(9,new List<Contact> { }),
            new ListeContact(10,new List<Contact> { }),
            new ListeContact(11,new List<Contact> { }),
            new ListeContact(12,new List<Contact> { }),
            new ListeContact(13,new List<Contact> { }),
            new ListeContact(14,new List<Contact> { }),
            new ListeContact(15,new List<Contact> { })
        };

        /////////////////////////////////////////////////////////////////////////////
        public static Contact getAmiExiste(int id, int u)
        {
            for (var i = 0; i < CONTACTS.Count; i++)
            {
                if (CONTACTS[i].id == u)
                {
                    for (var n = 0; n < CONTACTS[i].contact.Count; n++)
                    {
                        if (CONTACTS[i].contact[n].id == id && CONTACTS[i].contact[n].type == "ami")
                            return CONTACTS[i].contact[n];
                    }
                }
            }
            return null;
        }
        /////////////////////////////////////////////////////////////////////////////
        public static Boolean getOnlineExiste(int id, int u)
        {

            for (var i = 0; i < CONTACTS.Count; i++)
            {
                if (CONTACTS[i].id == u)
                    for (var n = 0; n < CONTACTS[i].contact.Count; n++)
                    {
                        if (CONTACTS[i].contact[n].id == id && CONTACTS[i].contact[n].type == "online")
                            return true;
                    }
            }
            return false;
        }
        /////////////////////////////////////////////////////////////////////////////
        public static List<ListeContact>  ALL() { return CONTACTS; }
        /////////////////////////////////////////////////////////////////////////////
        public static List<Contact> getContacts(int id,string type) {
            List< Contact> c = new List<Contact>();
            for (var i = 0; i < CONTACTS.Count; i++)
            {
                if (CONTACTS[i].id == id)
                {
                    for (var n = 0; n < CONTACTS[i].contact.Count; n++)
                    {
                        if (CONTACTS[i].contact[n].type == type)
                        {
                            c.Add(CONTACTS[i].contact[n]);
                        }
                    }
                }

            }
            return c;
        }
        /////////////////////////////////////////////////////////////////////////////
         public static void addAmi(Utilisateur user,int u )
        {
            for (var i = 0; i < CONTACTS.Count; i++)
            {
                if (CONTACTS[i].id == u)
                    CONTACTS[i].contact.Add(new Contact(user.id,user.name,user.photo,"ami"));
            if (CONTACTS[i].id == user.id)
            {
                 CONTACTS[i].contact.Add(new Contact(u, UtilisateurService.getName(u), UtilisateurService.getPhoto(u), "ami"));
            }
        }
    }
        /////////////////////////////////////////////////////////////////////////////
        public static void addOnline(Utilisateur user, int u)
        {
            for (var i = 0; i < CONTACTS.Count; i++)
            {
                if (CONTACTS[i].id == u)
                    CONTACTS[i].contact.Add(new Contact(user.id, user.name, user.photo, "ami"));
                if (CONTACTS[i].id == user.id)
                {
                    CONTACTS[i].contact.Add(new Contact(u, UtilisateurService.getName(u), UtilisateurService.getPhoto(u), "online"));
                }
            }
        }
        /////////////////////////////////////////////////////////////////////////////
         public static void création(int id)
        {
            CONTACTS.Add(new ListeContact(id,null));
        }
        /////////////////////////////////////////////////////////////////////////////
        public static int getNbContact(int u)
        {
            var nb = 0;
            for (var i = 0; i < CONTACTS.Count; i++)
            {
                if (CONTACTS[i].id == u)
                {
                    for (var g = 0; g < CONTACTS[i].contact.Count; g++)
                    {
                        if (CONTACTS[i].contact[g].type == "ami")
                        {
                            nb++;
                        }
                    }
                }
            }
            return nb;
        }
    }

    public class Contact 
    {
        public int id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
        public string type { get; set; }

        public Contact(int id,string name,string photo,string type)
        {
            this.id = id;
            this.name = name;
            this.photo = photo;
            this.type = type;
        }

        public Contact()
        {
        }
    }

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
