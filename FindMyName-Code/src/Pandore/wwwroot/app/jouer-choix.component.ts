import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';

import { Ami } from './ami';
import { Theme } from './theme';
import { AmiService } from './ami.service';
import { ThemeService } from './theme.service';
import { JouerComponent } from './jouer.component';

@Component({
    selector: 'my-jouer-choix',
    templateUrl: 'app/jouer-choix.component.html',
    directives: [JouerComponent]
})
export class JouerChoixComponent implements OnInit {
    @Input() ami: Ami;

    themes: Theme[] = [];
    selectedTheme: Theme;
    directives: [JouerComponent];

    constructor(
        private _amiService: AmiService,
        private _router: Router,
        private _themeService: ThemeService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._amiService.getAmi(id)
            .then(ami => this.ami = ami);
        this._themeService.getThemes()
            .then(themes => this.themes = themes.slice(1, 5));
    }

    goBack() {
        window.history.back();
    }

    onSelect(theme: Theme) { this.selectedTheme = theme; }

    gotoJouer() {
        let link = ['Jouer', { id: this.selectedTheme.id }];
        this._router.navigate(link);
        //this._router.navigate(['Jouer', { id: this.selectedTheme.id }]);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/