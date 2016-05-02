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

                context.SaveChanges();
            }
        }
    }
}
