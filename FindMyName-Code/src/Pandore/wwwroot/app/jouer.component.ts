import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Reponse } from './reponses';
import { Jouer } from './jouer';
import { JouerService } from './jouer.service';
import { ThemeService } from './theme.service';

@Component({
    selector: 'my-jouer',
    templateUrl: 'app/jouer.component.html'
})
export class JouerComponent implements OnInit {


    reponses: Jouer;

    constructor(
        private _jouerService: JouerService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this.reponses = this._jouerService.getReponses(id);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/