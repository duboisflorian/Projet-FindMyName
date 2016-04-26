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
var utilisateur_service_1 = require('../service/utilisateur.service');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map'); // we need to import this now
var ContactService = (function () {
    function ContactService(_uService, http) {
        this._uService = _uService;
        this.http = http;
        this.vide = [];
        this._cUrl = 'http://localhost:54000/api/values/5';
    }
    ContactService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    /*private handleError(error: any) {
       let errMsg = error.message || 'Server error';
       console.error(errMsg);
       return Observable.throw(errMsg);
   }

   getNom() {
       return this.http.get(this._cUrl)
           .map(this.extractData)
           .catch(this.handleError);
   }*/
    ContactService.prototype.getContacts = function (id, type) {
        /*this.c = [];
        for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == id) {
                for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                    if (CONTACTS[i].contact[n].type == type) {
                        this.c.push(CONTACTS[i].contact[n]);
                    }
                }
            }

        }
        return this.c;*/
        return this.http.get('http://localhost:54000/api/Contact/getContacts/' + id + '/' + type)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.getAmiExiste = function (id, u) {
        /* for (var i = 0; i < CONTACTS.length; i++) {
             if (CONTACTS[i].id == u) {
                 for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                     if (CONTACTS[i].contact[n].id == id && CONTACTS[i].contact[n].type == "ami")
                         return CONTACTS[i].contact[n];
                 }
             }
         }*/
        return this.http.get('http://localhost:54000/api/Contact/getAmiExiste/' + id + '/' + u)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.getOnlineExiste = function (id, u) {
        /*for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u)
                for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                    if (CONTACTS[i].contact[n].id == id && CONTACTS[i].contact[n].type == "online")
                        return true;
                }
        }
        return false;*/
        return this.http.get('http://localhost:54000/api/Contact/getOnlineExiste/' + id + '/' + u)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.addAmi = function (user, u) {
        /*for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u)
                CONTACTS[i].contact.push({ "id": user.id, "name": user.name, "photo": user.photo, "type": "ami" })
            if (CONTACTS[i].id == user.id) {
                var N = this._uService.getName(u);
                var P = this._uService.getPhoto(u);
                CONTACTS[i].contact.push({ "id": u, "name": N, "photo": P, "type": "ami" })
            }
        }*/
        this.http.get('http://localhost:54000/api/Contact/addAmi/' + user.id + '/' + u)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.addAmiOnline = function (user, u) {
        /* for (var i = 0; i < CONTACTS.length; i++) {
             if (CONTACTS[i].id == u) {
                 for (var n = 0; n < CONTACTS[i].contact.length; n++) {
                     if (CONTACTS[i].contact[n].id == user.id )
                         CONTACTS[i].contact[n].type = "ami";
                 }
             }
         }*/
        this.http.get('http://localhost:54000/api/Contact/addAmiOnline/' + user.id + '/' + u)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.addOnline = function (user, u) {
        /*  for (var i = 0; i < CONTACTS.length; i++) {
              if (CONTACTS[i].id == u)
                  CONTACTS[i].contact.push({ "id": user.id, "name": user.name, "photo": user.photo, "type": "online" })
              if (CONTACTS[i].id == user.id) {
                  var N = this._uService.getName(u);
                  var P = this._uService.getPhoto(u);
                  CONTACTS[i].contact.push({ "id": u, "name": N, "photo": P, "type": "online" })
              }
          }*/
        this.http.get('http://localhost:54000/api/Contact/addOnline/' + user.id + '/' + u)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.création = function (id) {
        /*CONTACTS.push({ "id": id, "contact": this.vide });*/
        this.http.get('http://localhost:54000/api/Contact/création/' + id)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.getNbContact = function (u) {
        /*var nb=0;
        //alert(CONTACTS.length);
        for (var i = 0; i < CONTACTS.length; i++) {
            if (CONTACTS[i].id == u) {
                //alert(CONTACTS[i].contact.length);
                for (var g = 0; g < CONTACTS[i].contact.length; g++) {
                    if (CONTACTS[i].contact[g].type == "ami") {
                        nb++;
                    }
                }
            }
        }
        return nb;*/
        return this.http.get('http://localhost:54000/api/Contact/getNbContact/' + u)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.Add = function (contactadd, user, u) {
        return this.http.get('http://localhost:54000/api/Contact/Add/' + contactadd + '/' + user + '/' + u)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.getObjectData = function () {
        return this.http.get('http://localhost:54000/api/values/5')
            .map(this.extractData);
    };
    ContactService.prototype.Jouer = function (i) {
        return this.http.get('http://localhost:54000/api/Contact/Jouer/' + i)
            .map(this.extractData);
    };
    ContactService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [utilisateur_service_1.UtilisateurService, http_1.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=contact.service.js.map