import {Component, Output, EventEmitter} from 'angular2/core';
import {Ami} from './ami';

@Component({
    selector: 'ami-form',
    template: `
    <form (ngSubmit)="addAmi()">
      <input type="text" [(ngModel)]="friend" size="30"
             placeholder="entrer l'id de la personne">
      <input class="btn-primary" type="submit" value="ajouter">
    </form>`
})
export class AmiForm{
    @Output() newFriend = new EventEmitter<Ami>();
    friend: string = '';

    static ami: string;
    static c: string;
    static a: EventEmitter<Ami>;
    static text: string;
    static photo: string;
 


    addAmi() {
        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");

        xobj.open('GET', './fichier/personnes.json', true); // Replace 'my_data' with the path to your file

        AmiForm.ami = this.friend;
        AmiForm.a = this.newFriend;

        xobj.onreadystatechange = function () {

            if (xobj.readyState == 4 && xobj.status == 200) {

                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                //alert(xobj.responseText);
                var data = eval("(" + xobj.responseText + ")");

                AmiForm.c = '0';

                if (AmiForm.ami) {
 
                    for (var i = 0; i < data.pers.length; i++) {

                        if (data.pers[i].id == AmiForm.ami) {

                            AmiForm.text = data.pers[i].text;
                            AmiForm.photo = data.pers[i].photo;
                            AmiForm.a.next({ text: data.pers[i].text, id: data.pers[i].id, photo: data.pers[i].photo });
                            AmiForm.c = '1';
                        }
                    }
                   
                }
                if (AmiForm.c == '0')
                    alert('Cette id n\'existe pas');
                /*this.Tem = { text: data.commands[0].text, id: data.commands[0].id, photo: data.commands[0].photo };
                this.liste_personnes.push(this.Tem);*/
                /*for (var i = 0; i < data.commands.length; i++) {
                    this.liste_personnes.push({ text: data.commands[i].text, id: data.commands[i].id, photo: data.commands[i].photo });*/
            }
        };


        this.friend = '';

        xobj.send(null);
    }
    }



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/