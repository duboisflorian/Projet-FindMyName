﻿import { Partie } from '../classe/partie';
import { Manche } from '../classe/manche';
import { PARTIES } from '../data/mock-parti';
import { Injectable } from 'angular2/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { ThemeService } from '../service/theme.service';

@Injectable()
export class PartieService {


    constructor(
        private _uService: UtilisateurService,
        private _tService: ThemeService) { }

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
        for (var i = PARTIES.length - 1; i >= 0; i--) {
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
        for (var i = PARTIES.length - 1; i >= 0; i--) {
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
        var nb = 0;
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

    getPartieExiste(us: number, ami: number) {
        for (var i = PARTIES.length - 1; i >= 0; i--) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                return PARTIES[i];
        }
        return null;
    }

    AjouterPartie(us: number, ami: number, th: number, score: number) {
        var j1 = this._uService.getName(us);
        var j2 = this._uService.getName(ami);
        var id_partie = PARTIES.length + 1;
        var theme = this._tService.getName(th);
        alert(ami);
        PARTIES.push({ "id_partie": id_partie, "id_j1": us, "id_j2": ami, "j1": j1, "j2": j2, "s1": 0, "s2": 0, "player": ami, "manche": [{ "id_theme": th, "theme": theme, "s1": score, "s2": null }, ] })
    }

    ModifierPartie(us: number, ami: number, th: number, score: number, partie: Partie) {
        for (var i = 0; i < PARTIES.length; i++) {
            if (PARTIES[i].id_partie == partie.id_partie) {
                var n = PARTIES[i].manche.length - 1;
                if (PARTIES[i].manche[n].s1 == null) {
                    PARTIES[i].manche[n].s1 = score;
                    if (PARTIES[i].manche[n].s1 > PARTIES[i].manche[n].s2) {
                        PARTIES[i].s1 = PARTIES[i].s1 + 1;
                    }
                    if (PARTIES[i].manche[n].s1 < PARTIES[i].manche[n].s2) {
                        PARTIES[i].s2 = PARTIES[i].s2 + 1;
                    }
                    if (PARTIES[i].s2 == 3 || PARTIES[i].s1 == 3) {
                        alert("partie fini");
                        PARTIES[i].player = null;
                    }
                } else if (PARTIES[i].manche[n].s2 == null) {
                    PARTIES[i].manche[n].s2 = score;
                    if (PARTIES[i].manche[n].s1 > PARTIES[i].manche[n].s2) {
                        PARTIES[i].s1 = PARTIES[i].s1 + 1;
                    }
                    if (PARTIES[i].manche[n].s1 < PARTIES[i].manche[n].s2) {
                        PARTIES[i].s2 = PARTIES[i].s2 + 1;
                    }
                    if (PARTIES[i].s2 == 3 || PARTIES[i].s1 == 3) {
                        PARTIES[i].player = null;
                        alert("partie fini");
                    }
                } else {
                    var theme = this._tService.getName(th);
                    if (us == PARTIES[i].id_j1)
                        PARTIES[i].manche.push({ "id_theme": th, "theme": theme, "s1": score, "s2": null });
                    else
                        PARTIES[i].manche.push({ "id_theme": th, "theme": theme, "s1": null, "s2": score });

                    PARTIES[i].player = ami;
                }
            }
        }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/