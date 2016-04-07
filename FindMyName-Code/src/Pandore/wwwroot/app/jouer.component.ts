﻿import { Component, Input, OnInit, Output, EventEmitter } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';
import { Reponse } from './reponses';
import { Jouer } from './jouer';
import { JouerService } from './jouer.service';
import { ThemeService } from './theme.service';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur';

@Component({
    selector: 'my-jouer',
    templateUrl: 'app/jouer.component.html'
})
export class JouerComponent implements OnInit {
    task: string = '';
    reponse: Reponse[] = [
    ];
    remaining: number=0;

    tabreponses: Jouer;
    u: Utilisateur;
    bon: boolean;

    constructor(
        private _router: Router,
        private _jouerService: JouerService,
        private _uService: UtilisateurService,
        private _routeParams: RouteParams) {
        var r = confirm("Êtes-vous Prêt a jouer pendant 2m");
        if (r == true) {
            setTimeout(function () { window.location.href = "index.html"; }, 120000);
        } else {
            window.location.href = "index.html";
        }
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
        this.tabreponses = this._jouerService.getReponses(th);
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
    }
    getReponse() {
        return this.reponse;
    }
    getRemaining() {
        return this.remaining;
    }
    addTodo() {
        this.bon = false;
        if (this.task) {
            for (var i = 0; i < this.tabreponses.reponses.length; i++) {
                if (this.tabreponses.reponses[i].text.toLowerCase() == this.task.toLowerCase() && this.tabreponses.reponses[i].done == false) {
                    this.reponse.push({ "text": this.task, "done": true });
                    this.remaining++;
                    this.tabreponses.reponses[i].done = true;
                    this.bon = true;
                }
            }
            if (this.bon != true) {
                this.bon = false;
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