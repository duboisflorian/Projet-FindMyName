package game.findmyname;

import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import data.findmyname.data;
import java.util.Locale;

import data.findmyname.joueuradapter;

/**
 * Created by lucar_000 on 05/05/2016.
 */
public class inscription extends AppCompatActivity {

    private joueuradapter jadapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.inscription);

        Button btinscription = (Button) findViewById(R.id.btinscription);
        btinscription.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                data inscriptiondb = new data(getBaseContext(), "dbuser.db", null, 1);
                final SQLiteDatabase db = inscriptiondb.getWritableDatabase();
                db.setLocale(Locale.FRENCH);

                TextView tvpseudo = (TextView) findViewById(R.id.Nom);
                String strpseudo= tvpseudo.getText().toString();

                Log.i("ENI","Pseudo : "+strpseudo );

                TextView tvmdp = (TextView) findViewById(R.id.motdepasse);
                String strmdp= tvmdp.getText().toString();

                Log.i("ENI","mdp : "+strmdp );


                TextView tvpconfmdp = (TextView) findViewById(R.id.confirmationmdp);
                String strconfmdp= tvpconfmdp.getText().toString();

                Log.i("ENI","Confmdp : "+strconfmdp );


                TextView tvmail = (TextView) findViewById(R.id.mail);
                String strmail= tvmail.getText().toString();

                Log.i("ENI","Mail : "+strmail );


                Spinner pays = (Spinner) findViewById(R.id.Pays);
                String strPays = pays.getSelectedItem().toString();

                Log.i("ENI","Pays : "+strPays);

                db.execSQL("INSERT INTO user(pseudo,mdp,image,mail,pays,meilleurscore) VALUES('"+strpseudo+"','"+strmdp+"','logo.jpg','"+strmail+"','"+strPays+"',0)");

                Cursor result = db.rawQuery("SELECT * FROM user",null);

                result.moveToFirst();
                while (!result.isAfterLast())
                {
                    String p = result.getString(1);
                    Log.i("ENI","pseudo : "+ p);

                    String m = result.getString(2);
                    Log.i("ENI","mdp : "+ m);

                    String i = result.getString(3);
                    Log.i("ENI","image : "+ i);

                    String mail = result.getString(4);
                    Log.i("ENI","mail : "+ mail);

                    String pa = result.getString(5);
                    Log.i("ENI","pays : "+ pa);

                    String meilScore = result.getString(6);
                    Log.i("ENI","Meilleur Score : "+ meilScore);

                    result.moveToNext();
                }

                Toast toast = Toast.makeText(getApplicationContext(),"Inscription réussi ",Toast.LENGTH_SHORT);
                toast.show();

                Intent intent = new Intent(inscription.this,MainActivity.class);
                startActivity(intent);

            }
        });
    }
}
