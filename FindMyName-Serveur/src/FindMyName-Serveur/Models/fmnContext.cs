using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Models
{
    public class fmnContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Utilisateur> Utilisateurs { get; set; }
    }
}
