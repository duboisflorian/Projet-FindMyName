import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class PartieService {
    constructor(
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

    savePartie(id: number, us: number, th: number, remaining: number){
    return this.http.get('http://localhost:54000/api/Partie/savePartie/' + id + '/' + us + '/' + th + '/' + remaining)
        .map(data => data.json());
}

}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/