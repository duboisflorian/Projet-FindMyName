package game.findmyname;

import android.support.annotation.StringDef;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

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
            }
        });



    }
}
