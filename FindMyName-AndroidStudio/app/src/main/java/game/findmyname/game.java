package game.findmyname;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.Locale;

import data.findmyname.data;
import data.findmyname.joueur;
import data.findmyname.joueuradapter;

/**
 * Created by lucar_000 on 04/05/2016.
 */
public class game extends AppCompatActivity {

    private joueuradapter jadapter;
    Runnable m_handlerTask = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.game);

        // Récup du mot dans l'activité précédente
        Intent intent = getIntent();
        final String theme = intent.getStringExtra("Theme");
        final String strid = intent.getStringExtra("id");
        final int id = Integer.parseInt(strid);
        Log.i("game","id reçu "+strid);

        Log.i("ENI","mot récupéré : "+ theme);

        timer(strid);

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
        else if (theme.equals("themevoiture"))
        {
            ivtheme.setImageResource(R.drawable.marquevoiture);
        }

        data databaseFilm = new data (getBaseContext(), "dbuser.db", null, 1);
        final SQLiteDatabase db = databaseFilm.getReadableDatabase();
        db.setLocale(Locale.FRENCH);

        final Cursor result = db.rawQuery("SELECT * FROM " + theme,null);

        // Compte le nombre total de résultat dans la BDD
        int compteur = 0;

        result.moveToFirst();
        while (!result.isAfterLast())
        {
            compteur++;
            result.moveToNext();
        }

        Log.i("ENI","Compteur : "+ compteur);

        // Répertorie toutes les bones réponses

        final ArrayList bonnesrep = new ArrayList();
        bonnesrep.add("");


        Button btnValider = (Button) findViewById(R.id.btValider);
        final int finalCompteur = compteur;
        btnValider.setOnClickListener(new Button.OnClickListener()
        {
            int bonnerep = finalCompteur;
            int nbpoint = 0;


            public void onClick(View arg0)
            {
                data inscriptiondb = new data(getBaseContext(), "dbuser.db", null, 1);
                final SQLiteDatabase db = inscriptiondb.getWritableDatabase();
                db.setLocale(Locale.FRENCH);

                EditText reponse = (EditText) findViewById(R.id.reponse);
                String strreponse = reponse.getText().toString();

                Log.i("ENI","Reponse proposée " +strreponse);

                boolean flag = false;

                result.moveToFirst();
                while (!result.isAfterLast())
                {
                    String text= result.getString(1);
                    Log.i("ENI","Text : "+ text);

                    // Similitude au niveau de la base de donnée

                    if(strreponse.equals(text))
                    {
                       flag = true;
                    }

                    result.moveToNext();
                }

                // Si réponse == à une entrée dans la BDD

                if(flag == true)
                {
                    // Booleen qui vérifie si la réponse n'a pas deja été saisie
                    boolean bool = true;

                    for (int i = 0; i< bonnesrep.size();i++)
                    {
                        if(strreponse.equals(bonnesrep.get(i)))
                        {
                            bool = false;
                        }
                    }
                    // Si la réponse n'a pas déja été saisie
                    if(bool == true)
                    {

                        ImageView imageview = (ImageView) findViewById(R.id.imagevraifaux);
                        imageview.setImageResource(R.drawable.vert);
                        joueur j = new joueur();

                        j.setNom(strreponse);

                        jadapter.add(j);

                        listview.setAdapter(jadapter);

                        // Décrémentation du nombre de bonnes à trouver
                        bonnerep--;

                        Toast toast = Toast.makeText(getApplicationContext(),"Il vous reste "+ bonnerep +" réponses à trouver",Toast.LENGTH_LONG);
                        toast.show();

                        // Si toutes les réponses ont été trouvé
                        if(bonnerep == 0)
                        {

                            // On vérifie si le core effectué est supérieur au score de la BDD
                            Cursor result = db.rawQuery("SELECT * FROM user where id="+id,null);
                            result.moveToFirst();
                            int meilleurScore = result.getInt(6);

                            Log.i("Game","Meilleur Score "+meilleurScore);

                            // Si le score de la partie est meilleur on met à jour la BDD

                            if(finalCompteur>meilleurScore)
                            {
                                db.execSQL("UPDATE user set meilleurscore="+finalCompteur +" WHERE id="+id);
                            }

                            Intent intent1 = new Intent(game.this,choix_theme.class);
                            intent1.putExtra("id",strid);
                            startActivity(intent1);

                            Toast toast1 = Toast.makeText(getApplicationContext(),"Bien jouer ! \n Vous avez trouvé tous les joueurs !",Toast.LENGTH_LONG);
                            toast1.show();
                        }

                        //Calcule le nombre de point effectué durant la partie
                        nbpoint = finalCompteur - bonnerep;


                        // Met a jour l a table pour le traitement dans le timer
                        db.execSQL("UPDATE temp set nbpoint="+nbpoint +" WHERE id=0");

                        Cursor result = db.rawQuery("SELECT * FROM temp",null);
                        result.moveToFirst();

                        int nbpointdb = result.getInt(1);
                        Log.i("game","nombre de point dans la base de donnée "+nbpointdb);
                    }
                    // Le joueur a déjà été saisi
                    else
                    {
                        Toast toast = Toast.makeText(getApplicationContext(),"Vous avez deja saisi ce joueur",Toast.LENGTH_SHORT);
                        toast.show();
                    }
                    // ajout de la réponse dans le tableau
                    bonnesrep.add(strreponse);

                }
                // La réponse n'est pas dans la BDD
                else
                {
                    Toast toast = Toast.makeText(getApplicationContext(),"Mauvaise reponse !",Toast.LENGTH_SHORT);
                    toast.show();
                    ImageView imageview = (ImageView) findViewById(R.id.imagevraifaux);
                    imageview.setImageResource(R.drawable.rouge);
                }

                reponse.setText("");

            }
        });
    }

    final Handler h = new Handler();

    public void timer(final String strid)
    {
        final TextView chrono = (TextView) findViewById(R.id.timer);

        m_handlerTask = new Runnable() {
            int time = 15;

            @Override
            public void run() {
                // do stuff then
                // can call h again after work!
                time -= 1;
                String strTime = Double.toString(time);
                chrono.setText(strTime);
                Log.d("TimerExample", "Going for... " + time);
                h.postDelayed(m_handlerTask, 1000);

                if(time == 0)
                {
                    data inscriptiondb = new data(getBaseContext(), "dbuser.db", null, 1);
                    final SQLiteDatabase db = inscriptiondb.getWritableDatabase();
                    db.setLocale(Locale.FRENCH);

                    Cursor result = db.rawQuery("SELECT * FROM temp",null);
                    result.moveToFirst();

                    int nbpointdb = result.getInt(1);
                    Log.i("game","nombre de point dans la base de donnée Timer : "+nbpointdb);

                    int id = Integer.parseInt(strid);

                    Cursor result2 = db.rawQuery("SELECT * FROM user WHERE id="+id,null);
                    result2.moveToFirst();

                    int meileurScore = result2.getInt(6);

                    // Comparaison du score de la partie avec le meilleur score de la BDD (si le score de la partie est meilleur, on le met à jour dans la BDD )
                    if(nbpointdb>meileurScore)
                    {
                        db.execSQL("UPDATE user set meilleurscore="+nbpointdb +" WHERE id="+id);
                    }

                    Intent intent = new Intent(game.this,choix_theme.class);
                    Log.i("game","id envoyé "+strid);
                    intent.putExtra("id",strid);
                    startActivity(intent);
                    h.removeCallbacks(m_handlerTask);
                }

            }


        };
        m_handlerTask.run();

    }



}
