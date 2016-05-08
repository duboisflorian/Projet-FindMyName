package game.findmyname;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.TextView;
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
        final Intent intent = getIntent();
        final String strid = intent.getStringExtra("id");
        Log.i("Profil" ,"id reçu : "+strid);

        // Convertion de l'id en Int

        final int iddb = Integer.parseInt(strid);

        final EditText ModifPseudo = (EditText) findViewById(R.id.ModifPseudo);

        final EditText ModifMdp = (EditText) findViewById(R.id.ModifMDP);

        TextView tvMeilleurScore = (TextView) findViewById(R.id.BestScore);

        EditText ModifMail = (EditText) findViewById(R.id.ModifMail);
        // EditText Non Editable
        ModifMail.setKeyListener(null);

        final Spinner spinnerPays = (Spinner) findViewById(R.id.spinnerPays);

        Button btgame = (Button) findViewById(R.id.btgame);
        btgame.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent1 = new Intent(profil.this,choix_theme.class);
                intent1.putExtra("id",strid);
                startActivity(intent1);
            }
        });

        data profildb = new data(getBaseContext(), "dbuser.db", null, 1);
        final SQLiteDatabase db = profildb.getWritableDatabase();
        db.setLocale(Locale.FRENCH);

        Cursor result = db.rawQuery("SELECT * FROM user where id="+iddb ,null);

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

            String Paysdb = result.getString(5);
            Log.i("Profil","Pays : " +Paysdb);
            //Var pour positionner sur le bon pays
            int pos = 0;
            if(Paysdb.equals("Royaume-Uni"))
            {
                pos = 1;
            }
            else if(Paysdb.equals("Chine"))
            {
                pos = 2;
            }
            else if(Paysdb.equals("Japon"))
            {
                pos = 3;
            }
            else if(Paysdb.equals("Etats-Unis"))
            {
                pos = 4;
            }
            else if(Paysdb.equals("Canada"))
            {
                pos = 5;
            }
            spinnerPays.setSelection(pos);

            int meilleurScoredb = result.getInt(6);
            Log.i("Profil","Meilleur Score : " +meilleurScoredb);
            String strMeilleurScore = Integer.toString(meilleurScoredb);
            tvMeilleurScore.setText(strMeilleurScore);

            result.moveToNext();
        }

        // Boutton qui modifie le pseudo

        Button btModifpseudo = (Button) findViewById(R.id.btmodifpseudo);
        btModifpseudo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String newpseudo = ModifPseudo.getText().toString();
                db.execSQL("UPDATE user SET pseudo ='"+ newpseudo +"' WHERE id="+iddb);

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
                db.execSQL("UPDATE user SET mdp ='"+ newmdp +"' WHERE id="+iddb);

                Toast toast = Toast.makeText(getApplicationContext(),"Profil mis à jour ",Toast.LENGTH_SHORT);
                toast.show();

            }
        });


        spinnerPays.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                String strPays= spinnerPays.getSelectedItem().toString();
                Log.i("Profil","pays séléctionner "+strPays);

                db.execSQL("UPDATE user SET pays ='"+ strPays +"' WHERE id="+iddb);
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });

    }
}
