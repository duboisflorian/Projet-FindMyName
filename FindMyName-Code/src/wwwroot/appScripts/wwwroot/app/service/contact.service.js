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
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var ContactService = (function () {
    function ContactService(_uService, http) {
        this._uService = _uService;
        this.http = http;
        this.vide = [];
        this._heroesUrl = 'http://localhost:54000/api/values/5'; // URL to web api
    }
    ContactService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    ContactService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ContactService.prototype.getContacts = function (id, type) {
        var _this = this;
        this.http.get(this._heroesUrl).map(function (res) { return res.json(); }).subscribe(function (res) { return _this.result = res; });
        alert(this.result);
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
                    if (mock_contact_1.CONTACTS[i].contact[n].id == id && mock_contact_1.CONTACTS[i].contact[n].type == "online")
                        return true;
                }
        }
        return false;
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
    ContactService.prototype.addAmiOnline = function (user, u) {
        for (var i = 0; i < mock_contact_1.CONTACTS.length; i++) {
            if (mock_contact_1.CONTACTS[i].id == u) {
                for (var n = 0; n < mock_contact_1.CONTACTS[i].contact.length; n++) {
                    if (mock_contact_1.CONTACTS[i].contact[n].id == user.id)
                        mock_contact_1.CONTACTS[i].contact[n].type = "ami";
                }
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
    ContactService.prototype.getNbContact = function (u) {
        var nb = 0;
        //alert(CONTACTS.length);
        for (var i = 0; i < mock_contact_1.CONTACTS.length; i++) {
            if (mock_contact_1.CONTACTS[i].id == u) {
                //alert(CONTACTS[i].contact.length);
                for (var g = 0; g < mock_contact_1.CONTACTS[i].contact.length; g++) {
                    if (mock_contact_1.CONTACTS[i].contact[g].type == "ami") {
                        nb++;
                    }
                }
            }
        }
        return nb;
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [utilisateur_service_1.UtilisateurService, http_1.Http])
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