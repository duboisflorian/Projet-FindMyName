package data.findmyname;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

/**
 * Created by lucar_000 on 04/05/2016.
 */
public class data extends SQLiteOpenHelper{

    public data(Context context, String name, SQLiteDatabase.CursorFactory factory, int version)
    {
        super(context,name, null, 1);

    }

    public void onCreate(SQLiteDatabase db)
    {
        db.execSQL("CREATE TABLE themeol (id INTEGER PRIMARY KEY AUTOINCREMENT, reponse TEXT);");
        Cursor result2 = db.rawQuery("SELECT * FROM themeol", null);
        int nbcol2 = result2.getColumnCount();

        Log.i("ENI","Nombre de colonnes " + nbcol2);

        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Beauvue')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Labidi')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Lacazette')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Mvuemba')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Fekir')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Jallet')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Rose')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Darder')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Malbranque')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Diakhaby')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Comet')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Tousart')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Gonalon')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Morel')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Ferri')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Mocio')");
        db.execSQL("INSERT INTO themeol(reponse) VALUES ('Perrin')");

        ///////////////////////////////////////////////////////////////////////////////////////////

        db.execSQL("CREATE TABLE themepsg (id INTEGER PRIMARY KEY AUTOINCREMENT, reponse TEXT);");

        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Cavani')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Ongenda')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Ibrahimovic')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Augustin')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Lavezzi')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Di Maria')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Trapp')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Silva')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Motta')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Sieigu')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Thiago')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Lucas')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Matuidi')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Pastore')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Douchez')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Verratti')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('Maxwell')");
        db.execSQL("INSERT INTO themepsg(reponse) VALUES ('David')");

        ///////////////////////////////////////////////////////////////////////////////////////////

        db.execSQL("CREATE TABLE themearsenal (id INTEGER PRIMARY KEY AUTOINCREMENT, reponse TEXT);");

        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Giroud')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Debuchy')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Ospina')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Gnabry')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Chambers')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Paulista')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Coquelin')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Welback')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Mertesacker')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Walcott')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Crowley')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Monreal')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Gibbs')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Flamini')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Koscielny')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Cazorla')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Jenkinson')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Wilshere')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('El Neny')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Arteta')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Bielik')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Campbell')");
        db.execSQL("INSERT INTO themearsenal(reponse) VALUES ('Kamara')");


        ///////////////////////////////////////////////////////////////////////////////////////////

        db.execSQL("CREATE TABLE themebarca (id INTEGER PRIMARY KEY AUTOINCREMENT, reponse TEXT);");

        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Neymar')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Messi')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('El Haddadi')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Tello')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Suarez')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Ramirez')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Turan')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Rakitic')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Da Silva')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Dos Santos')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Ter Stegen')");
        db.execSQL("INSERT INTO themebarca(reponse) VALUES ('Martinez')");


        ///////////////////////////////////////////////////////////////////////////////////////////


        //////////////////////////////////////////////////////////////////////////////////////////

        db.execSQL("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, pseudo TEXT, mdp TEXT, image TEXT, mail TEXT, pays TEXT, meilleurscore INT);");

        Cursor result = db.rawQuery("SELECT * FROM user", null);
        int nbcol = result.getColumnCount();

        Log.i("ENI","Nombre de colonnes " + nbcol);

        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Florian','1234','fichier/psg.jpg','Florian@gmail.com','France',0)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Yani','1234','fichier/psg.jpg','Yani@gmail.com','France',0)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Maxime','1234','fichier/psg.jpg','Maxime@gmail.com','France',0)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Lionel','1234','fichier/psg.jpg','Lionel@gmail.com','France',0)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Diego','1234','fichier/psg.jpg','Diego@gmail.com','France',0)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Tingting','1234','fichier/psg.jpg','Tingting@gmail.com','France',0)");


        ///////////////////////////////////////////////////////////////////////////////////////////

        db.execSQL("CREATE TABLE temp (id INTEGER, nbpoint INTEGER );");

        db.execSQL("INSERT INTO temp(id,nbpoint) VALUES(0,0);");
    }

    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        db.execSQL("DROP TABLE IF EXISTS user");
        onCreate(db);

    }
}
