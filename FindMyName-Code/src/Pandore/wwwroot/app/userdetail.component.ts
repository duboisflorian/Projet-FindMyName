import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
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
    selectPays: string = "";
    nbparties: number;
    theme_favori: string = "";
    theme_favori2: any;
    nbAmi: number;
    nbv: number=0;
    nbd: number=0;
    pays = ['France','Allemagne','Chine','Japon','Etats-Unis','Royaume-Uni','Canada'];
    photo: any;
    pays2: any;
    Message: any;
    Message2: any;
    sTimeout: number;
    u2: Utilisateur = { "id": 1, "name": "en attente", "photo": "fichier/logo.jpg", "mail": "en atttente", "password": "", "pays": "", "meilleurScore": 0 };
    phototext: string = "";

    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _pService: PartieService,
        private _cService: ContactService,
        private _uService: UtilisateurService) { }
        


    ngOnInit() {
        let us = +this._routeParams.get('us');
        this._uService.getUser(us)
            .subscribe(data => this.u2 = data);

        this._pService.getnbParties(us).subscribe(data => this.nbparties = data);
        this._pService.getThemeFavori(us).subscribe(data => this.theme_favori2 = data);
        this.sTimeout = setTimeout(() => this.theme_favori = this.theme_favori2.text, 900);
        this.selectPhoto = "fichier/logo.jpg";
        this._uService.getPhoto(us)
            .subscribe(data => this.photo = data);

        this.sTimeout = setTimeout(() => {

        this.selectPhoto = this.photo.text;
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
            } }, 800);

        this._uService.getPays(us)
            .subscribe(data => this.pays2 = data);
        this.sTimeout = setTimeout(() => { this.selectPays = this.pays2.text },800);

        this._cService.getNbContact(us)
            .subscribe(data => this.nbAmi = data);

        this._pService.getNbV(us).subscribe(data => this.nbv = data);
        this._pService.getNbD(us).subscribe(data => this.nbd = data);
    }

    gotoDeco() {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    }
    gotoContact() {
        this._router.navigate(['Contact', { us: this.u2.id }]);
    }
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u2.id }]);
    }
    modifmdp(id: number) {

        if (id === undefined) {
            id = this.u2.id;
        }

        this._uService.Same_mdp(id, this.password).subscribe(data => this.Message2 = data);
        this.sTimeout = setTimeout(() => alert(this.Message2.text), 600);
    }

    loadListPhoto() {
        let us = +this._routeParams.get('us');

        this._uService.changePhoto(this.u2.id, this.selectPhoto)
            .subscribe(data => this.Message = data);
        this.sTimeout = setTimeout(() => this._uService.getUser(us)
            .subscribe(data => this.u2 = data), 600);
        this.phototext = "";
        
    }
    changePhoto() {
        this.u2.photo = "fichier/" + this.selectPhoto +".jpg";
            this.phototext = "achanger";
    }
    changePays() {

        this._uService.changePays(this.u2.id, this.selectPays)
            .subscribe(data => this.Message2 = data);
        this.sTimeout = setTimeout(() => alert(this.Message2.text), 500);
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
