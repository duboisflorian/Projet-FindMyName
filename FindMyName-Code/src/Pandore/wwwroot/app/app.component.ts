import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { AmisComponent } from './amis.component';
import { AmiService } from './ami.service';
import { ThemeService } from './theme.service';
import { UtilisateurService } from './utilisateur.service';
import { JouerService } from './jouer.service';
import { JouerChoixComponent } from './jouer-choix.component';
import { JouerComponent } from './jouer.component';
import { CoComponent } from './co.component';
import { InComponent } from './in.component';
import { HomeComponent } from './home.component';
import { UserdetailComponent } from './userdetail.component';
import { OnlineComponent } from './online.component';

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    <footer class="hidden-xs">            
        2016 © Find My Name Game. All right reserved. <br /> All trademarks referenced herein are the properties of their respective owners     
    </footer>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        AmiService,
        ThemeService,
        UtilisateurService,
        JouerService
    ]
})
@RouteConfig([
        {
            path: '/home',
            name: 'Home',
            component: HomeComponent,
            useAsDefault: true
        },
    {
        path: '/co',
        name: 'Co',
        component: CoComponent
        },
    {
        path: '/in',
        name: 'In',
        component: InComponent
    },
    {
        path: '/amis/:us',
        name: 'Amis',
        component: AmisComponent
    },
    {
        path: '/ud/:us',
        name: 'Userdetail',
        component: UserdetailComponent
    },
    {
        path: '/online/:us',
        name: 'Online',
        component: OnlineComponent
    },
     {
         path: '/choix/:us/:id',
        name: 'JouerChoix',
        component: JouerChoixComponent
    },
     {
         path: '/parti/:us/:id/:th',
         name: 'Jouer',
         component: JouerComponent
     }
])
export class AppComponent {
    title = 'florian';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/