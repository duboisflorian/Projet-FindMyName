package game.findmyname;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.EditText;

import java.util.Locale;

import data.findmyname.data;

/**
 * Created by lucar_000 on 07/05/2016.
 */
public class profil extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.profil);

        // Récup de l'id de la page d'accueil
        Intent intent = getIntent();
        String strid = intent.getStringExtra("id");
        Log.i("Profil" ,"id reçu : "+strid);

        // Convertion de l'id en Int

        int id = Integer.parseInt(strid);

        EditText ModifPseudo = (EditText) findViewById(R.id.ModifMail);

        EditText ModifMdp = (EditText) findViewById(R.id.ModifMDP);

        EditText ModifMail = (EditText) findViewById(R.id.ModifMail);


        data profildb = new data(getBaseContext(), "dbuser.db", null, 1);
        final SQLiteDatabase db = profildb.getWritableDatabase();
        db.setLocale(Locale.FRENCH);

        Cursor result = db.rawQuery("SELECT * FROM user where id="+id ,null);

        result.moveToFirst();

        while (!result.isAfterLast())
        {
            String pseudodb = result.getString(1);
            Log.i("Profil","pseudo : " +pseudodb);

            String mdpdb = result.getString(2);
            Log.i("Profil","mdp : " +mdpdb);


            String maildb = result.getString(4);
            Log.i("Profil","mail : " +maildb);

            result.moveToNext();
        }

    }
}
