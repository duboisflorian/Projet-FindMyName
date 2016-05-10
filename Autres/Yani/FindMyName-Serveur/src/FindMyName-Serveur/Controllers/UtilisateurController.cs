using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Services;
using FindMyName_Serveur.ViewModels;
using FindMyName_Serveur.Models;
using FindMyName_Serveur.Services.EntityFramework;
using FindMyName_Serveur.Interface;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FindMyName_Serveur.Controllers
{
    [Route("api/[controller]")]
    public class UtilisateurController : Controller
    {
        private IUtilisateurService _utilisateurService = new UtilisateurServiceEF();

        public UtilisateurController()
        {
            _utilisateurService = new UtilisateurServiceEF();
        }

        // GET: api/values
        [HttpGet]
        public IList<Utilisateur> Get()
        {
            return _utilisateurService.ALL();
        }

           // GET api/Utilisateur/{id}
           [HttpGet("{id}")]
           public Utilisateur Get(int id)
           {
               return _utilisateurService.getUser(id);
           }
           // GET api/Utilisateur/GetUserView/{id}
           [HttpGet("GetUserView/{id}")]
           public UtilisateurViewModel GetUserView(int id)
           { 
               //Contrôle des accès

               //Traitement
               Utilisateur user = _utilisateurService.getUser(id);

               return new UtilisateurViewModel(user.id,user.name,user.photo);
           }

           // GET api/verifMail/{mail}
           [HttpGet("verifMail/{mail}")]
           public string verifMailExist(string mail)
           {
               if (_utilisateurService.verificationMailExist(mail) == true)
                   return "existe";
               else
                   return "go";
           }

           // GET api/verifConnexion/{mail}/{password}
           [HttpGet("verifConnexion/{mail}/{password}")]
           public Utilisateur verifConnexion(string mail, string password)
           {
               return _utilisateurService.verificationConnexion(mail, password);
           }

           // GET api/sameMDP/{id}/{password}
           [HttpGet("sameMDP/{id}/{password}")]
           public string sameMDP(int id, string password)
           {
               return _utilisateurService.Same_mdp(id, password);
           }

           // GET api/ajoutus/{name}/{mail}/{password}
           [HttpGet("ajoutus/{name}/{mail}/{password}")]
           public string ajoutus(string name, string mail, string password)
           {
            _utilisateurService.ajouterUtilisateur(name,mail,password);
               return "bon";
           }

           // GET api/getPhoto/{u}
           [HttpGet("getPhoto/{u}")]
           public string getPhoto(int u)
           {
               return _utilisateurService.getPhoto(u);
           }

           // GET api/getPays/{u}
           [HttpGet("getPays/{u}")]
           public string getPays(int u)
           {
               return _utilisateurService.getPays(u);
           }

           // GET api/changePays/{id}/{selectPays}
           [HttpGet("changePays/{id}/{selectPays}")]
           public string changePays(int id,string selectPays)
           {
              return _utilisateurService.changePays(id,selectPays);
           }

           // GET api/changePhoto/{id}/{selectPhoto}
           [HttpGet("changePhoto/{id}/{selectPhoto}")]
           public string changePhoto(int id, string selectPhoto)
           {
              return _utilisateurService.changePhoto(id, selectPhoto);
           }
           
    }
}
