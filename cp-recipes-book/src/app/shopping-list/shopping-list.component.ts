import {Component, OnDestroy, OnInit} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  
  constructor(
    private slService: ShoppingListService,
    private loggingService: LoggingService
  ) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  
    this.loggingService.printLog('ShoppingListComponent ngOnInit')
  
  }
  
  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
