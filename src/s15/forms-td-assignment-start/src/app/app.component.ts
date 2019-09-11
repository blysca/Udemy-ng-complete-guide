import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formElement', {static: true}) form;
  defaultSubscription = 'advanced';
  submitted: boolean = false;
  
  formData = {
    email: '',
    subscription: '',
    pass: ''
  };
  
  onSubmit() {
    this.submitted = true;
    console.log('*** form ', this.form);
    this.formData.email = this.form.value.email;
    this.formData.subscription = this.form.value.subscription;
    this.formData.pass = this.form.value.pass;
  }
}
