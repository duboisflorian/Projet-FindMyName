import {Component, Input} from 'angular2/core';
import {Ami} from './ami';

@Component({
    selector: 'ami-list',
    styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
    ],
    template: `
    <ul class="list-unstyled">
      <li *ngFor="#ami of amis">
        <img src="{{ami.photo}}" alt="{{ami.id}}" (click)="Detail(ami.id)" style="width:50px;height:50px;">
        <span >{{ami.text}}</span>
      </li>
    </ul>`
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