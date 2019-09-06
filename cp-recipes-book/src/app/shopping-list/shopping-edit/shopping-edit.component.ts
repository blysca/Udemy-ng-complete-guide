import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  
  constructor(
    private shoppingListService: ShoppingListService
  ) {
  }
  
  ngOnInit() {
  }
  
  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    this.shoppingListService.addedIngredient.emit(new Ingredient(name, amount))
    
    this.clearForm();
  }
  
  clearForm() {
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
  }
  
}
