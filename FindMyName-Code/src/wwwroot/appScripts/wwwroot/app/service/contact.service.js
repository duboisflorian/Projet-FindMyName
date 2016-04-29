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
var http_1 = require('angular2/http');
require('rxjs/add/operator/map'); // we need to import this now
var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this._cUrl = 'http://localhost:54000/api/values/5';
    }
    ContactService.prototype.getContacts = function (id, type) {
        return this.http.get('http://localhost:54000/api/Contact/getContacts/' + id + '/' + type)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.getNbContact = function (u) {
        return this.http.get('http://localhost:54000/api/Contact/getNbContact/' + u)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.Add = function (contactadd, user, u) {
        return this.http.get('http://localhost:54000/api/Contact/Add/' + contactadd + '/' + user + '/' + u)
            .map(function (data) { return data.json(); });
    };
    ContactService.prototype.Jouer = function (i) {
        return this.http.get('http://localhost:54000/api/Contact/Jouer/' + i)
            .map(function (data) { return data.json(); });
    };
    ContactService = __decorate([
        // we need to import this now
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
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