package game.findmyname;

import android.content.DialogInterface;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.support.annotation.StringDef;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import data.findmyname.data;
import java.util.Locale;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        data databaseFilm = new data (getBaseContext(), "dbuser.db", null, 1);
        SQLiteDatabase db = databaseFilm.getReadableDatabase();
        db.setLocale(Locale.FRENCH);

        final Cursor result = db.rawQuery("SELECT * FROM user",null);

        Button btNew = (Button) findViewById(R.id.btnCo);
        btNew.setOnClickListener(new Button.OnClickListener()
        {
            public void onClick(View arg0)
            {
                EditText pseudo = (EditText) findViewById(R.id.Pseudo);
                String strpseudo = pseudo.getText().toString();

                EditText mdp = (EditText) findViewById(R.id.mdp);
                String strmdp = mdp.getText().toString();

                Log.i("ENI","Pseudo : "+ strpseudo);
                Log.i("ENI","MDP : "+ strmdp);

                boolean flag = false;

                result.moveToFirst();
                while (!result.isAfterLast())
                {
                    String pseudodb = result.getString(1);
                    Log.i("ENI","pseudodb : "+ pseudodb);

                    String mdpdb = result.getString(2);
                    Log.i("ENI","MDPdb : "+ mdpdb);


                    if (strpseudo.equals(pseudodb) && strmdp.equals(mdpdb))
                    {
                        flag = true;
                    }
                    result.moveToNext();
                }

                if (flag == true)
                {
                    Intent intent = new Intent(MainActivity.this,choix_theme.class);
                    startActivity(intent);
                    Log.i("ENI","Connexion résusi");
                }
                else
                {
                    Toast toast = Toast.makeText(getApplicationContext(),"Echec de connexion",Toast.LENGTH_SHORT);
                    toast.show();
                    Log.i("ENI","Echec de connexion");

                }
            }
        });



    }
}
