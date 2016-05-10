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

namespace FindMyName_Serveur.Services.EntityFramework
{
    public class ThemeServiceEF : IThemeService
    {
        List<Theme> themes;
        [FromServices]
        public fmnContext context { get; set; }
        [FromServices]
        public ILogger<ValuesController> Logger { get; set; }

        public List<Theme> ALL()
        {
            context = new fmnContext();
            var requete = from theme in context.Themes.Include(b => b.reponses).ThenInclude((Reponse r) => r.Appellations)
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
            List<Theme> AllThemes = new List<Theme> { };
            AllThemes = ALL();
            for (var i = 0; i < AllThemes.Count; i++)
            {
                if (AllThemes[i].id == id)
                    return AllThemes[i];
            }
            return AllThemes[0];
        }

        public int getId(string n)
        {
            List<Theme> AllThemes = new List<Theme> { };
            AllThemes = ALL();
            for (var i = 0; i < AllThemes.Count; i++)
            {
                if (AllThemes[i].text == n)
                    return AllThemes[i].id;
            }
            return 0;
        }

        public string getReponse(int i)
        {
            IList<Reponse> AllReponses = new List<Reponse> { };
            AllReponses = ALLREPONSE();
            return AllReponses[0].Appellations[i].text;
            /*List<Theme> AllThemes = new List<Theme> { };
            AllThemes = ALL();
            return AllThemes[0].reponses[i].appellation[0];*/
        }

        public bool getDone(int i)
        {
            IList<Reponse> AllReponses = new List<Reponse> { };
            AllReponses = ALLREPONSE();
            return AllReponses[0].done;
            /*List<Theme> AllThemes = new List<Theme> { };
            AllThemes = ALL();
            return AllThemes[0].reponses[i].done;*/
        }

        public IList<Reponse> ALLREPONSE() {
            context = new fmnContext();
            var requete = from reponse in context.Reponses.Include(b => b.Appellations)
                          select reponse;

            // Execution de la requête
            return requete.ToList();
            /*Theme theme = context.Themes
                .Include(b => b.reponses)
                .ThenInclude((Reponse r)=>r.Appellations)
                .FirstOrDefault();

            return theme.reponses;*/

            //.SingleOrDefault(p => p.text == "PSG");
            /*var reponses = context.Reponses
                .Include(p => p.appellation).ToList();*/

            //List<Reponse> reposnes = theme.reponses;

            //foreach(var a in reposnes)
            //{
            //    var reponses = context.Reponses
            //        .Where(p => p.id == a.id)
            //     .Include(p => p.appellation).ToList();
            //}
            /*
            var requete = from reponse in context.Reponses
                          where reponse.theme.id == id
                          select reponse;*/

            // Execution de la requête
            //return reposnes;
        }

        public int getTaille()
        {
            IList<Reponse> AllReponses = new List<Reponse> { };
            AllReponses = ALLREPONSE();
            return AllReponses.Count();
        }

        public string getName(int u)
        {
            List<Theme> AllThemes = new List<Theme> { };
            AllThemes = ALL();
            for (var i = 0; i < AllThemes.Count; i++)
            {
                if (AllThemes[i].id == u)
                    return AllThemes[i].text;
            }
            return "";
        }

        public IList<Reponse> getReponses(int id)
        {

            context = new fmnContext();

            Theme theme = context.Themes
                .Where(p => p.id == id)
                .Include(b => b.reponses)
                .ThenInclude((Reponse r) => r.Appellations)
                .FirstOrDefault();

            return theme?.reponses;
        }

      

        //public List<Reponse> getReponses(int id)
        //{
        //    List<Reponse> AllReponses = new List<Reponse> { };
        //    AllReponses = ALLREPONSE();
        //    for (int i = 0; i < AllReponses.Count; i++)
        //    {
        //        if (AllReponses[i] == id)
        //            return ReponsesService.REPONSES[ReponsesService.i];
        //    }
        //}
    }
}
