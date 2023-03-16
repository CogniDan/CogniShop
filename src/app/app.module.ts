import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GraphQLModule } from './cart-ql/graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductComponent } from './product/product.component';
import { ContainerComponent } from './container/container.component';
import { StoreModule, provideStore } from '@ngrx/store';
import { CartEffects } from './app.effects';
import { cartReducer } from './app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    OrderHistoryComponent,
    ProductComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    StoreModule.forRoot({ cart: cartReducer }),
    EffectsModule.forRoot([CartEffects])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
