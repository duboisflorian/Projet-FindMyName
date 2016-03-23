var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var ShoppingListComponent = (function () {
    function ShoppingListComponent() {
        this.shoppingListItems = [
            { name: "Milk" },
            { name: "Sugar" },
            { name: "Bread" },
        ];
        this.selectedItem = { name: "" };
    }
    ShoppingListComponent.prototype.onItemClicked = function (shoppingListItem) {
        this.selectedItem = shoppingListItem;
    };
    ShoppingListComponent.prototype.onAddItem = function (shoppingListItem) {
        this.shoppingListItems.push({ name: shoppingListItem.value });
    };
    ShoppingListComponent.prototype.onDeleteItem = function () {
        this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
    };
    ShoppingListComponent = __decorate([
        core_1.Component({
            selector: "shopping-list",
            template: "\n    <ul>\n        <li *ngFor=\"#shoppingListItem of shoppingListItems\" (click)=onItemClicked(shoppingListItem)\">{{shoppingListItem.name}}\n        </li>\n    </ul>\n<input type=\"text\" [(ngModel)]=\"selectedItem.name\">\n<button (click)=\"onDeleteItem()\">Delete Item</button>\n<input type=\"text\" #shoppingListItem>\n<button (click)=\"onAddItem(shoppingListItem\">Add</button>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], ShoppingListComponent);
    return ShoppingListComponent;
})();
exports.ShoppingListComponent = ShoppingListComponent;
//# sourceMappingURL=shopping-list.component.js.map