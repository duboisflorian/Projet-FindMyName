var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mock_amis_1 = require('./mock-amis');
var core_1 = require('angular2/core');
var utilisateur_service_1 = require('./utilisateur.service');
var AmiService = (function () {
    function AmiService(_uService) {
        this._uService = _uService;
        this.o = [];
        this.a = [];
    }
    AmiService.prototype.getAmis = function (id) {
        for (this.i = 0; this.i < mock_amis_1.AMIS.length; this.i++) {
            if (mock_amis_1.AMIS[this.i].id == id)
                return mock_amis_1.AMIS[this.i].amis;
        }
    };
    AmiService.prototype.getOnline = function (id) {
        for (this.i = 0; this.i < mock_amis_1.AMIS.length; this.i++) {
            if (mock_amis_1.AMIS[this.i].id == id)
                return mock_amis_1.AMIS[this.i].online;
        }
    };
    AmiService.prototype.getAmiExiste = function (id, u) {
        for (this.i = 0; this.i < mock_amis_1.AMIS.length; this.i++) {
            if (mock_amis_1.AMIS[this.i].id == u)
                for (this.n = 0; this.n < mock_amis_1.AMIS[this.i].amis.length; this.n++) {
                    if (mock_amis_1.AMIS[this.i].amis[this.n].id == id)
                        return mock_amis_1.AMIS[this.i].amis[this.n];
                }
        }
    };
    AmiService.prototype.getOnlineExiste = function (id, u) {
        for (this.i = 0; this.i < mock_amis_1.AMIS.length; this.i++) {
            if (mock_amis_1.AMIS[this.i].id == u)
                for (this.n = 0; this.n < mock_amis_1.AMIS[this.i].amis.length; this.n++) {
                    if (mock_amis_1.AMIS[this.i].amis[this.n].id == id)
                        return false;
                }
        }
        for (this.i = 0; this.i < mock_amis_1.AMIS.length; this.i++) {
            if (mock_amis_1.AMIS[this.i].id == u)
                for (this.n = 0; this.n < mock_amis_1.AMIS[this.i].online.length; this.n++) {
                    if (mock_amis_1.AMIS[this.i].online[this.n].id == id)
                        return false;
                }
        }
        if (id == u) {
            return false;
        }
        return true;
    };
    AmiService.prototype.add = function (user, u) {
        for (this.i = 0; this.i < mock_amis_1.AMIS.length; this.i++) {
            if (mock_amis_1.AMIS[this.i].id == u)
                mock_amis_1.AMIS[this.i].amis.push({ "id": user.id, "name": user.name, "photo": user.photo });
            if (mock_amis_1.AMIS[this.i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                mock_amis_1.AMIS[this.i].amis.push({ "id": u, "name": N, "photo": P });
            }
        }
    };
    AmiService.prototype.addOnline = function (user, u) {
        for (this.i = 0; this.i < mock_amis_1.AMIS.length; this.i++) {
            if (mock_amis_1.AMIS[this.i].id == u)
                mock_amis_1.AMIS[this.i].online.push({ "id": user.id, "name": user.name, "photo": user.photo });
            if (mock_amis_1.AMIS[this.i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                mock_amis_1.AMIS[this.i].online.push({ "id": u, "name": N, "photo": P });
            }
        }
    };
    AmiService.prototype.création = function (id) {
        mock_amis_1.AMIS.push({ "id": id, "amis": this.a, "online": this.o });
    };
    AmiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [utilisateur_service_1.UtilisateurService])
    ], AmiService);
    return AmiService;
})();
exports.AmiService = AmiService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=ami.service.js.map