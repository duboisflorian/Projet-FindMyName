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
var recherche_pipe_1 = require('./recherche-pipe');
var AmisComponent = (function () {
    function AmisComponent(_router, _amiService, _pService, _routeParams, _uService) {
        this._router = _router;
        this._amiService = _amiService;
        this._pService = _pService;
        this._routeParams = _routeParams;
        this._uService = _uService;
        this.victoire = 0;
        this.defaite = 0;
        this.searchFriend = '';
    }
    AmisComponent.prototype.getAmis = function () {
        this.amis = this._amiService.getAmis(this.u.id);
    };
    AmisComponent.prototype.gotoDetail = function () {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    };
    AmisComponent.prototype.UserD = function (id) {
        this.parties_en_cours = this._pService.getPartiesEnCours(id);
    };
    AmisComponent.prototype.test = function () {
        var val;
        val = prompt('Entrer un id', '');
        this.amiadd = parseInt(val);
        alert(this.amiadd);
        this.addAmi();
    };
    AmisComponent.prototype.ngOnInit = function () {
        var us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.getAmis();
        this.UserD(us);
        this.selectedAmi = null;
    };
    AmisComponent.prototype.showDetails = function (h) {
        this.selectedAmi = null;
        this.selectedDetails = h;
        alert(h.id_partie);
    };
    AmisComponent.prototype.onSelect = function (ami) {
        this.selectedAmi = ami;
        this.selectedDetails = null;
        this.en_cours = this._pService.getEn_Cours(this.u.id, ami.id);
        if (this.en_cours == true) {
            this.partie_en_cours = this._pService.getPartieEnCours(this.u.id, ami.id);
        }
        else {
            this.historique = this._pService.getHistorique(this.u.id, ami.id);
            this.victoire = this._pService.getNbVictoire(this.u.id, ami.id);
            this.defaite = this._pService.getNbDefaite(this.u.id, ami.id);
        }
    };
    AmisComponent.prototype.onSelectU = function () { this.selectedAmi = null; this.selectedDetails = null; };
    AmisComponent.prototype.gotoJouer = function (p) {
        if (this.selectedAmi == null) {
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
            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.selectedAmi.id }]);
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
    AmisComponent.prototype.gotoDeco = function () {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    };
    AmisComponent.prototype.gotoAmis = function () {
        this._router.navigate(['Amis', { us: this.u.id }]);
    };
    AmisComponent.prototype.gotoOnline = function () {
        this._router.navigate(['Online', { us: this.u.id }]);
    };
    AmisComponent.prototype.addAmi = function () {
        if (this.utilisateurs = this._uService.getUtilisateur(this.amiadd)) {
            if (this.t = this._amiService.getAmiExiste(this.amiadd, this.u.id)) {
                alert("cette personne est déjà dans tes amis");
                this.amiadd = null;
            }
            else {
                this._amiService.add(this.utilisateurs, this.u.id);
                this.amiadd = null;
            }
        }
        else {
            alert("cette personne n'existe pas");
            this.amiadd = null;
        }
    };
    AmisComponent = __decorate([
        core_1.Component({
            selector: 'my-amis',
            pipes: [recherche_pipe_1.RecherchePipe],
            templateUrl: 'app/amis.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, ami_service_1.AmiService, partie_service_1.PartieService, router_2.RouteParams, utilisateur_service_1.UtilisateurService])
    ], AmisComponent);
    return AmisComponent;
})();
exports.AmisComponent = AmisComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=amis.component.js.map