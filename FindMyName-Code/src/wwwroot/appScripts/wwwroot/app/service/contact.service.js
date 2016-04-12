var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mock_contact_1 = require('../data/mock-contact');
var core_1 = require('angular2/core');
var utilisateur_service_1 = require('../service/utilisateur.service');
var ContactService = (function () {
    function ContactService(_uService) {
        this._uService = _uService;
        this.vide = [];
    }
    ContactService.prototype.getContacts = function (id, type) {
        this.c = [];
        for (var i = 0; i < mock_contact_1.CONTACTS.length; i++) {
            if (mock_contact_1.CONTACTS[i].id == id) {
                for (var n = 0; n < mock_contact_1.CONTACTS[i].contact.length; n++) {
                    if (mock_contact_1.CONTACTS[i].contact[n].type == type) {
                        this.c.push(mock_contact_1.CONTACTS[i].contact[n]);
                    }
                }
            }
        }
        return this.c;
    };
    ContactService.prototype.getAmiExiste = function (id, u) {
        for (var i = 0; i < mock_contact_1.CONTACTS.length; i++) {
            if (mock_contact_1.CONTACTS[i].id == u) {
                for (var n = 0; n < mock_contact_1.CONTACTS[i].contact.length; n++) {
                    if (mock_contact_1.CONTACTS[i].contact[n].id == id && mock_contact_1.CONTACTS[i].contact[n].type == "ami")
                        return mock_contact_1.CONTACTS[i].contact[n];
                }
            }
        }
    };
    ContactService.prototype.getOnlineExiste = function (id, u) {
        for (var i = 0; i < mock_contact_1.CONTACTS.length; i++) {
            if (mock_contact_1.CONTACTS[i].id == u)
                for (var n = 0; n < mock_contact_1.CONTACTS[i].contact.length; n++) {
                    if (mock_contact_1.CONTACTS[i].contact[n].id == id)
                        return false;
                }
        }
        if (id == u) {
            return false;
        }
        return true;
    };
    ContactService.prototype.addAmi = function (user, u) {
        for (var i = 0; i < mock_contact_1.CONTACTS.length; i++) {
            if (mock_contact_1.CONTACTS[i].id == u)
                mock_contact_1.CONTACTS[i].contact.push({ "id": user.id, "name": user.name, "photo": user.photo, "type": "ami" });
            if (mock_contact_1.CONTACTS[i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                mock_contact_1.CONTACTS[i].contact.push({ "id": u, "name": N, "photo": P, "type": "ami" });
            }
        }
    };
    ContactService.prototype.addOnline = function (user, u) {
        for (var i = 0; i < mock_contact_1.CONTACTS.length; i++) {
            if (mock_contact_1.CONTACTS[i].id == u)
                mock_contact_1.CONTACTS[i].contact.push({ "id": user.id, "name": user.name, "photo": user.photo, "type": "online" });
            if (mock_contact_1.CONTACTS[i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                mock_contact_1.CONTACTS[i].contact.push({ "id": u, "name": N, "photo": P, "type": "online" });
            }
        }
    };
    ContactService.prototype.création = function (id) {
        mock_contact_1.CONTACTS.push({ "id": id, "contact": this.vide });
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [utilisateur_service_1.UtilisateurService])
    ], ContactService);
    return ContactService;
})();
exports.ContactService = ContactService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=contact.service.js.map