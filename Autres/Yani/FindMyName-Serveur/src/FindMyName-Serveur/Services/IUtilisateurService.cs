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
        Utilisateur getUser(string name);
        Utilisateur getUser(int id);
        Utilisateur Existe(int id);
        Utilisateur verificationConnexion(string mail, string password);
        Boolean verificationMailExist(String mail);
        string Same_mdp(int id, string password);
        int getlastid();
        void ajouterUtilisateur(string name, string mail, string password);
        int getOnlineutilisateur();
        string getName(int id);
        void ChangerMeilleurScore(int id, int score);
        string getPhoto(int id);
        string changePhoto(int id, string selectPhoto);
        string getPays(int id);
        string changePays(int id, string selectPays);
        ResIDViewModel Jouer(int id);
        Contact getAmiExiste(int id, int u);
        IList<Contact> ALLContact();
        Boolean getOnlineExiste(int id, int u);
        List<Contact> getContacts(int id, string type);
        void addAmi(int user, int id);
        void addOnline(int user, int id);
        void creation(Utilisateur u1);
        int getNbContact(int id);
        void addAmiOnline(int user, int id);
        String Add(int contactadd, int user, int id);
    }
}
