package game.findmyname;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;

/**
 * Created by lucar_000 on 07/05/2016.
 */
public class logo_demarrage extends AppCompatActivity {

    Runnable m_handlerTask = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.logo_demarrage);

        // Image du logo
        final ImageView logo = (ImageView) findViewById(R.id.logo);

        final Handler h = new Handler();
        m_handlerTask = new Runnable() {
            int time = 5;

            @Override
            public void run() {
                // do stuff then
                // can call h again after work!
                time -= 1;
                String strTime = Double.toString(time);
                //chrono.setText(strTime);
                Log.d("TimerExample", "Going for... " + time);
                h.postDelayed(m_handlerTask, 1000);

                if(time == 0)
                {
                    Intent intent = new Intent(logo_demarrage.this,MainActivity.class);
                    startActivity(intent);
                    h.removeCallbacks(m_handlerTask);
                }
                if(time == 4)
                {
                    Animation logoMoveAnimation = AnimationUtils.loadAnimation(getApplicationContext(), R.anim.animlogo);
                    logo.startAnimation(logoMoveAnimation);
                }

            }


        };
        m_handlerTask.run();
    }
}
