import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService, IAuthResponseData} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  
  ngOnInit() {
  }
  
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    
    let authObs: Observable<IAuthResponseData>;
    
    this.isLoading = true;
    if (this.isLoginMode) {
      console.log('*** this.isLoginMode ', this.isLoginMode);
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
  
    authObs.subscribe(
      (resData) => {
        console.log('*** resData ', resData);
        this.isLoading = false;
        this.router.navigate(['./recipes']);
      },
      (errorMessage) => {
        console.log('*** error ', errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    
    form.reset();
  }
  
}
