package game.findmyname;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.Locale;

import data.findmyname.data;

/**
 * Created by lucar_000 on 06/05/2016.
 */
public class acceuil extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.acceuil);

        // Récup du mot dans l'activité précédente
        Intent intent = getIntent();
        final String id = intent.getStringExtra("id");

        Log.i("ENI","id reçu : " +id);

        data databaseFilm = new data (getBaseContext(), "dbuser.db", null, 1);
        SQLiteDatabase db = databaseFilm.getReadableDatabase();
        db.setLocale(Locale.FRENCH);

        Cursor result = db.rawQuery("SELECT * FROM user WHERE id="+id ,null);

        // Récupération du pseudo à partir de l'id
        result.moveToFirst();
        String pseudo = result.getString(1);
        Log.i("ENI","pseudo : " +pseudo);


        TextView tvprofil = (TextView) findViewById(R.id.profil);
        tvprofil.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(acceuil.this,profil.class);
                //Envoie de l'in vers la page de profil pour faire les requêtes de MAJ
                intent.putExtra("id",id);
                startActivity(intent);
            }
        });

        TextView tvpseudo = (TextView) findViewById(R.id.tvBonjour);
        tvpseudo.setText("Bonjour "+pseudo+" !");

        Button btjouer = (Button) findViewById(R.id.btjouer);
        btjouer.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(acceuil.this,choix_theme.class);
                startActivity(intent);
            }
        });


    }

}
