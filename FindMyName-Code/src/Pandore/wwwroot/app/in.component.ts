import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { CoComponent } from './co.component';
import { HomeComponent } from './home.component';
import { UtilisateurService } from './utilisateur.service';
import { AmiService } from './ami.service';
import { Utilisateur } from './utilisateur';

@Component({
    selector: 'my-in',
    templateUrl: 'app/in.component.html'
})
export class InComponent {
    name: string;
    mail: string;
    password: string;
    confirmPasword: string;

    constructor(
        private _router: Router,
        private _uService: UtilisateurService,
        private _aService: AmiService) { }

    gotoHome() {
        this._router.navigate(['Home']);
    }

    gotoCo() {
        this._router.navigate(['Co']);
    }

    inscription() {
        if (this.password == this.confirmPasword) {
            if (this._uService.verificationMailExist(this.mail)) {
                alert("L'adresse mail existe déjà");
            }
            else {
                this._aService.création(this._uService.ajouterUtilisateur(this.name, this.mail, this.password));
                this._router.navigate(['Co']);
            }
        } else {
            alert("Les mots de passe ne sont pas identique");
        }
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
directives: [CoComponent, HomeComponent]*/