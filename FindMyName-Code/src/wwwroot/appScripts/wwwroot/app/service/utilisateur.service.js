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
var partie_service_1 = require('../service/partie.service');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map'); // we need to import this now
var UtilisateurService = (function () {
    function UtilisateurService(_pService, _tService, http) {
        this._pService = _pService;
        this._tService = _tService;
        this.http = http;
    }
    UtilisateurService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    UtilisateurService.prototype.getUser = function (id) {
        return this.http.get('http://localhost:54000/api/Utilisateur/' + id)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.getUserView = function (id) {
        return this.http.get('http://localhost:54000/api/Utilisateur/GetUserView/' + id)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.verificationConnexion = function (mail, password) {
        return this.http.get('http://localhost:54000/api/Utilisateur/verifConnexion/' + mail + '/' + password)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.verificationMailExist = function (mail) {
        return this.http.get('http://localhost:54000/api/Utilisateur/verifMail/' + mail)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.Same_mdp = function (id, password) {
        return this.http.get('http://localhost:54000/api/Utilisateur/sameMDP/' + id + '/' + password)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.ajouterUtilisateur = function (name, mail, password) {
        return this.http.get('http://localhost:54000/api/Utilisateur/ajoutus/' + name + '/' + mail + '/' + password)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.getOnlineutilisateur = function () {
        return this.http.get('http://localhost:54000/api/Utilisateur/getOnlineUtilisateur')
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.getName = function (u) {
        return this.http.get('http://localhost:54000/api/Utilisateur/getName/' + u)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.ChangerMeilleurScore = function (u, score) {
        this.http.get('http://localhost:54000/api/Utilisateur/ChangerMeilleurScore/' + u + '/' + score);
    };
    UtilisateurService.prototype.getPhoto = function (u) {
        return this.http.get('http://localhost:54000/api/Utilisateur/getPhoto/' + u)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.getPays = function (u) {
        return this.http.get('http://localhost:54000/api/Utilisateur/getPays/' + u)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.changePays = function (id, selectPays) {
        return this.http.get('http://localhost:54000/api/Utilisateur/changePays/' + id + '/' + selectPays)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService.prototype.changePhoto = function (id, selectPhoto) {
        return this.http.get('http://localhost:54000/api/Utilisateur/changePhoto/' + id + '/' + selectPhoto)
            .map(function (data) { return data.json(); });
    };
    UtilisateurService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [partie_service_1.PartieService, theme_service_1.ThemeService, http_1.Http])
    ], UtilisateurService);
    return UtilisateurService;
}());
exports.UtilisateurService = UtilisateurService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=utilisateur.service.js.map