import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { UTILISATEURS } from './mock-utilisateurs';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur';
import { PHOTOS } from './mock-photo';

@Component({
    selector: 'my-userdetail',
    templateUrl: 'app/userdetail.component.html'
})
export class UserdetailComponent implements OnInit {

    utilisateurs: Utilisateur;
    u: Utilisateur;
    password: string;
    id: number;
    i: number;
    selectPhoto: string;

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService) { }


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
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }
    modifmdp() {
        
        if (this._uService.Same_mdp(this.id, this.password)) {
            alert("le mot de passe est identique");
            alert(this.id);

        }
        else {
            alert("Le mot de passe a bien été changé");
            
        }
    }

    loadListPhoto() {
        for (this.i = 0; this.i < UTILISATEURS.length; this.i++) {
            if (UTILISATEURS[this.i].id == 6) {
                UTILISATEURS[this.i].photo = 'fichier/' + this.selectPhoto + '.jpg';
            }
        }
        alert("Photo changée");

    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/