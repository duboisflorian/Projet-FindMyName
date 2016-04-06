import {Component}  from 'angular2/core';
import {Footer} from './footer';
import {Top} from './top';
import {Todo} from './todo';
import {Theme} from './theme';
import {ThemeList} from './theme_list';



@Component({
    selector: 'choix-app',
    template: `
<top> Loading...</top>
<div class="core">
 <div class="row" style=" margin-right:0px;">
    <div class="list-ami col-xs-6 col-sm-4 col-lg-3 col-md-3">
                  <h1>Liste des noms trouvé</h1>

                  <div class="sidebar">
                      <ul class="nav nav-sidebar nav-list-nom">
                      </ul>
                  </div>


                  <div class="nav nav-conteur">
                      <span>{{remaining}} / {{remaining}}</span>
                  </div>
     </div>
      <div class="choix-theme col-xs-4 col-sm-5 col-lg-7 col-md-7">
           <h1>Choisez un thème :</h1>
           <theme-list [theme]="theme"></theme-list>            
     </div>
</div>
</div>
<footer> Loading...</footer>
`, directives: [Top, Footer, ThemeList]
})
export class ChoixApp {
    todos: Todo[] = [
    ];

    /*theme: Theme[] = [
        { text: "PSG",id:"1",photo:"./fichier/psg.jpg", done: false},
        { text: "OL", id: "2", photo: "./fichier/ol.jpg", done: false},
        { text: "REAL", id: "3", photo: "./fichier/real.jpg", done: false },
        { text: "Barca", id: "4", photo: "./fichier/barca.jpg", done: false },
        { text: "arsenal", id: "5", photo: "./fichier/arsenal.jpg", done: false },
        { text: "city", id: "6", photo: "./fichier/city.jpg", done: false },
    ];*/

    theme: Theme[] = [
    ];
    static themes: Theme[] = [
    ];
    constructor() {

        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");

        xobj.open('GET', './fichier/themes.json', true); // Replace 'my_data' with the path to your file

        xobj.onreadystatechange = function () {

            if (xobj.readyState == 4 && xobj.status == 200) {

                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                //alert(xobj.responseText);
                var data = eval("(" + xobj.responseText + ")");
                var c = 0;
                var tab_id: number[];
                while (c < 4) {
                    alert(c);
                    alert(i);
                    var i = Math.floor(Math.random() * 5) + 1;
                    ChoixApp.themes.push({ text: data.themes[i].text, id: data.themes[i].id, photo: data.themes[i].photo, done: true });
                    c++;
                    

                    /*for (var a = 0; a < 4; a++) {
                        if (tab_id[a] != i) {
                            ChoixApp.themes.push({ text: data.themes[i].text, id: data.themes[i].id, photo: data.themes[i].photo, done: true });
                            c++;
                            tab_id.push(i);
                        }
                    }*/
                }
                /*for (var i = 0; i < data.themes.length; i++) {

                    ChoixApp.themes.push({ text: data.themes[i].text, id: data.themes[i].id, photo: data.themes[i].photo, done: data.themes[i].done });
                }*/
            }
        };
        xobj.send(null);
    }

    /* aleatoire() {
         var c=0;
         while (c < 4) {
             var i = Math.floor(Math.random() * ChoixApp.themes.length) + 1;
             this.theme.push(ChoixApp.themes[i]);
             c++;
         }
     }*/

    aleatoire() {
        var c = 0;
        while (c < 4) {
            var i = Math.floor(Math.random() * 5) + 1;
            if (ChoixApp.themes[i].done == false) {
                this.theme.push(ChoixApp.themes[i]);
                ChoixApp.themes[i].done = true;
                c++;
            }
        }
    }

    get remaining() {
        this.theme = ChoixApp.themes;
        return this.todos.reduce((count: number, todo: Todo) => count + +!todo.done, 0);
    }

    addTask(task: Todo) {
        this.todos.push(task);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/