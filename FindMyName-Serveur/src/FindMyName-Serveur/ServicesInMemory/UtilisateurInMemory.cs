using FindMyName_Serveur.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindMyName_Serveur.Models;

namespace FindMyName_Serveur.ServicesInMemory
{
    public class UtilisateurInMemory : InterfaceUtilisateur
    {
        public string Add(int contactadd, int user, int u)
        {
            throw new NotImplementedException();
        }

        public void addAmi(int user, int u)
        {
            throw new NotImplementedException();
        }

        public void addAmiOnline(int user, int u)
        {
            throw new NotImplementedException();
        }

        public void addOnline(int user, int u)
        {
            throw new NotImplementedException();
        }

        public void ajouterUtilisateur(string name, string mail, string password)
        {
            throw new NotImplementedException();
        }

        public string changePays(int id, string selectPays)
        {
            throw new NotImplementedException();
        }

        public string changePhoto(int id, string selectPhoto)
        {
            throw new NotImplementedException();
        }

        public void ChangerMeilleurScore(int u, int score)
        {
            throw new NotImplementedException();
        }

        public void changerPhoto(int id, string photo)
        {
            throw new NotImplementedException();
        }

        public void creation(int id)
        {
            throw new NotImplementedException();
        }

        public Utilisateur Existe(int id)
        {
            throw new NotImplementedException();
        }

        public Contact getAmiExiste(int id, int u)
        {
            throw new NotImplementedException();
        }

        public List<Contact> getContacts(int id, string type)
        {
            throw new NotImplementedException();
        }

        public int getlastid()
        {
            throw new NotImplementedException();
        }

        public string getName(int u)
        {
            throw new NotImplementedException();
        }

        public int getNbContact(int u)
        {
            throw new NotImplementedException();
        }

        public bool getOnlineExiste(int id, int u)
        {
            throw new NotImplementedException();
        }

        public int getOnlineutilisateur()
        {
            throw new NotImplementedException();
        }

        public string getPays(int u)
        {
            throw new NotImplementedException();
        }

        public string getPhoto(int u)
        {
            throw new NotImplementedException();
        }

        public Utilisateur getUser(int id)
        {
            throw new NotImplementedException();
        }

        public ResID Jouer(int u)
        {
            throw new NotImplementedException();
        }

        public string Same_mdp(int id, string password)
        {
            throw new NotImplementedException();
        }

        public Utilisateur verificationConnexion(string mail, string password)
        {
            throw new NotImplementedException();
        }

        public bool verificationMailExist(string mail)
        {
            throw new NotImplementedException();
        }
    }
}
