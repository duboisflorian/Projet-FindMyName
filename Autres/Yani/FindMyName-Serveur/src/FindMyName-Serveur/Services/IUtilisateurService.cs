using FindMyName_Serveur.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Interface
{
    public interface IUtilisateurService
    {
        IList<Utilisateur> ALL();
        Utilisateur getUser(int id);
        Utilisateur Existe(int id);
        Utilisateur verificationConnexion(string mail, string password);
        Boolean verificationMailExist(String mail);
        string Same_mdp(int id, string password);
        int getlastid();
        void ajouterUtilisateur(string name, string mail, string password);
        int getOnlineutilisateur();
        string getName(int u);
        void ChangerMeilleurScore(int u, int score);
        string getPhoto(int u);
        string changePhoto(int id, string selectPhoto);
        string getPays(int u);
        string changePays(int id, string selectPays);
        ResID Jouer(int u);
        Contact getAmiExiste(int id, int u);
        Boolean getOnlineExiste(int id, int u);
        void changerPhoto(int id, string photo);
        List<Contact> getContacts(int id, string type);
        void addAmi(int user, int u);
        void addOnline(int user, int u);
        void creation(int id);
        int getNbContact(int u);
        void addAmiOnline(int user, int u);
        String Add(int contactadd, int user, int u);
    }
}
