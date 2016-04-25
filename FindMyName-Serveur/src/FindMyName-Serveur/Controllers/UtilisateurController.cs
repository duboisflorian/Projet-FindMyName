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
