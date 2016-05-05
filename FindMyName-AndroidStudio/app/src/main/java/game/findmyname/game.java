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
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;

import java.util.Locale;

import data.findmyname.data;
import data.findmyname.joueur;
import data.findmyname.joueuradapter;

/**
 * Created by lucar_000 on 04/05/2016.
 */
public class game extends AppCompatActivity {

    private joueuradapter jadapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.game);

        // Récup du mot dans l'activité précédente
        Intent intent = getIntent();
        String theme = intent.getStringExtra("Theme");

        Log.i("ENI","mot récupéré : "+ theme);

        // ListView

        final ListView listview = (ListView) findViewById(R.id.listejoueur);

        jadapter = new joueuradapter(this,R.layout.ligne_listejoueur);

        // Image du thème choisi

        ImageView ivtheme = (ImageView) findViewById(R.id.imgtheme);

        // Détermine l'image en fonction du thème

        if (theme.equals("themepsg"))
        {
            ivtheme.setImageResource(R.drawable.psg);
        }
        else if (theme.equals("themeol"))
        {
            ivtheme.setImageResource(R.drawable.ol);
        }
        else if (theme.equals("themearsenal"))
        {
            ivtheme.setImageResource(R.drawable.arsenal);
        }
        else if (theme.equals("themebarca"))
        {
            ivtheme.setImageResource(R.drawable.barca);
        }

        data databaseFilm = new data (getBaseContext(), "dbuser.db", null, 1);
        SQLiteDatabase db = databaseFilm.getReadableDatabase();
        db.setLocale(Locale.FRENCH);

        final Cursor result = db.rawQuery("SELECT * FROM " + theme,null);



        Button btnValider = (Button) findViewById(R.id.btValider);
        btnValider.setOnClickListener(new Button.OnClickListener()
        {
            public void onClick(View arg0)
            {
                EditText reponse = (EditText) findViewById(R.id.reponse);
                String strreponse = reponse.getText().toString();

                Log.i("ENI","Reponse proposée " +strreponse);

                boolean flag = false;

                result.moveToFirst();
                while (!result.isAfterLast())
                {
                    String text= result.getString(1);
                    Log.i("ENI","Text : "+ text);

                    if(strreponse.equals(text))
                    {
                       flag = true;
                    }

                    result.moveToNext();
                }


                if(flag == true)
                {
                    Toast toast = Toast.makeText(getApplicationContext(),"Bien jouer !",Toast.LENGTH_SHORT);
                    toast.show();
                    ImageView imageview = (ImageView) findViewById(R.id.imagevraifaux);
                    imageview.setImageResource(R.drawable.vert);
                    joueur j = new joueur();

                    j.setNom(strreponse);

                    jadapter.add(j);

                    listview.setAdapter(jadapter);
                }
                else
                {
                    Toast toast = Toast.makeText(getApplicationContext(),"Mauvaise reponse !",Toast.LENGTH_SHORT);
                    toast.show();
                    ImageView imageview = (ImageView) findViewById(R.id.imagevraifaux);
                    imageview.setImageResource(R.drawable.rouge);
                }

            }
        });

    }
}
