import {Component, Output, EventEmitter} from 'angular2/core';
import {Ami} from './ami';

@Component({
    selector: 'ami-form',
    template: `
    <form (ngSubmit)="addAmi()">
      <input type="text" [(ngModel)]="firend" size="30"
             placeholder="entrer le nom d'une personne">
      <input class="btn-primary" type="submit" value="ajouter">
    </form>`
})
export class AmiForm {
    @Output() newFriend = new EventEmitter<Ami>();
    friend: string = '';

    addAmi() {
        if (this.friend) {
                    this.newFriend.next({ text: this.friend, id: '1', photo : 'test' });
                }
            
            this.friend = '';
        }
    }



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/