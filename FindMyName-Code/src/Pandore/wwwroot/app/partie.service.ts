import { Partie } from './partie';
import { Manche } from './manche';
import { PARTIES } from './mock-parti';
import { Injectable } from 'angular2/core';

@Injectable()
export class PartieService {
    i: number;
    getPartieEnCours(us: number) {
        var p: Partie[] = [];
        for (this.i = 0; this.i < PARTIES.length; this.i++) {
            if ((PARTIES[this.i].id_j1 == us || PARTIES[this.i].id_j2 == us) && PARTIES[this.i].s1 < 3 && PARTIES[this.i].s2 < 3)
                p.push(PARTIES[this.i]);
        }
        return p;
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/