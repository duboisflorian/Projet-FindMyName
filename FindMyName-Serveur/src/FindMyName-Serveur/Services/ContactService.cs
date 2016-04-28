using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindMyName_Serveur.Controllers;
using FindMyName_Serveur.Models;

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
                        id = 1,name="Florian",photo="fichier/psg.jpg",type="ami"
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
                        id = 6,name="tingting",photo="fichier/ol.jpg",type="ami"
                    }
            }),
            new ListeContact(1,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/ol.jpg",type="ami"
                    }
            }),
            new ListeContact(2,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/ol.jpg",type="ami"
                    }
            }),
            new ListeContact(3,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/ol.jpg",type="ami"
                    }
            }),
            new ListeContact(5,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/ol.jpg",type="ami"
                    }
            }),
            new ListeContact(4,new List<Contact>
            {
                    new Contact()
                    {
                        id = 6,name="tingting",photo="fichier/ol.jpg",type="online"
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

        internal static ResID Jouer(int u)
        {
         int r;
         for (var i = 0; i < 500; i++) {
             r = UtilisateurService.getOnlineutilisateur();
             if (getOnlineExiste(r, u)==false && getAmiExiste(r,u).id==0 && r!=u) {
                 addOnline(r,u);
                    return new ResID("go", r);
                }
         }
            return new ResID("Aucun joueur trouvé pour le moment. Nous sommes désolé.", 0);
        }

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
            return new Contact(0, "0", "0", "0"); ;
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
         public static void addAmi(int user,int u )
        {
            for (var i = 0; i < CONTACTS.Count; i++)
            {
                if (CONTACTS[i].id == u){
                    CONTACTS[i].contact.Add(new Contact(user,UtilisateurService.getName(user), UtilisateurService.getPhoto(user), "ami"));
                }
            if (CONTACTS[i].id == user)
            {
                 CONTACTS[i].contact.Add(new Contact(u, UtilisateurService.getName(u), UtilisateurService.getPhoto(u), "ami"));
            }
        }
    }
        /////////////////////////////////////////////////////////////////////////////
        public static void addOnline(int user, int u)
        {
            for (var i = 0; i < CONTACTS.Count; i++)
            {
                if (CONTACTS[i].id == u)
                    CONTACTS[i].contact.Add(new Contact(user,UtilisateurService.getName(user), UtilisateurService.getPhoto(user), "online"));
                if (CONTACTS[i].id == user)
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
        //////////////////////////////////////////////////////////////////////////////
        public static void addAmiOnline(int user,int u)
        {
             for (var i = 0; i < CONTACTS.Count; i++) {
                 if (CONTACTS[i].id == u) {
                     for (var n = 0; n < CONTACTS[i].contact.Count; n++) {
                         if (CONTACTS[i].contact[n].id == user )
                             CONTACTS[i].contact[n].type = "ami";
                     }
                 }
             }
        }
        ///////////////////////////////////////////////////////////////////////////////
        public static String Add(int contactadd , int user, int u) {
             if (UtilisateurService.Existe(contactadd) !=null){
                Contact t = getAmiExiste(contactadd, u);
               if ((t.id!=0) || contactadd == u) {
                   return"cette personne est déjà dans tes amis";
               } else {
                   if ( getOnlineExiste(user, u)==true) {
                       addAmiOnline(user, u);
                        return "Ajout reussit";
                    } else {
                       addAmi(user, u);
                        return "Ajout reussit";
                    }
               }
           } else {
               return "cette personne n'existe pas";
           }
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
