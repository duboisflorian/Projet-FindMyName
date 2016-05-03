using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class fmnContext : DbContext
    {
        public DbSet<Utilisateur> Users { get; set; }
        public DbSet<Theme> Themes { get; set; }
        public DbSet<Partie> parties { get; set; }
    }
}
