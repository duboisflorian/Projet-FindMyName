import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { UTILISATEURS } from './mock-utilisateurs';
import { Ami } from './ami';
import { AmiService } from './ami.service';
import { UtilisateurService } from './utilisateur.service';
import { JouerChoixComponent } from './jouer-choix.component';
import { Utilisateur } from './utilisateur';

@Component({
    selector: 'my-amis',
    templateUrl: 'app/amis.component.html',
    directives: [JouerChoixComponent]
})
export class AmisComponent implements OnInit {
    amis: Ami[];
    selectedAmi: Ami;
    amiadd: number;
    utilisateurs: Utilisateur;
    t: Ami;

    constructor(
        private _router: Router,
        private _amiService: AmiService,
        private _uService: UtilisateurService) { }

    getAmis() {
        this._amiService.getAmis().then(amis => this.amis = amis);
    }

    ngOnInit() {
        this.getAmis();
    }

    onSelect(ami: Ami) { this.selectedAmi = ami; }

    gotoJouer() {
        this._router.navigate(['JouerChoix', { id: this.selectedAmi.id }]);
    }

    addAmi() {
        if (this.utilisateurs = this._uService.getUtilisateur(this.amiadd)) {
            if (this.t = this._amiService.getAmiExiste(this.amiadd)) {
                alert("cette personne est déjà dans tes amis");
                this.amiadd = null;
            } else {
                this._amiService.add(this.utilisateurs);
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