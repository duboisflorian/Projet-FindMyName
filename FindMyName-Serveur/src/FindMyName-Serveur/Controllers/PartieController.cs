using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FindMyName_Serveur.Controllers
{
    [Route("api/[controller]")]
    public class PartieController : Controller
    {
        // GET: api/Partie
        [HttpGet]
        public List<Partie> Get()
        {
            return PartieService.PARTIES;
        }

        // GET: api/Partie/getPartieEnCours/{ID}
        [HttpGet("getPartieEnCours/{id}")]
        public List<Partie> getPartieEnCours(int id)
        {
           return PartieService.getPartieEnCours(id);
        }

        // GET: api/Partie/getEn_Cours/{ID}/{ID_AMI}
        [HttpGet("getEn_Cours/{id}/{id_ami}")]
        public Boolean getEn_Cours(int id, int id_ami)
        {
            return PartieService.getEn_Cours(id,id_ami);
        }

        // GET: api/Partie/getPartieEnCours/{ID}/{ID_AMI}
        [HttpGet("getPartieEnCours/{id}/{id_ami}")]
        public Partie getPartieEnCours(int id, int id_ami)
        {
            return PartieService.getPartieEnCours(id, id_ami);
        }

        // GET: api/Partie/getHistorique/{ID}/{ID_AMI}
        [HttpGet("getHistorique/{id}/{id_ami}")]
        public List<Partie> getHistorique(int id, int id_ami)
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

        // GET: api/Partie/getPartieExiste/{ID}/{ID_AMI}
        [HttpGet("getPartieExiste/{id}/{id_ami}")]
        public Partie getPartieExiste(int id, int id_ami)
        {
            return PartieService.getPartieExiste(id, id_ami);
        }

        // GET: api/Partie/AjouterPartie/{ID}/{ID_AMI}/{th}/{score}/{j1}/{j2}
        [HttpGet("AjouterPartie/{id}/{id_ami}/{th}/{score}/{j1}/{j2}")]
        public void AjouterPartie(int id, int id_ami,int th, int score, string j1, string j2 )
        {
            PartieService.AjouterPartie(id, id_ami, th,score,j1,j2);
        }

        // GET: api/Partie/ModifierPartie/{ID}/{ID_AMI}/{th}/{score}/{id_partie}
        [HttpGet("ModifierPartie/{id}/{id_ami}/{th}/{score}/{id_partie}")]
        public void ModifierPartie(int id, int id_ami, int th, int score,int id_partie)
        {
            PartieService.ModifierPartie(id, id_ami,th,score,id_partie);
        }

        // GET: api/Partie/getnbParties/{ID}/
        [HttpGet("getnbParties/{id}")]
        public int getnbParties(int id)
        {
            return PartieService.getnbParties(id);
        }


        // GET: api/Partie/getThemeFavori/{ID}/
        [HttpGet("getThemeFavori/{id}")]
        public string getThemeFavori(int id)
        {
            return PartieService.getThemeFavori(id);
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

    }
}
