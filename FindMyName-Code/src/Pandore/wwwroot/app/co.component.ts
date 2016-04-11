import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HomeComponent } from './home.component';
import { InComponent } from './in.component';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';


@Component({
    selector: 'my-co',
    templateUrl: 'app/co.component.html'
})
export class CoComponent  {
    utilisateur: Utilisateur;
    mail: string;
    password: string;

    constructor(
        private _router: Router,
        private _uService: UtilisateurService) { }

    gotoIn() {
        this._router.navigate(['In']);
    }

    gotoHome() {
        this._router.navigate(['Home']);
    }

    gotocheat() {
        this._router.navigate(['Contact', { us: 4 }]);
    }

    connexion() {
        if (this.utilisateur = this._uService.verificationConnexion(this.mail, this.password)) {
            this._router.navigate(['Contact', { us: this.utilisateur.id }]);
        } else {
            alert("Le mot de passe ou l'e-mail n'existe pas.");
        }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//,
//directives: [HomeComponent, InComponent]