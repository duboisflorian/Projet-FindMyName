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
var contact_service_1 = require('./service/contact.service');
var InComponent = (function () {
    function InComponent(_router, _uService, _cService) {
        this._router = _router;
        this._uService = _uService;
        this._cService = _cService;
    }
    InComponent.prototype.gotoHome = function () {
        this._router.navigate(['Home']);
    };
    InComponent.prototype.gotoCo = function () {
        this._router.navigate(['Co']);
    };
    InComponent.prototype.inscription = function () {
        if (this.password == this.confirmPasword) {
            if (this._uService.verificationMailExist(this.mail)) {
                alert("L'adresse mail existe déjà");
            }
            else {
                this._cService.création(this._uService.ajouterUtilisateur(this.name, this.mail, this.password));
                this._router.navigate(['Co']);
            }
        }
        else {
            alert("Les mots de passe ne sont pas identique");
        }
    };
    InComponent = __decorate([
        core_1.Component({
            selector: 'my-in',
            templateUrl: 'app/in.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, utilisateur_service_1.UtilisateurService, contact_service_1.ContactService])
    ], InComponent);
    return InComponent;
})();
exports.InComponent = InComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
directives: [CoComponent, HomeComponent]*/ 
//# sourceMappingURL=in.component.js.map