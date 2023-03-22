import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cartReducer } from './app.reducers';
import { CartEffects } from './app.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ cart: cartReducer }),
    EffectsModule.forRoot([CartEffects]),
  ],
  exports:[
    StoreModule,
    EffectsModule
  ]
})
export class RootStoreModule { }
