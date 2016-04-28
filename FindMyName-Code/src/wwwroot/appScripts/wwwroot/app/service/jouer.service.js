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
var JouerService = (function () {
    function JouerService(http) {
        this.http = http;
        this._cUrl = 'http://localhost:54000/api/values/5';
    }
    JouerService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body.data || {};
    };
    JouerService.prototype.getReponse = function (i) {
        return this.http.get('http://localhost:54000/api/Jouer/getReponse/' + i)
            .map(function (data) { return data.json(); });
    };
    JouerService.prototype.getDone = function (i) {
        return this.http.get('http://localhost:54000/api/Jouer/getDone/' + i)
            .map(function (data) { return data.json(); });
    };
    JouerService.prototype.setDone = function (i, bool) {
        return this.http.get('http://localhost:54000/api/Jouer/setDone/' + i + '/' + bool)
            .map(function (data) { return data.json(); });
    };
    JouerService.prototype.getReponses = function (id) {
        return this.http.get('http://localhost:54000/api/Jouer/getReponses/' + id)
            .map(function (data) { return data.json(); });
    };
    JouerService.prototype.getTaille = function (i) {
        return this.http.get('http://localhost:54000/api/Jouer/getTaille/' + i)
            .map(function (data) { return data.json(); });
    };
    JouerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], JouerService);
    return JouerService;
}());
exports.JouerService = JouerService;
//# sourceMappingURL=jouer.service.js.map