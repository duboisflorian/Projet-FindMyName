import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Ami } from './ami';
import { Theme } from './theme';
import { AmiService } from './ami.service';
import { ThemeService } from './theme.service';

@Component({
    selector: 'my-jouer-choix',
    templateUrl: 'app/jouer-choix.component.html'
})
export class JouerChoixComponent implements OnInit {
    @Input() ami: Ami;

    themes: Theme[] = [];

    constructor(
        private _amiService: AmiService,
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
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/