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
var http_1 = require('angular2/http');
var Subject_1 = require('rxjs/Subject');
var wikipedia_service_1 = require('./wikipedia.service');
var WikiSmartComponent = (function () {
    function WikiSmartComponent(_wikipediaService) {
        var _this = this;
        this._wikipediaService = _wikipediaService;
        this._searchTermStream = new Subject_1.Subject();
        this.items = this._searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this._wikipediaService.search(term); });
    }
    WikiSmartComponent.prototype.search = function (term) { this._searchTermStream.next(term); };
    WikiSmartComponent = __decorate([
        core_1.Component({
            selector: 'my-wiki-smart',
            template: "\n    <h1>Smarter Wikipedia Demo</h1>\n    <p><i>Fetches when typing stops</i></p>\n\n    <input #term (keyup)=\"search(term.value)\"/>\n\n    <ul>\n      <li *ngFor=\"#item of items | async\">{{item}}</li>\n    </ul>\n  ",
            providers: [http_1.JSONP_PROVIDERS, wikipedia_service_1.WikipediaService]
        }), 
        __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
    ], WikiSmartComponent);
    return WikiSmartComponent;
})();
exports.WikiSmartComponent = WikiSmartComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=wiki-smart.component.js.map