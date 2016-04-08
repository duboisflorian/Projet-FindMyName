import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';

import { Ami } from './ami';
import { Theme } from './theme';
import { AmiService } from './ami.service';
import { ThemeService } from './theme.service';
import { JouerComponent } from './jouer.component';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './utilisateur';

@Component({
    selector: 'my-jouer-choix',
    templateUrl: 'app/jouer-choix.component.html'
})
export class JouerChoixComponent implements OnInit {
    @Input() ami: Ami;

    themes: Theme[] = [];
    selectedTheme: Theme;
    directives: [JouerComponent];
    u: Utilisateur;

    constructor(
        private _amiService: AmiService,
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
        this._themeService.getThemes()
            .then(themes => this.themes = themes.slice(1, 5));
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
    }
    gotoAmis() {
        this._router.navigate(['Amis', { us: this.u.id }]);
    }
    goBack() {
        window.history.back();
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