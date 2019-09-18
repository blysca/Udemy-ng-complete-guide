import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {HeaderComponent} from './header/header.component';

import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {AuthModule} from './auth/auth.module';
import {shoppingListReducer} from './shopping-list/store/shoppingt-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
