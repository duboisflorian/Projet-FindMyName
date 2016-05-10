export class Reponses {
    Appellations: Mot[];
    done: boolean;
}

export class Mot {
    text: string;
}

export class Jouer {
    id: number;
    reponses: Reponses[];
}