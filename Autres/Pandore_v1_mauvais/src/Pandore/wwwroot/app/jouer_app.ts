import {Component}  from 'angular2/core';
import {Footer} from './footer';
import {Top} from './top';
import {Todo} from './todo';
import {Joueurs} from './joueurs';
import {TodoList} from './todo_list';
import {TodoForm} from './todo_form';


@Component({
    selector: 'jouer-app',
    template: `
<top> Loading...</top>
<div class="core" >
 <div class="row" style=" margin-right:0px;">
    <div class="list-ami col-xs-6 col-sm-4 col-lg-3 col-md-3">
                  <h1>Liste des noms trouvé</h1>

                  <div class="sidebar">
                      <ul class="nav nav-sidebar nav-list-nom">
                          <todo-list [todos]="todos"></todo-list>
                      </ul>
                  </div>


                  <div class="nav nav-conteur">
                      <span>{{remaining}} / {{nbjoueurs}}</span>
                  </div>
     </div>
      <div class="choix-theme col-xs-4 col-sm-5 col-lg-7 col-md-7">
           <h1>A vous de jouer :</h1>
          <todo-form (newTask)="addTask($event)"></todo-form>           
     </div>
</div>
</div>
<footer> Loading...</footer>
`, directives: [Top, TodoList, TodoForm, Footer]
})
export class JouerApp {
    todos: Todo[] = [
    ];

    /*joueurs: Joueurs[] = [
        { text: "Rabiot" },
        { text: "Zlatan" },
        { text: "Cavani" },
        { text: "Trapp" },
    ];*/

    static nbj: string;
    nbjoueurs: string;
    constructor() {

            var txt;
        var r = confirm("Êtes-vous Prêt a jouer pendant 2m");
        if (r == true) {
            setTimeout(function () { window.location.href = "acc.html"; }, 120000);
        } else {
            window.location.href = "acc.html";
        }

        var xobj = new XMLHttpRequest();

        xobj.overrideMimeType("application/json");

        xobj.open('GET', './fichier/equipe.json', true); // Replace 'my_data' with the path to your file

        xobj.onreadystatechange = function () {

            if (xobj.readyState == 4 && xobj.status == 200) {

                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                //alert(xobj.responseText);
                var data = eval("(" + xobj.responseText + ")");

                JouerApp.nbj = data.nb;

            }
        };
        xobj.send(null);



    }


    get remaining() {
        this.nbjoueurs = JouerApp.nbj;
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