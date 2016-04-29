using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Services;
using FindMyName_Serveur.ViewModels;
using FindMyName_Serveur.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FindMyName_Serveur.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {

        // GET api/values/5
        [HttpGet("{id}")]
        public IEnumerable<ListeContact> Get(int id)
        {
            return ContactService.ALL();
        }

        // GET api/Contact/getContacts/x/y
        [HttpGet("getContacts/{id}/{type}")]
        public IEnumerable<ContactViewModel> getContacts(int id,string type)
        {
            //Contrôle des accès

            //Traitement
            IEnumerable<Contact> contacts = ContactService.getContacts(id,type);

            //Génération du ViewModel
            var query = from c in contacts
                        select new ContactViewModel()
                        {
                            id = c.id,
                            name = c.name,
                            photo = c.photo
                        };

            return query.ToList();
        }

        // GET api/Contact/Add/x/y
        [HttpGet("Add/{c}/{user}/{u}")]
        public Res Add(int c ,int user, int u)
        {
            return new Res(ContactService.Add(c,user, u));
        }

        // GET api/Contact/getNbContact/x/y
        [HttpGet("getNbContact/{u}")]
        public int getNbContact(int u)
        {
            return ContactService.getNbContact(u);
        }

        // GET api/Contact/Jouer/x
        [HttpGet("Jouer/{u}")]
        public ResID Jouer(int u)
        {
           return ContactService.Jouer(u);
        }

    }
}
