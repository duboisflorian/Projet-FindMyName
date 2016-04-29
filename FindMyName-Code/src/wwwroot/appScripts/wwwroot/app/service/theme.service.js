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
var ThemeService = (function () {
    function ThemeService(http) {
        this.http = http;
    }
    ThemeService.prototype.getThemes = function () {
        return this.http.get('http://localhost:54000/api/theme/getThemes/')
            .map(function (data) { return data.json(); });
    };
    ThemeService.prototype.melanger = function () {
        this.http.get('http://localhost:54000/api/theme/melanger/')
            .map(function (data) { return data.json(); });
    };
    ThemeService.prototype.isvalid = function (nombre, aleatoire) {
        return this.http.get('http://localhost:54000/api/theme/isvalid/' + nombre + '/' + aleatoire)
            .map(function (data) { return data.json(); });
    };
    ThemeService.prototype.getTheme = function (id) {
        return this.http.get('http://localhost:54000/api/theme/getTheme/' + id)
            .map(function (data) { return data.json(); });
    };
    ThemeService.prototype.getName = function (u) {
        return this.http.get('http://localhost:54000/api/theme/getName/' + u)
            .map(function (data) { return data.json(); });
    };
    ThemeService.prototype.getId = function (n) {
        return this.http.get('http://localhost:54000/api/theme/getId/' + n)
            .map(function (data) { return data.json(); });
    };
    ThemeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ThemeService);
    return ThemeService;
}());
exports.ThemeService = ThemeService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=theme.service.js.map