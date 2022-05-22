import { component } from "src/lib/core/components/component";
import { categorysrvimpl } from "src/services/categories/categorysrcimpl";
import { Component } from "@angular/core";

@Component({
    selector : 'app-categories',
    templateUrl: 'category.component.html'
})

export class CategoryComponent extends component{
    constructor(service : categorysrvimpl){
        super(service);
    }

}