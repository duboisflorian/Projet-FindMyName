import { Utilisateur } from '../classe/utilisateur';
import { UTILISATEURS } from '../data/mock-utilisateurs';
import { Injectable } from 'angular2/core';
import { ThemeService } from '../service/theme.service';
import { PartieService } from '../service/partie.service';

@Injectable()
export class UtilisateurService {

    constructor(
        private _pService: PartieService,
        private _tService: ThemeService) { }

    getUtilisateurs() {
        return Promise.resolve(UTILISATEURS);
    }


    getUtilisateur(id: number) {
        /* return Promise.resolve(UTILISATEURS).then(
             utilisateurs => utilisateurs.filter(utilisateur => utilisateur.id === id)[0]
         );*/
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].id == id)
                return UTILISATEURS[i];
        }
    }

    verificationConnexion(mail: string, password: string) {
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].mail == mail && UTILISATEURS[i].password == password)
                return UTILISATEURS[i];
        }
    }

    verificationMailExist(mail: string) {
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].mail == mail)
                return true;
        }

        return false;
    }

    Same_mdp(id: number, password: string) {
        alert("id " + id);
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].id == id) {
                if (UTILISATEURS[i].password == password) {
                    alert("password " + password);
                    return true;
                }
                else {
                    UTILISATEURS[i].password = password;
                    alert("password " + password);
                    return false;
                }

            }
        }
    }

    getlastid() {
        return UTILISATEURS[UTILISATEURS.length - 1].id;
    }

    ajouterUtilisateur(name: string, mail: string, password: string) {
        UTILISATEURS.push({ "id": this.getlastid() + 1, "name": name, "photo": "fichier/logo.jpg", "mail": mail, "password": password, "pays": "France","meilleurScore":0 })
        return this.getlastid();
    }


    getOnlineutilisateur() {
        return Math.floor(Math.random() * (UTILISATEURS.length - 1) + 1);
    }

    getName(u: number) {
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].id == u)
                return UTILISATEURS[i].name;
        }
    }

    ChangerMeilleurScore(u: number, score: number) {
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].id == u)
                if (UTILISATEURS[i].meilleurScore < score)
                    UTILISATEURS[i].meilleurScore = score;
        }
    }

        getPhoto(u:number){
        for (var i = 0; i < UTILISATEURS.length; i++) {
            if (UTILISATEURS[i].id == u)
                return UTILISATEURS[i].photo;
        }
    }

}
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
