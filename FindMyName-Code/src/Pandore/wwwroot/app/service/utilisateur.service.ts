import { Utilisateur } from '../classe/utilisateur';
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
        return this.http.get('http://localhost:54000/api/Utilisateur/verifConnexion/' + mail + '/' + password)
            .map(data => data.json());
    }

    verificationMailExist(mail: string) {
        return this.http.get('http://localhost:54000/api/Utilisateur/verifMail/' + mail)
            .map(data => data.json());
    }

    Same_mdp(id: number, password: string) {
        return this.http.get('http://localhost:54000/api/Utilisateur/sameMDP/' + id + '/' + password)
            .map(data => data.json());

    }

    ajouterUtilisateur(name: string, mail: string, password: string) {
        return this.http.get('http://localhost:54000/api/Utilisateur/ajoutus/'+ name +'/' + mail + '/' + password)
            .map(data => data.json());
    }


    getOnlineutilisateur() {
        return this.http.get('http://localhost:54000/api/Utilisateur/getOnlineUtilisateur')
            .map(data => data.json());
    }

    getName(u: number) {
        return this.http.get('http://localhost:54000/api/Utilisateur/getName/'+ u)
            .map(data => data.json());
    }

    ChangerMeilleurScore(u: number, score: number) {
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
