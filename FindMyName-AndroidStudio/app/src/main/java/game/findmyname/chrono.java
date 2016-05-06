package game.findmyname;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.widget.TextView;

/**
 * Created by lucar_000 on 06/05/2016.
 */
public class chrono extends AppCompatActivity {

    Runnable m_handlerTask = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.chrono);

        final TextView chrono = (TextView) findViewById(R.id.Chrono);
        final Handler h = new Handler();
        m_handlerTask = new Runnable() {
            int time = 30;

            @Override
            public void run() {
                // do stuff then
                // can call h again after work!
                time -= 1;
                String strTime = Double.toString(time);
                chrono.setText(strTime);
                Log.d("TimerExample", "Going for... " + time);
                h.postDelayed(m_handlerTask, 1000);

                if(time == 0)
                {
                    Intent intent = new Intent(chrono.this,MainActivity.class);
                    startActivity(intent);
                    h.removeCallbacks(m_handlerTask);
                }

            }


        };
        m_handlerTask.run();
    }
}
