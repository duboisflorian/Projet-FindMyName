import { Manche } from './manche';

export class Partie {
    id_partie: number;
    id_j1: number;
    id_j2: number; 
    j1: string;
    j2: string; 
    s1: number;
    s2: number;
    player: number;
    manche: Manche[];
}
