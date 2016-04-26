import { Contact } from '../classe/contact';
import { Utilisateur } from '../classe/utilisateur';
import { CONTACTS } from '../data/mock-contact';
import { Injectable } from 'angular2/core';
import { ListeContact } from '../classe/liste-contact';
import { UtilisateurService } from '../service/utilisateur.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now
import { Theme } from '../classe/theme';


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
     /*private handleError(error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getNom() {
        return this.http.get(this._cUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }*/

    getContacts(id: number, type: string) {
        /*this.c = [];
        for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == id) {
                for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                    if (CONTACTS[i].contact[n].type == type) {
                        this.c.push(CONTACTS[i].contact[n]);
                    }
                }
            }

        }
        return this.c;*/
        return this.http.get('http://localhost:54000/api/Contact/getContacts/'+id+'/'+type)
            .map(data => data.json());
    }

    getAmiExiste(id: number, u: number) {
       /* for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u) {
                for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                    if (CONTACTS[i].contact[n].id == id && CONTACTS[i].contact[n].type == "ami")
                        return CONTACTS[i].contact[n];
                }
            }
        }*/
        return this.http.get('http://localhost:54000/api/Contact/getAmiExiste/' + id + '/' + u)
            .map(data => data.json());
    }


    getOnlineExiste(id: number, u: number) {

        /*for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u)
                for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                    if (CONTACTS[i].contact[n].id == id && CONTACTS[i].contact[n].type == "online")
                        return true;
                }
        }
        return false;*/
        return this.http.get('http://localhost:54000/api/Contact/getOnlineExiste/' + id + '/' + u)
            .map(data => data.json());
    }

    addAmi(user: Utilisateur, u: number) {
        /*for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u)
                CONTACTS[i].contact.push({ "id": user.id, "name": user.name, "photo": user.photo, "type": "ami" })
            if (CONTACTS[i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                CONTACTS[i].contact.push({ "id": u, "name": N, "photo": P, "type": "ami" })
            }
        }*/
        this.http.get('http://localhost:54000/api/Contact/addAmi/' + user.id + '/' + u)
            .map(data => data.json());
    }

    addAmiOnline(user: Utilisateur, u: number) {
       /* for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u) {
                for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                    if (CONTACTS[i].contact[n].id == user.id )
                        CONTACTS[i].contact[n].type = "ami";
                }
            }
        }*/
        this.http.get('http://localhost:54000/api/Contact/addAmiOnline/' + user.id + '/' + u)
            .map(data => data.json());
    }


    addOnline(user: Utilisateur, u: number) {
      /*  for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u)
                CONTACTS[i].contact.push({ "id": user.id, "name": user.name, "photo": user.photo, "type": "online" })
            if (CONTACTS[i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                CONTACTS[i].contact.push({ "id": u, "name": N, "photo": P, "type": "online" })
            }
        }*/
        this.http.get('http://localhost:54000/api/Contact/addOnline/' + user.id + '/' + u)
            .map(data => data.json());
    }

    création(id: number) {
        /*CONTACTS.push({ "id": id, "contact": this.vide });*/
        this.http.get('http://localhost:54000/api/Contact/création/' + id )
            .map(data => data.json());
    }

    getNbContact(u: number) {
        /*var nb=0;
        //alert(CONTACTS.length);
        for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u) {
                //alert(CONTACTS[i].contact.length);
                for (var g = 0; g < CONTACTS[i].contact.length; g++) {
                    if (CONTACTS[i].contact[g].type == "ami") {
                        nb++;
                    }
                }
            }
        }
        return nb;*/
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
            .map(this.extractData);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
