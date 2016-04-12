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
var theme_service_1 = require('../service/theme.service');
var partie_service_1 = require('../service/partie.service');
var UtilisateurService = (function () {
    function UtilisateurService(_pService, _tService) {
        this._pService = _pService;
        this._tService = _tService;
    }
    UtilisateurService.prototype.getUtilisateurs = function () {
        return Promise.resolve(mock_utilisateurs_1.UTILISATEURS);
    };
    UtilisateurService.prototype.getUtilisateur = function (id) {
        /* return Promise.resolve(UTILISATEURS).then(
             utilisateurs => utilisateurs.filter(utilisateur => utilisateur.id === id)[0]
         );*/
        for (var i = 0; i < mock_utilisateurs_1.UTILISATEURS.length; i++) {
            if (mock_utilisateurs_1.UTILISATEURS[i].id == id)
                return mock_utilisateurs_1.UTILISATEURS[i];
        }
    };
    UtilisateurService.prototype.verificationConnexion = function (mail, password) {
        for (var i = 0; i < mock_utilisateurs_1.UTILISATEURS.length; i++) {
            if (mock_utilisateurs_1.UTILISATEURS[i].mail == mail && mock_utilisateurs_1.UTILISATEURS[i].password == password)
                return mock_utilisateurs_1.UTILISATEURS[i];
        }
    };
    UtilisateurService.prototype.verificationMailExist = function (mail) {
        for (var i = 0; i < mock_utilisateurs_1.UTILISATEURS.length; i++) {
            if (mock_utilisateurs_1.UTILISATEURS[i].mail == mail)
                return true;
        }
        return false;
    };
    UtilisateurService.prototype.Same_mdp = function (id, password) {
        alert("id " + id);
        for (var i = 0; i < mock_utilisateurs_1.UTILISATEURS.length; i++) {
            if (mock_utilisateurs_1.UTILISATEURS[i].id == id) {
                if (mock_utilisateurs_1.UTILISATEURS[i].password == password) {
                    alert("password " + password);
                    return true;
                }
                else {
                    mock_utilisateurs_1.UTILISATEURS[i].password = password;
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
        mock_utilisateurs_1.UTILISATEURS.push({ "id": this.getlastid() + 1, "name": name, "photo": "fichier/logo.jpg", "mail": mail, "password": password, "pays": "France", "meilleurScore": 0 });
        return this.getlastid();
    };
    UtilisateurService.prototype.getOnlineutilisateur = function () {
        return Math.floor(Math.random() * (mock_utilisateurs_1.UTILISATEURS.length - 1) + 1);
    };
    UtilisateurService.prototype.getName = function (u) {
        for (var i = 0; i < mock_utilisateurs_1.UTILISATEURS.length; i++) {
            if (mock_utilisateurs_1.UTILISATEURS[i].id == u)
                return mock_utilisateurs_1.UTILISATEURS[i].name;
        }
    };
    UtilisateurService.prototype.ChangerMeilleurScore = function (u, score) {
        for (var i = 0; i < mock_utilisateurs_1.UTILISATEURS.length; i++) {
            if (mock_utilisateurs_1.UTILISATEURS[i].id == u)
                if (mock_utilisateurs_1.UTILISATEURS[i].meilleurScore < score)
                    mock_utilisateurs_1.UTILISATEURS[i].meilleurScore = score;
        }
    };
    UtilisateurService.prototype.getPhoto = function (u) {
        for (var i = 0; i < mock_utilisateurs_1.UTILISATEURS.length; i++) {
            if (mock_utilisateurs_1.UTILISATEURS[i].id == u)
                return mock_utilisateurs_1.UTILISATEURS[i].photo;
        }
    };
    UtilisateurService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [partie_service_1.PartieService, theme_service_1.ThemeService])
    ], UtilisateurService);
    return UtilisateurService;
})();
exports.UtilisateurService = UtilisateurService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=utilisateur.service.js.map