﻿import { Component, Input, OnInit, EventEmitter } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';
import { Reponse } from './reponses';
import { Jouer } from './jouer';
import { JouerService } from './jouer.service';
import { ThemeService } from './theme.service';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur';
import { Todo } from './todo';

@Component({
    selector: 'my-jouer',
    templateUrl: 'app/jouer.component.html'
})
export class JouerComponent implements OnInit {
    newTask = new EventEmitter<Todo>();
    task: string = '';
    todos: Todo[] = [
    ];

   joueurs: Todo[] = [
      {text: 'Rabiot',done:false},
      {text: 'Zlatan',done:false},
      {text: 'Cavani',done:false},
      {text: 'Trapp',done:false},
  ];

    reponses: Jouer;
    u: Utilisateur;

    addTodo() {
        if (this.task) {
            for (var i = 0; i < this.joueurs.length; i++) {
                if (this.joueurs[i].text == this.task.toLowerCase() && this.joueurs[i].done == false) {
                    this.newTask.next({ text: this.task.toLowerCase(), done: false });
                    this.joueurs[i].done = true;
                }
            }
            this.task = '';
        }
    }

    constructor(
        private _router: Router,
        private _jouerService: JouerService,
        private _uService: UtilisateurService,
        private _routeParams: RouteParams) {
    }
    get remaining() {
        var nbjoueurs = this.joueurs.length;
        return this.todos.reduce((count: number, todo: Todo) => count + +!todo.done, 0);
    }

    addTask(task: Todo) {
        this.todos.push(task);
    }
    gotoDeco() {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    }
    gotoAmis() {
        this._router.navigate(['Amis', { us: this.u.id }]);
    }
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }
    ngOnInit() {
        let th = +this._routeParams.get('th');
        this.reponses = this._jouerService.getReponses(th);
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/