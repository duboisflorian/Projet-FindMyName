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
    public class JouerController : Controller
    {
        // GET: api/values
        [HttpGet]
        public List<Services.ListeReponses> Get()
        {
            return ReponsesService.ALL();
        }

        [HttpGet("getThemes/{i}")]
        public static String getReponse(int i)
        {
            return ReponsesService.getReponse(i);
        }

        [HttpGet("getDone/{i}")]
        public static bool getDone(int i)
        {
            return ReponsesService.getDone(i);
        }

        [HttpGet("getReponses/{id}")]
        public static ListeReponses getReponses(int id)
        {
            return ReponsesService.getReponses(id);
        }

        [HttpGet("getTaille/{i}")]
        public static int getTaille(int i)
        {
            return ReponsesService.getTaille(i);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
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
