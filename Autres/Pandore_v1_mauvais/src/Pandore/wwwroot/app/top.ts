import {Component, Input} from 'angular2/core';

@Component({
    selector: 'top',
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
                                  <li style="padding: 10px;"><img class="incone_menu" src="fichier/Portrait.png" /><span style="color:white;"> Bonjours {{joueur}}</span> </li>
                                  <li><a href="#"><span class="glyphicon glyphicon glyphicon-off"></span></a></li>
                              </ul>
                          </div>
                  </div>
              </div>
               </div>         
           </nav>
`
})
export class Top {
    /*
si joueur 2
joueur = "eldi";
*/
    joueur = "florian";
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

/*    <div class="scrollmagic-pin-spacer" data-scrollmagic-pin-spacer="" style="top: auto; left: auto; bottom: auto; right: auto; margin: 25px 0px; display: block; position: relative; box-sizing: content-box; min-height: 51px; height: auto; padding-top: 0px; padding-bottom: 0px;">
        <nav style="position: relative; margin: auto; top: 0px; left: 0px; bottom: auto; right: auto; box-sizing: border-box; width: 100%;" class="menu navbar navbar-inverse" role="navigation">
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
                                <li style="padding: 10px;"><img class="incone_menu" src="/fichier/Portrait.png" /><span style="color:white;" class="nom"> Bonjour {{joueur}} </span> </li>
                                <li><a href="#"><span class="glyphicon glyphicon glyphicon-off"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>*/