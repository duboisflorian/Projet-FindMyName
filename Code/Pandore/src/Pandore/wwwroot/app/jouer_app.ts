import {Component}  from 'angular2/core';
import {TodoApp}   from './todo_app';
import {AmiApp} from './ami_app';


@Component({
    selector: 'jouer-app',
    template: `

             <ami-app class="container" style= "display: block" > Loading...</ami-app>

             <todo-app class="container" style= "display: block" > Loading...</todo-app>

`,directives: [TodoApp, AmiApp]
})
export class JouerApp {

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/