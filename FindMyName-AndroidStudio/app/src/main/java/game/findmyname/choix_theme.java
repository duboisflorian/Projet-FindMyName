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

        //ImageView ivol = (ImageView) findViewById(R.id.ol);

        //ImageView ivpsg = (ImageView) findViewById(R.id.psg);


    }

    public void togameol(View v)
    {
        Intent intent = new Intent(choix_theme.this,game.class);
        intent.putExtra("Theme","themeol");
        startActivity(intent);
        Log.i("ENI","Redirection !");
    }

    public void togamepsg(View v){

        Intent intent = new Intent(choix_theme.this,game.class);
        intent.putExtra("Theme","themepsg");
        startActivity(intent);
        Log.i("ENI","Redirection !");
    }

    public void togamearsenal(View v){

        Intent intent = new Intent(choix_theme.this,game.class);
        intent.putExtra("Theme","themearsenal");
        startActivity(intent);
        Log.i("ENI","Redirection !");
    }

    public void togamebarca(View v){

        Intent intent = new Intent(choix_theme.this,game.class);
        intent.putExtra("Theme","themebarca");
        startActivity(intent);
        Log.i("ENI","Redirection !");
    }
}

