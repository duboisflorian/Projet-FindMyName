import {Component}  from 'angular2/core';
import {Footer} from './footer';
import {Top} from './top';
import {Todo} from './todo';
import {TodoList} from './todo_list';
import {TodoForm} from './todo_form';


@Component({
    selector: 'jouer-app',
    template: `
<top> Loading...</top>
<div class="container core" style="color:white;">
    <div id="gauche" style="width:20%;float:left;">
    <span style="text-align: center;">{{remaining}} of {{joueurs.length}} remaining</span>
    <h2>Liste des joueurs</h2>
    <todo-list [todos]="todos"></todo-list>
</div>
<div id="droite" style="width:80%;text-align: center;"><h2>A vous de jouer</h2>
    <todo-form (newTask)="addTask($event)"></todo-form>
</div>

</div>

`, directives: [Top, TodoList,TodoForm]
})
export class JouerApp {
    todos: Todo[] = [
    ];

    joueurs: Joueurs[] = [
        { text: "Rabiot" },
        { text: "Zlatan" },
        { text: "Cavani" },
        { text: "Trapp" },
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