using Microsoft.Data.Entity;
using Microsoft.Framework.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FindMyName_Serveur.Models
{
    public static class SampleData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetService<fmnContext>();

            var u1 = new Utilisateur("Florian", "fichier/psg.jpg", "Florian@gmail.com", "1234", "France", 25);
            var u2 = new Utilisateur("Yani", "fichier/logo.jpg", "Yani@gmail.com", "1234", "France", 25);
            var u3 = new Utilisateur("Maxime", "fichier/logo.jpg", "Maxime@gmail.com", "1234", "France", 25);
            var u4 = new Utilisateur("Lionel", "fichier/logo.jpg", "Lionel@gmail.com", "1234", "France", 25);
            var u5 = new Utilisateur("Diego","fichier / logo.jpg","Diego@gmail.com", "1234", "France", 25);
            var u6 = new Utilisateur("Tingting", "fichier/ol.jpg", "Tingting@gmail.com", "1234", "France", 25);
            var u7 = new Utilisateur("Marco", "fichier/logo.jpg", "Marco@gmail.com", "1234", "France", 25);
            var u8 = new Utilisateur("Luffy", "fichier/logo.jpg", "Luffy@gmail.com", "1234", "France", 25);
            var u9 = new Utilisateur("Mingo", "fichier/logo.jpg", "Mingo@gmail.com", "1234", "France", 25);
            var u10 = new Utilisateur("Zoro","fichier/logo.jpg","Zoro@gmail.com", "1234", "France", 25);
            var u11 = new Utilisateur("Papuce", "fichier/logo.jpg", "Papuce@gmail.com", "1234", "France", 25);
            var u12 = new Utilisateur("Chandler", "fichier/logo.jpg", "ante.Vivamus.non@arcu.co.uk", "1234", "France", 25);
            var u13 = new Utilisateur("Lacy", "fichier/logo.jpg", "ante.Vivamus.non@arcu.co.uk", "1234", "France", 25);
            var u14 = new Utilisateur("Quamar", "fichier/logo.jpg", "est.ac.facilisis@Nullasemper.net", "1234", "France", 25);
            var u15 = new Utilisateur("Sandra", "fichier/logo.jpg", "accumsan.laoreet@gravida.edu", "1234", "France", 25);

            u1.contact = new List<Contact> { new Contact(u6,6,"ami") };
            u2.contact = new List<Contact> { new Contact(u6,6,"ami") };
            u3.contact = new List<Contact> { new Contact(u6,6, "ami") };
            u4.contact = new List<Contact> { new Contact(u6,6, "ami") };
            u5.contact = new List<Contact> { new Contact(u6,6, "ami") };
            u8.contact = new List<Contact> { new Contact(u6,6, "online") };
            u6.contact = new List<Contact> { new Contact(u1,1, "ami"), new Contact(u2,2, "ami"), new Contact(u3,3, "ami"), new Contact(u4,4, "ami"), new Contact(u5,5, "ami"), new Contact(u8,8, "online") };

      
            var r1 = new Reponse(false,new List<Mot> { new Mot("Zlatan"), new Mot("Ibrahimovic") });

            var t1 = new Theme("PSG", "./fichier/psg.jpg", false,new List<Reponse> { r1 });


            var P1 = new Partie(u2,u6, 1, 2, 2, new List<Manche>{new Manche( t1,10,20)});

            if (!context.Users.Any())
            {
                context.Users.AddRange(
                    u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,u11,u12,u13,u14,u15
                    );
                context.parties.AddRange(
                    P1
                    );
                context.Themes.AddRange(
                    t1
                    );
                context.SaveChanges();
            }

          
        }
    }
}
