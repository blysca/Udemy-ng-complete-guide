import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  
  @Output() createShoppingItem = new EventEmitter<Ingredient>();
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  addIngredient() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.createShoppingItem.emit(new Ingredient(name, amount))
    
    this.clearForm();
  }
  
  clearForm() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
    //new Ingredient('Tomatoes', 12)
  }
  
}
