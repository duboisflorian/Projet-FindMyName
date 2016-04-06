import { Utilisateur } from './utilisateur';
import { UTILISATEURS } from './mock-utilisateurs';
import { Injectable } from 'angular2/core';

@Injectable()
export class UtilisateurService {
    i: number;
    getUtilisateurs() {
        return Promise.resolve(UTILISATEURS);
    }

    // See the "Take it slow" appendix
    getUtilisateursSlowly() {
        return new Promise<Utilisateur[]>(resolve =>
            setTimeout(() => resolve(UTILISATEURS), 2000) // 2 seconds
        );
    }

    getUtilisateur(id: number) {
       /* return Promise.resolve(UTILISATEURS).then(
            utilisateurs => utilisateurs.filter(utilisateur => utilisateur.id === id)[0]
        );*/
        for (this.i = 0; this.i < UTILISATEURS.length; this.i++) {
            if (UTILISATEURS[this.i].id == id)
                return UTILISATEURS[this.i];
        }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/