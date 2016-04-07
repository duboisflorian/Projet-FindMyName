import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { UTILISATEURS } from './mock-utilisateurs';
import { Ami } from './ami';
import { AmiService } from './ami.service';
import { UtilisateurService } from './utilisateur.service';
import { JouerChoixComponent } from './jouer-choix.component';
import { Utilisateur } from './utilisateur';
import { Partie } from './partie';
import { Manche } from './manche';
import { PartieService } from './partie.service';

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
    partie_en_cours: Partie[];

    constructor(
        private _router: Router,
        private _amiService: AmiService,
        private _pService: PartieService,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService) { }

    getAmis() {
        this.amis=this._amiService.getAmis(this.u.id);
    }
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }

    UserD(id: number) {
        this.partie_en_cours = this._pService.getPartieEnCours(id);
    }

    ngOnInit() {
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.getAmis();
        this.UserD(us);
        this.selectedAmi = null;
    }

    onSelect(ami: Ami) { this.selectedAmi = ami; }
    onSelectU() {this.selectedAmi = null;}

    gotoJouer(p: Partie) {
        if (this.selectedAmi == null) {
            for (var i = 0; i < this.partie_en_cours.length; i++) {
                if (this.partie_en_cours[i].id_partie == p.id_partie) {
                    if (this.partie_en_cours[i].manche[this.partie_en_cours[i].manche.length - 1].s1 == null || this.partie_en_cours[i].manche[this.partie_en_cours[i].manche.length - 1].s2 == null) {
                        if (this.partie_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.partie_en_cours[i].id_j2, th: this.partie_en_cours[i].manche[this.partie_en_cours[i].manche.length - 1].id_theme }]);
                        else
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.partie_en_cours[i].id_j1, th: this.partie_en_cours[i].manche[this.partie_en_cours[i].manche.length - 1].id_theme }]);
                    } else {
                        if (this.partie_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.partie_en_cours[i].id_j2}]);
                        else
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.partie_en_cours[i].id_j1}]);
                    }
                }
            }
        }
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