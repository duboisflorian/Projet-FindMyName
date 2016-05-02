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
                if (!context.Contacts.Any())
                {
                    context.Contacts.AddRange(new Contact()
                {
                    id = 1,
                    name = "Florian",
                    photo = "fichier/psg.jpg",
                    type = "ami"
                },
                    new Contact()
                    {
                        id = 2,
                        name = "Yani",
                        photo = "fichier/logo.jpg",
                        type = "ami"
                    },
                    new Contact()
                    {
                        id = 3,
                        name = "maxime",
                        photo = "fichier/logo.jpg",
                        type = "ami"
                    },
                    new Contact()
                    {
                        id = 4,
                        name = "lionel",
                        photo = "fichier/logo.jpg",
                        type = "ami"
                    },
                    new Contact()
                    {
                        id = 5,
                        name = "diegO",
                        photo = "fichier/logo.jpg",
                        type = "ami"
                    },
                    new Contact()
                    {
                        id = 8,
                        name = "Luffy",
                        photo = "fichier/logo.jpg",
                        type = "online"
                    });

                context.Utilisateurs.AddRange(
                    new Utilisateur()
                    {
                        id=2,
                        name="Florian",
                        photo= "fichier/logo.jpg",
                        mail = "Florian@gmail.com",
                        password="123",
                        pays="France",
                        meilleurScore=25
                    },
            new Utilisateur(2, "Yani", "fichier/logo.jpg", "Yani@gmail.com", "1234", "France", 25),
            new Utilisateur(3, "Maxime", "fichier/logo.jpg", "Maxime@gmail.com", "1234", "France", 25),
            new Utilisateur(4, "Lionel", "fichier/logo.jpg", "Lionel@gmail.com", "1234", "France", 25),
            new Utilisateur(5, "Diego", "fichier/logo.jpg", "Diego@gmail.com", "1234", "France", 25),
            new Utilisateur(6, "Tingting", "fichier/ol.jpg", "Tingting@gmail.com", "1234", "Etats-Unis", 25),
            new Utilisateur(7, "Marco", "fichier/logo.jpg", "Marco@gmail.com", "1234", "France", 25),
            new Utilisateur(8, "Luffy", "fichier/logo.jpg", "Luffy@gmail.com", "1234", "France", 25),
            new Utilisateur(9, "Mingo", "fichier/logo.jpg", "Mingo@gmail.com", "1234", "France", 25),
            new Utilisateur(10, "Zoro", "fichier/logo.jpg", "Zoro@gmail.com", "1234", "France", 25),
            new Utilisateur(11, "Papuce", "fichier/logo.jpg", "Papuce@gmail.com", "1234", "France", 25),
            new Utilisateur(12, "Chandler", "fichier/logo.jpg", "ante.Vivamus.non@arcu.co.uk", "1234", "France", 25),
            new Utilisateur(13, "Lacy", "fichier/logo.jpg", "Nunc.ullamcorper@luctusCurabituregestas.com", "1234", "France", 25),
            new Utilisateur(14, "Quamar", "fichier/logo.jpg", "est.ac.facilisis@Nullasemper.net", "1234", "France", 25),
            new Utilisateur(15, "Sandra", "fichier/logo.jpg", "accumsan.laoreet@gravida.edu", "1234", "France", 25));

                    context.SaveChanges();
        }
        }
    }
}
