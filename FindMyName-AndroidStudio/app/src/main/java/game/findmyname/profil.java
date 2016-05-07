package game.findmyname;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

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

        final int id = Integer.parseInt(strid);

        final EditText ModifPseudo = (EditText) findViewById(R.id.ModifPseudo);

        final EditText ModifMdp = (EditText) findViewById(R.id.ModifMDP);

        EditText ModifMail = (EditText) findViewById(R.id.ModifMail);


        data profildb = new data(getBaseContext(), "dbuser.db", null, 1);
        final SQLiteDatabase db = profildb.getWritableDatabase();
        db.setLocale(Locale.FRENCH);

        Cursor result = db.rawQuery("SELECT * FROM user where id="+id ,null);

        result.moveToFirst();

        String pseudodb="";
        String mdpdb="";
        String maildb="";

        while (!result.isAfterLast())
        {
            pseudodb = result.getString(1);
            Log.i("Profil","pseudo : " +pseudodb);
            ModifPseudo.setText(pseudodb);

            mdpdb = result.getString(2);
            Log.i("Profil","mdp : " +mdpdb);
            ModifMdp.setText(mdpdb);


            maildb = result.getString(4);
            Log.i("Profil","mail : " +maildb);
            ModifMail.setText(maildb);

            result.moveToNext();
        }

        // Boutton qui modifie le pseudo

        Button btModifpseudo = (Button) findViewById(R.id.btmodifpseudo);
        btModifpseudo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String newpseudo = ModifPseudo.getText().toString();
                db.execSQL("UPDATE user SET pseudo ='"+ newpseudo +"' WHERE id="+id);

                Toast toast = Toast.makeText(getApplicationContext(),"Profil mis à jour ",Toast.LENGTH_SHORT);
                toast.show();
            }
        });

        // Boutton qui modifie le mdp

        Button btModifmdp = (Button) findViewById(R.id.btmodifmdp);
        btModifmdp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String newmdp = ModifMdp.getText().toString();
                db.execSQL("UPDATE user SET mdp ='"+ newmdp +"' WHERE id="+id);

                Toast toast = Toast.makeText(getApplicationContext(),"Profil mis à jour ",Toast.LENGTH_SHORT);
                toast.show();

            }
        });

    }
}
