"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var theme_service_1 = require('../service/theme.service');
var http_1 = require('angular2/http');
var PartieService = (function () {
    function PartieService(_tService, http) {
        this._tService = _tService;
        this.http = http;
    }
    //toutes les parties d'un utilisateur en cours
    PartieService.prototype.getPartiesEnCours = function (us) {
        /*  var p: Partie[] = [];
          for (var i = 0; i < PARTIES.length; i++) {
              if ((PARTIES[i].id_j1 == us || PARTIES[i].id_j2 == us) && PARTIES[i].s1 < 3 && PARTIES[i].s2 < 3)
                  p.push(PARTIES[i]);
          }
          return p; */
        return this.http.get('http://localhost:54000/api/Partie/getPartieEnCours/' + us)
            .map(function (data) { return data.json(); });
    };
    //savoir si il y a une partie en cours entre deux personnes
    PartieService.prototype.getEn_Cours = function (us, ami) {
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
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getPartieEnCours = function (us, ami) {
        /* for (var i = PARTIES.length - 1; i >= 0; i--) {
             if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                 return PARTIES[i];
         }
         */
        return this.http.get('http://localhost:54000/api/Partie/getPartieEnCours/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getHistorique = function (us, ami) {
        /*  var p: Partie[] = [];
          for (var i = 0; i < PARTIES.length; i++) {
              if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                  p.push(PARTIES[i]);
          }
          return p;
          */
        return this.http.get('http://localhost:54000/api/Partie/getHistorique/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getNbVictoire = function (us, ami) {
        /*   var nb = 0;
          for (var i = 0; i < PARTIES.length; i++) {
              if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                  if (((PARTIES[i].id_j1 == us && PARTIES[i].s1 > PARTIES[i].s2) || (PARTIES[i].s1 < PARTIES[i].s2 && PARTIES[i].id_j2 == us)) && PARTIES[i].player == null)
                      nb++;
          }
          return nb;
      */
        return this.http.get('http://localhost:54000/api/Partie/getNbVictoire/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getNbDefaite = function (us, ami) {
        /*  var nb = 0;
          for (var i = 0; i < PARTIES.length; i++) {
              if ((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us))
                  if (((PARTIES[i].id_j1 == us && PARTIES[i].s1 < PARTIES[i].s2) || (PARTIES[i].s1 > PARTIES[i].s2 && PARTIES[i].id_j2 == us)) && PARTIES[i].player==null)
                      nb++;
          }
          return nb;
       */
        return this.http.get('http://localhost:54000/api/Partie/getNbDefaite/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getPartieExiste = function (us, ami) {
        /*   for (var i = PARTIES.length - 1; i >= 0; i--) {
               if (((PARTIES[i].id_j1 == us && PARTIES[i].id_j2 == ami) || (PARTIES[i].id_j1 == ami && PARTIES[i].id_j2 == us)) && (PARTIES[i].player == us || PARTIES[i].player == ami ))
                   return PARTIES[i];
           }
           return null; */
        return this.http.get('http://localhost:54000/api/Partie/getPartieExiste/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.AjouterPartie = function (us, ami, th, score, j1, j2) {
        /*  var id_partie = PARTIES.length + 1;
          var theme = this._tService.getName(th);
         PARTIES.push({ "id_partie": id_partie, "id_j1": us, "id_j2": ami, "j1": j1, "j2": j2, "s1": 0, "s2": 0, "player": ami, "manche": [{ "id_theme": th, "theme": theme, "s1": score, "s2": null }, ] })
          */
        this.http.get('http://localhost:54000/api/Partie/AjouterPartie/' + us + '/' + ami + '/' + th + '/' + score + '/' + j1 + '/' + j2);
    };
    PartieService.prototype.ModifierPartie = function (us, ami, th, score, id_partie) {
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
    };
    PartieService.prototype.getnbParties = function (u) {
        /*  var nb = 0;
          for (var i = 0; i < PARTIES.length; i++) {
              if (PARTIES[i].id_j1 == u || PARTIES[i].id_j2 == u)
                          nb++;
          }
          return nb;
      */
        return this.http.get('http://localhost:54000/api/Partie/getnbParties/' + u)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getThemeFavori = function (u) {
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
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getNbV = function (us) {
        /*  var nb = 0;
          for (var i = 0; i < PARTIES.length; i++) {
              if ((PARTIES[i].id_j1 == us || PARTIES[i].id_j2 == us) && PARTIES[i].player == null)
                  if ((PARTIES[i].id_j1 == us && PARTIES[i].s1 > PARTIES[i].s2) || (PARTIES[i].s1 < PARTIES[i].s2 && PARTIES[i].id_j2 == us))
                      nb++;
          }
          return nb;
          */
        return this.http.get('http://localhost:54000/api/Partie/getNbV/' + us)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getNbD = function (us) {
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
            .map(function (data) { return data.json(); });
    };
    PartieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [theme_service_1.ThemeService, http_1.Http])
    ], PartieService);
    return PartieService;
}());
exports.PartieService = PartieService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=partie.service.js.map