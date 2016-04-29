import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';  // we need to import this now

@Injectable()
export class ContactService {

    private _cUrl = 'http://localhost:54000/api/values/5'; 
    constructor(
        private http: Http) { }

    getContacts(id: number, type: string) {
        return this.http.get('http://localhost:54000/api/Contact/getContacts/'+id+'/'+type)
            .map(data => data.json());
    }

    getNbContact(u: number) {
        return this.http.get('http://localhost:54000/api/Contact/getNbContact/' + u)
            .map(data => data.json());
    }

    Add(contactadd :number,user: number, u: number) {
        return this.http.get('http://localhost:54000/api/Contact/Add/'+ contactadd + '/' + user + '/' + u)
            .map(data => data.json());
    }

    Jouer(i:number) {
        return this.http.get('http://localhost:54000/api/Contact/Jouer/' + i)
            .map(data => data.json());
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
