"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var contact_service_1 = require('./service/contact.service');
var theme_service_1 = require('./service/theme.service');
var utilisateur_service_1 = require('./service/utilisateur.service');
var jouer_service_1 = require('./service/jouer.service');
var jouer_choix_component_1 = require('./jouer-choix.component');
var jouer_component_1 = require('./jouer.component');
var co_component_1 = require('./co.component');
var in_component_1 = require('./in.component');
var home_component_1 = require('./home.component');
var userdetail_component_1 = require('./userdetail.component');
var contact_component_1 = require('./contact.component');
var partie_service_1 = require('./service/partie.service');
var http_1 = require('angular2/http');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'florian';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <router-outlet></router-outlet>\n    <footer class=\"hidden-xs\">            \n        2016 \u00A9 Find My Name Game. All right reserved. <br /> All trademarks referenced herein are the properties of their respective owners     \n    </footer>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                contact_service_1.ContactService,
                theme_service_1.ThemeService,
                utilisateur_service_1.UtilisateurService,
                jouer_service_1.JouerService,
                partie_service_1.PartieService
            ]
        }),
        router_1.RouteConfig([
            {
                path: '/home',
                name: 'Home',
                component: home_component_1.HomeComponent,
                useAsDefault: true
            },
            {
                path: '/co',
                name: 'Co',
                component: co_component_1.CoComponent
            },
            {
                path: '/in',
                name: 'In',
                component: in_component_1.InComponent
            },
            {
                path: '/contact/:us',
                name: 'Contact',
                component: contact_component_1.ContactComponent
            },
            {
                path: '/ud/:us',
                name: 'Userdetail',
                component: userdetail_component_1.UserdetailComponent
            },
            {
                path: '/choix/:us/:id',
                name: 'JouerChoix',
                component: jouer_choix_component_1.JouerChoixComponent
            },
            {
                path: '/parti/:us/:id/:th',
                name: 'Jouer',
                component: jouer_component_1.JouerComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map