import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

import {Ingredient} from '../../shared/ingredient.model';

import * as ShoppingtListActions from '../store/shoppingt-list.actions.js';
import * as fromShoppingList from '../store/shoppingt-list.reducer';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;
  
  constructor(
    private store: Store<fromShoppingList.AppState>
  ) {
  }
  
  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(stateData => {
      if (stateData.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = stateData.editedIngredient;
        this.slForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        });
      } else {
        this.editMode = false;
      }
    });
  }
  
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    console.log('*** form  ', form);
    
    if (this.editMode) {
      this.store.dispatch(new ShoppingtListActions.UpdateIngredients(newIngredient));
    } else {
      this.store.dispatch(
        new ShoppingtListActions.AddIngredient(newIngredient)
      );
    }
    
    this.onClear();
  }
  
  onDelete() {
    this.store.dispatch(new ShoppingtListActions.DeleteIngredients());
    this.onClear();
  }
  
  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingtListActions.StopEdit());
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new ShoppingtListActions.StopEdit());
  }
}
