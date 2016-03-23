import {Component} from "angular2/core";
import {ShoppingListComponent} from "./shopping-list.component";
@Component({
    selector: "my-app",
    template: `
        test
        <shopping-list></shopping-list>
`, directives: [ShoppingListComponent]
})
export class AppComponent { }