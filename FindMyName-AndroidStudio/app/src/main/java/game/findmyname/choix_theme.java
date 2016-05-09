package game.findmyname;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

/**
 * Created by lucar_000 on 05/05/2016.
 */
public class choix_theme extends AppCompatActivity {



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.choix_theme);
        // Récup id
        Intent intent = getIntent();
        String strid = intent.getStringExtra("id");
        Log.i("Choix_thème","id reçu "+strid);

        //ImageView ivol = (ImageView) findViewById(R.id.ol);

        //ImageView ivpsg = (ImageView) findViewById(R.id.psg);


    }


    public void togameol(View v)
    {
        // Récup id
        Intent intent2 = getIntent();
        String strid = intent2.getStringExtra("id");
        Intent intent = new Intent(choix_theme.this,game.class);
        intent.putExtra("Theme","themeol");
        intent.putExtra("id",strid);
        startActivity(intent);
        Log.i("ENI","Redirection !");
    }

    public void togamepsg(View v){

        // Récup id
        Intent intent2 = getIntent();
        String strid = intent2.getStringExtra("id");
        Intent intent = new Intent(choix_theme.this,game.class);
        intent.putExtra("Theme","themepsg");
        intent.putExtra("id",strid);
        startActivity(intent);
        Log.i("ENI","Redirection !");
    }

    public void togamearsenal(View v){

        // Récup id
        Intent intent2 = getIntent();
        String strid = intent2.getStringExtra("id");
        //Log.i("Choix thème","id envoyé "+strid);
        Intent intent = new Intent(choix_theme.this,game.class);
        intent.putExtra("Theme","themearsenal");
        intent.putExtra("id",strid);
        startActivity(intent);
        Log.i("ENI","Redirection !");
    }

    public void togamebarca(View v){

        // Récup id
        Intent intent2 = getIntent();
        String strid = intent2.getStringExtra("id");
        Intent intent = new Intent(choix_theme.this,game.class);
        intent.putExtra("Theme","themebarca");
        intent.putExtra("id",strid);
        startActivity(intent);
        Log.i("ENI","Redirection !");
    }

    public void togamevoiture(View v)
    {
        // Récup id
        Intent intent2 = getIntent();
        String strid = intent2.getStringExtra("id");
        Intent intent = new Intent(choix_theme.this,game.class);
        intent.putExtra("Theme","themevoiture");
        intent.putExtra("id",strid);
        startActivity(intent);
        Log.i("ENI","Redirection !");
    }
}

