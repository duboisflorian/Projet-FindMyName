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
    public class ThemeController : Controller
    {
        // GET: api/Theme
        [HttpGet]
        public List<Services.Theme> Get()
        {
            return ThemeService.ALL();
        }

        [HttpGet("getThemes")]
        public List<Services.Theme> getThemes()
        {
            return ThemeService.getThemes();
        }

        [HttpGet("melanger")]
        public void melanger()
        {
            ThemeService.melanger();
        }

        [HttpGet("isvalid/{nombre}/{aleatoire}")]
        public bool isvalid(int nombre, List<int> aleatoire)
        {
            return ThemeService.isvalid(nombre, aleatoire);
        }

        [HttpGet("getTheme/{id}")]
        public static Services.Theme getTheme(int id)
        {
            return ThemeService.getTheme(id);
        }

        [HttpGet("getName/{u}")]
        public static String getName(int u)
        {
            return ThemeService.getName(u);
        }

        [HttpGet("getId/{n}")]
        public static int getId(String n)
        {
            return ThemeService.getId(n);
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
