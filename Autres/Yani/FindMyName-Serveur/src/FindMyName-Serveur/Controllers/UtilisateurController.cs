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

        private IUtilisateurService u = new UtilisateurServiceEF();

        [HttpGet]
        public List<Utilisateur> Get()
        {
            return null;
        }
        /*   // GET: api/values
           [HttpGet]
           public IEnumerable<Utilisateur> Get()
           {
               return UtilisateurService.UTILISATEURS;
           }

           // GET api/Utilisateur/{id}
           [HttpGet("{id}")]
           public Utilisateur Get(int id)
           {
               return UtilisateurService.getUser(id);
           }
           // GET api/Utilisateur/GetUserView/{id}
           [HttpGet("GetUserView/{id}")]
           public UtilisateurViewModel GetUserView(int id)
           { 
               //Contrôle des accès

               //Traitement
               Utilisateur user = UtilisateurService.getUser(id);

               return new UtilisateurViewModel(user.id,user.name,user.photo);
           }

           // GET api/verifMail/{mail}
           [HttpGet("verifMail/{mail}")]
           public Res verifMailExist(string mail)
           {
               if (UtilisateurService.verificationMailExist(mail) == true)
                   return new Res("existe");
               else
                   return new Res("go");
           }

           // GET api/verifConnexion/{mail}/{password}
           [HttpGet("verifConnexion/{mail}/{password}")]
           public Utilisateur verifConnexion(string mail, string password)
           {
               return UtilisateurService.verificationConnexion(mail, password);
           }

           // GET api/sameMDP/{id}/{password}
           [HttpGet("sameMDP/{id}/{password}")]
           public Res sameMDP(int id, string password)
           {
               return new Res(UtilisateurService.Same_mdp(id, password));
           }

           // GET api/ajoutus/{name}/{mail}/{password}
           [HttpGet("ajoutus/{name}/{mail}/{password}")]
           public Res ajoutus(string name, string mail, string password)
           {
               UtilisateurService.ajouterUtilisateur(name,mail,password);
               return new Res("bon");
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

           // GET api/changePays/{id}/{selectPays}
           [HttpGet("changePays/{id}/{selectPays}")]
           public Res changePays(int id,string selectPays)
           {
              return new Res(UtilisateurService.changePays(id,selectPays));
           }

           // GET api/changePhoto/{id}/{selectPhoto}
           [HttpGet("changePhoto/{id}/{selectPhoto}")]
           public Res changePhoto(int id, string selectPhoto)
           {
              return new Res (UtilisateurService.changePhoto(id, selectPhoto));
           }
           */
    }
}
