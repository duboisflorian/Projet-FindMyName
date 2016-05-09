﻿using FindMyName_Serveur.Interface;
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

        public void AjouterPartie(int id, int id_ami, int th, int score, string j1, string j2)
        {
            throw new NotImplementedException();
        }

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

        public int getNbD(int id)
        {
            throw new NotImplementedException();
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
                case "victoire":
                    nombrePartie = context.parties
                         .Include(p => p.j1)
                         .Include(p => p.j2)
                         .Where(p => (p.j1.id == id || p.j2.id == id) && (p.j1.id == id_ami || p.j2.id == id_ami)
                         && (((p.j1.id == id && p.s1 < p.s2) || (p.s1 > p.s2 && p.j2.id == id)) && p.player == -1))
                         .Count();
                    break;
                case "defaite":
                    nombrePartie = context.parties
                         .Include(p => p.j1)
                         .Include(p => p.j2)
                         .Where(p => (p.j1.id == id || p.j2.id == id) && (p.j1.id == id_ami || p.j2.id == id_ami)
                         && (((p.j1.id == id && p.s1 > p.s2) || (p.s1 < p.s2 && p.j2.id == id)) && p.player == -1))
                         .Count();
                    break;
            }

            return nombrePartie;
        }


        public int getNbV(int id)
        {
            throw new NotImplementedException();
        }


        public IEnumerable<Partie> getPartieEnCours(int id)
        {
            context = new fmnContext();

            IEnumerable <Partie> partie = context.parties
                    .Include(p => p.Manches)
                    .ThenInclude((Manche m) => m.theme)
                    .Include(p => p.j1)
                    .Include(p=> p.j2)
                    .Where(p => (p.j1.id == id || p.j2.id == id)) // && p.s1 < 3 && p.s2 < 3  pas compris à revoir sur le client
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
                    .Where(p => (p.j1.id == id || p.j2.id == id) && (p.j1.id == id_ami || p.j2.id == id_ami))
                    .SingleOrDefault();

            return partie;
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
