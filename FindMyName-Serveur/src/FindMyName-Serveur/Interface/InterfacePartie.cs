using FindMyName_Serveur.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Interface
{
    interface InterfacePartie
    {
        int getNbVictoire(int id, int id_ami);
        int getNbDefaite(int id, int id_ami);
        IList<Partie> getHistorique(int id, int id_ami);
        void savePartie(int id, int us, int th, int remaining);
        Boolean getPartieExiste(int id, int id_ami);
        Partie getPartieEnCours(int id, int id_ami);
        void AjouterPartie(int id, int id_ami, int th, int score, string j1, string j2);
        void ModifierPartie(int id, int id_ami, int th, int score, int id_partie);
        string getThemeFavori(int id);
        int getNbD(int id);
        int getNbV(int id);
        Boolean getEn_Cours(int id, int id_ami);
        int getnbParties(int id);
        List<Partie> getPartieEnCours(int id);
    }
}
