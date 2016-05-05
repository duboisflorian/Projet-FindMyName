package data.findmyname;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import game.findmyname.R;

/**
 * Created by lucar_000 on 05/05/2016.
 */
public class joueuradapter extends ArrayAdapter<joueur>{

    public joueuradapter(Context context, int resource)
    {
        super(context, resource);
    }

    public View getView(int position, View convertView, ViewGroup parent)
    {
        View result = convertView;
        if(convertView == null)
        {
            result = LayoutInflater.from(getContext()).inflate(R.layout.ligne_listejoueur,parent,false);
        }

        joueur J = getItem(position);

        TextView nom = (TextView)result.findViewById(R.id.nomjoueur);
        nom.setText(J.getNom());

        return result;
    }

    public void upadateData(){
        this.notifyDataSetChanged();
    }
}
