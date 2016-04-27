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
        // GET: api/Jouer
        [HttpGet]
        public List<Services.ListeReponses> Get()
        {
            return ReponsesService.ALL();
        }

        [HttpGet("getReponse/{i}")]
        public String getReponse(int i)
        {
            return ReponsesService.getReponse(i);
        }

        [HttpGet("getDone/{i}")]
        public bool getDone(int i)
        {
            return ReponsesService.getDone(i);
        }

        [HttpGet("getReponses/{id}")]
        public ListeReponses getReponses(int id)
        {
            return ReponsesService.getReponses(id);
        }

        [HttpGet("getTaille/{i}")]
        public int getTaille(int i)
        {
            return ReponsesService.getTaille(i);
        }
    }
}
