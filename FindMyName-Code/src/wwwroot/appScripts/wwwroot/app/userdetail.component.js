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
var utilisateur_service_1 = require('./service/utilisateur.service');
var partie_service_1 = require('./service/partie.service');
var contact_service_1 = require('./service/contact.service');
var UserdetailComponent = (function () {
    function UserdetailComponent(_router, _routeParams, _pService, _cService, _uService) {
        this._router = _router;
        this._routeParams = _routeParams;
        this._pService = _pService;
        this._cService = _cService;
        this._uService = _uService;
        this.selectPays = "";
        this.theme_favori = "";
        this.nbv = 0;
        this.nbd = 0;
        this.pays = ['France', 'Allemagne', 'Chine', 'Japon', 'Etats-Unis', 'Royaume-Uni', 'Canada'];
        this.u2 = { "id": 1, "name": "en attente", "photo": "fichier/logo.jpg", "mail": "en atttente", "password": "", "pays": "", "meilleurScore": 0 };
    }
    UserdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var us = +this._routeParams.get('us');
        this._uService.getUser(us)
            .subscribe(function (data) { return _this.u2 = data; });
        this._pService.getnbParties(us).subscribe(function (data) { return _this.nbparties = data; });
        this._pService.getThemeFavori(us).subscribe(function (data) { return _this.theme_favori2 = data; });
        this.sTimeout = setTimeout(function () { return _this.theme_favori = _this.theme_favori2.text; }, 900);
        this.selectPhoto = "fichier/logo.jpg";
        this._uService.getPhoto(us)
            .subscribe(function (data) { return _this.photo = data; });
        this.sTimeout = setTimeout(function () {
            _this.selectPhoto = _this.photo.text;
            if (_this.selectPhoto == "fichier/logo.jpg") {
                _this.selectPhoto = "logo";
            }
            else if (_this.selectPhoto == "fichier/arsenal.jpg") {
                _this.selectPhoto = "arsenal";
            }
            else if (_this.selectPhoto == "fichier/barca.jpg") {
                _this.selectPhoto = "barca";
            }
            else if (_this.selectPhoto == "fichier/psg.jpg") {
                _this.selectPhoto = "psg";
            }
            else if (_this.selectPhoto == "fichier/ol.jpg") {
                _this.selectPhoto = "ol";
            }
        }, 600);
        this._uService.getPays(us)
            .subscribe(function (data) { return _this.pays2 = data; });
        this.sTimeout = setTimeout(function () { _this.selectPays = _this.pays2.text; }, 600);
        this._cService.getNbContact(us)
            .subscribe(function (data) { return _this.nbAmi = data; });
        this._pService.getNbV(us).subscribe(function (data) { return _this.nbv = data; });
        this._pService.getNbD(us).subscribe(function (data) { return _this.nbd = data; });
    };
    UserdetailComponent.prototype.gotoDeco = function () {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    };
    UserdetailComponent.prototype.gotoContact = function () {
        this._router.navigate(['Contact', { us: this.u2.id }]);
    };
    UserdetailComponent.prototype.gotoDetail = function () {
        this._router.navigate(['Userdetail', { us: this.u2.id }]);
    };
    UserdetailComponent.prototype.modifmdp = function (id) {
        if (id === undefined) {
            id = this.u2.id;
        }
        if (this._uService.Same_mdp(id, this.password)) {
            alert("le mot de passe est identique");
        }
        else {
            alert("Le mot de passe a bien été changé");
        }
    };
    UserdetailComponent.prototype.loadListPhoto = function () {
        var _this = this;
        var us = +this._routeParams.get('us');
        this._uService.changePhoto(this.u2.id, this.selectPhoto)
            .subscribe(function (data) { return _this.Message = data; });
        this._uService.getUser(us)
            .subscribe(function (data) { return _this.u2 = data; });
    };
    UserdetailComponent.prototype.changePays = function () {
        var _this = this;
        this._uService.changePays(this.u2.id, this.selectPays)
            .subscribe(function (data) { return _this.Message2 = data; });
        this.sTimeout = setTimeout(function () { return alert(_this.Message2.text); }, 500);
    };
    UserdetailComponent = __decorate([
        core_1.Component({
            selector: 'my-userdetail',
            templateUrl: 'app/userdetail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, partie_service_1.PartieService, contact_service_1.ContactService, utilisateur_service_1.UtilisateurService])
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