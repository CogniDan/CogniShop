import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './cart/cart-ql/graphql.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
  declarations: [
     AppComponent,
  ],
  imports: [
    GraphQLModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    RootStoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
