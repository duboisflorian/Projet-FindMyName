import { Partie } from './parti';
import { Manche } from './manche';

export var PARTIES: Partie[] = [
    {
        "id_partie": 1,
        "id_j1": 6,
        "id_j2": 2,
        "s1": 1,
        "s2": 2,
        "manche": [
            { "id_theme": 1, "s1": 10, "s2": 20},
            { "id_theme": 2, "s1": 15, "s2": 7},
            { "id_theme": 3, "s1": 10, "s2": 15}
        ]
    },
    {
        "id_partie": 1,
        "id_j1": 6,
        "id_j2": 3,
        "s1": 1,
        "s2": 3,
        "manche": [
            { "id_theme": 1, "s1": 10, "s2": 20 },
            { "id_theme": 2, "s1": 15, "s2": 7 },
            { "id_theme": 3, "s1": 10, "s2": 15 },
            { "id_theme": 4, "s1": 10, "s2": 15 }
        ]
    }
];