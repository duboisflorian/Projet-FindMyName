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
            var u5 = new Utilisateur("Diego", "fichier / logo.jpg", "Diego@gmail.com", "1234", "France", 25);
            var u6 = new Utilisateur("Tingting", "fichier/ol.jpg", "Tingting@gmail.com", "1234", "France", 25);
            var u7 = new Utilisateur("Marco", "fichier/logo.jpg", "Marco@gmail.com", "1234", "France", 25);
            var u8 = new Utilisateur("Luffy", "fichier/logo.jpg", "Luffy@gmail.com", "1234", "France", 25);
            var u9 = new Utilisateur("Mingo", "fichier/logo.jpg", "Mingo@gmail.com", "1234", "France", 25);
            var u10 = new Utilisateur("Zoro", "fichier/logo.jpg", "Zoro@gmail.com", "1234", "France", 25);
            var u11 = new Utilisateur("Papuce", "fichier/logo.jpg", "Papuce@gmail.com", "1234", "France", 25);
            var u12 = new Utilisateur("Chandler", "fichier/logo.jpg", "ante.Vivamus.non@arcu.co.uk", "1234", "France", 25);
            var u13 = new Utilisateur("Lacy", "fichier/logo.jpg", "ante.Vivamus.non@arcu.co.uk", "1234", "France", 25);
            var u14 = new Utilisateur("Quamar", "fichier/logo.jpg", "est.ac.facilisis@Nullasemper.net", "1234", "France", 25);
            var u15 = new Utilisateur("Sandra", "fichier/logo.jpg", "accumsan.laoreet@gravida.edu", "1234", "France", 25);

            u1.contacts = new List<Contact> { new Contact(u6, 6, "ami") };
            u2.contacts = new List<Contact> { new Contact(u6, 6, "ami") };
            u3.contacts = new List<Contact> { new Contact(u6, 6, "ami") };
            u4.contacts = new List<Contact> { new Contact(u6, 6, "ami") };
            u5.contacts = new List<Contact> { new Contact(u6, 6, "ami") };
            u8.contacts = new List<Contact> { new Contact(u6, 6, "online") };
            u6.contacts = new List<Contact> { new Contact(u1, 1, "ami"), new Contact(u2, 2, "ami"), new Contact(u3, 3, "ami"), new Contact(u4, 4, "ami"), new Contact(u5, 5, "ami"), new Contact(u8, 8, "online") };


            var r1 = new Reponse(false, new List<Mot> { new Mot("Zlatan"), new Mot("Ibrahimovic") });
            var r2 = new Reponse(false, new List<Mot> { new Mot("Zlatan"), new Mot("Ibrahimovic") });
            var r3 = new Reponse(false, new List<Mot> { new Mot("Lucas"), new Mot("Moura") });
            var r4 = new Reponse(false, new List<Mot> { new Mot("Douchez"), new Mot("Nicolas") });
            var r5 = new Reponse(false, new List<Mot> { new Mot("Sirigu"), new Mot("Salvatore") });
            var r6 = new Reponse(false, new List<Mot> { new Mot("Trapp"), new Mot("Kevin") });
            var r7 = new Reponse(false, new List<Mot> { new Mot("Aurier"), new Mot("Serge") });
            var r8 = new Reponse(false, new List<Mot> { new Mot("Luiz"), new Mot("David") });
            var r9 = new Reponse(false, new List<Mot> { new Mot("Kimpembe"), new Mot("Presnel") });
            var r10 = new Reponse(false, new List<Mot> { new Mot("Descamps"), new Mot("Remy") });
            var r11 = new Reponse(false, new List<Mot> { new Mot("Kurzawa"), new Mot("Layvin") });
            var r12 = new Reponse(false, new List<Mot> { new Mot("Marquinhos") });
            var r13 = new Reponse(false, new List<Mot> { new Mot("Maxwell") });
            var r14 = new Reponse(false, new List<Mot> { new Mot("Rimane"), new Mot("Kévin") });
            var r15 = new Reponse(false, new List<Mot> { new Mot("Silva"), new Mot("Thiago") });
            var r16 = new Reponse(false, new List<Mot> { new Mot("Van Der Wiel"), new Mot("Gregory"), new Mot("Wiel") });
            var r17 = new Reponse(false, new List<Mot> { new Mot("Matuidi"), new Mot("Blaise"), new Mot("Blaisou"), new Mot("Charou") });
            var r18 = new Reponse(false, new List<Mot> { new Mot("Meïte"), new Mot("Yakou") });
            var r19 = new Reponse(false, new List<Mot> { new Mot("Motta"), new Mot("Thiago") });
            var r20 = new Reponse(false, new List<Mot> { new Mot("Nkunku"), new Mot("Christophe") });
            var r21 = new Reponse(false, new List<Mot> { new Mot("Pastore"), new Mot("Javier") });
            var r22 = new Reponse(false, new List<Mot> { new Mot("Rabiot"), new Mot("Adrien") });
            var r23 = new Reponse(false, new List<Mot> { new Mot("Stambouli"), new Mot("Benjamin") });
            var r24 = new Reponse(false, new List<Mot> { new Mot("Verratti"), new Mot("Marco") });
            var r25 = new Reponse(false, new List<Mot> { new Mot("Augustin"), new Mot("Jean-Kévi") });
            var r26 = new Reponse(false, new List<Mot> { new Mot("Cavani"), new Mot("Edinson") });
            var r27 = new Reponse(false, new List<Mot> { new Mot("Di Maria"), new Mot("Angel") });
            var r28 = new Reponse(false, new List<Mot> { new Mot("Ongenda"), new Mot("Hervin") });

            var r29 = new Reponse(false, new List<Mot> { new Mot("Lacazette") });
            var r30 = new Reponse(false, new List<Mot> { new Mot("Gonalons") });
            var r31 = new Reponse(false, new List<Mot> { new Mot("Lopes") });
            var r32 = new Reponse(false, new List<Mot> { new Mot("Mocio") });
            var r33 = new Reponse(false, new List<Mot> { new Mot("Bedimo") });
            var r34 = new Reponse(false, new List<Mot> { new Mot("Jallet") });
            var r35 = new Reponse(false, new List<Mot> { new Mot("Koné") });
            var r36 = new Reponse(false, new List<Mot> { new Mot("Morel") });
            var r37 = new Reponse(false, new List<Mot> { new Mot("Rafael") });
            var r38 = new Reponse(false, new List<Mot> { new Mot("Umtiti") });
            var r39 = new Reponse(false, new List<Mot> { new Mot("Mapou") });
            var r40 = new Reponse(false, new List<Mot> { new Mot("Darder") });
            var r41 = new Reponse(false, new List<Mot> { new Mot("Del Castillo") });
            var r42 = new Reponse(false, new List<Mot> { new Mot("Fekir") });
            var r43 = new Reponse(false, new List<Mot> { new Mot("Ferri") });
            var r44 = new Reponse(false, new List<Mot> { new Mot("Fofana") });
            var r45 = new Reponse(false, new List<Mot> { new Mot("Ghezzal") });
            var r46 = new Reponse(false, new List<Mot> { new Mot("Grenier") });
            var r47 = new Reponse(false, new List<Mot> { new Mot("Kalulu") });
            var r48 = new Reponse(false, new List<Mot> { new Mot("Kemen") });
            var r49 = new Reponse(false, new List<Mot> { new Mot("Malbranque") });
            var r50 = new Reponse(false, new List<Mot> { new Mot("Mvuemba") });
            var r51 = new Reponse(false, new List<Mot> { new Mot("Tolisso") });
            var r52 = new Reponse(false, new List<Mot> { new Mot("Tousart") });
            var r53 = new Reponse(false, new List<Mot> { new Mot("Valbuena") });
            var r54 = new Reponse(false, new List<Mot> { new Mot("Cornet") });
            var r55 = new Reponse(false, new List<Mot> { new Mot("Labidi") });

            var r56 = new Reponse(false, new List<Mot> { new Mot("Ronaldo") });
            var r57 = new Reponse(false, new List<Mot> { new Mot("Benzema") });
            var r58 = new Reponse(false, new List<Mot> { new Mot("Casilla") });
            var r59 = new Reponse(false, new List<Mot> { new Mot("Navas") });
            var r60 = new Reponse(false, new List<Mot> { new Mot("Yanez") });
            var r61 = new Reponse(false, new List<Mot> { new Mot("Arbeloa") });
            var r62 = new Reponse(false, new List<Mot> { new Mot("Carvajal") });
            var r63 = new Reponse(false, new List<Mot> { new Mot("Danilo") });
            var r64 = new Reponse(false, new List<Mot> { new Mot("Lacazette") });
            var r65 = new Reponse(false, new List<Mot> { new Mot("Fernandez") });
            var r66 = new Reponse(false, new List<Mot> { new Mot("Lienhart") });
            var r67 = new Reponse(false, new List<Mot> { new Mot("Marcelo") });
            var r68 = new Reponse(false, new List<Mot> { new Mot("Pepe") });
            var r69 = new Reponse(false, new List<Mot> { new Mot("Ramos") });
            var r70 = new Reponse(false, new List<Mot> { new Mot("Tejero") });
            var r71 = new Reponse(false, new List<Mot> { new Mot("Varane") });
            var r72 = new Reponse(false, new List<Mot> { new Mot("Bale") });
            var r73 = new Reponse(false, new List<Mot> { new Mot("Casemiro") });
            var r74 = new Reponse(false, new List<Mot> { new Mot("Isco") });
            var r75 = new Reponse(false, new List<Mot> { new Mot("Kovacic") });
            var r76 = new Reponse(false, new List<Mot> { new Mot("Kroos") });
            var r77 = new Reponse(false, new List<Mot> { new Mot("Lazo") });
            var r78 = new Reponse(false, new List<Mot> { new Mot("Llorente") });
            var r79 = new Reponse(false, new List<Mot> { new Mot("Modric") });
            var r80 = new Reponse(false, new List<Mot> { new Mot("Odegaard") });
            var r81 = new Reponse(false, new List<Mot> { new Mot("James") });
            var r82 = new Reponse(false, new List<Mot> { new Mot("Torro") });
            var r83 = new Reponse(false, new List<Mot> { new Mot("Vasquez") });
            var r84 = new Reponse(false, new List<Mot> { new Mot("Jesé") });
            var r85 = new Reponse(false, new List<Mot> { new Mot("Mayoral") });

            var r86 = new Reponse(false, new List<Mot> { new Mot("Messi") });
            var r87 = new Reponse(false, new List<Mot> { new Mot("Neymar") });
            var r88 = new Reponse(false, new List<Mot> { new Mot("Bravo") });
            var r89 = new Reponse(false, new List<Mot> { new Mot("Gumbau") });
            var r90 = new Reponse(false, new List<Mot> { new Mot("Masip") });
            var r91 = new Reponse(false, new List<Mot> { new Mot("Ter-Stegen") });
            var r92 = new Reponse(false, new List<Mot> { new Mot("Adriano") });
            var r93 = new Reponse(false, new List<Mot> { new Mot("Alba") });
            var r94 = new Reponse(false, new List<Mot> { new Mot("Alves") });
            var r95 = new Reponse(false, new List<Mot> { new Mot("Bartra") });
            var r96 = new Reponse(false, new List<Mot> { new Mot("Douglas") });
            var r97 = new Reponse(false, new List<Mot> { new Mot("Mathieu") });
            var r98 = new Reponse(false, new List<Mot> { new Mot("Piqué") });
            var r99 = new Reponse(false, new List<Mot> { new Mot("Vermaelen") });
            var r100 = new Reponse(false, new List<Mot> { new Mot("Busquets") });
            var r101 = new Reponse(false, new List<Mot> { new Mot("Camara") });
            var r102 = new Reponse(false, new List<Mot> { new Mot("Cantalapiedra") });
            var r103 = new Reponse(false, new List<Mot> { new Mot("Iniesta") });
            var r104 = new Reponse(false, new List<Mot> { new Mot("Kaptoum") });
            var r105 = new Reponse(false, new List<Mot> { new Mot("Mascherano") });
            var r106 = new Reponse(false, new List<Mot> { new Mot("Rafinha") });
            var r107 = new Reponse(false, new List<Mot> { new Mot("Rakitic") });
            var r108 = new Reponse(false, new List<Mot> { new Mot("Roberto") });
            var r109 = new Reponse(false, new List<Mot> { new Mot("Samper") });
            var r110 = new Reponse(false, new List<Mot> { new Mot("Turan") });
            var r111 = new Reponse(false, new List<Mot> { new Mot("El Haddadi") });
            var r112 = new Reponse(false, new List<Mot> { new Mot("Ramirez") });
            var r113 = new Reponse(false, new List<Mot> { new Mot("Suarez") });
            var r114 = new Reponse(false, new List<Mot> { new Mot("Vidal") });

            var r115 = new Reponse(false, new List<Mot> { new Mot("Ozil") });
            var r116 = new Reponse(false, new List<Mot> { new Mot("Alexis") });
            var r117 = new Reponse(false, new List<Mot> { new Mot("Cech") });
            var r118 = new Reponse(false, new List<Mot> { new Mot("Macey") });
            var r119 = new Reponse(false, new List<Mot> { new Mot("Ospina") });
            var r120 = new Reponse(false, new List<Mot> { new Mot("Bellerin") });
            var r121 = new Reponse(false, new List<Mot> { new Mot("Chambers") });
            var r122 = new Reponse(false, new List<Mot> { new Mot("Paulista") });
            var r123 = new Reponse(false, new List<Mot> { new Mot("Gibbs") });
            var r124 = new Reponse(false, new List<Mot> { new Mot("Koscielny") });
            var r125 = new Reponse(false, new List<Mot> { new Mot("Mertesacker") });
            var r126 = new Reponse(false, new List<Mot> { new Mot("Monreal") });
            var r127 = new Reponse(false, new List<Mot> { new Mot("Arteta") });
            var r128 = new Reponse(false, new List<Mot> { new Mot("Bielik") });
            var r129 = new Reponse(false, new List<Mot> { new Mot("Cazorla") });
            var r130 = new Reponse(false, new List<Mot> { new Mot("Coquelin") });
            var r131 = new Reponse(false, new List<Mot> { new Mot("Elneny") });
            var r132 = new Reponse(false, new List<Mot> { new Mot("Flamini") });
            var r133 = new Reponse(false, new List<Mot> { new Mot("Kamara") });
            var r134 = new Reponse(false, new List<Mot> { new Mot("Ramsey") });
            var r135 = new Reponse(false, new List<Mot> { new Mot("Reine-Adelaïde") });
            var r136 = new Reponse(false, new List<Mot> { new Mot("Rosicky") });
            var r137 = new Reponse(false, new List<Mot> { new Mot("Sheaf") });
            var r138 = new Reponse(false, new List<Mot> { new Mot("Willock") });
            var r139 = new Reponse(false, new List<Mot> { new Mot("Wilshere") });
            var r140 = new Reponse(false, new List<Mot> { new Mot("Zelalem") });
            var r141 = new Reponse(false, new List<Mot> { new Mot("Bannacer") });
            var r142 = new Reponse(false, new List<Mot> { new Mot("Campbell") });
            var r143 = new Reponse(false, new List<Mot> { new Mot("Giroud") });
            var r144 = new Reponse(false, new List<Mot> { new Mot("Iwobi") });
            var r145 = new Reponse(false, new List<Mot> { new Mot("Oxlade-Chamberlain") });
            var r146 = new Reponse(false, new List<Mot> { new Mot("Walcott") });
            var r147 = new Reponse(false, new List<Mot> { new Mot("Welbeck") });

            var r148 = new Reponse(false, new List<Mot> { new Mot("Nasri") });
            var r149 = new Reponse(false, new List<Mot> { new Mot("Aguero") });
            var r150 = new Reponse(false, new List<Mot> { new Mot("Caballero") });
            var r151 = new Reponse(false, new List<Mot> { new Mot("Hart") });
            var r152 = new Reponse(false, new List<Mot> { new Mot("Wright") });
            var r153 = new Reponse(false, new List<Mot> { new Mot("Adarabioyo") });
            var r154 = new Reponse(false, new List<Mot> { new Mot("Angelino") });
            var r155 = new Reponse(false, new List<Mot> { new Mot("Clichy") });
            var r156 = new Reponse(false, new List<Mot> { new Mot("Demichelis") });
            var r157 = new Reponse(false, new List<Mot> { new Mot("Humphreys") });
            var r158 = new Reponse(false, new List<Mot> { new Mot("Kolarov") });
            var r159 = new Reponse(false, new List<Mot> { new Mot("Kompany") });
            var r160 = new Reponse(false, new List<Mot> { new Mot("Becerra") });
            var r161 = new Reponse(false, new List<Mot> { new Mot("Mangala") });
            var r162 = new Reponse(false, new List<Mot> { new Mot("Otamendi") });
            var r163 = new Reponse(false, new List<Mot> { new Mot("Sagna") });
            var r164 = new Reponse(false, new List<Mot> { new Mot("Zabaleta") });
            var r165 = new Reponse(false, new List<Mot> { new Mot("Bytyqi") });
            var r166 = new Reponse(false, new List<Mot> { new Mot("Celina") });
            var r167 = new Reponse(false, new List<Mot> { new Mot("De Bruyne") });
            var r168 = new Reponse(false, new List<Mot> { new Mot("Delph") });
            var r169 = new Reponse(false, new List<Mot> { new Mot("Evans") });
            var r170 = new Reponse(false, new List<Mot> { new Mot("Fernandinho") });
            var r171 = new Reponse(false, new List<Mot> { new Mot("Fernando") });
            var r172 = new Reponse(false, new List<Mot> { new Mot("Garcia") });
            var r173 = new Reponse(false, new List<Mot> { new Mot("Glendon") });
            var r174 = new Reponse(false, new List<Mot> { new Mot("Horsfield") });
            var r175 = new Reponse(false, new List<Mot> { new Mot("Navas") });
            var r176 = new Reponse(false, new List<Mot> { new Mot("Silva") });
            var r177 = new Reponse(false, new List<Mot> { new Mot("Sterling") });
            var r178 = new Reponse(false, new List<Mot> { new Mot("Touré") });
            var r179 = new Reponse(false, new List<Mot> { new Mot("Ambrose") });
            var r180 = new Reponse(false, new List<Mot> { new Mot("Bony") });
            var r181 = new Reponse(false, new List<Mot> { new Mot("Faupala") });
            var r182 = new Reponse(false, new List<Mot> { new Mot("Iheanacho") });
            var r183 = new Reponse(false, new List<Mot> { new Mot("Ünal") });
            var r184 = new Reponse(false, new List<Mot> { new Mot("Barker") });

            var r185 = new Reponse(false, new List<Mot> { new Mot("Bosh") });
            var r186 = new Reponse(false, new List<Mot> { new Mot("Deng") });
            var r187 = new Reponse(false, new List<Mot> { new Mot("Dragic") });
            var r188 = new Reponse(false, new List<Mot> { new Mot("Green") });
            var r189 = new Reponse(false, new List<Mot> { new Mot("Haslem") });
            var r190 = new Reponse(false, new List<Mot> { new Mot("Johnson") });
            var r191 = new Reponse(false, new List<Mot> { new Mot("McRoberts") });
            var r192 = new Reponse(false, new List<Mot> { new Mot("Richardson") });
            var r193 = new Reponse(false, new List<Mot> { new Mot("Stoudemire") });
            var r194 = new Reponse(false, new List<Mot> { new Mot("Udrih") });
            var r195 = new Reponse(false, new List<Mot> { new Mot("Wade") });
            var r196 = new Reponse(false, new List<Mot> { new Mot("Whiteside") });
            var r197 = new Reponse(false, new List<Mot> { new Mot("Winslow") });


            var r198 = new Reponse(false, new List<Mot> { new Mot("Escales") });
            var r199 = new Reponse(false, new List<Mot> { new Mot("Mandanda") });
            var r200 = new Reponse(false, new List<Mot> { new Mot("Pelé") });
            var r201 = new Reponse(false, new List<Mot> { new Mot("Dacosta") });
            var r202 = new Reponse(false, new List<Mot> { new Mot("De Ceglie") });
            var r203 = new Reponse(false, new List<Mot> { new Mot("Dja Djedje") });
            var r204 = new Reponse(false, new List<Mot> { new Mot("Manquillo") });
            var r205 = new Reponse(false, new List<Mot> { new Mot("Mendy") });
            var r206 = new Reponse(false, new List<Mot> { new Mot("Nkoulou") });
            var r207 = new Reponse(false, new List<Mot> { new Mot("Nlaté") });
            var r208 = new Reponse(false, new List<Mot> { new Mot("Rekik") });
            var r209 = new Reponse(false, new List<Mot> { new Mot("Rolando") });
            var r210 = new Reponse(false, new List<Mot> { new Mot("Sané") });
            var r211 = new Reponse(false, new List<Mot> { new Mot("Sparagna") });
            var r212 = new Reponse(false, new List<Mot> { new Mot("Zambo Anguissa") });
            var r213 = new Reponse(false, new List<Mot> { new Mot("Alessandrini") });
            var r214 = new Reponse(false, new List<Mot> { new Mot("Barrada") });
            var r215 = new Reponse(false, new List<Mot> { new Mot("Cabella") });
            var r216 = new Reponse(false, new List<Mot> { new Mot("Diaby") });
            var r217 = new Reponse(false, new List<Mot> { new Mot("Diarra") });
            var r218 = new Reponse(false, new List<Mot> { new Mot("Isla") });
            var r219 = new Reponse(false, new List<Mot> { new Mot("Kraichi") });
            var r220 = new Reponse(false, new List<Mot> { new Mot("Lopez") });
            var r221 = new Reponse(false, new List<Mot> { new Mot("Nkoudou") });
            var r222 = new Reponse(false, new List<Mot> { new Mot("Ocampos") });
            var r223 = new Reponse(false, new List<Mot> { new Mot("Romao") });
            var r224 = new Reponse(false, new List<Mot> { new Mot("Sarr") });
            var r225 = new Reponse(false, new List<Mot> { new Mot("Silva") });
            var r226 = new Reponse(false, new List<Mot> { new Mot("Batshuayi") });
            var r227 = new Reponse(false, new List<Mot> { new Mot("Fletcher") });
            var r228 = new Reponse(false, new List<Mot> { new Mot("Mouhammadou") });
            var r229 = new Reponse(false, new List<Mot> { new Mot("Omrani") });
            var r230 = new Reponse(false, new List<Mot> { new Mot("Porsan-Clemente") });
            var r231 = new Reponse(false, new List<Mot> { new Mot("Rabillard") });
            var r232 = new Reponse(false, new List<Mot> { new Mot("Thauvin") });

            var r233 = new Reponse(false, new List<Mot> { new Mot("Lucic") });
            var r234 = new Reponse(false, new List<Mot> { new Mot("Neuer") });
            var r235 = new Reponse(false, new List<Mot> { new Mot("Ulreich") });
            var r236 = new Reponse(false, new List<Mot> { new Mot("Starke") });
            var r237 = new Reponse(false, new List<Mot> { new Mot("Alaba") });
            var r238 = new Reponse(false, new List<Mot> { new Mot("Badstuber") });
            var r239 = new Reponse(false, new List<Mot> { new Mot("Benatia") });
            var r240 = new Reponse(false, new List<Mot> { new Mot("Boateng") });
            var r241 = new Reponse(false, new List<Mot> { new Mot("Lahm") });
            var r242 = new Reponse(false, new List<Mot> { new Mot("Rafinha") });
            var r243 = new Reponse(false, new List<Mot> { new Mot("Steinhart") });
            var r244 = new Reponse(false, new List<Mot> { new Mot("Tasci") });
            var r245 = new Reponse(false, new List<Mot> { new Mot("Alcantara") });
            var r246 = new Reponse(false, new List<Mot> { new Mot("Alonso") });
            var r247 = new Reponse(false, new List<Mot> { new Mot("Benko") });
            var r248 = new Reponse(false, new List<Mot> { new Mot("Bernat") });
            var r249 = new Reponse(false, new List<Mot> { new Mot("Coman") });
            var r250 = new Reponse(false, new List<Mot> { new Mot("Costa") });
            var r251 = new Reponse(false, new List<Mot> { new Mot("Gaudino") });
            var r252 = new Reponse(false, new List<Mot> { new Mot("Götze") });
            var r253 = new Reponse(false, new List<Mot> { new Mot("Kimmich") });
            var r254 = new Reponse(false, new List<Mot> { new Mot("Martinez") });
            var r255 = new Reponse(false, new List<Mot> { new Mot("Müller") });
            var r256 = new Reponse(false, new List<Mot> { new Mot("Pantovic") });
            var r257 = new Reponse(false, new List<Mot> { new Mot("Ribéry") });
            var r258 = new Reponse(false, new List<Mot> { new Mot("Rode") });
            var r259 = new Reponse(false, new List<Mot> { new Mot("Scholl") });
            var r260 = new Reponse(false, new List<Mot> { new Mot("Vidal") });
            var r261 = new Reponse(false, new List<Mot> { new Mot("Green") });
            var r262 = new Reponse(false, new List<Mot> { new Mot("Lewandowski") });
            var r263 = new Reponse(false, new List<Mot> { new Mot("Robben") });
            var r264 = new Reponse(false, new List<Mot> { new Mot("Weihrauch") });

            var t1 = new Theme("PSG", "./fichier/psg.jpg", false, new List<Reponse> { r1,r2, r3, r4, r5, r6, r7, r8, r9, r10, r11, r12, r13, r14, r15, r16, r17, r18, r19, r20, r21, r22, r23, r24, r25, r26, r27, r28 });
            var t2 = new Theme("OL", "./fichier/ol.jpg", false, new List<Reponse> { r29, r30, r31, r32, r33, r34, r35, r36, r37, r38, r39, r40, r41, r42, r43, r44, r45, r46, r47, r48, r49, r50, r51, r52, r53, r54, r55 });
            var t3 = new Theme("REAL", "./fichier/real.jpg", false, new List<Reponse> { r56, r57, r58, r59, r60, r61, r62, r63, r64, r65, r66, r67, r68, r69, r70, r71, r72, r73, r74, r75, r76, r77, r78, r79, r80, r81, r82, r83, r84, r85 });
            var t4 = new Theme("BARCA", "./fichier/barca.jpg", false, new List<Reponse> { r86, r87, r88, r89, r90, r91, r92, r93, r94, r95, r96, r97, r98, r99, r100, r101, r102, r103, r104, r105, r106, r107, r108, r109, r110, r111, r112, r113, r114 });
            var t5 = new Theme("ARSENAL", "./fichier/arsenal.jpg", false, new List<Reponse> { r115, r116, r117, r118, r119, r120, r121, r122, r123, r124, r125, r126, r127, r128, r129, r130, r131, r132, r133, r134, r135, r136, r137, r138, r139, r140, r141, r142, r143, r144, r145, r146, r147 });
            var t6 = new Theme("CITY", "./fichier/city.jpg", false, new List<Reponse> { r148, r149, r150, r151, r152, r153, r154, r155, r156, r157, r158, r159, r160, r161, r162, r163, r164, r165, r166, r167, r168, r169, r170, r171, r172, r173, r174, r175, r176, r177, r178, r179, r180, r181, r182, r183, r184 });
            var t7 = new Theme("HEAT", "./fichier/heat.jpg", false, new List<Reponse> { r185, r186, r187, r188, r189, r190, r191, r192, r193, r194, r195, r196, r197 });
            var t8 = new Theme("OM", "./fichier/om.jpg", false, new List<Reponse> { r198, r199, r200, r201, r202, r203, r204, r205, r206, r207, r208, r209, r210, r211, r212, r213, r214, r215, r216, r217, r218, r219, r220, r221, r222, r223, r224, r225, r226, r227, r228, r229, r230, r231, r232 });
            var t9 = new Theme("BAYERN", "./fichier/bayern.jpg", false, new List<Reponse> { r233, r234, r235, r236, r237, r238, r239, r240, r241, r242, r243, r244, r245, r246, r247, r248, r249, r250, r251, r252, r253, r254, r255, r256, r257, r258, r259, r260, r261, r262, r263, r264 });


            var P1 = new Partie(u2,u6, 1, 2, 2, new List<Manche>{new Manche( t1,10,20), new Manche(t2, 15, 7), new Manche(t1, 10, 15) });
            var P2 = new Partie(u6, u3, 1, 2, -1, new List<Manche> { new Manche(t1, 10, 20), new Manche(t2, 15, 7), new Manche(t3, 10, 15), new Manche(t4, 10, 15) });
            var P3 = new Partie(u6, u3, 3, 2, -1, new List<Manche> { new Manche(t1, 10, 20), new Manche(t2, 15, 7), new Manche(t3, 10, 15), new Manche(t4, 20, 15), new Manche(t5, 20, 15) });
            var P4 = new Partie(u6, u4, 1, 1, 6, new List<Manche> { new Manche(t1, 10, 20), new Manche(t2, 15, 7), new Manche(t3, -1, 10) });
            var P5 = new Partie(u6, u1, 1, 2, 1, new List<Manche> { new Manche(t1, 25, 20), new Manche(t2, 4, 7), new Manche(t3, 10, 11) });
            var P6 = new Partie(u6, u5, 1, 2, 6, new List<Manche> { new Manche(t1, 10, 20), new Manche(t2, 15, 7), new Manche(t3, 7, 10) });

            /*var t1 = new Theme("PSG", "./fichier/psg.jpg", false);
            var t2 = new Theme("OL", "./fichier/ol.jpg", false);
            var t3 = new Theme("REAL", "./fichier/real.jpg", false);
            var t4 = new Theme("BARCA", "./fichier/barca.jpg", false);
            var t5 = new Theme("ARSENAL", "./fichier/arsenal.jpg", false);
            var t6 = new Theme("CITY", "./fichier/city.jpg", false);
            var t7 = new Theme("HEAT", "./fichier/heat.jpg", false);
            var t8 = new Theme("OM", "./fichier/om.jpg", false);
            var t9 = new Theme("BAYERN", "./fichier/bayern.jpg", false);

            var P1 = new Partie(u2, u6, 1, 2, 2, new List<Manche> { new Manche(t1, 10, 20), new Manche(t2, 15, 7), new Manche(t1, 10, 15) });
            var P2 = new Partie(u6, u3, 1, 2, -1, new List<Manche> { new Manche(t1, 10, 20), new Manche(t2, 15, 7), new Manche(t3, 10, 15), new Manche(t4, 10, 15) });
            var P3 = new Partie(u6, u3, 3, 2, -1, new List<Manche> { new Manche(t1, 10, 20), new Manche(t2, 15, 7), new Manche(t3, 10, 15), new Manche(t4, 20, 15), new Manche(t5, 20, 15) });
            var P4 = new Partie(u6, u4, 1, 1, 6, new List<Manche> { new Manche(t1, 10, 20), new Manche(t2, 15, 7), new Manche(t3, -1, 10) });
            var P5 = new Partie(u6, u1, 1, 2, 1, new List<Manche> { new Manche(t1, 25, 20), new Manche(t2, 4, 7), new Manche(t3, 10, 11) });
            var P6 = new Partie(u6, u5, 1, 2, 6, new List<Manche> { new Manche(t1, 10, 20), new Manche(t2, 15, 7), new Manche(t3, 7, 10) });

            var r233 = new Reponse(false, t9);
            var r234 = new Reponse(false, t9);
            var r235 = new Reponse(false, t9);
            var r236 = new Reponse(false, t9);
            var r237 = new Reponse(false, t9);

            var r238 = new Reponse(false, t1);



            var r1234 = new Mot("Lucic", r233);
            var r1235 = new Mot("Neuer", r234);
            var r1236 = new Mot("Ulreich", r235);
            var r1237 = new Mot("Starke", r236);
            var r1238 = new Mot("Alaba", r237);


            var r1239 = new Mot("Zlatan", r238);
            var r1240 = new Mot("Ibra", r238);*/

            if (!context.Users.Any())
            {
                context.Users.AddRange(
                    u1,u2,u3,u4,u5,u6,u7,u8,u9,u10,u11,u12,u13,u14,u15
                    );

                context.Themes.Add(t1);
                context.SaveChanges();

                context.Themes.Add(t2);
                context.SaveChanges();

                context.Themes.Add(t3);
                context.SaveChanges();

                context.Themes.Add(t4);
                context.SaveChanges();

                context.Themes.Add(t5);
                context.SaveChanges();

                context.Themes.Add(t6);
                context.SaveChanges();

                context.Themes.Add(t7);
                context.SaveChanges();

                context.Themes.Add(t8);
                context.SaveChanges();

                context.Themes.Add(t9);
                context.SaveChanges();

                //context.Themes.AddRange(t1, t2, t3, t4, t5, t6, t7, t8, t9);

                //context.parties.AddRange(
                //    P1, P2, P3, P4, P5, P6
                //    );

                //context.Reponses.AddRange(
                //    r233, r234, r235, r236, r237, r238
                //    );
                context.SaveChanges();
            }

          
        }
    }
}
