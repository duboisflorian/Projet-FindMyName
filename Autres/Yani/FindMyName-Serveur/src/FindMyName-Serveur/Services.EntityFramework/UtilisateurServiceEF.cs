using FindMyName_Serveur.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindMyName_Serveur.Models;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.Logging;
using FindMyName_Serveur.Controllers;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity;

namespace FindMyName_Serveur.Services.EntityFramework
{
    public class UtilisateurServiceEF : IUtilisateurService
    {
        [FromServices]
        public fmnContext context { get; set; }
        [FromServices]
        public ILogger<UtilisateurController> Logger { get; set; }
        public IList<Utilisateur> ALL()
        {
            context = new fmnContext();
            var requete = from utilisateur in context.Users
                          select utilisateur;

            // Execution de la requête
            return requete.ToList();
        }
        public IList<Contact> ALLContact()
        {
            context = new fmnContext();
            var requete = from contact in context.Contact.Include(b => b.user)
                          select contact;

            // Execution de la requête
            return requete.ToList();
        }
        public string Add(int contactadd, int user, int u)
        {
            throw new NotImplementedException();
        }

        public void addAmi(int user, int u)
        {
            IList<Contact> AllContact = new List<Contact> { };
            AllContact = ALLContact();
            for (var i = 0; i < AllContact.Count; i++)
            {
                if (AllContact[i].id == u)
                {
                    AllContact[i].user.contacts.Add(new Contact(getUser(user), user, "ami"));
                    context = new fmnContext();

                    context.Contact.Update(AllContact[i]);
                    context.SaveChanges();
                }
                if (AllContact[i].id == user)
                {
                    AllContact[i].user.contacts.Add(new Contact(getUser(u), u, "ami"));
                    context = new fmnContext();

                    context.Contact.Update(AllContact[i]);
                    context.SaveChanges();
                }
            }
        }

        public void addAmiOnline(int user, int u)
        {
            IList<Contact> AllContact = new List<Contact> { };
            AllContact = ALLContact();
            for (var i = 0; i < AllContact.Count; i++)
            {
                if (AllContact[i].id == u)
                {
                    for (var n = 0; n < AllContact[i].user.contacts.Count; n++)
                    {
                        if (AllContact[i].user.contacts[n].id == user)
                            AllContact[i].user.contacts[n].type = "ami";
                        context = new fmnContext();

                        context.Contact.Update(AllContact[i].user.contacts[n]);
                        context.SaveChanges();
                    }
                }
            }
        }

        public void addOnline(int user, int u)
        {
            IList<Contact> AllContact = new List<Contact> { };
            AllContact = ALLContact();
            for (var i = 0; i < AllContact.Count; i++)
            {
                if (AllContact[i].id == u)
                    AllContact[i].user.contacts.Add(new Contact(getUser(user), user, "online"));
                context = new fmnContext();

                context.Contact.Update(AllContact[i]);
                context.SaveChanges();
                if (AllContact[i].id == user)
                {
                    AllContact[i].user.contacts.Add(new Contact(getUser(user), user, "online"));
                    context = new fmnContext();

                    context.Contact.Update(AllContact[i]);
                    context.SaveChanges();
                }
            }
        }

        public void ajouterUtilisateur(string name, string mail, string password)
        {
            context = new fmnContext();
            var u1 = new Utilisateur(name, "", mail, password, "", 0);
            creation(u1);
        }

