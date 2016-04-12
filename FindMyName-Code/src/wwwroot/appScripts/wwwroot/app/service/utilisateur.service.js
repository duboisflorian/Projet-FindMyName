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
var mock_utilisateurs_1 = require('../data/mock-utilisateurs');
var core_1 = require('angular2/core');
var UtilisateurService = (function () {
    function UtilisateurService() {
    }
    UtilisateurService.prototype.getUtilisateurs = function () {
        return Promise.resolve(mock_utilisateurs_1.UTILISATEURS);
    };
    // See the "Take it slow" appendix
    UtilisateurService.prototype.getUtilisateursSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_utilisateurs_1.UTILISATEURS); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    UtilisateurService.prototype.getUtilisateur = function (id) {
        /* return Promise.resolve(UTILISATEURS).then(
             utilisateurs => utilisateurs.filter(utilisateur => utilisateur.id === id)[0]
         );*/
        for (this.i = 0; this.i < mock_utilisateurs_1.UTILISATEURS.length; this.i++) {
            if (mock_utilisateurs_1.UTILISATEURS[this.i].id == id)
                return mock_utilisateurs_1.UTILISATEURS[this.i];
        }
    };
    UtilisateurService.prototype.verificationConnexion = function (mail, password) {
        for (this.i = 0; this.i < mock_utilisateurs_1.UTILISATEURS.length; this.i++) {
            if (mock_utilisateurs_1.UTILISATEURS[this.i].mail == mail && mock_utilisateurs_1.UTILISATEURS[this.i].password == password)
                return mock_utilisateurs_1.UTILISATEURS[this.i];
        }
    };
    UtilisateurService.prototype.verificationMailExist = function (mail) {
        for (this.i = 0; this.i < mock_utilisateurs_1.UTILISATEURS.length; this.i++) {
            if (mock_utilisateurs_1.UTILISATEURS[this.i].mail == mail)
                return true;
        }
        return false;
    };
    UtilisateurService.prototype.Same_mdp = function (id, password) {
        alert("id " + id);
        for (this.i = 0; this.i < mock_utilisateurs_1.UTILISATEURS.length; this.i++) {
            if (mock_utilisateurs_1.UTILISATEURS[this.i].id == id) {
                if (mock_utilisateurs_1.UTILISATEURS[this.i].password == password) {
                    alert("password " + password);
                    return true;
                }
                else {
                    mock_utilisateurs_1.UTILISATEURS[this.i].password = password;
                    alert("password " + password);
                    return false;
                }
            }
        }
    };
    UtilisateurService.prototype.getlastid = function () {
        return mock_utilisateurs_1.UTILISATEURS[mock_utilisateurs_1.UTILISATEURS.length - 1].id;
    };
    UtilisateurService.prototype.ajouterUtilisateur = function (name, mail, password) {
        mock_utilisateurs_1.UTILISATEURS.push({ "id": this.getlastid() + 1, "name": name, "photo": "fichier/logo.jpg", "mail": mail, "password": password, "pays": "France", "theme": "sport", "meilleurScore": 15 });
        return this.getlastid();
    };
    UtilisateurService.prototype.getOnlineutilisateur = function () {
        return Math.floor(Math.random() * (mock_utilisateurs_1.UTILISATEURS.length - 1) + 1);
    };
    UtilisateurService.prototype.getPhoto = function (u) {
        for (this.i = 0; this.i < mock_utilisateurs_1.UTILISATEURS.length; this.i++) {
            if (mock_utilisateurs_1.UTILISATEURS[this.i].id == u)
                return mock_utilisateurs_1.UTILISATEURS[this.i].photo;
        }
    };
    UtilisateurService.prototype.getName = function (u) {
        for (this.i = 0; this.i < mock_utilisateurs_1.UTILISATEURS.length; this.i++) {
            if (mock_utilisateurs_1.UTILISATEURS[this.i].id == u)
                return mock_utilisateurs_1.UTILISATEURS[this.i].name;
        }
    };
    UtilisateurService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
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