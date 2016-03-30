import {Component}  from 'angular2/core';
import {Footer} from './footer';
import {Top} from './top';
import {Todo} from './todo';



@Component({
    selector: 'choix-app',
    template: `
<top> Loading...</top>
<div class="container core" style="color:white;">
    <div id="gauche" style="width:20%;float:left;">
    <span style="text-align: center;">{{remaining}} of {{remaining}} remaining</span>
    <h2>Liste des joueurs</h2>
</div>
<div id="droite" style="width:80%;text-align: center;"><h2>Choisir un thème</h2><\br><a href="jouer.html">jouer</a></div>

</div>

`, directives: [Top, Footer]
})
export class ChoixApp {
    todos: Todo[] = [
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