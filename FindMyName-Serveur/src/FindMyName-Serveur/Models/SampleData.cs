using Microsoft.Data.Entity;
using Microsoft.Framework.DependencyInjection;
using System;
using System.Linq;

namespace FindMyName_Serveur.Models
{
    public static class SampleData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetService<fmnContext>();
            if (!context.Utilisateurs.Any())
            {
                context.Utilisateurs.AddRange(
                    new Utilisateur("Florian", "fichier/psg.jpg", "Florian@gmail.com", "1234", "France", 25),
            new Utilisateur("Yani", "fichier/logo.jpg", "Yani@gmail.com", "1234", "France", 25),
            new Utilisateur("Maxime", "fichier/logo.jpg", "Maxime@gmail.com", "1234", "France", 25),
            new Utilisateur("Lionel", "fichier/logo.jpg", "Lionel@gmail.com", "1234", "France", 25),
            new Utilisateur("Diego", "fichier/logo.jpg", "Diego@gmail.com", "1234", "France", 25),
            new Utilisateur("Tingting", "fichier/ol.jpg", "Tingting@gmail.com", "1234", "Etats-Unis", 25),
            new Utilisateur("Marco", "fichier/logo.jpg", "Marco@gmail.com", "1234", "France", 25),
            new Utilisateur("Luffy", "fichier/logo.jpg", "Luffy@gmail.com", "1234", "France", 25),
            new Utilisateur("Mingo", "fichier/logo.jpg", "Mingo@gmail.com", "1234", "France", 25),
            new Utilisateur("Zoro", "fichier/logo.jpg", "Zoro@gmail.com", "1234", "France", 25),
            new Utilisateur("Papuce", "fichier/logo.jpg", "Papuce@gmail.com", "1234", "France", 25),
            new Utilisateur("Chandler", "fichier/logo.jpg", "ante.Vivamus.non@arcu.co.uk", "1234", "France", 25),
            new Utilisateur("Lacy", "fichier/logo.jpg", "Nunc.ullamcorper@luctusCurabituregestas.com", "1234", "France", 25),
            new Utilisateur("Quamar", "fichier/logo.jpg", "est.ac.facilisis@Nullasemper.net", "1234", "France", 25),
            new Utilisateur("Sandra", "fichier/logo.jpg", "accumsan.laoreet@gravida.edu", "1234", "France", 25)
                    );

                context.SaveChanges();
            }

            if (!context.Themes.Any())
            {
                context.Themes.AddRange(
               new Theme() { text = "PSG", photo = "./fichier/psg.jpg", done = false },
         new Theme() { text = "OL", photo = "./fichier/ol.jpg", done = false },
         new Theme() { text = "REAL", photo = "./fichier/real.jpg", done = false },
         new Theme() { text = "BARCA", photo = "./fichier/barca.jpg", done = false },
         new Theme() { text = "ARSENAL",  photo = "./fichier/arsenal.jpg", done = false },
         new Theme() { text = "CITY", photo = "./fichier/city.jpg", done = false },
         new Theme() { text = "HEAT",photo = "./fichier/heat.jpg", done = false },
         new Theme() { text = "OM", photo = "./fichier/om.jpg", done = false },
         new Theme() { text = "BAYERN", photo = "./fichier/bayern.jpg", done = false }
                    );

                context.SaveChanges();
            }
        }
    }
}
