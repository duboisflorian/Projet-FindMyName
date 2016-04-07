import { Ami } from './ami';
import { Utilisateur } from './utilisateur';
import { AMIS } from './mock-amis';
import { Injectable } from 'angular2/core';
import { Lami } from './lami';


@Injectable()
export class AmiService {
    i: number;
    n: number;

    getAmis(id: number) {
        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == id)
                return AMIS[this.i].amis;
        }
    }

    getAmiExiste(id: number,u:number) {

        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == u)
                for (this.n = 0; this.n < AMIS[this.i].amis.length; this.n++) {
                    if (AMIS[this.i].amis[this.n].id==id)
                        return AMIS[this.i].amis[this.n];
                }
        }
    }
    add(user: Utilisateur, u: number) {
        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == u)
                AMIS[this.i].amis.push({ "id": user.id, "name": user.name, "photo": user.photo })
        }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/