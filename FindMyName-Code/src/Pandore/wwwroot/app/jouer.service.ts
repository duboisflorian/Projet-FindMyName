import { Jouer } from './jouer';
import { Reponse } from './reponses';
import { Reponses } from './mock-reponses';
import { Injectable } from 'angular2/core';

@Injectable()
export class JouerService {
    i: number;
    /*getReponses() {
        return Promise.resolve(Reponses);
    }

    // See the "Take it slow" appendix
    getReponseSlowly() {
        return new Promise<Jouer[]>(resolve =>
            setTimeout(() => resolve(Reponses), 2000) // 2 seconds
        );
    }

    getReponse(id: number) {
        return Promise.resolve(Jouer).then(
            jouer => jouer.filter(reponse => reponse.id === id)[0]
        );
    }*/

    // See the "Take it slow" appendix
    getReponsesSlowly() {
        return new Promise<Jouer[]>(resolve =>
            setTimeout(() => resolve(Reponses), 2000) // 2 seconds
        );
    }

    getReponse(i: number) {
        return Reponses[0].reponses[i].text;
    }

    getDone(i: number) {
        return Reponses[0].reponses[i].done;
    }

    setDone(i: number, bool: boolean) {
        Reponses[0].reponses[i].done == bool;
    }

    getReponses(id: number) {
        for (this.i = 0; this.i < Reponses.length; this.i++) {
            if (Reponses[this.i].id == id)
                return Reponses[this.i];
        }
    }
    getTaille(i : number) {
        return Reponses[i].reponses.length;
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/