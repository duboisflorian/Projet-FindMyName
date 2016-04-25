using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Cors;

namespace FindMyName_Serveur.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Theme Get(int id)
        {
            return new Theme("PSG", "1", "./fichier/psg.jpg", false);
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

public class Theme
{
    public string text { get; set; }
    public string id { get; set; }
    public string photo { get; set; }
    public bool done { get; set; }

    public Theme(string t,string i,string p , bool d)
    {
        this.text =t;
        this.id =i;
        this.photo =p;
        this.done =d;
    }

}

public class ListeTheme
{
    public List<Theme> themes { get; set; }
}
