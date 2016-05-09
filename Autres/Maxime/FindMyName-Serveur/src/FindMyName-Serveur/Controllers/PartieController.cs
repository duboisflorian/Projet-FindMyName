﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Services;
using FindMyName_Serveur.Models;
using FindMyName_Serveur.Services.EntityFramework;
using FindMyName_Serveur.Interface;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FindMyName_Serveur.Controllers
{
    [Route("api/[controller]")]
    public class PartieController : Controller
    {
        private IPartieService _partieService = new PartieServiceEF();


        public PartieController()
        {
            _partieService = new PartieServiceEF();
        }


        // GET: api/Partie/getPartieEnCours/{ID}
        [HttpGet("getPartieEnCours/{id}")]
         public IEnumerable<Partie> getPartieEnCours(int id)
         {
            return _partieService.getPartieEnCours(id);
         }

        
         // GET: api/Partie/getEn_Cours/{ID}/{ID_AMI}
         [HttpGet("getEn_Cours/{id}/{id_ami}")]
         public ResViewModel getEn_Cours(int id, int id_ami)
         { 
             if (_partieService.getEn_Cours(id, id_ami) == true)
                 return new ResViewModel ("encours");
             else
                 return new ResViewModel("rien");
         }
/*
         // GET: api/Partie/getPartieEnCours/{ID}/{ID_AMI}
         [HttpGet("getPartieEnCours/{id}/{id_ami}")]
         public Partie getPartieEnCours(int id, int id_ami)
         {
             return PartieService.getPartieEnCours(id, id_ami);
         }

         // GET: api/Partie/getHistorique/{ID}/{ID_AMI}
         [HttpGet("getHistorique/{id}/{id_ami}")]
         public IEnumerable<Partie> getHistorique(int id, int id_ami)
         {
             return PartieService.getHistorique(id, id_ami);
         }

         // GET: api/Partie/getNbVictoire/{ID}/{ID_AMI}
         [HttpGet("getNbVictoire/{id}/{id_ami}")]
         public int getNbVictoire(int id, int id_ami)
         {
             return PartieService.getNbVictoire(id, id_ami);
         }

         // GET: api/Partie/getNbDefaite/{ID}/{ID_AMI}
         [HttpGet("getNbDefaite/{id}/{id_ami}")]
         public int getNbDefaite(int id, int id_ami)
         {
             return PartieService.getNbDefaite(id, id_ami);
         }

         [HttpGet("savePartie/{id}/{us}/{th}/{remaining}")]
         public Res savePartie(int id, int us, int th, int remaining)
         {
             PartieService.savePartie(id, us, th, remaining);
             return new Res("gg");
         }

         // GET: api/Partie/getnbParties/{ID}/
         [HttpGet("getnbParties/{id}")]
         public int getnbParties(int id)
         {
             return PartieService.getnbParties(id);
         }


         // GET: api/Partie/getThemeFavori/{ID}/
         [HttpGet("getThemeFavori/{id}")]
         public Res getThemeFavori(int id)
         {
             return new Res (PartieService.getThemeFavori(id));
         }

         // GET: api/Partie/getNbD/{ID}/
         [HttpGet("getNbD/{id}")]
         public int getNbD(int id)
         {
             return PartieService.getNbD(id);
         }

         // GET: api/Partie/getNbV/{ID}/
         [HttpGet("getNbV/{id}")]
         public int getNbV(int id)
         {
             return PartieService.getNbV(id);
         }
         */
    }
}
