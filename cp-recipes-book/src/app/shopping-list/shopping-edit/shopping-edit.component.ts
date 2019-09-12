import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  /*@ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;*/
  
  @ViewChild('shoppingEditForm', {static: true}) form;
  
  constructor(
    private slService: ShoppingListService
  ) {
  }
  
  ngOnInit() {
  }
  
  onSubmit() {
    console.log('*** form  ', this.form);
    const name = this.form.value.name;
    const amount = this.form.value.amount;
    this.slService.addIngredient(new Ingredient(name, amount));
    
    this.clearForm();
  }
  
  clearForm() {
    this.form.reset();
  }
  
}
