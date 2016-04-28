import { Contact, ContactViewModel } from '../classe/contact';
import { Utilisateur } from '../classe/utilisateur';
import { CONTACTS } from '../data/mock-contact';
import { Injectable } from 'angular2/core';
import { ListeContact } from '../classe/liste-contact';
import { UtilisateurService } from '../service/utilisateur.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now
import { Theme } from '../classe/theme';
import {Res, ResID} from '../classe/res';

@Injectable()
export class ContactService {
    c: Contact[];
    vide: Contact[] = [];

    private _cUrl = 'http://localhost:54000/api/values/5'; 
    constructor(
        private _uService: UtilisateurService,
        private http: Http) { }

   private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || {};
    }

    getContacts(id: number, type: string) {
        return this.http.get('http://localhost:54000/api/Contact/getContacts/'+id+'/'+type)
            .map(data => data.json());
    }

    getAmiExiste(id: number, u: number) {
        return this.http.get('http://localhost:54000/api/Contact/getAmiExiste/' + id + '/' + u)
            .map(data => data.json());
    }


    getOnlineExiste(id: number, u: number) {
        return this.http.get('http://localhost:54000/api/Contact/getOnlineExiste/' + id + '/' + u)
            .map(data => data.json());
    }

    addAmi(user: Utilisateur, u: number) {
        this.http.get('http://localhost:54000/api/Contact/addAmi/' + user.id + '/' + u)
            .map(data => data.json());
    }

    addAmiOnline(user: Utilisateur, u: number) {
        this.http.get('http://localhost:54000/api/Contact/addAmiOnline/' + user.id + '/' + u)
            .map(data => data.json());
    }


    addOnline(user: Utilisateur, u: number) {
        this.http.get('http://localhost:54000/api/Contact/addOnline/' + user.id + '/' + u)
            .map(data => data.json());
    }

    création(id: number) {
        this.http.get('http://localhost:54000/api/Contact/création/' + id )
            .map(data => data.json());
    }

    getNbContact(u: number) {
        return this.http.get('http://localhost:54000/api/Contact/getNbContact/' + u)
            .map(data => data.json());
    }

    Add(contactadd :number,user: number, u: number) {
        return this.http.get('http://localhost:54000/api/Contact/Add/'+ contactadd + '/' + user + '/' + u)
            .map(data => data.json());
    }

    getObjectData() {
        return this.http.get('http://localhost:54000/api/values/5')
            .map(this.extractData);
    }

    Jouer(i:number) {
        return this.http.get('http://localhost:54000/api/Contact/Jouer/' + i)
            .map(data => data.json());
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
