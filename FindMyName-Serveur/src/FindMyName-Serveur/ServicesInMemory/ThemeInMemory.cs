using FindMyName_Serveur.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindMyName_Serveur.Models;
using Microsoft.Data.Entity;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Controllers;
using Microsoft.Extensions.Logging;
using Microsoft.Data.Entity.Infrastructure;

namespace FindMyName_Serveur.ServicesInMemory
{
    public class ThemeInMemory : InterfaceTheme
    {
        List<Theme> themes;
        [FromServices]
        public fmnContext context { get; set; }
        [FromServices]
        public ILogger<ValuesController> Logger { get; set; }
        public List<Theme> ALL()
        {
            context = new fmnContext();
            var requete = from theme in context.Themes
                          select theme;

            // Execution de la requête
            return requete.ToList();
        }

        public List<Theme> getThemes()
        {
            themes = new List<Theme>();
            melanger(themes);
            return themes;
        }

        public void melanger(List<Theme> themes)
        {
            List<int> aleatoire = new List<int> { };
            List<Theme> AllThemes = new List<Theme> { };
            AllThemes = ALL();
            Random rndNumbers = new Random();
            int rndNumber = rndNumbers.Next(AllThemes.Count);
            themes.Add(AllThemes[rndNumber]);
            aleatoire.Add(rndNumber);
            for (var i = 0; i < 3; i++)
            {
                do
                {
                    rndNumber = rndNumbers.Next(AllThemes.Count);
                } while (isvalid(rndNumber, aleatoire));
                themes.Add(AllThemes[rndNumber]);
                aleatoire.Add(rndNumber);
            }
        }

        public bool isvalid(int nombre, List<int> aleatoire)
        {
            for (var i = 0; i < aleatoire.Count; i++)
                if (aleatoire[i] == nombre)
                    return true;
            return false;
        }

        public Theme getTheme(int id)
        {
            throw new NotImplementedException();
        }

        public int getId(string n)
        {
            throw new NotImplementedException();
        }

        public string getReponse(int i)
        {
            throw new NotImplementedException();
        }

        public bool getDone(int i)
        {
            throw new NotImplementedException();
        }

        public int getTaille(int i)
        {
            throw new NotImplementedException();
        }

        public string getName(int u)
        {
            throw new NotImplementedException();
        }
    }
}
