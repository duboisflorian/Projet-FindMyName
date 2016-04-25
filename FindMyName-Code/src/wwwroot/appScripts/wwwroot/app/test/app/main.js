var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
// Add all operators to Observable
require('rxjs/Rx');
var wiki_component_1 = require('./wiki/wiki.component');
var wiki_smart_component_1 = require('./wiki/wiki-smart.component');
var toh_component_1 = require('./toh/toh.component');
browser_1.bootstrap(wiki_component_1.WikiComponent);
browser_1.bootstrap(wiki_smart_component_1.WikiSmartComponent);
browser_1.bootstrap(toh_component_1.TohComponent, [http_1.HTTP_PROVIDERS]);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=main.js.map