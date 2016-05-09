using FindMyName_Serveur.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Interface
{
    public interface IThemeService
    {
        List<Theme> getThemes();
        List<Theme> ALL();
        void melanger(List<Theme> themes);
        bool isvalid(int nombre, List<int> aleatoire);
        Theme getTheme(int id);
        String getName(int u);
        int getId(String n);
        Mot getReponse(int i);
        bool getDone(int i);
        IEnumerable<Reponse> getReponses(int id);
        int getTaille(int i);
    }
}
