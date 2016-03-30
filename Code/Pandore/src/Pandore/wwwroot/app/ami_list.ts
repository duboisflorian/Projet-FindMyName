import {Component, Input} from 'angular2/core';
import {Ami} from './ami';

@Component({
    selector: 'ami-list',
    template: `
    <li><form class="form"><input id="recherche" class="form-control form-recherche" placeholder="Rachercher un ami" required="" type="text"></form></li>
    <li *ngFor="#ami of amis"><a href="{{ami.id}}"><img class="portrait" src="{{ami.photo}}" (click)="Detail(ami.id)" /><span class="nom"> {{ami.text}} </span></a></li>
`
})
export class AmiList {
    @Input() amis: Ami[];

    Detail(id) {
        alert(id);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/