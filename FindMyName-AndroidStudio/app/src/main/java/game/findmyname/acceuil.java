package game.findmyname;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
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

        // Image de profil sur la page d'acceuil
        ImageView imageProfil = (ImageView) findViewById(R.id.imageProfilAcceuil);
        //imageProfil.setImageResource(R.drawable.logo);

        data databaseFilm = new data (getBaseContext(), "dbuser.db", null, 1);
        SQLiteDatabase db = databaseFilm.getReadableDatabase();
        db.setLocale(Locale.FRENCH);

        Cursor result = db.rawQuery("SELECT * FROM user WHERE id="+id ,null);

        // Récupération du pseudo et de l'image à partir de l'id
        result.moveToFirst();
        String pseudo = result.getString(1);
        Log.i("Acceuil","pseudo : " +pseudo);

        String image = result.getString(3);
        Log.i("Acceuil","image : " +image);
        if(image.equals("logo"))
        {
            imageProfil.setImageResource(R.drawable.logo);
        }
        else if(image.equals("arsenal"))
        {
            imageProfil.setImageResource(R.drawable.arsenal);
        }
        else if(image.equals("barca"))
        {
            imageProfil.setImageResource(R.drawable.barca);
        }
        else if(image.equals("ol"))
        {
            imageProfil.setImageResource(R.drawable.ol);
        }
        else if(image.equals("psg"))
        {
            imageProfil.setImageResource(R.drawable.psg);
        }
        else if(image.equals("voiture"))
        {
            imageProfil.setImageResource(R.drawable.marquevoiture);
        }




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
                intent.putExtra("id",id);
                startActivity(intent);
            }
        });


    }

}
