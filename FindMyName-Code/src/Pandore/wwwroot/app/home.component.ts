import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { CoComponent } from './co.component';
import { InComponent } from './in.component';


@Component({
    selector: 'my-home',
    templateUrl: 'app/home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(
        private _router: Router) { }

    gotoCo() {
        this._router.navigate(['Co']);
    }
    gotoIn() {
        this._router.navigate(['In']);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*///Unexpected directive value 'undefined' on the View of component 