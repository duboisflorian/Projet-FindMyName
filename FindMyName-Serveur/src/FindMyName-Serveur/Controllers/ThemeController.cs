using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using FindMyName_Serveur.Services;
using FindMyName_Serveur.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace FindMyName_Serveur.Controllers
{
    [Route("api/[controller]")]
    public class ThemeController : Controller
    {
        // GET: api/Theme
        [HttpGet]
        public List<Theme> Get()
        {
            return ThemeService.ALL();
        }

        [HttpGet("getThemes")]
        public List<Theme> getThemes()
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
        public Theme getTheme(int id)
        {
            return ThemeService.getTheme(id);
        }

        [HttpGet("getName/{u}")]
        public String getName(int u)
        {
            return ThemeService.getName(u);
        }

        [HttpGet("getId/{n}")]
        public int getId(String n)
        {
            return ThemeService.getId(n);
        }
    }
}
