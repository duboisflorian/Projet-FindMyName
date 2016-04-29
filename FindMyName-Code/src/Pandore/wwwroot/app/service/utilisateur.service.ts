import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class UtilisateurService {

    constructor(
        private http: Http) { }

    getUser(id :number) {
        return this.http.get('http://localhost:54000/api/Utilisateur/' + id)
            .map(data => data.json());
    }

    getUserView(id: number) {
        return this.http.get('http://localhost:54000/api/Utilisateur/GetUserView/' + id)
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
