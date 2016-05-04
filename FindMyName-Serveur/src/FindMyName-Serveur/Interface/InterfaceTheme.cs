using FindMyName_Serveur.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Interface
{
    interface InterfaceTheme
    {
        List<Theme> getThemes();
        void melanger();
        bool isvalid(int nombre, List<int> aleatoire);
        Theme getTheme(int id);
        String getName(int u);
        int getId(String n);
        String getReponse(int i);
        bool getDone(int i);
        //ListeReponses getReponses(int id);
        int getTaille(int i);
    }
}
