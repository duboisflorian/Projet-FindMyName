using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FindMyName_Serveur.Services
{
    public static class ReponsesService
    {
        public static int i;
        public static List<ListeReponses> REPONSES { get; set; } = new List<ListeReponses>
        {
            new ListeReponses(1, new List<Reponse>
            {
                new Reponse()
                {
                    text = "Zlatan", done = false
                },
                new Reponse()
                {
                    text = "Lucas", done = false
                },
                new Reponse()
                {
                    text = "Douchez", done = false
                },
                new Reponse()
                {
                    text = "Sirigu", done = false
                },
                new Reponse()
                {
                    text = "Trapp", done = false
                },
                new Reponse()
                {
                    text = "Aurier", done = false
                },
                new Reponse()
                {
                    text = "Luiz", done = false
                },
                new Reponse()
                {
                    text = "Kimpembe", done = false
                },
                new Reponse()
                {
                    text = "Descamps", done = false
                },
                new Reponse()
                {
                    text = "Kurzawa", done = false
                },
                new Reponse()
                {
                    text = "Marquinhos", done = false
                },
                new Reponse()
                {
                    text = "Maxwell", done = false
                },
                new Reponse()
                {
                    text = "Rimane", done = false
                },
                new Reponse()
                {
                    text = "Silva", done = false
                },
                new Reponse()
                {
                    text = "Van Der Wiel", done = false
                },
                new Reponse()
                {
                    text = "Matuidi", done = false
                },
                new Reponse()
                {
                    text = "Meïte", done = false
                },
                new Reponse()
                {
                    text = "Motta", done = false
                },
                new Reponse()
                {
                    text = "Nkunku", done = false
                },
                new Reponse()
                {
                    text = "Pastore", done = false
                },
                new Reponse()
                {
                    text = "Rabiot", done = false
                },
                new Reponse()
                {
                    text = "Stambouli", done = false
                },
                new Reponse()
                {
                    text = "Verratti", done = false
                },
                new Reponse()
                {
                    text = "Augustin", done = false
                },
                new Reponse()
                {
                    text = "Cavani", done = false
                },
                new Reponse()
                {
                    text = "Di Maria", done = false
                },
                new Reponse()
                {
                    text = "Ongenda", done = false
                }

            }),
            new ListeReponses(2, new List<Reponse>
            {
                new Reponse()
                {
                    text = "Lacazette", done = false
                },
                new Reponse()
                {
                    text = "Gonalons", done = false
                },
                new Reponse()
                {
                    text = "Lopes", done = false
                },
                new Reponse()
                {
                    text = "Mocio", done = false
                },
                new Reponse()
                {
                    text = "Bedimo", done = false
                },
                new Reponse()
                {
                    text = "Jallet", done = false
                },
                new Reponse()
                {
                    text = "Koné", done = false
                },
                new Reponse()
                {
                    text = "Morel", done = false
                },
                new Reponse()
                {
                    text = "Rafael", done = false
                },
                new Reponse()
                {
                    text = "Umtiti", done = false
                },
                new Reponse()
                {
                    text = "Mapou", done = false
                },
                new Reponse()
                {
                    text = "Darder", done = false
                },
                new Reponse()
                {
                    text = "Del Castillo", done = false
                },
                new Reponse()
                {
                    text = "Fekir", done = false
                },
                new Reponse()
                {
                    text = "Ferri", done = false
                },
                new Reponse()
                {
                    text = "Fofana", done = false
                },
                new Reponse()
                {
                    text = "Ghezzal", done = false
                },
                new Reponse()
                {
                    text = "Grenier", done = false
                },
                new Reponse()
                {
                    text = "Kalulu", done = false
                },
                new Reponse()
                {
                    text = "Kemen", done = false
                },
                new Reponse()
                {
                    text = "Malbranque", done = false
                },
                new Reponse()
                {
                    text = "Mvuemba", done = false
                },
                new Reponse()
                {
                    text = "Tolisso", done = false
                },
                new Reponse()
                {
                    text = "Tousart", done = false
                },
                new Reponse()
                {
                    text = "Valbuena", done = false
                },
                new Reponse()
                {
                    text = "Cornet", done = false
                },
                new Reponse()
                {
                    text = "Labidi", done = false
                }
            }),
            new ListeReponses(3, new List<Reponse>
            {
                new Reponse()
                {
                    text = "Ronaldo", done = false
                },
                new Reponse()
                {
                    text = "Benzema", done = false
                },
                new Reponse()
                {
                    text = "Casilla", done = false
                },
                new Reponse()
                {
                    text = "Navas", done = false
                },
                new Reponse()
                {
                    text = "Yanez", done = false
                },
                new Reponse()
                {
                    text = "Arbeloa", done = false
                },
                new Reponse()
                {
                    text = "Carvajal", done = false
                },
                new Reponse()
                {
                    text = "Danilo", done = false
                },
                new Reponse()
                {
                    text = "Frenandez", done = false
                },
                new Reponse()
                {
                    text = "Lienhart", done = false
                },
                new Reponse()
                {
                    text = "Marcelo", done = false
                },
                new Reponse()
                {
                    text = "Pepe", done = false
                },
                new Reponse()
                {
                    text = "Ramos", done = false
                },
                new Reponse()
                {
                    text = "Tejero", done = false
                },
                new Reponse()
                {
                    text = "Varane", done = false
                },
                new Reponse()
                {
                    text = "Bale", done = false
                },
                new Reponse()
                {
                    text = "Casemiro", done = false
                },
                new Reponse()
                {
                    text = "Isco", done = false
                },
                new Reponse()
                {
                    text = "Kovacic", done = false
                },
                new Reponse()
                {
                    text = "Kroos", done = false
                },
                new Reponse()
                {
                    text = "Lazo", done = false
                },
                new Reponse()
                {
                    text = "Llorente", done = false
                },
                new Reponse()
                {
                    text = "Modric", done = false
                },
                new Reponse()
                {
                    text = "Odegaard", done = false
                },
                new Reponse()
                {
                    text = "James", done = false
                },
                new Reponse()
                {
                    text = "Torro", done = false
                },
                new Reponse()
                {
                    text = "Vasquez", done = false
                },
                new Reponse()
                {
                    text = "Jesé", done = false
                },
                new Reponse()
                {
                    text = "Mayoral", done = false
                }
            }),
            new ListeReponses(4, new List<Reponse>
            {
                new Reponse()
                {
                    text = "Messi", done = false
                },
                new Reponse()
                {
                    text = "Neymar", done = false
                },
                new Reponse()
                {
                    text = "Bravo", done = false
                },
                new Reponse()
                {
                    text = "Gumbau", done = false
                },
                new Reponse()
                {
                    text = "Masip", done = false
                },
                new Reponse()
                {
                    text = "Ter-Stegen", done = false
                },
                new Reponse()
                {
                    text = "Adriano", done = false
                },
                new Reponse()
                {
                    text = "Alba", done = false
                },
                new Reponse()
                {
                    text = "Alves", done = false
                },
                new Reponse()
                {
                    text = "Bartra", done = false
                },
                new Reponse()
                {
                    text = "Douglas", done = false
                },
                new Reponse()
                {
                    text = "Mathieu", done = false
                },
                new Reponse()
                {
                    text = "Piqué", done = false
                },
                new Reponse()
                {
                    text = "Vermaelen", done = false
                },
                new Reponse()
                {
                    text = "Busquets", done = false
                },
                new Reponse()
                {
                    text = "Camara", done = false
                },
                new Reponse()
                {
                    text = "Cantalapiedra", done = false
                },
                new Reponse()
                {
                    text = "Iniesta", done = false
                },
                new Reponse()
                {
                    text = "Kaptoum", done = false
                },
                new Reponse()
                {
                    text = "Mascherano", done = false
                },
                new Reponse()
                {
                    text = "Rafinha", done = false
                },
                new Reponse()
                {
                    text = "Rakitic", done = false
                },
                new Reponse()
                {
                    text = "Roberto", done = false
                },
                new Reponse()
                {
                    text = "Samper", done = false
                },
                new Reponse()
                {
                    text = "Turan", done = false
                },
                new Reponse()
                {
                    text = "El Haddadi", done = false
                },
                new Reponse()
                {
                    text = "Ramirez", done = false
                },
                new Reponse()
                {
                    text = "Suarez", done = false
                },
                new Reponse()
                {
                    text = "Vidal", done = false
                }
            }),
            new ListeReponses(5, new List<Reponse>
            {
                                new Reponse()
                {
                    text = "Ozil", done = false
                },
                new Reponse()
                {
                    text = "Alexis", done = false
                },
                new Reponse()
                {
                    text = "Cech", done = false
                },
                new Reponse()
                {
                    text = "Macey", done = false
                },
                new Reponse()
                {
                    text = "Ospina", done = false
                },
                new Reponse()
                {
                    text = "Bellerin", done = false
                },
                new Reponse()
                {
                    text = "Chambers", done = false
                },
                new Reponse()
                {
                    text = "Paulista", done = false
                },
                new Reponse()
                {
                    text = "Gibbs", done = false
                },
                new Reponse()
                {
                    text = "Koscielny", done = false
                },
                new Reponse()
                {
                    text = "Mertesacker", done = false
                },
                new Reponse()
                {
                    text = "Monreal", done = false
                },
                new Reponse()
                {
                    text = "Arteta", done = false
                },
                new Reponse()
                {
                    text = "Bielik", done = false
                },
                new Reponse()
                {
                    text = "Cazorla", done = false
                },
                new Reponse()
                {
                    text = "Coquelin", done = false
                },
                new Reponse()
                {
                    text = "Elneny", done = false
                },
                new Reponse()
                {
                    text = "Flamini", done = false
                },
                new Reponse()
                {
                    text = "Kamara", done = false
                },
                new Reponse()
                {
                    text = "Ramsey", done = false
                },
                new Reponse()
                {
                    text = "Reine-Adelaïde", done = false
                },
                new Reponse()
                {
                    text = "Rosicky", done = false
                },
                new Reponse()
                {
                    text = "Sheaf", done = false
                },
                new Reponse()
                {
                    text = "Willock", done = false
                },
                new Reponse()
                {
                    text = "Wilshere", done = false
                },
                new Reponse()
                {
                    text = "Zelalem", done = false
                },
                new Reponse()
                {
                    text = "Bennacer", done = false
                },
                new Reponse()
                {
                    text = "Campbell", done = false
                },
                new Reponse()
                {
                    text = "Giroud", done = false
                },
                new Reponse()
                {
                    text = "Iwobi", done = false
                },
                new Reponse()
                {
                    text = "Oxlade-Chamberlain", done = false
                },
                new Reponse()
                {
                    text = "Walcott", done = false
                },
                new Reponse()
                {
                    text = "Welbeck", done = false
                }
            }),
            new ListeReponses(6, new List<Reponse>
            {
                                new Reponse()
                {
                    text = "Nasri", done = false
                },
                new Reponse()
                {
                    text = "Aguero", done = false
                },
                new Reponse()
                {
                    text = "Caballero", done = false
                },
                new Reponse()
                {
                    text = "Hart", done = false
                },
                new Reponse()
                {
                    text = "Wright", done = false
                },
                new Reponse()
                {
                    text = "Adarabioyo", done = false
                },
                new Reponse()
                {
                    text = "Angelino", done = false
                },
                new Reponse()
                {
                    text = "Clichy", done = false
                },
                new Reponse()
                {
                    text = "Demichelis", done = false
                },
                new Reponse()
                {
                    text = "Humphreys", done = false
                },
                new Reponse()
                {
                    text = "Kolarov", done = false
                },
                new Reponse()
                {
                    text = "Kompany", done = false
                },
                new Reponse()
                {
                    text = "Becerra", done = false
                },
                new Reponse()
                {
                    text = "Mangala", done = false
                },
                new Reponse()
                {
                    text = "Otamendi", done = false
                },
                new Reponse()
                {
                    text = "Sagna", done = false
                },
                new Reponse()
                {
                    text = "Zabaleta", done = false
                },
                new Reponse()
                {
                    text = "Bytyqi", done = false
                },
                new Reponse()
                {
                    text = "Celina", done = false
                },
                new Reponse()
                {
                    text = "De Bruyne", done = false
                },
                new Reponse()
                {
                    text = "Delph", done = false
                },
                new Reponse()
                {
                    text = "Evans", done = false
                },
                new Reponse()
                {
                    text = "Fernandinho", done = false
                },
                new Reponse()
                {
                    text = "Fernando", done = false
                },
                new Reponse()
                {
                    text = "Garcia", done = false
                },
                new Reponse()
                {
                    text = "Serrano", done = false
                },
                new Reponse()
                {
                    text = "Glendon", done = false
                },
                new Reponse()
                {
                    text = "Horsfield", done = false
                },
                new Reponse()
                {
                    text = "Navas", done = false
                },
                new Reponse()
                {
                    text = "Silva", done = false
                },
                new Reponse()
                {
                    text = "Sterling", done = false
                },
                new Reponse()
                {
                    text = "Touré", done = false
                },
                new Reponse()
                {
                    text = "Ambrose", done = false
                },
                new Reponse()
                {
                    text = "Bony", done = false
                },
                new Reponse()
                {
                    text = "Faupala", done = false
                },
                new Reponse()
                {
                    text = "Iheanacho", done = false
                },
                new Reponse()
                {
                    text = "Ünal", done = false
                },
                new Reponse()
                {
                    text = "Barker", done = false
                }
            }),
            new ListeReponses(7, new List<Reponse>
            {
                                new Reponse()
                {
                    text = "Bosh", done = false
                },
                new Reponse()
                {
                    text = "Deng", done = false
                },
                new Reponse()
                {
                    text = "Dragic", done = false
                },
                new Reponse()
                {
                    text = "Green", done = false
                },
                new Reponse()
                {
                    text = "Haslem", done = false
                },
                new Reponse()
                {
                    text = "Johnson", done = false
                },
                new Reponse()
                {
                    text = "McRoberts", done = false
                },
                new Reponse()
                {
                    text = "Richardson", done = false
                },
                new Reponse()
                {
                    text = "Stoudemire", done = false
                },
                new Reponse()
                {
                    text = "Udrih", done = false
                },
                new Reponse()
                {
                    text = "Wade", done = false
                },
                new Reponse()
                {
                    text = "Whiteside", done = false
                },
                new Reponse()
                {
                    text = "Winslow", done = false
                }
            }),
            new ListeReponses(8, new List<Reponse>
            {
                                new Reponse()
                {
                    text = "Escales", done = false
                },
                new Reponse()
                {
                    text = "Mandanda", done = false
                },
                new Reponse()
                {
                    text = "Pelé", done = false
                },
                new Reponse()
                {
                    text = "Dacosta", done = false
                },
                new Reponse()
                {
                    text = "De Ceglie", done = false
                },
                new Reponse()
                {
                    text = "Dja Djedje", done = false
                },
                new Reponse()
                {
                    text = "Manquillo", done = false
                },
                new Reponse()
                {
                    text = "Mendy", done = false
                },
                new Reponse()
                {
                    text = "Nkoulou", done = false
                },
                new Reponse()
                {
                    text = "Nlaté", done = false
                },
                new Reponse()
                {
                    text = "Rekik", done = false
                },
                new Reponse()
                {
                    text = "Rolando", done = false
                },
                new Reponse()
                {
                    text = "Sané", done = false
                },
                new Reponse()
                {
                    text = "Sparagna", done = false
                },
                new Reponse()
                {
                    text = "Zambo Anguissa", done = false
                },
                new Reponse()
                {
                    text = "Alessandrini", done = false
                },
                new Reponse()
                {
                    text = "Barrada", done = false
                },
                new Reponse()
                {
                    text = "Cabella", done = false
                },
                new Reponse()
                {
                    text = "Diaby", done = false
                },
                new Reponse()
                {
                    text = "Diarra", done = false
                },
                new Reponse()
                {
                    text = "Isla", done = false
                },
                new Reponse()
                {
                    text = "Kraichi", done = false
                },
                new Reponse()
                {
                    text = "Lopez", done = false
                },
                new Reponse()
                {
                    text = "Nkoudou", done = false
                },
                new Reponse()
                {
                    text = "Ocampos", done = false
                },
                new Reponse()
                {
                    text = "Romao", done = false
                },
                new Reponse()
                {
                    text = "Sarr", done = false
                },
                new Reponse()
                {
                    text = "Silva", done = false
                },
                new Reponse()
                {
                    text = "Batshuayi", done = false
                },
                new Reponse()
                {
                    text = "Fletcher", done = false
                },
                new Reponse()
                {
                    text = "Mouhammadou", done = false
                },
                new Reponse()
                {
                    text = "Omrani", done = false
                },
                new Reponse()
                {
                    text = "Porsan-Clemente", done = false
                },
                new Reponse()
                {
                    text = "Rabillard", done = false
                },
                new Reponse()
                {
                    text = "Thauvin", done = false
                },
            }),
            new ListeReponses(9, new List<Reponse>
            {
                new Reponse()
                {
                    text = "Lucic", done = false
                },
                new Reponse()
                {
                    text = "Neuer", done = false
                },
                new Reponse()
                {
                    text = "Ulreich", done = false
                },
                new Reponse()
                {
                    text = "Starke", done = false
                },
                new Reponse()
                {
                    text = "Alaba", done = false
                },
                new Reponse()
                {
                    text = "Badstuber", done = false
                },
                new Reponse()
                {
                    text = "Benatia", done = false
                },
                new Reponse()
                {
                    text = "Boateng", done = false
                },
                new Reponse()
                {
                    text = "Lahm", done = false
                },
                new Reponse()
                {
                    text = "Rafinha", done = false
                },
                new Reponse()
                {
                    text = "Steinhart", done = false
                },
                new Reponse()
                {
                    text = "Tasci", done = false
                },
                new Reponse()
                {
                    text = "Alcantara", done = false
                },
                new Reponse()
                {
                    text = "Alonso", done = false
                },
                new Reponse()
                {
                    text = "Benko", done = false
                },
                new Reponse()
                {
                    text = "Bernat", done = false
                },
                new Reponse()
                {
                    text = "Coman", done = false
                },
                new Reponse()
                {
                    text = "Costa", done = false
                },
                new Reponse()
                {
                    text = "Gaudino", done = false
                },
                new Reponse()
                {
                    text = "Götze", done = false
                },
                new Reponse()
                {
                    text = "Kimmich", done = false
                },
                new Reponse()
                {
                    text = "Martinez", done = false
                },
                new Reponse()
                {
                    text = "Müller", done = false
                },
                new Reponse()
                {
                    text = "Pantovic", done = false
                },
                new Reponse()
                {
                    text = "Ribéry", done = false
                },
                new Reponse()
                {
                    text = "Rode", done = false
                },
                new Reponse()
                {
                    text = "Scholl", done = false
                },
                new Reponse()
                {
                    text = "Vidal", done = false
                },
                new Reponse()
                {
                    text = "Green", done = false
                },
                new Reponse()
                {
                    text = "Lewandowski", done = false
                },
                new Reponse()
                {
                    text = "Robben", done = false
                },
                new Reponse()
                {
                    text = "Weihrauch", done = false
                }
            })
        };
        public static String getReponse(int i)
        {
            return ReponsesService.REPONSES[0].reponses[i].text;
        }

        public static bool getDone(int i)
        {
            return ReponsesService.REPONSES[0].reponses[i].done;
        }

        public static List<ListeReponses> ALL() { return REPONSES; }

        public static ListeReponses getReponses(int id)
        {
            for (ReponsesService.i = 0; ReponsesService.i < ReponsesService.REPONSES.Count; ReponsesService.i++)
            {
                if (ReponsesService.REPONSES[ReponsesService.i].id == id)
                    return ReponsesService.REPONSES[ReponsesService.i];
            }
            return ReponsesService.REPONSES[0];
        }
        public static int getTaille(int i)
        {
            return ReponsesService.REPONSES[i].reponses.Count;
        }
    }

    public class Reponse
    {
        public string text { get; set; }
        public bool done { get; set; }
    }

    public class ListeReponses
    {
        public int id { get; set; }
        public List<Reponse> reponses { get; set; }
        public ListeReponses(int v, List<Reponse> list)
        {
            this.id = v;
            this.reponses = list;
        }


    }

}
