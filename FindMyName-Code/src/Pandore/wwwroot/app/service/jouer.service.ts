import { Jouer } from '../classe/jouer';
import { Reponse } from '../classe/reponses';
import { Reponses } from '../data/mock-reponses';
import { Injectable } from 'angular2/core';

@Injectable()
export class JouerService {
    i: number;
    getReponse(i: number) {
        return Reponses[0].reponses[i].text;
    }

    getDone(i: number) {
        return Reponses[0].reponses[i].done;
    }

    setDone(i: number, bool: boolean) {
        Reponses[0].reponses[i].done == bool;
    }

    getReponses(id: number) {
        for (this.i = 0; this.i < Reponses.length; this.i++) {
            if (Reponses[this.i].id == id)
                return Reponses[this.i];
        }
    }
    getTaille(i : number) {
        return Reponses[i].reponses.length;
    }
}
