import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { UTILISATEURS } from './mock-utilisateurs';
import { UtilisateurService } from './utilisateur.service';
import { JouerChoixComponent } from './jouer-choix.component';
import { Utilisateur } from './utilisateur';

@Component({
    selector: 'my-online',
    templateUrl: 'app/online.component.html'
})
export class OnlineComponent implements OnInit {

    utilisateurs: Utilisateur;
    u: Utilisateur;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService) { }


    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }
    ngOnInit() {
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
    }

    gotoDeco() {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    }
    gotoAmis() {
        this._router.navigate(['Amis', { us: this.u.id }]);
    }
    gotoOnline() {
        this._router.navigate(['Online', { us: this.u.id }]);
    }

}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/