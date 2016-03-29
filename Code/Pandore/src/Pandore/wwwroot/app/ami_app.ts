import {Component} from 'angular2/core';
import {Ami} from './ami';
import {AmiForm} from './ami_form';
import {AmiList} from './ami_list';

@Component({
    selector: 'ami-app',
    template: `
    <div class="container core">
        <div class="row">
            <ul class="nav nav-button col-sm-2 col-md-2">
                <li class="active"><a href="#">Ami</a></li>
                <li><a href="#">Online</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-sm-2 col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="active">
                        <a href="#">
                            <img class="portrait" src="fichier/Portrait.png" /><span class="nom"> Florian</span>
                        </a>
                    </li>
                 <ami-list [amis]="amis"></ami-list>
               </ul>
            </div>
        </div>
        <div class="row">
            <div class="nav nav-ajouter col-sm-2 col-md-2">
                    <ami-form (newFriend)="addFriend($event)"></ami-form>
            </div>
        </div>
    </div>

`, directives: [AmiForm, AmiList]
})
export class AmiApp {
    amis: Ami[] = [
        {text: 'florian', id:'1', photo:'fichier/logo.jpg'}
    ];


    addFriend(friend: Ami) {
        var t = 0;
        for (var i = 0; i < this.amis.length; i++) {
            if (this.amis[i].text == friend.text && this.amis[i].id == friend.id) {
                t = 1;
            }
        }
        if (t == 0) this.amis.push(friend); else alert('Vous avez déjà cette personne en ami');
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/