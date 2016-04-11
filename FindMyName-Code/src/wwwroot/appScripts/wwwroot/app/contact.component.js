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
var ContactComponent = (function () {
    function ContactComponent(_router, _contactService, _pService, _routeParams, _uService) {
        this._router = _router;
        this._contactService = _contactService;
        this._pService = _pService;
        this._routeParams = _routeParams;
        this._uService = _uService;
        this.victoire = 0;
        this.defaite = 0;
        this.searchFriend = '';
        this.type = '';
    }
    ContactComponent.prototype.getContacts = function () {
        this.contacts = this._contactService.getContacts(this.u.id, this.type);
    };
    ContactComponent.prototype.gotoDetail = function () {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    };
    ContactComponent.prototype.UserD = function (id) {
        this.parties_en_cours = this._pService.getPartiesEnCours(id);
    };
    ContactComponent.prototype.prompt_add = function () {
        var val;
        val = prompt('Entrer un id', '');
        this.contactadd = parseInt(val);
        this.addAmi();
        this.getContacts();
    };
    ContactComponent.prototype.ngOnInit = function () {
        var us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.UserD(us);
        this.selectedContact = null;
        this.type = 'ami';
        this.getContacts();
    };
    ContactComponent.prototype.showDetails = function (h) {
        this.selectedContact = null;
        this.selectedDetails = h;
    };
    ContactComponent.prototype.onSelect = function (contact) {
        this.selectedContact = contact;
        this.selectedDetails = null;
        this.en_cours = this._pService.getEn_Cours(this.u.id, contact.id);
        if (this.en_cours == true) {
            this.partie_en_cours = this._pService.getPartieEnCours(this.u.id, contact.id);
        }
        else {
            this.historique = this._pService.getHistorique(this.u.id, contact.id);
            this.victoire = this._pService.getNbVictoire(this.u.id, contact.id);
            this.defaite = this._pService.getNbDefaite(this.u.id, contact.id);
        }
    };
    ContactComponent.prototype.onSelectU = function () { this.selectedContact = null; this.selectedDetails = null; };
    ContactComponent.prototype.gotoJouer = function (p) {
        if (this.selectedContact == null) {
            for (var i = 0; i < this.parties_en_cours.length; i++) {
                if (this.parties_en_cours[i].id_partie == p.id_partie) {
                    if (this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s1 == null || this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s2 == null) {
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
        if (this.en_cours == false)
            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.selectedContact.id }]);
        if (this.en_cours == true) {
            if (p.manche[p.manche.length - 1].s1 == null || p.manche[p.manche.length - 1].s2 == null) {
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
        if (this.utilisateurs = this._uService.getUtilisateur(this.contactadd)) {
            if ((this.t = this._contactService.getAmiExiste(this.contactadd, this.u.id)) || this.contactadd == this.u.id) {
                alert("cette personne est déjà dans tes amis");
                this.contactadd = null;
            }
            else {
                this._contactService.addAmi(this.utilisateurs, this.u.id);
                this.contactadd = null;
            }
        }
        else {
            alert("cette personne n'existe pas");
            this.contactadd = null;
        }
    };
    ContactComponent.prototype.jouer = function () {
        var b = false;
        var r;
        for (var i = 0; i < 200; i++) {
            r = this._uService.getOnlineutilisateur();
            if (this._contactService.getOnlineExiste(r, this.u.id)) {
                this._contactService.addOnline(this._uService.getUtilisateur(r), this.u.id);
                this._router.navigate(['JouerChoix', { us: this.u.id, id: r }]);
                b = true;
                break;
            }
        }
        if (!b) {
            alert("Aucun joueur trouvé pour le moment. Nous sommes désolé.");
        }
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-contact',
            pipes: [recherche_pipe_1.RecherchePipe],
            templateUrl: 'app/contact.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, contact_service_1.ContactService, partie_service_1.PartieService, router_2.RouteParams, utilisateur_service_1.UtilisateurService])
    ], ContactComponent);
    return ContactComponent;
})();
exports.ContactComponent = ContactComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=contact.component.js.map