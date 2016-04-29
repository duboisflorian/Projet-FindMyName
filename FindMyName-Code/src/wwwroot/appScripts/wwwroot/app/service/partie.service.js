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
    PartieService.prototype.getPartiesEnCours = function (us) {
        return this.http.get('http://localhost:54000/api/Partie/getPartieEnCours/' + us)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getEn_Cours = function (us, ami) {
        return this.http.get('http://localhost:54000/api/Partie/getEn_Cours/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getPartieEnCours = function (us, ami) {
        return this.http.get('http://localhost:54000/api/Partie/getPartieEnCours/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getHistorique = function (us, ami) {
        return this.http.get('http://localhost:54000/api/Partie/getHistorique/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getNbVictoire = function (us, ami) {
        return this.http.get('http://localhost:54000/api/Partie/getNbVictoire/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getNbDefaite = function (us, ami) {
        return this.http.get('http://localhost:54000/api/Partie/getNbDefaite/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getPartieExiste = function (us, ami) {
        return this.http.get('http://localhost:54000/api/Partie/getPartieExiste/' + us + '/' + ami)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.AjouterPartie = function (us, ami, th, score, j1, j2) {
        this.http.get('http://localhost:54000/api/Partie/AjouterPartie/' + us + '/' + ami + '/' + th + '/' + score + '/' + j1 + '/' + j2);
    };
    PartieService.prototype.ModifierPartie = function (us, ami, th, score, id_partie) {
        this.http.get('http://localhost:54000/api/Partie/ModifierPartie/' + us + '/' + ami + '/' + th + '/' + score + '/' + id_partie);
    };
    PartieService.prototype.getnbParties = function (u) {
        return this.http.get('http://localhost:54000/api/Partie/getnbParties/' + u)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getThemeFavori = function (u) {
        return this.http.get('http://localhost:54000/api/Partie/getThemeFavori/' + u)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getNbV = function (us) {
        return this.http.get('http://localhost:54000/api/Partie/getNbV/' + us)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.getNbD = function (us) {
        return this.http.get('http://localhost:54000/api/Partie/getNbD/' + us)
            .map(function (data) { return data.json(); });
    };
    PartieService.prototype.savePartie = function (id, us, th, remaining) {
        return this.http.get('http://localhost:54000/api/Partie/savePartie/' + id + '/' + us + '/' + th + '/' + remaining)
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