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
var router_1 = require('angular2/router');
var router_2 = require('angular2/router');
var jouer_service_1 = require('./service/jouer.service');
var theme_service_1 = require('./service/theme.service');
var partie_service_1 = require('./service/partie.service');
var utilisateur_service_1 = require('./service/utilisateur.service');
var JouerComponent = (function () {
    function JouerComponent(_router, _jouerService, _themeService, _pService, _uService, _routeParams) {
        this._router = _router;
        this._jouerService = _jouerService;
        this._themeService = _themeService;
        this._pService = _pService;
        this._uService = _uService;
        this._routeParams = _routeParams;
        this.task = '';
        this.reponse = [];
        this.remaining = 0;
        this.tabreponses = { "id": 1, "reponses": [{ "Appellations": [], "done": false }] };
        this.u = { "id": 1, "name": "en attente", "photo": "fichier/logo.jpg", "mail": "en atttente", "password": "", "pays": "", "meilleurScore": 0 };
    }
    JouerComponent.prototype.gotoDeco = function () {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    };
    JouerComponent.prototype.gotoContact = function () {
        this._router.navigate(['Contact', { us: this.u.id }]);
    };
    JouerComponent.prototype.gotoDetail = function () {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    };
    JouerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var th = +this._routeParams.get('th');
        this._jouerService.getReponses(th).subscribe(function (data) { return _this.tabreponses.reponses = data; });
        this.sTimeout = setTimeout(function () {
            for (var i = 0; i < _this.tabreponses.reponses.length; i++) {
                _this.tabreponses.reponses[i].done = false;
            }
        }, 1000);
        var us = +this._routeParams.get('us');
        this._uService.getUser(us)
            .subscribe(function (data) { return _this.u = data; });
        this.theme = { "text": "en attente", "id": 0, "photo": "", "done": false };
        this._themeService.getTheme(th).subscribe(function (data) { return _this.theme = data; });
        this.starttimer();
    };
    JouerComponent.prototype.getReponse = function () {
        return this.reponse;
    };
    JouerComponent.prototype.getRemaining = function () {
        return this.remaining;
    };
    JouerComponent.prototype.RemoveAccents = function (str) {
        var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
        var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
        str = str.split('');
        var strLen = str.length;
        var i, x;
        for (i = 0; i < strLen; i++) {
            if ((x = accents.indexOf(str[i])) != -1) {
                str[i] = accentsOut[x];
            }
        }
        return str.join('');
    };
    JouerComponent.prototype.addTodo = function () {
        var _this = this;
        this.bon = false;
        if (this.task) {
            for (var i = 0; i < this.tabreponses.reponses.length; i++) {
                for (var j = 0; j < this.tabreponses.reponses[i].Appellations.length; j++) {
                    if (this.RemoveAccents(this.tabreponses.reponses[i].Appellations[j].text.toLowerCase().trim()) == this.RemoveAccents(this.task.toLowerCase().trim()) && this.tabreponses.reponses[i].done == false) {
                        this.reponse.push({ "text": this.tabreponses.reponses[i].Appellations[0].text.toLowerCase(), "done": true });
                        this.remaining++;
                        this.tabreponses.reponses[i].done = true;
                        this.bon = true;
                        this.sTimeoutBon = setTimeout(function () { return _this.setBon(); }, 2000);
                    }
                }
            }
            if (this.bon != true) {
                this.bon = false;
                this.sTimeoutBon = setTimeout(function () { return _this.setBon(); }, 2000);
            }
            this.task = '';
        }
    };
    JouerComponent.prototype.starttimer = function () {
        var _this = this;
        this.countdown(0, 30, this._router, this.u.id);
        this.sTimeout = setTimeout(function () { return _this.gotoContact(); }, 30000);
    };
    JouerComponent.prototype.setBon = function () {
        this.bon = null;
    };
    JouerComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        clearTimeout(this.sTimeout);
        var id = +this._routeParams.get('id');
        var us = +this._routeParams.get('us');
        var th = +this._routeParams.get('th');
        this._pService.savePartie(id, us, th, this.remaining).subscribe(function (data) { return _this.Partieexiste = data; });
        clearTimeout(this.sTimeout);
        this.sTimeout = setTimeout(function () { return _this.gotoContact(); }, 800);
    };
    JouerComponent.prototype.countdown = function (minutes, seconds, _router, id) {
        var element, endTime, hours, msLeft, mins, time;
        function twoDigits(n) {
            return (n <= 9 ? "0" + n : n);
        }
        function updateTimer() {
            msLeft = endTime - (+new Date);
            if (msLeft < 1000) {
            }
            else {
                time = new Date(msLeft);
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
                setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
            }
        }
        element = document.getElementById("countdown");
        endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
        updateTimer();
    };
    JouerComponent = __decorate([
        core_1.Component({
            selector: 'my-jouer',
            templateUrl: 'app/jouer.component.html'
        }), 
        __metadata('design:paramtypes', [router_2.Router, jouer_service_1.JouerService, theme_service_1.ThemeService, partie_service_1.PartieService, utilisateur_service_1.UtilisateurService, router_1.RouteParams])
    ], JouerComponent);
    return JouerComponent;
}());
exports.JouerComponent = JouerComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=jouer.component.js.map