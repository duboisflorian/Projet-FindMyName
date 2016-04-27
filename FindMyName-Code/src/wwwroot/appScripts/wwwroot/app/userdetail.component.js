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
        this.nbv = 0;
        this.nbd = 0;
        this.pays = ['France', 'Allemagne', 'Chine', 'Japon', 'Etats-Unis', 'Royaume-Uni', 'Canada'];
    }
    UserdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.nbparties = this._pService.getnbParties(us);
        this.theme_favori = this._pService.getThemeFavori(us);
        this.selectPhoto = "fichier/logo.jpg";
        this._uService.getPhoto(us)
            .subscribe(function (data) { return _this.photo = data; });
        this.sTimeout = setTimeout(function () {
            //alert(this.photo.text);
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
        }, 1000);
        //alert("Photo :" + this.selectPhoto);
        //this.selectPays = this._uService.getPays(us);
        this._uService.getPays(us)
            .subscribe(function (data) { return _this.pays2 = data; });
        this.sTimeout = setTimeout(function () { _this.selectPays = _this.pays2.text; }, 500);
        //alert("Pays :" + this.selectPays);
        /*this.nbAmi = this._cService.getNbContact(us);*/
        this._cService.getNbContact(us)
            .subscribe(function (data) { return _this.nbAmi = data; });
        //alert("nombre de contact : " + this.nbAmi);
        this.nbv = this._pService.getNbV(us);
        this.nbd = this._pService.getNbD(us);
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
        var _this = this;
        //alert(this.u.photo);
        /*for (this.i = 0; this.i < UTILISATEURS.length; this.i++) {
            if (UTILISATEURS[this.i].id == this.u.id) {
                UTILISATEURS[this.i].photo = 'fichier/' + this.selectPhoto + '.jpg';
            }
        }
        alert("Photo changée");*/
        this._uService.changePhoto(this.u.id, this.selectPhoto)
            .subscribe(function (data) { return _this.Message = data; });
        this.sTimeout = setTimeout(function () { alert(_this.Message.text); }, 500);
    };
    UserdetailComponent.prototype.changePays = function () {
        /*for (this.i = 0; this.i < UTILISATEURS.length; this.i++) {
            if (UTILISATEURS[this.i].id == this.u.id) {
                UTILISATEURS[this.i].pays = this.selectPays;
            }
        }*/
        alert(this.u.id);
        alert(this.selectPays);
        this._uService.changePays(this.u.id, this.selectPays)
            .subscribe(function (data) { return data; });
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