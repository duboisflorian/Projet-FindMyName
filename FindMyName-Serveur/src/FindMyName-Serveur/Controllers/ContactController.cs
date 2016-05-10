using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Services;
using FindMyName_Serveur.ViewModels;
using FindMyName_Serveur.Models;
using FindMyName_Serveur.Interface;
using FindMyName_Serveur.Services.EntityFramework;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FindMyName_Serveur.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        private IUtilisateurService _utilisateurService = new UtilisateurServiceEF();

        public ContactController()
        {
            _utilisateurService = new UtilisateurServiceEF();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IList<Contact> Get(int id)
        {
            return _utilisateurService.ALLContact();
        }

        // GET api/Contact/getContacts/x/y
        [HttpGet("getContacts/{id}/{type}")]
        public IEnumerable<ContactViewModel> getContacts(int id, string type)
        {
            //Contrôle des accès

            //Traitement
            IEnumerable<Contact> contacts = _utilisateurService.getContacts(id, type);

            //Génération du ViewModel
            var query = from c in contacts
                        select new ContactViewModel()
                        {
                            id = c.id,
                            name = c.user.name,
                            photo = c.user.photo
                        };

            return query.ToList();
        }

        // GET api/Contact/Add/x/y
        [HttpGet("Add/{c}/{user}/{u}")]
        public ResViewModel Add(int c, int user, int u)
        {
            return new ResViewModel(_utilisateurService.Add(c, user, u));
        }

        // GET api/Contact/getNbContact/x/y
        [HttpGet("getNbContact/{u}")]
        public int getNbContact(int u)
        {
            return _utilisateurService.getNbContact(u);
        }

        // GET api/Contact/Jouer/x
        [HttpGet("Jouer/{u}")]
        public ResIDViewModel Jouer(int u)
        {
            return _utilisateurService.Jouer(u);
        }
    }
}
