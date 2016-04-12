import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { UTILISATEURS } from './data/mock-utilisateurs';
import { UtilisateurService } from './service/utilisateur.service';
import { Utilisateur } from './classe/utilisateur';
import { PartieService } from './service/partie.service';
import { ContactService } from './service/contact.service';

@Component({
    selector: 'my-userdetail',
    templateUrl: 'app/userdetail.component.html'
})
export class UserdetailComponent implements OnInit {
    
    utilisateurs: Utilisateur;
    u: Utilisateur;
    password: string;
    id: number;
    i: number;
    selectPhoto: string;
    selectTheme: string;
    selectPays: string = "France";
    nbparties: number;
    theme_favori: string;
    nbAmi: number;

    pays = ['France','Allemagne','Chine','Japon','Etats-Unis','Royaume-Uni','Canada'];

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _pService: PartieService,
        private _cService: ContactService,
        private _uService: UtilisateurService) { }
        


    ngOnInit() {
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.nbparties = this._pService.getnbParties(us);
        this.theme_favori = this._pService.getThemeFavori(us);
        this.selectPhoto = this._uService.getPhoto(us);
        if (this.selectPhoto == "fichier/logo.jpg") {
            this.selectPhoto = "logo";
        }
        else if (this.selectPhoto == "fichier/arsenal.jpg") {
            this.selectPhoto = "arsenal";
        }
        else if (this.selectPhoto == "fichier/barca.jpg") {
            this.selectPhoto = "barca";
        }
        else if (this.selectPhoto == "fichier/psg.jpg") {
            this.selectPhoto = "psg";
        }
        else if (this.selectPhoto == "fichier/ol.jpg") {
            this.selectPhoto = "ol";
        }
        //alert("Photo :" + this.selectPhoto);

        this.selectPays = this._uService.getPays(us);
        //alert("Pays :" + this.selectPays);

        this.nbAmi = this._cService.getNbContact(us);
        //alert("nombre de contact : " + this.nbAmi);
    }

    gotoDeco() {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    }
    gotoContact() {
        this._router.navigate(['Contact', { us: this.u.id }]);
    }
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }
    modifmdp(id: number) {

        if (id === undefined) {
            id = this.u.id;
        }
        
        if (this._uService.Same_mdp(id, this.password)) {
            alert("le mot de passe est identique");
            //alert(id);

        }
        else {
            alert("Le mot de passe a bien été changé");
            
        }
    }

    loadListPhoto() {
        //alert(this.u.photo);
        for (this.i = 0; this.i < UTILISATEURS.length; this.i++) {
            if (UTILISATEURS[this.i].id == this.u.id) {
                UTILISATEURS[this.i].photo = 'fichier/' + this.selectPhoto + '.jpg';
            }
        }
        alert("Photo changée");

    }

    changePays() {
        for (this.i = 0; this.i < UTILISATEURS.length; this.i++) {
            if (UTILISATEURS[this.i].id == this.u.id) {
                UTILISATEURS[this.i].pays = this.selectPays;
            }
        }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/