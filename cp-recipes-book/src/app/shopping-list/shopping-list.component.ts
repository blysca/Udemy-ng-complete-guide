import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
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
    private loggingService: LoggingService,
    private store: Store<fromShoppingList.AppState>
  ) {
  }
  
  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    this.loggingService.printLog('ShoppingListComponent ngOnInit');
    
  }
  
  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
