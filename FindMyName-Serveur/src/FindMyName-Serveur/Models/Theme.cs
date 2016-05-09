using System.Collections.Generic;

namespace FindMyName_Serveur.Models
{
    public class Theme : BaseObject
    {
        public string text { get; set; }
        public string photo { get; set; }
        public bool done { get; set; }
        public virtual IList<Reponse> reponses { get; private set; }

        public Theme() {
        }

        public Theme(string text,string photo,bool done, IEnumerable<Reponse> rep)
        {
            this.text = text;
            this.photo = photo;
            this.done = done;
            this.reponses = new List<Reponse>(rep);
        }
    }
}
