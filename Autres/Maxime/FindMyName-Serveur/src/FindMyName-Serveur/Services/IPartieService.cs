using FindMyName_Serveur.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Interface
{
    interface IPartieService
    {
        int getNbPartie(int id, int id_ami, string etat);
        IEnumerable<Partie> getHistorique(int id, int id_ami);
        void savePartie(int id, int us, int th, int remaining);
        Partie getPartieEnCours(int id, int id_ami);
        void AjouterPartie(int id, int id_ami, int th, int score);
        void ModifierPartie(int id, int id_ami, int th, int score);
        string getThemeFavori(int id);
        Boolean getPartieExiste(int id, int id_ami);
        Boolean getEn_Cours(int id, int id_ami);
        IEnumerable<Partie> getPartieEnCours(int id);
    }
}
