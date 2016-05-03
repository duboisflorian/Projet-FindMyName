using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FindMyName_Serveur.Models;

namespace FindMyName_Serveur.Services
{
    public class ReponsesService
    {
       /* public static int i;
        public static List<ListeReponses> REPONSES { get; set; } = new List<ListeReponses>
        {
            new ListeReponses(1, new List<Reponse>
            {
                new Reponse()
                {
                    rep = new List<String> {"Zlatan", "Ibrahimovic" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Lucas", "Moura" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Douchez", "Nicolas" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Sirigu", "Salvatore" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Trapp", "Kevin" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Aurier", "Serge" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Luiz", "David" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kimpembe", "Presnel" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Descamps", "Remy" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Kurzawa", "Layvin" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Marquinhos" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Maxwell" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Rimane", "Kévin" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Silva", "Thiago" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Van Der Wiel", "Gregory", "Wiel" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Matuidi", "Blaise", "Blaisou", "Charou" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Meïte", "Yakou" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Motta", "Thiago" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Nkunku", "Christophe" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Pastore", "Javier" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Rabiot", "Adrien" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Stambouli", "Benjamin" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Verratti", "Marco" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Augustin", "Jean-Kévi" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Cavani", "Edinson" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Di Maria", "Angel" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> { "Ongenda", "Hervin" }, done = false
                }

            }),
            new ListeReponses(2, new List<Reponse>
            {
                new Reponse()
                {
                    rep = new List<String> {"Lacazette" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Gonalons" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Lopes" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mocio" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bedimo" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Jallet" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Koné" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Morel" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Rafael" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Umtiti" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mapou" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Darder" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Del Castillo" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Fekir" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ferri" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Fofana" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ghezzal" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Grenier" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kalulu" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kemen" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Malbranque" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mvuemba" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Tolisso" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Tousart" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Valbuena" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Cornet" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Labidi" }, done = false
                }
            }),
            new ListeReponses(3, new List<Reponse>
            {
                new Reponse()
                {
                    rep = new List<String> {"Ronaldo" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Benzema" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Casilla" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Navas" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Yanez" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Arbeloa" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Carvajal" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Danilo" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Frenandez" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Lienhart" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Marcelo" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Pepe" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ramos" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Tejero" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Varane" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bale" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Casemiro" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Isco" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kovacic" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kroos" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Lazo" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Llorente" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Modric" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Odegaard" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"James" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Torro" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Vasquez" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Jesé" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mayoral" }, done = false
                }
            }),
            new ListeReponses(4, new List<Reponse>
            {
                new Reponse()
                {
                    rep = new List<String> {"Messi" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Neymar" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bravo" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Gumbau" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Masip" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ter-Stegen" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Adriano" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Alba" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Alves" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bartra" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Douglas" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mathieu" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Piqué" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Vermaelen" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Busquets" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Camara" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Cantalapiedra" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Iniesta" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kaptoum" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mascherano" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Rafinha" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Rakitic" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Roberto" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Samper" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Turan" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"El Haddadi" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ramirez" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Suarez" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Vidal" }, done = false
                }
            }),
            new ListeReponses(5, new List<Reponse>
            {
                new Reponse()
                {
                    rep = new List<String> {"Ozil" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Alexis" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Cech" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Macey" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ospina" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bellerin" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Chambers" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Paulista" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Gibbs" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Koscielny" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mertesacker" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Monreal" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Arteta" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bielik" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Cazorla" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Coquelin" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Elneny" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Flamini" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kamara" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ramsey" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Reine-Adelaïde" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Rosicky" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Sheaf" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Willock" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Wilshere" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Zelalem" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bannacer" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Campbell" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Giroud" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Iwobi" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Oxlade-Chamberlain" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Walcott" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Welbeck" }, done = false
                }
            }),
            new ListeReponses(6, new List<Reponse>
            {
                new Reponse()
                {
                    rep = new List<String> {"Nasri" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Aguero" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Caballero" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Hart" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Wright" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Adarabioyo" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Angelino" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Clichy" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Demichelis" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Humphreys" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kolarov" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kompany" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Becerra" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mangala" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Otamendi" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Sagna" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Zabaleta" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bytyqi" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Celina" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"De Bruyne" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Delph" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Evans" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Fernandinho" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Fernando" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Garcia" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Serrano" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Glendon" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Horsfield" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Navas" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Silva" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Sterling" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Touré" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ambrose" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bony" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Faupala" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Iheanacho" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ünal" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Barker" }, done = false
                }
            }),
            new ListeReponses(7, new List<Reponse>
            {
                new Reponse()
                {
                    rep = new List<String> {"Bosh" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Deng" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Dragic" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Green" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Haslem" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Johnson" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"McRoberts" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Richardson" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Stoudemire" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Udrih" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Wade" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Whiteside" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Winslow" }, done = false
                }
            }),
            new ListeReponses(8, new List<Reponse>
            {
                new Reponse()
                {
                    rep = new List<String> {"Escales" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mandanda" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Pelé" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Dacosta" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"De Ceglie" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Dja Djedje" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Manquillo" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mendy" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Nkoulou" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Nlaté" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Rekik" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Rolando" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Sané" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Sparagna" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Zambo Anguissa" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Alessandrini" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Barrada" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Cabella" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Diaby" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Diarra" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Isla" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kraichi" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Lopez" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Nkoudou" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ocampos" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Romao" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Sarr" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Silva" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Batshuayi" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Fletcher" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Mouhammadou" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Omrani" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Porsan-Clemente" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Rabillard" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Thauvin" }, done = false
                },
            }),
            new ListeReponses(9, new List<Reponse>
            {
                new Reponse()
                {
                    rep = new List<String> {"Lucic" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Neuer" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ulreich" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Starke" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Alaba" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Badstuber" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Benatia" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Boateng" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Lahm" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Rafinha" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Steinhart" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Tasci" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Alcantara" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Alonso" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Benko" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Bernat" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Coman" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Costa" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Gaudino" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Götze" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Kimmich" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Martinez" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Müller" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Pantovic" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Ribéry" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Rode" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Scholl" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Vidal" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Green" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Lewandowski" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Robben" }, done = false
                },
                new Reponse()
                {
                    rep = new List<String> {"Weihrauch" }, done = false
                }
            })
        };
        public static String getReponse(int i)
        {
            return ReponsesService.REPONSES[0].reponses[i].rep[0];
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
        }*/
    }

}
