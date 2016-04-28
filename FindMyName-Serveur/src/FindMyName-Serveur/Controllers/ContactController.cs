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
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public List<ListeContact> Get(int id)
        {
            return ContactService.ALL();
            //return "value";
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

        // GET api/Contact/getAmiExiste/x/y
        [HttpGet("getAmiExiste/{id}/{u}")]
        public Contact getAmiExiste(int id, int u)
        {
            return ContactService.getAmiExiste(id, u);
        }

        // GET api/Contact/getOnlineExiste/x/y
        [HttpGet("getOnlineExiste/{id}/{u}")]
        public Boolean getOnlineExiste(int id, int u)
        {
            return ContactService.getOnlineExiste(id, u);
        }

        // GET api/Contact/addAmi/x/y
        [HttpGet("addAmi/{user}/{u}")]
        public void addAmi(int user, int u)
        {
            ContactService.addAmi(user, u);
        }

        // GET api/Contact/Add/x/y
        [HttpGet("Add/{c}/{user}/{u}")]
        public Res Add(int c ,int user, int u)
        {
            return new Res(ContactService.Add(c,user, u));
        }

        // GET api/Contact/création/x/y
        [HttpGet("création/{id}")]
        public void création(int id)
        {
            ContactService.création(id);
        }

        // GET api/Contact/addOnline/x/y
        [HttpGet("addOnline/{user}/{u}")]
        public void addOnline(int user, int u)
        {
            ContactService.addOnline(user, u);
        }

        // GET api/Contact/getNbContact/x/y
        [HttpGet("getNbContact/{u}")]
        public int getNbContact(int u)
        {
            return ContactService.getNbContact(u);
        }

        // GET api/Contact/addAmiOnline/x/y
        [HttpGet("addAmiOnline/{user}/{u}")]
        public void addAmiOnline(int user, int u)
        {
            ContactService.addAmiOnline(user, u);
        }

        // GET api/Contact/Jouer/x
        [HttpGet("Jouer/{u}")]
        public ResID Jouer(int u)
        {
           return ContactService.Jouer(u);
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
    public class Res
    {
        public string text { get; set; }

        public Res(string t)
        {
            this.text = t;

        }

    }

    public class ResID
    {
        public string text { get; set; }
        public int id { get; set; }

        public ResID(string t,int i)
        {
            this.text = t;
            this.id = i;
        }

    }
}