        public string changePays(int id, string selectPays)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].id == id)
                {
                    AllUtilisateurs[i].pays = selectPays;
                    context = new fmnContext();

                    context.Users.Update(AllUtilisateurs[i]);
                    context.SaveChanges();
                }
            }

            return "Vous avez changé de pays";
        }

        public string changePhoto(int id, string selectPhoto)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].id == id)
                {
                    AllUtilisateurs[i].photo = "fichier/" + selectPhoto + ".jpg";
                    context = new fmnContext();

                    context.Users.Update(AllUtilisateurs[i]);
                    context.SaveChanges();
                }
            }
            return "Photo changée";
        }

        public void ChangerMeilleurScore(int u, int score)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            Utilisateur user = new Utilisateur();
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].id == u)
                    if (AllUtilisateurs[i].meilleurScore < score)
                        user = AllUtilisateurs[i];
                        user.meilleurScore = score;
            }
            context = new fmnContext();

            context.Users.Update(user);
            context.SaveChanges();
        }

        public void creation(Utilisateur u1)
        {
            context = new fmnContext();
            u1.contacts = new List<Contact> { new Contact() };
            context.Users.Add(u1);
            context.SaveChanges();
        }

        public Utilisateur Existe(int id)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            Utilisateur user = new Utilisateur();
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].id == id)
                {
                    return AllUtilisateurs[i];
                }

            }

            return null;
        }

        public Contact getAmiExiste(int id, int u)
        {
            IList<Contact> AllContact = new List<Contact> { };
            AllContact = ALLContact();
            for (var i = 0; i < AllContact.Count; i++)
            {
                if (AllContact[i].id == u)
                {
                    if (AllContact[i].user.contacts != null)
                    {
                        for (var n = 0; n < AllContact[i].user.contacts.Count; n++)
                        {
                            if (AllContact[i].user.contacts[n].id == id && AllContact[i].user.contacts[n].type == "ami")
                                return AllContact[i].user.contacts[n];
                        }
                    }
                }
            }
            return new Contact(); ;
        }

        public List<Contact> getContacts(int id, string type)
        {
            throw new NotImplementedException();
            //    List<Contact> c = new List<Contact>();
            //    IList<Contact> AllContact = new List<Contact>();
            //    AllContact = ALLContact();
            //    for (var i = 0; i < ALLContact.Count; i++)
            //    {
            //        if (ALLContact[i].id == id)
            //        {
            //            if (ALLContact[i].user.contacts != null)
            //            {
            //                for (var n = 0; n < ALLContact[i].contact.Count; n++)
            //                {
            //                    if (ALLContact[i].contact[n].type == type)
            //                    {
            //                        c.Add(ALLContact[i].contact[n]);
            //                    }
            //                }
            //            }
            //        }

            //    }
            //    return c;
        }

        public int getlastid()
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            return AllUtilisateurs[AllUtilisateurs.Count - 1].id;
        }

        public string getName(int id)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            String s = "";
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].id == id)
                    s = AllUtilisateurs[i].name;
            }

            return s;
        }

        public int getNbContact(int u)
        {
            IList<Contact> AllContact = new List<Contact> { };
            AllContact = ALLContact();
            var nb = 0;
            for (var i = 0; i < AllContact.Count; i++)
            {
                if (AllContact[i].id == u)
                {
                    if (AllContact[i].user.contacts != null)
                    {
                        for (var g = 0; g < AllContact[i].user.contacts.Count; g++)
                        {
                            if (AllContact[i].user.contacts[g].type == "ami")
                            {
                                nb++;
                            }
                        }
                    }
                }
            }
            return nb;
        }

        public bool getOnlineExiste(int id, int u)
        {
            IList<Contact> AllContact = new List<Contact> { };
            AllContact = ALLContact();
            for (var i = 0; i < AllContact.Count; i++)
            {
                if (AllContact[i].id == u)
                {
                    if (AllContact[i].user.contacts != null)
                    {
                        for (var n = 0; n < AllContact[i].user.contacts.Count; n++)
                        {
                            if (AllContact[i].user.contacts[n].id == id && AllContact[i].user.contacts[n].type == "online")
                                return true;
                        }
                    }
                }
            }
            return false;
        }

        public int getOnlineutilisateur()
        {
            Random rnd = new Random();
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            return (rnd.Next(1, AllUtilisateurs.Count));
        }

        public string getPays(int id)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            string s = "";
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].id == id)
                    s = AllUtilisateurs[i].pays;
            }

            return s;
        }

        public string getPhoto(int u)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            String s = "";
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].id == u)
                    s = AllUtilisateurs[i].photo;
            }

            return s;
        }

        public Utilisateur getUser(int id)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            Utilisateur user = new Utilisateur();
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].id == id)
                {
                    user = AllUtilisateurs[i];
                }

            }

            return user;
        }

        public ResIDViewModel Jouer(int u)
        {
            int r;
            for (var i = 0; i < 500; i++)
            {
                r = getOnlineutilisateur();
                if (getOnlineExiste(r, u) == false && getAmiExiste(r, u).id == 0 && r != u)
                {
                    addOnline(r, u);
                    return new ResIDViewModel("go", r);
                }
            }
            return new ResIDViewModel("Aucun joueur trouvé pour le moment. Nous sommes désolé.", 0);
        }

        public string Same_mdp(int id, string password)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            String r = "";
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].id == id)
                {
                    if (AllUtilisateurs[i].password == password)
                    {
                        r = "le mot de passe est identique !";
                    }
                    else
                    {
                        AllUtilisateurs[i].password = password;
                        r = "le mot de passe a bien ete change !";
                    }

                }
            }

            return r;
        }

        public Utilisateur verificationConnexion(string mail, string password)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            Utilisateur user = new Utilisateur();
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].mail == mail && AllUtilisateurs[i].password == password)
                    user = AllUtilisateurs[i];
            }
            return user;
        }

        public bool verificationMailExist(string mail)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            bool verificationmail = false;
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].mail == mail)
                    verificationmail = true;
            }

            return verificationmail;
        }

        public Utilisateur getUser(string name)
        {
            IList<Utilisateur> AllUtilisateurs = new List<Utilisateur> { };
            AllUtilisateurs = ALL();
            Utilisateur user = new Utilisateur();
            for (var i = 0; i < AllUtilisateurs.Count; i++)
            {
                if (AllUtilisateurs[i].name == name)
                {
                    user = AllUtilisateurs[i];
                }

            }

            return user;
        }

        public void changerPhoto(int id, string photo)
        {
            IList<Contact> AllContact = new List<Contact> { };
            AllContact = ALLContact();
            for (var i = 0; i < AllContact.Count; i++)
            {
                for (var h = 0; h < AllContact[i].user.contacts.Count; h++)
                {
                    if (AllContact[i].user.contacts[h].id == id)
                        AllContact[i].user.contacts[h].user.photo = photo;
                }

            }
        }
    }
}
