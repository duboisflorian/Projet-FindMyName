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
var utilisateur_service_1 = require('./service/utilisateur.service');
var CoComponent = (function () {
    function CoComponent(_router, _uService) {
        this._router = _router;
        this._uService = _uService;
    }
    CoComponent.prototype.gotoIn = function () {
        this._router.navigate(['In']);
    };
    CoComponent.prototype.gotoHome = function () {
        this._router.navigate(['Home']);
    };
    CoComponent.prototype.gotocheat = function () {
        this._router.navigate(['Contact', { us: 4 }]);
    };
    CoComponent.prototype.connexion = function () {
        if (this.utilisateur = this._uService.verificationConnexion(this.mail, this.password)) {
            this._router.navigate(['Contact', { us: this.utilisateur.id }]);
        }
        else {
            alert("Le mot de passe ou l'e-mail n'existe pas.");
        }
    };
    CoComponent = __decorate([
        core_1.Component({
            selector: 'my-co',
            templateUrl: 'app/co.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, utilisateur_service_1.UtilisateurService])
    ], CoComponent);
    return CoComponent;
})();
exports.CoComponent = CoComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//,
//directives: [HomeComponent, InComponent] 
//# sourceMappingURL=co.component.js.map