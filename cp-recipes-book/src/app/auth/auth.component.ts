import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

import {AuthService, IAuthResponseData} from './auth.service';

import {PlaceholderDirective} from '../shared/placeholder/placeholder.directive';

import {AlertComponent} from '../shared/alert/alert.component';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
  
  private closeSub: Subscription;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver : ComponentFactoryResolver,
    private store: Store<fromApp.AppState>
  ) {}
  
  ngOnInit(): void {
    this.store.select('auth').subscribe( authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
          this.showErrorAlert(this.error);
      }
    });
  }
  
  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
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
      /*console.log('*** this.isLoginMode ', this.isLoginMode);
      authObs = this.authService.login(email, password);*/
      this.store.dispatch(new AuthActions.LoginStart({email, password}))
      
      
      
    } else {
      authObs = this.authService.signup(email, password);
    }
   /*
    this.store.select('auth').subscribe( authState => {
    
    });*/
  
    /*authObs.subscribe(
      (resData) => {
        console.log('*** resData ', resData);
        this.isLoading = false;
        this.router.navigate(['./recipes']);
      },
      (errorMessage) => {
        console.log('*** error ', errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );*/
    
    form.reset();
  }
  
  onHandleError() {
    this.error = null;
  }
  
  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    })
    
  }
}
