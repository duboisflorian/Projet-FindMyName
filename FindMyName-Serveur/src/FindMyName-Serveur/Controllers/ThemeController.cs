using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Services;
using FindMyName_Serveur.Models;
using FindMyName_Serveur.Interface;
using FindMyName_Serveur.Services.EntityFramework;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FindMyName_Serveur.Controllers
{
    [Route("api/[controller]")]
    public class ThemeController : Controller
    {
        private IThemeService _themeService = new ThemeServiceEF();

        public ThemeController()
        {
            _themeService = new ThemeServiceEF();
        }

        //public ThemeController(IThemeService service)
        //{
        //    _themeService = service;
        //}

        // GET: api/Theme
        [HttpGet]
        public List<Theme> Get()
        {
            return _themeService.ALL();
        }
        [HttpGet("ALLREPONSE")]
        public IList<Reponse> ALLREPONSE()
        {
            return _themeService.ALLREPONSE();
        }
        [HttpGet("getReponses/{id}")]
        public IEnumerable<Reponse> getReponses(int id)
        {
            return _themeService.getReponses(id);
        }
        [HttpGet("getThemes")]
        public IEnumerable<Theme> getThemes()
        {
            return _themeService.getThemes();
        }

        [HttpGet("melanger/{themes}")]
        public void melanger(List<Theme> themes)
        {
            _themeService.melanger(themes);
        }

        [HttpGet("isvalid/{nombre}/{aleatoire}")]
        public bool isvalid(int nombre, List<int> aleatoire)
        {
            return _themeService.isvalid(nombre, aleatoire);
        }

        [HttpGet("getTheme/{id}")]
        public Theme getTheme(int id)
        {
            return _themeService.getTheme(id);
        }

        [HttpGet("getName/{u}")]
        public String getName(int u)
        {
            return _themeService.getName(u);
        }

        [HttpGet("getId/{n}")]
        public int getId(String n)
        {
            return _themeService.getId(n);
        }
        [HttpGet("getReponse/{i}")]
        public string getReponse(int i)
        {
            return _themeService.getReponse(i);

        }
        [HttpGet("getDone/{i}")]
        public bool getDone(int i)
        {
            return _themeService.getDone(i);
        }
        [HttpGet("getTaille")]
        public int getTaille()
        {
            return _themeService.getTaille();
        }


    }
}
