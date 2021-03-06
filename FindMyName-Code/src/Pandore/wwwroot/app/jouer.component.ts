﻿import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';
import { ReponsesTrouve } from './classe/reponsestrouve';
import { Reponses, Mot,Jouer} from './classe/reponses';
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
    reponse: ReponsesTrouve[] = [];
    remaining: number = 0;
    Partieexiste: any;

    tabreponses: Jouer = { "id": 1, "reponses": [{ "Appellations" : [],"done":false}] };
    u: Utilisateur = { "id": 1, "name": "en attente", "photo": "fichier/logo.jpg", "mail": "en atttente", "password": "", "pays": "", "meilleurScore": 0 };
    bon: boolean;
    theme: Theme;
    sTimeout: number;
    sTimeoutBon: number;

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
        this._jouerService.getReponses(th).subscribe(data => this.tabreponses.reponses = data);
        this.sTimeout = setTimeout(() => {
            for (var i = 0; i < this.tabreponses.reponses.length; i++) {
                this.tabreponses.reponses[i].done = false;
            }
        }, 1000);


        let us = +this._routeParams.get('us');
        this._uService.getUser(us)
            .subscribe(data => this.u = data);
        this.theme = { "text": "en attente", "id": 0, "photo": "", "done": false };
        this._themeService.getTheme(th).subscribe(data => this.theme = data);
        this.starttimer();
    }
    getReponse() {
        return this.reponse;
    }
    getRemaining() {
        return this.remaining;
    }

    RemoveAccents(str) {
        var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
        var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
        str = str.split('');
        var strLen = str.length;
        var i, x;
        for (i = 0; i < strLen; i++) {
            if ((x = accents.indexOf(str[i])) != -1) {
                str[i] = accentsOut[x];
            }
        }
        return str.join('');
    }

    addTodo() {
        this.bon = false;
        if (this.task) {
            for (var i = 0; i < this.tabreponses.reponses.length; i++) {
                for (var j = 0; j < this.tabreponses.reponses[i].Appellations.length; j++) {
                    if (this.RemoveAccents(this.tabreponses.reponses[i].Appellations[j].text.toLowerCase().trim()) == this.RemoveAccents(this.task.toLowerCase().trim()) && this.tabreponses.reponses[i].done == false) {
                        this.reponse.push({ "text": this.tabreponses.reponses[i].Appellations[0].text.toLowerCase(), "done": true });
                        this.remaining++;
                        this.tabreponses.reponses[i].done = true;
                        this.bon = true;
                        this.sTimeoutBon = setTimeout(() => this.setBon(), 2000);
                    }
                }
            }
            if (this.bon != true) {
                this.bon = false;
                this.sTimeoutBon = setTimeout(() => this.setBon(), 2000);
            }
            this.task = '';
        }
    }
    starttimer() {
        this.countdown(0, 30, this._router, this.u.id);
        this.sTimeout = setTimeout(() => this.gotoContact(), 30000);
    }
    setBon() {
        this.bon = null;
    }
    ngOnDestroy() {
        clearTimeout(this.sTimeout);
        let id = +this._routeParams.get('id');
        let us = +this._routeParams.get('us');
        let th = +this._routeParams.get('th');

        this._pService.savePartie(id, us, th, this.remaining).subscribe(data => this.Partieexiste = data);

        clearTimeout(this.sTimeout);
        this.sTimeout = setTimeout(() => this.gotoContact(), 800);
    }

    countdown(minutes, seconds, _router, id) {
        var element, endTime, hours, msLeft, mins, time;
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
