using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public class UtilisateurService
    {
        public static List<Utilisateur> UTILISATEURS { get; set; } = new List<Utilisateur>
        {
            new Utilisateur (1,"Florian","fichier/psg.jpg","Florian@gmail.com","1234","France",25),
            new Utilisateur (2,"Yani","fichier/logo.jpg","Yani@gmail.com","1234","France",25),
            new Utilisateur (3,"Maxime","fichier/logo.jpg","Maxime@gmail.com","1234","France",25),
            new Utilisateur (4,"Lionel","fichier/logo.jpg","Lionel@gmail.com","1234","France",25),
            new Utilisateur (5,"Diego","fichier/logo.jpg","Diego@gmail.com","1234","France",25),
            new Utilisateur (6,"Tingting","fichier/ol.jpg","Tingting@gmail.com","1234","France",25),
            new Utilisateur (7,"Marco","fichier/logo.jpg","Marco@gmail.com","1234","France",25),
            new Utilisateur (8,"Luffy","fichier/logo.jpg","Luffy@gmail.com","1234","France",25),
            new Utilisateur (9,"Mingo","fichier/logo.jpg","Mingo@gmail.com","1234","France",25),
            new Utilisateur (10,"Zoro","fichier/logo.jpg","Zoro@gmail.com","1234","France",25),
            new Utilisateur (11,"Papuce","fichier/logo.jpg","Papuce@gmail.com","1234","France",25),
            new Utilisateur (12,"Chandler","fichier/logo.jpg","ante.Vivamus.non@arcu.co.uk","1234","France",25),
            new Utilisateur (13,"Lacy","fichier/logo.jpg","Nunc.ullamcorper@luctusCurabituregestas.com","1234","France",25),
            new Utilisateur (14,"Quamar","fichier/logo.jpg","est.ac.facilisis@Nullasemper.net","1234","France",25),
            new Utilisateur (15,"Sandra","fichier/logo.jpg","accumsan.laoreet@gravida.edu","1234","France",25),
        };

        public static Utilisateur getUser(int id)
        {
            Utilisateur u = new Utilisateur();
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].id == id)
                {
                    u = UTILISATEURS[i];
                }
                
            }

            return u;
        }


        public static Utilisateur Existe(int id)
        {
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].id == id)
                {
                   return UTILISATEURS[i];
                }

            }

            return null;
        }


        public static Utilisateur verificationConnexion(string mail, string password)
        {
            Utilisateur u = new Utilisateur();
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].mail == mail && UTILISATEURS[i].password == password)
                    u = UTILISATEURS[i];
            }
            return u;
        }

         public static Boolean verificationMailExist(String mail)
        {
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].mail == mail)
                    return true;
            }

            return false;
        }

        public static Boolean Same_mdp(int id, string password)
        {
            Boolean r = true;
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].id == id)
                {
                    if (UTILISATEURS[i].password == password)
                    {
                        r = true;
                    }
                    else
                    {
                        UTILISATEURS[i].password = password;
                        r = false;
                    }

                }
            }

            return r;
        }

        public static int getlastid()
        {
            return UTILISATEURS[UTILISATEURS.Count - 1].id;
        }

         public static int ajouterUtilisateur(string name, string mail, string password)
        {
           UTILISATEURS.Add(new Utilisateur (UtilisateurService.getlastid()+1, name, "fichier/logo.jpg", mail, password, "France", 0));
        return UtilisateurService.getlastid();
        }

        public static int getOnlineutilisateur()
        {
            Random rnd = new Random();
            return (rnd.Next(1,UTILISATEURS.Count));
        }

        public static string getName(int u)
        {
            String s = "";
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].id == u)
                    s= UTILISATEURS[i].name;
            }

            return s;
        }

        public static void ChangerMeilleurScore(int u,int score)
        {
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].id == u)
                    if (UTILISATEURS[i].meilleurScore < score)
                        UTILISATEURS[i].meilleurScore = score;
            }
        }

        public static string getPhoto(int u)
        {

            String s = "";
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].id == u)
                    s = UTILISATEURS[i].photo;
            }

            return s;
        }

         public static string getPays(int u)
        {
            string s = "";
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].id == u)
                    s = UTILISATEURS[i].pays;
            }

            return s;
        }

        public static void changePays(int id, string selectPays)
        {
            for (var i = 0; i < UTILISATEURS.Count; i++)
            {
                if (UTILISATEURS[i].id == id)
                {
                    UTILISATEURS[i].pays = selectPays;
                }
            }
        }

    }
    public class Utilisateur
    {
        public int id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
        public string mail { get; set; }
        public string password { get; set; }
        public string pays { get; set; }
        public int meilleurScore { get; set; }

        public Utilisateur(int id,string name, string photo, string mail, string password, string pays, int meilleurScore)
        {
            this.id = id;
            this.name = name;
            this.photo = photo;
            this.mail = mail;
            this.password = password;
            this.pays = pays;
            this.meilleurScore =meilleurScore;
        }

        public Utilisateur()
        {
        }
    }


    public class ListeUtilisateur
    {
        public List<Utilisateur> utilisateur { get; set; }
    }

}
