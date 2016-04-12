import { Component, Input, OnInit, Output, EventEmitter } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';
import { Reponse } from './classe/reponses';
import { Jouer } from './classe/jouer';
import { Partie } from './classe/partie';
import { JouerService } from './service/jouer.service';
import { ThemeService } from './service/theme.service';
import { PartieService } from './service/partie.service';
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
    remaining: number = 0;

    tabreponses: Jouer;
    u: Utilisateur;
    bon: boolean;
    theme: Theme;
    p: Partie;
    sTimeout: number;

    constructor(
        private _router: Router,
        private _jouerService: JouerService,
        private _themeService: ThemeService,
        private _pService: PartieService,
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
        this.tabreponses = this._jouerService.getReponses(th);
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
                    let timer = Observable.timer(0, 5000);
                    timer.subscribe(t=> {
                        this.bon = null;
                    });
                }
            }
            if (this.bon != true) {
                this.bon = false;
                let timer = Observable.timer(0, 5000);
                timer.subscribe(t=> {
                    this.bon = null;
                });
            }
            this.task = '';
        }
    }
    starttimer() {
        this.countdown(0, 30, this._router, this.u.id);
        this.sTimeout = setTimeout(() => this.gotoContact(), 120000);
    }
    ngOnDestroy() {
        clearTimeout(this.sTimeout);
        let id = +this._routeParams.get('id');
        let us = +this._routeParams.get('us');
        let th = +this._routeParams.get('th');
        this.p = this._pService.getPartieExiste(us, id)
        if (this.p == null || this.p.player == null) {
            this._pService.AjouterPartie(us, id, th, this.remaining);
        }
        if (this.p.player != null) {
            this._pService.ModifierPartie(us, id, th, this.remaining, this.p);
        }
        clearTimeout(this.sTimeout);
        this.gotoContact()
    }

    countdown(minutes, seconds, _router, id) {
        var element, endTime, hours,msLeft, mins, time;
        function twoDigits(n) {
            return (n <= 9 ? "0" + n : n);
        }

        function updateTimer() {
            msLeft = endTime - (+new Date);
            if (msLeft < 1000) {
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
