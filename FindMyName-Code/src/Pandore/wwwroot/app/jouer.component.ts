import { Component, Input, OnInit, Output, EventEmitter } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';
import { Reponse } from './classe/reponses';
import { Jouer } from './classe/jouer';
import { JouerService } from './service/jouer.service';
import { ThemeService } from './service/theme.service';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';
import { Theme } from './classe/theme';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-jouer',
    templateUrl: 'app/jouer.component.html'
})
export class JouerComponent implements OnInit {
    task: string = '';
    reponse: Reponse[] = [
    ];
    remaining: number=0;

    tabreponses: Jouer;
    u: Utilisateur;
    bon: boolean;
    theme: Theme;

    constructor(
        private _router: Router,
        private _jouerService: JouerService,
        private _themeService: ThemeService,
        private _uService: UtilisateurService,
        private _routeParams: RouteParams) { }
    gotoDeco() {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    }
    gotoContact() {
        this._router.navigate(['Contact', { us: this.u.id }]);
    }
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }
    ngOnInit() {
        let th = +this._routeParams.get('th');
        this.tabreponses =  this._jouerService.getReponses(th);
        for (var i = 0; i < this.tabreponses.reponses.length; i++) {
                this.tabreponses.reponses[i].done = false;
        }
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.theme = this._themeService.getTheme(th);
        this.starttimer();
    }
    getReponse() {
        return this.reponse;
    }
    getRemaining() {
        return this.remaining;
    }

    addTodo() {
        this.bon = false;
        if (this.task) {
            for (var i = 0; i < this.tabreponses.reponses.length; i++) {
                if (this.tabreponses.reponses[i].text.toLowerCase() == this.task.toLowerCase() && this.tabreponses.reponses[i].done == false) {
                    this.reponse.push({ "text": this.task, "done": true });
                    this.remaining++;
                    this.tabreponses.reponses[i].done = true;
                    this.bon = true;
                }
            }
            if (this.bon != true) {
                this.bon = false;
            }
            this.task = '';
            let timer = Observable.timer(0, 5000);
            timer.subscribe(t=> {
                this.bon = null;
            });
        }
    }
    starttimer() {
        this.countdown(1, 0, this._router, this.u.id);
    }

    countdown(minutes, seconds, _router, id) {
        var element, endTime, hours, mins, msLeft, time;

        function twoDigits(n) {
            return (n <= 9 ? "0" + n : n);
        }

        function updateTimer() {
            msLeft = endTime - (+new Date);
            if (msLeft < 1000) {
                alert("gg");
                _router.navigate(['Contact', { us: id }]);
            } else {
                time = new Date(msLeft);
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
                setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
            }
        }

        element = document.getElementById("countdown");
        endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
        updateTimer();
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
