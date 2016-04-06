import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Ami } from './ami';
import { AmiService } from './ami.service';
import { JouerChoixComponent } from './jouer-choix.component';

@Component({
    selector: 'my-amis',
    templateUrl: 'app/amis.component.html',
    directives: [JouerChoixComponent]
})
export class AmisComponent implements OnInit {
    amis: Ami[];
    selectedAmi: Ami;

    constructor(
        private _router: Router,
        private _amiService: AmiService) { }

    getAmis() {
        this._amiService.getAmis().then(amis => this.amis = amis);
    }

    ngOnInit() {
        this.getAmis();
    }

    onSelect(ami: Ami) { this.selectedAmi = ami; }

    gotoJouer() {
        this._router.navigate(['JouerChoix', { id: this.selectedAmi.id }]);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/