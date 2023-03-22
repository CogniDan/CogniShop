import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
//import { FooterComponent } from './core/components/footer/footer.component';
import { GraphQLModule } from './cart/cart-ql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
//import { HomeComponent } from './home/home.component';
// import { CartComponent } from './cart/cart.component';
// import { OrderHistoryComponent } from './order-history/order-history.component';
//import { ProductComponent } from './product/product.component';
import { ContainerComponent } from './container/container.component';
import { StoreModule, provideStore } from '@ngrx/store';
// import { CartEffects } from './app.effects';
// import { cartReducer } from './app.reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';
import { OrderHistoryModule } from './order-history/order-history.module';
import { CartModule } from './cart/cart.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { HomeComponent } from './core/components/home/home.component';
import { AppShellComponent } from './core/components/app-shell/app-shell.component';
import { RootStoreModule } from './root-store/root-store.module';
// import { CartItemComponent } from './src/app/cart/components/cart-item/cart-item.component';

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
