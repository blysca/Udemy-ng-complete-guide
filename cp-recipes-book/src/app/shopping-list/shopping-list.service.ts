import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  addedIngredient = new EventEmitter<Ingredient>();
  
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 12),
    new Ingredient('Apples', 12)
  ];
  
  constructor() { }
  
  getIngredients() {
    return this.ingredients.slice();
  }
  
  addIngredient(ingredient:Ingredient) {
    console.log('*** addIngredient ', ingredient);
    console.log('*** shop-ls-ingredients ', this.ingredients);
    this.ingredients.push(ingredient);
    console.log('*** shop-ls-ingredients ', this.ingredients);
  }
  
  
}
