import {Component, Output, EventEmitter} from 'angular2/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-form',
  template: `
    <form (ngSubmit)="addTodo()">
      <input type="text" [(ngModel)]="task" size="30"
             placeholder="entre le nom d'un joueur">
      <input class="btn-primary" type="submit" value="ajouter">
    </form>`
})
export class TodoForm {
  @Output() newTask = new EventEmitter<Todo>();
  task: string = '';

    joueurs: Todo[] = [
      {text: 'Rabiot',done:false},
      {text: 'Zlatan',done:false},
      {text: 'Cavani',done:false},
      {text: 'Trapp',done:false},
  ];

  addTodo() {
    if (this.task) {
        for (var i = 0; i < this.joueurs.length; i++) {
            if (this.joueurs[i].text == this.task && this.joueurs[i].done==false){
            this.newTask.next({text:this.task, done:false});
            this.joueurs[i].done = true;
            }
    }
    this.task = '';
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/