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
var ami_service_1 = require('./ami.service');
var utilisateur_service_1 = require('./utilisateur.service');
var partie_service_1 = require('./partie.service');
var recherche_pipe_Online_1 = require('./recherche-pipe-Online');
var OnlineComponent = (function () {
    function OnlineComponent(_router, _amiService, _pService, _routeParams, _uService) {
        this._router = _router;
        this._amiService = _amiService;
        this._pService = _pService;
        this._routeParams = _routeParams;
        this._uService = _uService;
        this.victoire = 0;
        this.defaite = 0;
        this.searchOnline = '';
    }
    OnlineComponent.prototype.getOnline = function () {
        this.onlines = this._amiService.getOnline(this.u.id);
    };
    OnlineComponent.prototype.gotoDetail = function () {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    };
    OnlineComponent.prototype.UserD = function (id) {
        this.parties_en_cours = this._pService.getPartiesEnCours(id);
    };
    OnlineComponent.prototype.ngOnInit = function () {
        var us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.getOnline();
        this.UserD(us);
        this.selectedOnline = null;
    };
    OnlineComponent.prototype.showDetails = function (h) {
        alert(h.id_partie);
    };
    OnlineComponent.prototype.onSelect = function (online) {
        this.selectedOnline = online;
        this.selectedDetails = null;
        this.en_cours = this._pService.getEn_Cours(this.u.id, online.id);
        if (this.en_cours == true) {
            this.partie_en_cours = this._pService.getPartieEnCours(this.u.id, online.id);
        }
        else {
            this.historique = this._pService.getHistorique(this.u.id, online.id);
            this.victoire = this._pService.getNbVictoire(this.u.id, online.id);
            this.defaite = this._pService.getNbDefaite(this.u.id, online.id);
        }
    };
    OnlineComponent.prototype.onSelectU = function () { this.selectedOnline = null; this.selectedDetails = null; };
    OnlineComponent.prototype.gotoJouer = function (p) {
        if (this.selectedOnline == null) {
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
            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.selectedOnline.id }]);
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
    OnlineComponent.prototype.gotoDeco = function () {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    };
    OnlineComponent.prototype.gotoAmis = function () {
        this._router.navigate(['Amis', { us: this.u.id }]);
    };
    OnlineComponent.prototype.gotoOnline = function () {
        this._router.navigate(['Online', { us: this.u.id }]);
    };
    OnlineComponent.prototype.jouerOnline = function () {
        this.b = false;
        for (this.i = 0; this.i < 200; this.i++) {
            this.r = this._uService.getOnlineutilisateur();
            if (this._amiService.getOnlineExiste(this.r, this.u.id)) {
                this._amiService.addOnline(this._uService.getUtilisateur(this.r), this.u.id);
                this._router.navigate(['JouerChoix', { us: this.u.id, id: this.r }]);
                this.b = true;
                break;
            }
        }
        if (!this.b) {
            alert("Aucun joueur trouvé pour le moment. Nous sommes désolé.");
        }
    };
    OnlineComponent = __decorate([
        core_1.Component({
            selector: 'my-online',
            pipes: [recherche_pipe_Online_1.RecherchePipeOnline],
            templateUrl: 'app/online.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, ami_service_1.AmiService, partie_service_1.PartieService, router_2.RouteParams, utilisateur_service_1.UtilisateurService])
    ], OnlineComponent);
    return OnlineComponent;
})();
exports.OnlineComponent = OnlineComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=online.component.js.map