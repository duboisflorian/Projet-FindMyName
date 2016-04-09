import { Ami } from './ami';
import { Utilisateur } from './utilisateur';
import { AMIS } from './mock-amis';
import { Injectable } from 'angular2/core';
import { Lami } from './lami';
import { Online } from './online';
import { UtilisateurService } from './utilisateur.service';


@Injectable()
export class AmiService {
    i: number;
    n: number;
    o: Online[] = [];
    a: Ami[] = [];
    
    constructor(
        private _uService: UtilisateurService) { }

    getAmis(id: number) {
        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == id)
                return AMIS[this.i].amis;
        }
    }

    getOnline(id: number) {
        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == id)
                return AMIS[this.i].online;
        }
    }


    getAmiExiste(id: number, u: number) {

        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == u)
                for (this.n = 0; this.n < AMIS[this.i].amis.length; this.n++) {
                    if (AMIS[this.i].amis[this.n].id == id)
                        return AMIS[this.i].amis[this.n];
                }
        }
    }

    getOnlineExiste(id: number, u: number) {

        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == u)
                for (this.n = 0; this.n < AMIS[this.i].amis.length; this.n++) {
                    if (AMIS[this.i].amis[this.n].id == id)
                        return false;
                }
        }

        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == u)
                for (this.n = 0; this.n < AMIS[this.i].online.length; this.n++) {
                    if (AMIS[this.i].online[this.n].id == id)
                        return false;
                }
        }

        if (id == u) {
            return false;
        }

        return true;
    }

    add(user: Utilisateur, u: number) {
        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == u)
                AMIS[this.i].amis.push({ "id": user.id, "name": user.name, "photo": user.photo })
            if (AMIS[this.i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                AMIS[this.i].amis.push({ "id": u, "name": N, "photo": P})
            }
        }
    }

    addOnline(user: Utilisateur, u: number) {
        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == u)
                AMIS[this.i].online.push({ "id": user.id, "name": user.name, "photo": user.photo })
            if (AMIS[this.i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                AMIS[this.i].online.push({ "id": u, "name": N, "photo": P })
            }
        }
    }

    création(id: number) {
        AMIS.push({ "id": id, "amis": this.a, "online": this.o });
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
