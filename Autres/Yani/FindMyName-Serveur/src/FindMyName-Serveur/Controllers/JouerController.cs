using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Services;
using FindMyName_Serveur.Models;
using FindMyName_Serveur.Services.EntityFramework;
using FindMyName_Serveur.Interface;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FindMyName_Serveur.Controllers
{
    [Route("api/[controller]")]
    public class JouerController : Controller
    {
        private IThemeService _themeService = new ThemeServiceEF();

        public JouerController()
        {
            _themeService = new ThemeServiceEF();
        }
         // GET: api/Jouer
         [HttpGet]
         public IList<Theme> Get()
         {
             return _themeService.ALL();
         }

         [HttpGet("getReponse/{i}")]
         public String getReponse(int i)
         {
             return _themeService.getReponse(i);
         }

         [HttpGet("getDone/{i}")]
         public bool getDone(int i)
         {
             return _themeService.getDone(i);
         }

         [HttpGet("getReponses/{id}")]
         public IList<Reponse> getReponses(int id)
         {
             return _themeService.getReponses(id);
         }

         [HttpGet("getTaille/{i}")]
         public int getTaille()
         {
             return _themeService.getTaille();
         }
    }
}
