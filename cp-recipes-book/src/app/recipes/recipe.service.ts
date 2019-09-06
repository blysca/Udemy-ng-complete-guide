import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Beef Wellington', 'Beef Wellington is a preparation of fillet steak coated with pâté (often pâté de foie gras) and duxelles, which is then wrapped in parma ham, puff pastry and baked. Some recipes include wrapping the coated meat in a crêpe to retain the moisture and prevent it from making the pastry soggy.', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Beef_Wellington_-_Crosscut.jpg'),
    new Recipe('Alambre', 'Alambre (About this sounda\'lambre) is a popular Mexican dish consisting of grilled beef topped with chopped bacon, bell peppers, onions, cheese, salsa and, in some variations, avocado. It is usually served with freshly made corn or flour tortillas. The most common ingredient is beef, and other kinds of meat such as chicken or pork are also used. Some recipes even substitute chopped ham or chorizo instead of the bacon. Alambres are popular in many parts of Mexico, especially in Mexico City, Oaxaca, and among Mexican-American populations across the United States.', 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Alambre.JPG'),
    new Recipe('Pavlova (cake)', 'Pavlova is a meringue-based dessert named after the Russian ballerina Anna Pavlova.[1] It is a meringue dessert with a crisp crust and soft, light inside, usually topped with fruit and whipped cream.[2] The name is pronounced /pævˈloʊvə/, or like the name of the dancer, which was /ˈpɑːvləvə/.', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Christmas_pavlova.jpg'),
  ];
  
  constructor() { }
  
  getRecipes() {
    return this.recipes.slice();
  }
}
