using FindMyName_Serveur.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindMyName_Serveur.Models;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Controllers;
using Microsoft.Extensions.Logging;
using Microsoft.Data.Entity;

namespace FindMyName_Serveur.Services.EntityFramework
{
    public class PartieServiceEF : IPartieService
    {
        [FromServices]
        public fmnContext context { get; set; }
        [FromServices]
        public ILogger<ValuesController> Logger { get; set; }

        private UtilisateurServiceEF _utilisateurService = new UtilisateurServiceEF();
        private ThemeServiceEF _themeService = new ThemeServiceEF();

        public bool getEn_Cours(int id, int id_ami)
        {
            bool resultat = false;

            context = new fmnContext();

            int nombrePartieEnCours = context.parties
                    .Include(p => p.j1)
                    .Include(p => p.j2)
                    .Where(p => (p.j1.id == id || p.j2.id == id) && (p.j1.id == id_ami || p.j2.id == id_ami) && p.player != -1)
                    .Count();

            if (nombrePartieEnCours > 0)
                resultat = true;

            return resultat;
        }

        public IEnumerable<Partie> getHistorique(int id, int id_ami)
        {
            context = new fmnContext();

            IEnumerable<Partie> historique = context.parties
                    .Include(p => p.Manches)
                    .ThenInclude((Manche m) => m.theme)
                    .Include(p => p.j1)
                    .Include(p => p.j2)
                    .Where(p => (p.j1.id == id || p.j2.id == id) && (p.j1.id == id_ami || p.j2.id == id_ami))
                    .ToList();

            return historique;

        }

      
        public int getNbPartie(int id, int id_ami , string etat )
        {
            context = new fmnContext();
            int nombrePartie = 0;
            switch (etat)
            {
                default:
                    nombrePartie = 0;
                    break;
                case "all":
                    nombrePartie = context.parties
                           .Include(p => p.j1)
                           .Include(p => p.j2)
                           .Where(p => (p.j1.id == id ||p.j2.id == id))
                           .Count();
                    break;
                case "victoireAvecAmi":
                    nombrePartie = context.parties
                         .Include(p => p.j1)
                         .Include(p => p.j2)
                         .Where(p => (p.j1.id == id || p.j2.id == id) && (p.j1.id == id_ami || p.j2.id == id_ami)
                         && (((p.j1.id == id && p.s1 < p.s2) || (p.s1 > p.s2 && p.j2.id == id)) && p.player == -1))
                         .Count();
                    break;
                case "defaiteAvecAmi":
                    nombrePartie = context.parties
                         .Include(p => p.j1)
                         .Include(p => p.j2)
                         .Where(p => (p.j1.id == id || p.j2.id == id) && (p.j1.id == id_ami || p.j2.id == id_ami)
                         && (((p.j1.id == id && p.s1 > p.s2) || (p.s1 < p.s2 && p.j2.id == id)) && p.player == -1))
                         .Count();
                    break;
                case "victoire":
                    nombrePartie = context.parties
                         .Include(p => p.j1)
                         .Include(p => p.j2)
                         .Where(p => (p.j1.id == id || p.j2.id == id)
                         && (((p.j1.id == id && p.s1 < p.s2) || (p.s1 > p.s2 && p.j2.id == id)) && p.player == -1))
                         .Count();
                    break;
                case "defaite":
                    nombrePartie = context.parties
                         .Include(p => p.j1)
                         .Include(p => p.j2)
                         .Where(p => (p.j1.id == id || p.j2.id == id)
                         && (((p.j1.id == id && p.s1 > p.s2) || (p.s1 < p.s2 && p.j2.id == id)) && p.player == -1))
                         .Count();
                    break;
            }

            return nombrePartie;
        }

        public IEnumerable<Partie> getPartieEnCours(int id)
        {
            context = new fmnContext();

            IEnumerable <Partie> partie = context.parties
                    .Include(p => p.Manches)
                    .ThenInclude((Manche m) => m.theme)
                    .Include(p => p.j1)
                    .Include(p=> p.j2)
                    .Where(p => (p.j1.id == id || p.j2.id == id) && p.s1 < 3 && p.s2 < 3) 
                    .ToList();

            return partie;
        }

        public Partie getPartieEnCours(int id, int id_ami)
        {
            context = new fmnContext();

            Partie partie = context.parties
                    .Include(p => p.Manches)
                    .ThenInclude((Manche m) => m.theme)
                    .Include(p => p.j1)
                    .Include(p => p.j2)
                    .Where(p => (p.j1.id == id || p.j2.id == id) && (p.j1.id == id_ami || p.j2.id == id_ami) && p.player!=-1 && p.s1!=3 && p.s2 != 3)
                    .SingleOrDefault();

            return partie;
        }

