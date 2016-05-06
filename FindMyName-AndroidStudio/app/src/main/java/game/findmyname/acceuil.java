package game.findmyname;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

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
        String pseudo = intent.getStringExtra("pseudo");

        TextView tvpseudo = (TextView) findViewById(R.id.tvBonjour);
        tvpseudo.setText("Bonjour "+pseudo+" !");

        Button btjouer = (Button) findViewById(R.id.btjouer);
        btjouer.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(acceuil.this,choix_theme.class);
                startActivity(intent);
            }
        });
    }

    public void gotoprofil(View v)
    {
        Intent intent = new Intent();
        startActivity(intent);
    }
}
