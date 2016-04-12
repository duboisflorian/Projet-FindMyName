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
var mock_parti_1 = require('../data/mock-parti');
var core_1 = require('angular2/core');
var PartieService = (function () {
    function PartieService() {
    }
    //toutes les parties d'un utilisateur en cours
    PartieService.prototype.getPartiesEnCours = function (us) {
        var p = [];
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us || mock_parti_1.PARTIES[i].id_j2 == us) && mock_parti_1.PARTIES[i].s1 < 3 && mock_parti_1.PARTIES[i].s2 < 3)
                p.push(mock_parti_1.PARTIES[i]);
        }
        return p;
    };
    //savoir si il y a une partie en cours entre deux personnes
    PartieService.prototype.getEn_Cours = function (us, ami) {
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us)) {
                if (mock_parti_1.PARTIES[i].player == null) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        return false;
    };
    PartieService.prototype.getPartieEnCours = function (us, ami) {
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us))
                return mock_parti_1.PARTIES[i];
        }
    };
    PartieService.prototype.getHistorique = function (us, ami) {
        var p = [];
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us))
                p.push(mock_parti_1.PARTIES[i]);
        }
        return p;
    };
    PartieService.prototype.getNbVictoire = function (us, ami) {
        var nb = 0;
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us))
                if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].s1 > mock_parti_1.PARTIES[i].s2) || (mock_parti_1.PARTIES[i].s1 < mock_parti_1.PARTIES[i].s2 && mock_parti_1.PARTIES[i].id_j2 == us))
                    nb++;
        }
        return nb;
    };
    PartieService.prototype.getNbDefaite = function (us, ami) {
        var nb = 0;
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us))
                if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].s1 < mock_parti_1.PARTIES[i].s2) || (mock_parti_1.PARTIES[i].s1 > mock_parti_1.PARTIES[i].s2 && mock_parti_1.PARTIES[i].id_j2 == us))
                    nb++;
        }
        return nb;
    };
    PartieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
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