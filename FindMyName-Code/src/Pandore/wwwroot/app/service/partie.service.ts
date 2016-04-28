import { Partie } from '../classe/partie';
import { Manche } from '../classe/manche';
import { PARTIES } from '../data/mock-parti';
import { Injectable } from 'angular2/core';
import { UtilisateurService } from '../service/utilisateur.service';
import { ThemeService } from '../service/theme.service';
import { THEMES } from '../data/mock-themes';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class PartieService {
    constructor(
        private _tService: ThemeService,
        private http: Http) { }

    //toutes les parties d'un utilisateur en cours
    getPartiesEnCours(us: number) {
      /*  var p: Partie[] = [];
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us || PARTIES[i].id_j2 == us) && PARTIES[i].s1 < 3 && PARTIES[i].s2 < 3)
                p.push(PARTIES[i]);
        }
        return p; */

        return this.http.get('http://localhost:54000/api/Partie/getPartieEnCours/' + us)
            .map(data => data.json());
    }

    //savoir si il y a une partie en cours entre deux personnes
    getEn_Cours(us: number, ami: number) {
       /* for (var i = PARTIES.length - 1; i >= 0; i--) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us)) {
                if (PARTIES[i].player == null) {
                    return false;
                } else {
                    return true;
                }
            }
        }
        return false;
        */
        return this.http.get('http://localhost:54000/api/Partie/getEn_Cours/' + us + '/' + ami)
            .map(data => data.json());
    }

    getPartieEnCours(us: number, ami: number) {
       /* for (var i = PARTIES.length - 1; i >= 0; i--) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                return PARTIES[i];
        }
        */
        return this.http.get('http://localhost:54000/api/Partie/getPartieEnCours/' + us + '/' + ami)
            .map(data => data.json());
    }

    getHistorique(us: number, ami: number) {
      /*  var p: Partie[] = [];
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                p.push(PARTIES[i]);
        }
        return p;
        */
        return this.http.get('http://localhost:54000/api/Partie/getHistorique/' + us + '/' + ami)
            .map(data => data.json());
    }

    getNbVictoire(us: number, ami: number) {
      /*   var nb = 0;
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                if (((PARTIES[i].id_j1 == us && PARTIES[i].s1 > PARTIES[i].s2) || (PARTIES[i].s1 < PARTIES[i].s2 && PARTIES[i].id_j2 == us)) && PARTIES[i].player == null)
                    nb++;
        }
        return nb;
    */
        return this.http.get('http://localhost:54000/api/Partie/getNbVictoire/' + us + '/' + ami)
            .map(data => data.json());
    }

    getNbDefaite(us: number, ami: number) {
      /*  var nb = 0;
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                if (((PARTIES[i].id_j1 == us && PARTIES[i].s1 < PARTIES[i].s2) || (PARTIES[i].s1 > PARTIES[i].s2 && PARTIES[i].id_j2 == us)) && PARTIES[i].player==null)
                    nb++;
        }
        return nb;
     */
        return this.http.get('http://localhost:54000/api/Partie/getNbDefaite/' + us + '/' + ami)
            .map(data => data.json());
    }

    getPartieExiste(us: number, ami: number) {
     /*   for (var i = PARTIES.length - 1; i >= 0; i--) {
            if (((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us)) && (PARTIES[i].player == us || PARTIES[i].player == ami ))
                return PARTIES[i];
        }
        return null; */

        return this.http.get('http://localhost:54000/api/Partie/getPartieExiste/' + us + '/' + ami)
            .map(data => data.json());
    }

    AjouterPartie(us: number, ami: number, th: number, score: number, j1: string, j2: string) {
      /*  var id_partie = PARTIES.length + 1;
        var theme = this._tService.getName(th);
       PARTIES.push({ "id_partie": id_partie, "id_j1": us, "id_j2": ami, "j1": j1, "j2": j2, "s1": 0, "s2": 0, "player": ami, "manche": [{ "id_theme": th, "theme": theme, "s1": score, "s2": null }, ] })
        */
        this.http.get('http://localhost:54000/api/Partie/AjouterPartie/' + us + '/' + ami +  '/' + th + '/' + score + '/' + j1 + '/' + j2 );
    }

    ModifierPartie(us: number, ami: number, th: number, score: number, id_partie: number) {
       /* for (var i = 0; i < PARTIES.length; i++) {
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
        */
        this.http.get('http://localhost:54000/api/Partie/ModifierPartie/' + us + '/' + ami + '/' + th + '/' + score + '/' + id_partie);

    }

    getnbParties( u: number) {
      /*  var nb = 0;
        for (var i = 0; i < PARTIES.length; i++) {
            if (PARTIES[i].id_j1 == u || PARTIES[i].id_j2 == u) 
                        nb++;    
        }
        return nb;
    */
        return this.http.get('http://localhost:54000/api/Partie/getnbParties/' + u)
            .map(data => data.json());
    }

    getThemeFavori(u: number) {
        /*
        var th = "acun pour le moment";
        var c1=0, c2=0;
        for (var i = 0; i < THEMES.length; i++) {
            for (var j = 0; j < PARTIES.length; j++) {
                if (PARTIES[j].id_j1 == u || PARTIES[j].id_j2 == u) {
                    for (var h = 0; h < PARTIES[j].manche.length; h++) {
                        if (th == "acun pour le moment") {
                            if (PARTIES[j].manche[h].id_theme == THEMES[i].id)
                                c1++;
                        } else {
                            if (PARTIES[j].manche[h].id_theme == THEMES[i].id) {
                                c2++;
                            }
                        }
                    }

                }
            }
            if (th == "acun pour le moment") {
                th = THEMES[i].text;
                c2 = 0;
            }
            if (c2 > c1) {
                c1 = c2;
                th = THEMES[i].text;
            }
            c2 = 0;
        } return th;
        */
        return this.http.get('http://localhost:54000/api/Partie/getThemeFavori/' + u)
            .map(data => data.json());
    }



    getNbV(us: number) {
      /*  var nb = 0;
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us || PARTIES[i].id_j2 == us) && PARTIES[i].player == null)
                if ((PARTIES[i].id_j1 == us && PARTIES[i].s1 > PARTIES[i].s2) || (PARTIES[i].s1 < PARTIES[i].s2 && PARTIES[i].id_j2 == us))
                    nb++;
        }
        return nb;
        */
        return this.http.get('http://localhost:54000/api/Partie/getNbV/' + us)
            .map(data => data.json());
    }

    getNbD(us: number) {
        /*
        var nb = 0;
        for (var i = 0; i < PARTIES.length; i++) {
            if ((PARTIES[i].id_j1 == us || PARTIES[i].id_j2 == us) && PARTIES[i].player == null)
                if ((PARTIES[i].id_j1 == us && PARTIES[i].s1 < PARTIES[i].s2) || (PARTIES[i].s1 > PARTIES[i].s2 && PARTIES[i].id_j2 == us))
                    nb++;
        }
        return nb;
        */
        return this.http.get('http://localhost:54000/api/Partie/getNbD/' + us)
            .map(data => data.json());
    }


}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/