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

        public fmnContext()
        : base() { }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(@"Server = (localdb)\MSSQLLocalDB; Database = fmndb; Trusted_Connection = True; User=DESKTOP-VCQ4UME\yanio; Password= ; MultipleActiveResultSets=true;");
        }
    }
}
