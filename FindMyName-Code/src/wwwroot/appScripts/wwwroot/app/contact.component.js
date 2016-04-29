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
var contact_service_1 = require('./service/contact.service');
var utilisateur_service_1 = require('./service/utilisateur.service');
var partie_service_1 = require('./service/partie.service');
var recherche_pipe_1 = require('./recherche-pipe');
var http_1 = require('angular2/http');
var ContactComponent = (function () {
    function ContactComponent(_router, _contactService, _pService, _routeParams, _uService) {
        this._router = _router;
        this._contactService = _contactService;
        this._pService = _pService;
        this._routeParams = _routeParams;
        this._uService = _uService;
        this.contacts = new Array();
        this.u = { "id": 1, "name": "en attente", "photo": "fichier/logo.jpg" };
        this.partie_en_cours = { "id_partie": 0, "id_j1": 0, "id_j2": 0, "j1": "", "j2": "", "s1": 0, "s2": 0, "player": 0, "manche": [{ "id_theme": 0, "theme": "", "s1": 0, "s2": 0 }] };
        this.searchFriend = '';
        this.type = '';
        this.errorMessage = 'rien';
    }
    ContactComponent.prototype.getContacts = function () {
        var _this = this;
        this._contactService.getContacts(this.u.id, this.type)
            .subscribe(function (data) { return _this.contacts = data; });
    };
    ContactComponent.prototype.gotoDetail = function () {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    };
    ContactComponent.prototype.UserD = function (id) {
        var _this = this;
        this._pService.getPartiesEnCours(id).subscribe(function (data) { return _this.parties_en_cours = data; });
    };
    ContactComponent.prototype.prompt_add = function () {
        var _this = this;
        var val;
        val = prompt('Entrer un id', '');
        this.contactadd = parseInt(val);
        if (val != null) {
            this.addAmi();
            this.sTimeout = setTimeout(function () { return alert(_this.addmessage.text); }, 500);
            this.sTimeout = setTimeout(function () { return _this.getContacts(); }, 600);
        }
    };
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        var us = +this._routeParams.get('us');
        this._uService.getUserView(us)
            .subscribe(function (data) { return _this.u = data; });
        this.UserD(us);
        this.selectedContact = null;
        this.type = 'ami';
        this.sTimeout = setTimeout(function () { return _this.getContacts(); }, 300);
    };
    ContactComponent.prototype.showDetails = function (h) {
        this.selectedContact = null;
        this.selectedDetails = h;
    };
    ContactComponent.prototype.onSelect = function (contact) {
        var _this = this;
        this.selectedContact = contact;
        this.selectedDetails = null;
        // JS: Modifie le HTML pour montrer quel contact est afficher à l'utilisateur
        var ListElem = document.getElementsByClassName("active");
        for (var z = 0; z < ListElem.length; z++) {
            ListElem[z].className = "";
        }
        document.getElementById(contact.id.toString()).className = "active";
        // Fin JS
        this._pService.getEn_Cours(this.u.id, contact.id).subscribe(function (data) { return _this.en_cours = data.text; });
        this.sTimeout = setTimeout(function () {
            if (_this.en_cours == "encours") {
                _this._pService.getPartieEnCours(_this.u.id, contact.id).subscribe(function (data) { return _this.partie_en_cours = data; });
            }
            else {
                _this._pService.getHistorique(_this.u.id, contact.id).subscribe(function (data) { return _this.historique = data; });
                _this._pService.getNbVictoire(_this.u.id, contact.id).subscribe(function (data) { return _this.victoire = data; });
                _this._pService.getNbDefaite(_this.u.id, contact.id).subscribe(function (data) { return _this.defaite = data; });
            }
        }, 300);
    };
    ContactComponent.prototype.onSelectU = function () {
        // JS: Modifie le HTML pour montrer quel contact est afficher à l'utilisateur
        var ListElem = document.getElementsByClassName("active");
        for (var z = 0; z < ListElem.length; z++) {
            ListElem[z].className = "";
        }
        document.getElementById("u").className = "active";
        // Fin JS
        this.selectedContact = null;
        this.selectedDetails = null;
    };
    ContactComponent.prototype.gotoJouer = function (p) {
        if (this.selectedContact == null) {
            for (var i = 0; i < this.parties_en_cours.length; i++) {
                if (this.parties_en_cours[i].id_partie == p.id_partie) {
                    if (this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s1 == -1 || this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s2 == -1) {
                        if (this.parties_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.parties_en_cours[i].id_j2, th: this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].id_theme }]);
                        else
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.parties_en_cours[i].id_j1, th: this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].id_theme }]);
                    }
                    else {
                        if (this.parties_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.parties_en_cours[i].id_j2 }]);
                        else
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.parties_en_cours[i].id_j1 }]);
                    }
                }
            }
        }
        if (this.en_cours == "rien")
            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.selectedContact.id }]);
        if (this.en_cours == "encours") {
            if (p.manche[p.manche.length - 1].s1 == -1 || p.manche[p.manche.length - 1].s2 == -1) {
                if (p.id_j1 == this.u.id)
                    this._router.navigate(['Jouer', { us: this.u.id, id: p.id_j2, th: p.manche[p.manche.length - 1].id_theme }]);
                else
                    this._router.navigate(['Jouer', { us: this.u.id, id: p.id_j1, th: p.manche[p.manche.length - 1].id_theme }]);
            }
            else {
                if (p.id_j1 == this.u.id)
                    this._router.navigate(['JouerChoix', { us: this.u.id, id: p.id_j2 }]);
                else
                    this._router.navigate(['JouerChoix', { us: this.u.id, id: p.id_j1 }]);
            }
        }
    };
    ContactComponent.prototype.gotoDeco = function () {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    };
    ContactComponent.prototype.gotoContact = function () {
        this.type = 'ami';
        this.getContacts();
    };
    ContactComponent.prototype.gotoOnline = function () {
        this.type = 'online';
        this.getContacts();
    };
    ContactComponent.prototype.addAmi = function () {
        var _this = this;
        this._contactService.Add(this.contactadd, this.contactadd, this.u.id)
            .subscribe(function (data) { return _this.addmessage = data; });
        this.contactadd = null;
    };
    ContactComponent.prototype.jouer = function () {
        var _this = this;
        this._contactService.Jouer(this.u.id)
            .subscribe(function (data) { return _this.jouermessage = data; });
        this.sTimeout = setTimeout(function () { if (_this.jouermessage.text == "go") {
            _this._router.navigate(['JouerChoix', { us: _this.u.id, id: _this.jouermessage.id }]);
        }
        else {
            alert(_this.jouermessage.text);
        } }, 1000);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-contact',
            pipes: [recherche_pipe_1.RecherchePipe],
            providers: [http_1.HTTP_PROVIDERS],
            templateUrl: 'app/contact.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, contact_service_1.ContactService, partie_service_1.PartieService, router_2.RouteParams, utilisateur_service_1.UtilisateurService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=contact.component.js.map