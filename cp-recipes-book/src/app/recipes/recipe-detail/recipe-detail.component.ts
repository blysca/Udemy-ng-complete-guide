import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  manageRecipe: boolean = false;
  
  @Input() recipe: Recipe;
  
  constructor(
    private slService: ShoppingListService
  ) { }
 
  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('*** recipe = ', this.recipe);
  }
  
  addIngredientToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
