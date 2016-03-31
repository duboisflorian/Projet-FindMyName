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
<div class="container core" style="color:white;">
    <div id="gauche" style="width:20%;float:left;">
    <span style="text-align: center;">{{remaining}} of {{remaining}} remaining</span>
    <h2>Liste des joueurs</h2>
</div>
<div id="droite" style="width:80%;text-align: center;"><h2>Choisir un thème</h2>
<theme-list [theme]="theme"></theme-list>
</div>

</div>

`, directives: [Top, Footer, ThemeList]
})
export class ChoixApp {
    todos: Todo[] = [
    ];

    theme: Theme[] = [
        { text: "PSG",id:"1",photo:"./fichier/psg.jpg", done: false},
        { text: "OL", id: "2", photo: "./fichier/ol.jpg", done: false},
        { text: "REAL", id: "3", photo: "./fichier/real.jpg", done: false },
        { text: "Barca", id: "4", photo: "./fichier/barca.jpg", done: false },
        { text: "arsenal", id: "5", photo: "./fichier/arsenal.jpg", done: false },
        { text: "city", id: "6", photo: "./fichier/city.jpg", done: false },
    ];

    static themes: Theme[] = [
    ];
    constructor() {

        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");

        xobj.open('GET', './fichier/equipe.json', true); // Replace 'my_data' with the path to your file

        xobj.onreadystatechange = function () {

            if (xobj.readyState == 4 && xobj.status == 200) {

                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                //alert(xobj.responseText);
                var data = eval("(" + xobj.responseText + ")");

                for (var i = 0; i < data.joueurs.length; i++) {

                    TodoForm.joueurs.push({ text: data.joueurs[i].text, done: data.joueurs[i].done });
                }

            }
        };
        xobj.send(null);
    }

    get remaining() {
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