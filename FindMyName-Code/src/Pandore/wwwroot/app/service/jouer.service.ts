import { Jouer } from '../classe/jouer';
import { Reponse } from '../classe/reponses';
import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class JouerService {
    i: number;
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
    getReponse(i: number) {
        return this.http.get('http://localhost:54000/api/Jouer/getReponse/' + i)
            .map(data => data.json()); 
    }

    getDone(i: number) {
        return this.http.get('http://localhost:54000/api/Jouer/getDone/' + i)
            .map(data => data.json()); 
    }

    setDone(i: number, bool: boolean) {
        return this.http.get('http://localhost:54000/api/Jouer/setDone/' + i + '/' + bool)
            .map(data => data.json()); 
    }

    getReponses(id: number) {
        return this.http.get('http://localhost:54000/api/Jouer/getReponses/' + id)
            .map(data => data.json()); 
    }
    getTaille(i: number) {
        return this.http.get('http://localhost:54000/api/Jouer/getTaille/' + i)
            .map(data => data.json()); 
    }
}
