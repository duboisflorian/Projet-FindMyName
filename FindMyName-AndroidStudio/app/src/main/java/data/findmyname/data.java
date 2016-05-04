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
        db.execSQL("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, pseudo TEXT, mdp TEXT, image TEXT, mail TEXT, pays TEXT, meilleurscore TEXT);");

        Cursor result = db.rawQuery("SELECT * FROM user", null);
        int nbcol = result.getColumnCount();

        Log.i("ENI","Nombre de colonnes " + nbcol);
    }

    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

        db.execSQL("DROP TABLE IF EXISTS user");
        onCreate(db);

    }
}
