import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { UTILISATEURS } from './mock-utilisateurs';
import { Ami } from './ami';
import { AmiService } from './ami.service';
import { UtilisateurService } from './utilisateur.service';
import { JouerChoixComponent } from './jouer-choix.component';
import { Utilisateur } from './utilisateur';

@Component({
    selector: 'my-amis',
    templateUrl: 'app/amis.component.html'
})
export class AmisComponent implements OnInit {
    amis: Ami[];
    selectedAmi: Ami;
    selectedUser: Utilisateur;
    amiadd: number;
    utilisateurs: Utilisateur;
    t: Ami;
    u: Utilisateur;

    constructor(
        private _router: Router,
        private _amiService: AmiService,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService) { }

    getAmis() {
        this.amis=this._amiService.getAmis(this.u.id);
    }
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }
    ngOnInit() {

        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.getAmis();
    }

    onSelect(ami: Ami) { this.selectedAmi = ami; }
    onSelectU() {this.selectedAmi = null;}

    gotoJouer() {
        this._router.navigate(['JouerChoix', { us: this.u.id,id: this.selectedAmi.id }]);
    }
    gotoDeco() {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    }
    gotoAmis() {
        this._router.navigate(['Amis', { us: this.u.id}]);
    }
    gotoOnline() {
        this._router.navigate(['Online', { us: this.u.id }]);
    }
    addAmi() {
        if (this.utilisateurs = this._uService.getUtilisateur(this.amiadd)) {
            if (this.t = this._amiService.getAmiExiste(this.amiadd, this.u.id)) {
                alert("cette personne est déjà dans tes amis");
                this.amiadd = null;
            } else {
                this._amiService.add(this.utilisateurs, this.u.id);
                this.amiadd = null;
            }
        } else {
            alert("cette personne n'existe pas");
            this.amiadd = null;
        }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/