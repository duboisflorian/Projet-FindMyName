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

        /*return this.http.get('http://localhost:54000/api/Utilisateur/verifConnexion/' + mail + '/' + password)
            .map(data => data.json());*/
    }

    verificationMailExist(mail: string) {
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].mail == mail)
                return true;
        }

        return false;

        /*return this.http.get('http://localhost:54000/api/Utilisateur/verifMailExist/' + mail)
            .map(data => data.json());*/
    }

    Same_mdp(id: number, password: string) {
        return this.http.get('http://localhost:54000/api/Utilisateur/sameMDP/' + id + '/' + password)
            .map(data => data.json());

    }

    getlastid() {
        return UTILISATEURS[UTILISATEURS.length - 1].id;

        /*return this.http.get('http://localhost:54000/api/Utilisateur/getLastId')
            .map(data => data.json());*/
    }

    ajouterUtilisateur(name: string, mail: string, password: string) {
        UTILISATEURS.push({ "id": this.getlastid() + 1, "name": name, "photo": "fichier/logo.jpg", "mail": mail, "password": password, "pays": "France","meilleurScore":0 })
        return this.getlastid();

        /*return this.http.get('http://localhost:54000/api/Utilisateur/ajoutus/'+ name +'/' + mail + '/' + password)
            .map(data => data.json());*/
    }


    getOnlineutilisateur() {
      //  return Math.floor(Math.random() * (UTILISATEURS.length - 1) + 1);
       // return Math.floor(Math.random() * (15 - 1) + 1);

        return this.http.get('http://localhost:54000/api/Utilisateur/getOnlineUtilisateur')
            .map(data => data.json());
    }

    getName(u: number) {
        /*for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].id == u)
                return UTILISATEURS[i].name;
        }*/

        return this.http.get('http://localhost:54000/api/Utilisateur/getName/'+ u)
            .map(data => data.json());
    }

    ChangerMeilleurScore(u: number, score: number) {
        /*for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].id == u)
                if (UTILISATEURS[i].meilleurScore < score)
                    UTILISATEURS[i].meilleurScore = score;
        }*/

        this.http.get('http://localhost:54000/api/Utilisateur/ChangerMeilleurScore/' + u + '/' + score);
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
            return this.http.get('http://localhost:54000/api/Utilisateur/changePays/' + id + '/' + selectPays)
                .map(data => data.json());
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
