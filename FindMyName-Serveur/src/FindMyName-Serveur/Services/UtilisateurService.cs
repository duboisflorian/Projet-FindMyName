using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public class UtilisateurService
    {
        public List<Utilisateur> UTILISATEURS { get; set; }
    }
    public class Utilisateur
    {
        public int id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
        public string mail { get; set; }
        public string password { get; set; }
        public string pays { get; set; }
        public int meilleurScore { get; set; }
    }
}
