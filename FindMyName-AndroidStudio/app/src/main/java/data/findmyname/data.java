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
        db.execSQL("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, pseudo TEXT, mdp TEXT, image TEXT, mail TEXT, pays TEXT, meilleurscore INT);");

        Cursor result = db.rawQuery("SELECT * FROM user", null);
        int nbcol = result.getColumnCount();

        Log.i("ENI","Nombre de colonnes " + nbcol);

        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Florian','1234','fichier/psg.jpg','Florian@gmail.com','France',25)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Yani','1234','fichier/psg.jpg','Yani@gmail.com','France',20)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Maxime','1234','fichier/psg.jpg','Maxime@gmail.com','France',20)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Lionel','1234','fichier/psg.jpg','Lionel@gmail.com','France',20)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Diego','1234','fichier/psg.jpg','Diego@gmail.com','France',20)");
        db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES ('Tingting','1234','fichier/psg.jpg','Tingting@gmail.com','France',20)");

    }

    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        db.execSQL("DROP TABLE IF EXISTS user");
        onCreate(db);

    }
}
