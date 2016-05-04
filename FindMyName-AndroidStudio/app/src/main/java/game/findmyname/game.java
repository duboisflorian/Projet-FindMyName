package game.findmyname;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import java.util.Locale;

import data.findmyname.data;

/**
 * Created by lucar_000 on 04/05/2016.
 */
public class game extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.game);

        data databaseFilm = new data (getBaseContext(), "dbuser.db", null, 1);
        SQLiteDatabase db = databaseFilm.getReadableDatabase();
        db.setLocale(Locale.FRENCH);

        final Cursor result = db.rawQuery("SELECT * FROM themeol",null);



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
