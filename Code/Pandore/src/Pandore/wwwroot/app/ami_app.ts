import {Component} from 'angular2/core';
import {Ami} from './ami';
import {AmiForm} from './ami_form';
import {AmiList} from './ami_list';

@Component({
    selector: 'ami-app',
    template: `
        <div style="background-color:red" >
    <ul class="list-unstyled"> <li><img src="fichier/logo.jpg" alt="0" style="width:50px;height:50px;"><span>TingTing (moi)</span></li></ul>
    <h3>Liste des Amis</h3>
    <ami-list [amis]="amis"></ami-list>
    <ami-form (newFriend)="addFriend($event)"></ami-form>
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