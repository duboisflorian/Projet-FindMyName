var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
var http_1 = require('angular2/http');
// Add all operators to Observable
require('rxjs/Rx');
browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=main.js.map