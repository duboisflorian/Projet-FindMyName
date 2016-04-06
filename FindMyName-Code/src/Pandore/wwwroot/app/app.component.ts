import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { AmisComponent } from './amis.component';
import { AmiService } from './ami.service';
import { ThemeService } from './theme.service';
import { JouerChoixComponent } from './jouer-choix.component';


@Component({
    selector: 'my-app',
    template: `
    <nav class="menu navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index.html" style="padding-top:0; padding-bottom:0;"> <img class="logo" style="display:inline;" src="fichier/logo.png" /> <span style="display:inline;" class="text-logo">Find My Name</span></a>
                    </div>
                    <div style="height: 1px;" aria-expanded="false" id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav navbar-right">
                            <li style="padding: 10px;"><img class="incone_menu" src="fichier/Portrait.png" /><span style="color:white;"> Bonjours {{title}}</span> </li>
                            <li><a href="#"><span class="glyphicon glyphicon glyphicon-off"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </nav>
    <div class="core">
        <router-outlet></router-outlet>
    </div>
    <footer class="hidden-xs">            
        2016 © Find My Name Game. All right reserved. <br /> All trademarks referenced herein are the properties of their respective owners     
    </footer>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        AmiService,
        ThemeService
    ]
})
@RouteConfig([
    {
        path: '/amis',
        name: 'Amis',
        component: AmisComponent,
        useAsDefault: true
     },
     {
        path: '/choix/:id',
        name: 'JouerChoix',
        component: JouerChoixComponent
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