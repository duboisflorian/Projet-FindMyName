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
    public class UtilisateurController : Controller
    {
        // GET: api/values
        [HttpGet]
        public List<Utilisateur> Get()
        {
            return UtilisateurService.UTILISATEURS;
            //return new string[] { "value1", "value2" };
        }

        // GET api/Utilisateur/{id}
        [HttpGet("{id}")]
        public Utilisateur Get(int id)
        {
            return UtilisateurService.getUser(id);
            //return "value";
        }

        // GET api/verifMail/{mail}
        [HttpGet("verifMail/{mail}")]
        public Boolean verifMailExist(string mail)
        {
            return UtilisateurService.verificationMailExist(mail);
        }

        // GET api/verifConnexion/{mail}/{password}
        [HttpGet("verifConnexion/{mail}/{password}")]
        public Utilisateur verifConnexion(string mail, string password)
        {
            return UtilisateurService.verificationConnexion(mail, password);
        }

        // GET api/sameMDP/{id}/{password}
        [HttpGet("sameMDP/{id}/{password}")]
        public Boolean sameMDP(int id, string password)
        {
            return UtilisateurService.Same_mdp(id, password);
        }

        // GET api/getLastId
        [HttpGet("getLastId")]
        public int getLastId()
        {
            return UtilisateurService.getlastid();
        }

        // GET api/ajoutus/{name}/{mail}/{password}
        [HttpGet("ajoutus/{name}/{mail}/{password}")]
        public int ajouterUtilisateur(string name, string mail, string password)
        {
            return UtilisateurService.ajouterUtilisateur(name,mail,password);
        }

        // GET api/getOnlineUtilisateur
        [HttpGet("getOnlineUtilisateur")]
        public int getOnlineUtilisateur()
        {
            return UtilisateurService.getOnlineutilisateur();
        }

        // GET api/getName/{id}
        [HttpGet("getName/{id}")]
        public string getName(int id)
        {
            return UtilisateurService.getName(id);
        }

        // GET api/ChangerMeilleurScore/{u}/{score}
        [HttpGet("ChangerMeilleurScore/{u}/{score}")]
        public void ChangerMeilleurScore(int u,int score)
        {
            UtilisateurService.ChangerMeilleurScore(u, score);
        }

        // GET api/getPhoto/{u}
        [HttpGet("getPhoto/{u}")]
        public Res getPhoto(int u)
        {
            return new Res(UtilisateurService.getPhoto(u));
        }

        // GET api/getPays/{u}
        [HttpGet("getPays/{u}")]
        public  Res getPays(int u)
        {
            return new Res(UtilisateurService.getPays(u));
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
