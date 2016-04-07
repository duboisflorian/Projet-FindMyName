import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { CoComponent } from './co.component';
import { HomeComponent } from './home.component';


@Component({
    selector: 'my-in',
    templateUrl: 'app/in.component.html'
})
export class InComponent implements OnInit {

    constructor(
        private _router: Router) { }

    gotoHome() {
        this._router.navigate(['Home']);
    }
    gotoCo() {
        this._router.navigate(['Co']);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
directives: [CoComponent, HomeComponent]*/