import { Ami } from './ami';
import { Utilisateur } from './utilisateur';
import { AMIS } from './mock-amis';
import { Injectable } from 'angular2/core';


@Injectable()
export class AmiService {
    i: number;
    getAmis() {
        return Promise.resolve(AMIS);
    }

    // See the "Take it slow" appendix
    getAmisSlowly() {
        return new Promise<Ami[]>(resolve =>
            setTimeout(() => resolve(AMIS), 2000) // 2 seconds
        );
    }

    getAmi(id: number) {
       return Promise.resolve(AMIS).then(
            amis => amis.filter(ami => ami.id === id)[0]
        );
    }


    getAmiExiste(id: number) {

        for (this.i = 0; this.i < AMIS.length; this.i++) {
            if (AMIS[this.i].id == id)
                return AMIS[this.i];
        }
    }
    add(user: Utilisateur) {
        AMIS.push({ "id": user.id, "name": user.name, "photo": user.photo })
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/