        public string getThemeFavori(int id)
        {
            context = new fmnContext();
            string th = "aucun pour le moment";
            List<string> themes = new List<string>();

            IEnumerable<Partie> parties = context.parties
                     .Include(p => p.Manches)
                    .ThenInclude((Manche m) => m.theme)
                    .Include(p => p.j1)
                    .Include(p => p.j2)
                    .Where(p => (p.j1.id == id || p.j2.id == id) )
                    .ToList();

            foreach( var partie in parties)
            {
                foreach(var manche in partie.Manches)
                {
                    themes.Add(manche.theme.text);
                }
            } 


            if (themes.Count() != 0)
            {
                var resultat = themes
                    .GroupBy(val => val)
                    .OrderByDescending(grp => grp.Count())
                    .ThenBy(grp => grp.Key);
                th = resultat.First().Key;
            }
            return th;
        }

        public Boolean getPartieExiste(int id, int id_ami)
        {
            bool resultat = false;
            context = new fmnContext();

            int nombrePartieEnCours = context.parties
                    .Include(p => p.j1)
                    .Include(p => p.j2)
                    .Where(p => ((p.j1.id == id && p.j2.id == id_ami) || (p.j1.id == id_ami && p.j2.id == id)) && (p.player == id || p.player == id_ami))
                    .Count();

            if (nombrePartieEnCours > 0)
                resultat = true;

            return resultat;
        }

        public void ModifierPartie(int id, int id_ami, int th, int score)
        {
            Partie partieEnCours = this.getPartieEnCours(id, id_ami);

            if (partieEnCours != null)
            {
                if (partieEnCours.Manches.Last().s1 == -1)
                {
                    partieEnCours.Manches.Last().s1 = score;
                    if (partieEnCours.Manches.Last().s1 > partieEnCours.Manches.Last().s2)
                    {
                        partieEnCours.s1 = partieEnCours.s1 + 1;
                    }
                    if (partieEnCours.Manches.Last().s1 < partieEnCours.Manches.Last().s2)
                    {
                        partieEnCours.s2 = partieEnCours.s2 + 1;
                    }
                    if (partieEnCours.s2 == 3 || partieEnCours.s1 == 3)
                    {
                        partieEnCours.player = -1;
                    }
                }
                else if (partieEnCours.Manches.Last().s2 == -1)
                {
                    partieEnCours.Manches.Last().s2 = score;
                    if (partieEnCours.Manches.Last().s1 > partieEnCours.Manches.Last().s2)
                    {
                        partieEnCours.s1 = partieEnCours.s1 + 1;
                    }
                    if (partieEnCours.Manches.Last().s1 < partieEnCours.Manches.Last().s2)
                    {
                        partieEnCours.s2 = partieEnCours.s2 + 1;
                    }
                    if (partieEnCours.s2 == 3 || partieEnCours.s1 == 3)
                    {
                        partieEnCours.player = -1;
                    }
                }
           
                else
                {
                    Theme theme = _themeService.getTheme(th);
                    if (id == partieEnCours.j1.id)
                    {
                        partieEnCours.Manches.Add(new Manche(theme, score, -1));
                    }
                    else
                    {
                        partieEnCours.Manches.Add(new Manche( theme, -1, score));
                    }

                    partieEnCours.player = id_ami;
                }
                context = new fmnContext();

                context.parties.Update(partieEnCours);
                context.SaveChanges();
            }
        }

        public void AjouterPartie(int id, int id_ami, int th, int score)
        {
            Utilisateur joueur1 = _utilisateurService.getUser(id);
            Utilisateur joueur2 = _utilisateurService.getUser(id_ami);
            Theme theme = _themeService.getTheme(th);
            Partie p = new Partie(joueur1, joueur2, 0, 0, id_ami, new List<Manche> { new Manche(theme, score, -1) });

            context = new fmnContext();

            context.parties.Add(p);
            context.SaveChanges();
        }

        public void savePartie(int id, int us, int th, int remaining)
        {
            var Partieexiste = this.getPartieExiste(id, us);

            if (Partieexiste == false)
            {
                 this.AjouterPartie(us, id, th, remaining);
            }
            else
            {
               ModifierPartie(us, id, th, remaining);
            }

            _utilisateurService.ChangerMeilleurScore(us, remaining);
        }
    }
}
