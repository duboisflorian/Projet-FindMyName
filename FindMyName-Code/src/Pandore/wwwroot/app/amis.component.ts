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
    parties_en_cours: Partie[];
    en_cours: boolean;
    partie_en_cours: Partie;
    victoire: number = 0;
    defaite: number = 0;
    historique: Partie[];
    selectedDetails: Partie;


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
        this.parties_en_cours = this._pService.getPartiesEnCours(id);
    }

    ngOnInit() {
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.getAmis();
        this.UserD(us);
        this.selectedAmi = null;
    }

    showDetails(h: Partie) {
        this.selectedAmi = null;
        this.selectedDetails = h;
        alert(h.id_partie);
    }

    onSelect(ami: Ami) {
        this.selectedAmi = ami;
        this.selectedDetails = null;
        this.en_cours = this._pService.getEn_Cours(this.u.id, ami.id);
        if (this.en_cours == true) {
            this.partie_en_cours = this._pService.getPartieEnCours(this.u.id, ami.id);
        } else {
            this.historique = this._pService.getHistorique(this.u.id, ami.id);
            this.victoire = this._pService.getNbVictoire(this.u.id, ami.id);
            this.defaite = this._pService.getNbDefaite(this.u.id, ami.id);
        }
    }

    onSelectU() { this.selectedAmi = null; this.selectedDetails = null;}

    gotoJouer(p: Partie) {
        if (this.selectedAmi == null) {
            for (var i = 0; i < this.parties_en_cours.length; i++) {
                if (this.parties_en_cours[i].id_partie == p.id_partie) {
                    if (this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s1 == null || this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s2 == null) {
                        if (this.parties_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.parties_en_cours[i].id_j2, th: this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].id_theme }]);
                        else
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.parties_en_cours[i].id_j1, th: this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].id_theme }]);
                    } else {
                        if (this.parties_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.parties_en_cours[i].id_j2}]);
                        else
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.parties_en_cours[i].id_j1}]);
                    }
                }
            }
        }
        if (this.en_cours == false)
            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.selectedAmi.id }]);

        if (this.en_cours == true) {
            if (p.manche[p.manche.length - 1].s1 == null ||p.manche[p.manche.length - 1].s2 == null) {
                if (p.id_j1 == this.u.id)
                    this._router.navigate(['Jouer', { us: this.u.id, id: p.id_j2, th: p.manche[p.manche.length - 1].id_theme }]);
                else
                    this._router.navigate(['Jouer', { us: this.u.id, id: p.id_j1, th: p.manche[p.manche.length - 1].id_theme }]);
            } else {
                if (p.id_j1 == this.u.id)
                    this._router.navigate(['JouerChoix', { us: this.u.id, id: p.id_j2 }]);
                else
                    this._router.navigate(['JouerChoix', { us: this.u.id, id: p.id_j1 }]);
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
