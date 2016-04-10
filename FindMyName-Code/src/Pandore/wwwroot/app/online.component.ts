import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { UTILISATEURS } from './mock-utilisateurs';
import { Ami } from './ami';
import { Online } from './online';
import { AmiService } from './ami.service';
import { UtilisateurService } from './utilisateur.service';
import { JouerChoixComponent } from './jouer-choix.component';
import { Utilisateur } from './utilisateur';
import { Partie } from './partie';
import { Manche } from './manche';
import { PartieService } from './partie.service';
import {RecherchePipeOnline} from './recherche-pipe-Online';

@Component({
    selector: 'my-online',
    pipes: [RecherchePipeOnline],
    templateUrl: 'app/online.component.html'
})
export class OnlineComponent implements OnInit {
    onlines: Online[];
    selectedOnline: Online;
    selectedUser: Utilisateur;
    onlineadd: number;
    utilisateurs: Utilisateur;
    t: Online;
    u: Utilisateur;
    parties_en_cours: Partie[];
    en_cours: boolean;
    partie_en_cours: Partie;
    victoire: number = 0;
    defaite: number = 0;
    historique: Partie[];
    r: number;
    i: number;
    b: boolean;
    searchOnline: string = '';

    constructor(
        private _router: Router,
        private _amiService: AmiService,
        private _pService: PartieService,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService) { }

    getOnline() {
        this.onlines = this._amiService.getOnline(this.u.id);
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
        this.getOnline();
        this.UserD(us);
        this.selectedOnline = null;
    }

    showDetails(h: Partie) {
        alert(h.id_partie);
    }

    onSelect(online: Online) {
        this.selectedOnline = online;
        this.en_cours = this._pService.getEn_Cours(this.u.id, online.id);
        if (this.en_cours == true) {
            this.partie_en_cours = this._pService.getPartieEnCours(this.u.id, online.id);
        } else {
            this.historique = this._pService.getHistorique(this.u.id, online.id);
            this.victoire = this._pService.getNbVictoire(this.u.id, online.id);
            this.defaite = this._pService.getNbDefaite(this.u.id, online.id);
        }
    }

    onSelectU() { this.selectedOnline = null; }

    gotoJouer(p: Partie) {
        if (this.selectedOnline == null) {
            for (var i = 0; i < this.parties_en_cours.length; i++) {
                if (this.parties_en_cours[i].id_partie == p.id_partie) {
                    if (this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s1 == null || this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s2 == null) {
                        if (this.parties_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.parties_en_cours[i].id_j2, th: this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].id_theme }]);
                        else
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.parties_en_cours[i].id_j1, th: this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].id_theme }]);
                    } else {
                        if (this.parties_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.parties_en_cours[i].id_j2 }]);
                        else
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.parties_en_cours[i].id_j1 }]);
                    }
                }
            }
        }
        if (this.en_cours == false)
            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.selectedOnline.id }]);

        if (this.en_cours == true) {
            if (p.manche[p.manche.length - 1].s1 == null || p.manche[p.manche.length - 1].s2 == null) {
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
        this._router.navigate(['Amis', { us: this.u.id }]);
    }
    gotoOnline() {
        this._router.navigate(['Online', { us: this.u.id }]);
    }

    jouerOnline() {
        this.b = false;

        for (this.i = 0; this.i < 200; this.i++) {
            this.r = this._uService.getOnlineutilisateur();
            if (this._amiService.getOnlineExiste(this.r, this.u.id)) {
                this._amiService.addOnline(this._uService.getUtilisateur(this.r), this.u.id);
                this._router.navigate(['JouerChoix', { us: this.u.id, id: this.r }]);
                this.b = true;
                break;
            }
        }

        if (!this.b) { alert("Aucun joueur trouvé pour le moment. Nous sommes désolé."); }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
