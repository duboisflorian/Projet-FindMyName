import { Reponse } from './reponses';

export class Jouer {
    id: number;
    reponses: Reponse[];
}

export class Hero {
    constructor(
        public id: number,
        public name: string) { }
}
