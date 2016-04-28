using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class Theme
    {
        public string text { get; set; }
        public int id { get; set; }
        public string photo { get; set; }
        public bool done { get; set; }

        public Theme() {
        }

        public Theme(string text,int id,string photo,bool done)
        {
            this.text = text;
            this.id = id;
            this.photo = photo;
            this.done = done;
        }
    }
}
