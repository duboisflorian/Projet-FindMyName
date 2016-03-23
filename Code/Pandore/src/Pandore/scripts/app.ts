import {Component} from 'angular2/core';
import {ShoppingListConponent} from "./shopping-list.component";
@Component({
    selector: 'my-app',
    template: `
        test
        <shopping-list></shopping-list>
`, directives: [ShoppingListConponent]
})
export class AppComponent { }