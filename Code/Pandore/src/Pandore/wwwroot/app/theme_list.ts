﻿import {Component, Input} from 'angular2/core';
import {Theme} from './theme';

@Component({
    selector: 'theme-list',
    template: `
    <ul class="list-unstyled">
        <li class="theme" *ngFor="#themes of theme"><a href="jouer.html"><img class="image-theme" src="{{themes.photo}}" (click)="Detail(themes.text)" /></a> </li>
    </ul>
`
})
export class ThemeList {
    @Input() theme: Theme[];

    Detail(id) {
        alert(id);
    }
    //Math.floor(Math.random() * 6) + 1 
    // manque le random
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/