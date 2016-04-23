import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { RouteParams } from 'angular2/router';
import { UTILISATEURS } from './data/mock-utilisateurs';
import { Contact } from './classe/contact';
import { ContactService } from './service/contact.service';
import { UtilisateurService } from './service/utilisateur.service';
import { JouerChoixComponent } from './jouer-choix.component';
import { Utilisateur } from './classe/utilisateur';
import { Partie } from './classe/partie';
import { Manche } from './classe//manche';
import { PartieService } from './service/partie.service';
import {RecherchePipe} from './recherche-pipe';


@Component({
    selector: 'my-contact',
    pipes: [RecherchePipe],
    templateUrl: 'app/contact.component.html'
})
export class ContactComponent implements OnInit {
    contacts: Contact[];
    selectedContact: Contact;
    selectedUser: Utilisateur;
    contactadd: number;
    utilisateurs: Utilisateur;
    t: Contact;
    u: Utilisateur;
    parties_en_cours: Partie[];
    en_cours: boolean;
    partie_en_cours: Partie;
    victoire: number = 0;
    defaite: number = 0;
    historique: Partie[];
    selectedDetails: Partie;
    searchFriend: string = '';
    type: string = '';
    errorMessage: string;
    tt: string;

    constructor(
        private _router: Router,
        private _contactService: ContactService,
        private _pService: PartieService,
        private _routeParams: RouteParams,
        private _uService: UtilisateurService) { }


    getContacts() {
        this.contacts = this._contactService.getContacts(this.u.id, this.type);
    }
    gotoDetail() {
        this._router.navigate(['Userdetail', { us: this.u.id }]);
    }

    UserD(id: number) {
        this.parties_en_cours = this._pService.getPartiesEnCours(id);
    }

    prompt_add() {
        var val;
        val = prompt('Entrer un id', '');
        this.contactadd = parseInt(val);
        if (val != null) {
            this.addAmi();
            this.getContacts();
        }
    }

    ngOnInit() {
        this._contactService.getNom().subscribe(
            t => this.tt = t,
            error => this.errorMessage = <any>error);
        let us = +this._routeParams.get('us');
        this.u = this._uService.getUtilisateur(us);
        this.UserD(us);
        this.selectedContact = null;
        this.type = 'ami';
        this.getContacts();
    }

    showDetails(h: Partie) {
        this.selectedContact = null;
        this.selectedDetails = h;
    }

    onSelect(contact: Contact) {
        this.selectedContact = contact;
        this.selectedDetails = null;
        
        // JS: Modifie le HTML pour montrer quel contact est afficher à l'utilisateur
        var ListElem = document.getElementsByClassName("active");
        for (var z = 0; z < ListElem.length; z++) {
            ListElem[z].className = "";
        }
        document.getElementById(contact.id.toString()).className = "active";
        // Fin JS

        this.en_cours = this._pService.getEn_Cours(this.u.id, contact.id);
        if (this.en_cours == true) {
            this.partie_en_cours = this._pService.getPartieEnCours(this.u.id, contact.id);
        } else {
            this.historique = this._pService.getHistorique(this.u.id, contact.id);
            this.victoire = this._pService.getNbVictoire(this.u.id, contact.id);
            this.defaite = this._pService.getNbDefaite(this.u.id, contact.id);
        }
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
                    if (this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s1 == null || this.parties_en_cours[i].manche[this.parties_en_cours[i].manche.length - 1].s2 == null) {
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
        if (this.en_cours == false)
            this._router.navigate(['JouerChoix', { us: this.u.id, id: this.selectedContact.id }]);

        if (this.en_cours == true) {
            if (p.manche[p.manche.length - 1].s1 == null || p.manche[p.manche.length - 1].s2 == null) {
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
        if (this.utilisateurs = this._uService.getUtilisateur(this.contactadd)) {
            if ((this.t = this._contactService.getAmiExiste(this.contactadd, this.u.id)) || this.contactadd == this.u.id) {
                alert("cette personne est déjà dans tes amis");
                this.contactadd = null;
            } else {
                if (( this._contactService.getOnlineExiste(this.contactadd, this.u.id))) {
                    this._contactService.addAmiOnline(this.utilisateurs, this.u.id);
                    this.contactadd = null;
                } else {
                    this._contactService.addAmi(this.utilisateurs, this.u.id);
                    this.contactadd = null;
                }
            }
        } else {
            alert("cette personne n'existe pas");
            this.contactadd = null;
        }
    }

    jouer() {
        var b = false;
        var r;
        for (var i = 0; i < 200; i++) {
            r = this._uService.getOnlineutilisateur();
            if (!this._contactService.getOnlineExiste(r, this.u.id)) {
                this._contactService.addOnline(this._uService.getUtilisateur(r), this.u.id);
                this._router.navigate(['JouerChoix', { us: this.u.id, id: r }]);
                b = true;
                break;
            }
        }

        if (!b) { alert("Aucun joueur trouvé pour le moment. Nous sommes désolé."); }
    }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
