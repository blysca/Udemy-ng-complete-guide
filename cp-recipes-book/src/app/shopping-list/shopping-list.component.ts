import { Component, OnInit } from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    
    this.shoppingListService.addedIngredient
      .subscribe(
        (ingredient: Ingredient) => {
          console.log('*** ingredient.subscribe ', ingredient);
          this.shoppingListService.addIngredient(ingredient);
          this.ingredients = this.shoppingListService.getIngredients();
          //this.ingredients.push(ingredient);
          console.log('*** this.ingredients ',this.ingredients);
          console.log('*** getIngredients ', this.shoppingListService.getIngredients());
        }
      )
  }
}
