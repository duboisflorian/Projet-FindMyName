import {Component} from 'angular2/core';
import {Todo} from './todo';
import {TodoList} from './todo_list';
import {TodoForm} from './todo_form';

@Component({
  selector: 'todo-app',
  template: `
    <h2>Liste des joueurs</h2>
    <span>{{remaining}} of {{joueurs.length}} remaining</span>

    <todo-list [todos]="todos"></todo-list>
    <todo-form (newTask)="addTask($event)"></todo-form>`,
  styles:['a { cursor: pointer; cursor: hand; }'],
  directives: [TodoList, TodoForm]
})
export class TodoApp {
  todos: Todo[] = [
  ];
  
    joueurs: Joueurs[] = [
      {text: "Rabiot"},
      {text: "Zlatan"},
      {text: "Cavani"},
      {text: "Trapp"},
  ];

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