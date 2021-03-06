﻿import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class ThemeService {
    constructor(
        private http: Http) { }

    getThemes() {
        return this.http.get('http://localhost:54000/api/theme/getThemes/')
            .map(data => data.json());
    }

    melanger() {
        this.http.get('http://localhost:54000/api/theme/melanger/')
            .map(data => data.json());

    }
    isvalid(nombre, aleatoire) {
        return this.http.get('http://localhost:54000/api/theme/isvalid/' + nombre + '/' + aleatoire)
            .map(data => data.json());
    }
    getTheme(id: number) {
        return this.http.get('http://localhost:54000/api/theme/getTheme/' + id)
            .map(data => data.json());
    }
    getName(u: number) {
        return this.http.get('http://localhost:54000/api/theme/getName/' + u)
            .map(data => data.json());
    }

    getId(n: string) {
        return this.http.get('http://localhost:54000/api/theme/getId/' + n)
            .map(data => data.json());
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
