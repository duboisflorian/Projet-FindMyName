namespace FindMyName_Serveur.Models
{
    public class Mot : BaseObject
    {
        public string text { get; set; }
        
        public Mot()
        {

        }

        public Mot(string text)
        {
            this.text = text;
        }
    }
}