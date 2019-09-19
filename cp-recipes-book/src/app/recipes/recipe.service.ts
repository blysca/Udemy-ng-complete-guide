import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

import * as ShoppingListActions from '../shopping-list/store/shoppingt-list.actions';
import * as fromShoppingList from '../shopping-list/store/shoppingt-list.reducer';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  
  /*private recipes: Recipe[] = [
    new Recipe('Beef Wellington',
      'Beef Wellington is a preparation of fillet steak coated with pâté (often pâté de foie gras) and duxelles, which is then wrapped in parma ham, puff pastry and baked. Some recipes include wrapping the coated meat in a crêpe to retain the moisture and prevent it from making the pastry soggy.',
      'https://upload.wikimedia.org/wikipedia/commons/a/ac/Beef_Wellington_-_Crosscut.jpg',
      [
        new Ingredient('a good beef fillet (preferably Aberdeen Angus) of around 1kg/2lb 4oz', 1),
        new Ingredient('olive oil(tbsp)', 3),
        new Ingredient('chestnut mushroom, include some wild ones if you like(g)', 250),
        new Ingredient('butter(g)', 50),
        new Ingredient(' large sprig fresh thyme', 1),
        new Ingredient('dry white wine(ml)', 100),
        new Ingredient('slices prosciutto', 12),
        new Ingredient('pack puff pastry, thawed if frozen(g)', 500),
        new Ingredient('a little flour, for dusting', 1),
        new Ingredient('2 egg yolks beaten with 1 tsp water', 1)
      ]),
    new Recipe('Alambre',
      'Alambre (About this sounda\'lambre) is a popular Mexican dish consisting of grilled beef topped with chopped bacon, bell peppers, onions, cheese, salsa and, in some variations, avocado. It is usually served with freshly made corn or flour tortillas. The most common ingredient is beef, and other kinds of meat such as chicken or pork are also used. Some recipes even substitute chopped ham or chorizo instead of the bacon. Alambres are popular in many parts of Mexico, especially in Mexico City, Oaxaca, and among Mexican-American populations across the United States.',
      'https://upload.wikimedia.org/wikipedia/commons/1/1d/Alambre.JPG',
      [
        new Ingredient('pound Top Sirloin steak cut into ½ inch cubes', 1),
        new Ingredient('Salt and pepper(teaspoons)', .5),
        new Ingredient('Lime', .5),
        new Ingredient('oz. of bacon cut into ½-in pieces (6 slices)', 6),
        new Ingredient(' cup white onion chopped (about ½ medium-size onion)', 1.25),
        new Ingredient('cup red and green peppers chopped.', 1.25),
        new Ingredient('oz. Oaxaca or Muenster cheese', 6),
        new Ingredient('medium size corn tortillas or 8 medium-size flour', 12),
        new Ingredient('tortillas', 8)
      ]),
    new Recipe('Pavlova (cake)',
      'Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova.[1] It is a meringue dessert with a crisp crust and soft, light inside, usually topped with fruit and whipped cream.[2] The name is pronounced /pævˈloʊvə/, or like the name of the dancer, which was /ˈpɑːvləvə/.',
      'https://upload.wikimedia.org/wikipedia/commons/b/bd/Christmas_pavlova.jpg',
      [
        new Ingredient('egg whites', 4),
        new Ingredient('cups white sugar', 1.25),
        new Ingredient('teaspoon vanilla extract', 1),
        new Ingredient('teaspoon lemon juic', 1),
        new Ingredient('teaspoons cornstarch', 2),
        new Ingredient('pint heavy cream', 1),
        new Ingredient('kiwi, peeled and sliced', 6)
      ]),
  ];*/
  
  private recipes: Recipe[] = [];
  
  constructor(
    private slService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) {}
  
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  
  getRecipes() {
    return this.recipes.slice();
  }
  
  getRecipe(index: number) {
    return this.recipes[index];
  }
  
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }
  
  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  
  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
