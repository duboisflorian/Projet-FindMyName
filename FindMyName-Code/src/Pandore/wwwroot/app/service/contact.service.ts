import { Contact } from '../classe/contact';
import { Utilisateur } from '../classe/utilisateur';
import { CONTACTS } from '../data/mock-contact';
import { Injectable } from 'angular2/core';
import { ListeContact } from '../classe/liste-contact';
import { UtilisateurService } from '../service/utilisateur.service';


@Injectable()
export class ContactService {
    c: Contact[];
    vide: Contact[]=[];

    constructor(
        private _uService: UtilisateurService) { }

    getContacts(id: number, type: string) {
        this.c = [];
        for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == id) {
                for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                    if (CONTACTS[i].contact[n].type == type) {
                        this.c.push(CONTACTS[i].contact[n]);
                    }
                }
            }

        }
        return this.c;
    }

    getAmiExiste(id: number, u: number) {
            for (var i = 0; i < CONTACTS.length; i++) {
                if (CONTACTS[i].id == u) {
                    for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                        if (CONTACTS[i].contact[n].id == id && CONTACTS[i].contact[n].type == "ami")
                            return CONTACTS[i].contact[n];
                    }
                }
            }
        }


    getOnlineExiste(id: number, u: number) {

        for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u)
                for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                    if (CONTACTS[i].contact[n].id == id )
                        return false;
                }
        }

        if (id == u) {
            return false;
        }

        return true;
    }

    addAmi(user: Utilisateur, u: number) {
        for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u)
                CONTACTS[i].contact.push({ "id": user.id, "name": user.name, "photo": user.photo, "type": "ami"})
            if (CONTACTS[i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                CONTACTS[i].contact.push({ "id": u, "name": N, "photo": P, "type": "ami"})
            }
        }
    }

    addOnline(user: Utilisateur, u: number) {
        for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u)
                CONTACTS[i].contact.push({ "id": user.id, "name": user.name, "photo": user.photo, "type": "online" })
            if (CONTACTS[i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                CONTACTS[i].contact.push({ "id": u, "name": N, "photo": P, "type": "online" })
            }
        }
    }

    création(id: number) {
        CONTACTS.push({ "id": id, "contact": this.vide});
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
