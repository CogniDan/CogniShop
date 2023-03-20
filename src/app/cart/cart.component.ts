import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.model';
import { selectCartProducts } from '../app.selectors';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.products$ = this.store.select(selectCartProducts);
  }
  
  ngOnInit() {
  }
}
