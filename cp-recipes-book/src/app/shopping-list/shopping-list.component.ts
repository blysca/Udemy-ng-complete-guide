import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 12),
    new Ingredient('Apples', 12)
  ];
  constructor() { }

  ngOnInit() {
  }
  
  upgradeIngredients(elem:Ingredient) {
    this.ingredients.push(elem);
  }

}
