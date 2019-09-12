import {Component, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('f', {static: true}) form;
  
  constructor(
    private slService: ShoppingListService
  ) {
  }
  
  ngOnInit() {
  }
  
  onAddItem(form: NgForm) {
    const value = form.value;
    console.log('*** form  ', this.form);
    this.slService.addIngredient(new Ingredient(value.name, value.amount));
    
    this.clearForm();
  }
  
  clearForm() {
    this.form.reset();
  }
  
}
