import {Component, Output, EventEmitter} from 'angular2/core';
import {Ami} from './ami';

@Component({
    selector: 'ami-form',
    template: `
    <form (ngSubmit)="addAmi()">
      <input type="text" [(ngModel)]="friend" size="30"
             placeholder="entrer l'id de la personne">
      <input class="btn-primary" type="submit" value="ajouter">
    </form>`
})
export class AmiForm {
    @Output() newFriend = new EventEmitter<Ami>();
    friend: string = '';

    liste_personnes: Ami[] = [
        { text: 'florian', id: '1', photo:'fichier/logo.jpg' },
        { text: 'Yani', id: '2', photo: 'fichier/logo.jpg'},
        { text: 'Maxime', id: '3', photo: 'fichier/logo.jpg' },
        { text: 'Lionel', id: '4', photo: 'fichier/logo.jpg' },
        { text: 'Diego', id: '5', photo: 'fichier/logo.jpg' },
    ];

    addAmi() {
        if (this.friend) {
            this.newFriend.next({ text: this.friend, id: '2', photo: 'fichier/logo.jpg' });
                }
            
            this.friend = '';
        }
    }



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/