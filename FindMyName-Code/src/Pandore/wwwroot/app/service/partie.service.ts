import { Partie } from '../classe/partie';
import { Manche } from '../classe/manche';
import { PARTIES } from '../data/mock-parti';
import { Injectable } from 'angular2/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { ThemeService } from '../service/theme.service';
import { THEMES } from '../data/mock-themes';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class PartieService {
    constructor(
        private _tService: ThemeService,
        private http: Http) { }

    getPartiesEnCours(us: number) {
        return this.http.get('http://localhost:54000/api/Partie/getPartieEnCours/' + us)
            .map(data => data.json());
    }

    getEn_Cours(us: number, ami: number) {
        return this.http.get('http://localhost:54000/api/Partie/getEn_Cours/' + us + '/' + ami)
            .map(data => data.json());
    }

    getPartieEnCours(us: number, ami: number) {
        return this.http.get('http://localhost:54000/api/Partie/getPartieEnCours/' + us + '/' + ami)
            .map(data => data.json());
    }

    getHistorique(us: number, ami: number) {
        return this.http.get('http://localhost:54000/api/Partie/getHistorique/' + us + '/' + ami)
            .map(data => data.json());
    }

    getNbVictoire(us: number, ami: number) {
        return this.http.get('http://localhost:54000/api/Partie/getNbVictoire/' + us + '/' + ami)
            .map(data => data.json());
    }

    getNbDefaite(us: number, ami: number) {
        return this.http.get('http://localhost:54000/api/Partie/getNbDefaite/' + us + '/' + ami)
            .map(data => data.json());
    }

    getPartieExiste(us: number, ami: number) {
        return this.http.get('http://localhost:54000/api/Partie/getPartieExiste/' + us + '/' + ami)
            .map(data => data.json());
    }

    AjouterPartie(us: number, ami: number, th: number, score: number, j1: string, j2: string) {
        this.http.get('http://localhost:54000/api/Partie/AjouterPartie/' + us + '/' + ami +  '/' + th + '/' + score + '/' + j1 + '/' + j2 );
    }

    ModifierPartie(us: number, ami: number, th: number, score: number, id_partie: number) {

        this.http.get('http://localhost:54000/api/Partie/ModifierPartie/' + us + '/' + ami + '/' + th + '/' + score + '/' + id_partie);
    }

    getnbParties( u: number) {
        return this.http.get('http://localhost:54000/api/Partie/getnbParties/' + u)
            .map(data => data.json());
    }

    getThemeFavori(u: number) {
        return this.http.get('http://localhost:54000/api/Partie/getThemeFavori/' + u)
            .map(data => data.json());
    }



    getNbV(us: number) {
        return this.http.get('http://localhost:54000/api/Partie/getNbV/' + us)
            .map(data => data.json());
    }

    getNbD(us: number) {
        return this.http.get('http://localhost:54000/api/Partie/getNbD/' + us)
            .map(data => data.json());
    }


}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/