import {Component}  from 'angular2/core';
import {Footer} from './footer';
import {AmiApp} from './ami_app';
import {Top} from './top';


@Component({
    selector: 'acc-app',
    template: `
<top class="container" style= "display: block" > Loading...</top>
<ami-app class="container" style= "display: block" > Loading...</ami-app>
<footer class="container" style= "display: block" > Loading...</footer>

`, directives: [Top, AmiApp, Footer]
})
export class AccApp {

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/