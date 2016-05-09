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
import android.widget.ImageView;
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

        data profildb = new data(getBaseContext(), "dbuser.db", null, 1);
        final SQLiteDatabase db = profildb.getWritableDatabase();
        db.setLocale(Locale.FRENCH);

        // Image de profil
        ImageView imageProfil = (ImageView) findViewById(R.id.imageProfil);

        // Spinner pour changer la photo de profil
        final Spinner spinnerimage = (Spinner) findViewById(R.id.imageprofilspinner);
        spinnerimage.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
                String strImage= spinnerimage.getSelectedItem().toString();
                Log.i("Profil","Image séléctionner "+strImage);

                db.execSQL("UPDATE user SET image ='"+ strImage +"' WHERE id="+iddb);

                // Requête pour mettre à jour l'image directement au changement du Spinner
            }

            @Override
            public void onNothingSelected(AdapterView<?> parent) {

            }
        });

        final EditText ModifPseudo = (EditText) findViewById(R.id.ModifPseudo);

        final EditText ModifMdp = (EditText) findViewById(R.id.ModifMDP);

        TextView tvMeilleurScore = (TextView) findViewById(R.id.BestScore);

        EditText ModifMail = (EditText) findViewById(R.id.ModifMail);
        // EditText Non Editable
        ModifMail.setKeyListener(null);


        // Spinner des pays
        final Spinner spinnerPays = (Spinner) findViewById(R.id.spinnerPays);


        Button btacceuil = (Button) findViewById(R.id.btgame);
        btacceuil.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent1 = new Intent(profil.this,acceuil.class);
                intent1.putExtra("id",strid);
                startActivity(intent1);
            }
        });



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

            String imagedb = result.getString(3);
            Log.i("Profil","image "+imagedb);
            int posimg = 0;
            imageProfil.setImageResource(R.drawable.logo);

            if(imagedb.equals("arsenal"))
            {
                posimg = 1;
                imageProfil.setImageResource(R.drawable.arsenal);
            }
            else if(imagedb.equals("barca"))
            {
                posimg = 2;
                imageProfil.setImageResource(R.drawable.barca);

            }
            else if(imagedb.equals("ol"))
            {
                posimg = 3;
                imageProfil.setImageResource(R.drawable.ol);

            }
            else if(imagedb.equals("psg"))
            {
                posimg = 4;
                imageProfil.setImageResource(R.drawable.psg);

            }
            else if(imagedb.equals("voiture"))
            {
                posimg = 5;
                imageProfil.setImageResource(R.drawable.marquevoiture);

            }
            spinnerimage.setSelection(posimg);

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
