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
var Rx_1 = require('rxjs/Rx');
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
        var th = +this._routeParams.get('th');
        this.tabreponses = this._jouerService.getReponses(th);
        for (var i = 0; i < this.tabreponses.reponses.length; i++) {
            this.tabreponses.reponses[i].done = false;
        }
        var us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.theme = this._themeService.getTheme(th);
        this.starttimer();
    };
    JouerComponent.prototype.getReponse = function () {
        return this.reponse;
    };
    JouerComponent.prototype.getRemaining = function () {
        return this.remaining;
    };
    JouerComponent.prototype.addTodo = function () {
        var _this = this;
        this.bon = false;
        if (this.task) {
            for (var i = 0; i < this.tabreponses.reponses.length; i++) {
                if (this.tabreponses.reponses[i].text.toLowerCase() == this.task.toLowerCase() && this.tabreponses.reponses[i].done == false) {
                    this.reponse.push({ "text": this.task, "done": true });
                    this.remaining++;
                    this.tabreponses.reponses[i].done = true;
                    this.bon = true;
                }
            }
            if (this.bon != true) {
                this.bon = false;
            }
            this.task = '';
            var timer = Rx_1.Observable.timer(0, 5000);
            timer.subscribe(function (t) {
                _this.bon = null;
            });
        }
    };
    JouerComponent.prototype.starttimer = function () {
        var _this = this;
        this.countdown(0, 30, this._router, this.u.id);
        this.sTimeout = setTimeout(function () { return _this.gotoContact(); }, 120000);
    };
    JouerComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.sTimeout);
        var id = +this._routeParams.get('id');
        var us = +this._routeParams.get('us');
        var th = +this._routeParams.get('th');
        this.p = this._pService.getPartieExiste(us, id);
        if (this.p == null || this.p.player == null) {
            this._pService.AjouterPartie(us, id, th, this.remaining);
        }
        if (this.p.player != null) {
            this._pService.ModifierPartie(us, id, th, this.remaining, this.p);
        }
        clearTimeout(this.sTimeout);
        this.gotoContact();
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