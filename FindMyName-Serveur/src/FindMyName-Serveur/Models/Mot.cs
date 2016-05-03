namespace FindMyName_Serveur.Models
{
    public class Mot
    {
        public int id { get; set; }
        public string text { get; set; }
        
        public Mot()
        {

        }

        public Mot(int id,string text)
        {
            this.id = id;
            this.text = text;
        }
    }
}