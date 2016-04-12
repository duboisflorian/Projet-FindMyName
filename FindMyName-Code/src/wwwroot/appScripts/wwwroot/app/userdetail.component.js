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
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var mock_utilisateurs_1 = require('./data/mock-utilisateurs');
var utilisateur_service_1 = require('./service/utilisateur.service');
var UserdetailComponent = (function () {
    function UserdetailComponent(_router, _routeParams, _uService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._uService = _uService;
    }
    UserdetailComponent.prototype.ngOnInit = function () {
        var us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
    };
    UserdetailComponent.prototype.gotoDeco = function () {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    };
    UserdetailComponent.prototype.gotoContact = function () {
        this._router.navigate(['Contact', { us: this.u.id }]);
    };
    UserdetailComponent.prototype.gotoDetail = function () {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    };
    UserdetailComponent.prototype.modifmdp = function (id) {
        if (id === undefined) {
            id = this.u.id;
        }
        if (this._uService.Same_mdp(id, this.password)) {
            alert("le mot de passe est identique");
        }
        else {
            alert("Le mot de passe a bien été changé");
        }
    };
    UserdetailComponent.prototype.loadListPhoto = function () {
        for (this.i = 0; this.i < mock_utilisateurs_1.UTILISATEURS.length; this.i++) {
            if (mock_utilisateurs_1.UTILISATEURS[this.i].id == this.u.id) {
                mock_utilisateurs_1.UTILISATEURS[this.i].photo = 'fichier/' + this.selectPhoto + '.jpg';
            }
        }
        alert("Photo changée");
    };
    UserdetailComponent.prototype.changeTheme = function () {
        //alert("Thème selectionner "+ this.selectTheme);
        for (this.i = 0; this.i < mock_utilisateurs_1.UTILISATEURS.length; this.i++) {
            if (mock_utilisateurs_1.UTILISATEURS[this.i].id == this.u.id) {
                mock_utilisateurs_1.UTILISATEURS[this.i].theme = this.selectTheme;
            }
        }
    };
    UserdetailComponent.prototype.changePays = function () {
        //alert("Pays " + this.selectPays);
        for (this.i = 0; this.i < mock_utilisateurs_1.UTILISATEURS.length; this.i++) {
            if (mock_utilisateurs_1.UTILISATEURS[this.i].id == this.u.id) {
                mock_utilisateurs_1.UTILISATEURS[this.i].pays = this.selectPays;
            }
        }
    };
    UserdetailComponent = __decorate([
        core_1.Component({
            selector: 'my-userdetail',
            templateUrl: 'app/userdetail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, utilisateur_service_1.UtilisateurService])
    ], UserdetailComponent);
    return UserdetailComponent;
}());
exports.UserdetailComponent = UserdetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=userdetail.component.js.map