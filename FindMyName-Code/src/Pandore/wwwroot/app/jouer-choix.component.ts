import { Component, Input, OnInit, OnDestroy } from 'angular2/core';
import { RouteParams, Router  } from 'angular2/router';
import { Theme } from './classe/theme';
import { ThemeService } from './service/theme.service';
import { JouerComponent } from './jouer.component';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur, UtilisateurViewModel } from './classe/utilisateur';

@Component({
    selector: 'my-jouer-choix',
    templateUrl: 'app/jouer-choix.component.html'
})
export class JouerChoixComponent implements OnInit {

    themes: Theme[] = [];
    selectedTheme: Theme;
    directives: [JouerComponent];
    u: UtilisateurViewModel = { "id": 1, "name": "en attente", "photo": "fichier/logo.jpg"};
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
        this._themeService.getThemes().subscribe(data => this.themes = data);;
        let us = +this._routeParams.get('us');
        this._uService.getUserView(us)
            .subscribe(data => this.u = data);
        this.sTimeout = setTimeout(() => this.endTimer(), 6000);
    }
    gotoContact() {
        this._router.navigate(['Contact', { us: this.u.id }]);
    }
    goBack() {
        window.history.back();
    }
    endTimer() {
        let id = +this._routeParams.get('id');
        let link = ['Jouer', { us: this.u.id, id: id, th: this.themes[1].id }];
        this._router.navigate(link);
    }

    onSelect(theme: Theme) {
        this.selectedTheme = theme;
    }

    ngOnDestroy() {
        clearTimeout(this.sTimeout);
    }

    gotoJouer(theme: Theme) {
        this.selectedTheme = theme;
        let id = +this._routeParams.get('id');
        let link = ['Jouer', { us: this.u.id, id: id, th: this.selectedTheme.id }];
        this._router.navigate(link);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
