import { Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';

@Injectable()
export class JouerService {

    constructor(
        private http: Http) { }

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
