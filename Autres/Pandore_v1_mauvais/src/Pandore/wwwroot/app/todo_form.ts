import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-form',
  template: `
    <form (ngSubmit)="addTodo()">
      <input type="text" [(ngModel)]="task" size="30"
             placeholder="entre le nom d'un joueur" style="color: black;">
      <input class="btn-primary" type="submit" value="ajouter">
    </form>`
})
export class TodoForm {
  @Output() newTask = new EventEmitter<Todo>();
  task: string = '';

   /* joueurs: Todo[] = [
      {text: 'Rabiot',done:false},
      {text: 'Zlatan',done:false},
      {text: 'Cavani',done:false},
      {text: 'Trapp',done:false},
  ];*/

    static joueurs: Todo[] = [
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

                    TodoForm.joueurs.push({ text: data.joueurs[i].text, done: data.joueurs[i].done});
                }

            }
        };
        xobj.send(null);
    }

  addTodo() {
    if (this.task) {
        for (var i = 0; i < TodoForm.joueurs.length; i++) {
            if (TodoForm.joueurs[i].text == this.task.toLowerCase() && TodoForm.joueurs[i].done == false) {
                this.newTask.next({ text: this.task.toLowerCase(), done:false});
            TodoForm.joueurs[i].done = true;
            }
    }
    this.task = '';
  }
}

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/