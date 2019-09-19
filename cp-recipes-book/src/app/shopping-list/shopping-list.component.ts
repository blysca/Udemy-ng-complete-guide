import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {LoggingService} from '../logging.service';

import * as fromShoppingList from './store/shoppingt-list.reducer';
import * as ShoppingListActions from './store/shoppingt-list.actions';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;
  
  constructor(
    private slService: ShoppingListService,
    private loggingService: LoggingService,
    private store: Store<fromShoppingList.AppState>
  ) {
  }
  
  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    
    /*this.ingredients = this.slService.getIngredients();
    
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );*/
    
    this.loggingService.printLog('ShoppingListComponent ngOnInit');
    
  }
  
  onEditItem(index: number) {
    // this.slService.startedEditing.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
