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
var mock_reponses_1 = require('../data/mock-reponses');
var core_1 = require('angular2/core');
var JouerService = (function () {
    function JouerService() {
    }
    JouerService.prototype.getReponsesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_reponses_1.Reponses); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    JouerService.prototype.getReponse = function (i) {
        return mock_reponses_1.Reponses[0].reponses[i].text;
    };
    JouerService.prototype.getDone = function (i) {
        return mock_reponses_1.Reponses[0].reponses[i].done;
    };
    JouerService.prototype.setDone = function (i, bool) {
        mock_reponses_1.Reponses[0].reponses[i].done == bool;
    };
    JouerService.prototype.getReponses = function (id) {
        for (this.i = 0; this.i < mock_reponses_1.Reponses.length; this.i++) {
            if (mock_reponses_1.Reponses[this.i].id == id)
                return mock_reponses_1.Reponses[this.i];
        }
    };
    JouerService.prototype.getTaille = function (i) {
        return mock_reponses_1.Reponses[i].reponses.length;
    };
    JouerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JouerService);
    return JouerService;
}());
exports.JouerService = JouerService;
//# sourceMappingURL=jouer.service.js.map