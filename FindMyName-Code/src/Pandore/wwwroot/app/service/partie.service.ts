import { Partie } from '../classe/partie';
import { Manche } from '../classe/manche';
import { PARTIES } from '../data/mock-parti';
import { Injectable } from 'angular2/core';

@Injectable()
export class PartieService {
    //toutes les parties d'un utilisateur en cours
    getPartiesEnCours(us: number) {
        var p: Partie[] = [];
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us || PARTIES[i].id_j2 == us) && PARTIES[i].s1 < 3 && PARTIES[i].s2 < 3)
                p.push(PARTIES[i]);
        }
        return p;
    }

    //savoir si il y a une partie en cours entre deux personnes
    getEn_Cours(us: number, ami: number) {
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us)) {
                if (PARTIES[i].player == null) {
                    return false;
                } else {
                    return true;
                }
            }  
        }
        return false;
    }

    getPartieEnCours(us: number, ami: number) {
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                return PARTIES[i];
        }
    }

    getHistorique(us: number, ami: number) {
        var p: Partie[] = [];
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                p.push(PARTIES[i]);
        }
        return p;
    }

    getNbVictoire(us: number, ami: number) {
        var nb =0;
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                if ((PARTIES[i].id_j1 == us && PARTIES[i].s1 > PARTIES[i].s2) || (PARTIES[i].s1 < PARTIES[i].s2 && PARTIES[i].id_j2 == us))
                    nb++;
        }
        return nb;
    }

    getNbDefaite(us: number, ami: number) {
        var nb = 0;
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                if ((PARTIES[i].id_j1 == us && PARTIES[i].s1 < PARTIES[i].s2) || (PARTIES[i].s1 > PARTIES[i].s2 && PARTIES[i].id_j2 == us))
                    nb++;
        }
        return nb;
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/