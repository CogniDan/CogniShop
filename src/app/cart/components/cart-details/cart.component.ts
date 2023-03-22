import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { AppState } from '../app.model';
//import { selectCartProducts } from '../app.selectors';
//import { Product } from '../product/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  //public products$: Observable<Product[]>;
  public cartId = '';

  constructor(
    //private store: Store<AppState>
  ) {
    console.log("Opened here");
   // this.products$ = this.store.select(selectCartProducts);
   // this.store.select(state => state.cart.id).subscribe(id => this.cartId = id);
  }
  
  ngOnInit() {
  }
}
