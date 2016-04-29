import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { Contact, ContactViewModel } from './classe/contact';
import { ContactService } from './service/contact.service';
import { UtilisateurService } from './service/utilisateur.service';
import { JouerChoixComponent } from './jouer-choix.component';
import { Utilisateur } from './classe/utilisateur';
import { Partie } from './classe/partie';
import { Manche } from './classe//manche';
import { PartieService } from './service/partie.service';
import {RecherchePipe} from './recherche-pipe';
import {Observable}     from 'rxjs/Observable';
import { Theme } from './classe/theme';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Res,ResID} from './classe/res';

@Component({
    selector: 'my-contact',
    pipes: [RecherchePipe],
    providers: [HTTP_PROVIDERS],
    templateUrl: 'app/contact.component.html'
})
export class ContactComponent implements OnInit {
    contacts: ContactViewModel[] = new Array<ContactViewModel>();
    selectedContact: ContactViewModel;
    selectedUser: Utilisateur;
    contactadd: number;
    utilisateurs: Utilisateur;
    t: any;
    u: Utilisateur = { "id": 1, "name": "en attente", "photo": "fichier/logo.jpg", "mail": "en atttente", "password": "", "pays": "", "meilleurScore": 0 };
    parties_en_cours: Partie[];
    en_cours: any;
    partie_en_cours: Partie = { "id_partie": 0, "id_j1": 0, "id_j2": 0, "j1": "", "j2": "", "s1": 0, "s2": 0, "player": 0, "manche": [{ "id_theme": 0, "theme": "", "s1": 0, "s2": 0 }] };
    victoire: any;
    defaite: any;
    historique: Partie[];
    selectedDetails: Partie;
    searchFriend: string = '';
    type: string = '';
    errorMessage: string = 'rien';
    tt: Theme;
    objectData: any;
    addmessage: any;
    sTimeout: number;
    sTimeout2: number;
    jouermessage: any;

    constructor(
        private _router: Router,
        private _contactService: ContactService,
        private _pService: PartieService,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService) { }


    getContacts() {
        this._contactService.getContacts(this.u.id, this.type)
            .subscribe(data => this.contacts = data);
    }
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }

    UserD(id: number) {
        this._pService.getPartiesEnCours(id).subscribe(data => this.parties_en_cours = data);
    }

    prompt_add() {
        var val;
        val = prompt('Entrer un id', '');
        this.contactadd = parseInt(val);
        if (val != null) {
            this.addAmi();
            this.sTimeout = setTimeout(() => alert(this.addmessage.text), 500);
            this.sTimeout = setTimeout(() => this.getContacts(), 600);
        }
    }

    ngOnInit() {
        let us = +this._routeParams.get('us');
        this._uService.getUser(us)
            .subscribe(data => this.u = data);
        this.UserD(us);
        this.selectedContact = null;
        this.type = 'ami';
        this.sTimeout = setTimeout(() => this.getContacts(), 300);
    }
    0
    showDetails(h: Partie) {
        this.selectedContact = null;
        this.selectedDetails = h;
    }

    onSelect(contact: ContactViewModel) {
        this.selectedContact = contact;
        this.selectedDetails = null;

        // JS: Modifie le HTML pour montrer quel contact est afficher à l'utilisateur
        var ListElem = document.getElementsByClassName("active");
        for (var z = 0; z < ListElem.length; z++) {
            ListElem[z].className = "";
        }
        document.getElementById(contact.id.toString()).className = "active";
        // Fin JS

        this._pService.getEn_Cours(this.u.id, contact.id).subscribe(data => this.en_cours = data.text);
        this.sTimeout = setTimeout(() => {
            if (this.en_cours == "encours") {
                this._pService.getPartieEnCours(this.u.id, contact.id).subscribe(data => this.partie_en_cours = data);
            } else {
                this._pService.getHistorique(this.u.id, contact.id).subscribe(data => this.historique = data);
                this._pService.getNbVictoire(this.u.id, contact.id).subscribe(data => this.victoire = data);
                this._pService.getNbDefaite(this.u.id, contact.id).subscribe(data => this.defaite = data);
            }   
        }, 300);
    }


    onSelectU() {

        // JS: Modifie le HTML pour montrer quel contact est afficher à l'utilisateur
        var ListElem = document.getElementsByClassName("active");
        for (var z = 0; z < ListElem.length; z++) {
            ListElem[z].className = "";
        }
        document.getElementById("u").className = "active";
        // Fin JS

        this.selectedContact = null;
        this.selectedDetails = null;
    }

    gotoJouer(p: Partie) {
        if (this.selectedContact == null) {
            for (var i = 0; i < this.parties_en_cours.length; i++) {
                if (this.parties_en_cours[i].id_partie == p.id_partie) {
                    if (this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s1 == -1 || this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s2 == -1) {
                        if (this.parties_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.parties_en_cours[i].id_j2, th: this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].id_theme }]);
                        else
                            this._router.navigate(['Jouer', { us: this.u.id, id: this.parties_en_cours[i].id_j1, th: this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].id_theme }]);
                    } else {
                        if (this.parties_en_cours[i].id_j1 == this.u.id)
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.parties_en_cours[i].id_j2 }]);
                        else
                            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.parties_en_cours[i].id_j1 }]);
                    }
                }
            }
        }
        if (this.en_cours == "rien")
            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.selectedContact.id }]);

        if (this.en_cours == "encours") {
            if (p.manche[p.manche.length - 1].s1 == -1 || p.manche[p.manche.length - 1].s2 == -1) {
                if (p.id_j1 == this.u.id)
                    this._router.navigate(['Jouer', { us: this.u.id, id: p.id_j2, th: p.manche[p.manche.length - 1].id_theme }]);
                else
                    this._router.navigate(['Jouer', { us: this.u.id, id: p.id_j1, th: p.manche[p.manche.length - 1].id_theme }]);
            } else {
                if (p.id_j1 == this.u.id)
                    this._router.navigate(['JouerChoix', { us: this.u.id, id: p.id_j2 }]);
                else
                    this._router.navigate(['JouerChoix', { us: this.u.id, id: p.id_j1 }]);
            }
        }
    }

    gotoDeco() {
        alert("Vous avez été déconnecté");
        this._router.navigate(['Co']);
    }
    gotoContact() {
        this.type = 'ami';
        this.getContacts();
    }
    gotoOnline() {
        this.type = 'online';
        this.getContacts();
    }
    addAmi() {
        this._contactService.Add(this.contactadd, this.contactadd, this.u.id)
            .subscribe(data => this.addmessage = data);
        this.contactadd = null;
    }

    jouer() {
        this._contactService.Jouer(this.u.id)
            .subscribe(data => this.jouermessage = data);
        this.sTimeout = setTimeout(() => { if (this.jouermessage.text == "go") { this._router.navigate(['JouerChoix', { us: this.u.id, id: this.jouermessage.id }]); } else { alert(this.jouermessage.text); } }, 1000);
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
