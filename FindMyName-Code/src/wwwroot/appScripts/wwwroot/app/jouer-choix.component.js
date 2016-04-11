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
var theme_service_1 = require('./service/theme.service');
var utilisateur_service_1 = require('./service/utilisateur.service');
var JouerChoixComponent = (function () {
    function JouerChoixComponent(_router, _themeService, _uService, _routeParams) {
        this._router = _router;
        this._themeService = _themeService;
        this._uService = _uService;
        this._routeParams = _routeParams;
        this.themes = [];
    }
    JouerChoixComponent.prototype.gotoDeco = function () {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    };
    JouerChoixComponent.prototype.gotoDetail = function () {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    };
    JouerChoixComponent.prototype.ngOnInit = function () {
        var id = +this._routeParams.get('id');
        this.themes = this._themeService.getThemes();
        /*this._themeService.getThemes()
            .then(themes => this.themes = themes.slice(0, 4));*/
        var us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
    };
    JouerChoixComponent.prototype.gotoContact = function () {
        this._router.navigate(['Contact', { us: this.u.id }]);
    };
    JouerChoixComponent.prototype.goBack = function () {
        window.history.back();
    };
    JouerChoixComponent.prototype.onSelect = function (theme) {
        this.selectedTheme = theme;
    };
    JouerChoixComponent.prototype.gotoJouer = function (theme) {
        this.selectedTheme = theme;
        var id = +this._routeParams.get('id');
        var link = ['Jouer', { us: this.u.id, id: id, th: this.selectedTheme.id }];
        this._router.navigate(link);
        //this._router.navigate(['Jouer', { id: this.selectedTheme.id }]);
    };
    JouerChoixComponent = __decorate([
        core_1.Component({
            selector: 'my-jouer-choix',
            templateUrl: 'app/jouer-choix.component.html'
        }), 
        __metadata('design:paramtypes', [router_2.Router, theme_service_1.ThemeService, utilisateur_service_1.UtilisateurService, router_1.RouteParams])
    ], JouerChoixComponent);
    return JouerChoixComponent;
}());
exports.JouerChoixComponent = JouerChoixComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=jouer-choix.component.js.map