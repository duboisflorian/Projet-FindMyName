import { Utilisateur } from '../classe/utilisateur';
import { UTILISATEURS } from '../data/mock-utilisateurs';
import { Injectable } from 'angular2/core';
import { ThemeService } from '../service/theme.service';
import { PartieService } from '../service/partie.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now
import { Theme } from '../classe/theme';

@Injectable()
export class UtilisateurService {

    
    constructor(
        private _pService: PartieService,
        private _tService: ThemeService,
        private http: Http) { }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || {};
    }

    getUser(id :number) {
        return this.http.get('http://localhost:54000/api/Utilisateur/' + id)
            .map(data => data.json());
    }

    verificationConnexion(mail: string, password: string) {
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].mail == mail && UTILISATEURS[i].password == password)
                return UTILISATEURS[i];
        }
    }

    verificationMailExist(mail: string) {
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].mail == mail)
                return true;
        }

        return false;
    }

    Same_mdp(id: number, password: string) {
        return this.http.get('http://localhost:54000/api/Utilisateur/sameMDP/' + id + '/' + password)
            .map(data => data.json());

    }

    getlastid() {
        return UTILISATEURS[UTILISATEURS.length - 1].id;
    }

    ajouterUtilisateur(name: string, mail: string, password: string) {
        UTILISATEURS.push({ "id": this.getlastid() + 1, "name": name, "photo": "fichier/logo.jpg", "mail": mail, "password": password, "pays": "France","meilleurScore":0 })
        return this.getlastid();
    }


    getOnlineutilisateur() {
      //  return Math.floor(Math.random() * (UTILISATEURS.length - 1) + 1);
        return Math.floor(Math.random() * (15 - 1) + 1);
    }

    getName(u: number) {
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].id == u)
                return UTILISATEURS[i].name;
        }
    }

    ChangerMeilleurScore(u: number, score: number) {
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].id == u)
                if (UTILISATEURS[i].meilleurScore < score)
                    UTILISATEURS[i].meilleurScore = score;
        }
    }

        getPhoto(u:number){
            return this.http.get('http://localhost:54000/api/Utilisateur/getPhoto/' + u)
            .map(data => data.json());
    }

        getPays(u: number) {
            return this.http.get('http://localhost:54000/api/Utilisateur/getPays/' + u)
                .map(data => data.json());
        }

        changePays(id: number, selectPays: string) {
            this.http.get('http://localhost:54000/api/Utilisateur/changePays/' + id + '/' + selectPays);
        }

        changePhoto(id: number, selectPhoto: string) {
            return this.http.get('http://localhost:54000/api/Utilisateur/changePhoto/' + id + '/' + selectPhoto)
                .map(data => data.json());
        }

}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
