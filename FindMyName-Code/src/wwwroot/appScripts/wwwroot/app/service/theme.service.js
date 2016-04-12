var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mock_themes_1 = require('../data/mock-themes');
var core_1 = require('angular2/core');
var ThemeService = (function () {
    function ThemeService() {
    }
    ThemeService.prototype.getThemes = function () {
        this.t = [];
        this.melanger();
        return this.t;
    };
    ThemeService.prototype.melanger = function () {
        var aleatoire = [];
        var nb = Math.floor(Math.random() * mock_themes_1.THEMES.length);
        this.t.push(mock_themes_1.THEMES[nb]);
        aleatoire.push(nb);
        for (var i = 0; i < 3; i++) {
            do {
                var nb = Math.floor(Math.random() * 6);
            } while (this.isvalid(nb, aleatoire));
            this.t.push(mock_themes_1.THEMES[nb]);
            aleatoire.push(nb);
        }
    };
    ThemeService.prototype.isvalid = function (nombre, aleatoire) {
        for (var i = 0; i < aleatoire.length; i++)
            if (aleatoire[i] == nombre)
                return true;
        return false;
    };
    // See the "Take it slow" appendix
    ThemeService.prototype.getThemesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_themes_1.THEMES); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    ThemeService.prototype.getTheme = function (id) {
        for (var i = 0; i < mock_themes_1.THEMES.length; i++) {
            if (mock_themes_1.THEMES[i].id == id)
                return mock_themes_1.THEMES[i];
        }
    };
    ThemeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ThemeService);
    return ThemeService;
})();
exports.ThemeService = ThemeService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=theme.service.js.map