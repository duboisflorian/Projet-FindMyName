using FindMyName_Serveur.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindMyName_Serveur.Models;

namespace FindMyName_Serveur.Services.EntityFramework
{
    public class PartieServiceEF : IPartieService
    {
        public void AjouterPartie(int id, int id_ami, int th, int score, string j1, string j2)
        {
            throw new NotImplementedException();
        }

        public bool getEn_Cours(int id, int id_ami)
        {
            throw new NotImplementedException();
        }

        public IList<Partie> getHistorique(int id, int id_ami)
        {
            throw new NotImplementedException();
        }

        public int getNbD(int id)
        {
            throw new NotImplementedException();
        }

        public int getNbDefaite(int id, int id_ami)
        {
            throw new NotImplementedException();
        }

        public int getnbParties(int id)
        {
            throw new NotImplementedException();
        }

        public int getNbV(int id)
        {
            throw new NotImplementedException();
        }

        public int getNbVictoire(int id, int id_ami)
        {
            throw new NotImplementedException();
        }

        public List<Partie> getPartieEnCours(int id)
        {
            throw new NotImplementedException();
        }

        public Partie getPartieEnCours(int id, int id_ami)
        {
            throw new NotImplementedException();
        }

        public bool getPartieExiste(int id, int id_ami)
        {
            throw new NotImplementedException();
        }

        public string getThemeFavori(int id)
        {
            throw new NotImplementedException();
        }

        public void ModifierPartie(int id, int id_ami, int th, int score, int id_partie)
        {
            throw new NotImplementedException();
        }

        public void savePartie(int id, int us, int th, int remaining)
        {
            throw new NotImplementedException();
        }
    }
}
