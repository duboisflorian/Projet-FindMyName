﻿import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';
import { Theme } from './classe/theme';
import { ThemeService } from './service/theme.service';
import { JouerComponent } from './jouer.component';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';

@Component({
    selector: 'my-jouer-choix',
    templateUrl: 'app/jouer-choix.component.html'
})
export class JouerChoixComponent implements OnInit {

    themes: Theme[] = [];
    selectedTheme: Theme;
    directives: [JouerComponent];
    u: Utilisateur;
    sTimeout: number;

    constructor(
        private _router: Router,
        private _themeService: ThemeService,
        private _uService: UtilisateurService,
        private _routeParams: RouteParams) {
    }
    gotoDeco() {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    }
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.themes = this._themeService.getThemes();
        /*this._themeService.getThemes()
            .then(themes => this.themes = themes.slice(0, 4));*/
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.sTimeout = setTimeout(() => this.endTimer(), 3000);
        //setTimeout(this.endTimer, 3000);
    }
    gotoContact() {
        this._router.navigate(['Contact', { us: this.u.id }]);
    }
    goBack() {
        window.history.back();
    }
    endTimer() {
        var selectedTheme = this.themes[1];
        this.gotoJouer(selectedTheme);
    }

    onSelect(theme: Theme) {
        this.selectedTheme = theme;  
    }

    gotoJouer(theme: Theme) {
        this.selectedTheme = theme;  
        let id = +this._routeParams.get('id');
        let link = ['Jouer', { us: this.u.id, id: id ,th: this.selectedTheme.id }];
        this._router.navigate(link);
        //this._router.navigate(['Jouer', { id: this.selectedTheme.id }]);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
