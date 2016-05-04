namespace FindMyName_Serveur.Models
{
    public class Mot
    {
        public int id { get; set; }
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