import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { HomeComponent } from './home.component';
import { InComponent } from './in.component';


@Component({
    selector: 'my-co',
    templateUrl: 'app/co.component.html'
})
export class CoComponent implements OnInit {

    constructor(
        private _router: Router) { }

    gotoIn() {
        this._router.navigate(['In']);
    }
    gotoHome() {
        this._router.navigate(['Home']);
    }
    gotoAmi() {
        this._router.navigate(['Amis', { us: 6 }]);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//,
//directives: [HomeComponent, InComponent]