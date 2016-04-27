import { Theme } from '../classe/theme';
import { THEMES } from '../data/mock-themes';
import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class ThemeService {
    t: Theme[];
    private _cUrl = 'http://localhost:54000/api/values/5';
    constructor(
        private http: Http) { }

    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || {};
    }
    getThemes() {
        return this.http.get('http://localhost:54000/api/theme/getThemes/')
            .map(data => data.json()); 
        /*
            this.t = [];
            this.melanger();
            return this.t;*/
    }

    melanger() {
        this.http.get('http://localhost:54000/api/theme/melanger/')
            .map(data => data.json());
        /*
            var aleatoire: number[] = [];
            var nb = Math.floor(Math.random() * THEMES.length);
            this.t.push(THEMES[nb]);
            aleatoire.push(nb);
            for (var i = 0; i < 3; i++) {
                do {
                    var nb = Math.floor(Math.random() * 6);
                } while (this.isvalid(nb, aleatoire));
                this.t.push(THEMES[nb]);
                aleatoire.push(nb);
            }*/
    }
    isvalid(nombre, aleatoire) {
        return this.http.get('http://localhost:54000/api/theme/isvalid/{nombre}/{aleatoire}/')
            .map(data => data.json());
        /*
            for (var i = 0; i < aleatoire.length; i++)
                if (aleatoire[i] == nombre)
                    return true;
            return false;*/
    }

    // See the "Take it slow" appendix
    getThemesSlowly() {
        return new Promise<Theme[]>(resolve =>
            setTimeout(() => resolve(THEMES), 2000) // 2 seconds
        );
    }

    getTheme(id: number) {
        for (var i = 0; i < THEMES.length; i++) {
            if (THEMES[i].id == id)
                return THEMES[i];
        }
    }
    getName(u: number) {
        for (var i = 0; i < THEMES.length; i++) {
            if (THEMES[i].id == u)
                return THEMES[i].text;
        }
    }

    getId(n: string) {
        for (var i = 0; i < THEMES.length; i++) {
            if (THEMES[i].text == n)
                return THEMES[i].id;
        }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
