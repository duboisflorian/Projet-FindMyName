var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var mock_parti_1 = require('../data/mock-parti');
var core_1 = require('angular2/core');
var theme_service_1 = require('../service/theme.service');
var mock_themes_1 = require('../data/mock-themes');
var PartieService = (function () {
    function PartieService(_tService) {
        this._tService = _tService;
    }
    //toutes les parties d'un utilisateur en cours
    PartieService.prototype.getPartiesEnCours = function (us) {
        var p = [];
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us || mock_parti_1.PARTIES[i].id_j2 == us) && mock_parti_1.PARTIES[i].s1 < 3 && mock_parti_1.PARTIES[i].s2 < 3)
                p.push(mock_parti_1.PARTIES[i]);
        }
        return p;
    };
    //savoir si il y a une partie en cours entre deux personnes
    PartieService.prototype.getEn_Cours = function (us, ami) {
        for (var i = mock_parti_1.PARTIES.length - 1; i >= 0; i--) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us)) {
                if (mock_parti_1.PARTIES[i].player == null) {
                    return false;
                }
                else {
                    return true;
                }
            }
        }
        return false;
    };
    PartieService.prototype.getPartieEnCours = function (us, ami) {
        for (var i = mock_parti_1.PARTIES.length - 1; i >= 0; i--) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us))
                return mock_parti_1.PARTIES[i];
        }
    };
    PartieService.prototype.getHistorique = function (us, ami) {
        var p = [];
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us))
                p.push(mock_parti_1.PARTIES[i]);
        }
        return p;
    };
    PartieService.prototype.getNbVictoire = function (us, ami) {
        var nb = 0;
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us))
                if (((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].s1 > mock_parti_1.PARTIES[i].s2) || (mock_parti_1.PARTIES[i].s1 < mock_parti_1.PARTIES[i].s2 && mock_parti_1.PARTIES[i].id_j2 == us)) && mock_parti_1.PARTIES[i].player == null)
                    nb++;
        }
        return nb;
    };
    PartieService.prototype.getNbDefaite = function (us, ami) {
        var nb = 0;
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us))
                if (((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].s1 < mock_parti_1.PARTIES[i].s2) || (mock_parti_1.PARTIES[i].s1 > mock_parti_1.PARTIES[i].s2 && mock_parti_1.PARTIES[i].id_j2 == us)) && mock_parti_1.PARTIES[i].player == null)
                    nb++;
        }
        return nb;
    };
    PartieService.prototype.getPartieExiste = function (us, ami) {
        for (var i = mock_parti_1.PARTIES.length - 1; i >= 0; i--) {
            if (((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].id_j2 == ami) || (mock_parti_1.PARTIES[i].id_j1 == ami && mock_parti_1.PARTIES[i].id_j2 == us)) && (mock_parti_1.PARTIES[i].player == us || mock_parti_1.PARTIES[i].player == ami))
                return mock_parti_1.PARTIES[i];
        }
        return null;
    };
    PartieService.prototype.AjouterPartie = function (us, ami, th, score, j1, j2) {
        var id_partie = mock_parti_1.PARTIES.length + 1;
        var theme = this._tService.getName(th);
        mock_parti_1.PARTIES.push({ "id_partie": id_partie, "id_j1": us, "id_j2": ami, "j1": j1, "j2": j2, "s1": 0, "s2": 0, "player": ami, "manche": [{ "id_theme": th, "theme": theme, "s1": score, "s2": null },] });
    };
    PartieService.prototype.ModifierPartie = function (us, ami, th, score, partie) {
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if (mock_parti_1.PARTIES[i].id_partie == partie.id_partie) {
                var n = mock_parti_1.PARTIES[i].manche.length - 1;
                if (mock_parti_1.PARTIES[i].manche[n].s1 == null) {
                    mock_parti_1.PARTIES[i].manche[n].s1 = score;
                    if (mock_parti_1.PARTIES[i].manche[n].s1 > mock_parti_1.PARTIES[i].manche[n].s2) {
                        mock_parti_1.PARTIES[i].s1 = mock_parti_1.PARTIES[i].s1 + 1;
                    }
                    if (mock_parti_1.PARTIES[i].manche[n].s1 < mock_parti_1.PARTIES[i].manche[n].s2) {
                        mock_parti_1.PARTIES[i].s2 = mock_parti_1.PARTIES[i].s2 + 1;
                    }
                    if (mock_parti_1.PARTIES[i].s2 == 3 || mock_parti_1.PARTIES[i].s1 == 3) {
                        mock_parti_1.PARTIES[i].player = null;
                    }
                }
                else if (mock_parti_1.PARTIES[i].manche[n].s2 == null) {
                    mock_parti_1.PARTIES[i].manche[n].s2 = score;
                    if (mock_parti_1.PARTIES[i].manche[n].s1 > mock_parti_1.PARTIES[i].manche[n].s2) {
                        mock_parti_1.PARTIES[i].s1 = mock_parti_1.PARTIES[i].s1 + 1;
                    }
                    if (mock_parti_1.PARTIES[i].manche[n].s1 < mock_parti_1.PARTIES[i].manche[n].s2) {
                        mock_parti_1.PARTIES[i].s2 = mock_parti_1.PARTIES[i].s2 + 1;
                    }
                    if (mock_parti_1.PARTIES[i].s2 == 3 || mock_parti_1.PARTIES[i].s1 == 3) {
                        mock_parti_1.PARTIES[i].player = null;
                    }
                }
                else {
                    var theme = this._tService.getName(th);
                    if (us == mock_parti_1.PARTIES[i].id_j1)
                        mock_parti_1.PARTIES[i].manche.push({ "id_theme": th, "theme": theme, "s1": score, "s2": null });
                    else
                        mock_parti_1.PARTIES[i].manche.push({ "id_theme": th, "theme": theme, "s1": null, "s2": score });
                    mock_parti_1.PARTIES[i].player = ami;
                }
            }
        }
    };
    PartieService.prototype.getnbParties = function (u) {
        var nb = 0;
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if (mock_parti_1.PARTIES[i].id_j1 == u || mock_parti_1.PARTIES[i].id_j2 == u)
                nb++;
        }
        return nb;
    };
    PartieService.prototype.getThemeFavori = function (u) {
        var th = "acun pour le moment";
        var c1 = 0, c2 = 0;
        for (var i = 0; i < mock_themes_1.THEMES.length; i++) {
            for (var j = 0; j < mock_parti_1.PARTIES.length; j++) {
                if (mock_parti_1.PARTIES[j].id_j1 == u || mock_parti_1.PARTIES[j].id_j2 == u) {
                    for (var h = 0; h < mock_parti_1.PARTIES[j].manche.length; h++) {
                        if (th == "acun pour le moment") {
                            if (mock_parti_1.PARTIES[j].manche[h].id_theme == mock_themes_1.THEMES[i].id)
                                c1++;
                        }
                        else {
                            if (mock_parti_1.PARTIES[j].manche[h].id_theme == mock_themes_1.THEMES[i].id) {
                                c2++;
                            }
                        }
                    }
                }
            }
            if (th == "acun pour le moment") {
                th = mock_themes_1.THEMES[i].text;
                c2 = 0;
            }
            if (c2 > c1) {
                c1 = c2;
                th = mock_themes_1.THEMES[i].text;
            }
            c2 = 0;
        }
        return th;
    };
    PartieService.prototype.getNbV = function (us) {
        var nb = 0;
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us || mock_parti_1.PARTIES[i].id_j2 == us) && mock_parti_1.PARTIES[i].player == null)
                if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].s1 > mock_parti_1.PARTIES[i].s2) || (mock_parti_1.PARTIES[i].s1 < mock_parti_1.PARTIES[i].s2 && mock_parti_1.PARTIES[i].id_j2 == us))
                    nb++;
        }
        return nb;
    };
    PartieService.prototype.getNbD = function (us) {
        var nb = 0;
        for (var i = 0; i < mock_parti_1.PARTIES.length; i++) {
            if ((mock_parti_1.PARTIES[i].id_j1 == us || mock_parti_1.PARTIES[i].id_j2 == us) && mock_parti_1.PARTIES[i].player == null)
                if ((mock_parti_1.PARTIES[i].id_j1 == us && mock_parti_1.PARTIES[i].s1 < mock_parti_1.PARTIES[i].s2) || (mock_parti_1.PARTIES[i].s1 > mock_parti_1.PARTIES[i].s2 && mock_parti_1.PARTIES[i].id_j2 == us))
                    nb++;
        }
        return nb;
    };
    PartieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [theme_service_1.ThemeService])
    ], PartieService);
    return PartieService;
})();
exports.PartieService = PartieService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=partie.service.js.map